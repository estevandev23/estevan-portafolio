import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    indications: z.array(z.string()).optional(),
    tags: z.array(z.string()),
    date: z.date(),
    image: z.array(z.string().url()),
    shortDescription: z.string(),
    url: z.object({
      public: z.string().url().optional(),
      github: z.string().url().optional()
    })
  })
})

const social = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: "./src/content/social" }),
  schema: z.object({
    url: z.string().url(),
    pathIcon: z.string(),
    name: z.string()
  })
})


export const collections = { projects, social }
