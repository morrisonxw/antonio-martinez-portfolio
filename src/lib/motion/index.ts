import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initSmoothScroll, destroySmoothScroll } from './lenis';
import { initReveals } from './reveal';
import { initCursor, destroyCursor } from './cursor';

gsap.registerPlugin(ScrollTrigger);

function start() {
  initSmoothScroll();
  initReveals();
  initCursor();
  requestAnimationFrame(() => ScrollTrigger.refresh());
}

function stop() {
  destroyCursor();
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  destroySmoothScroll();
}

document.addEventListener('astro:page-load', start);
document.addEventListener('astro:before-swap', stop);
