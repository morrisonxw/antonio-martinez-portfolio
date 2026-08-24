import { prefersReducedMotion } from './lenis';

let cleanupFns: Array<() => void> = [];

function supportsFinePointer(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;
}

// Sin JS (touch, coarse pointer, prefers-reduced-motion) las cards de
// proyecto igual tienen su group-hover:scale de siempre en CSS — esto es
// una capa encima, no un reemplazo, por eso no hay fallback que armar acá.
const MAX_TILT_DEG = 6;
const HOVER_SCALE = 1.02;
const RETURN_TRANSITION = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';

export function initTilt(root: ParentNode = document): void {
  if (prefersReducedMotion() || !supportsFinePointer()) return;

  root.querySelectorAll<HTMLElement>('[data-tilt]').forEach((card) => {
    const target = card.querySelector<HTMLElement>('[data-tilt-target]');
    if (!target) return;

    const onEnter = () => {
      target.style.transition = 'none';
    };
    const onMove = (e: MouseEvent) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      target.style.transform = `rotateX(${py * -MAX_TILT_DEG}deg) rotateY(${px * MAX_TILT_DEG}deg) scale(${HOVER_SCALE})`;
    };
    const onLeave = () => {
      target.style.transition = RETURN_TRANSITION;
      target.style.transform = '';
    };

    card.addEventListener('mouseenter', onEnter);
    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', onLeave);

    cleanupFns.push(() => {
      card.removeEventListener('mouseenter', onEnter);
      card.removeEventListener('mousemove', onMove);
      card.removeEventListener('mouseleave', onLeave);
      target.style.transition = '';
      target.style.transform = '';
    });
  });
}

export function destroyTilt(): void {
  cleanupFns.forEach((fn) => fn());
  cleanupFns = [];
}
