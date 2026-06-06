# Exposoma - stress-test 100 evaluadores

**Fecha:** 2026-06-02
**Instrumento:** Exposoma / Historia de antecedentes (`exposome-scorer.html`).
**Universo evaluado:** 164 items de captura + 12 modulos/dashboard virtuales = 176.
**N:** 100 evaluadores simulados: 25 estudiantes, 25 residentes, 25 clinicos psiquiatras, 25 psiquiatras expertos.
**Metodo:** simulacion cognitiva deterministica basada en estructura del instrumento, campos, pesos, evidencia, sensibilidad, fuente y ventana temporal. No son datos empiricos.
**Score de evaluabilidad proyectado:** 42.0/50 promedio; p10 42.0/50.

## Lectura ejecutiva

Exposoma es potente pero exige mas trabajo de fuente que pMSE: gran parte de la dificultad no esta en apretar Si/No, sino en decidir si el dato viene del paciente, familia, historia clinica, registro legal, documento perinatal o inferencia retrospectiva. La segunda dificultad es temporal: perinatal, infancia, premorbido, lifetime, episodio actual y antes del primer episodio se mezclan si la app no fuerza ventana. La tercera es causal: algunos raters podrian leer asociaciones de riesgo como causalidad individual.

## Top 25 items/modulos mas complicados

| Rank | Item | Seccion | Evaluadores que lo marcaron | Dificultad media | Desacuerdo medio | Cohortes |
|---:|---|---|---:|---:|---:|---|
| 1 | `E2-n5` ¿Antecedente de TDAH infantil/adolescente (inicio esperado antes de los 12 años)? | Antecedentes psicopatologicos lifetime | 97/100 | 63% | 66% | Estudiante:22, Residente:25, Clinico psiquiatra:25, Psiquiatra experto:25 |
| 2 | `E2-3` ¿Alguna vez episodio depresivo mayor (anhedonia, ánimo bajo ≥2 sem)? | Antecedentes psicopatologicos lifetime | 96/100 | 61% | 60% | Estudiante:25, Residente:25, Clinico psiquiatra:22, Psiquiatra experto:24 |
| 3 | `B-n2` Enfermedad mental o intento suicida en el hogar (ACE; antes de los 18 años) | Adversidad y trauma infantil | 91/100 | 60% | 56% | Estudiante:23, Residente:21, Clinico psiquiatra:25, Psiquiatra experto:22 |
| 4 | `E2-n4` ¿Antecedente de TLP / rasgos de personalidad del cluster B-C (esquizotípico, narcisista)? | Antecedentes psicopatologicos lifetime | 90/100 | 61% | 57% | Estudiante:20, Residente:24, Clinico psiquiatra:21, Psiquiatra experto:25 |
| 5 | `F6` Contacto legal o condenas antes de los 18 anos | Forense y legal | 72/100 | 59% | 56% | Estudiante:15, Residente:18, Clinico psiquiatra:23, Psiquiatra experto:16 |
| 6 | `10` IMC materno alto en embarazo | Perinatales y desarrollo temprano | 65/100 | 58% | 59% | Estudiante:20, Residente:16, Clinico psiquiatra:14, Psiquiatra experto:15 |
| 7 | `E4-2` CI/capacidad cognitiva premórbida alta (protector; medir antes del inicio/prodromo) | Marcadores premorbidos y rasgos (umbrella) | 63/100 | 58% | 53% | Estudiante:23, Residente:18, Clinico psiquiatra:12, Psiquiatra experto:10 |
| 8 | `E2-n3` ¿Antecedente de inhibición conductual en la infancia / trastorno internalizante temprano? | Antecedentes psicopatologicos lifetime | 62/100 | 57% | 59% | Estudiante:19, Residente:16, Clinico psiquiatra:12, Psiquiatra experto:15 |
| 9 | `B-n3` Miembro del hogar encarcelado (ACE; antes de los 18 años) | Adversidad y trauma infantil | 51/100 | 57% | 46% | Estudiante:8, Residente:17, Clinico psiquiatra:18, Psiquiatra experto:8 |
| 10 | `8` Edad materna ≥40 / edad parental al inicio del t. ánimo | Perinatales y desarrollo temprano | 48/100 | 56% | 55% | Estudiante:11, Residente:14, Clinico psiquiatra:11, Psiquiatra experto:12 |
| 11 | `A-n5` Apgar bajo (<7) al nacer | Perinatales/neonatales y depresion posparto (umbrella) | 46/100 | 57% | 50% | Estudiante:11, Residente:9, Clinico psiquiatra:10, Psiquiatra experto:16 |
| 12 | `A3-10` CI/cognición premórbida baja (IQ 70-85 o <70; referencia 100-115) | Hitos del neurodesarrollo y marcadores premorbidos | 46/100 | 57% | 57% | Estudiante:12, Residente:14, Clinico psiquiatra:14, Psiquiatra experto:6 |
| 13 | `E2-n2` ¿Antecedente personal de trastorno psiquiátrico previo (cualquiera)? | Antecedentes psicopatologicos lifetime | 43/100 | 57% | 46% | Estudiante:6, Residente:6, Clinico psiquiatra:13, Psiquiatra experto:18 |
| 14 | `F7` Contacto legal o condenas despues de los 18 anos | Forense y legal | 38/100 | 56% | 48% | Estudiante:9, Residente:13, Clinico psiquiatra:12, Psiquiatra experto:4 |
| 15 | `B-n1` Abuso de sustancias en el hogar (ACE; antes de los 18 años) | Adversidad y trauma infantil | 36/100 | 57% | 47% | Estudiante:13, Residente:10, Clinico psiquiatra:12, Psiquiatra experto:1 |
| 16 | `E2-6` ¿Alguna vez ansiedad generalizada/preocupación incontrolable persistente? | Antecedentes psicopatologicos lifetime | 31/100 | 55% | 47% | Estudiante:9, Residente:14, Clinico psiquiatra:5, Psiquiatra experto:3 |
| 17 | `E2-2` ¿Alguna vez episodio de ánimo elevado/hipomanía (energía↑, sueño↓, gasto/riesgo)? | Antecedentes psicopatologicos lifetime | 29/100 | 55% | 53% | Estudiante:8, Residente:7, Clinico psiquiatra:12, Psiquiatra experto:2 |
| 18 | `E2-n1` ¿Alguna vez ansiedad de separación en la infancia? | Antecedentes psicopatologicos lifetime | 25/100 | 55% | 55% | Estudiante:4, Residente:8, Clinico psiquiatra:10, Psiquiatra experto:3 |
| 19 | `15` SSRI/psicotrópico materno en embarazo | Perinatales y desarrollo temprano | 20/100 | 55% | 53% | Estudiante:6, Residente:2, Clinico psiquiatra:2, Psiquiatra experto:10 |
| 20 | `20` Abuso físico | Adversidad y trauma infantil | 19/100 | 55% | 47% | Estudiante:1, Residente:6, Clinico psiquiatra:6, Psiquiatra experto:6 |
| 21 | `E2-n6` ¿Depresión juvenil / episodio depresivo antes de la adultez (<18 años)? | Antecedentes psicopatologicos lifetime | 18/100 | 55% | 46% | Estudiante:9, Residente:2, Clinico psiquiatra:3, Psiquiatra experto:4 |
| 22 | `C-n2` Sexo masculino (riesgo TEA / protector ansiedad-depresión) | Demografico-vital, laboral y crianza (umbrella) | 17/100 | 57% | 53% | Residente:2, Clinico psiquiatra:1, Psiquiatra experto:14 |
| 23 | `21` Abuso sexual | Adversidad y trauma infantil | 17/100 | 55% | 47% | Estudiante:3, Residente:4, Clinico psiquiatra:2, Psiquiatra experto:8 |
| 24 | `C-n13` Antecedente familiar de ansiedad parental | Demografico-vital, laboral y crianza (umbrella) | 8/100 | 55% | 55% | Estudiante:1, Psiquiatra experto:7 |
| 25 | `14` Tabaco materno en embarazo | Perinatales y desarrollo temprano | 8/100 | 53% | 54% | Estudiante:2, Residente:2, Clinico psiquiatra:1, Psiquiatra experto:3 |

## Carga por seccion

| Seccion | Hits en top-12 | Items implicados | Dificultad media | Desacuerdo medio |
|---|---:|---:|---:|---:|
| Antecedentes psicopatologicos lifetime | 503 | 12 | 57% | 52% |
| Adversidad y trauma infantil | 221 | 6 | 57% | 48% |
| Perinatales y desarrollo temprano | 150 | 7 | 55% | 50% |
| Forense y legal | 118 | 6 | 55% | 50% |
| Marcadores premorbidos y rasgos (umbrella) | 65 | 2 | 55% | 47% |
| Hitos del neurodesarrollo y marcadores premorbidos | 63 | 4 | 55% | 46% |
| Perinatales/neonatales y depresion posparto (umbrella) | 51 | 2 | 57% | 50% |
| Demografico-vital, laboral y crianza (umbrella) | 29 | 3 | 55% | 51% |

## Que veria cada cohorte

### Estudiante
1. `E2-3` ¿Alguna vez episodio depresivo mayor (anhedonia, ánimo bajo ≥2 sem)? (24/25)
2. `B-n2` Enfermedad mental o intento suicida en el hogar (ACE; antes de los 18 años) (22/25)
3. `E2-n5` ¿Antecedente de TDAH infantil/adolescente (inicio esperado antes de los 12 años)? (21/25)
4. `E4-2` CI/capacidad cognitiva premórbida alta (protector; medir antes del inicio/prodromo) (20/25)
5. `E2-n4` ¿Antecedente de TLP / rasgos de personalidad del cluster B-C (esquizotípico, narcisista)? (20/25)
6. `10` IMC materno alto en embarazo (19/25)
7. `E2-n3` ¿Antecedente de inhibición conductual en la infancia / trastorno internalizante temprano? (14/25)
8. `B-n1` Abuso de sustancias en el hogar (ACE; antes de los 18 años) (13/25)
9. `F6` Contacto legal o condenas antes de los 18 anos (12/25)
10. `A-n5` Apgar bajo (<7) al nacer (10/25)

### Residente
1. `E2-n5` ¿Antecedente de TDAH infantil/adolescente (inicio esperado antes de los 12 años)? (25/25)
2. `E2-3` ¿Alguna vez episodio depresivo mayor (anhedonia, ánimo bajo ≥2 sem)? (24/25)
3. `E2-n4` ¿Antecedente de TLP / rasgos de personalidad del cluster B-C (esquizotípico, narcisista)? (23/25)
4. `B-n2` Enfermedad mental o intento suicida en el hogar (ACE; antes de los 18 años) (20/25)
5. `F6` Contacto legal o condenas antes de los 18 anos (17/25)
6. `E4-2` CI/capacidad cognitiva premórbida alta (protector; medir antes del inicio/prodromo) (16/25)
7. `B-n3` Miembro del hogar encarcelado (ACE; antes de los 18 años) (15/25)
8. `E2-n3` ¿Antecedente de inhibición conductual en la infancia / trastorno internalizante temprano? (14/25)
9. `10` IMC materno alto en embarazo (13/25)
10. `A3-10` CI/cognición premórbida baja (IQ 70-85 o <70; referencia 100-115) (13/25)

### Clinico psiquiatra
1. `E2-n5` ¿Antecedente de TDAH infantil/adolescente (inicio esperado antes de los 12 años)? (25/25)
2. `B-n2` Enfermedad mental o intento suicida en el hogar (ACE; antes de los 18 años) (24/25)
3. `F6` Contacto legal o condenas antes de los 18 anos (23/25)
4. `E2-3` ¿Alguna vez episodio depresivo mayor (anhedonia, ánimo bajo ≥2 sem)? (21/25)
5. `E2-n4` ¿Antecedente de TLP / rasgos de personalidad del cluster B-C (esquizotípico, narcisista)? (19/25)
6. `B-n3` Miembro del hogar encarcelado (ACE; antes de los 18 años) (15/25)
7. `10` IMC materno alto en embarazo (14/25)
8. `A3-10` CI/cognición premórbida baja (IQ 70-85 o <70; referencia 100-115) (13/25)
9. `E2-n2` ¿Antecedente personal de trastorno psiquiátrico previo (cualquiera)? (12/25)
10. `B-n1` Abuso de sustancias en el hogar (ACE; antes de los 18 años) (11/25)

### Psiquiatra experto
1. `E2-n4` ¿Antecedente de TLP / rasgos de personalidad del cluster B-C (esquizotípico, narcisista)? (25/25)
2. `E2-n5` ¿Antecedente de TDAH infantil/adolescente (inicio esperado antes de los 12 años)? (25/25)
3. `B-n2` Enfermedad mental o intento suicida en el hogar (ACE; antes de los 18 años) (22/25)
4. `E2-3` ¿Alguna vez episodio depresivo mayor (anhedonia, ánimo bajo ≥2 sem)? (22/25)
5. `A-n5` Apgar bajo (<7) al nacer (15/25)
6. `10` IMC materno alto en embarazo (15/25)
7. `E2-n2` ¿Antecedente personal de trastorno psiquiátrico previo (cualquiera)? (15/25)
8. `F6` Contacto legal o condenas antes de los 18 anos (15/25)
9. `C-n2` Sexo masculino (riesgo TEA / protector ansiedad-depresión) (11/25)
10. `E2-n3` ¿Antecedente de inhibición conductual en la infancia / trastorno internalizante temprano? (10/25)

## Problemas que emergen

1. **Fuente insuficiente.** Los items perinatales, hitos tempranos, ACE y forense requieren colateral o documento; si se contestan solo por autorreporte adulto, baja confiabilidad.
2. **Ventana temporal inestable.** Premorbido, antes de 18, lifetime, primera exposicion y periodo actual necesitan mostrarse como chips obligatorios o al menos visibles.
3. **Exposicion vs consecuencia.** Historia lifetime y consumo de sustancias pueden ser causa, consecuencia, prodromo o comorbilidad; el rater necesita una regla de atribucion.
4. **Asociacion no es causalidad individual.** Los pesos y outcomes son utiles para perfil, pero deben rotularse como carga de riesgo, no etiologia del caso.
5. **Items sensibles producen subregistro.** Trauma, sexualidad, suicidio, legal/forense y sustancias requieren guion de entrevista y opcion de fuente colateral.

## Mejoras pequenas con mayor retorno

- Agregar al costado de cada item chips `Fuente esperada`: paciente, familiar, historia clinica, registro/documento, no verificable.
- Agregar `Ventana`: perinatal, infancia, antes de 18, premorbido, lifetime, ultimo ano, actual.
- En sustancias, mantener D2 como especificador central: precede al episodio / durante episodio / persiste tras abstinencia.
- En dashboard, llamar `carga asociativa por outcome`, no causalidad; mostrar denominador y items que alimentan cada outcome.
- En ACE/forense, usar lenguaje neutral + marcador de sensibilidad para evitar falsos negativos por verguenza o temor legal.

## Archivos generados

- `observer-sim-100.json`: datos crudos.
- `observadores/EXP-OBS-001.md` ... `EXP-OBS-100.md`: mini-reportes individuales.
