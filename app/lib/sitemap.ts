import type { MetadataRoute } from "next"
import { createServerClient } from "@/lib/supabase/server"
import type { Database } from "@/lib/supabase/types"

export type SitemapEntry = MetadataRoute.Sitemap[number]

type SitemapChangeFrequency = NonNullable<SitemapEntry["changeFrequency"]>

export type StaticRouteConfig = {
  path: string
  lastModified?: string | Date
  changeFrequency: SitemapChangeFrequency
  priority: number
}

type StaticCollectionConfig<TItem> = {
  items: TItem[]
  getPath: (item: TItem) => string
  getLastModified: (item: TItem) => string | Date | null | undefined
  changeFrequency: SitemapChangeFrequency
  priority: number
}

type SupabaseCollectionConfig<TTable extends keyof Database["public"]["Tables"]> = {
  table: TTable
  select: string
  getPath: (item: Database["public"]["Tables"][TTable]["Row"]) => string
  getLastModified: (item: Database["public"]["Tables"][TTable]["Row"]) => string | Date | null | undefined
  orderBy?: keyof Database["public"]["Tables"][TTable]["Row"] & string
  changeFrequency: SitemapChangeFrequency
  priority: number
}

type BuildSitemapOptions = {
  baseUrl: string
  staticRoutes: StaticRouteConfig[]
  staticCollections?: StaticCollectionConfig<any>[]
  supabaseCollections?: SupabaseCollectionConfig<any>[]
}

const toAbsoluteUrl = (baseUrl: string, path: string) => `${baseUrl}${path === "/" ? "" : path}`

const toSitemapEntry = (
  baseUrl: string,
  path: string,
  changeFrequency: SitemapChangeFrequency,
  priority: number,
  lastModified?: string | Date | null,
): SitemapEntry => ({
  url: toAbsoluteUrl(baseUrl, path),
  lastModified: lastModified ? new Date(lastModified) : undefined,
  changeFrequency,
  priority,
})

async function fetchPublishedRecords<TTable extends keyof Database["public"]["Tables"]>({
  table,
  select,
  orderBy,
}: Pick<SupabaseCollectionConfig<TTable>, "table" | "select" | "orderBy">) {
  const supabase = createServerClient() as any
  let query = supabase.from(table).select(select).eq("status", "published")

  if (orderBy) {
    query = query.order(orderBy, { ascending: false })
  }

  const { data, error } = await query

  if (error || !Array.isArray(data)) {
    return []
  }

  return data as Database["public"]["Tables"][TTable]["Row"][]
}

export async function buildSitemap({
  baseUrl,
  staticRoutes,
  staticCollections = [],
  supabaseCollections = [],
}: BuildSitemapOptions): Promise<MetadataRoute.Sitemap> {
  const staticEntries = staticRoutes.map((route) =>
    toSitemapEntry(baseUrl, route.path, route.changeFrequency, route.priority, route.lastModified),
  )

  const collectionEntries = staticCollections.flatMap((collection) =>
    collection.items.map((item) =>
      toSitemapEntry(
        baseUrl,
        collection.getPath(item),
        collection.changeFrequency,
        collection.priority,
        collection.getLastModified(item),
      ),
    ),
  )

  const supabaseEntries = (
    await Promise.all(
      supabaseCollections.map(async (collection) => {
        const records = await fetchPublishedRecords(collection)

        return records.map((record) =>
          toSitemapEntry(
            baseUrl,
            collection.getPath(record),
            collection.changeFrequency,
            collection.priority,
            collection.getLastModified(record),
          ),
        )
      }),
    )
  ).flat()

  return [...staticEntries, ...collectionEntries, ...supabaseEntries]
}
