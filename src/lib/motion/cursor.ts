import { prefersReducedMotion } from './lenis';

let rafId: number | null = null;
let cleanupFns: Array<() => void> = [];

function supportsFinePointer(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;
}

const INTERACTIVE_SELECTOR = 'a, button, [data-cursor]';

export function initCursor(): void {
  if (prefersReducedMotion() || !supportsFinePointer()) return;

  const dot = document.createElement('div');
  dot.className = 'mk-cursor';
  document.body.appendChild(dot);
  document.documentElement.classList.add('has-custom-cursor');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let posX = mouseX;
  let posY = mouseY;

  const onMove = (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };
  const onOver = (e: MouseEvent) => {
    if ((e.target as HTMLElement)?.closest?.(INTERACTIVE_SELECTOR)) dot.classList.add('is-active');
  };
  const onOut = (e: MouseEvent) => {
    if ((e.target as HTMLElement)?.closest?.(INTERACTIVE_SELECTOR)) dot.classList.remove('is-active');
  };

  window.addEventListener('mousemove', onMove);
  document.addEventListener('mouseover', onOver);
  document.addEventListener('mouseout', onOut);

  function tick() {
    posX += (mouseX - posX) * 0.18;
    posY += (mouseY - posY) * 0.18;
    dot.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
    rafId = requestAnimationFrame(tick);
  }
  tick();

  cleanupFns.push(() => {
    window.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseover', onOver);
    document.removeEventListener('mouseout', onOut);
    if (rafId !== null) cancelAnimationFrame(rafId);
    rafId = null;
    dot.remove();
    document.documentElement.classList.remove('has-custom-cursor');
  });
}

export function destroyCursor(): void {
  cleanupFns.forEach((fn) => fn());
  cleanupFns = [];
}
