/**
 * Orden editorial único del portfolio. La home y la navegación entre casos
 * deben consumir esta misma secuencia para no llevar al usuario por dos
 * recorridos distintos.
 */
export const portfolioProjectOrder = [
  'mercadolibre-pase',
  'mercadolibre-pacto',
  'mercadolibre-prefacturas',
  'mercadolibre-reclamos',
  'dropi-novedades',
  'zubank-futuros',
  'design-system-intergrupo',
  'wip-asiste',
  'behance',
] as const;

export function projectOrderIndex(projectId: string): number {
  const index = portfolioProjectOrder.indexOf(projectId as (typeof portfolioProjectOrder)[number]);
  return index < 0 ? Number.MAX_SAFE_INTEGER : index;
}

export function sortByPortfolioOrder<T extends { id: string }>(projects: T[]): T[] {
  return [...projects].sort((a, b) => projectOrderIndex(a.id) - projectOrderIndex(b.id));
}
