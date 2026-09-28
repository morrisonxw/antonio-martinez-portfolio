import { toString } from 'mdast-util-to-string';

// Palabras por minuto usado como base para estimar tiempo de lectura. 200
// es un promedio estándar razonable para lectura en pantalla; se redondea
// hacia arriba y nunca baja de 1 minuto, para no mostrar "0 min" en los
// casos de estudio más cortos.
const WORDS_PER_MINUTE = 200;

/**
 * Remark plugin: calcula el tiempo de lectura estimado del cuerpo MDX y lo
 * expone como `readingTime` (minutos, entero) en el frontmatter renderizado
 * (`remarkPluginFrontmatter`), disponible vía `render(entry)` en las páginas
 * que consumen la colección de proyectos.
 */
export function remarkReadingTime() {
  return (tree, file) => {
    const text = toString(tree);
    const words = text.split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));

    file.data.astro.frontmatter.readingTime = minutes;
  };
}
