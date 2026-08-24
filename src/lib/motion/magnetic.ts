import { prefersReducedMotion } from './lenis';

let cleanupFns: Array<() => void> = [];

function supportsFinePointer(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

// Desplazamiento acotado a un radio chico (no "sigue" al cursor lejos de sí
// mismo, solo insinúa que reacciona) y sin transition mientras el mouse se
// mueve (para que el seguimiento se sienta 1:1, no amortiguado) — la
// transition solo se agrega al soltar, para el resorte de vuelta al centro.
const STRENGTH_X = 0.25;
const STRENGTH_Y = 0.35;
const MAX_OFFSET = 10;
const RETURN_TRANSITION = 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)';

export function initMagnetic(root: ParentNode = document): void {
  if (prefersReducedMotion() || !supportsFinePointer()) return;

  root.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const onEnter = () => {
      el.style.transition = 'none';
    };
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = clamp((e.clientX - (r.left + r.width / 2)) * STRENGTH_X, -MAX_OFFSET, MAX_OFFSET);
      const y = clamp((e.clientY - (r.top + r.height / 2)) * STRENGTH_Y, -MAX_OFFSET, MAX_OFFSET);
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    const onLeave = () => {
      el.style.transition = RETURN_TRANSITION;
      el.style.transform = '';
    };

    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);

    cleanupFns.push(() => {
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      el.style.transition = '';
      el.style.transform = '';
    });
  });
}

export function destroyMagnetic(): void {
  cleanupFns.forEach((fn) => fn());
  cleanupFns = [];
}
