// Proyectos y Sobre mí están temporalmente ocultos del sitio público
// mientras se rediseñan (ver los guards de redirect en esas páginas);
// por eso no aparecen acá fuera de `astro dev`. Volver a agregarlos cuando
// esas secciones se relancen.
export const nav = import.meta.env.DEV
  ? [
      { label: 'Proyectos', href: '/proyectos' },
      { label: 'Sobre mí', href: '/sobre-mi' },
      { label: 'Contacto', href: '/contacto' },
    ]
  : [{ label: 'Contacto', href: '/contacto' }];
