import type { ImageMetadata } from "astro";

// Mapa nombre → imagen optimizable (archivos en src/assets/img)
const files = import.meta.glob<{ default: ImageMetadata }>("../assets/img/*.{jpg,jpeg,png,webp}", { eager: true });

export const img = (name: string): ImageMetadata => {
  const entry = Object.entries(files).find(([path]) => path.split("/").pop()?.replace(/\.\w+$/, "") === name);
  if (!entry) throw new Error(`Imagen no encontrada en src/assets/img: ${name}`);
  return entry[1].default;
};
