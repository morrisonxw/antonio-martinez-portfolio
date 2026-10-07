# PASE: revisión del proceso y estado de la entrega

Fecha: 2 de octubre de 2026. Estado: preproducción en `codex/pase-process-review`. No se modifica la operación real de Mercado Libre ni se publica esta versión.

## Análisis

La revisión inicial (`5d7762e`) se basó en el caso existente, sin acceso a la conversación compartida. Antonio aportó después la exportación completa y el blueprint, versión interna 7. Se leyeron ambos íntegramente. El [contraste de fuentes](contraste-fuentes.md) documenta observaciones, correcciones entre borradores y decisiones antes de los cambios. La revisión inicial permanece recuperable en Git; sus propuestas de reapertura e IA solo exploratoria quedan reemplazadas.

La fuente es un relato retrospectivo del participante, no una auditoría ni documentación original del sistema. Las cifras se atribuyen a negocio, contabilidad y producto sin revisión de bases. Las instrucciones de la oferta laboral y las respuestas históricas del asistente son contexto, no autoridad para crear métodos o logros nuevos.

## Cambios implementados en el caso

Se incorporaron siete meses de participación y 1,5 meses de seguimiento; Argentina/Brasil y First/Last Mile; entrevistas, AS-IS/TO-BE, journeys, talleres y testeos relatados. El proceso explica histórico diario, 48 horas hábiles para reportar, otras 48 para resolver y extensiones manuales excepcionales. No se calcula un total garantizado ni una media.

La IA se describe como implementada, con condiciones técnicas a cargo de desarrollo y aporte de diseño conceptual y de experiencia. El proceso humano queda bajo contabilidad, con consultas a operaciones. El desacuerdo posterior continúa en reclamos tradicionales con trazabilidad y training in app, no una reapertura en PASE. La variante directa para operaciones era futura.

Se recuperaron los resultados como reportados: aproximadamente 30 % → 10 % de servicios reclamados en los mismos proveedores; −20 puntos porcentuales. El 70 % menos reclamos totales es un indicador separado, sin normalización por servicios. El 100 % es respuesta en plazo en el seguimiento inicial, no acuerdo. Esfuerzo del equipo es estimación; USD 7 millones es proyección; eNPS no fue medido y CSAT/continuidad no tienen cifras disponibles.

## Artefactos y método

### Perfiles de trabajo

Se sintetizan tres roles investigados según el relato: analista MLP, contabilidad y operaciones. Estructura: objetivo, necesidad y fricción. No se reconstruyen biografías, edades, fotografías ni citas. No se presentan como personas originales recuperadas.

### Customer Journey

Perspectiva: analista del proveedor. Escenario: diferencia durante el ciclo activo. Objetivo: cobrar lo correspondiente sin comprometer operación. Seis etapas alineadas con el blueprint: consultar, marcar diferencia, analizar, resolver, comprender respuesta y continuar desacuerdo. Filas: acciones, contactos, fricciones, respuesta del servicio y momentos críticos retrospectivos. [Estados exactos no disponibles]. No hay curva emocional medida.

### Employee Journey

Perspectiva separada: analista de contabilidad. Cuatro etapas: recibir, investigar, consultar y decidir. Se muestran tareas, fricciones previas, diseño implementado y validaciones relatadas. Preservar el juicio significa orientar hacia evidencia en los casos inciertos, no eliminar la automatización de los casos que cumplían condiciones.

### Mapa funcional implementado

Cuatro carriles verticales: proveedor, PASE, contabilidad y operaciones. La rama sin diferencia continúa revisión diaria; una diferencia activa contraste, resolución automática condicionada o gestión contable. Contabilidad puede pedir información a operaciones. Ambas ramas comunican respuesta; el desacuerdo sale a reclamos tradicionales. No BPMN 2.0, BPMS ni especificación ejecutable. Sin aprobación por silencio, reglas ordinarias de vencimiento o transferencias técnicas inventadas.

### Blueprint retrospectivo

El [documento fuente versionado](blueprint-retrospectivo.md) conserva la versión interna 7 aportada. En la web se renderiza con código y dos paneles de tres etapas para legibilidad. Capas: evidencia, acciones del proveedor, frontstage, backstage, soporte, fallas y recuperación. Líneas: interacción, visibilidad e interacción interna. Se marca explícitamente como reconstrucción del 2 de octubre de 2026, no método utilizado en el proyecto original.

### Resultados y visualización

Barras proporcionales sobre la misma escala de 0–100 %, con valores visibles 30 % y 10 %. No series sintéticas, intervalos, tamaños de muestra o extrapolaciones. Los otros indicadores incluyen sus límites al lado, no solo en una nota remota. Los vídeos muestran variantes, no pruebas ni la implementación operativa de IA.

## Responsabilidades reconstruidas

| Actividad | Participante/sistema | Límite |
| --- | --- | --- |
| Consultar y marcar diferencias | Analista MLP | Ventana de reporte de 48 h hábiles |
| Contrastar y resolver bajo condiciones | PASE con IA | [Umbrales técnicos no aportados] |
| Gestionar ruta humana y determinar respuesta | Contabilidad | Conserva control del proceso |
| Aportar evidencia operativa | Operaciones | Consulta canalizada por contabilidad en el despliegue |
| Implementar condiciones técnicas | Desarrollo | Diseño aporta comprensión conceptual y experiencia |
| Continuar desacuerdo | Reclamos tradicionales | Trazabilidad de PASE; [campos y mecanismo no aportados] |

No se denomina RACI confirmado: faltan facultades formales. La variante futura para operaciones se describe en prosa, no se mezcla con el proceso desplegado.

## Validación y Git

El [QA local](qa.md) distingue verificaciones técnicas/visuales de la validación operativa histórica relatada. Las pruebas de esta tarea no sustituyen entrevistas ni nuevos tests con usuarios.

Archivos de entrega: dos MDX ES/EN, `PaseArtifacts.astro`, `PaseProcessMap.astro`, este documento, `contraste-fuentes.md`, `blueprint-retrospectivo.md`, `qa.md` y capturas de QA. `Lightbox.astro` excluye únicamente los vídeos marcados `data-inline-playback`, para no interceptar sus controles. No se cambian las etiquetas ni portadas. Se preservan las modificaciones ajenas del árbol de trabajo. Se guarda un commit local sin push, merge ni despliegue.

Fuentes metodológicas: [Journey Mapping 101](https://www.nngroup.com/articles/journey-mapping-101/) y [Service Blueprints: Definition](https://www.nngroup.com/articles/service-blueprints-definition/). Orientan la estructura, no aportan evidencia de PASE.
