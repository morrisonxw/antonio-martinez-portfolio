// Tracking de "casos de estudio revisados", guardado en localStorage del
// visitante (nunca llega al servidor ni se comparte entre visitantes). Dos
// mitades:
//  1. Si la página actual es un case study (marcada con [data-case-study] y
//     data-project-id en CaseStudyLayout.astro), lo agrega al set de vistos.
//  2. En cualquier página con cards de proyecto ([data-project-id] en
//     ProjectCard.astro / ExperienceBlock.astro), agrega .is-visited a las
//     que ya estén en ese set, para que global.css muestre el badge.
//
// El id de proyecto es el mismo en ambos locales (ver content.config.ts),
// así que el progreso se comparte entre /proyectos y /en/projects.

const STORAGE_KEY = 'visited-projects';

function readVisited(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    // localStorage inaccesible (modo privado, storage bloqueado, etc.):
    // el sitio sigue funcionando, solo sin persistir el progreso.
    return new Set();
  }
}

function writeVisited(visited: Set<string>): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...visited]));
  } catch {
    // Ignorar: ver comentario en readVisited.
  }
}

function markCurrentCaseStudyVisited(root: ParentNode): void {
  const article = root.querySelector<HTMLElement>('[data-case-study]');
  const id = article?.dataset.projectId;
  if (!id) return;

  const visited = readVisited();
  if (visited.has(id)) return;
  visited.add(id);
  writeVisited(visited);
}

function applyVisitedBadges(root: ParentNode): void {
  const visited = readVisited();
  if (visited.size === 0) return;

  root.querySelectorAll<HTMLElement>('[data-project-id]').forEach((el) => {
    const id = el.dataset.projectId;
    if (id && visited.has(id)) {
      el.classList.add('is-visited');
    }
  });
}

export function initVisitedTracking(root: ParentNode = document): void {
  markCurrentCaseStudyVisited(root);
  applyVisitedBadges(root);
}

// Sin listeners que limpiar (no hay estado más allá de localStorage), pero
// se exporta por simetría con el resto de los módulos de motion y por si
// en el futuro necesita desuscribirse de algo antes de un page swap.
export function destroyVisitedTracking(): void {}
