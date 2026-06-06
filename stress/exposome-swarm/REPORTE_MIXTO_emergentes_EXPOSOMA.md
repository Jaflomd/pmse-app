# Reporte mixto emergente - Exposoma

**Base:** Exposoma / Historia de antecedentes.  
**Swarm:** 4 agentes por cohorte + simulacion deterministica de 100 evaluadores.  
**Cohortes:** 25 estudiantes, 25 residentes, 25 clinicos psiquiatras, 25 psiquiatras expertos.

## Resultado central

La app es util como historia estructurada de exposiciones, pero su dificultad principal no es el volumen de items. Es la **calidad del dato**: fuente, ventana temporal, aplicabilidad y separacion entre exposicion, marcador premorbido, prodromo, antecedente clinico, consecuencia y riesgo actual.

La simulacion proyecta una **evaluabilidad media de 42/50**. El problema no es que los evaluadores no entiendan los botones; es que muchos items no pueden cerrarse con seguridad usando solo autorreporte adulto.

## Items mas dificiles segun simulacion

1. `E2-n5` TDAH infantil/adolescente antes de los 12 anos.
2. `E2-3` Episodio depresivo mayor lifetime.
3. `B-n2` Enfermedad mental o intento suicida en el hogar antes de los 18.
4. `E2-n4` TLP / rasgos cluster B-C.
5. `F6` Contacto legal o condenas antes de los 18.
6. `10` IMC materno alto en embarazo.
7. `E4-2` CI/capacidad cognitiva premorbida alta.
8. `E2-n3` Inhibicion conductual / internalizante temprano.
9. `B-n3` Miembro del hogar encarcelado.
10. `8` Edad materna >=40 / edad parental al inicio del trastorno de animo.

## Consenso transversal del swarm

### 1. No / NS / no explorado / no aplica

Todos los grupos detectaron este como el riesgo operativo mayor. El boton **Marcar resto = No** puede convertir ausencia de informacion en ausencia real. En estudiantes y clinicos esto sesga el perfil; en expertos produce objecion metodologica fuerte.

Propuesta: reemplazar por **Marcar resto = NS/no explorado** o exigir confirmacion: "No = explorado y ausente".

### 2. Fuente por item

Los bloques mas vulnerables son perinatal, neurodesarrollo, ACE, forense, comorbilidad medica y sustancias. Se requiere distinguir:

- paciente
- familiar/cuidador
- historia clinica
- documento perinatal/escolar/legal
- escala/laboratorio/geocodigo
- inferencia retrospectiva

Sin esta capa, el ICE puede sumar datos de calidad muy desigual.

### 3. Ventana temporal

La app mezcla ventanas clinicamente distintas:

- embarazo / parto / neonatal
- infancia temprana
- antes de los 18
- premorbido
- antes del primer episodio
- lifetime
- ultimos 12 meses
- actual

La falta de ventana afecta especialmente `E2`, `A3`, `B`, `D`, `E3`, `G` y los protectores.

### 4. Exposicion vs marcador vs prodromo vs outcome leakage

Los expertos insistieron en que varios items no son "exposoma upstream" puro:

- `E4-6` CHR-P es estado clinico/prodromico.
- `E2` historia psiquiatrica lifetime predice curso, pero puede contaminar etiologia con recurrencia.
- Suicidio, hospitalizacion y tratamiento previo son severidad/servicio, no exposicion causal.
- HCR/forense es riesgo clinico-forense, no antecedente exposomico simple.

Propuesta: separar dashboard en cuatro capas: **upstream**, **marcadores premorbidos**, **historia clinica/lifetime**, **riesgo actual/forense**.

### 5. Causalidad

El ICE y la carga por outcome deben leerse como **carga asociativa**, no como probabilidad diagnostica ni causalidad individual. Riesgos especificos:

- confounding by indication en psicotropicos/SSRI/paracetamol prenatal
- causalidad inversa en somatico/metabolico y benzodiacepinas-demencia
- doble conteo perinatal y trauma
- outcome leakage en E2 y CHR-P
- pesos que mezclan OR pequeno, predictor ML, consenso y meta-analisis

## Lo que veria cada cohorte

### Estudiantes

Se traban con aplicabilidad, `NS`, hitos, perinatales y modulos sensibles. Tienden a marcar por intuicion cuando se requiere documento, cuidador, escala o laboratorio. En jovenes universitarios, muchos items de vejez, trabajo, conyugalidad y parentalidad pueden ser **N/A**, no `No`.

### Residentes

Se traban con fronteras diagnosticas: CHR-P, hipomania, depresion lifetime, TDAH infantil, personalidad y sustancias primarias vs inducidas. Su sesgo probable es DSM-categorico: transformar exposoma en diagnostico o diagnostico en exposicion.

### Clinicos psiquiatras

Detectan el problema de validez clinica: el ICE puede parecer demasiado preciso para una fuente retrospectiva. Piden fuente, confianza, ventana, colateralidad y que `No` no equivalga a dato faltante.

### Psiquiatras expertos

Objecionan constructo y causalidad. Separan exposicion upstream, marcador, prodromo, antecedente clinico, severidad y servicio. Piden contribucion firmada por outcome, de-duplicacion/caps por familias y separar CHR-P/HCR/suicidio del ICE.

## Mejoras de alto retorno

1. Cambiar **Marcar resto = No** por **Marcar resto = NS/no explorado**.
2. Agregar chips por item: `Fuente`, `Ventana`, `Confianza`, `N/A`.
3. Separar items por tipo: exposicion, marcador premorbido, prodromo, antecedente lifetime, riesgo actual, protector.
4. Crear reglas de de-duplicacion: perinatal amplio vs especificos, ACE general vs subtipos, E2 global vs diagnosticos concretos.
5. En dashboard, renombrar a **carga asociativa por outcome** y mostrar los items alimentadores.
6. Mover o rotular distinto `CHR-P`, suicidio, HCR/forense y E2 lifetime.
7. Renderizar/clarificar D4 ICD-11/OPCRIT en sustancias y mantener D2 como eje de atribucion temporal.
8. Usar lenguaje no esencialista para sexo, etnia, migracion y estado civil: riesgo contextual, no identidad patologizada.

## Decision sugerida

No cambiar el instrumento de fondo todavia. Primero conviene arreglar la capa de **metadato de calificacion**: fuente, ventana, confianza y N/A. Eso aumentaria confiabilidad sin mutilar la riqueza del Exposoma.
