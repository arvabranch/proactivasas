# Proactiva: sitio web

Sitio nuevo de **IP Proactiva S.A.S.** (www.proactivasas.com), desarrollado a la medida por ARVA Branch.
Reemplaza al WordPress 5.5.1 anterior. No usa plantillas, temas, WordPress ni plugins: todo el diseño y los componentes son propios.

- **Tecnología:** [Astro](https://astro.build) 7 genera HTML estático. No hay PHP, base de datos ni panel que atacar.
- **Hosting:** se mantiene el hosting actual (Apache/LiteSpeed). Basta con subir la carpeta `dist/`.
- **JavaScript:** menos de 4 KB comprimido sumando todo el sitio. Se usa solo para el menú, el selector de síntomas, las animaciones y la precarga de páginas.

## Estructura

```
src/
  data/site.ts        ← teléfono, WhatsApp, correo, redes y menú (un solo lugar)
  data/servicios.ts   ← contenido de las 5 páginas de servicio y del selector de síntomas
  data/clientes.ts    ← sectores, clientes y casos de éxito
  pages/              ← inicio, servicios (hub + 5 páginas), productos, historia, clientes, contacto, 404
  components/         ← header, footer, tarjetas, FAQ, barra de WhatsApp, línea de vibración…
  styles/global.css   ← tokens de diseño: colores del logo (verde #069039, naranja #E88B03, rojo #D32311), tipografía, espacios, modo claro y oscuro
public/
  .htaccess           ← HTTPS, cabeceras de seguridad, caché, compresión y redirecciones del sitio viejo
scripts/crop-banners.mjs ← recorte de las fotos de los banners antiguos
```

Para un **cambio pequeño** (teléfono, texto, foto o cliente), se edita el archivo de `src/data/` o la imagen de `src/assets/img/` y se vuelve a publicar.

## Desarrollo

Requiere Node ≥ 22.12. El proyecto trae su propio Node 24 (paquete `node` en devDependencies), así que `npm run` funciona aunque el Node del sistema sea más viejo.

```bash
npm install
npm run dev       # http://localhost:4321
npm run check     # validación de tipos
npm run build     # genera dist/
npm run preview   # sirve dist/ localmente
```

### Variables opcionales (`.env`, ver `.env.example`)

| Variable | Uso |
|---|---|
| `PUBLIC_GA_ID` | ID de Google Analytics 4. Si está vacío no se carga ninguna analítica. Registra los clics en WhatsApp, teléfono y correo como eventos. |
| `PUBLIC_GSC_VERIFICATION` | Código de verificación de Google Search Console. |

## Publicación en el hosting actual

1. **Respaldo del sitio actual** (incluido en la propuesta): descargar `public_html/` completo y exportar la base de datos de WordPress desde cPanel. Guardar ambos fuera del servidor.
2. `npm run build`
3. Vaciar `public_html/` (después del respaldo) y subir **todo** el contenido de `dist/`, incluido `.htaccess`, que es un archivo oculto.
4. Verificar: `https://www.proactivasas.com/`, una página de servicio, `/p-r-o-d-u-c-t-o-s/` (debe redirigir a `/productos/`) y `/wp-login.php` (debe responder 410).
5. En Search Console: enviar `https://www.proactivasas.com/sitemap-index.xml`.

## SEO incluido

- `<title>` y meta description propios en cada página, con el servicio y la ciudad.
- Una página por servicio, con URL descriptiva (`/servicios/balanceo-dinamico/` …).
- Datos estructurados JSON-LD: `LocalBusiness`, `Service`, `BreadcrumbList`, `FAQPage` e `ItemList`.
- `sitemap-index.xml`, `robots.txt`, URL canónica, Open Graph y redirecciones 301 desde las URLs viejas.

## Seguridad

- Sitio 100 % estático: sin WordPress, plugins, PHP, base de datos ni formularios con backend.
- El formulario de contacto no envía datos a ningún servidor: arma el mensaje y abre WhatsApp.
- `.htaccess`: HTTPS + HSTS, CSP estricta (sin scripts inline), `X-Frame-Options`, `nosniff`, `Referrer-Policy`, `Permissions-Policy`, bloqueo de archivos ocultos y 410 para las rutas de WordPress.
- Dependencias sin vulnerabilidades conocidas (`npm audit`); la CI falla si aparece una alta o crítica.

## Rendimiento (Lighthouse móvil, local y sin compresión)

| Página | Rendimiento | Accesibilidad | Buenas prácticas | SEO |
|---|---|---|---|---|
| Inicio | 96 | 100 | 100 | 100 |
| Servicios | 95 | 100 | 100 | 100 |
| Balanceo dinámico | 97 | 100 | 100 | 100 |

## Pendiente de Proactiva (según la propuesta)

- [x] Logo oficial integrado (`src/assets/brand/logo-proactiva.png`, generado con `node scripts/prepare-logo.mjs`). Si Proactiva entrega una versión vectorial (SVG/AI/PDF), conviene reemplazarlo para una nitidez perfecta.
- [ ] **Fotos reales** de planta, taller y equipos en buena resolución. Las de los servicios salen de los banners viejos (unos 300 px de ancho).
- [ ] **Autorización** para mencionar clientes y casos (`src/data/clientes.ts`). La lista sale de la imagen de logos que ya está publicada.
- [ ] **Perfiles reales** de LinkedIn, Facebook, Instagram y Google Business (`SOCIAL` en `src/data/site.ts`).
- [ ] **Correo corporativo** si el hosting lo permite (`email` en `src/data/site.ts`).
- [ ] Revisar los textos técnicos de cada servicio y los hitos de `historia.astro`.
- [ ] El catálogo en PDF, si existe, para enlazarlo desde Productos.
