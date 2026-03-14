import { pgTable, text, timestamp, boolean, integer, uuid, pgEnum } from "drizzle-orm/pg-core"

// --- Enums ---

export const contentStatusEnum = pgEnum("content_status", ["draft", "published", "archived"])
export const difficultyLevelEnum = pgEnum("difficulty_level", ["beginner", "intermediate", "advanced"])

// --- News Articles ---

export const newsArticles = pgTable("news_articles", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  summary: text("summary").notNull(),
  content: text("content"), // full article body (optional, for hosted articles)
  sourceUrl: text("source_url"),
  source: text("source"),
  category: text("category").notNull(), // "models" | "research" | "applications" | "policy" | "business"
  imageUrl: text("image_url"),
  readTime: text("read_time"),
  status: contentStatusEnum("status").default("published").notNull(),
  publishedAt: timestamp("published_at", { withTimezone: true }).defaultNow().notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
})

// --- Glossary Terms ---

export const glossaryTerms = pgTable("glossary_terms", {
  id: uuid("id").defaultRandom().primaryKey(),
  term: text("term").notNull().unique(),
  definition: text("definition").notNull(),
  category: text("category").notNull(), // "fundamentals" | "techniques" | "applications"
  level: difficultyLevelEnum("level").notNull(),
  relatedTerms: text("related_terms").array(), // array of term names
  status: contentStatusEnum("status").default("published").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
})

// --- AI Companies ---

export const companies = pgTable("companies", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull().unique(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  longDescription: text("long_description"),
  logoUrl: text("logo_url"),
  websiteUrl: text("website_url"),
  category: text("category").notNull(), // "ai-lab" | "cloud" | "startup" | "research"
  foundedYear: integer("founded_year"),
  headquarters: text("headquarters"),
  keyProducts: text("key_products").array(),
  status: contentStatusEnum("status").default("published").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
})

// --- Tutorials ---

export const tutorials = pgTable("tutorials", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // matches TutorialCategory
  level: difficultyLevelEnum("level").notNull(),
  duration: text("duration").notNull(),
  imageUrl: text("image_url"),
  modules: integer("modules").default(0).notNull(),
  exercises: integer("exercises").default(0).notNull(),
  available: boolean("available").default(false).notNull(),
  content: text("content"), // markdown content for the tutorial
  status: contentStatusEnum("status").default("published").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
})
