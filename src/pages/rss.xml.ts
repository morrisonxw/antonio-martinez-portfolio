import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { site } from '../content-data/site';

export async function GET(context: APIContext) {
  const projects = await getCollection('projects', ({ data }) => !data.draft && !data.externalUrl);

  return rss({
    title: `${site.name} — ${site.role}`,
    description: site.description,
    site: context.site ?? site.url,
    items: projects.map((project) => ({
      title: project.data.title,
      description: project.data.summary,
      pubDate: new Date(project.data.year, 0, 1),
      link: `/proyectos/${project.id}/`,
    })),
  });
}
