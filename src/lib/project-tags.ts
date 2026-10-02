import type { ProjectEntry } from './content-types';

export function normalizeProjectTag(tag: string): string {
  return tag
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .replace(/\s+/g, ' ')
    .toLocaleLowerCase();
}

export function getProjectTagsWithCounts(projects: ProjectEntry[]) {
  const tags = new Map<string, { key: string; label: string; count: number }>();

  projects.forEach((project) => {
    const seenInProject = new Set<string>();
    project.data.tags.forEach((label) => {
      const key = normalizeProjectTag(label);
      if (!key || seenInProject.has(key)) return;
      seenInProject.add(key);
      const tag = tags.get(key);
      if (tag) tag.count += 1;
      else tags.set(key, { key, label, count: 1 });
    });
  });

  return [...tags.values()].sort((a, b) => a.label.localeCompare(b.label, undefined, { sensitivity: 'base' }));
}
