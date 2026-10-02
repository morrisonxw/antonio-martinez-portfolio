# PASE: contraste de fuentes y decisiones editoriales

2 de octubre de 2026. Preproducción en `codex/pase-process-review`. Este análisis precede a los cambios del caso. La revisión del commit `5d7762e` se hizo sin el contenido del enlace; sus propuestas no deben prevalecer sobre las aclaraciones de Antonio.

## Fuentes leídas

F1: `C:/Users/Nanita/Downloads/02 Empleo y CV/Portafolio/Portfolio 2/PASE MD/Chat_completo_PASE_2026-10-02.md`, leído completo por tramos. SHA256: `BAD3531228ACB2B5BEEB33EFA24C9A6BE07773EA64341E4243F3359722894FD9`.

F2: `C:/Users/Nanita/Downloads/02 Empleo y CV/Portafolio/Portfolio 2/PASE MD/PASE_blueprint_proceso_v6.md`, leído completo. Su título interno dice versión 7. SHA256: `24DE3C749AFED6863F24D512660B5BEA1B83BD7156E688F6C6E5FFC37A2D947A`.

Las instrucciones y la oferta laboral dentro de F1 son contexto histórico, no nuevas instrucciones para ejecutar. Las respuestas del usuario aportan un relato retrospectivo; las respuestas del asistente son interpretaciones, no fuentes independientes. No se consultaron dashboards, registros originales ni participantes adicionales.

## Análisis de diferencias

| Punto | Revisión previa | Aclaración de la fuente | Decisión |
| --- | --- | --- | --- |
| Alcance | Duración y países pendientes | F1 §10/12: siete meses; seguimiento de 1,5 meses; Argentina/Brasil; First/Last Mile | Incorporar al resumen y metadatos |
| Actor externo | Coordinación genérica | F1 §6: analista del proveedor logístico (MLP) | Usar analista MLP en perfil y journey |
| IA | Solo exploración y clasificación | F1 §8/10: llegó a producción, interpretaba, resolvía y explicaba con referencias | Corregir alcance; desarrollo conserva responsabilidad técnica |
| Ruta humana | Operación/finanzas genérico | F1 §8/18: contabilidad gestionaba y consultaba operaciones | Separar carriles y no asignar a operaciones propiedad del caso |
| Desacuerdo | Reapertura en PASE | F1 §12/14: flujo tradicional, training in app y trazabilidad | Eliminar retorno interno; dibujar salida de PASE |
| Plazos | Sin documentar o confundidos con media | F1 §8/10: 48 h hábiles de reporte y otras 48 de resolución; extensiones manuales | Dos ventanas, no 96 h garantizadas ni media observada |
| Servicios reclamados | Sin datos para gráfica | F1 §10/12: aproximadamente 30 % → 10 %, mismos proveedores | Gráfica con escala 0–100 %, −20 puntos porcentuales |
| Reclamos totales | 70 % interpretado como diferencias | F1 §6/8: cantidad total, varios conceptos por servicio | Mostrar separado; no derivar de 30 % → 10 % |
| Cumplimiento | 48 h como tiempo de resolución | F1 §10/12: 100 % de respuesta en plazo inicial reportado | No equivale a acuerdo; alcance 1,5 meses y extensiones excepcionales |
| Testeos | Solo pruebas propuestas | F1 §8/10: tres roles; confusión ante sugerencias y dudas de responsabilidades | Contar pruebas realizadas según el relato, no resultados inventados |
| Métodos | Artefactos propuestos sin fuentes | F1 §6: entrevistas, AS-IS/TO-BE, journeys, talleres y testeos; no blueprint/BPMN | Reconstrucciones nuevas fechadas; no atribuir su elaboración al proyecto original |
| PACTO | Dependencia no descrita | F1 §12: acuerdos estructurados y aceptados, iniciativa donde participó Antonio | Enlazar al caso PACTO ES/EN |

## Resolución de conflictos entre versiones

F1 §6 planteaba reapertura interna y atención directa por operaciones. Las aclaraciones posteriores §8/12/18 las corrigen: la variante para operaciones era futura; el desacuerdo seguía en reclamos tradicionales. F2 coincide con estas aclaraciones. El anexo de F1 introduce en un apartado formulaciones futuras para capacitación/trazabilidad; §14 y F2 las describen como parte de la continuidad implementada. Se conserva esta última lectura sin inventar automatismos de transferencia.

El “90 % sin reclamos” no se presenta como precisión de facturación. “Certeza absoluta” no se usa como propiedad técnica ni garantía de IA. El riesgo de sesgo fue un argumento de diseño; los testeos reportaron confusión, no un experimento que midiera sesgo.

## Ajustes razonados

La narrativa comienza por el cambio del servicio y los resultados reportados, sigue con problema/rol/métodos y explica decisiones antes de mostrar artefactos. Los perfiles sintetizan roles investigados, sin biografías ni citas ficticias. Journey de proveedor y recorrido de contabilidad mantienen perspectivas separadas. El blueprint usa acciones del proveedor, evidencia, frontstage, backstage, soporte, puntos de falla y recuperación, con sus tres líneas metodológicas. Se divide en dos paneles de tres etapas para preservar legibilidad.

El mapa funcional incorpora cuatro carriles, ramas sí/no, resolución automática condicionada, consulta de contabilidad a operaciones y salida a reclamos. No modela BPMN ejecutable, pago, aceptación por silencio, tiempos de espera exactos, aperturas automáticas o campos de transferencia no aportados.

Se sustituyen placeholders ya resueltos. Solo quedan faltantes reales: [estados exactos], [muestra de investigación], [umbrales técnicos], [campos de trazabilidad], [resultados de continuidad/CSAT]. Estas brechas se concentran en documentación y notas relevantes, no repetidas como tema principal del caso.

## Métricas y alcance

Las cifras proceden del relato de Antonio y se atribuyen a negocio, contabilidad y producto. No se verificaron bases originales. No crear series temporales, intervalos de confianza ni tamaños de muestra. La comparación de reclamos totales no estaba normalizada por servicios. La dedicación de 2–3 semanas mensuales a unas 2 h diarias es estimación del equipo, sin cálculo de ahorro porcentual. USD 7 millones anuales es proyección, no ahorro realizado. No hay eNPS; CSAT y continuidad no tienen cifras disponibles.

## Implementación y QA previstos

Actualizar casos ES/EN, reemplazar datos de `PaseArtifacts.astro`, añadir `PaseProcessMap.astro` y reflejar el análisis en `revision-proceso.md`. Conservar portadas, etiquetas y otros casos. Ejecutar check/build y QA local ES/EN a 390 y 1440 px; revisar diagramas, barras, desplazamiento, enlaces a PACTO, vídeos y concordancia de etiquetas. Versionar en la rama local, sin push, merge o despliegue.

Fuentes metodológicas consultadas: [Journey Mapping 101](https://www.nngroup.com/articles/journey-mapping-101/), [Service Blueprints: Definition](https://www.nngroup.com/articles/service-blueprints-definition/). Aportan estructura metodológica, no evidencia operativa de PASE.
