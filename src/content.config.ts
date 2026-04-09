import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default('CURATOR'),
    locale: z.enum(['tr', 'en']),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { insights };
