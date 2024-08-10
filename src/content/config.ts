import { defineCollection } from 'astro:content';
import { rssSchema } from '@astrojs/rss';

const blog = defineCollection({
  schema: rssSchema,
});

const projects = defineCollection({
  schema: rssSchema,
});

export const collections = { blog, projects };