import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const stringArrayField = z
  .union([z.array(z.string()), z.string()])
  .transform((value) => (Array.isArray(value) ? value : [value]));

const documentSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  image: z.string().optional(),
  keywords: stringArrayField.optional(),
  route: z.string(),
});

const posts = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date().optional(),
        description: z.string().optional(),
        tags: stringArrayField.optional(),
        authors: stringArrayField.optional(),
        image: z.string().optional(),
        keywords: stringArrayField.optional(),
        slug: z.union([z.string(), z.number()]).optional(),
        'og-title': z.string().optional(),
        'og-image': z.string().optional(),
        draft: z.boolean().optional().default(false),
    }),
});

const reads = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/reads' }),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date().optional(),
        description: z.string().optional(),
        tags: stringArrayField.optional(),
        authors: stringArrayField.optional(),
        image: z.string().optional(),
        keywords: stringArrayField.optional(),
        slug: z.union([z.string(), z.number()]).optional(),
        'og-title': z.string().optional(),
        'og-image': z.string().optional(),
        draft: z.boolean().optional().default(false),
    }),
});

const docsPages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs-pages' }),
  schema: documentSchema,
});

const sitePages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/site-pages' }),
  schema: documentSchema,
});

export const collections = { posts, reads, docsPages, sitePages };
