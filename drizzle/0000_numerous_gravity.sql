CREATE TYPE "public"."content_status" AS ENUM('draft', 'published', 'archived');--> statement-breakpoint
CREATE TYPE "public"."difficulty_level" AS ENUM('beginner', 'intermediate', 'advanced');--> statement-breakpoint
CREATE TABLE "companies" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"description" text NOT NULL,
	"long_description" text,
	"logo_url" text,
	"website_url" text,
	"category" text NOT NULL,
	"founded_year" integer,
	"headquarters" text,
	"key_products" text[],
	"status" "content_status" DEFAULT 'published' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "companies_name_unique" UNIQUE("name"),
	CONSTRAINT "companies_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "glossary_terms" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"term" text NOT NULL,
	"definition" text NOT NULL,
	"category" text NOT NULL,
	"level" "difficulty_level" NOT NULL,
	"related_terms" text[],
	"status" "content_status" DEFAULT 'published' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "glossary_terms_term_unique" UNIQUE("term")
);
--> statement-breakpoint
CREATE TABLE "news_articles" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"summary" text NOT NULL,
	"content" text,
	"source_url" text,
	"source" text,
	"category" text NOT NULL,
	"image_url" text,
	"read_time" text,
	"status" "content_status" DEFAULT 'published' NOT NULL,
	"published_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "tutorials" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"category" text NOT NULL,
	"level" "difficulty_level" NOT NULL,
	"duration" text NOT NULL,
	"image_url" text,
	"modules" integer DEFAULT 0 NOT NULL,
	"exercises" integer DEFAULT 0 NOT NULL,
	"available" boolean DEFAULT false NOT NULL,
	"content" text,
	"status" "content_status" DEFAULT 'published' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "tutorials_slug_unique" UNIQUE("slug")
);
