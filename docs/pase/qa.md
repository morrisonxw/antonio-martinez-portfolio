# PASE: QA de preproducción

Fecha: 2 de octubre de 2026. No se ha publicado, fusionado ni enviado esta rama a GitHub.

## Verificación ejecutada

`npm run astro check`: 80 archivos, cero errores, advertencias o sugerencias. `npm run build`: 26 páginas compiladas. Ambos comandos se repitieron después de ajustar los resúmenes, con el mismo resultado satisfactorio. `git diff --check` no encontró errores de espacios.

Chrome mediante Playwright sobre `http://127.0.0.1:4334`, rutas `/proyectos/mercadolibre-pase` y `/en/projects/mercadolibre-pase`, anchos de 390 y 1440 px. Cuatro combinaciones: HTTP 200, sin errores de JavaScript ni desbordamiento horizontal de página. Cuatro artefactos presentes, con dimensiones visibles. Dos vídeos dentro del artículo con controles, sin autoplay y con `preload="none"`. El lightbox global añade otro vídeo; se excluye correctamente de la comprobación del artículo.

El journey y la matriz de medición tienen encabezados semánticos y caption. El SVG tiene título, descripción y alternativas textuales en el caso/documentación. Se comprobó desplazamiento con ArrowRight en los tres contenedores grandes a 390 px; el desbordamiento queda dentro del artefacto. Los perfiles usan tres columnas en escritorio y una en móvil. Capturas: `process-desktop.png` y `personas-mobile.png`; para documentar los artefactos, la captura oculta navegación fija, cursor y toolbar solo en el navegador de prueba, sin alterar la fuente.

El mapa inspeccionado muestra tareas, tres decisiones, ramificaciones sí/no, solicitud de evidencia y retorno de revisión; no es una colección de tarjetas independientes. Conserva los tokens del portfolio y no añade bibliotecas, imágenes generadas ni JavaScript de visualización. Los diagramas no se sustituyen por las capturas: estas solo documentan el QA.

Inspección de ambos MP4: no aparece un handler de audio `soun`; las leyendas los identifican como vídeos sin audio. La revisión no certifica accesibilidad completa WCAG ni incluye pruebas con lector de pantalla.

## Límites de validación

No se realizaron entrevistas ni pruebas con usuarios. No se validaron reglas operativas, SLA, autoridades financieras o resultados originales. El enlace compartido no pudo leerse. [Conversación original], [notas de investigación], [criterios de validación progresiva] y [reportes de impacto] siguen pendientes.

La revisión de componentes es local. No constituye QA de producción ni autorización para despliegue. Mantener la rama como preproducción hasta revisar las fuentes y aprobar los cambios editoriales.

## Preparación de entrega

Versionar únicamente los dos casos PASE, `PaseArtifacts.astro`, los documentos de `docs/pase/` y sus capturas de QA. No incluir el resto de cambios previos del portfolio. Las etiquetas preexistentes de PASE se conservan al incluir los dos MDX. No hacer push: el repositorio podría activar despliegues al recibir cambios.
