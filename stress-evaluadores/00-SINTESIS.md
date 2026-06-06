# Stress-test de calificadores del pMSE — Síntesis

> **Qué es esto.** Simulación de un estudio de confiabilidad inter-evaluador del
> **pMSE** (Acto ④ del Intake Unificado · `pmse-scorer-fenotipos.html`). Cuatro cohortes
> de 100 calificadores cada una —estudiantes, residentes, psiquiatras formados, expertos—
> aplican el examen mental al mismo material clínico. La pregunta no es *qué puntaje sacan*,
> sino **qué les resulta difícil de calificar y por qué**, estratificado por nivel de pericia.
>
> **Alcance:** nivel-instrumento (no un caso único). Cada cohorte tiene su propio MD.
> **Método:** cognitivo/psicométrico, no empírico. Las predicciones de κ (kappa) y los
> "comentarios de cohorte" son **razonamientos derivados de la estructura del instrumento**,
> no datos publicados. Ninguna cifra de confiabilidad aquí es un hallazgo medido.
> `[SUPUESTO]` interpreté "X" como el instrumento genérico aplicado por cada cohorte; reusable
> también para la célula `3-output/book-bmse/`.
>
> Autor: Javier Flores-Cohaila (con Luci) · 2026-06-01

---

## El hallazgo que mueve el 80% (lente Hannibal)

**La dificultad de calificación no es monótona con la pericia, y peor aún: no es la misma
dificultad.** No es que el experto encuentre "menos difícil" lo que el estudiante encuentra
"muy difícil". Es que **cada nivel choca contra una pared distinta**:

| Cohorte | Pared dominante | Naturaleza del fallo |
|---|---|---|
| Estudiantes | **Detección y mecánica de anclas** | No ven el fenómeno; califican la *palabra* del ancla, no el signo. Sobre-patologizan. |
| Residentes | **Traducción categorial→dimensional** | Ven el fenómeno pero lo comprimen al DSM que aprendieron; cierre prematuro hacia un dx. |
| Psiquiatras | **Gestalt que contamina la grilla** | El patrón se impone *top-down* y rellena las 32 dims para que cuadren; sub-administran lo bedside. |
| Expertos | **Ontología y subdeterminación** | No "no pueden", sino *no aceptan*: la escala fusiona constructos no equivalentes y fuerza precisión falsa. |

**Implicación estratégica:** un único entrenamiento no resuelve la confiabilidad. El estudiante
necesita **detección y maniobras**; el residente, **desaprender la categoría**; el psiquiatra,
**suspender la gestalt**; el experto **no necesita entrenamiento — necesita que el instrumento
se decida** sobre sus fusiones de constructo. Los ítems donde *los expertos* divergen entre sí
son señal de **deuda de diseño**, no de deuda de entrenamiento. Esos son los candidatos a
revisión de ítem (o a aceptar explícitamente como irreductibles).

**Corolario contraintuitivo:** algunos ítems son **más confiables entre estudiantes que entre
expertos**. Un estudiante puntúa la convicción 3↔4 "a ojo" y converge con otros estudiantes por
ignorancia compartida; dos expertos la debaten hasta el desacuerdo porque cada uno trae un marco
(Jaspers vs. McKenna vs. BABS). Ignorancia compartida produce acuerdo espurio: **κ alto ≠ validez**.

---

## Los 15 drivers de dificultad (taxonomía transversal)

Cada cohorte choca con un subconjunto. Se referencian por código (D#) en cada MD.

- **D1 — Signo + magnitud en escala bipolar.** Ubicar polo (−/+) *y* grado (1/2) en −2..+2.
- **D2 — Fusión mismo-signo-distinto-circuito.** Polos clínicamente opuestos en un solo eje
  (F6.amenaza −2 *boldness*/temeridad vs +2 pánico; E.regulación −2 sub- vs +2 sobre-regulación;
  F2.velocidad retardo vs agitación). El eje obliga a tratar opuestos como continuo.
- **D3 — Descomposición RDoC vs entrenamiento categorial.** F3 parte la hedonia en *liking*
  (tono) / *wanting* (anticipación) / *drive*; F6.amenaza en tónico [T] / fásico [F].
- **D4 — Compuertas ordinales de convicción (F4.contenido 0→4).** Saltos gatillados por
  frecuencia+interferencia (0→1), ego-distonía (1→2), insight (2→3), corregibilidad (3→4).
- **D5 — Patología por *exceso* del polo +.** Calificar el exceso de una capacidad normalmente
  buena: F7 *hypermentalizing*, pseudo-insight, *self* performativo/masking, sobre-regulación,
  confabulación, anticipación inflada. Un paciente articulado e "insightful" puntuando +2 patológico.
- **D6 — El Gate + fluctuación (NC.conciencia).** Engañosamente fácil ("0 vigilia normal"),
  pero la validez transversal de *todo* el examen depende de él. Obnubilación −1 y fluctuación
  se pierden si no se testea activamente. Máximo riesgo (delirium/orgánico).
- **D7 — Contratransferencia como dato (fila `contra`).** El instrumento usa la reacción del
  clínico como evidencia ("me siento observado", "agotamiento del clínico", "impulso de tranquilizar").
- **D8 — Maniobras bedside: administración + norma.** NC.perfil (fluencia clusters/switches,
  digit span F/B ratio, TMT B/A, clock, recall encoding vs retrieval) y NM (Luria, dismetría,
  disdiadococinesia, parkinsonismo, acatisia). Requiere administrar bien *y* puntuar contra norma.
- **D9 — Especificadores de mecanismo (inferencia etiológica).** apetito −2 (melancólico/
  inflamatorio/iatrogénico/interoceptivo); drive − (falta [F] vs inhibición [I]); expresividad
  (negativo/depresivo/neurológico/disociativo). Exige etiología *durante* la fenomenología.
- **D10 — Agregación por canal / scores computados.** F6.animo-meta = min(canal depresivo,
  canal ansioso); F4.contenido se reparte en 7 canales; sueño en insomnio/necesidad-reducida;
  PSP en sub-canales déficit/exceso. Mal-poblar un sub-canal corrompe el padre.
- **D11 — Heterogeneidad de tipo de escala.** Déficit (0/−1/−2), bipolar (−2..+2), convicción
  (0..4), two-axis (P), multitest. Cambiar de modo bajo presión induce errores de modo.
- **D12 — Definir el "0".** "Proporcional/calibrado/normal" exige un modelo normativo de mente
  sana *y* una tasa base poblacional. El "0" de un psiquiatra de hospital público de Lima ≠ el de
  un experto académico.
- **D13 — Disciplina de marco temporal.** El bMSE es *transversal-ahora*; constructos como
  coherencia autobiográfica (reliving), self-integración o contenido filtran lo lifetime/episódico.
- **D14 — Propiedad del constructo / solapamiento de fronteras.** ¿Qué eje *posee* el fenómeno?
  El reliving traumático cae en F7.coherencia −2; una alucinación en F2.sensorial +2; la paranoia
  se reparte entre F4.contenido, F7.testing y F7.mentalización-otro. Doble conteo o vacío.
- **D15 — Fidelidad del cross-walk de marcos.** Las filas `frameworks`/`clasica` mapean cada polo
  a AMDP/ICD-11/Fish/HiTOP; algunos mapeos son equivalencias forzadas que solo el experto detecta.

---

## Mapa de calor: dónde duele cada driver, por cohorte

`■` dominante · `▨` significativo · `·` menor o ausente

| Driver | Estudiantes | Residentes | Psiquiatras | Expertos |
|---|:--:|:--:|:--:|:--:|
| D1 Signo+magnitud | ■ | ▨ | · | · |
| D2 Fusión de polos | ▨ | ▨ | ▨ | ■ |
| D3 Descomp. RDoC | ▨ | ■ | ▨ | · |
| D4 Convicción 0→4 | ■ | ■ | ▨ | ■ |
| D5 Patología por exceso (+) | ■ | ■ | ▨ | ▨ |
| D6 Gate + fluctuación | ■ | ▨ | ▨ | · |
| D7 Contratransferencia | ■ | ▨ | ▨ | ▨ |
| D8 Maniobras bedside | ■ | ▨ | ■ | · |
| D9 Mecanismo etiológico | ■ | ▨ | · | ▨ |
| D10 Agregación por canal | ▨ | ▨ | ▨ | ▨ |
| D11 Tipo de escala | ■ | ▨ | · | · |
| D12 Definir el "0" | ■ | ▨ | ▨ | ■ |
| D13 Marco temporal | ▨ | ▨ | ▨ | ▨ |
| D14 Propiedad de constructo | · | ▨ | ▨ | ■ |
| D15 Cross-walk de marcos | · | · | ▨ | ■ |

**Lectura del mapa:** la masa de `■` migra de la esquina superior-izquierda (mecánica, detección)
a la inferior-derecha (ontología, validez). El estudiante no llega a ver D14/D15; el experto ya
no tropieza con D1/D6/D8. **El único driver verdaderamente universal es D10 y D13** —agregación
por canal y disciplina temporal fallan en *todos* los niveles, porque no dependen de pericia
clínica sino de leer bien la mecánica del instrumento. Ese es el blanco de mejora con mayor ROI:
arreglar D10/D13 sube confiabilidad en las 4 cohortes a la vez.

---

## Los 6 ítems-frontera (donde el desacuerdo es estructural, no de nivel)

Ranking de ítems que **fracturan a las 4 cohortes** —cada una por una razón distinta— y por
tanto son los de menor confiabilidad esperada del instrumento:

1. **F4.contenido 3↔4** (idea sobrevalorada extrema vs delusión). D4·D14. El problema fenomenológico
   clásico; el especificador `[psicótico]/[no-psicótico]` pide la decisión que la literatura no resuelve.
2. **F7.coherencia-autobiográfica −2** (reliving) vs **F2.sensorial +2** (alucinación) vs psicosis.
   D14. ¿Qué eje posee la experiencia intrusiva? El instrumento avisa del riesgo pero no lo cierra.
3. **F6.amenaza −2 (boldness)**. D2. Un *rasgo* (temeridad) en el polo negativo de un eje de *estado*;
   los marcos `AMDP/ICD/DSM` declaran "no captura". Fusión que el experto rechaza y el novato no ve.
4. **E.egodistonía como eje independiente** (META). D14. Constructo nuevo (Girone 2026 está citado);
   el cuadrante E=+2 ∧ I=−2 ("riesgo silente") es potente pero su rating es contraintuitivo.
5. **F7.self-integración +1/+2 (masking/performativo)**. D5·D13. Requiere lente de neurodivergencia
   y mezcla rasgo/estado; la mayoría no fue entrenada en camuflaje autista como ítem de examen mental.
6. **F5.regulación atencional / G.coherencia / E.regulación en polo +**. D2·D5. "Sobre-control",
   "sobre-estructuración", "foco sticky": calificar *demasiada* regulación como hallazgo.

> Estos 6 no se arreglan entrenando calificadores. Son decisiones de diseño pendientes
> (lente Lucifer: el bottleneck es ontológico, no pedagógico). Ver cada MD para el detalle por cohorte.

---

## Archivos

- [`01-estudiantes.md`](01-estudiantes.md) — pared: detección y mecánica.
- [`02-residentes.md`](02-residentes.md) — pared: categorial→dimensional.
- [`03-psiquiatras.md`](03-psiquiatras.md) — pared: gestalt que contamina.
- [`04-expertos.md`](04-expertos.md) — pared: ontología y subdeterminación.
