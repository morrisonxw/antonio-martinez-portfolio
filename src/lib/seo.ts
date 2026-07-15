import { site } from '../content-data/site';

export interface SeoProps {
  title: string;
  description: string;
  image?: string;
  path?: string;
}

export function buildSeo({ title, description, image, path = '/' }: SeoProps) {
  const url = new URL(path, site.url).toString();
  return {
    title: title === site.name ? title : `${title} — ${site.name}`,
    description,
    url,
    image: image ?? new URL('/og-default.jpg', site.url).toString(),
  };
}
