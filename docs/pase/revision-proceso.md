# PASE: revisión del proceso

Estado: preproducción. Fecha: 2 de octubre de 2026. Alcance: revisión del proceso descrito y mejora de su caso en el portfolio, no modificación de la operación real de Mercado Libre.

## Análisis

### Fuentes y alcance

S1: caso local `src/content/projects/mercadolibre-pase.mdx` antes de esta revisión. S2: versión inglesa; no es evidencia independiente. S3: exploración de cards y dos vídeos de prototipos. S3 demuestra exploración de diseño, no adopción ni resultados operativos. No se encontraron otros documentos por nombre PASE en la carpeta del portfolio. El enlace compartido no pudo recuperarse: [contenido pendiente].

No están disponibles entrevistas originales, registros operativos, reglas de validación, acuerdos financieros ni resultados de pruebas. Esta revisión permite mejorar la documentación y proponer un proceso; no certificar lo que ocurrió en la operación.

El proceso anterior descrito es: ruta ejecutada → revisión semanas después → reconstrucción de evidencia → disputa → resolución. [Canales], [responsables por site] y [momento de facturación] están pendientes. PASE introduce conciliación diaria, validación progresiva, filtros y descarga parametrizada. No se detallan las condiciones de transición entre sistema, proveedor, operación y finanzas. La clasificación con IA se describe como prototipo, no como capacidad desplegada.

### Hallazgos antes de recomendar cambios

| ID | Observación en S1 | Riesgo para el caso | Información necesaria |
| --- | --- | --- | --- |
| H1 | La reconstrucción de memoria se atribuye a entrevistas sin registros accesibles. | Presentar un relato como investigación comprobada. | [Guion, muestra y notas anonimizadas] |
| H2 | No se especifican propietarios, entradas y salidas por etapa. | Ocultar esperas y traspasos. | [Roles, permisos y acuerdos] |
| H3 | La validación progresiva no detalla reglas ni excepciones. | Confundir coincidencia, resolución, conciliación y pago. | [Criterios, plazos y cierre] |
| H4 | Se declara 70 % menos diferencias y 48 horas de resolución. | Atribuir impacto sin denominador, periodo o fuente. | [Reporte y ficha de medición] |
| H5 | Trabajo original y exploración con IA comparten relato sin cronología. | Confundir prototipo posterior con solución desplegada. | [Fechas y estado de versiones] |
| H6 | Las pantallas no incluyen recorridos ni criterios de prueba. | No explicar las decisiones de servicio. | [Tareas, resultados y cambios derivados] |

## Mejoras propuestas

P1, para H1/H6: reconstruir un journey desde el punto de vista del coordinador del proveedor. Primero delimitar una ruta con diferencia, después ordenar acciones y finalmente relacionar fricciones con oportunidades. No inventar emociones ni citas. Contrastar posteriormente con entrevistas y casos reales.

P2, para H2/H3: representar un proceso objetivo con carriles de sistema, proveedor y operación/finanzas; identificar decisiones, evidencia incompleta y retornos. Antes de implementar reglas operativas, completar permisos, plazos, facultades y condiciones de cierre. La implementación de esta revisión es documental y visual, no funcional en Mercado Libre.

P3, para H4: conservar las cifras declaradas en este registro, pero no presentarlas como impacto verificado. El caso muestra un plan de medición con fórmulas y campos pendientes, sin gráficas de resultados inexistentes.

P4, para H5: separar proceso descrito, exploración con IA y propuesta actual. La IA sugiere clasificación; no se le atribuye autorización de ajustes ni cierre financiero.

P5, para H6: crear perfiles provisionales por rol y vincular los vídeos a preguntas de diseño. Reproducción manual con controles; no añadir personas ficticias presentadas como investigación.

Tras este análisis, se amplía el caso ES/EN y se implementan cuatro artefactos con código: perfiles, journey, mapa de proceso y medición. Blueprint y matriz de responsabilidades se entregan aquí como documentación editable. Se conservan etiquetas y recursos originales. No se cambia producción.

## Artefactos

### Tarjetas persona

Intención: distinguir necesidades por rol. Estructura: tarea → información necesaria → fricción descrita → validación pendiente. Se entregan perfiles provisionales porque las personas requieren investigación no disponible. No se añaden nombres, edades, fotografías ni citas.

| Perfil | Tarea | Necesidad propuesta | Fricción descrita | Pendiente |
| --- | --- | --- | --- | --- |
| Coordinación del proveedor | Revisar rutas y sustentar diferencias | Saber qué falta y qué hacer después | Reconstrucción tardía en S1 | [Frecuencia, contexto y autonomía] |
| Operación de Mercado Libre | Contrastar ejecución y ajustes | Distinguir coincidencia de excepción | Volumen incompatible con revisión individual en S1 | [Volumen y priorización] |
| Negocio y finanzas | Resolver excepciones antes de facturar | Evidencia y decisión trazable | Facultades no detalladas | [Autoridad y escalamiento] |

### Customer Journey

Intención: explicar la experiencia, no el funcionamiento interno. Actor: coordinación del proveedor. Escenario: ruta con diferencia. Objetivo: aclararla antes de facturación. Primero se fija una perspectiva, después se ordenan las etapas y finalmente se vincula cada oportunidad con evidencia pendiente. El recorrido actual es reconstruido; el futuro es propuesto.

| Dimensión | Ejecutar | Detectar | Sustentar | Resolver | Conciliar |
| --- | --- | --- | --- | --- | --- |
| Acción reconstruida | Completar viaje | Revisar diferencia tardía | Recuperar lo ocurrido | Participar en disputa | Conocer resultado |
| Contacto | [Registro de ruta] | Revisión financiera | [Canal de evidencia] | [Canal de resolución] | [Registro conciliado] |
| Fricción | [Calidad del registro] | Tiempo desde la ruta | Reconstrucción de memoria | Semanas según S1 | [Visibilidad del resultado] |
| Experiencia propuesta | Conservar ID y ejecución | Revisar a diario | Adjuntar evidencia en contexto | Ver responsable y siguiente acción | Recibir decisión y motivo |
| Pensamientos/emociones | [Pendiente] | [Pendiente] | [Pendiente] | [Pendiente] | [Pendiente] |
| Evidencia necesaria | [Registro real] | [Caso observado] | [Entrevista y evidencia] | [Historial de disputa] | [Conciliación trazable] |

### Mapas de proceso

Intención: hacer visibles decisiones y traspasos. El mapa anterior conserva solo la secuencia de S1. El objetivo usa carriles, tareas, rombos, inicio/fin y conectores dirigidos; no se denomina BPMN certificado. Las ramas identifican decisiones y los retornos explican qué se revisa.

Anterior: ruta ejecutada → revisión tardía → reconstrucción → disputa → resolución. [Responsables originales pendientes].

Propuesto: ejecución registrada → contraste → ¿coincidencia? Si sí, aplicar [regla autorizada] y registrar decisión. Si no, proveedor revisa → ¿evidencia suficiente? Si no, pedir información y volver a revisión; si sí, revisión humana → registrar decisión. Ambas ramas notifican. ¿Solicita revisión? Si sí, volver a revisión humana; si no, registrar conciliación. Una coincidencia no autoriza un pago. El rechazo motivado y la reapertura requieren [política por definir].

### Blueprint propuesto

Intención: conectar experiencia y trabajo interno. Se reutilizan las cinco etapas del journey, luego se separan acciones del proveedor, interacción visible, backstage y soporte. Las líneas nombradas distinguen sus responsabilidades. No es un blueprint histórico recuperado.

| Carril | Ejecutar | Detectar | Sustentar | Resolver | Conciliar |
| --- | --- | --- | --- | --- | --- |
| Evidencia | Registro de ruta | Diferencia | Adjuntos | Decisión motivada | Registro conciliado |
| Proveedor | Completar ruta | Abrir diferencia | Adjuntar evidencia | Consultar o pedir revisión | Consultar resultado |
| Línea de interacción | Proveedor/servicio | Proveedor/servicio | Proveedor/servicio | Proveedor/servicio | Proveedor/servicio |
| Frontstage | Estado de ejecución | Bandeja diaria | Solicitud específica | Estado, responsable y motivo | Confirmación |
| Línea de visibilidad | Visible/interno | Visible/interno | Visible/interno | Visible/interno | Visible/interno |
| Backstage | Vincular ejecución | Contrastar reglas | Validar suficiencia | Resolver excepción | Registrar versión |
| Línea interna | Operación/soporte | Operación/soporte | Operación/soporte | Operación/soporte | Operación/soporte |
| Soporte | [Fuente de rutas] | [Reglas aprobadas] | [Permisos y retención] | [Autoridad financiera] | [Integración de facturación] |

### Responsabilidades propuestas

Intención: evitar que el mapa oculte quién decide. Se identifican actividades y registros antes de asignar autoridad. No se fabrica un RACI definitivo; faltan responsables y aprobadores confirmados.

| Actividad | Ejecución propuesta | Aprobación | Salida |
| --- | --- | --- | --- |
| Capturar ejecución | [Sistema de rutas] | [Dueño de fuente] | ID y marca temporal |
| Aportar evidencia | Coordinación del proveedor | [Rol habilitado] | Adjuntos asociados |
| Resolver diferencia | [Operación habilitada] | [Autoridad según tipo/importe] | Motivo, autor y versión |
| Resolver excepción financiera | [Negocio/finanzas habilitados] | [Autoridad financiera] | Resolución |
| Publicar conciliación | [Servicio de conciliación] | [Responsable de cierre] | Estado y vínculo a facturación |

### Plan de medición y validación

Intención: separar desempeño y percepción. Primero definir eventos de inicio/fin; después unidad de análisis; finalmente comparación entre periodos equivalentes. No hay datos para atribuir resultados.

| Indicador | Definición | Condición pendiente | Valor |
| --- | --- | --- | --- |
| Resolución | Mediana y p90 de `decision_at − difference_opened_at`, horas | [Periodos/sites/cohortes], informar abiertos y pausas | [Pendiente] |
| Diferencias | Rutas con diferencia de facturación / rutas facturadas | [Clasificación estable y denominador] | [Pendiente] |
| Oportunidad | Rutas conciliadas antes del corte / rutas elegibles | [Corte y elegibilidad] | [Pendiente] |
| Retrabajo | Casos reabiertos / cerrados de una cohorte | [Ventana de observación] | [Pendiente] |
| Clasificación IA | Sugerencias correctas / evaluadas contra referencia humana | [Categorías, abstenciones y errores críticos] | [Pendiente] |

Cifras originales preservadas: S1 declaraba “70%” menos diferencias y “48 horas” de resolución. No se elimina el registro de la declaración; no se certifica su exactitud. Falta [reporte original]. No inferir ahorro económico ni causalidad.

Pruebas propuestas: una ruta sin diferencia, una con evidencia incompleta, una excepción financiera y una reapertura. Registrar éxito de tarea, errores críticos, comprensión de estados y traspasos. Acordar [participantes], [criterio de éxito] y [umbral de avance] antes de probar. No se ejecutaron pruebas con usuarios en esta revisión.

## Preparación de Git

Rama local: `codex/pase-process-review`. No push, merge ni despliegue en esta fase. Los cambios previos ajenos se preservan sin incluirlos en el commit. Los dos archivos de PASE ya contenían ajustes de etiquetas: se conservan y quedarán incluidos al versionarlos.

| Archivo | Propósito |
| --- | --- |
| `docs/pase/revision-proceso.md` | Análisis, trazabilidad y artefactos editables |
| `docs/pase/qa.md` | Verificaciones y pendientes |
| `src/components/mdx/PaseArtifacts.astro` | Artefactos visuales con código y ambos idiomas |
| `src/content/projects/mercadolibre-pase.mdx` | Caso revisado en español |
| `src/content/projects-en/mercadolibre-pase.mdx` | Caso equivalente en inglés |
| `docs/pase/process-desktop.png` y `personas-mobile.png` | Capturas locales de QA; no reemplazan los artefactos renderizados con código |

### Fuentes metodológicas

[Journey Mapping 101, NN/g](https://www.nngroup.com/articles/journey-mapping-101/): una perspectiva, escenario, fases, acciones y oportunidades. [Personas Make Users Memorable, NN/g](https://www.nngroup.com/articles/persona/): investigación como base de personas; no completar atributos sin datos. [Service Blueprints: Definition, NN/g](https://www.nngroup.com/articles/service-blueprints-definition/): acciones visibles, internas y soporte. Documentación oficial de [componentes](https://docs.astro.build/en/basics/astro-components/) y [colecciones Astro](https://docs.astro.build/en/guides/content-collections/) para implementar sin cambiar la arquitectura.
