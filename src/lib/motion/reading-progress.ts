// Barra de progreso de lectura para case studies: refleja qué porcentaje
// del <article> ya se scrolleó. No depende de prefers-reduced-motion (ver
// comentario en global.css) — es información de navegación, no una
// animación decorativa.

let articleEl: HTMLElement | null = null;
let barEl: HTMLElement | null = null;
let onScroll: (() => void) | null = null;
let onResize: (() => void) | null = null;

function update(): void {
  if (!articleEl || !barEl) return;

  const total = articleEl.offsetHeight - window.innerHeight;
  if (total <= 0) {
    barEl.style.transform = 'scaleX(0)';
    return;
  }

  const scrolled = -articleEl.getBoundingClientRect().top;
  const progress = Math.min(1, Math.max(0, scrolled / total));
  barEl.style.transform = `scaleX(${progress})`;
}

export function initReadingProgress(root: ParentNode = document): void {
  const article = root.querySelector<HTMLElement>('[data-case-study]');
  const bar = document.querySelector<HTMLElement>('[data-reading-progress]');
  if (!article || !bar) return;

  articleEl = article;
  barEl = bar;

  onScroll = update;
  onResize = update;
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize);
  update();
}

export function destroyReadingProgress(): void {
  if (onScroll) window.removeEventListener('scroll', onScroll);
  if (onResize) window.removeEventListener('resize', onResize);
  onScroll = null;
  onResize = null;
  articleEl = null;
  barEl = null;
}
