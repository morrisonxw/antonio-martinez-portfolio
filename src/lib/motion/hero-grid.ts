// Grilla de puntos de fondo del hero, reactiva al cursor (referencia visual
// a "los sistemas que sostienen un producto" — backstage/frontstage). Solo
// con pointer fino y sin prefers-reduced-motion, igual que magnetic/tilt: es
// un efecto puramente decorativo, no aporta nada esencial en touch o con
// movimiento reducido, así que directamente no se monta.

import { prefersReducedMotion } from './lenis';

function supportsFinePointer(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;
}

// Los colores del punto se leen de los custom properties en vez de
// hardcodear el hex acá: si --accent o --ink cambian en tokens.css, este
// efecto los sigue sin tocar código.
function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.trim().replace('#', ''), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

const SPACING = 34;
const INFLUENCE_RADIUS = 220;

let sectionEl: HTMLElement | null = null;
let canvasEl: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;
let rafId: number | null = null;
let mouseX = -9999;
let mouseY = -9999;
let accentRgb: [number, number, number] = [229, 88, 0];
let inkRgb: [number, number, number] = [26, 23, 20];

let onMouseMove: ((e: MouseEvent) => void) | null = null;
let onMouseLeave: (() => void) | null = null;
let onResize: (() => void) | null = null;

function resize(): void {
  if (!canvasEl || !sectionEl) return;
  const dpr = window.devicePixelRatio || 1;
  const w = sectionEl.offsetWidth;
  const h = sectionEl.offsetHeight;
  canvasEl.width = w * dpr;
  canvasEl.height = h * dpr;
  canvasEl.style.width = `${w}px`;
  canvasEl.style.height = `${h}px`;
  ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function draw(): void {
  if (!ctx || !sectionEl) return;
  const w = sectionEl.offsetWidth;
  const h = sectionEl.offsetHeight;
  ctx.clearRect(0, 0, w, h);

  for (let x = SPACING / 2; x < w; x += SPACING) {
    for (let y = SPACING / 2; y < h; y += SPACING) {
      const dx = x - mouseX;
      const dy = y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const influence = Math.max(0, 1 - dist / INFLUENCE_RADIUS);
      const radius = 1.2 + influence * 2.2;
      const [r, g, b] = influence > 0.05 ? accentRgb : inkRgb;
      const alpha = influence > 0.05 ? 0.1 + influence * 0.5 : 0.08;

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
      ctx.fill();
    }
  }

  rafId = requestAnimationFrame(draw);
}

export function initHeroGrid(root: ParentNode = document): void {
  if (prefersReducedMotion() || !supportsFinePointer()) return;

  const section = root.querySelector<HTMLElement>('[data-hero-grid-section]');
  const canvas = section?.querySelector<HTMLCanvasElement>('[data-hero-grid]');
  if (!section || !canvas) return;

  sectionEl = section;
  canvasEl = canvas;
  ctx = canvas.getContext('2d');
  if (!ctx) return;

  const rootStyles = getComputedStyle(document.documentElement);
  accentRgb = hexToRgb(rootStyles.getPropertyValue('--accent') || '#e55800');
  inkRgb = hexToRgb(rootStyles.getPropertyValue('--ink') || '#1a1714');

  resize();
  onResize = resize;
  window.addEventListener('resize', onResize);

  onMouseMove = (e: MouseEvent) => {
    const rect = section.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  };
  onMouseLeave = () => {
    mouseX = -9999;
    mouseY = -9999;
  };
  section.addEventListener('mousemove', onMouseMove);
  section.addEventListener('mouseleave', onMouseLeave);

  rafId = requestAnimationFrame(draw);
}

export function destroyHeroGrid(): void {
  if (rafId !== null) cancelAnimationFrame(rafId);
  rafId = null;
  if (onResize) window.removeEventListener('resize', onResize);
  if (sectionEl && onMouseMove) sectionEl.removeEventListener('mousemove', onMouseMove);
  if (sectionEl && onMouseLeave) sectionEl.removeEventListener('mouseleave', onMouseLeave);
  onResize = null;
  onMouseMove = null;
  onMouseLeave = null;
  sectionEl = null;
  canvasEl = null;
  ctx = null;
  mouseX = -9999;
  mouseY = -9999;
}
