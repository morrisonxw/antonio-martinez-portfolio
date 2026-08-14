import type { CollectionEntry } from 'astro:content';

/**
 * Entrada de proyecto de cualquiera de los dos locales. Los componentes
 * compartidos (ProjectCard, ProjectMeta, ProjectNav, CaseStudyLayout,
 * ExperienceBlock) reciben una u otra colección según la página que los
 * use, pero tienen el mismo shape (`content.config.ts` comparte el schema).
 */
export type ProjectEntry = CollectionEntry<'projects'> | CollectionEntry<'projectsEn'>;
