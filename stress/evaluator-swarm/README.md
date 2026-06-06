# Stress-test evaluativo pMSE · swarm de cohortes

**Fecha:** 2026-06-01  
**Instrumento:** pMSE dentro de `3-output/unified-intake/intake-unificado.html`  
**Simulacion:** 4 cohortes de 100 evaluadores cada una: estudiantes, residentes, psiquiatras formados y expertos.  
**Base local:** `stress/schema.json`, `stress/REPORTE-STRESS-100.md`, `stress/results.json`, `stress/audit-rows.json`, `3-output/bmse/book-bmse/proposal/bmse-data.js`.

## Archivos

| Cohorte | Reporte |
|---|---|
| 100 estudiantes | [`01_estudiantes_pMSE_dificultades.md`](01_estudiantes_pMSE_dificultades.md) |
| 100 residentes | [`02_residentes_pMSE_dificultades.md`](02_residentes_pMSE_dificultades.md) |
| 100 psiquiatras formados | [`03_psiquiatras_formados_pMSE_dificultades.md`](03_psiquiatras_formados_pMSE_dificultades.md) |
| 100 expertos | [`04_expertos_pMSE_dificultades.md`](04_expertos_pMSE_dificultades.md) |

## Lectura ejecutiva

El pMSE es facil de completar en sindromes francos: psicosis positiva, mania, depresion severa y suicidalidad explicita. El stress-test previo ya mostraba 100/100 reportes completos, 0 errores JS, seguridad/3ST robustos y buen rendimiento en nucleos sindromicos.

Lo dificil aparece en los bordes donde el evaluador debe separar **estado actual, curso longitudinal, rasgo, organicidad y fuente del dato**. La dificultad no desaparece con la experticia; cambia de forma. Los estudiantes se traban en la semantica y direccion de la escala; los residentes en constructos solapados; los psiquiatras formados en organicidad lenta y fenomenos motores; los expertos en validez, confiabilidad interevaluador y reglas de discrepancia.

## Consenso transversal

| Prioridad | Campo/dominio | Por que es dificil | Riesgo |
|---:|---|---|---|
| 1 | `NC.conciencia` | `-1/-2` reflejan reduccion de vigilancia; `+1/+2` reflejan hiperalerta/hipervigilancia. El gate actual trata `NC.conciencia != 0` como no interpretable. | Falsa cuarentena organica en ansiedad/panico, como `K11`; o subdeteccion de delirium hipoactivo si se banaliza el polo negativo. |
| 2 | `NC.fluencia`, `NC.digit`, `NC.tmt`, `NC.clock`, `NC.recall` | Exigen prueba breve real, ajuste por edad/educacion/idioma y comparacion con basal. | Falsos negativos de organicidad cronica en `F04`, `F08`, `F09`, `F11`, `C08`, `K14`, `L02`, `N08`. |
| 3 | `NM.estereotipia`, `NM.diskinesia`, `NM.tic`, `NM.acatisia`, `NM.parkinsonismo`, `NM.tremor` | El signo motor sin temporalidad/etiologia no discrimina tic, neurodesarrollo, catatonia, discinesia tardia o extrapiramidalismo agudo. | Rule-in organico falso, como `M20`; o iatrogenia si acatisia se llama ansiedad. |
| 4 | `F7.testing`, `I.insight`, `J.juicio`, `E.egodistonia` | Testing de realidad, insight, juicio y egodistonia son constructos cercanos pero no equivalentes. | Capacidad, adherencia, riesgo y psicosis pueden quedar mal ponderados. |
| 5 | `F1.expresividad`, `F2.velocidad`, `F3.drive`, `F3.anticipación`, `F3.tono` | El mismo polo bajo puede ser depresion, negativos, catatonia, cannabis, neurocognicion o rasgo basal; el polo alto puede ser mania, ansiedad o acatisia. | Atractor depresivo para negativos (`A07`, `N10`) o atractor maniforme/externalizante para ansiedad/frontalidad. |
| 6 | `G.arousal`, `G.coherencia`, `G.sueno-ritmo`, `G.interocepcion` | Se observan parcialmente y dependen de contexto; arousal/interocepcion altos pueden ser panico, trauma, mania o delirium. | Ansiedad/TEPT desplazados a activacion o neurocognitivo (`D01`, `D02`, `E01`, `K11`). |
| 7 | `FUN.psp_utiles`, `FUN.psp_relaciones`, `FUN.psp_autocuidado`, `FUN.psp_disruptivas` | Requieren separar basal, episodio actual y peor momento; ademas ambos polos pueden ser patologicos. | Severidad inflada por crisis puntual o discapacidad cronica minimizada. |
| 8 | `EXT.*` de suicidio, violencia, sustancias, rechazo y capacidad | Son faciles cuando el dato es explicito, pero fragiles con colateral incompleto, negacion o discrepancia Historia-pMSE. | Falso verde si se mira solo la apariencia actual; requiere triangulacion tipo `K05/K06`. |

## Diferencias por cohorte

| Cohorte | Dificultad dominante | Error tipico | Necesidad principal |
|---|---|---|---|
| Estudiantes | Traducir observacion clinica a escala bipolar y no confundir signo con diagnostico. | Marcar `0` por omision; leer todo `+2` como mas grave; confundir negativos con depresion. | Micro-anclas, casos de oro y entrenamiento en polos. |
| Residentes | Separar constructos cercanos y decidir etiologia/temporalidad. | Colapsar `F7.testing`/`I.insight`/`J.juicio`; confundir acatisia, ansiedad y mania. | Rubricas diferenciales y arboles de decision. |
| Psiquiatras formados | Integrar pMSE dimensional con juicio clinico y curso longitudinal. | Confiar demasiado en `NC.conciencia=0`; leer frontalidad/organicidad lenta como primaria. | Alertas de organicidad lenta y fuentes de dato. |
| Expertos | Confiabilidad, validez incremental y reglas de discrepancia. | Puntuar bien el item, pero no saber cuanto debe pesar en gate, organicidad o macrofenotipo. | Transparencia del clasificador y trazabilidad de pesos. |

## Recomendaciones priorizadas

1. **Separar el gate de conciencia por direccion.** `NC.conciencia <= -1` o fluctuacion/desorientacion deberia activar sospecha de delirium; `+1/+2` debe leerse como hipervigilancia/hiperarousal y no como reduccion de conciencia.
2. **Distinguir `0 observado` de `0 por omision`.** En `NC.*`, `NM.*` y `FUN.psp_*`, el instrumento deberia registrar si el dato fue probado, inferido, colateral o barrido como normal.
3. **Agregar panel de organicidad lenta.** Si hay `NC.* <= -1`, inicio tardio, curso progresivo, cambio de personalidad, `J.juicio` bajo o `FUN.psp_*` deteriorado, mostrar alerta aunque `NC.conciencia=0`.
4. **Forzar temporalidad/etiologia en motor.** Todo `NM.* != 0` deberia pedir: agudo/de novo, cronico del desarrollo, farmacologico agudo, tardio por antipsicotico, catatonico o funcional.
5. **Desacoplar metacognicion.** Mostrar al lado de `F7.testing`, `I.insight`, `J.juicio` y `E.egodistonia` una mini-rubrica: realidad compartida, conciencia de enfermedad, decision practica y relacion subjetiva con el problema.
6. **Separar PSP basal vs actual.** `FUN.psp_*` necesita ventana temporal y fuente: paciente, informante, registro o juicio clinico.
7. **Transparentar el macrofenotipo.** Cuando el macro sea inesperado, listar los 5 items pMSE que mas arrastraron la clasificacion para poder corregir entradas antes de cerrar.

## Conclusion

El cuello de botella no es el numero de items. Es la **calibracion de bordes**: conciencia vs arousal, cognicion cronica vs estado primario, movimiento vs etiologia, negativos vs depresion, testing vs insight/juicio, y funcionamiento basal vs episodio actual. Esas son las zonas donde 400 evaluadores simulados verian mayor dificultad y donde una mejora de UX/training tendria mayor retorno clinico.
