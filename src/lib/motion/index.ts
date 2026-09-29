import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initSmoothScroll, destroySmoothScroll } from './lenis';
import { initReveals } from './reveal';
import { initCursor, destroyCursor } from './cursor';
import { playAutoplayVideos } from './autoplay-videos';
import { initTilt, destroyTilt } from './tilt';
import { initCountUp, destroyCountUp } from './count-up';
import { initReadingProgress, destroyReadingProgress } from './reading-progress';
import { initVisitedTracking, destroyVisitedTracking } from './visited';

gsap.registerPlugin(ScrollTrigger);

function start() {
  initSmoothScroll();
  initReveals();
  initCursor();
  initTilt();
  initCountUp();
  initReadingProgress();
  initVisitedTracking();
  playAutoplayVideos();
  requestAnimationFrame(() => ScrollTrigger.refresh());
}

function stop() {
  destroyCursor();
  destroyTilt();
  destroyCountUp();
  destroyReadingProgress();
  destroyVisitedTracking();
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  destroySmoothScroll();
}

document.addEventListener('astro:page-load', start);
document.addEventListener('astro:before-swap', stop);
