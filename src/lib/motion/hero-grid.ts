// Canvas2D ASCII field for the home hero. Every grid position receives a glyph;
// a two-octave value-noise field animates underneath a pre-rasterized text mask.

import { prefersReducedMotion } from './lenis';

const CELL_SPACING = 18;
const BASE_CHARACTER_SIZE = 10;
const GLYPHS = '.,:;!|+=xX#%@';
const MAX_DPR = 1.5;
const MASK_SAMPLES = [
  [0, 0], [-0.32, -0.32], [0.32, -0.32], [-0.32, 0.32], [0.32, 0.32],
  [0, -0.36], [0, 0.36], [-0.36, 0], [0.36, 0],
] as const;

type Rgb = [number, number, number];

let sectionEl: HTMLElement | null = null;
let canvasEl: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;
let maskCanvas: HTMLCanvasElement | null = null;
let maskCtx: CanvasRenderingContext2D | null = null;
let maskPixels: Uint8ClampedArray | null = null;
let maskWidth = 0;
let maskHeight = 0;
let dpr = 1;
let rafId: number | null = null;
let isVisible = true;
let reducedMotion = false;
let accentRgb: Rgb = [229, 88, 0];
let inkRgb: Rgb = [26, 23, 20];
let onResize: (() => void) | null = null;
let visibilityObserver: IntersectionObserver | null = null;

function clamp(value: number, min = 0, max = 1): number {
  return Math.max(min, Math.min(max, value));
}

function smoothstep(value: number): number {
  return value * value * (3 - 2 * value);
}

function hexToRgb(hex: string, fallback: Rgb): Rgb {
  const normalized = hex.trim().replace('#', '');
  if (!/^[\da-f]{6}$/i.test(normalized)) return fallback;
  const value = Number.parseInt(normalized, 16);
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
}

function hash2(x: number, y: number): number {
  let value = Math.imul(x, 0x1f123bb5) ^ Math.imul(y, 0x5f356495);
  value = Math.imul(value ^ (value >>> 15), 0x2c1b3c6d);
  value = Math.imul(value ^ (value >>> 12), 0x297a2d39);
  return ((value ^ (value >>> 15)) >>> 0) / 0xffffffff;
}

function valueNoise(x: number, y: number): number {
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const fx = smoothstep(x - x0);
  const fy = smoothstep(y - y0);
  const top = hash2(x0, y0) * (1 - fx) + hash2(x0 + 1, y0) * fx;
  const bottom = hash2(x0, y0 + 1) * (1 - fx) + hash2(x0 + 1, y0 + 1) * fx;
  return top * (1 - fy) + bottom * fy;
}

function mixColor(from: Rgb, to: Rgb, amount: number): string {
  const t = clamp(amount);
  const r = Math.round(from[0] + (to[0] - from[0]) * t);
  const g = Math.round(from[1] + (to[1] - from[1]) * t);
  const b = Math.round(from[2] + (to[2] - from[2]) * t);
  return `rgb(${r} ${g} ${b})`;
}

function rasterizeTextMask(width: number, height: number): void {
  if (!maskCanvas || !maskCtx || !canvasEl) return;

  maskCanvas.width = canvasEl.width;
  maskCanvas.height = canvasEl.height;
  maskWidth = maskCanvas.width;
  maskHeight = maskCanvas.height;
  maskCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  maskCtx.clearRect(0, 0, width, height);
  maskCtx.fillStyle = '#fff';
  maskCtx.textAlign = 'center';
  maskCtx.textBaseline = 'middle';

  const desiredSize = clamp(width / 12, 24, 128);
  const maxTextWidth = width * (width >= 720 ? 0.56 : 0.9);
  const text = 'Human Centered';
  let fontSize = desiredSize;
  maskCtx.font = `700 ${fontSize}px "Space Grotesk", Inter, sans-serif`;
  const textWidth = maskCtx.measureText(text).width;
  if (textWidth > maxTextWidth) {
    fontSize *= maxTextWidth / textWidth;
    maskCtx.font = `700 ${fontSize}px "Space Grotesk", Inter, sans-serif`;
  }

  const maskX = width >= 720 ? width * 0.72 : width / 2;
  const maskY = height * (width >= 720 ? 0.28 : 0.22);
  maskCtx.fillText(text, maskX, maskY, maxTextWidth);
  maskPixels = maskCtx.getImageData(0, 0, maskWidth, maskHeight).data;
}

function coverageAt(x: number, y: number): number {
  if (!maskPixels) return 0;
  let total = 0;
  for (const [offsetX, offsetY] of MASK_SAMPLES) {
    const px = Math.round((x + offsetX * CELL_SPACING) * dpr);
    const py = Math.round((y + offsetY * CELL_SPACING) * dpr);
    if (px >= 0 && py >= 0 && px < maskWidth && py < maskHeight) {
      total += maskPixels[(py * maskWidth + px) * 4 + 3] / 255;
    }
  }
  return total / MASK_SAMPLES.length;
}

function resize(): void {
  if (!sectionEl || !canvasEl || !ctx) return;
  const width = sectionEl.clientWidth;
  const height = sectionEl.clientHeight;
  dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
  canvasEl.width = Math.max(1, Math.round(width * dpr));
  canvasEl.height = Math.max(1, Math.round(height * dpr));
  canvasEl.style.width = `${width}px`;
  canvasEl.style.height = `${height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  rasterizeTextMask(width, height);
  draw(0);
}

function draw(timeMs: number): void {
  if (!ctx || !sectionEl || !canvasEl || !maskPixels) return;
  const width = sectionEl.clientWidth;
  const height = sectionEl.clientHeight;
  const seconds = reducedMotion ? 0 : timeMs / 1000;
  ctx.clearRect(0, 0, width, height);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  for (let y = CELL_SPACING / 2; y < height; y += CELL_SPACING) {
    for (let x = CELL_SPACING / 2; x < width; x += CELL_SPACING) {
      // Two independently drifting scales keep the texture organic without noise textures.
      const broad = valueNoise(x * 0.009 + seconds * 0.035, y * 0.009 - seconds * 0.022);
      const fine = valueNoise(x * 0.023 - seconds * 0.061, y * 0.023 + seconds * 0.043);
      const noise = broad * 0.68 + fine * 0.32;

      // Integrate sampled text coverage before contrast so letterforms keep moving with the field.
      const illuminatedValue = clamp(0.12 + noise * 0.58 + coverageAt(x, y) * 0.72);
      const contrast = smoothstep(clamp((illuminatedValue - 0.24) / 0.68));
      const glyphIndex = Math.min(GLYPHS.length - 1, Math.floor(contrast * GLYPHS.length));
      const glyph = GLYPHS[glyphIndex];

      // Character scale follows the direct field; color has its own exposure curve.
      const characterSize = BASE_CHARACTER_SIZE * (0.82 + illuminatedValue * 0.9);
      const colorExposure = illuminatedValue ** 1.8;
      ctx.fillStyle = mixColor(inkRgb, accentRgb, colorExposure);
      ctx.globalAlpha = 0.08 + colorExposure * 0.55;
      ctx.font = `${characterSize.toFixed(1)}px ui-monospace, "SFMono-Regular", Consolas, monospace`;
      ctx.fillText(glyph, x, y);
    }
  }
  ctx.globalAlpha = 1;

  if (!reducedMotion && isVisible) rafId = requestAnimationFrame(draw);
}

export function initHeroGrid(root: ParentNode = document): void {
  const section = root.querySelector<HTMLElement>('[data-hero-grid-section]');
  const canvas = section?.querySelector<HTMLCanvasElement>('[data-hero-grid]');
  if (!section || !canvas) return;

  sectionEl = section;
  canvasEl = canvas;
  ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
  maskCanvas = document.createElement('canvas');
  maskCtx = maskCanvas.getContext('2d', { willReadFrequently: true });
  if (!ctx || !maskCtx) return;

  const styles = getComputedStyle(document.documentElement);
  accentRgb = hexToRgb(styles.getPropertyValue('--accent'), [229, 88, 0]);
  inkRgb = hexToRgb(styles.getPropertyValue('--ink'), [26, 23, 20]);
  reducedMotion = prefersReducedMotion();
  resize();

  onResize = resize;
  window.addEventListener('resize', onResize, { passive: true });
  visibilityObserver = new IntersectionObserver(([entry]) => {
    isVisible = entry.isIntersecting;
    if (isVisible && !reducedMotion && rafId === null) rafId = requestAnimationFrame(draw);
    if (!isVisible && rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  });
  visibilityObserver.observe(section);
}

export function destroyHeroGrid(): void {
  if (rafId !== null) cancelAnimationFrame(rafId);
  if (onResize) window.removeEventListener('resize', onResize);
  visibilityObserver?.disconnect();
  visibilityObserver = null;
  onResize = null;
  rafId = null;
  sectionEl = null;
  canvasEl = null;
  ctx = null;
  maskCanvas = null;
  maskCtx = null;
  maskPixels = null;
  maskWidth = 0;
  maskHeight = 0;
  isVisible = true;
}
