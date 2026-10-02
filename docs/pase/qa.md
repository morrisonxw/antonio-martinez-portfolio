# PASE: QA de preproducción

Fecha: 2 de octubre de 2026. No se ha publicado, fusionado ni enviado esta rama a GitHub.

## Verificación ejecutada

`npm run astro check`: 81 archivos, cero errores, advertencias o sugerencias. `npm run build`: 26 páginas compiladas. Corresponde a la revisión que integra el chat completo y la versión interna 7 del blueprint. `git diff --check` no encontró errores de espacios.

Chrome mediante Playwright sobre `http://127.0.0.1:4334`, rutas `/proyectos/mercadolibre-pase` y `/en/projects/mercadolibre-pase`, anchos de 390 y 1440 px. Cuatro combinaciones: HTTP 200, sin errores de JavaScript ni desbordamiento horizontal de página. Seis artefactos presentes: resultados, perfiles, Customer Journey, proceso, Employee Journey y blueprint. Dos vídeos dentro del artículo con controles, sin autoplay y con `preload="none"`. El lightbox global añade otro vídeo; se excluye de la comprobación del artículo.

Las cinco tablas tienen caption y encabezados semánticos. El SVG tiene título, descripción y 15 nodos identificables. Se comprobó desplazamiento con ArrowRight en todos los contenedores desbordables a 390 px; el desbordamiento queda dentro del artefacto. Los perfiles usan tres columnas en escritorio y una en móvil. Capturas: `process-desktop.png`, `personas-mobile.png`, `measurement-390.png`, `blueprint-1440.png` y `journey-1440.png`; la captura oculta navegación fija, progreso, cursor y toolbar solo en el navegador de prueba.

El mapa muestra cuatro carriles, cuatro decisiones, resolución automática o contable, consulta a operaciones y continuidad fuera de PASE. La caja de reclamos está delimitada como externa; no hay reapertura interna. El blueprint muestra sus tres líneas en ambos paneles. Las barras ocupan el 30 % y 10 % de pistas iguales sobre escala 0–100 %. Los enlaces locales a PACTO devolvieron HTTP 200 en ES/EN. Se conservan tokens y no se añaden bibliotecas o JavaScript de visualización. Las capturas no sustituyen los diagramas con código.

Inspección de ambos MP4: no aparece un handler de audio `soun`; las leyendas los identifican como vídeos sin audio. Se verificó carga de metadata y reproducción de ambos vídeos en las cuatro combinaciones de idioma/ancho. Los vídeos inline no reciben `role="button"` ni cursor de ampliación del lightbox. La revisión no certifica accesibilidad completa WCAG ni incluye pruebas con lector de pantalla.

## Límites de validación

No se realizaron nuevas entrevistas ni pruebas con usuarios en esta tarea. El chat completo y el blueprint fueron leídos íntegramente; las pruebas históricas y el despliegue se describen según el relato aportado. No se auditaron reglas técnicas, cumplimiento de plazos o bases de resultados. [Muestra de investigación], [umbrales técnicos], [reportes originales], [estados exactos] y [resultados de continuidad/CSAT] siguen sin aportarse. Los momentos críticos no se presentan como emociones medidas.

La revisión de componentes es local. No constituye QA de producción ni autorización para despliegue. Mantener la rama como preproducción hasta aprobar los cambios editoriales.

## Preparación de entrega

Versionar los dos casos PASE, `PaseArtifacts.astro`, `PaseProcessMap.astro`, los documentos de `docs/pase/`, sus capturas y el ajuste acotado de `Lightbox.astro`: solo los vídeos marcados `data-inline-playback` quedan fuera del visor. El resto conserva el comportamiento anterior. No incluir otros cambios previos del portfolio ni hacer push.
