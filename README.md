# ComuniK-T Kids Therapy — Web

Landing page de ComuniK-T, centro de terapias para niños en Santiago de Surco, hecha con [Astro](https://astro.build).

## Comandos

| Comando           | Qué hace                                     |
| ----------------- | -------------------------------------------- |
| `npm install`     | Instala dependencias                         |
| `npm run dev`     | Servidor local con recarga en vivo           |
| `npm run build`   | Genera el sitio estático en `dist/`          |
| `npm run preview` | Sirve `dist/` para revisarlo antes de subir  |
| `npm run check`   | Revisa errores de tipos en el proyecto       |

## Antes de publicar

1. **Dominio:** cambiar `SITE_URL` en `astro.config.mjs` y la línea `Sitemap:` en `public/robots.txt`.
2. **Dirección y horario:** completar `SITE.address` y `SITE.hours` en `src/data/site.ts` (el mapa y los datos para Google se actualizan solos).
3. **Equipo:** reemplazar `TEAM` en `src/data/site.ts` con nombres y especialidad; poner las fotos en `src/assets/img/` y escribir su nombre en `photo`. Luego cambiar `TEAM_IS_PLACEHOLDER` a `false`.
4. **Medición (opcional):** poner el ID de Google Analytics 4 y/o Meta Pixel en `ANALYTICS`. Cada clic a WhatsApp y cada envío del formulario se registran como conversión (`contacto_whatsapp` en GA4, `Contact` en Meta).

## Subir la web

`npm run build` genera la carpeta `dist/`, que es un sitio 100% estático:

- **Netlify / Cloudflare Pages / Vercel:** conectar el repositorio, comando `npm run build`, carpeta `dist`. El archivo `public/_headers` ya configura caché y cabeceras de seguridad en Netlify y Cloudflare.
- **Hosting tradicional (cPanel, FTP):** subir el contenido de `dist/` a `public_html`.

## Dónde cambiar cosas

- **Textos, terapias, preguntas frecuentes, WhatsApp y redes:** `src/data/site.ts`
- **Secciones de la página:** `src/components/` (una por sección)
- **Orden de las secciones:** `src/pages/index.astro`
- **Colores y estilos:** `src/styles/global.css` (variables en `:root`)
- **Imágenes:** `src/assets/img/` (Astro las convierte a WebP y genera varios tamaños)
- **Imagen al compartir en redes, favicon, robots:** `public/`

## Incluido

- SEO: título, descripción, canonical, Open Graph con imagen 1200×630, sitemap y robots.txt.
- Datos estructurados para Google: negocio local (`LocalBusiness`) y preguntas frecuentes (`FAQPage`).
- Imágenes optimizadas (WebP responsive), fuentes alojadas en la propia web y mapa que se carga solo al tocarlo.
- Formulario que arma el mensaje y lo abre en WhatsApp, sin guardar datos.
- Página 404, enlace "Saltar al contenido" y animaciones que respetan "reducir movimiento".

## Imágenes provisionales

Las fotos de `src/assets/img/` (excepto `logo.png`) son de [Unsplash](https://unsplash.com) (licencia libre) y sirven de referencia. Lo ideal es reemplazarlas por fotos reales del centro con el mismo nombre de archivo.

`respaldo-html/` guarda la versión anterior en HTML estático.
