import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initSmoothScroll, destroySmoothScroll } from './lenis';
import { initReveals } from './reveal';
import { initCursor, destroyCursor } from './cursor';
import { playAutoplayVideos } from './autoplay-videos';
import { initMagnetic, destroyMagnetic } from './magnetic';
import { initTilt, destroyTilt } from './tilt';
import { initCountUp, destroyCountUp } from './count-up';

gsap.registerPlugin(ScrollTrigger);

function start() {
  initSmoothScroll();
  initReveals();
  initCursor();
  initMagnetic();
  initTilt();
  initCountUp();
  playAutoplayVideos();
  requestAnimationFrame(() => ScrollTrigger.refresh());
}

function stop() {
  destroyCursor();
  destroyMagnetic();
  destroyTilt();
  destroyCountUp();
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  destroySmoothScroll();
}

document.addEventListener('astro:page-load', start);
document.addEventListener('astro:before-swap', stop);
