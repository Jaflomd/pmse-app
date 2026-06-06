# Simulación de profundidad por modo · Intake Unificado

Fecha: 2026-06-03  
Corpus: 90 casos stress-test full-marked  
Raters simulados: 100 triage + 100 normal/clinico por ítem, con ruido de ponderación.

## Definición operativa

- **Triage** = decidir *stat*: seguridad, nivel de atención, urgencia, cuarentena orgánica/conciencia, riesgo suicida/hetero/negligencia/capacidad, y diferenciales que cambian la conducta inmediata.
- **Normal** = decidir clínicamente: suficiente granularidad para DSM/CIE por buckets de criterios, hipótesis principal, comorbilidad, curso y tratamiento.
- **Research** = recolectar todo: exposoma completo, longitudinalidad, texto, especificadores y variables de modelado.

Importante: el mapeo DSM/CIE es por **bucket clínico**, no copia literal de criterios.

## Resultado de conteo

- Exposoma: triage: 55 · standard: 69 · research: 65
- pMSE: triage: 42 · standard: 22 · research: 0
- Funcionamiento: triage = 1 score global; normal = 7 ejes; research = matriz longitudinal completa.
- Historia: triage = 9 campos breves; normal = 5 bloques; research = 5 capas narrativas.

## Cobertura DSM/CIE

Triage cubre: Riesgo 33 · Bipolaridad 20 · Ansiedad/TEPT 18 · Psicosis 17 · Personalidad 17 · Depresion 16 · Sustancias 9 · Delirium/demencia 6 · TOC y relacionados 4 · TEA/TDAH 4 · TCA/somatico 3

Normal agrega: TEA/TDAH 36 · Depresion 32 · Delirium/demencia 24 · Psicosis 13 · Ansiedad/TEPT 11 · Bipolaridad 8 · TCA/somatico 8 · Personalidad 8 · Sustancias 5 · TOC y relacionados 2

No quedan buckets DSM/CIE completamente sin cobertura fuera de research.

## Ítems que entran en TRIAGE

| módulo | id | ítem | por qué entra | DSM/CIE bucket |
|---|---:|---|---|---|
| exposoma | 37 | Enfermedad mental grave parental/familiar de psicosis | seguridad/stat, criterios DSM/CIE, señal en casos · 1.00/1.00 | Psicosis, Ansiedad/TEPT |
| exposoma | FH-SZA | Antecedente familiar de trastorno esquizoafectivo | seguridad/stat, criterios DSM/CIE, calculadora · 1.00/1.00 | Psicosis, Bipolaridad |
| exposoma | FH-SUD | Antecedente familiar de trastorno por sustancias | seguridad/stat, criterios DSM/CIE, calculadora · 1.00/1.00 | Bipolaridad, Sustancias |
| exposoma | 19 | Abuso emocional | seguridad/stat, criterios DSM/CIE, calculadora · 1.00/1.00 | Depresion, Ansiedad/TEPT, Personalidad |
| exposoma | 20 | Abuso físico | seguridad/stat, criterios DSM/CIE, calculadora · 1.00/1.00 | Depresion, Ansiedad/TEPT, Personalidad |
| exposoma | 21 | Abuso sexual | seguridad/stat, criterios DSM/CIE, calculadora · 1.00/1.00 | Depresion, Ansiedad/TEPT, Personalidad, TCA/somatico |
| exposoma | 24 | Bullying/victimización por pares | seguridad/stat, criterios DSM/CIE, calculadora · 1.00/1.00 | Psicosis, Ansiedad/TEPT |
| exposoma | 27 | Violencia doméstica | seguridad/stat, criterios DSM/CIE, calculadora · 1.00/1.00 | Depresion, Riesgo |
| exposoma | 29 | Trauma/evento traumático (cualquiera) | seguridad/stat, calculadora, señal en casos · 1.00/1.00 | Ansiedad/TEPT |
| exposoma | B-n2 | Enfermedad mental o intento suicida en el hogar (ACE; antes de los 18 años) | seguridad/stat, calculadora, señal en casos · 1.00/1.00 | Riesgo |
| exposoma | 42 | Cannabis (intenso/inicio temprano) | seguridad/stat, criterios DSM/CIE, calculadora · 1.00/1.00 | Psicosis, Sustancias |
| exposoma | 46 | Otras sustancias/abuso | seguridad/stat, criterios DSM/CIE, señal en casos · 1.00/1.00 | Ansiedad/TEPT, TOC y relacionados, Sustancias |
| exposoma | E2-1 | ¿Alguna vez síntomas psicóticos atenuados (ideas raras, percepciones inusuales, suspica… | seguridad/stat, señal en casos · 1.00/1.00 | Psicosis |
| exposoma | E2-3 | ¿Alguna vez episodio depresivo mayor (anhedonia, ánimo bajo ≥2 sem)? | criterios DSM/CIE, calculadora, señal en casos · 1.00/1.00 | Depresion, Ansiedad/TEPT, Delirium/demencia |
| exposoma | E2-10 | ¿Alguna vez consumo problemático de alcohol/sustancias? | seguridad/stat, señal en casos, modificable · 1.00/1.00 | Sustancias |
| exposoma | E2-12 | ¿Alguna vez intento de suicidio / conducta suicida? | seguridad/stat, criterios DSM/CIE, señal en casos · 1.00/1.00 | Personalidad, Riesgo |
| exposoma | E2-n2 | ¿Antecedente personal de trastorno psiquiátrico previo (cualquiera)? | seguridad/stat, criterios DSM/CIE, señal en casos · 1.00/1.00 | Depresion, Ansiedad/TEPT |
| exposoma | E2-n4 | ¿Antecedente de TLP / rasgos de personalidad del cluster B-C (esquizotípico, narcisista… | seguridad/stat, criterios DSM/CIE, señal en casos · 1.00/1.00 | Psicosis, Ansiedad/TEPT, Personalidad |
| exposoma | AFF-MAN | Episodio maníaco clásico | seguridad/stat, calculadora, señal en casos · 1.00/1.00 | Bipolaridad |
| exposoma | AFF-MIX | Episodio mixto / irritabilidad episódica | seguridad/stat, calculadora, señal en casos · 1.00/1.00 | Bipolaridad |
| exposoma | AFF-AD | Activación o viraje con antidepresivo | seguridad/stat, criterios DSM/CIE, calculadora · 1.00/1.00 | Bipolaridad, Depresion |
| exposoma | AFF-PSY | Psicosis durante episodio afectivo | seguridad/stat, criterios DSM/CIE, calculadora · 1.00/1.00 | Psicosis, Bipolaridad |
| exposoma | AFF-REC | Recuperación interepisódica | seguridad/stat, calculadora, señal en casos · 1.00/1.00 | Bipolaridad |
| exposoma | AFF-RX-STAB | Respuesta a estabilizador del ánimo | seguridad/stat, calculadora, señal en casos · 1.00/1.00 | Bipolaridad |
| exposoma | AFF-RX-AD | Patrón con antidepresivo | seguridad/stat, criterios DSM/CIE, calculadora · 1.00/1.00 | Bipolaridad, Depresion |
| exposoma | 54 | Deterioro auditivo (12 meses) | seguridad/stat, criterios DSM/CIE, calculadora · 1.00/1.00 | Psicosis, Delirium/demencia, Sustancias |
| exposoma | F1 | ¿Alguna vez violencia física hacia otros? (agresión, amenaza, lesión) | seguridad/stat, criterios DSM/CIE, calculadora · 1.00/1.00 | Ansiedad/TEPT, Personalidad, Riesgo |
| exposoma | F2 | ¿Alguna vez uso o amenaza con armas? | seguridad/stat, criterios DSM/CIE, calculadora · 1.00/1.00 | Ansiedad/TEPT, Personalidad, Riesgo |
| exposoma | F3 | ¿Alguna vez coerción o agresión sexual? | seguridad/stat, criterios DSM/CIE, calculadora · 1.00/1.00 | Personalidad, Riesgo |
| exposoma | F4 | ¿Alguna vez violencia de pareja/familiar como perpetrador? | seguridad/stat, criterios DSM/CIE, calculadora · 1.00/1.00 | Personalidad, Riesgo |
| exposoma | F5 | ¿Alguna vez conducta antisocial no violenta? (robo, daño a propiedad, fraude, venta de… | seguridad/stat, criterios DSM/CIE, calculadora · 1.00/1.00 | Personalidad, Sustancias, Riesgo |
| exposoma | F6 | ¿Contacto legal o condenas antes de los 18 años? | seguridad/stat, criterios DSM/CIE, calculadora · 1.00/1.00 | Personalidad, Riesgo |
| exposoma | F7 | ¿Contacto legal o condenas después de los 18 años? | seguridad/stat, criterios DSM/CIE, calculadora · 1.00/1.00 | Personalidad, Riesgo |
| exposoma | F8 | ¿Historia de relaciones íntimas inestables o conflictivas? | seguridad/stat, calculadora, señal en casos · 1.00/1.00 | Riesgo |
| exposoma | F9 | ¿Historia de inestabilidad laboral o educativa? (despidos, abandono) | seguridad/stat, calculadora, señal en casos · 1.00/1.00 | Riesgo |
| exposoma | F10 | ¿Problemas previos con tratamiento o supervisión? | seguridad/stat, calculadora, señal en casos · 1.00/1.00 | Riesgo |
| exposoma | F11 | ¿Alguna vez víctima de violencia, agresión, abuso o extorsión? | seguridad/stat, criterios DSM/CIE, calculadora · 1.00/1.00 | Ansiedad/TEPT, Riesgo |
| exposoma | 44 | Alcohol frecuente (≥5 días/sem) | seguridad/stat, señal en casos, modificable · 0.99/1.00 | Sustancias |
| exposoma | E2-11 | ¿Alguna vez ideación suicida (deseo de muerte, pensamientos de quitarse la vida)? | seguridad/stat, señal en casos · 1.00/0.99 | Riesgo |
| exposoma | FH-BP | Antecedente familiar de trastorno bipolar / manía | seguridad/stat, calculadora, señal en casos · 0.94/1.00 | Bipolaridad |
| exposoma | E4-6 | Estado de alto riesgo clínico de psicosis (CHR-P) | señal en casos, evidencia/peso · 0.90/1.00 | Psicosis |
| exposoma | E2-2 | ¿Alguna vez episodio de ánimo elevado/hipomanía (energía↑, sueño↓, gasto/riesgo)? | seguridad/stat, señal en casos · 0.98/0.74 | Bipolaridad |
| exposoma | FH-ANX | Antecedente familiar de ansiedad / TOC / TEPT | criterios DSM/CIE, calculadora, señal en casos · 0.69/1.00 | Bipolaridad, Ansiedad/TEPT, TOC y relacionados |
| exposoma | E2-n6 | ¿Depresión juvenil / episodio depresivo antes de la adultez (<18 años)? | criterios DSM/CIE, calculadora, señal en casos · 0.67/1.00 | Psicosis, Bipolaridad, Depresion |
| exposoma | 48 | Acceso fácil a sustancias | seguridad/stat, señal en casos, modificable · 0.88/0.76 | Sustancias |
| exposoma | 30 | Muerte súbita de ser querido | seguridad/stat, señal en casos · 0.75/0.84 | Depresion |
| exposoma | E2-13 | ¿Alguna vez autolesión no suicida (NSSI)? | seguridad/stat, señal en casos · 0.65/0.79 | Riesgo |
| exposoma | 56 | Anhedonia de rasgo | seguridad/stat, señal en casos, evidencia/peso · 0.45/0.83 | Psicosis |
| exposoma | FH-SUIC | Antecedente familiar de suicidio o intento suicida | seguridad/stat, señal en casos · 0.70/0.56 | Riesgo |
| exposoma | FH-SCZ | Antecedente familiar de esquizofrenia / psicosis primaria | seguridad/stat, señal en casos · 0.67/0.57 | Psicosis |
| exposoma | 55 | Traumatismo craneoencefálico | seguridad/stat, señal en casos · 0.88/0.33 | Ansiedad/TEPT |
| exposoma | E2-15 | ¿Tratamiento psiquiátrico/psicológico previo (fármacos o psicoterapia)? | seguridad/stat, señal en casos, modificable · 0.90/0.00 | formulación |
| exposoma | E2-14 | ¿Hospitalización psiquiátrica previa? | seguridad/stat, señal en casos · 0.87/0.00 | formulación |
| exposoma | FH-DEM | Antecedente familiar de demencia o deterioro cognitivo mayor | seguridad/stat, señal en casos · 0.31/0.06 | Delirium/demencia |
| exposoma | FH-PERS | Antecedente familiar de trastorno de personalidad / conducta antisocial | seguridad/stat, señal en casos · 0.20/0.04 | Personalidad |
| pmse | NC.conciencia | Conciencia | criterios DSM/CIE, señal en casos · 1.00/1.00 | TEA/TDAH, Delirium/demencia |
| pmse | G.arousal | Arousal / activación fisiológica | criterios DSM/CIE, señal en casos · 1.00/1.00 | Bipolaridad, Ansiedad/TEPT |
| pmse | F2.velocidad | Velocidad psicomotora / output motor-verbal | criterios DSM/CIE, señal en casos · 1.00/1.00 | Bipolaridad, TEA/TDAH |
| pmse | F1.expresividad | Expresividad comunicativa | criterios DSM/CIE, señal en casos · 1.00/1.00 | Bipolaridad, TEA/TDAH |
| pmse | G.coherencia | Coherencia global | criterios DSM/CIE, señal en casos · 1.00/1.00 | Psicosis, Delirium/demencia |


## Ítems que entran en NORMAL, pero no en triage

| módulo | id | ítem | por qué entra | DSM/CIE bucket |
|---|---:|---|---|---|
| exposoma | E3-3 | Obesidad / sobrepeso | criterios DSM/CIE, señal en casos, modificable · 1.00/1.00 | Bipolaridad, Depresion, Delirium/demencia, TCA/somatico |
| exposoma | E3-10 | Asma | criterios DSM/CIE, señal en casos, modificable · 1.00/1.00 | Bipolaridad, Depresion, TEA/TDAH |
| exposoma | 43 | Fumador diario de tabaco | criterios DSM/CIE, señal en casos, modificable · 0.93/1.00 | Depresion, Ansiedad/TEPT, TEA/TDAH, Sustancias |
| exposoma | E3-6 | Síndrome de intestino irritable (SII) | señal en casos, evidencia/peso · 0.76/0.99 | Bipolaridad |
| exposoma | E3-9 | Eczema / dermatitis atópica | criterios DSM/CIE, señal en casos, modificable · 0.73/1.00 | Depresion, TEA/TDAH |
| exposoma | E3-1 | Diabetes mellitus tipo 2 | criterios DSM/CIE, señal en casos, modificable · 0.67/1.00 | Depresion, Delirium/demencia |
| exposoma | 65 | Dieta/restricción alimentaria | criterios DSM/CIE, señal en casos, modificable · 0.65/1.00 | Depresion, TCA/somatico |
| exposoma | AFF-HYP | Hipertimia / inestabilidad afectiva crónica | calculadora, señal en casos · 0.59/0.99 | Bipolaridad |
| exposoma | FH-MDD | Antecedente familiar de depresión recurrente | criterios DSM/CIE, calculadora, señal en casos · 0.51/1.00 | Bipolaridad, Depresion |
| exposoma | FH-TDAH | Antecedente familiar de TDAH | criterios DSM/CIE, calculadora, señal en casos · 0.51/1.00 | Bipolaridad, TEA/TDAH |
| exposoma | FH-TCA | Antecedente familiar de TCA | criterios DSM/CIE, calculadora, señal en casos · 0.51/1.00 | Bipolaridad, TCA/somatico |
| exposoma | AFF-PP | Episodio afectivo posparto | calculadora, señal en casos · 0.48/0.97 | Bipolaridad |
| exposoma | E2-n5 | ¿Antecedente de TDAH infantil/adolescente (inicio esperado antes de los 12 años)? | criterios DSM/CIE, señal en casos, evidencia/peso · 0.43/1.00 | Psicosis, TEA/TDAH, Sustancias, TCA/somatico |
| exposoma | B-n1 | Abuso de sustancias en el hogar (ACE; antes de los 18 años) | criterios DSM/CIE, calculadora, señal en casos · 0.32/1.00 | Ansiedad/TEPT, Sustancias |
| exposoma | E3-4 | Factores de riesgo metabólicos (síndrome metabólico) | señal en casos, modificable, evidencia/peso · 0.26/0.99 | Depresion |
| exposoma | 32 | Minoría étnica/estatus migratorio | calculadora, señal en casos, evidencia/peso · 0.16/1.00 | Psicosis |
| exposoma | 31 | Urbanicidad (crianza en ciudad) | calculadora, señal en casos · 0.08/1.00 | Psicosis |
| exposoma | 1 | Complicaciones obstétricas/perinatales | criterios DSM/CIE, señal en casos, evidencia/peso · 0.03/1.00 | Psicosis, Depresion |
| exposoma | 41 | Bajo soporte social/red pobre | criterios DSM/CIE, señal en casos, modificable · 0.02/1.00 | Depresion, Delirium/demencia |
| exposoma | C-n9 | Estrés laboral (job strain) | calculadora, señal en casos, modificable · 0.02/1.00 | Depresion |
| exposoma | C-n1 | Sexo femenino | criterios DSM/CIE, señal en casos, evidencia/peso · 0.01/1.00 | Depresion, Ansiedad/TEPT |
| exposoma | 6 | Nacimiento en invierno/primavera | calculadora, señal en casos · 0.01/1.00 | Psicosis |
| exposoma | 7 | Edad paterna avanzada (>35/>45) | calculadora, señal en casos, evidencia/peso · 0.00/1.00 | TEA/TDAH |
| exposoma | C-n2 | Sexo masculino (riesgo TEA / protector ansiedad-depresión) | criterios DSM/CIE, señal en casos, evidencia/peso · 0.00/1.00 | Depresion, Ansiedad/TEPT, TEA/TDAH |
| exposoma | C-n3 | Etnia indígena americana | calculadora, señal en casos, evidencia/peso · 0.00/1.00 | Ansiedad/TEPT |
| exposoma | C-n13 | Antecedente familiar de ansiedad parental | calculadora, señal en casos, evidencia/peso · 0.00/1.00 | Ansiedad/TEPT |
| exposoma | 2 | Bajo peso al nacer (<2.5 kg)/SGA | criterios DSM/CIE, calculadora, señal en casos · 0.00/1.00 | TEA/TDAH, TCA/somatico |
| exposoma | E4-1 | Anomalías físicas menores (escala de Waldrop, 6 regiones: hipertelorismo, pliegue epicá… | criterios DSM/CIE, señal en casos, evidencia/peso · 0.00/1.00 | Psicosis, TEA/TDAH |
| exposoma | 22 | Negligencia emocional | calculadora, señal en casos, evidencia/peso · 0.00/1.00 | Personalidad |
| exposoma | 23 | Negligencia física | calculadora, señal en casos, evidencia/peso · 0.00/1.00 | Personalidad |
| exposoma | 34 | Baja educación parental/desempleo | calculadora, señal en casos, evidencia/peso · 0.00/1.00 | Depresion |
| exposoma | C-n11 | Desempleo | calculadora, señal en casos, modificable · 0.00/1.00 | Depresion |
| exposoma | E4-7 | Neuroticismo (rasgo) — ítems BFI-10 (Rammstedt & John 2007): (1) «Me pongo nervioso/a c… | criterios DSM/CIE, señal en casos, evidencia/peso · 0.00/1.00 | Depresion, Ansiedad/TEPT, TOC y relacionados |
| exposoma | 66 | Baja actividad física | señal en casos, modificable, evidencia/peso · 0.02/0.96 | Delirium/demencia |
| exposoma | E2-n1 | ¿Alguna vez ansiedad de separación en la infancia? | señal en casos, evidencia/peso · 0.00/0.96 | Ansiedad/TEPT |
| exposoma | E2-9 | ¿Alguna vez conducta alimentaria patológica (atracón, purga, restricción, distorsión im… | criterios DSM/CIE, señal en casos · 0.00/0.96 | Personalidad, TCA/somatico |
| exposoma | 38 | Depresión parental específicamente | calculadora, señal en casos · 0.00/0.95 | Depresion |
| exposoma | E3-16 | Disfunción sexual | señal en casos, evidencia/peso · 0.00/0.94 | Depresion |
| exposoma | E3-5 | Factores de riesgo cardiovascular | señal en casos, modificable, evidencia/peso · 0.01/0.91 | Depresion |
| exposoma | E3-2 | Uso de benzodiacepinas | señal en casos, evidencia/peso · 0.00/0.91 | Delirium/demencia |
| exposoma | 64 | Sueño (corta duración/alteración) | señal en casos, modificable, evidencia/peso · 0.03/0.88 | Depresion |
| exposoma | A-n5 | Apgar bajo (<7) al nacer | criterios DSM/CIE, señal en casos, evidencia/peso · 0.00/0.90 | TEA/TDAH, TCA/somatico |
| exposoma | E3-8 | Psoriasis | señal en casos, modificable, evidencia/peso · 0.03/0.87 | Depresion |
| exposoma | E2-6 | ¿Alguna vez ansiedad generalizada/preocupación incontrolable persistente? | señal en casos · 0.00/0.89 | Ansiedad/TEPT |
| exposoma | 45 | Inicio temprano de sustancias (<15) | señal en casos, modificable · 0.04/0.82 | Sustancias |
| exposoma | A3-9 | Conducta desviada focal/social (evaluada a los 4 y 7 años: ecolalia, risa inmotivada, m… | criterios DSM/CIE, señal en casos · 0.00/0.85 | Psicosis, Personalidad |
| exposoma | 12 | Epilepsia materna | criterios DSM/CIE, señal en casos · 0.00/0.79 | Psicosis, TEA/TDAH |
| exposoma | A3-5 | Pinza pulgar-índice tardía (esperado ≈7.4 meses; más peso si psicosis parental) | criterios DSM/CIE, señal en casos · 0.00/0.77 | Psicosis, TCA/somatico |
| exposoma | 33 | Bajo NSE parental/pobreza | señal en casos, evidencia/peso · 0.00/0.74 | Depresion |
| exposoma | E2-n3 | ¿Antecedente de inhibición conductual en la infancia / trastorno internalizante tempran… | señal en casos, evidencia/peso · 0.00/0.74 | Ansiedad/TEPT |
| exposoma | A3-6 | Desarrollo motor global tardío (clase late vs regular; hitos del 1.er año) | criterios DSM/CIE, señal en casos · 0.00/0.73 | Psicosis, TEA/TDAH |
| exposoma | A3-8 | Habla ininteligible / lenguaje expresivo pobre (evaluado a los 7 años) | criterios DSM/CIE, señal en casos · 0.00/0.73 | Psicosis, TEA/TDAH |
| exposoma | A3-7 | Retraso motor + complicaciones obstétricas (hitos 1.er año + Apgar/OC) | criterios DSM/CIE, señal en casos · 0.00/0.72 | Psicosis, TEA/TDAH |
| exposoma | E3-15 | Discapacidad visual | señal en casos, evidencia/peso · 0.00/0.61 | Depresion |
| exposoma | E3-17 | Mala salud física / enfermedad crónica (vejez) | señal en casos, evidencia/peso · 0.00/0.56 | Depresion |
| exposoma | 49 | Externalizantes infantiles (TC/TOD) | criterios DSM/CIE, señal en casos · 0.00/0.54 | Depresion, Sustancias |
| exposoma | E3-14 | Artritis | señal en casos, evidencia/peso · 0.00/0.54 | Depresion |
| exposoma | E3-18 | Historia de cáncer (protector frente a demencia) | señal en casos, evidencia/peso · 0.00/0.54 | Delirium/demencia |
| exposoma | 8 | Edad materna ≥40 / edad parental al inicio del t. ánimo | señal en casos, evidencia/peso · 0.00/0.50 | TEA/TDAH |
| exposoma | A3-10 | CI/cognición premórbida baja (IQ 70-85 o <70; referencia 100-115) | señal en casos, evidencia/peso · 0.00/0.48 | Psicosis |
| exposoma | E3-7 | Ojo seco con síndrome de Sjögren | señal en casos, evidencia/peso · 0.00/0.48 | Depresion |
| exposoma | E3-13 | Incontinencia urinaria | señal en casos, evidencia/peso · 0.00/0.48 | Depresion |
| exposoma | 10 | IMC materno alto en embarazo | señal en casos, evidencia/peso · 0.00/0.45 | TEA/TDAH |
| exposoma | E3-11 | Epilepsia | señal en casos, evidencia/peso · 0.00/0.44 | Depresion |
| exposoma | 15 | SSRI/psicotrópico materno en embarazo | señal en casos, evidencia/peso · 0.00/0.34 | TEA/TDAH |
| exposoma | 57 | Marcadores inflam/metabólicos (CRP, IL-6, vit D, leptina) | señal en casos, modificable · 0.00/0.33 | Depresion |
| exposoma | C-n12 | Estilo de crianza paterno: rechazo / interferencia / sobreprotección / castigo | señal en casos, evidencia/peso · 0.00/0.30 | TOC y relacionados |
| exposoma | 50 | Internalizantes infantiles (depr/ansiedad) | criterios DSM/CIE, señal en casos · 0.00/0.25 | Depresion, Ansiedad/TEPT |
| exposoma | 17 | Retraso del desarrollo motor/verbal | criterios DSM/CIE, señal en casos · 0.00/0.10 | Depresion, TEA/TDAH |
| pmse | NC.digit | Perfil Neurocognitivo Bedside | criterios DSM/CIE, señal en casos · 0.20/1.00 | TEA/TDAH, Delirium/demencia |


## Research-only

Research conserva todo lo restante. En el análisis, research-only tiende a ser:

- Exposoma de baja prevalencia o bajo peso individual: perinatales finos, exposiciones contextuales lejanas, protectores, biomarcadores proxy débiles.
- pMSE: la parrilla clínica completa queda disponible en normal; research agrega especificadores, texto, trazabilidad y export granular, no oculta dimensiones enteras.
- Narrativa longitudinal completa y puntos por edad.

## Funcionamiento

- Triage: 1 score global 0-6 + fuente + nota breve; alerta si cualquier eje actual >=4 o media >=3.
- Normal: Social · Académico / Laboral · Vincular / íntimo · Autonomía / independencia · Autocuidado / salud · Drive / energía / interés · Cognición; cada eje con score 0-6 + fuente + nota breve.
- Research: Todas las ventanas por edad, 7 ejes, fuente, lectura narrativa, texto libre y puntos longitudinales.

## Historia

Triage:
- motivo declarado
- motivo real hipotetizado
- fuente/confiabilidad
- por que ahora
- curso: inicio, duracion, fluctuacion
- sintomas nucleares presentes
- riesgo suicida/hetero/negligencia/capacidad
- sustancias/medico/iatrogenico inmediato
- soporte y plan de seguridad

Normal:
- motivo + curso + detonantes
- fenomenologia sindromica para DSM/CIE
- episodios previos y tratamiento/respuesta
- funcion y costo del sintoma
- riesgo estructurado y diferenciales

Research:
- todos los campos de historia
- episodios longitudinales
- lectura narrativa
- hilo integrador
- datos textuales para modelado

## Regla de implementación propuesta

1. Mantener una sola app y un solo estado.
2. Cada módulo recibe `JAFLO_MODE`: `triage`, `standard`, `research`.
3. En triage no se borran datos: se ocultan ítems research-only y se reemplazan matrices largas por scores globales.
4. En normal se muestran todos los ítems con valor DSM/CIE o decisional, más calculadoras reconstruidas.
5. En research se muestra todo y se habilita texto/narrativa longitudinal.
6. Los ítems ocultos deben seguir disponibles por búsqueda o “mostrar research-only”, para no encerrar al clínico.

## Archivos generados

- `mode-depth-selection.json`: ranking completo con probabilidades de inclusión.
- `mode-depth-selection-report.md`: este reporte.
