import { defineCollection, z, reference } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({
    pattern: ['**/*.mdx', '!**/_*.mdx'],
    base: './src/content/projects',
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().max(200),
      cover: image(),
      coverAlt: z.string(),
      tags: z.array(z.string()).default([]),
      year: z.number(),
      // Texto a mostrar en vez del año (ej. "2022–2026") cuando el proyecto
      // abarcó un rango; `year` se sigue usando para ordenar cronológicamente.
      yearLabel: z.string().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(0),
      draft: z.boolean().default(false),

      role: z.string().optional(),
      team: z.string().optional(),
      duration: z.string().optional(),
      company: z.string().optional(),
      industry: z.string().optional(),
      scope: z.array(z.string()).default([]),
      tools: z.array(z.string()).default([]),
      liveUrl: z.string().url().optional(),
      confidential: z.boolean().default(false),

      problem: z.string().optional(),
      outcome: z.string().optional(),

      // Si se define, la card enlaza directo a esta URL (ej. un portafolio externo
      // como Behance) en vez de generar una página de case study interna.
      externalUrl: z.string().url().optional(),

      ogImage: image().optional(),
      relatedProjects: z.array(reference('projects')).optional(),
    }),
});

export const collections = { projects };
