import { prefersReducedMotion } from './lenis';

let observers: IntersectionObserver[] = [];

const DURATION_MS = 1100;

function easeOutCubic(p: number): number {
  return 1 - Math.pow(1 - p, 3);
}

function animate(el: HTMLElement, target: number, suffix: string): void {
  const start = performance.now();
  const tick = (now: number) => {
    const progress = Math.min(1, (now - start) / DURATION_MS);
    el.textContent = `${Math.round(easeOutCubic(progress) * target)}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

// Solo anima valores que arrancan con un número entero ("70%", "48 horas",
// "100% de trazabilidad"); un stat sin número al frente ("Desfases bajo
// control") se deja como texto estático — no hay nada que contar.
export function initCountUp(root: ParentNode = document): void {
  if (prefersReducedMotion()) return;

  root.querySelectorAll<HTMLElement>('[data-count-up]').forEach((el) => {
    const match = el.textContent?.match(/^(\d+)(.*)$/s);
    if (!match) return;

    const target = parseInt(match[1], 10);
    const suffix = match[2];
    let done = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !done) {
            done = true;
            el.textContent = `0${suffix}`;
            animate(el, target, suffix);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    observers.push(observer);
  });
}

export function destroyCountUp(): void {
  observers.forEach((o) => o.disconnect());
  observers = [];
}
