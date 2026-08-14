import type { Locale } from './ui';

// Segmentos de ruta traducidos entre locales (home y slugs de proyecto no
// necesitan entrada acá: home se resuelve aparte, y los slugs de proyecto
// son el mismo string en `projects` y `projectsEn` por diseño).
const segmentEsToEn: Record<string, string> = {
  proyectos: 'projects',
  'sobre-mi': 'about',
  contacto: 'contact',
};

const segmentEnToEs: Record<string, string> = Object.fromEntries(
  Object.entries(segmentEsToEn).map(([es, en]) => [en, es]),
);

/**
 * Dado el pathname actual (en cualquiera de los dos locales) devuelve la
 * ruta equivalente en `targetLocale`. Usado por el language switcher y por
 * los hreflang alternates — única fuente de verdad para el mapeo de rutas.
 */
export function localizePath(pathname: string, targetLocale: Locale): string {
  const withoutEnPrefix = pathname.startsWith('/en') ? pathname.slice(3) : pathname;
  const segments = withoutEnPrefix.split('/').filter(Boolean);

  if (segments.length === 0) {
    return targetLocale === 'en' ? '/en' : '/';
  }

  const [first, ...rest] = segments;
  const mappedFirst =
    targetLocale === 'en' ? (segmentEsToEn[first] ?? first) : (segmentEnToEs[first] ?? first);

  const path = [mappedFirst, ...rest].join('/');
  return targetLocale === 'en' ? `/en/${path}` : `/${path}`;
}

/** Href a la página de inicio para el locale dado. */
export function homeHref(locale: Locale): string {
  return locale === 'en' ? '/en' : '/';
}

/** Href al listado de proyectos para el locale dado. */
export function projectsHref(locale: Locale): string {
  return locale === 'en' ? '/en/projects' : '/proyectos';
}

/** Href a "Sobre mí" / "About" para el locale dado. */
export function aboutHref(locale: Locale): string {
  return locale === 'en' ? '/en/about' : '/sobre-mi';
}

/** Href a "Contacto" / "Contact" para el locale dado. */
export function contactHref(locale: Locale): string {
  return locale === 'en' ? '/en/contact' : '/contacto';
}

/**
 * Href a un case study por id de proyecto. El `id` es el mismo string en
 * las colecciones `projects` y `projectsEn` (mismo nombre de archivo en
 * ambas carpetas), así que no necesita traducción — solo el segmento base.
 */
export function projectHref(locale: Locale, id: string): string {
  return locale === 'en' ? `/en/projects/${id}` : `/proyectos/${id}`;
}
