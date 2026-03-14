// Auto-generated types matching our Drizzle schema
// These provide type safety for Supabase client queries

export type Database = {
  public: {
    Tables: {
      news_articles: {
        Row: {
          id: string
          title: string
          summary: string
          content: string | null
          source_url: string | null
          source: string | null
          category: string
          image_url: string | null
          read_time: string | null
          status: "draft" | "published" | "archived"
          published_at: string
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database["public"]["Tables"]["news_articles"]["Row"], "id" | "created_at" | "updated_at" | "published_at"> & {
          id?: string
          created_at?: string
          updated_at?: string
          published_at?: string
        }
        Update: Partial<Database["public"]["Tables"]["news_articles"]["Insert"]>
        Relationships: []
      }
      glossary_terms: {
        Row: {
          id: string
          term: string
          definition: string
          category: string
          level: "beginner" | "intermediate" | "advanced"
          related_terms: string[] | null
          status: "draft" | "published" | "archived"
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database["public"]["Tables"]["glossary_terms"]["Row"], "id" | "created_at" | "updated_at"> & {
          id?: string
          created_at?: string
          updated_at?: string
        }
        Update: Partial<Database["public"]["Tables"]["glossary_terms"]["Insert"]>
        Relationships: []
      }
      companies: {
        Row: {
          id: string
          name: string
          slug: string
          description: string
          long_description: string | null
          logo_url: string | null
          website_url: string | null
          category: string
          founded_year: number | null
          headquarters: string | null
          key_products: string[] | null
          status: "draft" | "published" | "archived"
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database["public"]["Tables"]["companies"]["Row"], "id" | "created_at" | "updated_at"> & {
          id?: string
          created_at?: string
          updated_at?: string
        }
        Update: Partial<Database["public"]["Tables"]["companies"]["Insert"]>
        Relationships: []
      }
      tutorials: {
        Row: {
          id: string
          slug: string
          title: string
          description: string
          category: string
          level: "beginner" | "intermediate" | "advanced"
          duration: string
          image_url: string | null
          modules: number
          exercises: number
          available: boolean
          content: string | null
          status: "draft" | "published" | "archived"
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database["public"]["Tables"]["tutorials"]["Row"], "id" | "created_at" | "updated_at"> & {
          id?: string
          created_at?: string
          updated_at?: string
        }
        Update: Partial<Database["public"]["Tables"]["tutorials"]["Insert"]>
        Relationships: []
      }
    }
    Views: {}
    Functions: {}
    Enums: {
      content_status: "draft" | "published" | "archived"
      difficulty_level: "beginner" | "intermediate" | "advanced"
    }
  }
}
