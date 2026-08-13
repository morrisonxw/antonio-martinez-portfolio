import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from './lenis';

export function initReveals(root: ParentNode = document): void {
  if (prefersReducedMotion()) return;

  gsap.registerPlugin(ScrollTrigger);

  root.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    el.classList.add('reveal-init');
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => el.classList.add('is-revealed'),
    });
  });
}
