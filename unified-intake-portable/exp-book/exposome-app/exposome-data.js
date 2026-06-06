// AUTO-GENERADO por parse_exposome.py — NO editar a mano.
// Fuente: Exposome Note 1.md (v7). Regenerar con: python3 parse_exposome.py
window.EXPOSOME_DATA = {
 "version": "v7",
 "generated": "from Exposome Note 1.md",
 "totalItems": 152,
 "metaSupported": 88,
 "blocks": [
  {
   "code": "A",
   "block": "A",
   "title": "Perinatales y desarrollo temprano",
   "part": "Parte I · Exposoma",
   "items": [
    {
     "id": "1",
     "block": "A",
     "blockCode": "A",
     "blockTitle": "Perinatales y desarrollo temprano",
     "part": "Parte I · Exposoma",
     "n": "1",
     "labelRaw": "Complicaciones obstétricas/perinatales",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Maudsley ERS, PERS, K-PERS-II ([Vassos 2020](https://pubmed.ncbi.nlm.nih.gov/31535606/))",
     "predictor": "RR ~2.0 psicosis (meta)",
     "instrument": "ERS validado multi-cohorte",
     "meta": true,
     "evidenceRaw": "▲ **Psicosis:** OR=1.97 (1.55-2.50) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894)<br>▲ **Depresión posparto:** OR=1.47 (1.34-1.61) cl.II [Xu 2025](https://doi.org/10.3389/fpubh.2025.1714668)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Psicosis",
       "cls": "I",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Psicosis:** OR=1.97 (1.55-2.50) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894)"
      },
      {
       "dir": "risk",
       "condition": "Depresión posparto",
       "cls": "II",
       "ref": "Xu 2025",
       "url": "https://doi.org/10.3389/fpubh.2025.1714668",
       "raw": "▲ **Depresión posparto:** OR=1.47 (1.34-1.61) cl.II [Xu 2025](https://doi.org/10.3389/fpubh.2025.1714668)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Psicosis",
      "Depresion"
     ],
     "weight": 3.0
    },
    {
     "id": "2",
     "block": "A",
     "blockCode": "A",
     "blockTitle": "Perinatales y desarrollo temprano",
     "part": "Parte I · Exposoma",
     "n": "2",
     "labelRaw": "Bajo peso al nacer (<2.5 kg)/SGA",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ASD pre/perinatal ([Li 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11220983/))",
     "predictor": "predictor LASSO retenido",
     "instrument": "AUC 0.711",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Val-ext",
     "direction": "risk",
     "outcomes": [
      "TEA"
     ],
     "weight": 1.0
    },
    {
     "id": "3",
     "block": "A",
     "blockCode": "A",
     "blockTitle": "Perinatales y desarrollo temprano",
     "part": "Parte I · Exposoma",
     "n": "3",
     "labelRaw": "Parto prematuro (<32 sem)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ABCD Exposome subf. embarazo ([Moore 2022](https://academic.oup.com/exposome/article/2/1/osac010/6900933))",
     "predictor": "carga en subfactor parto",
     "instrument": ">38% var. psicopat.",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Der",
     "direction": "risk",
     "outcomes": [
      "Transdiagnostico"
     ],
     "weight": 0.5
    },
    {
     "id": "4",
     "block": "A",
     "blockCode": "A",
     "blockTitle": "Perinatales y desarrollo temprano",
     "part": "Parte I · Exposoma",
     "n": "4",
     "labelRaw": "Cesárea",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ABCD Exposome subf. embarazo ([Moore 2022](https://academic.oup.com/exposome/article/2/1/osac010/6900933))",
     "predictor": "carga en subfactor parto",
     "instrument": ">38% var. psicopat.",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Der",
     "direction": "risk",
     "outcomes": [
      "Transdiagnostico"
     ],
     "weight": 0.5
    },
    {
     "id": "5",
     "block": "A",
     "blockCode": "A",
     "blockTitle": "Perinatales y desarrollo temprano",
     "part": "Parte I · Exposoma",
     "n": "5",
     "labelRaw": "Hipoxia perinatal/Apgar bajo (<7)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ASD pre/perinatal ([Li 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11220983/))",
     "predictor": "complicación del parto",
     "instrument": "AUC 0.711",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Val-ext",
     "direction": "risk",
     "outcomes": [
      "TEA"
     ],
     "weight": 1.0
    },
    {
     "id": "6",
     "block": "A",
     "blockCode": "A",
     "blockTitle": "Perinatales y desarrollo temprano",
     "part": "Parte I · Exposoma",
     "n": "6",
     "labelRaw": "Nacimiento en invierno/primavera",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ES-SCZ, PERS, PPS ([Pries 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC7965069/))",
     "predictor": "RR ~1.1 (efecto pequeño)",
     "instrument": "ES-SCZ OR~1.6/SD",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Psicosis"
     ],
     "weight": 1.0
    },
    {
     "id": "7",
     "block": "A",
     "blockCode": "A",
     "blockTitle": "Perinatales y desarrollo temprano",
     "part": "Parte I · Exposoma",
     "n": "7",
     "labelRaw": "Edad paterna avanzada (>35/>45)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Maudsley ERS, PERS, PPS / ASD ([Vassos 2020](https://pubmed.ncbi.nlm.nih.gov/31535606/))",
     "predictor": "RR ~1.2–1.7",
     "instrument": "en ERS/PPS validados",
     "meta": true,
     "evidenceRaw": "▲ **TEA:** OR=1.37 (1.23-1.53) cl.II [Kim 2019](https://doi.org/10.1016/S2215-0366%2819%2930181-6) (tb. Carvalho 2021) · OR=1.43 (1.33-1.53) cl.II [Kim 2019](https://doi.org/10.1016/S2215-0366%2819%2930181-6) (tb. Carvalho 2021) · OR=1.55 (1.39-1.73) cl.II [Kim 2019](https://doi.org/10.1016/S2215-0366%2819%2930181-6) (tb. Carvalho 2021) · OR=1.21 (1.18-1.24) cl.II [Kim 2019](https://doi.org/10.1016/S2215-0366%2819%2930181-6) (tb. Carvalho 2021)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "TEA",
       "cls": "II",
       "ref": "Kim 2019",
       "url": "https://doi.org/10.1016/S2215-0366%2819%2930181-6",
       "raw": "▲ **TEA:** OR=1.37 (1.23-1.53) cl.II [Kim 2019](https://doi.org/10.1016/S2215-0366%2819%2930181-6) (tb. Carvalho 2021) · OR=1.43 (1.33-1.53) cl.II [Kim 2019](https://doi.org/10.1016/S2215-0366%2819%2930181-6) (tb. Carvalho 2021) · OR=1.55 (1.39-1.73) cl.II [Kim 2019](https://doi.org/10.1016/S2215-0366%2819%2930181-6) (tb. Carvalho 2021) · OR=1.21 (1.18-1.24) cl.II [Kim 2019](https://doi.org/10.1016/S2215-0366%2819%2930181-6) (tb. Carvalho 2021)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "TEA"
     ],
     "weight": 2.0
    },
    {
     "id": "8",
     "block": "A",
     "blockCode": "A",
     "blockTitle": "Perinatales y desarrollo temprano",
     "part": "Parte I · Exposoma",
     "n": "8",
     "labelRaw": "Edad materna ≥40 / **edad parental al inicio del t. ánimo**",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ASD perinatal / **Bipolar RC Hafeman** ([Hafeman 2017](https://pmc.ncbi.nlm.nih.gov/articles/PMC5710639/))",
     "predictor": "predictor en modelo BP",
     "instrument": "BP RC AUC 0.76",
     "meta": true,
     "evidenceRaw": "▲ **TEA:** RR=1.31 (1.18-1.45) cl.I [Kim 2019](https://doi.org/10.1016/S2215-0366%2819%2930181-6) (tb. Carvalho 2021) · RR=1.14 (1.09-1.18) cl.II [Kim 2019](https://doi.org/10.1016/S2215-0366%2819%2930181-6) (tb. Carvalho 2021) · OR=1.42 (1.29-1.55) cl.II [Kim 2019](https://doi.org/10.1016/S2215-0366%2819%2930181-6) (tb. Carvalho 2021) · OR=1.37 (1.21-1.54) cl.II [Kim 2019](https://doi.org/10.1016/S2215-0366%2819%2930181-6) (tb. Carvalho 2021)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "TEA",
       "cls": "I",
       "ref": "Kim 2019",
       "url": "https://doi.org/10.1016/S2215-0366%2819%2930181-6",
       "raw": "▲ **TEA:** RR=1.31 (1.18-1.45) cl.I [Kim 2019](https://doi.org/10.1016/S2215-0366%2819%2930181-6) (tb. Carvalho 2021) · RR=1.14 (1.09-1.18) cl.II [Kim 2019](https://doi.org/10.1016/S2215-0366%2819%2930181-6) (tb. Carvalho 2021) · OR=1.42 (1.29-1.55) cl.II [Kim 2019](https://doi.org/10.1016/S2215-0366%2819%2930181-6) (tb. Carvalho 2021) · OR=1.37 (1.21-1.54) cl.II [Kim 2019](https://doi.org/10.1016/S2215-0366%2819%2930181-6) (tb. Carvalho 2021)"
      }
     ],
     "evLevel": "Val-ext",
     "direction": "risk",
     "outcomes": [
      "TEA"
     ],
     "weight": 3.0
    },
    {
     "id": "9",
     "block": "A",
     "blockCode": "A",
     "blockTitle": "Perinatales y desarrollo temprano",
     "part": "Parte I · Exposoma",
     "n": "9",
     "labelRaw": "Primiparidad",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ALSPAC ML depresión ([Yoo 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11458604/))",
     "predictor": "feature ML",
     "instrument": "modelo ML depresión",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Der",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 0.5
    },
    {
     "id": "10",
     "block": "A",
     "blockCode": "A",
     "blockTitle": "Perinatales y desarrollo temprano",
     "part": "Parte I · Exposoma",
     "n": "10",
     "labelRaw": "IMC materno alto en embarazo",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ASD pre/perinatal ([Li 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11220983/))",
     "predictor": "factor materno",
     "instrument": "AUC 0.711",
     "meta": true,
     "evidenceRaw": "▲ **TEA:** OR=1.48 (1.29-1.70) cl.I [Kim 2019](https://doi.org/10.1016/S2215-0366%2819%2930181-6) (tb. Carvalho 2021) · RR=1.28 (1.19-1.36) cl.I [Kim 2019](https://doi.org/10.1016/S2215-0366%2819%2930181-6) (tb. Carvalho 2021) · RR=1.30 (1.21-1.40) cl.II [Arango 2022](https://doi.org/10.1038/s41380-022-01586-8)<br>▲ **TDAH:** OR=1.63 (1.49-1.77) cl.I [Kim 2020](https://doi.org/10.1016/S2215-0366%2820%2930312-6) (tb. Carvalho 2021) · RR=1.63 (1.49-1.78) cl.I [Arango 2022](https://doi.org/10.1038/s41380-022-01586-8) · RR=1.28 (1.20-1.36) cl.I [Arango 2022](https://doi.org/10.1038/s41380-022-01586-8) · OR=1.28 (1.21-1.35) cl.II [Kim 2020](https://doi.org/10.1016/S2215-0366%2820%2930312-6) (tb. Carvalho 2021)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "TEA",
       "cls": "I",
       "ref": "Kim 2019",
       "url": "https://doi.org/10.1016/S2215-0366%2819%2930181-6",
       "raw": "▲ **TEA:** OR=1.48 (1.29-1.70) cl.I [Kim 2019](https://doi.org/10.1016/S2215-0366%2819%2930181-6) (tb. Carvalho 2021) · RR=1.28 (1.19-1.36) cl.I [Kim 2019](https://doi.org/10.1016/S2215-0366%2819%2930181-6) (tb. Carvalho 2021) · RR=1.30 (1.21-1.40) cl.II [Arango 2022](https://doi.org/10.1038/s41380-022-01586-8)"
      },
      {
       "dir": "risk",
       "condition": "TDAH",
       "cls": "I",
       "ref": "Kim 2020",
       "url": "https://doi.org/10.1016/S2215-0366%2820%2930312-6",
       "raw": "▲ **TDAH:** OR=1.63 (1.49-1.77) cl.I [Kim 2020](https://doi.org/10.1016/S2215-0366%2820%2930312-6) (tb. Carvalho 2021) · RR=1.63 (1.49-1.78) cl.I [Arango 2022](https://doi.org/10.1038/s41380-022-01586-8) · RR=1.28 (1.20-1.36) cl.I [Arango 2022](https://doi.org/10.1038/s41380-022-01586-8) · OR=1.28 (1.21-1.35) cl.II [Kim 2020](https://doi.org/10.1016/S2215-0366%2820%2930312-6) (tb. Carvalho 2021)"
      }
     ],
     "evLevel": "Val-ext",
     "direction": "risk",
     "outcomes": [
      "TEA",
      "TDAH"
     ],
     "weight": 3.0
    },
    {
     "id": "11",
     "block": "A",
     "blockCode": "A",
     "blockTitle": "Perinatales y desarrollo temprano",
     "part": "Parte I · Exposoma",
     "n": "11",
     "labelRaw": "Diabetes gestacional materna",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ASD pre/perinatal ([Li 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11220983/))",
     "predictor": "diabetes materna (retenido)",
     "instrument": "AUC 0.711",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Val-ext",
     "direction": "risk",
     "outcomes": [
      "TEA"
     ],
     "weight": 1.0
    },
    {
     "id": "12",
     "block": "A",
     "blockCode": "A",
     "blockTitle": "Perinatales y desarrollo temprano",
     "part": "Parte I · Exposoma",
     "n": "12",
     "labelRaw": "Epilepsia materna",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ASD Risk Score biopsicosocial ([Zhao 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC11220983/))",
     "predictor": "factor materno",
     "instrument": "AUC ext 0.78",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Val-ext",
     "direction": "risk",
     "outcomes": [
      "Psicosis",
      "TEA"
     ],
     "weight": 1.0
    },
    {
     "id": "13",
     "block": "A",
     "blockCode": "A",
     "blockTitle": "Perinatales y desarrollo temprano",
     "part": "Parte I · Exposoma",
     "n": "13",
     "labelRaw": "Distrés/depresión materna prenatal",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ALSPAC ML ([Yoo 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11458604/))",
     "predictor": "feature ML",
     "instrument": "modelo ML depresión",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Der",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 0.5
    },
    {
     "id": "14",
     "block": "A",
     "blockCode": "A",
     "blockTitle": "Perinatales y desarrollo temprano",
     "part": "Parte I · Exposoma",
     "n": "14",
     "labelRaw": "Tabaco materno en embarazo",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ABCD Exposome / ASD ([Moore 2022](https://academic.oup.com/exposome/article/2/1/osac010/6900933))",
     "predictor": "carga subfactor hogar",
     "instrument": ">38% var. psicopat.",
     "meta": true,
     "evidenceRaw": "▲ **TDAH:** OR=1.60 (1.45-1.76) cl.II [Kim 2020](https://doi.org/10.1016/S2215-0366%2820%2930312-6) (tb. Carvalho 2021) · RR=1.60 (1.41-1.75) cl.II [Arango 2022](https://doi.org/10.1038/s41380-022-01586-8)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "TDAH",
       "cls": "II",
       "ref": "Kim 2020",
       "url": "https://doi.org/10.1016/S2215-0366%2820%2930312-6",
       "raw": "▲ **TDAH:** OR=1.60 (1.45-1.76) cl.II [Kim 2020](https://doi.org/10.1016/S2215-0366%2820%2930312-6) (tb. Carvalho 2021) · RR=1.60 (1.41-1.75) cl.II [Arango 2022](https://doi.org/10.1038/s41380-022-01586-8)"
      }
     ],
     "evLevel": "Der",
     "direction": "risk",
     "outcomes": [
      "TDAH"
     ],
     "weight": 2.0
    },
    {
     "id": "15",
     "block": "A",
     "blockCode": "A",
     "blockTitle": "Perinatales y desarrollo temprano",
     "part": "Parte I · Exposoma",
     "n": "15",
     "labelRaw": "SSRI/psicotrópico materno en embarazo",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ABCD Exposome subf. embarazo ([Moore 2022](https://academic.oup.com/exposome/article/2/1/osac010/6900933))",
     "predictor": "carga subfactor parto",
     "instrument": ">38% var. psicopat.",
     "meta": true,
     "evidenceRaw": "▲ **TEA:** RR=1.48 (1.29-1.71) cl.I [Kim 2019](https://doi.org/10.1016/S2215-0366%2819%2930181-6) (tb. Carvalho 2021) · OR=1.84 (1.60-2.11) cl.I [Kim 2019](https://doi.org/10.1016/S2215-0366%2819%2930181-6) (tb. Carvalho 2021) · RR=1.65 (1.37-2.00) cl.II [Arango 2022](https://doi.org/10.1038/s41380-022-01586-8)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "TEA",
       "cls": "I",
       "ref": "Kim 2019",
       "url": "https://doi.org/10.1016/S2215-0366%2819%2930181-6",
       "raw": "▲ **TEA:** RR=1.48 (1.29-1.71) cl.I [Kim 2019](https://doi.org/10.1016/S2215-0366%2819%2930181-6) (tb. Carvalho 2021) · OR=1.84 (1.60-2.11) cl.I [Kim 2019](https://doi.org/10.1016/S2215-0366%2819%2930181-6) (tb. Carvalho 2021) · RR=1.65 (1.37-2.00) cl.II [Arango 2022](https://doi.org/10.1038/s41380-022-01586-8)"
      }
     ],
     "evLevel": "Der",
     "direction": "risk",
     "outcomes": [
      "TEA"
     ],
     "weight": 3.0
    },
    {
     "id": "16",
     "block": "A",
     "blockCode": "A",
     "blockTitle": "Perinatales y desarrollo temprano",
     "part": "Parte I · Exposoma",
     "n": "16",
     "labelRaw": "Alcohol/drogas duras prenatal",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ABCD Exposome subf. hogar ([Moore 2022](https://academic.oup.com/exposome/article/2/1/osac010/6900933))",
     "predictor": "carga subfactor hogar",
     "instrument": ">38% var. psicopat.",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Der",
     "direction": "risk",
     "outcomes": [
      "Transdiagnostico"
     ],
     "weight": 0.5
    },
    {
     "id": "17",
     "block": "A",
     "blockCode": "A",
     "blockTitle": "Perinatales y desarrollo temprano",
     "part": "Parte I · Exposoma",
     "n": "17",
     "labelRaw": "Retraso del desarrollo motor/verbal",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ABCD Exposome / ALSPAC ([Yoo 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11458604/))",
     "predictor": "feature ML",
     "instrument": "modelo ML depresión",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Der",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 0.5
    },
    {
     "id": "18",
     "block": "A",
     "blockCode": "A",
     "blockTitle": "Perinatales y desarrollo temprano",
     "part": "Parte I · Exposoma",
     "n": "18",
     "labelRaw": "Lactancia materna (protector)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ALSPAC ML ([Yoo 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11458604/))",
     "predictor": "feature ML (protector)",
     "instrument": "modelo ML depresión",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Der",
     "direction": "prot",
     "outcomes": [
      "Depresion"
     ],
     "weight": 0.5
    }
   ]
  },
  {
   "code": "A2",
   "block": "A",
   "title": "Perinatales/neonatales y depresion posparto (umbrella)",
   "part": "Parte I · Exposoma",
   "items": [
    {
     "id": "A-n1",
     "block": "A",
     "blockCode": "A2",
     "blockTitle": "Perinatales/neonatales y depresion posparto (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "A-n1",
     "labelRaw": "Paracetamol materno en el embarazo",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **TDAH:** RR=1.25 (1.17-1.34) cl.I [Kim 2020](https://doi.org/10.1016/S2215-0366%2820%2930312-6) (tb. Carvalho 2021 / Arango 2022)<br>▲ **TEA:** RR=1.20 (1.14-1.26) cl.II [Kim 2019](https://doi.org/10.1016/S2215-0366%2819%2930181-6) (tb. Carvalho 2021)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "TDAH",
       "cls": "I",
       "ref": "Kim 2020",
       "url": "https://doi.org/10.1016/S2215-0366%2820%2930312-6",
       "raw": "▲ **TDAH:** RR=1.25 (1.17-1.34) cl.I [Kim 2020](https://doi.org/10.1016/S2215-0366%2820%2930312-6) (tb. Carvalho 2021 / Arango 2022)"
      },
      {
       "dir": "risk",
       "condition": "TEA",
       "cls": "II",
       "ref": "Kim 2019",
       "url": "https://doi.org/10.1016/S2215-0366%2819%2930181-6",
       "raw": "▲ **TEA:** RR=1.20 (1.14-1.26) cl.II [Kim 2019](https://doi.org/10.1016/S2215-0366%2819%2930181-6) (tb. Carvalho 2021)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "TDAH",
      "TEA"
     ],
     "weight": 3.0
    },
    {
     "id": "A-n2",
     "block": "A",
     "blockCode": "A2",
     "blockTitle": "Perinatales/neonatales y depresion posparto (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "A-n2",
     "labelRaw": "Trastornos hipertensivos maternos en el embarazo",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **TDAH:** OR=1.29 (1.22-1.36) cl.I [Kim 2020](https://doi.org/10.1016/S2215-0366%2820%2930312-6) (tb. Carvalho 2021)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "TDAH",
       "cls": "I",
       "ref": "Kim 2020",
       "url": "https://doi.org/10.1016/S2215-0366%2820%2930312-6",
       "raw": "▲ **TDAH:** OR=1.29 (1.22-1.36) cl.I [Kim 2020](https://doi.org/10.1016/S2215-0366%2820%2930312-6) (tb. Carvalho 2021)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "TDAH"
     ],
     "weight": 3.0
    },
    {
     "id": "A-n3",
     "block": "A",
     "blockCode": "A2",
     "blockTitle": "Perinatales/neonatales y depresion posparto (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "A-n3",
     "labelRaw": "Diabetes gestacional/pregestacional materna",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **TEA:** RR=1.49 (1.28-1.74) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Kim 2019)<br>▲ **TDAH:** HR=1.36 (1.19-1.55) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Kim 2020)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "TEA",
       "cls": "III",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **TEA:** RR=1.49 (1.28-1.74) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Kim 2019)"
      },
      {
       "dir": "risk",
       "condition": "TDAH",
       "cls": "III",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **TDAH:** HR=1.36 (1.19-1.55) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Kim 2020)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "TEA",
      "TDAH"
     ],
     "weight": 1.0
    },
    {
     "id": "A-n4",
     "block": "A",
     "blockCode": "A2",
     "blockTitle": "Perinatales/neonatales y depresion posparto (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "A-n4",
     "labelRaw": "Infección materna que requirió hospitalización",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **TEA:** OR=1.30 (1.14-1.50) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "TEA",
       "cls": "III",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **TEA:** OR=1.30 (1.14-1.50) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "TEA"
     ],
     "weight": 1.0
    },
    {
     "id": "A-n5",
     "block": "A",
     "blockCode": "A2",
     "blockTitle": "Perinatales/neonatales y depresion posparto (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "A-n5",
     "labelRaw": "Apgar bajo (<7) al nacer",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **TEA:** OR=1.67 (1.34-2.09) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Salehi 2024)<br>▲ **TDAH:** OR=1.30 (1.11-1.52) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Kim 2020)<br>▲ **TCA:** OR=1.32 (1.17-1.49) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Solmi 2020)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "TEA",
       "cls": "III",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **TEA:** OR=1.67 (1.34-2.09) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Salehi 2024)"
      },
      {
       "dir": "risk",
       "condition": "TDAH",
       "cls": "III",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **TDAH:** OR=1.30 (1.11-1.52) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Kim 2020)"
      },
      {
       "dir": "risk",
       "condition": "TCA",
       "cls": "III",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **TCA:** OR=1.32 (1.17-1.49) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Solmi 2020)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "TEA",
      "TDAH",
      "TCA"
     ],
     "weight": 1.0
    },
    {
     "id": "A-n6",
     "block": "A",
     "blockCode": "A2",
     "blockTitle": "Perinatales/neonatales y depresion posparto (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "A-n6",
     "labelRaw": "Ictericia neonatal",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **TEA:** OR=1.74 (1.42-2.12) cl.III [Salehi 2024](https://doi.org/10.3345/cep.2024.00136)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "TEA",
       "cls": "III",
       "ref": "Salehi 2024",
       "url": "https://doi.org/10.3345/cep.2024.00136",
       "raw": "▲ **TEA:** OR=1.74 (1.42-2.12) cl.III [Salehi 2024](https://doi.org/10.3345/cep.2024.00136)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "TEA"
     ],
     "weight": 1.0
    },
    {
     "id": "A-n7",
     "block": "A",
     "blockCode": "A2",
     "blockTitle": "Perinatales/neonatales y depresion posparto (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "A-n7",
     "labelRaw": "Macrosomía neonatal",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **TEA:** OR=1.11 (1.05-1.18) cl.III [Salehi 2024](https://doi.org/10.3345/cep.2024.00136)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "TEA",
       "cls": "III",
       "ref": "Salehi 2024",
       "url": "https://doi.org/10.3345/cep.2024.00136",
       "raw": "▲ **TEA:** OR=1.11 (1.05-1.18) cl.III [Salehi 2024](https://doi.org/10.3345/cep.2024.00136)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "TEA"
     ],
     "weight": 1.0
    },
    {
     "id": "A-n8",
     "block": "A",
     "blockCode": "A2",
     "blockTitle": "Perinatales/neonatales y depresion posparto (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "A-n8",
     "labelRaw": "Cardiopatía congénita neonatal",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **TEA:** OR=1.35 (1.17-1.52) cl.III [Salehi 2024](https://doi.org/10.3345/cep.2024.00136)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "TEA",
       "cls": "III",
       "ref": "Salehi 2024",
       "url": "https://doi.org/10.3345/cep.2024.00136",
       "raw": "▲ **TEA:** OR=1.35 (1.17-1.52) cl.III [Salehi 2024](https://doi.org/10.3345/cep.2024.00136)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "TEA"
     ],
     "weight": 1.0
    },
    {
     "id": "A-n9",
     "block": "A",
     "blockCode": "A2",
     "blockTitle": "Perinatales/neonatales y depresion posparto (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "A-n9",
     "labelRaw": "Embarazo no planificado",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Depresión posparto:** OR=1.55 (1.38-2.03) cl.I [Xu 2025](https://doi.org/10.3389/fpubh.2025.1714668) (tb. Gastaldon 2022)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión posparto",
       "cls": "I",
       "ref": "Xu 2025",
       "url": "https://doi.org/10.3389/fpubh.2025.1714668",
       "raw": "▲ **Depresión posparto:** OR=1.55 (1.38-2.03) cl.I [Xu 2025](https://doi.org/10.3389/fpubh.2025.1714668) (tb. Gastaldon 2022)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 3.0
    },
    {
     "id": "A-n10",
     "block": "A",
     "blockCode": "A2",
     "blockTitle": "Perinatales/neonatales y depresion posparto (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "A-n10",
     "labelRaw": "Anemia peripartum",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Depresión posparto:** OR=1.53 (1.32-1.78) cl.II [Xu 2025](https://doi.org/10.3389/fpubh.2025.1714668)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión posparto",
       "cls": "II",
       "ref": "Xu 2025",
       "url": "https://doi.org/10.3389/fpubh.2025.1714668",
       "raw": "▲ **Depresión posparto:** OR=1.53 (1.32-1.78) cl.II [Xu 2025](https://doi.org/10.3389/fpubh.2025.1714668)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 2.0
    },
    {
     "id": "A-n11",
     "block": "A",
     "blockCode": "A2",
     "blockTitle": "Perinatales/neonatales y depresion posparto (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "A-n11",
     "labelRaw": "Síndrome premenstrual (antecedente)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Depresión posparto:** OR=2.20 (1.81-2.68) cl.II [Gastaldon 2022](https://doi.org/10.1192/bjp.2021.222)<br>▲ **Depresión:** OR=2.20 (1.81-2.68) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión posparto",
       "cls": "II",
       "ref": "Gastaldon 2022",
       "url": "https://doi.org/10.1192/bjp.2021.222",
       "raw": "▲ **Depresión posparto:** OR=2.20 (1.81-2.68) cl.II [Gastaldon 2022](https://doi.org/10.1192/bjp.2021.222)"
      },
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "II",
       "ref": "Wang 2025",
       "url": "https://doi.org/10.1016/j.bbih.2025.101068",
       "raw": "▲ **Depresión:** OR=2.20 (1.81-2.68) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 2.0
    }
   ]
  },
  {
   "code": "A3",
   "block": "A",
   "title": "Hitos del neurodesarrollo y marcadores premorbidos",
   "part": "Parte I · Exposoma",
   "items": [
    {
     "id": "A3-1",
     "block": "A",
     "blockCode": "A3",
     "blockTitle": "Hitos del neurodesarrollo y marcadores premorbidos",
     "part": "Parte I · Exposoma",
     "n": "A3-1",
     "labelRaw": "Caminar sin apoyo tardío (**esperado ≈11.5 meses**)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [
      {
       "key": "edad",
       "label": "Edad (meses)",
       "unit": "m"
      }
     ],
     "sourceRaw": "NFBC 1966 / meta motor ([Keskinen 2015](https://pmc.ncbi.nlm.nih.gov/articles/PMC4623356/); [Filatova 2017](https://doi.org/10.1016/j.schres.2017.01.029))",
     "predictor": "HR=1.15 por mes de retraso; meta g=0.46",
     "instrument": "cohorte + meta-análisis",
     "meta": true,
     "evidenceRaw": "▲ **Esquizofrenia:** HR=1.15 (1.09-1.21) por mes de retraso [Keskinen 2015](https://doi.org/10.1016/j.eurpsy.2015.04.006); Hedges g=0.46 (0.27-0.64), OR aprox.=2.30 (1.63-3.19) [Filatova 2017](https://doi.org/10.1016/j.schres.2017.01.029)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Esquizofrenia",
       "cls": null,
       "ref": "Keskinen 2015",
       "url": "https://doi.org/10.1016/j.eurpsy.2015.04.006",
       "raw": "▲ **Esquizofrenia:** HR=1.15 (1.09-1.21) por mes de retraso [Keskinen 2015](https://doi.org/10.1016/j.eurpsy.2015.04.006); Hedges g=0.46 (0.27-0.64), OR aprox.=2.30 (1.63-3.19) [Filatova 2017](https://doi.org/10.1016/j.schres.2017.01.029)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Psicosis"
     ],
     "weight": 1.0
    },
    {
     "id": "A3-2",
     "block": "A",
     "blockCode": "A3",
     "blockTitle": "Hitos del neurodesarrollo y marcadores premorbidos",
     "part": "Parte I · Exposoma",
     "n": "A3-2",
     "labelRaw": "Pararse sin apoyo tardío (**esperado ≈10.4 meses**)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [
      {
       "key": "edad",
       "label": "Edad (meses)",
       "unit": "m"
      }
     ],
     "sourceRaw": "NFBC 1966 / meta motor ([Keskinen 2015](https://pmc.ncbi.nlm.nih.gov/articles/PMC4623356/); [Filatova 2017](https://doi.org/10.1016/j.schres.2017.01.029))",
     "predictor": "HR=1.22 por mes de retraso; meta g=0.28",
     "instrument": "cohorte + meta-análisis",
     "meta": true,
     "evidenceRaw": "▲ **Esquizofrenia:** HR=1.22 (1.08-1.37) por mes de retraso [Keskinen 2015](https://doi.org/10.1016/j.eurpsy.2015.04.006); Hedges g=0.28 (0.16-0.40), OR aprox.=1.66 (1.34-2.06) [Filatova 2017](https://doi.org/10.1016/j.schres.2017.01.029)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Esquizofrenia",
       "cls": null,
       "ref": "Keskinen 2015",
       "url": "https://doi.org/10.1016/j.eurpsy.2015.04.006",
       "raw": "▲ **Esquizofrenia:** HR=1.22 (1.08-1.37) por mes de retraso [Keskinen 2015](https://doi.org/10.1016/j.eurpsy.2015.04.006); Hedges g=0.28 (0.16-0.40), OR aprox.=1.66 (1.34-2.06) [Filatova 2017](https://doi.org/10.1016/j.schres.2017.01.029)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Psicosis"
     ],
     "weight": 1.0
    },
    {
     "id": "A3-3",
     "block": "A",
     "blockCode": "A3",
     "blockTitle": "Hitos del neurodesarrollo y marcadores premorbidos",
     "part": "Parte I · Exposoma",
     "n": "A3-3",
     "labelRaw": "Sentarse sin apoyo tardío (**esperado ≈7.2 meses**)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [
      {
       "key": "edad",
       "label": "Edad (meses)",
       "unit": "m"
      }
     ],
     "sourceRaw": "NFBC 1966 / meta motor ([Keskinen 2015](https://pmc.ncbi.nlm.nih.gov/articles/PMC4623356/); [Filatova 2017](https://doi.org/10.1016/j.schres.2017.01.029))",
     "predictor": "meta g=0.18; HR no significativo en NFBC",
     "instrument": "cohorte + meta-análisis",
     "meta": true,
     "evidenceRaw": "▲ **Esquizofrenia:** Hedges g=0.18 (0.05-0.31), OR aprox.=1.39 (1.10-1.75) [Filatova 2017](https://doi.org/10.1016/j.schres.2017.01.029); HR=1.06 (0.89-1.27) por mes [Keskinen 2015](https://doi.org/10.1016/j.eurpsy.2015.04.006)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Esquizofrenia",
       "cls": null,
       "ref": "Filatova 2017",
       "url": "https://doi.org/10.1016/j.schres.2017.01.029",
       "raw": "▲ **Esquizofrenia:** Hedges g=0.18 (0.05-0.31), OR aprox.=1.39 (1.10-1.75) [Filatova 2017](https://doi.org/10.1016/j.schres.2017.01.029); HR=1.06 (0.89-1.27) por mes [Keskinen 2015](https://doi.org/10.1016/j.eurpsy.2015.04.006)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Psicosis"
     ],
     "weight": 1.0
    },
    {
     "id": "A3-4",
     "block": "A",
     "blockCode": "A3",
     "blockTitle": "Hitos del neurodesarrollo y marcadores premorbidos",
     "part": "Parte I · Exposoma",
     "n": "A3-4",
     "labelRaw": "Pararse/levantarse con apoyo tardío (**esperado ≈8.4 meses**)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [
      {
       "key": "edad",
       "label": "Edad (meses)",
       "unit": "m"
      }
     ],
     "sourceRaw": "NFBC 1966 ([Keskinen 2015](https://pmc.ncbi.nlm.nih.gov/articles/PMC4623356/))",
     "predictor": "HR=1.14 por mes de retraso",
     "instrument": "cohorte poblacional",
     "meta": false,
     "evidenceRaw": "▲ **Esquizofrenia:** HR=1.14 (1.01-1.28) por mes de retraso [Keskinen 2015](https://doi.org/10.1016/j.eurpsy.2015.04.006)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Esquizofrenia",
       "cls": null,
       "ref": "Keskinen 2015",
       "url": "https://doi.org/10.1016/j.eurpsy.2015.04.006",
       "raw": "▲ **Esquizofrenia:** HR=1.14 (1.01-1.28) por mes de retraso [Keskinen 2015](https://doi.org/10.1016/j.eurpsy.2015.04.006)"
      }
     ],
     "evLevel": "Coh",
     "direction": "risk",
     "outcomes": [
      "Psicosis"
     ],
     "weight": 1.0
    },
    {
     "id": "A3-5",
     "block": "A",
     "blockCode": "A3",
     "blockTitle": "Hitos del neurodesarrollo y marcadores premorbidos",
     "part": "Parte I · Exposoma",
     "n": "A3-5",
     "labelRaw": "Pinza pulgar-índice tardía (**esperado ≈7.4 meses; más peso si psicosis parental**)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [
      {
       "key": "edad",
       "label": "Edad (meses)",
       "unit": "m"
      }
     ],
     "sourceRaw": "NFBC 1966 ([Keskinen 2015](https://pmc.ncbi.nlm.nih.gov/articles/PMC4623356/))",
     "predictor": "HR=1.84 en psicosis parental; interacción HR=1.76",
     "instrument": "cohorte poblacional",
     "meta": false,
     "evidenceRaw": "▲ **Esquizofrenia:** HR=1.84 (1.11-3.06) por mes en subgrupo con psicosis parental; interacción psicosis parental×pinza HR=1.76 (1.01-3.05) [Keskinen 2015](https://doi.org/10.1016/j.eurpsy.2015.04.006)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Esquizofrenia",
       "cls": null,
       "ref": "Keskinen 2015",
       "url": "https://doi.org/10.1016/j.eurpsy.2015.04.006",
       "raw": "▲ **Esquizofrenia:** HR=1.84 (1.11-3.06) por mes en subgrupo con psicosis parental; interacción psicosis parental×pinza HR=1.76 (1.01-3.05) [Keskinen 2015](https://doi.org/10.1016/j.eurpsy.2015.04.006)"
      }
     ],
     "evLevel": "Coh",
     "direction": "risk",
     "outcomes": [
      "Psicosis"
     ],
     "weight": 1.0
    },
    {
     "id": "A3-6",
     "block": "A",
     "blockCode": "A3",
     "blockTitle": "Hitos del neurodesarrollo y marcadores premorbidos",
     "part": "Parte I · Exposoma",
     "n": "A3-6",
     "labelRaw": "Desarrollo motor global tardío (**clase late vs regular; hitos del 1.er año**)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "NFBC 1966 clases latentes ([Wagner 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC6551363/))",
     "predictor": "HR=1.92 vs regular; HR=2.42 vs temprano",
     "instrument": "cohorte poblacional",
     "meta": false,
     "evidenceRaw": "▲ **Esquizofrenia:** HR=1.92 (late vs regular, p<.001); HR=2.42 (late vs early, p<.001)<br>▲ **Psicosis no esquizofrénica:** HR=1.44 (late vs regular, p=.015) [Wagner 2019](https://doi.org/10.1016/j.schres.2019.01.005)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Esquizofrenia",
       "cls": null,
       "ref": null,
       "url": null,
       "raw": "▲ **Esquizofrenia:** HR=1.92 (late vs regular, p<.001); HR=2.42 (late vs early, p<.001)"
      },
      {
       "dir": "risk",
       "condition": "Psicosis no esquizofrénica",
       "cls": null,
       "ref": "Wagner 2019",
       "url": "https://doi.org/10.1016/j.schres.2019.01.005",
       "raw": "▲ **Psicosis no esquizofrénica:** HR=1.44 (late vs regular, p=.015) [Wagner 2019](https://doi.org/10.1016/j.schres.2019.01.005)"
      }
     ],
     "evLevel": "Coh",
     "direction": "risk",
     "outcomes": [
      "Psicosis"
     ],
     "weight": 1.0
    },
    {
     "id": "A3-7",
     "block": "A",
     "blockCode": "A3",
     "blockTitle": "Hitos del neurodesarrollo y marcadores premorbidos",
     "part": "Parte I · Exposoma",
     "n": "A3-7",
     "labelRaw": "Retraso motor + complicaciones obstétricas (**hitos 1.er año + Apgar/OC**)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Helsinki Birth Cohort / interacción ([Clarke 2011](https://doi.org/10.1176/appi.ajp.2011.11010011))",
     "predictor": "OR=4.6 para interacción",
     "instrument": "cohorte poblacional",
     "meta": false,
     "evidenceRaw": "▲ **Esquizofrenia:** OR=4.6 (1.3-17.2) para retraso motor + complicaciones obstétricas [Clarke 2011](https://doi.org/10.1176/appi.ajp.2011.11010011)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Esquizofrenia",
       "cls": null,
       "ref": "Clarke 2011",
       "url": "https://doi.org/10.1176/appi.ajp.2011.11010011",
       "raw": "▲ **Esquizofrenia:** OR=4.6 (1.3-17.2) para retraso motor + complicaciones obstétricas [Clarke 2011](https://doi.org/10.1176/appi.ajp.2011.11010011)"
      }
     ],
     "evLevel": "Coh",
     "direction": "risk",
     "outcomes": [
      "Psicosis"
     ],
     "weight": 1.0
    },
    {
     "id": "A3-8",
     "block": "A",
     "blockCode": "A3",
     "blockTitle": "Hitos del neurodesarrollo y marcadores premorbidos",
     "part": "Parte I · Exposoma",
     "n": "A3-8",
     "labelRaw": "Habla ininteligible / lenguaje expresivo pobre (**evaluado a los 7 años**)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "New England/Philadelphia cohort ([Bearden 2000](https://pubmed.ncbi.nlm.nih.gov/10885639/))",
     "predictor": "OR=12.7 para habla ininteligible",
     "instrument": "cohorte prospectiva",
     "meta": false,
     "evidenceRaw": "▲ **Esquizofrenia:** habla ininteligible a los 7 años OR=12.7; lenguaje expresivo pobre predijo esquizofrenia y hermanos no afectados [Bearden 2000](https://doi.org/10.1093/oxfordjournals.schbul.a033461)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Esquizofrenia",
       "cls": null,
       "ref": "Bearden 2000",
       "url": "https://doi.org/10.1093/oxfordjournals.schbul.a033461",
       "raw": "▲ **Esquizofrenia:** habla ininteligible a los 7 años OR=12.7; lenguaje expresivo pobre predijo esquizofrenia y hermanos no afectados [Bearden 2000](https://doi.org/10.1093/oxfordjournals.schbul.a033461)"
      }
     ],
     "evLevel": "Coh",
     "direction": "risk",
     "outcomes": [
      "Psicosis"
     ],
     "weight": 1.0
    },
    {
     "id": "A3-9",
     "block": "A",
     "blockCode": "A3",
     "blockTitle": "Hitos del neurodesarrollo y marcadores premorbidos",
     "part": "Parte I · Exposoma",
     "n": "A3-9",
     "labelRaw": "Conducta desviada focal/social (**evaluada a los 4 y 7 años: ecolalia, risa inmotivada, malajuste social**)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "New England/Philadelphia cohort ([Bearden 2000](https://pubmed.ncbi.nlm.nih.gov/10885639/))",
     "predictor": "OR=1.68 a los 4 años; OR=1.65 a los 7 años",
     "instrument": "cohorte prospectiva",
     "meta": false,
     "evidenceRaw": "▲ **Esquizofrenia:** conducta desviada a los 4 años OR=1.68 (1.14-2.46); a los 7 años OR=1.65 (1.13-2.41) [Bearden 2000](https://doi.org/10.1093/oxfordjournals.schbul.a033461)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Esquizofrenia",
       "cls": null,
       "ref": "Bearden 2000",
       "url": "https://doi.org/10.1093/oxfordjournals.schbul.a033461",
       "raw": "▲ **Esquizofrenia:** conducta desviada a los 4 años OR=1.68 (1.14-2.46); a los 7 años OR=1.65 (1.13-2.41) [Bearden 2000](https://doi.org/10.1093/oxfordjournals.schbul.a033461)"
      }
     ],
     "evLevel": "Coh",
     "direction": "risk",
     "outcomes": [
      "Psicosis"
     ],
     "weight": 1.0
    },
    {
     "id": "A3-10",
     "block": "A",
     "blockCode": "A3",
     "blockTitle": "Hitos del neurodesarrollo y marcadores premorbidos",
     "part": "Parte I · Exposoma",
     "n": "A3-10",
     "labelRaw": "CI/cognición premórbida baja (**IQ 70-85 o <70; referencia 100-115**)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [
      {
       "key": "ci",
       "label": "CI",
       "unit": ""
      }
     ],
     "sourceRaw": "Meta IQ premórbido / NEFS ([Khandaker 2011](https://pmc.ncbi.nlm.nih.gov/articles/PMC3485562/); [Agnew-Blais 2016](https://pmc.ncbi.nlm.nih.gov/articles/PMC6140330/))",
     "predictor": "OR=2.36 si IQ 70-85; OR=4.78 si IQ<70",
     "instrument": "meta-análisis + cohorte",
     "meta": true,
     "evidenceRaw": "▲ **Esquizofrenia:** IQ 70-85 OR=2.36 (1.59-3.49); IQ<70 OR=4.78 (3.19-7.13); cada punto menor de IQ ≈3.7%↑ riesgo [Khandaker 2011](https://doi.org/10.1016/j.schres.2011.06.017)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Esquizofrenia",
       "cls": null,
       "ref": "Khandaker 2011",
       "url": "https://doi.org/10.1016/j.schres.2011.06.017",
       "raw": "▲ **Esquizofrenia:** IQ 70-85 OR=2.36 (1.59-3.49); IQ<70 OR=4.78 (3.19-7.13); cada punto menor de IQ ≈3.7%↑ riesgo [Khandaker 2011](https://doi.org/10.1016/j.schres.2011.06.017)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Psicosis"
     ],
     "weight": 1.0
    },
    {
     "id": "A3-11",
     "block": "A",
     "blockCode": "A3",
     "blockTitle": "Hitos del neurodesarrollo y marcadores premorbidos",
     "part": "Parte I · Exposoma",
     "n": "A3-11",
     "labelRaw": "Externalizantes infantiles altos (**evaluados a los 7 años; top 10% clínico**)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "NEFS / comportamiento infantil ([Agnew-Blais 2016](https://pmc.ncbi.nlm.nih.gov/articles/PMC6140330/))",
     "predictor": "OR=3.01 esquizofrenia; OR=3.80 psicosis afectiva",
     "instrument": "cohorte prospectiva",
     "meta": false,
     "evidenceRaw": "▲ **Esquizofrenia:** OR=3.01 (1.38-6.57); ajustado con IQ OR=2.55 (1.21-5.38)<br>▲ **Psicosis afectiva:** OR=3.80 (1.80-8.03); ajustado con IQ OR=3.43 (1.62-7.28) [Agnew-Blais 2016](https://doi.org/10.1016/j.schres.2016.12.003)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Esquizofrenia",
       "cls": null,
       "ref": null,
       "url": null,
       "raw": "▲ **Esquizofrenia:** OR=3.01 (1.38-6.57); ajustado con IQ OR=2.55 (1.21-5.38)"
      },
      {
       "dir": "risk",
       "condition": "Psicosis afectiva",
       "cls": null,
       "ref": "Agnew-Blais 2016",
       "url": "https://doi.org/10.1016/j.schres.2016.12.003",
       "raw": "▲ **Psicosis afectiva:** OR=3.80 (1.80-8.03); ajustado con IQ OR=3.43 (1.62-7.28) [Agnew-Blais 2016](https://doi.org/10.1016/j.schres.2016.12.003)"
      }
     ],
     "evLevel": "Coh",
     "direction": "risk",
     "outcomes": [
      "Psicosis"
     ],
     "weight": 1.0
    },
    {
     "id": "A3-12",
     "block": "A",
     "blockCode": "A3",
     "blockTitle": "Hitos del neurodesarrollo y marcadores premorbidos",
     "part": "Parte I · Exposoma",
     "n": "A3-12",
     "labelRaw": "Internalizantes infantiles altos (**evaluados a los 7 años; top 10% clínico**)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "NEFS / comportamiento infantil ([Agnew-Blais 2016](https://pmc.ncbi.nlm.nih.gov/articles/PMC6140330/))",
     "predictor": "OR=3.27 esquizofrenia; OR=3.24 psicosis afectiva",
     "instrument": "cohorte prospectiva",
     "meta": false,
     "evidenceRaw": "▲ **Esquizofrenia:** OR=3.27 (1.47-7.28); ajustado con IQ OR=2.63 (1.17-5.93)<br>▲ **Psicosis afectiva:** OR=3.24 (1.49-7.04); ajustado con IQ OR=2.71 (1.29-5.69) [Agnew-Blais 2016](https://doi.org/10.1016/j.schres.2016.12.003)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Esquizofrenia",
       "cls": null,
       "ref": null,
       "url": null,
       "raw": "▲ **Esquizofrenia:** OR=3.27 (1.47-7.28); ajustado con IQ OR=2.63 (1.17-5.93)"
      },
      {
       "dir": "risk",
       "condition": "Psicosis afectiva",
       "cls": null,
       "ref": "Agnew-Blais 2016",
       "url": "https://doi.org/10.1016/j.schres.2016.12.003",
       "raw": "▲ **Psicosis afectiva:** OR=3.24 (1.49-7.04); ajustado con IQ OR=2.71 (1.29-5.69) [Agnew-Blais 2016](https://doi.org/10.1016/j.schres.2016.12.003)"
      }
     ],
     "evLevel": "Coh",
     "direction": "risk",
     "outcomes": [
      "Psicosis"
     ],
     "weight": 1.0
    }
   ]
  },
  {
   "code": "B",
   "block": "B",
   "title": "Adversidad y trauma infantil",
   "part": "Parte I · Exposoma",
   "items": [
    {
     "id": "19",
     "block": "B",
     "blockCode": "B",
     "blockTitle": "Adversidad y trauma infantil",
     "part": "Parte I · Exposoma",
     "n": "19",
     "labelRaw": "Abuso emocional",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ES-SCZ, depRS ([Pries 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC7965069/))",
     "predictor": "dom. adversidad (top peso)",
     "instrument": "ES-SCZ OR~1.6/SD",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** OR=2.78 (1.89-4.09) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894)<br>▲ **TLP:** OR=28.15 (17.46-53.68) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894) · OR=28.15 (14.76-53.68) cl.II [Solmi 2021 (PD)](https://doi.org/10.3389/fpsyt.2021.679379)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "II",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Depresión:** OR=2.78 (1.89-4.09) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894)"
      },
      {
       "dir": "risk",
       "condition": "TLP",
       "cls": "II",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **TLP:** OR=28.15 (17.46-53.68) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894) · OR=28.15 (14.76-53.68) cl.II [Solmi 2021 (PD)](https://doi.org/10.3389/fpsyt.2021.679379)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion",
      "Personalidad"
     ],
     "weight": 2.0
    },
    {
     "id": "20",
     "block": "B",
     "blockCode": "B",
     "blockTitle": "Adversidad y trauma infantil",
     "part": "Parte I · Exposoma",
     "n": "20",
     "labelRaw": "Abuso físico",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ES-SCZ, PERS ([Pries 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC7965069/))",
     "predictor": "OR psicosis ~2.5 (meta)",
     "instrument": "ES-SCZ OR~1.6/SD",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** OR=1.98 (1.68-2.33) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894) · RR=1.89 (1.70-2.09) cl.I [Arango 2022](https://doi.org/10.1038/s41380-022-01586-8)<br>▲ **TLP:** OR=9.30 (6.57-13.17) cl.II [Solmi 2021 (PD)](https://doi.org/10.3389/fpsyt.2021.679379) (tb. Carvalho 2021)<br>▲ **Fobia social:** OR=2.59 (2.17-3.10) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "I",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Depresión:** OR=1.98 (1.68-2.33) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894) · RR=1.89 (1.70-2.09) cl.I [Arango 2022](https://doi.org/10.1038/s41380-022-01586-8)"
      },
      {
       "dir": "risk",
       "condition": "TLP",
       "cls": "II",
       "ref": "Solmi 2021 (PD)",
       "url": "https://doi.org/10.3389/fpsyt.2021.679379",
       "raw": "▲ **TLP:** OR=9.30 (6.57-13.17) cl.II [Solmi 2021 (PD)](https://doi.org/10.3389/fpsyt.2021.679379) (tb. Carvalho 2021)"
      },
      {
       "dir": "risk",
       "condition": "Fobia social",
       "cls": "I",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Fobia social:** OR=2.59 (2.17-3.10) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion",
      "Personalidad",
      "Ansiedad"
     ],
     "weight": 3.0
    },
    {
     "id": "21",
     "block": "B",
     "blockCode": "B",
     "blockTitle": "Adversidad y trauma infantil",
     "part": "Parte I · Exposoma",
     "n": "21",
     "labelRaw": "Abuso sexual",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ES-SCZ, PERS ([Pries 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC7965069/))",
     "predictor": "OR psicosis ~2.4 (meta)",
     "instrument": "ES-SCZ OR~1.6/SD",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** OR=2.42 (1.94-3.02) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894) · RR=2.31 (1.72-3.10) cl.II [Arango 2022](https://doi.org/10.1038/s41380-022-01586-8)<br>▲ **TLP:** OR=7.95 (6.21-10.17) cl.II [Solmi 2021 (PD)](https://doi.org/10.3389/fpsyt.2021.679379) (tb. Carvalho 2021)<br>▲ **TCA:** OR=2.73 (1.96-3.79) cl.II [Solmi 2020](https://doi.org/10.1590/1516-4446-2020-1099) (tb. Carvalho 2021)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "II",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Depresión:** OR=2.42 (1.94-3.02) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894) · RR=2.31 (1.72-3.10) cl.II [Arango 2022](https://doi.org/10.1038/s41380-022-01586-8)"
      },
      {
       "dir": "risk",
       "condition": "TLP",
       "cls": "II",
       "ref": "Solmi 2021 (PD)",
       "url": "https://doi.org/10.3389/fpsyt.2021.679379",
       "raw": "▲ **TLP:** OR=7.95 (6.21-10.17) cl.II [Solmi 2021 (PD)](https://doi.org/10.3389/fpsyt.2021.679379) (tb. Carvalho 2021)"
      },
      {
       "dir": "risk",
       "condition": "TCA",
       "cls": "II",
       "ref": "Solmi 2020",
       "url": "https://doi.org/10.1590/1516-4446-2020-1099",
       "raw": "▲ **TCA:** OR=2.73 (1.96-3.79) cl.II [Solmi 2020](https://doi.org/10.1590/1516-4446-2020-1099) (tb. Carvalho 2021)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion",
      "Personalidad",
      "TCA"
     ],
     "weight": 2.0
    },
    {
     "id": "22",
     "block": "B",
     "blockCode": "B",
     "blockTitle": "Adversidad y trauma infantil",
     "part": "Parte I · Exposoma",
     "n": "22",
     "labelRaw": "Negligencia emocional",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ES-SCZ ([Pries 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC7965069/))",
     "predictor": "dom. adversidad",
     "instrument": "ES-SCZ OR~1.6/SD",
     "meta": true,
     "evidenceRaw": "▲ **TLP:** OR=22.86 (11.55-45.22) cl.II [Solmi 2021 (PD)](https://doi.org/10.3389/fpsyt.2021.679379) (tb. Carvalho 2021)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "TLP",
       "cls": "II",
       "ref": "Solmi 2021 (PD)",
       "url": "https://doi.org/10.3389/fpsyt.2021.679379",
       "raw": "▲ **TLP:** OR=22.86 (11.55-45.22) cl.II [Solmi 2021 (PD)](https://doi.org/10.3389/fpsyt.2021.679379) (tb. Carvalho 2021)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Personalidad"
     ],
     "weight": 2.0
    },
    {
     "id": "23",
     "block": "B",
     "blockCode": "B",
     "blockTitle": "Adversidad y trauma infantil",
     "part": "Parte I · Exposoma",
     "n": "23",
     "labelRaw": "Negligencia física",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ES-SCZ ([Pries 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC7965069/))",
     "predictor": "dom. adversidad",
     "instrument": "ES-SCZ OR~1.6/SD",
     "meta": true,
     "evidenceRaw": "▲ **TLP:** OR=5.73 (3.21-10.21) cl.II [Solmi 2021 (PD)](https://doi.org/10.3389/fpsyt.2021.679379) (tb. Carvalho 2021)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "TLP",
       "cls": "II",
       "ref": "Solmi 2021 (PD)",
       "url": "https://doi.org/10.3389/fpsyt.2021.679379",
       "raw": "▲ **TLP:** OR=5.73 (3.21-10.21) cl.II [Solmi 2021 (PD)](https://doi.org/10.3389/fpsyt.2021.679379) (tb. Carvalho 2021)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Personalidad"
     ],
     "weight": 2.0
    },
    {
     "id": "24",
     "block": "B",
     "blockCode": "B",
     "blockTitle": "Adversidad y trauma infantil",
     "part": "Parte I · Exposoma",
     "n": "24",
     "labelRaw": "Bullying/victimización por pares",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ES-SCZ ([Pries 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC7965069/))",
     "predictor": "dom. adversidad",
     "instrument": "ES-SCZ OR~1.6/SD",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Psicosis"
     ],
     "weight": 1.0
    },
    {
     "id": "25",
     "block": "B",
     "blockCode": "B",
     "blockTitle": "Adversidad y trauma infantil",
     "part": "Parte I · Exposoma",
     "n": "25",
     "labelRaw": "Muerte/separación parental",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "PERS / ALSPAC ([Padmanabhan 2017](https://pubmed.ncbi.nlm.nih.gov/28029515/))",
     "predictor": "factor de adversidad",
     "instrument": "en PERS aditivo",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** RR=3.01 (2.81-3.23) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "II",
       "ref": "Wang 2025",
       "url": "https://doi.org/10.1016/j.bbih.2025.101068",
       "raw": "▲ **Depresión:** RR=3.01 (2.81-3.23) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)"
      }
     ],
     "evLevel": "Coh",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 2.0
    },
    {
     "id": "26",
     "block": "B",
     "blockCode": "B",
     "blockTitle": "Adversidad y trauma infantil",
     "part": "Parte I · Exposoma",
     "n": "26",
     "labelRaw": "Divorcio/separación de padres",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ALSPAC ML ([Yoo 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11458604/))",
     "predictor": "feature ML",
     "instrument": "modelo ML depresión",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Der",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 0.5
    },
    {
     "id": "27",
     "block": "B",
     "blockCode": "B",
     "blockTitle": "Adversidad y trauma infantil",
     "part": "Parte I · Exposoma",
     "n": "27",
     "labelRaw": "Violencia doméstica",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "depRS estresor familiar ([Baldwin 2025](https://pubmed.ncbi.nlm.nih.gov/40672501/))",
     "predictor": "de 23 predictores",
     "instrument": "depRS+PGS AUC 0.70",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** RR=3.14 (2.74-3.61) cl.I [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068) · RR=2.57 (2.25-2.94) cl.II [Köhler 2018](https://doi.org/10.1016/j.jpsychires.2018.05.020) (tb. Carvalho 2021) · OR=1.97 (1.56-2.48) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)<br>▲ **Depresión posparto:** OR=2.50 (2.12-2.95) cl.II [Xu 2025](https://doi.org/10.3389/fpubh.2025.1714668)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "I",
       "ref": "Wang 2025",
       "url": "https://doi.org/10.1016/j.bbih.2025.101068",
       "raw": "▲ **Depresión:** RR=3.14 (2.74-3.61) cl.I [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068) · RR=2.57 (2.25-2.94) cl.II [Köhler 2018](https://doi.org/10.1016/j.jpsychires.2018.05.020) (tb. Carvalho 2021) · OR=1.97 (1.56-2.48) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)"
      },
      {
       "dir": "risk",
       "condition": "Depresión posparto",
       "cls": "II",
       "ref": "Xu 2025",
       "url": "https://doi.org/10.3389/fpubh.2025.1714668",
       "raw": "▲ **Depresión posparto:** OR=2.50 (2.12-2.95) cl.II [Xu 2025](https://doi.org/10.3389/fpubh.2025.1714668)"
      }
     ],
     "evLevel": "Val-ext",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 3.0
    },
    {
     "id": "28",
     "block": "B",
     "blockCode": "B",
     "blockTitle": "Adversidad y trauma infantil",
     "part": "Parte I · Exposoma",
     "n": "28",
     "labelRaw": "Conflicto familiar/crítica parental",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ALSPAC ML / ABCD ([Yoo 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11458604/))",
     "predictor": "feature ML",
     "instrument": "modelo ML depresión",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Der",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 0.5
    },
    {
     "id": "29",
     "block": "B",
     "blockCode": "B",
     "blockTitle": "Adversidad y trauma infantil",
     "part": "Parte I · Exposoma",
     "n": "29",
     "labelRaw": "Trauma/evento traumático (cualquiera)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "**NAPLS-2 predictor** / PERS ([Cannon 2016](https://pmc.ncbi.nlm.nih.gov/articles/PMC5048498/))",
     "predictor": "predictor en NAPLS",
     "instrument": "NAPLS C-index 0.71",
     "meta": true,
     "evidenceRaw": "▲ **TEPT:** OR=5.24 (3.54-7.76) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894) · g=0.66 (0.44-0.88) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894)<br>▲ **TAG:** OR=2.39 (1.92-2.98) cl.II [Fullana 2019](https://doi.org/10.1017/S0033291719001247) · OR=3.28 (2.6-4.14) cl.II [Fullana 2019](https://doi.org/10.1017/S0033291719001247)<br>▲ **Pánico:** OR=2.46 (1.95-3.11) cl.I [Fullana 2019](https://doi.org/10.1017/S0033291719001247)<br>▲ **Fobia social:** OR=2.59 (2.17-3.1) cl.I [Fullana 2019](https://doi.org/10.1017/S0033291719001247)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "TEPT",
       "cls": "II",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **TEPT:** OR=5.24 (3.54-7.76) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894) · g=0.66 (0.44-0.88) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894)"
      },
      {
       "dir": "risk",
       "condition": "TAG",
       "cls": "II",
       "ref": "Fullana 2019",
       "url": "https://doi.org/10.1017/S0033291719001247",
       "raw": "▲ **TAG:** OR=2.39 (1.92-2.98) cl.II [Fullana 2019](https://doi.org/10.1017/S0033291719001247) · OR=3.28 (2.6-4.14) cl.II [Fullana 2019](https://doi.org/10.1017/S0033291719001247)"
      },
      {
       "dir": "risk",
       "condition": "Pánico",
       "cls": "I",
       "ref": "Fullana 2019",
       "url": "https://doi.org/10.1017/S0033291719001247",
       "raw": "▲ **Pánico:** OR=2.46 (1.95-3.11) cl.I [Fullana 2019](https://doi.org/10.1017/S0033291719001247)"
      },
      {
       "dir": "risk",
       "condition": "Fobia social",
       "cls": "I",
       "ref": "Fullana 2019",
       "url": "https://doi.org/10.1017/S0033291719001247",
       "raw": "▲ **Fobia social:** OR=2.59 (2.17-3.1) cl.I [Fullana 2019](https://doi.org/10.1017/S0033291719001247)"
      }
     ],
     "evLevel": "Val-ext",
     "direction": "risk",
     "outcomes": [
      "TEPT",
      "Ansiedad"
     ],
     "weight": 3.0
    },
    {
     "id": "30",
     "block": "B",
     "blockCode": "B",
     "blockTitle": "Adversidad y trauma infantil",
     "part": "Parte I · Exposoma",
     "n": "30",
     "labelRaw": "Muerte súbita de ser querido",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ERS-MDD SLEs ([Kendler 2025](https://pubmed.ncbi.nlm.nih.gov/40051281/))",
     "predictor": "1 de 52 categorías SLE",
     "instrument": "ERS-MDD validado mitad",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Coh",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 1.0
    },
    {
     "id": "B-n1",
     "block": "B",
     "blockCode": "B",
     "blockTitle": "Adversidad y trauma infantil",
     "part": "Parte I · Exposoma",
     "n": "B-n1",
     "labelRaw": "Abuso de sustancias en el hogar (**ACE; antes de los 18 años**)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [
      {
       "key": "quién",
       "label": "Quién",
       "unit": ""
      }
     ],
     "sourceRaw": "ACE-10 CDC-Kaiser / BRFSS ([CDC ACE](https://www.cdc.gov/violenceprevention/aces/about.html))",
     "predictor": "miembro del hogar con alcoholismo, uso de drogas o abuso de medicación",
     "instrument": "ACE clásico",
     "meta": false,
     "evidenceRaw": "Registrar sustancia, parentesco, convivencia, edad/periodo y si generó negligencia, violencia, inseguridad o parentificación.",
     "evidence": [
      {
       "dir": null,
       "condition": "",
       "cls": null,
       "ref": null,
       "url": null,
       "raw": "Registrar sustancia, parentesco, convivencia, edad/periodo y si generó negligencia, violencia, inseguridad o parentificación."
      }
     ],
     "evLevel": "Checklist",
     "direction": "risk",
     "outcomes": [
      "Transdiagnostico"
     ],
     "weight": 0.5
    },
    {
     "id": "B-n2",
     "block": "B",
     "blockCode": "B",
     "blockTitle": "Adversidad y trauma infantil",
     "part": "Parte I · Exposoma",
     "n": "B-n2",
     "labelRaw": "Enfermedad mental o intento suicida en el hogar (**ACE; antes de los 18 años**)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [
      {
       "key": "quién",
       "label": "Quién",
       "unit": ""
      }
     ],
     "sourceRaw": "ACE-10 CDC-Kaiser / BRFSS ([CDC ACE](https://www.cdc.gov/violenceprevention/aces/about.html))",
     "predictor": "miembro del hogar deprimido, con enfermedad mental o intento suicida",
     "instrument": "ACE clásico",
     "meta": true,
     "evidenceRaw": "Conectar con antecedente familiar granular (#37-38) y registrar diagnóstico probable, hospitalización, discapacidad, suicidio/intentos y exposición del niño/a al cuadro.",
     "evidence": [
      {
       "dir": null,
       "condition": "",
       "cls": null,
       "ref": null,
       "url": null,
       "raw": "Conectar con antecedente familiar granular (#37-38) y registrar diagnóstico probable, hospitalización, discapacidad, suicidio/intentos y exposición del niño/a al cuadro."
      }
     ],
     "evLevel": "Checklist",
     "direction": "risk",
     "outcomes": [
      "Transdiagnostico"
     ],
     "weight": 0.5
    },
    {
     "id": "B-n3",
     "block": "B",
     "blockCode": "B",
     "blockTitle": "Adversidad y trauma infantil",
     "part": "Parte I · Exposoma",
     "n": "B-n3",
     "labelRaw": "Miembro del hogar encarcelado (**ACE; antes de los 18 años**)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [
      {
       "key": "quién",
       "label": "Quién",
       "unit": ""
      }
     ],
     "sourceRaw": "ACE-10 CDC-Kaiser / BRFSS ([CDC ACE](https://www.cdc.gov/violenceprevention/aces/about.html))",
     "predictor": "convivencia con familiar/miembro del hogar que fue a prisión/cárcel",
     "instrument": "ACE clásico",
     "meta": false,
     "evidenceRaw": "Registrar parentesco, edad del niño/a, duración de ausencia, motivo si se conoce sin forzar detalle, impacto económico/cuidados/estigma y exposición a violencia o SUD.",
     "evidence": [
      {
       "dir": null,
       "condition": "",
       "cls": null,
       "ref": null,
       "url": null,
       "raw": "Registrar parentesco, edad del niño/a, duración de ausencia, motivo si se conoce sin forzar detalle, impacto económico/cuidados/estigma y exposición a violencia o SUD."
      }
     ],
     "evLevel": "Checklist",
     "direction": "risk",
     "outcomes": [
      "Transdiagnostico"
     ],
     "weight": 0.5
    }
   ]
  },
  {
   "code": "C",
   "block": "C",
   "title": "Contexto social, demografico y de vecindario",
   "part": "Parte I · Exposoma",
   "items": [
    {
     "id": "31",
     "block": "C",
     "blockCode": "C",
     "blockTitle": "Contexto social, demografico y de vecindario",
     "part": "Parte I · Exposoma",
     "n": "31",
     "labelRaw": "Urbanicidad (crianza en ciudad)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Maudsley ERS, PERS, PPS ([Vassos 2020](https://pubmed.ncbi.nlm.nih.gov/31535606/))",
     "predictor": "RR psicosis ~2.0 (meta)",
     "instrument": "en ERS/PPS validados",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Psicosis"
     ],
     "weight": 1.0
    },
    {
     "id": "32",
     "block": "C",
     "blockCode": "C",
     "blockTitle": "Contexto social, demografico y de vecindario",
     "part": "Parte I · Exposoma",
     "n": "32",
     "labelRaw": "Minoría étnica/estatus migratorio",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Maudsley ERS ([Vassos 2020](https://pubmed.ncbi.nlm.nih.gov/31535606/))",
     "predictor": "RR ~1.8–4.6 (meta)",
     "instrument": "ERS validado",
     "meta": true,
     "evidenceRaw": "▲ **Psicosis:** IRR=4.87 (3.96-6.00) cl.I [Radua 2018](https://doi.org/10.1002/wps.20490) (tb. Carvalho 2021) · IRR=1.68 (1.42-1.92) cl.II [Radua 2018](https://doi.org/10.1002/wps.20490) (tb. Carvalho 2021) · IRR=3.71 (2.47-5.58) cl.II [Radua 2018](https://doi.org/10.1002/wps.20490) (tb. Carvalho 2021)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Psicosis",
       "cls": "I",
       "ref": "Radua 2018",
       "url": "https://doi.org/10.1002/wps.20490",
       "raw": "▲ **Psicosis:** IRR=4.87 (3.96-6.00) cl.I [Radua 2018](https://doi.org/10.1002/wps.20490) (tb. Carvalho 2021) · IRR=1.68 (1.42-1.92) cl.II [Radua 2018](https://doi.org/10.1002/wps.20490) (tb. Carvalho 2021) · IRR=3.71 (2.47-5.58) cl.II [Radua 2018](https://doi.org/10.1002/wps.20490) (tb. Carvalho 2021)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Psicosis"
     ],
     "weight": 3.0
    },
    {
     "id": "33",
     "block": "C",
     "blockCode": "C",
     "blockTitle": "Contexto social, demografico y de vecindario",
     "part": "Parte I · Exposoma",
     "n": "33",
     "labelRaw": "Bajo NSE parental/pobreza",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "PPS, K-PERS, depRS ([Oliver 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC6478670/))",
     "predictor": "factor sociodemográfico",
     "instrument": "PPS validado",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** OR=1.58 (1.38-1.82) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068) (tb. Carvalho 2021) · OR=2.03 (1.63-2.53) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "II",
       "ref": "Wang 2025",
       "url": "https://doi.org/10.1016/j.bbih.2025.101068",
       "raw": "▲ **Depresión:** OR=1.58 (1.38-1.82) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068) (tb. Carvalho 2021) · OR=2.03 (1.63-2.53) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)"
      }
     ],
     "evLevel": "Coh",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 2.0
    },
    {
     "id": "34",
     "block": "C",
     "blockCode": "C",
     "blockTitle": "Contexto social, demografico y de vecindario",
     "part": "Parte I · Exposoma",
     "n": "34",
     "labelRaw": "Baja educación parental/desempleo",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ALSPAC ML ([Yoo 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11458604/))",
     "predictor": "feature ML",
     "instrument": "modelo ML depresión",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** OR=1.58 (1.38-1.82) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068) (tb. Carvalho 2021)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "II",
       "ref": "Wang 2025",
       "url": "https://doi.org/10.1016/j.bbih.2025.101068",
       "raw": "▲ **Depresión:** OR=1.58 (1.38-1.82) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068) (tb. Carvalho 2021)"
      }
     ],
     "evLevel": "Der",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 2.0
    },
    {
     "id": "35",
     "block": "C",
     "blockCode": "C",
     "blockTitle": "Contexto social, demografico y de vecindario",
     "part": "Parte I · Exposoma",
     "n": "35",
     "labelRaw": "Vecindario inseguro/hacinamiento",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ABCD Exposome subf. vecindario ([Moore 2022](https://academic.oup.com/exposome/article/2/1/osac010/6900933))",
     "predictor": "carga subfactor barrio",
     "instrument": ">38% var. psicopat.",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Der",
     "direction": "risk",
     "outcomes": [
      "Transdiagnostico"
     ],
     "weight": 0.5
    },
    {
     "id": "36",
     "block": "C",
     "blockCode": "C",
     "blockTitle": "Contexto social, demografico y de vecindario",
     "part": "Parte I · Exposoma",
     "n": "36",
     "labelRaw": "Discriminación percibida",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ABCD Exposome subf. día-a-día ([Moore 2022](https://academic.oup.com/exposome/article/2/1/osac010/6900933))",
     "predictor": "carga subfactor exp. diaria",
     "instrument": ">38% var. psicopat.",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Der",
     "direction": "risk",
     "outcomes": [
      "Transdiagnostico"
     ],
     "weight": 0.5
    },
    {
     "id": "37",
     "block": "C",
     "blockCode": "C",
     "blockTitle": "Contexto social, demografico y de vecindario",
     "part": "Parte I · Exposoma",
     "n": "37",
     "labelRaw": "Enfermedad mental grave parental/**familiar de psicosis**",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "PPS / **NAPLS-2 predictor** ([Cannon 2016](https://pmc.ncbi.nlm.nih.gov/articles/PMC5048498/))",
     "predictor": "predictor en NAPLS",
     "instrument": "NAPLS C-index 0.71",
     "meta": true,
     "evidenceRaw": "▲ **TEPT:** OR=1.80 (1.48-2.19) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894)<br>▲ **TAG:** HR=3.77 (2.27-6.26) cl.II [Fullana 2019](https://doi.org/10.1017/S0033291719001247)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "TEPT",
       "cls": "I",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **TEPT:** OR=1.80 (1.48-2.19) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894)"
      },
      {
       "dir": "risk",
       "condition": "TAG",
       "cls": "II",
       "ref": "Fullana 2019",
       "url": "https://doi.org/10.1017/S0033291719001247",
       "raw": "▲ **TAG:** HR=3.77 (2.27-6.26) cl.II [Fullana 2019](https://doi.org/10.1017/S0033291719001247)"
      }
     ],
     "evLevel": "Val-ext",
     "direction": "risk",
     "outcomes": [
      "TEPT",
      "Ansiedad"
     ],
     "weight": 3.0
    },
    {
     "id": "38",
     "block": "C",
     "blockCode": "C",
     "blockTitle": "Contexto social, demografico y de vecindario",
     "part": "Parte I · Exposoma",
     "n": "38",
     "labelRaw": "Depresión parental específicamente",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "depRS (top predictor) ([Baldwin 2025](https://pubmed.ncbi.nlm.nih.gov/40672501/))",
     "predictor": "top 1 de 23 predictores",
     "instrument": "depRS+PGS AUC 0.70",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Val-ext",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 1.0
    },
    {
     "id": "39",
     "block": "C",
     "blockCode": "C",
     "blockTitle": "Contexto social, demografico y de vecindario",
     "part": "Parte I · Exposoma",
     "n": "39",
     "labelRaw": "Eventos vitales adultos estresantes",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "PPS, K-PERS-I / **NAPLS predictor** ([Oliver 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC6478670/))",
     "predictor": "predictor / 52 SLEs (ERS-MDD)",
     "instrument": "PPS / ERS-MDD validados",
     "meta": true,
     "evidenceRaw": "▲ **Psicosis:** OR=3.11 (2.31-4.18) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Psicosis",
       "cls": "II",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Psicosis:** OR=3.11 (2.31-4.18) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894)"
      }
     ],
     "evLevel": "Coh",
     "direction": "risk",
     "outcomes": [
      "Psicosis"
     ],
     "weight": 2.0
    },
    {
     "id": "40",
     "block": "C",
     "blockCode": "C",
     "blockTitle": "Contexto social, demografico y de vecindario",
     "part": "Parte I · Exposoma",
     "n": "40",
     "labelRaw": "Falta de acceso a atención infantil",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ALSPAC ML ([Yoo 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11458604/))",
     "predictor": "feature ML",
     "instrument": "modelo ML depresión",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Der",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 0.5
    },
    {
     "id": "41",
     "block": "C",
     "blockCode": "C",
     "blockTitle": "Contexto social, demografico y de vecindario",
     "part": "Parte I · Exposoma",
     "n": "41",
     "labelRaw": "Bajo soporte social/red pobre",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ALSPAC ML / ansiedad mixtura ([Yoo 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11458604/))",
     "predictor": "feature ML",
     "instrument": "modelo ML depresión",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** OR=2.57 (2.32-2.85) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)<br>▲ **Demencia:** RR=1.57 (1.32-1.85) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Arango 2022)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "II",
       "ref": "Wang 2025",
       "url": "https://doi.org/10.1016/j.bbih.2025.101068",
       "raw": "▲ **Depresión:** OR=2.57 (2.32-2.85) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)"
      },
      {
       "dir": "risk",
       "condition": "Demencia",
       "cls": "I",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Demencia:** RR=1.57 (1.32-1.85) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Arango 2022)"
      }
     ],
     "evLevel": "Der",
     "direction": "risk",
     "outcomes": [
      "Depresion",
      "Demencia"
     ],
     "weight": 3.0
    }
   ]
  },
  {
   "code": "C2",
   "block": "C",
   "title": "Demografico-vital, laboral y crianza (umbrella)",
   "part": "Parte I · Exposoma",
   "items": [
    {
     "id": "C-n1",
     "block": "C",
     "blockCode": "C2",
     "blockTitle": "Demografico-vital, laboral y crianza (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "C-n1",
     "labelRaw": "Sexo femenino",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** OR=1.57 (1.39-1.79) cl.I [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)<br>▲ **TEPT:** OR=1.65 (1.45-1.87) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894)<br>▲ **Fobia específica/TAG/Pánico:** OR≈0.43-0.50 (sexo masc. protector) cl.I [Fullana 2019](https://doi.org/10.1017/S0033291719001247)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "I",
       "ref": "Wang 2025",
       "url": "https://doi.org/10.1016/j.bbih.2025.101068",
       "raw": "▲ **Depresión:** OR=1.57 (1.39-1.79) cl.I [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)"
      },
      {
       "dir": "risk",
       "condition": "TEPT",
       "cls": "II",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **TEPT:** OR=1.65 (1.45-1.87) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894)"
      },
      {
       "dir": "risk",
       "condition": "Fobia específica/TAG/Pánico",
       "cls": "I",
       "ref": "Fullana 2019",
       "url": "https://doi.org/10.1017/S0033291719001247",
       "raw": "▲ **Fobia específica/TAG/Pánico:** OR≈0.43-0.50 (sexo masc. protector) cl.I [Fullana 2019](https://doi.org/10.1017/S0033291719001247)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion",
      "TEPT",
      "Ansiedad"
     ],
     "weight": 3.0
    },
    {
     "id": "C-n2",
     "block": "C",
     "blockCode": "C2",
     "blockTitle": "Demografico-vital, laboral y crianza (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "C-n2",
     "labelRaw": "Sexo masculino (riesgo TEA / protector ansiedad-depresión)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **TEA:** RR=1.47 (1.39-1.55) cl.III [Salehi 2024](https://doi.org/10.3345/cep.2024.00136)<br>▼ **Depresión:** OR=0.56 (0.47-0.65) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)<br>▼ **Fobia específica:** OR=0.43 (0.36-0.51) cl.I [Fullana 2019](https://doi.org/10.1017/S0033291719001247)<br>▼ **TAG:** OR=0.50 (0.41-0.59) cl.I [Fullana 2019](https://doi.org/10.1017/S0033291719001247)<br>▼ **Pánico:** OR=0.50 (0.39-0.64) cl.I [Fullana 2019](https://doi.org/10.1017/S0033291719001247)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "TEA",
       "cls": "III",
       "ref": "Salehi 2024",
       "url": "https://doi.org/10.3345/cep.2024.00136",
       "raw": "▲ **TEA:** RR=1.47 (1.39-1.55) cl.III [Salehi 2024](https://doi.org/10.3345/cep.2024.00136)"
      },
      {
       "dir": "prot",
       "condition": "Depresión",
       "cls": "II",
       "ref": "Wang 2025",
       "url": "https://doi.org/10.1016/j.bbih.2025.101068",
       "raw": "▼ **Depresión:** OR=0.56 (0.47-0.65) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)"
      },
      {
       "dir": "prot",
       "condition": "Fobia específica",
       "cls": "I",
       "ref": "Fullana 2019",
       "url": "https://doi.org/10.1017/S0033291719001247",
       "raw": "▼ **Fobia específica:** OR=0.43 (0.36-0.51) cl.I [Fullana 2019](https://doi.org/10.1017/S0033291719001247)"
      },
      {
       "dir": "prot",
       "condition": "TAG",
       "cls": "I",
       "ref": "Fullana 2019",
       "url": "https://doi.org/10.1017/S0033291719001247",
       "raw": "▼ **TAG:** OR=0.50 (0.41-0.59) cl.I [Fullana 2019](https://doi.org/10.1017/S0033291719001247)"
      },
      {
       "dir": "prot",
       "condition": "Pánico",
       "cls": "I",
       "ref": "Fullana 2019",
       "url": "https://doi.org/10.1017/S0033291719001247",
       "raw": "▼ **Pánico:** OR=0.50 (0.39-0.64) cl.I [Fullana 2019](https://doi.org/10.1017/S0033291719001247)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "TEA",
      "Depresion",
      "Ansiedad"
     ],
     "weight": 3.0
    },
    {
     "id": "C-n3",
     "block": "C",
     "blockCode": "C2",
     "blockTitle": "Demografico-vital, laboral y crianza (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "C-n3",
     "labelRaw": "Etnia indígena americana",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **TEPT:** OR=1.47 (1.28-1.69) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "TEPT",
       "cls": "I",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **TEPT:** OR=1.47 (1.28-1.69) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "TEPT"
     ],
     "weight": 3.0
    },
    {
     "id": "C-n4",
     "block": "C",
     "blockCode": "C2",
     "blockTitle": "Demografico-vital, laboral y crianza (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "C-n4",
     "labelRaw": "Edad avanzada (≥65 / ≥80) — depresión de inicio tardío",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** OR=1.63 (1.24-2.16) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Köhler 2018)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "III",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Depresión:** OR=1.63 (1.24-2.16) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Köhler 2018)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 1.0
    },
    {
     "id": "C-n5",
     "block": "C",
     "blockCode": "C2",
     "blockTitle": "Demografico-vital, laboral y crianza (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "C-n5",
     "labelRaw": "Viudedad",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** RR=5.59 (3.79-8.23) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Köhler 2018)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "I",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Depresión:** RR=5.59 (3.79-8.23) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Köhler 2018)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 3.0
    },
    {
     "id": "C-n6",
     "block": "C",
     "blockCode": "C2",
     "blockTitle": "Demografico-vital, laboral y crianza (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "C-n6",
     "labelRaw": "Estado civil soltero/a",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** OR=1.55 (1.37-1.74) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "II",
       "ref": "Wang 2025",
       "url": "https://doi.org/10.1016/j.bbih.2025.101068",
       "raw": "▲ **Depresión:** OR=1.55 (1.37-1.74) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 2.0
    },
    {
     "id": "C-n7",
     "block": "C",
     "blockCode": "C2",
     "blockTitle": "Demografico-vital, laboral y crianza (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "C-n7",
     "labelRaw": "Vivir solo en la vejez",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** OR=1.55 (1.23-1.95) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Köhler 2018)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "III",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Depresión:** OR=1.55 (1.23-1.95) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Köhler 2018)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 1.0
    },
    {
     "id": "C-n8",
     "block": "C",
     "blockCode": "C2",
     "blockTitle": "Demografico-vital, laboral y crianza (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "C-n8",
     "labelRaw": "Mala relación conyugal",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** OR=3.56 (2.95-4.28) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "II",
       "ref": "Wang 2025",
       "url": "https://doi.org/10.1016/j.bbih.2025.101068",
       "raw": "▲ **Depresión:** OR=3.56 (2.95-4.28) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 2.0
    },
    {
     "id": "C-n9",
     "block": "C",
     "blockCode": "C2",
     "blockTitle": "Demografico-vital, laboral y crianza (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "C-n9",
     "labelRaw": "Estrés laboral (job strain)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** OR=1.77 (1.46-2.13) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Arango 2022 / Köhler 2018 / Wang 2025)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "I",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Depresión:** OR=1.77 (1.46-2.13) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Arango 2022 / Köhler 2018 / Wang 2025)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 3.0
    },
    {
     "id": "C-n10",
     "block": "C",
     "blockCode": "C2",
     "blockTitle": "Demografico-vital, laboral y crianza (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "C-n10",
     "labelRaw": "Trabajo nocturno / por turnos",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** OR=1.43 (1.24-1.64) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "II",
       "ref": "Wang 2025",
       "url": "https://doi.org/10.1016/j.bbih.2025.101068",
       "raw": "▲ **Depresión:** OR=1.43 (1.24-1.64) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 2.0
    },
    {
     "id": "C-n11",
     "block": "C",
     "blockCode": "C2",
     "blockTitle": "Demografico-vital, laboral y crianza (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "C-n11",
     "labelRaw": "Desempleo",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** OR=1.16 (1.09-1.23) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Köhler 2018)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "III",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Depresión:** OR=1.16 (1.09-1.23) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Köhler 2018)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 1.0
    },
    {
     "id": "C-n12",
     "block": "C",
     "blockCode": "C2",
     "blockTitle": "Demografico-vital, laboral y crianza (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "C-n12",
     "labelRaw": "Estilo de crianza paterno: rechazo / interferencia / sobreprotección / castigo",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **TOC (rechazo):** g=1.28 (0.98-1.59) cl.II [Fullana 2019](https://doi.org/10.1017/S0033291719001247)<br>▲ **TOC (interferencia):** g=0.85 (0.55-1.14) cl.II [Fullana 2019](https://doi.org/10.1017/S0033291719001247)<br>▲ **TOC (sobreprotección):** g=0.44 (0.21-0.68) cl.III [Fullana 2019](https://doi.org/10.1017/S0033291719001247)<br>▲ **TOC (castigo):** g=0.71 (0.42-1.00) cl.III [Fullana 2019](https://doi.org/10.1017/S0033291719001247)<br>▼ **TOC (calidez paterna):** g=-0.64 (-0.87 a -0.42) cl.II [Fullana 2019](https://doi.org/10.1017/S0033291719001247)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "TOC (rechazo)",
       "cls": "II",
       "ref": "Fullana 2019",
       "url": "https://doi.org/10.1017/S0033291719001247",
       "raw": "▲ **TOC (rechazo):** g=1.28 (0.98-1.59) cl.II [Fullana 2019](https://doi.org/10.1017/S0033291719001247)"
      },
      {
       "dir": "risk",
       "condition": "TOC (interferencia)",
       "cls": "II",
       "ref": "Fullana 2019",
       "url": "https://doi.org/10.1017/S0033291719001247",
       "raw": "▲ **TOC (interferencia):** g=0.85 (0.55-1.14) cl.II [Fullana 2019](https://doi.org/10.1017/S0033291719001247)"
      },
      {
       "dir": "risk",
       "condition": "TOC (sobreprotección)",
       "cls": "III",
       "ref": "Fullana 2019",
       "url": "https://doi.org/10.1017/S0033291719001247",
       "raw": "▲ **TOC (sobreprotección):** g=0.44 (0.21-0.68) cl.III [Fullana 2019](https://doi.org/10.1017/S0033291719001247)"
      },
      {
       "dir": "risk",
       "condition": "TOC (castigo)",
       "cls": "III",
       "ref": "Fullana 2019",
       "url": "https://doi.org/10.1017/S0033291719001247",
       "raw": "▲ **TOC (castigo):** g=0.71 (0.42-1.00) cl.III [Fullana 2019](https://doi.org/10.1017/S0033291719001247)"
      },
      {
       "dir": "prot",
       "condition": "TOC (calidez paterna)",
       "cls": "II",
       "ref": "Fullana 2019",
       "url": "https://doi.org/10.1017/S0033291719001247",
       "raw": "▼ **TOC (calidez paterna):** g=-0.64 (-0.87 a -0.42) cl.II [Fullana 2019](https://doi.org/10.1017/S0033291719001247)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "TOC"
     ],
     "weight": 2.0
    },
    {
     "id": "C-n13",
     "block": "C",
     "blockCode": "C2",
     "blockTitle": "Demografico-vital, laboral y crianza (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "C-n13",
     "labelRaw": "Antecedente familiar de ansiedad parental",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **TAG:** OR=3.45 (1.97-6.02) cl.III [Fullana 2019](https://doi.org/10.1017/S0033291719001247)<br>▲ **Pánico (con agorafobia, ataques parentales):** OR=3.93 (1.91-8.07) cl.III [Fullana 2019](https://doi.org/10.1017/S0033291719001247)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "TAG",
       "cls": "III",
       "ref": "Fullana 2019",
       "url": "https://doi.org/10.1017/S0033291719001247",
       "raw": "▲ **TAG:** OR=3.45 (1.97-6.02) cl.III [Fullana 2019](https://doi.org/10.1017/S0033291719001247)"
      },
      {
       "dir": "risk",
       "condition": "Pánico (con agorafobia, ataques parentales)",
       "cls": "III",
       "ref": "Fullana 2019",
       "url": "https://doi.org/10.1017/S0033291719001247",
       "raw": "▲ **Pánico (con agorafobia, ataques parentales):** OR=3.93 (1.91-8.07) cl.III [Fullana 2019](https://doi.org/10.1017/S0033291719001247)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Ansiedad"
     ],
     "weight": 1.0
    }
   ]
  },
  {
   "code": "D",
   "block": "D",
   "title": "Sustancias y conductas",
   "part": "Parte I · Exposoma",
   "items": [
    {
     "id": "42",
     "block": "D",
     "blockCode": "D",
     "blockTitle": "Sustancias y conductas",
     "part": "Parte I · Exposoma",
     "n": "42",
     "labelRaw": "Cannabis (intenso/inicio temprano)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ES-SCZ, PERS, PPS, CERI ([Pries 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC7965069/))",
     "predictor": "OR psicosis ~3.9 uso intenso (meta)",
     "instrument": "ES-SCZ OR~1.6/SD",
     "meta": true,
     "evidenceRaw": "▲ **Psicosis:** OR=3.90 (2.84-5.35) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894) · RR=3.84 (2.34-6.29) cl.II [Arango 2022](https://doi.org/10.1038/s41380-022-01586-8)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Psicosis",
       "cls": "II",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Psicosis:** OR=3.90 (2.84-5.35) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894) · RR=3.84 (2.34-6.29) cl.II [Arango 2022](https://doi.org/10.1038/s41380-022-01586-8)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Psicosis"
     ],
     "weight": 2.0
    },
    {
     "id": "43",
     "block": "D",
     "blockCode": "D",
     "blockTitle": "Sustancias y conductas",
     "part": "Parte I · Exposoma",
     "n": "43",
     "labelRaw": "Fumador diario de tabaco",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "PPS, CERI ([Oliver 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC6478670/))",
     "predictor": "factor en PPS",
     "instrument": "PPS validado",
     "meta": true,
     "evidenceRaw": "▲ **Depresión posparto:** OR=2.32 (1.92-2.81) cl.II [Xu 2025](https://doi.org/10.3389/fpubh.2025.1714668)<br>▲ **TDAH:** OR=1.60 (1.45-1.76) cl.II [Kim 2020](https://doi.org/10.1016/S2215-0366%2820%2930312-6) (tb. Carvalho 2021) · RR=1.60 (1.41-1.75) cl.II [Arango 2022](https://doi.org/10.1038/s41380-022-01586-8)<br>▲ **Pánico:** HR=3.46 (2.21-5.41) cl.II [Fullana 2019](https://doi.org/10.1017/S0033291719001247)<br>▲ **T. uso opioides:** OR=3.07 (2.27-4.14) cl.II [Solmi 2021 (SUD)](https://doi.org/10.1016/j.neubiorev.2021.03.014) (tb. Carvalho 2021) · RR=2.61 (1.79-3.79) cl.II [Arango 2022](https://doi.org/10.1038/s41380-022-01586-8)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión posparto",
       "cls": "II",
       "ref": "Xu 2025",
       "url": "https://doi.org/10.3389/fpubh.2025.1714668",
       "raw": "▲ **Depresión posparto:** OR=2.32 (1.92-2.81) cl.II [Xu 2025](https://doi.org/10.3389/fpubh.2025.1714668)"
      },
      {
       "dir": "risk",
       "condition": "TDAH",
       "cls": "II",
       "ref": "Kim 2020",
       "url": "https://doi.org/10.1016/S2215-0366%2820%2930312-6",
       "raw": "▲ **TDAH:** OR=1.60 (1.45-1.76) cl.II [Kim 2020](https://doi.org/10.1016/S2215-0366%2820%2930312-6) (tb. Carvalho 2021) · RR=1.60 (1.41-1.75) cl.II [Arango 2022](https://doi.org/10.1038/s41380-022-01586-8)"
      },
      {
       "dir": "risk",
       "condition": "Pánico",
       "cls": "II",
       "ref": "Fullana 2019",
       "url": "https://doi.org/10.1017/S0033291719001247",
       "raw": "▲ **Pánico:** HR=3.46 (2.21-5.41) cl.II [Fullana 2019](https://doi.org/10.1017/S0033291719001247)"
      },
      {
       "dir": "risk",
       "condition": "T. uso opioides",
       "cls": "II",
       "ref": "Solmi 2021 (SUD)",
       "url": "https://doi.org/10.1016/j.neubiorev.2021.03.014",
       "raw": "▲ **T. uso opioides:** OR=3.07 (2.27-4.14) cl.II [Solmi 2021 (SUD)](https://doi.org/10.1016/j.neubiorev.2021.03.014) (tb. Carvalho 2021) · RR=2.61 (1.79-3.79) cl.II [Arango 2022](https://doi.org/10.1038/s41380-022-01586-8)"
      }
     ],
     "evLevel": "Coh",
     "direction": "risk",
     "outcomes": [
      "Depresion",
      "TDAH",
      "Ansiedad",
      "Sustancias"
     ],
     "weight": 2.0
    },
    {
     "id": "44",
     "block": "D",
     "blockCode": "D",
     "blockTitle": "Sustancias y conductas",
     "part": "Parte I · Exposoma",
     "n": "44",
     "labelRaw": "Alcohol frecuente (≥5 días/sem)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "CERI ([Barr 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC9938102/))",
     "predictor": "de 10 ítems",
     "instrument": "CERI AUC 0.74–0.86",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Val-ext",
     "direction": "risk",
     "outcomes": [
      "Sustancias"
     ],
     "weight": 1.0
    },
    {
     "id": "45",
     "block": "D",
     "blockCode": "D",
     "blockTitle": "Sustancias y conductas",
     "part": "Parte I · Exposoma",
     "n": "45",
     "labelRaw": "Inicio temprano de sustancias (<15)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "CERI ([Barr 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC9938102/))",
     "predictor": "predictor fuerte CERI",
     "instrument": "CERI AUC 0.74–0.86",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Val-ext",
     "direction": "risk",
     "outcomes": [
      "Sustancias"
     ],
     "weight": 1.0
    },
    {
     "id": "46",
     "block": "D",
     "blockCode": "D",
     "blockTitle": "Sustancias y conductas",
     "part": "Parte I · Exposoma",
     "n": "46",
     "labelRaw": "Otras sustancias/abuso",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "CERI ([Barr 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC9938102/))",
     "predictor": "de 10 ítems",
     "instrument": "CERI AUC 0.74–0.86",
     "meta": true,
     "evidenceRaw": "▲ **TOC:** RR=5.92 (4.97-7.05) cl.II [Fullana 2019](https://doi.org/10.1017/S0033291719001247)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "TOC",
       "cls": "II",
       "ref": "Fullana 2019",
       "url": "https://doi.org/10.1017/S0033291719001247",
       "raw": "▲ **TOC:** RR=5.92 (4.97-7.05) cl.II [Fullana 2019](https://doi.org/10.1017/S0033291719001247)"
      }
     ],
     "evLevel": "Val-ext",
     "direction": "risk",
     "outcomes": [
      "TOC"
     ],
     "weight": 2.0
    },
    {
     "id": "47",
     "block": "D",
     "blockCode": "D",
     "blockTitle": "Sustancias y conductas",
     "part": "Parte I · Exposoma",
     "n": "47",
     "labelRaw": "Consumo de sustancias en pares",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "CERI ([Barr 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC9938102/))",
     "predictor": "predictor social CERI",
     "instrument": "CERI AUC 0.74–0.86",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Val-ext",
     "direction": "risk",
     "outcomes": [
      "Sustancias"
     ],
     "weight": 1.0
    },
    {
     "id": "48",
     "block": "D",
     "blockCode": "D",
     "blockTitle": "Sustancias y conductas",
     "part": "Parte I · Exposoma",
     "n": "48",
     "labelRaw": "Acceso fácil a sustancias",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "CERI ([Barr 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC9938102/))",
     "predictor": "de 10 ítems",
     "instrument": "CERI AUC 0.74–0.86",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Val-ext",
     "direction": "risk",
     "outcomes": [
      "Sustancias"
     ],
     "weight": 1.0
    }
   ]
  },
  {
   "code": "E",
   "block": "E",
   "title": "Psicopatologia temprana, salud fisica y rasgos",
   "part": "Parte I · Exposoma",
   "items": [
    {
     "id": "49",
     "block": "E",
     "blockCode": "E",
     "blockTitle": "Psicopatologia temprana, salud fisica y rasgos",
     "part": "Parte I · Exposoma",
     "n": "49",
     "labelRaw": "Externalizantes infantiles (TC/TOD)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ALSPAC ML / CERI ([Yoo 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11458604/))",
     "predictor": "feature ML",
     "instrument": "modelo ML depresión",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Der",
     "direction": "risk",
     "outcomes": [
      "Depresion",
      "Sustancias"
     ],
     "weight": 0.5
    },
    {
     "id": "50",
     "block": "E",
     "blockCode": "E",
     "blockTitle": "Psicopatologia temprana, salud fisica y rasgos",
     "part": "Parte I · Exposoma",
     "n": "50",
     "labelRaw": "Internalizantes infantiles (depr/ansiedad)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ALSPAC ML ([Yoo 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11458604/))",
     "predictor": "feature ML",
     "instrument": "modelo ML depresión",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Der",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 0.5
    },
    {
     "id": "51",
     "block": "E",
     "blockCode": "E",
     "blockTitle": "Psicopatologia temprana, salud fisica y rasgos",
     "part": "Parte I · Exposoma",
     "n": "51",
     "labelRaw": "Baja autoestima/locus externo",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ALSPAC ML ([Yoo 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11458604/))",
     "predictor": "feature ML",
     "instrument": "modelo ML depresión",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Der",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 0.5
    },
    {
     "id": "52",
     "block": "E",
     "blockCode": "E",
     "blockTitle": "Psicopatologia temprana, salud fisica y rasgos",
     "part": "Parte I · Exposoma",
     "n": "52",
     "labelRaw": "Dificultades con pares/baja prosocialidad",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ALSPAC ML ([Yoo 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11458604/))",
     "predictor": "feature ML",
     "instrument": "modelo ML depresión",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Der",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 0.5
    },
    {
     "id": "53",
     "block": "E",
     "blockCode": "E",
     "blockTitle": "Psicopatologia temprana, salud fisica y rasgos",
     "part": "Parte I · Exposoma",
     "n": "53",
     "labelRaw": "Bajo rendimiento escolar/cognición",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ALSPAC ML ([Yoo 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11458604/))",
     "predictor": "feature ML",
     "instrument": "modelo ML depresión",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Der",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 0.5
    },
    {
     "id": "54",
     "block": "E",
     "blockCode": "E",
     "blockTitle": "Psicopatologia temprana, salud fisica y rasgos",
     "part": "Parte I · Exposoma",
     "n": "54",
     "labelRaw": "Deterioro auditivo (12 meses)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ES-SCZ, PPS ([Pries 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC7965069/))",
     "predictor": "factor ES-SCZ",
     "instrument": "ES-SCZ OR~1.6/SD",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Psicosis",
      "Sustancias"
     ],
     "weight": 1.0
    },
    {
     "id": "55",
     "block": "E",
     "blockCode": "E",
     "blockTitle": "Psicopatologia temprana, salud fisica y rasgos",
     "part": "Parte I · Exposoma",
     "n": "55",
     "labelRaw": "Traumatismo craneoencefálico",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ABCD Exposome subf. hogar ([Moore 2022](https://academic.oup.com/exposome/article/2/1/osac010/6900933))",
     "predictor": "carga subfactor hogar",
     "instrument": ">38% var. psicopat.",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Der",
     "direction": "risk",
     "outcomes": [
      "Transdiagnostico"
     ],
     "weight": 0.5
    },
    {
     "id": "56",
     "block": "E",
     "blockCode": "E",
     "blockTitle": "Psicopatologia temprana, salud fisica y rasgos",
     "part": "Parte I · Exposoma",
     "n": "56",
     "labelRaw": "Anhedonia de rasgo",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "PPS ([Oliver 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC6478670/))",
     "predictor": "factor en PPS",
     "instrument": "PPS validado",
     "meta": true,
     "evidenceRaw": "▲ **Psicosis:** g=0.82 (0.72-0.92) cl.II [Radua 2018](https://doi.org/10.1002/wps.20490) (tb. Carvalho 2021)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Psicosis",
       "cls": "II",
       "ref": "Radua 2018",
       "url": "https://doi.org/10.1002/wps.20490",
       "raw": "▲ **Psicosis:** g=0.82 (0.72-0.92) cl.II [Radua 2018](https://doi.org/10.1002/wps.20490) (tb. Carvalho 2021)"
      }
     ],
     "evLevel": "Coh",
     "direction": "risk",
     "outcomes": [
      "Psicosis"
     ],
     "weight": 2.0
    },
    {
     "id": "57",
     "block": "E",
     "blockCode": "E",
     "blockTitle": "Psicopatologia temprana, salud fisica y rasgos",
     "part": "Parte I · Exposoma",
     "n": "57",
     "labelRaw": "Marcadores inflam/metabólicos (CRP, IL-6, vit D, leptina)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ALSPAC ML biomarcadores ([Yoo 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11458604/))",
     "predictor": "feature ML",
     "instrument": "modelo ML depresión",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Der",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 0.5
    }
   ]
  },
  {
   "code": "E3",
   "block": "E",
   "title": "Comorbilidad medica/somatica (umbrella)",
   "part": "Parte I · Exposoma",
   "items": [
    {
     "id": "E3-1",
     "block": "E",
     "blockCode": "E3",
     "blockTitle": "Comorbilidad medica/somatica (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "E3-1",
     "labelRaw": "Diabetes mellitus tipo 2",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Demencia:** RR=2.28 (1.94-2.66) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Arango 2022)<br>▲ **Depresión:** OR=1.24 (1.09-1.40) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Köhler 2018)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Demencia",
       "cls": "I",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Demencia:** RR=2.28 (1.94-2.66) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Arango 2022)"
      },
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "III",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Depresión:** OR=1.24 (1.09-1.40) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Köhler 2018)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Demencia",
      "Depresion"
     ],
     "weight": 3.0
    },
    {
     "id": "E3-2",
     "block": "E",
     "blockCode": "E3",
     "blockTitle": "Comorbilidad medica/somatica (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "E3-2",
     "labelRaw": "Uso de benzodiacepinas",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Demencia:** RR=1.49 (1.30-1.72) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Arango 2022)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Demencia",
       "cls": "I",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Demencia:** RR=1.49 (1.30-1.72) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Arango 2022)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Demencia"
     ],
     "weight": 3.0
    },
    {
     "id": "E3-3",
     "block": "E",
     "blockCode": "E3",
     "blockTitle": "Comorbilidad medica/somatica (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "E3-3",
     "labelRaw": "Obesidad / sobrepeso",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** OR=1.35 (1.21-1.50) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Arango 2022 / Köhler 2018)<br>▲ **Bipolar:** OR=1.77 (1.40-2.23) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Bortolato 2017)<br>▲ **Demencia:** RR=1.91 (1.40-2.62) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "I",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Depresión:** OR=1.35 (1.21-1.50) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Arango 2022 / Köhler 2018)"
      },
      {
       "dir": "risk",
       "condition": "Bipolar",
       "cls": "III",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Bipolar:** OR=1.77 (1.40-2.23) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Bortolato 2017)"
      },
      {
       "dir": "risk",
       "condition": "Demencia",
       "cls": "III",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Demencia:** RR=1.91 (1.40-2.62) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion",
      "Bipolar",
      "Demencia"
     ],
     "weight": 3.0
    },
    {
     "id": "E3-4",
     "block": "E",
     "blockCode": "E3",
     "blockTitle": "Comorbilidad medica/somatica (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "E3-4",
     "labelRaw": "Factores de riesgo metabólicos (síndrome metabólico)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** OR=2.06 (1.59-2.68) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Arango 2022 / Köhler 2018)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "I",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Depresión:** OR=2.06 (1.59-2.68) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Arango 2022 / Köhler 2018)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 3.0
    },
    {
     "id": "E3-5",
     "block": "E",
     "blockCode": "E3",
     "blockTitle": "Comorbilidad medica/somatica (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "E3-5",
     "labelRaw": "Factores de riesgo cardiovascular",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** OR=1.49 (1.27-1.75) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "II",
       "ref": "Wang 2025",
       "url": "https://doi.org/10.1016/j.bbih.2025.101068",
       "raw": "▲ **Depresión:** OR=1.49 (1.27-1.75) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 2.0
    },
    {
     "id": "E3-6",
     "block": "E",
     "blockCode": "E3",
     "blockTitle": "Comorbilidad medica/somatica (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "E3-6",
     "labelRaw": "Síndrome de intestino irritable (SII)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Bipolar:** OR=2.48 (2.35-2.61) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Bortolato 2017)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Bipolar",
       "cls": "I",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Bipolar:** OR=2.48 (2.35-2.61) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Bortolato 2017)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Bipolar"
     ],
     "weight": 3.0
    },
    {
     "id": "E3-7",
     "block": "E",
     "blockCode": "E3",
     "blockTitle": "Comorbilidad medica/somatica (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "E3-7",
     "labelRaw": "Ojo seco con síndrome de Sjögren",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** OR=4.25 (2.67-6.76) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Köhler 2018)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "II",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Depresión:** OR=4.25 (2.67-6.76) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Köhler 2018)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 2.0
    },
    {
     "id": "E3-8",
     "block": "E",
     "blockCode": "E3",
     "blockTitle": "Comorbilidad medica/somatica (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "E3-8",
     "labelRaw": "Psoriasis",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** OR=1.64 (1.41-1.90) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Köhler 2018)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "II",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Depresión:** OR=1.64 (1.41-1.90) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Köhler 2018)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 2.0
    },
    {
     "id": "E3-9",
     "block": "E",
     "blockCode": "E3",
     "blockTitle": "Comorbilidad medica/somatica (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "E3-9",
     "labelRaw": "Eczema / dermatitis atópica",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** OR=1.64 (1.39-1.94) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)<br>▲ **TDAH:** OR=1.31 (1.20-1.44) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Kim 2020)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "II",
       "ref": "Wang 2025",
       "url": "https://doi.org/10.1016/j.bbih.2025.101068",
       "raw": "▲ **Depresión:** OR=1.64 (1.39-1.94) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)"
      },
      {
       "dir": "risk",
       "condition": "TDAH",
       "cls": "I",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **TDAH:** OR=1.31 (1.20-1.44) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Kim 2020)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion",
      "TDAH"
     ],
     "weight": 3.0
    },
    {
     "id": "E3-10",
     "block": "E",
     "blockCode": "E3",
     "blockTitle": "Comorbilidad medica/somatica (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "E3-10",
     "labelRaw": "Asma",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** OR=2.08 (1.56-2.77) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894)<br>▲ **TDAH:** OR=1.51 (1.40-1.63) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Kim 2020)<br>▲ **Bipolar:** OR=2.12 (1.57-2.87) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Bortolato 2017)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "II",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Depresión:** OR=2.08 (1.56-2.77) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894)"
      },
      {
       "dir": "risk",
       "condition": "TDAH",
       "cls": "II",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **TDAH:** OR=1.51 (1.40-1.63) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Kim 2020)"
      },
      {
       "dir": "risk",
       "condition": "Bipolar",
       "cls": "III",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Bipolar:** OR=2.12 (1.57-2.87) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Bortolato 2017)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion",
      "TDAH",
      "Bipolar"
     ],
     "weight": 2.0
    },
    {
     "id": "E3-11",
     "block": "E",
     "blockCode": "E3",
     "blockTitle": "Comorbilidad medica/somatica (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "E3-11",
     "labelRaw": "Epilepsia",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** OR=2.05 (1.77-2.37) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "II",
       "ref": "Wang 2025",
       "url": "https://doi.org/10.1016/j.bbih.2025.101068",
       "raw": "▲ **Depresión:** OR=2.05 (1.77-2.37) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 2.0
    },
    {
     "id": "E3-12",
     "block": "E",
     "blockCode": "E3",
     "blockTitle": "Comorbilidad medica/somatica (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "E3-12",
     "labelRaw": "Infección por COVID-19",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** OR=1.83 (1.70-1.97) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "II",
       "ref": "Wang 2025",
       "url": "https://doi.org/10.1016/j.bbih.2025.101068",
       "raw": "▲ **Depresión:** OR=1.83 (1.70-1.97) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 2.0
    },
    {
     "id": "E3-13",
     "block": "E",
     "blockCode": "E3",
     "blockTitle": "Comorbilidad medica/somatica (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "E3-13",
     "labelRaw": "Incontinencia urinaria",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** OR=1.73 (1.64-1.82) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "II",
       "ref": "Wang 2025",
       "url": "https://doi.org/10.1016/j.bbih.2025.101068",
       "raw": "▲ **Depresión:** OR=1.73 (1.64-1.82) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 2.0
    },
    {
     "id": "E3-14",
     "block": "E",
     "blockCode": "E3",
     "blockTitle": "Comorbilidad medica/somatica (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "E3-14",
     "labelRaw": "Artritis",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** HR=1.42 (1.34-1.52) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "II",
       "ref": "Wang 2025",
       "url": "https://doi.org/10.1016/j.bbih.2025.101068",
       "raw": "▲ **Depresión:** HR=1.42 (1.34-1.52) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 2.0
    },
    {
     "id": "E3-15",
     "block": "E",
     "blockCode": "E3",
     "blockTitle": "Comorbilidad medica/somatica (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "E3-15",
     "labelRaw": "Discapacidad visual",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** OR=1.94 (1.67-2.25) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Köhler 2018)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "II",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Depresión:** OR=1.94 (1.67-2.25) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Köhler 2018)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 2.0
    },
    {
     "id": "E3-16",
     "block": "E",
     "blockCode": "E3",
     "blockTitle": "Comorbilidad medica/somatica (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "E3-16",
     "labelRaw": "Disfunción sexual",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** OR=2.71 (1.93-3.79) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Köhler 2018)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "I",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Depresión:** OR=2.71 (1.93-3.79) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Köhler 2018)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 3.0
    },
    {
     "id": "E3-17",
     "block": "E",
     "blockCode": "E3",
     "blockTitle": "Comorbilidad medica/somatica (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "E3-17",
     "labelRaw": "Mala salud física / enfermedad crónica (vejez)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** OR=4.08 (3.25-5.12) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Köhler 2018)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "II",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Depresión:** OR=4.08 (3.25-5.12) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Köhler 2018)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 2.0
    },
    {
     "id": "E3-18",
     "block": "E",
     "blockCode": "E3",
     "blockTitle": "Comorbilidad medica/somatica (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "E3-18",
     "labelRaw": "Historia de cáncer (protector frente a demencia)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▼ **Demencia:** HR=0.62 (0.53-0.74) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894)",
     "evidence": [
      {
       "dir": "prot",
       "condition": "Demencia",
       "cls": "II",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▼ **Demencia:** HR=0.62 (0.53-0.74) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894)"
      }
     ],
     "evLevel": "MA",
     "direction": "prot",
     "outcomes": [
      "Demencia"
     ],
     "weight": 2.0
    }
   ]
  },
  {
   "code": "E4",
   "block": "E",
   "title": "Marcadores premorbidos y rasgos (umbrella)",
   "part": "Parte I · Exposoma",
   "items": [
    {
     "id": "E4-1",
     "block": "E",
     "blockCode": "E4",
     "blockTitle": "Marcadores premorbidos y rasgos (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "E4-1",
     "labelRaw": "Anomalías físicas menores (escala de Waldrop, 6 regiones: hipertelorismo, pliegue epicántico, orejas de implantación baja/malformadas, paladar ojival, lengua surcada, surco palmar transverso, 5.º dedo curvo, sindactilia, espacio amplio 1.er-2.º dedo del pie; marcador dismorfogenético del neurodesarrollo)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Psicosis:** g=0.92 (0.61-1.23) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Radua 2018)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Psicosis",
       "cls": "II",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Psicosis:** g=0.92 (0.61-1.23) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Radua 2018)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Psicosis"
     ],
     "weight": 2.0
    },
    {
     "id": "E4-2",
     "block": "E",
     "blockCode": "E4",
     "blockTitle": "Marcadores premorbidos y rasgos (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "E4-2",
     "labelRaw": "CI/capacidad cognitiva premórbida alta (**protector; medir antes del inicio/prodromo**)",
     "answerOptions": [
      "Alto",
      "Promedio",
      "Bajo",
      "NS"
     ],
     "extraFields": [
      {
       "key": "proxy",
       "label": "Proxy/estimador",
       "unit": ""
      }
     ],
     "sourceRaw": "Meta IQ premórbido / estimadores clínicos ([Khandaker 2011](https://doi.org/10.1016/j.schres.2011.06.017); [Harrison-Read 2008](https://doi.org/10.1192/apt.bp.107.004127))",
     "predictor": "IQ/percentil/lectura-vocabulario",
     "instrument": "continuo; no binarizar",
     "meta": true,
     "evidenceRaw": "▼ **Psicosis:** futuros casos tienen menor CI premórbido que controles, g=-0.42 (-0.52 a -0.33) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Radua 2018); cada punto menor de IQ ≈3.7%↑ riesgo; IQ 115-130 OR=0.55 (0.38-0.81) vs 100-115 [Khandaker 2011](https://doi.org/10.1016/j.schres.2011.06.017)",
     "evidence": [
      {
       "dir": "prot",
       "condition": "Psicosis",
       "cls": "II",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▼ **Psicosis:** futuros casos tienen menor CI premórbido que controles, g=-0.42 (-0.52 a -0.33) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Radua 2018); cada punto menor de IQ ≈3.7%↑ riesgo; IQ 115-130 OR=0.55 (0.38-0.81) vs 100-115 [Khandaker 2011](https://doi.org/10.1016/j.schres.2011.06.017)"
      }
     ],
     "evLevel": "MA",
     "direction": "prot",
     "outcomes": [
      "Psicosis"
     ],
     "weight": 2.0
    },
    {
     "id": "E4-3",
     "block": "E",
     "blockCode": "E4",
     "blockTitle": "Marcadores premorbidos y rasgos (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "E4-3",
     "labelRaw": "Capacidad de identificación olfatoria (protector)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▼ **Psicosis:** g=-0.91 (-1.05 a -0.78) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Radua 2018)",
     "evidence": [
      {
       "dir": "prot",
       "condition": "Psicosis",
       "cls": "II",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▼ **Psicosis:** g=-0.91 (-1.05 a -0.78) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Radua 2018)"
      }
     ],
     "evLevel": "MA",
     "direction": "prot",
     "outcomes": [
      "Psicosis"
     ],
     "weight": 2.0
    },
    {
     "id": "E4-4",
     "block": "E",
     "blockCode": "E4",
     "blockTitle": "Marcadores premorbidos y rasgos (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "E4-4",
     "labelRaw": "IgG de Toxoplasma gondii",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Psicosis:** OR=1.82 (1.51-2.18) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Psicosis",
       "cls": "III",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Psicosis:** OR=1.82 (1.51-2.18) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Psicosis"
     ],
     "weight": 1.0
    },
    {
     "id": "E4-5",
     "block": "E",
     "blockCode": "E4",
     "blockTitle": "Marcadores premorbidos y rasgos (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "E4-5",
     "labelRaw": "No diestro (zurdo o ambidiestro)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Psicosis:** OR=1.58 (1.35-1.86) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Psicosis",
       "cls": "III",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Psicosis:** OR=1.58 (1.35-1.86) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Psicosis"
     ],
     "weight": 1.0
    },
    {
     "id": "E4-6",
     "block": "E",
     "blockCode": "E4",
     "blockTitle": "Marcadores premorbidos y rasgos (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "E4-6",
     "labelRaw": "Estado de alto riesgo clínico de psicosis (CHR-P)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Psicosis:** OR=9.32 (4.91-17.72) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Arango 2022 / Radua 2018)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Psicosis",
       "cls": "I",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Psicosis:** OR=9.32 (4.91-17.72) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Arango 2022 / Radua 2018)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Psicosis"
     ],
     "weight": 3.0
    },
    {
     "id": "E4-7",
     "block": "E",
     "blockCode": "E4",
     "blockTitle": "Marcadores premorbidos y rasgos (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "E4-7",
     "labelRaw": "Neuroticismo (rasgo) — **ítems BFI-10** (Rammstedt & John 2007): **(1)** «Me pongo nervioso/a con facilidad» (directo) · **(2)** «Soy relajado/a, manejo bien el estrés» (inverso, R) — puntuar 1-5; N = ítem 1 + (6 − ítem 2)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "BFI-10 ([Rammstedt & John 2007](https://doi.org/10.1016/j.jrp.2006.02.001))",
     "predictor": "r-test ≈0.49 (6 sem)",
     "instrument": "2 ítems/factor",
     "meta": true,
     "evidenceRaw": "▲ **TOC:** g=1.23 (0.96-1.50) cl.II [Fullana 2019](https://doi.org/10.1017/S0033291719001247)<br>▲ **Fobia social:** g=0.89 (0.67-1.12) cl.II [Fullana 2019](https://doi.org/10.1017/S0033291719001247)<br>▲ **Fobia específica:** g=0.81 (0.57-1.05) cl.II [Fullana 2019](https://doi.org/10.1017/S0033291719001247)<br>▲ **Depresión:** OR=1.37 (1.22-1.53) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "TOC",
       "cls": "II",
       "ref": "Fullana 2019",
       "url": "https://doi.org/10.1017/S0033291719001247",
       "raw": "▲ **TOC:** g=1.23 (0.96-1.50) cl.II [Fullana 2019](https://doi.org/10.1017/S0033291719001247)"
      },
      {
       "dir": "risk",
       "condition": "Fobia social",
       "cls": "II",
       "ref": "Fullana 2019",
       "url": "https://doi.org/10.1017/S0033291719001247",
       "raw": "▲ **Fobia social:** g=0.89 (0.67-1.12) cl.II [Fullana 2019](https://doi.org/10.1017/S0033291719001247)"
      },
      {
       "dir": "risk",
       "condition": "Fobia específica",
       "cls": "II",
       "ref": "Fullana 2019",
       "url": "https://doi.org/10.1017/S0033291719001247",
       "raw": "▲ **Fobia específica:** g=0.81 (0.57-1.05) cl.II [Fullana 2019](https://doi.org/10.1017/S0033291719001247)"
      },
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "II",
       "ref": "Wang 2025",
       "url": "https://doi.org/10.1016/j.bbih.2025.101068",
       "raw": "▲ **Depresión:** OR=1.37 (1.22-1.53) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "TOC",
      "Ansiedad",
      "Depresion"
     ],
     "weight": 2.0
    },
    {
     "id": "E4-8",
     "block": "E",
     "blockCode": "E4",
     "blockTitle": "Marcadores premorbidos y rasgos (umbrella)",
     "part": "Parte I · Exposoma",
     "n": "E4-8",
     "labelRaw": "Té / té verde (protector)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Umbrella review (no en instrumento ficha)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▼ **Depresión:** RR=0.68 (0.61-0.77) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Köhler 2018)",
     "evidence": [
      {
       "dir": "prot",
       "condition": "Depresión",
       "cls": "I",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▼ **Depresión:** RR=0.68 (0.61-0.77) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Köhler 2018)"
      }
     ],
     "evLevel": "MA",
     "direction": "prot",
     "outcomes": [
      "Depresion"
     ],
     "weight": 3.0
    }
   ]
  },
  {
   "code": "E2",
   "block": "E2",
   "title": "Antecedentes psicopatologicos lifetime",
   "part": "Parte I · Lifetime",
   "items": [
    {
     "id": "E2-1",
     "block": "E2",
     "blockCode": "E2",
     "blockTitle": "Antecedentes psicopatologicos lifetime",
     "part": "Parte I · Lifetime",
     "n": "E2-1",
     "labelRaw": "¿Alguna vez síntomas psicóticos atenuados (ideas raras, percepciones inusuales, suspicacia)?",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [
      {
       "key": "ini",
       "label": "Edad de inicio",
       "unit": ""
      }
     ],
     "sourceRaw": "PQ-B / SIPS ([NASP](https://www.nasponline.org/Documents/PQ-B.pdf))",
     "predictor": "tamizaje 5 dominios",
     "instrument": "AUC 0.78",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Coh",
     "direction": "risk",
     "outcomes": [
      "Psicosis"
     ],
     "weight": 1.0
    },
    {
     "id": "E2-2",
     "block": "E2",
     "blockCode": "E2",
     "blockTitle": "Antecedentes psicopatologicos lifetime",
     "part": "Parte I · Lifetime",
     "n": "E2-2",
     "labelRaw": "¿Alguna vez episodio de ánimo elevado/hipomanía (energía↑, sueño↓, gasto/riesgo)?",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [
      {
       "key": "ini",
       "label": "Edad de inicio",
       "unit": ""
      }
     ],
     "sourceRaw": "HCL-32 / MDQ ([Angst 2005](https://pmc.ncbi.nlm.nih.gov/articles/PMC3112081/))",
     "predictor": "hipomanía lifetime",
     "instrument": "AUC 0.73",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Coh",
     "direction": "risk",
     "outcomes": [
      "Bipolar"
     ],
     "weight": 1.0
    },
    {
     "id": "E2-3",
     "block": "E2",
     "blockCode": "E2",
     "blockTitle": "Antecedentes psicopatologicos lifetime",
     "part": "Parte I · Lifetime",
     "n": "E2-3",
     "labelRaw": "¿Alguna vez episodio depresivo mayor (anhedonia, ánimo bajo ≥2 sem)?",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [
      {
       "key": "ini",
       "label": "Edad de inicio",
       "unit": ""
      },
      {
       "key": "ep",
       "label": "Nº episodios",
       "unit": ""
      }
     ],
     "sourceRaw": "PHQ-9 lifetime ([Kroenke 2001](https://pmc.ncbi.nlm.nih.gov/articles/PMC1495268/))",
     "predictor": "episodio previo = top predictor recurrencia",
     "instrument": "AUC 0.90",
     "meta": true,
     "evidenceRaw": "▲ **Pánico:** OR=2.03 (1.66-2.49) cl.II [Fullana 2019](https://doi.org/10.1017/S0033291719001247)<br>▲ **Fobia social:** IRR=9.35 (4.71-18.54) cl.II [Fullana 2019](https://doi.org/10.1017/S0033291719001247)<br>▲ **Demencia:** RR=1.99 (1.84-2.16) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894) · RR=1.86 (1.61-2.14) cl.I [Arango 2022](https://doi.org/10.1038/s41380-022-01586-8) · RR=1.85 (1.67-2.05) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894) · RR=1.83 (1.65-2.03) cl.I [Arango 2022](https://doi.org/10.1038/s41380-022-01586-8)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Pánico",
       "cls": "II",
       "ref": "Fullana 2019",
       "url": "https://doi.org/10.1017/S0033291719001247",
       "raw": "▲ **Pánico:** OR=2.03 (1.66-2.49) cl.II [Fullana 2019](https://doi.org/10.1017/S0033291719001247)"
      },
      {
       "dir": "risk",
       "condition": "Fobia social",
       "cls": "II",
       "ref": "Fullana 2019",
       "url": "https://doi.org/10.1017/S0033291719001247",
       "raw": "▲ **Fobia social:** IRR=9.35 (4.71-18.54) cl.II [Fullana 2019](https://doi.org/10.1017/S0033291719001247)"
      },
      {
       "dir": "risk",
       "condition": "Demencia",
       "cls": "I",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Demencia:** RR=1.99 (1.84-2.16) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894) · RR=1.86 (1.61-2.14) cl.I [Arango 2022](https://doi.org/10.1038/s41380-022-01586-8) · RR=1.85 (1.67-2.05) cl.I [Carvalho 2021](https://doi.org/10.1002/wps.20894) · RR=1.83 (1.65-2.03) cl.I [Arango 2022](https://doi.org/10.1038/s41380-022-01586-8)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion",
      "Ansiedad",
      "Demencia"
     ],
     "weight": 3.0
    },
    {
     "id": "E2-4",
     "block": "E2",
     "blockCode": "E2",
     "blockTitle": "Antecedentes psicopatologicos lifetime",
     "part": "Parte I · Lifetime",
     "n": "E2-4",
     "labelRaw": "¿Rasgos del espectro autista presentes desde la infancia (social, rutinas, intereses)?",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "AQ-10 / SCQ ([Allison 2012](https://pubmed.ncbi.nlm.nih.gov/22265630/))",
     "predictor": "rasgos del neurodesarrollo (estables)",
     "instrument": "tamizaje; ≥6",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Coh",
     "direction": "risk",
     "outcomes": [
      "TEA"
     ],
     "weight": 1.0
    },
    {
     "id": "E2-5",
     "block": "E2",
     "blockCode": "E2",
     "blockTitle": "Antecedentes psicopatologicos lifetime",
     "part": "Parte I · Lifetime",
     "n": "E2-5",
     "labelRaw": "¿Síntomas de ADHD presentes en la infancia (inatención/hiperactividad antes de los 12)?",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ASRS B / ADHD-RS-5 ([Kessler 2005](https://pubmed.ncbi.nlm.nih.gov/15841682/))",
     "predictor": "inicio infantil = criterio DSM-5",
     "instrument": "AUC 0.903",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Coh",
     "direction": "risk",
     "outcomes": [
      "TDAH"
     ],
     "weight": 1.0
    },
    {
     "id": "E2-6",
     "block": "E2",
     "blockCode": "E2",
     "blockTitle": "Antecedentes psicopatologicos lifetime",
     "part": "Parte I · Lifetime",
     "n": "E2-6",
     "labelRaw": "¿Alguna vez ansiedad generalizada/preocupación incontrolable persistente?",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [
      {
       "key": "ini",
       "label": "Edad de inicio",
       "unit": ""
      }
     ],
     "sourceRaw": "GAD-7 lifetime ([Spitzer 2006](https://archinte.jamanetwork.com/article.aspx?doi=10.1001/archinte.166.10.1092))",
     "predictor": "7 ítems",
     "instrument": "sens 89% esp 82%",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Ansiedad"
     ],
     "weight": 1.0
    },
    {
     "id": "E2-7",
     "block": "E2",
     "blockCode": "E2",
     "blockTitle": "Antecedentes psicopatologicos lifetime",
     "part": "Parte I · Lifetime",
     "n": "E2-7",
     "labelRaw": "¿Alguna vez fobia social marcada (miedo/evitación de situaciones sociales)?",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [
      {
       "key": "ini",
       "label": "Edad de inicio",
       "unit": ""
      }
     ],
     "sourceRaw": "SPIN lifetime ([Connor 2000](https://pubmed.ncbi.nlm.nih.gov/))",
     "predictor": "3 dominios",
     "instrument": "tamizaje; ≥19",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Coh",
     "direction": "risk",
     "outcomes": [
      "Ansiedad"
     ],
     "weight": 1.0
    },
    {
     "id": "E2-8",
     "block": "E2",
     "blockCode": "E2",
     "blockTitle": "Antecedentes psicopatologicos lifetime",
     "part": "Parte I · Lifetime",
     "n": "E2-8",
     "labelRaw": "¿Alguna vez obsesiones/compulsiones (lavado, verificación, orden, pensamientos intrusivos)?",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [
      {
       "key": "ini",
       "label": "Edad de inicio",
       "unit": ""
      }
     ],
     "sourceRaw": "OCI-R / DOCS ([Foa 2002](https://pubmed.ncbi.nlm.nih.gov/))",
     "predictor": "6 subescalas",
     "instrument": "tamizaje; ≥21",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Coh",
     "direction": "risk",
     "outcomes": [
      "TOC"
     ],
     "weight": 1.0
    },
    {
     "id": "E2-9",
     "block": "E2",
     "blockCode": "E2",
     "blockTitle": "Antecedentes psicopatologicos lifetime",
     "part": "Parte I · Lifetime",
     "n": "E2-9",
     "labelRaw": "¿Alguna vez conducta alimentaria patológica (atracón, purga, restricción, distorsión imagen)?",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [
      {
       "key": "ini",
       "label": "Edad de inicio",
       "unit": ""
      }
     ],
     "sourceRaw": "SCOFF / EDE-Q ([Morgan 1999](https://doi.org/10.1136/bmj.319.7223.1467))",
     "predictor": "5 ítems Sí/No",
     "instrument": "sens ~98% esp ~90%",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Coh",
     "direction": "risk",
     "outcomes": [
      "TCA"
     ],
     "weight": 1.0
    },
    {
     "id": "E2-10",
     "block": "E2",
     "blockCode": "E2",
     "blockTitle": "Antecedentes psicopatologicos lifetime",
     "part": "Parte I · Lifetime",
     "n": "E2-10",
     "labelRaw": "¿Alguna vez consumo problemático de alcohol/sustancias?",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [
      {
       "key": "ini",
       "label": "Edad de inicio",
       "unit": ""
      }
     ],
     "sourceRaw": "AUDIT / ASSIST ([OMS 2001](https://apps.who.int/iris/handle/10665/67205))",
     "predictor": "dominios consumo/dependencia",
     "instrument": "sens 70.6% esp 87.3%",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Sustancias"
     ],
     "weight": 1.0
    },
    {
     "id": "E2-11",
     "block": "E2",
     "blockCode": "E2",
     "blockTitle": "Antecedentes psicopatologicos lifetime",
     "part": "Parte I · Lifetime",
     "n": "E2-11",
     "labelRaw": "¿Alguna vez ideación suicida (deseo de muerte, pensamientos de quitarse la vida)?",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "C-SSRS lifetime ([Posner 2011](https://pmc.ncbi.nlm.nih.gov/articles/PMC3893686/))",
     "predictor": "severidad lifetime (5 niveles)",
     "instrument": "sens 100% esp 96–100%",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Val-ext",
     "direction": "risk",
     "outcomes": [
      "Suicidalidad"
     ],
     "weight": 1.0
    },
    {
     "id": "E2-12",
     "block": "E2",
     "blockCode": "E2",
     "blockTitle": "Antecedentes psicopatologicos lifetime",
     "part": "Parte I · Lifetime",
     "n": "E2-12",
     "labelRaw": "¿Alguna vez intento de suicidio / conducta suicida?",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [
      {
       "key": "nº",
       "label": "Nº",
       "unit": ""
      }
     ],
     "sourceRaw": "C-SSRS conducta ([Posner 2011](https://pmc.ncbi.nlm.nih.gov/articles/PMC3893686/))",
     "predictor": "intento previo = predictor #1 de suicidio",
     "instrument": "sens 100%",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Val-ext",
     "direction": "risk",
     "outcomes": [
      "Suicidalidad"
     ],
     "weight": 1.0
    },
    {
     "id": "E2-13",
     "block": "E2",
     "blockCode": "E2",
     "blockTitle": "Antecedentes psicopatologicos lifetime",
     "part": "Parte I · Lifetime",
     "n": "E2-13",
     "labelRaw": "¿Alguna vez autolesión no suicida (NSSI)?",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [
      {
       "key": "ini",
       "label": "Edad de inicio",
       "unit": ""
      }
     ],
     "sourceRaw": "ISAS ([Klonsky 2009](https://pubmed.ncbi.nlm.nih.gov/))",
     "predictor": "funciones + conducta",
     "instrument": "validado",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Coh",
     "direction": "risk",
     "outcomes": [
      "Suicidalidad"
     ],
     "weight": 1.0
    },
    {
     "id": "E2-14",
     "block": "E2",
     "blockCode": "E2",
     "blockTitle": "Antecedentes psicopatologicos lifetime",
     "part": "Parte I · Lifetime",
     "n": "E2-14",
     "labelRaw": "¿Hospitalización psiquiátrica previa?",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [
      {
       "key": "nº",
       "label": "Nº",
       "unit": ""
      }
     ],
     "sourceRaw": "Marcador clínico de gravedad",
     "predictor": "gravedad/curso",
     "instrument": "predictor transdiag. de recurrencia",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Cons",
     "direction": "risk",
     "outcomes": [
      "Transdiagnostico"
     ],
     "weight": 0.5
    },
    {
     "id": "E2-15",
     "block": "E2",
     "blockCode": "E2",
     "blockTitle": "Antecedentes psicopatologicos lifetime",
     "part": "Parte I · Lifetime",
     "n": "E2-15",
     "labelRaw": "¿Tratamiento psiquiátrico/psicológico previo (fármacos o psicoterapia)?",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Marcador clínico de historia",
     "predictor": "respuesta/curso previo",
     "instrument": "informa pronóstico",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Cons",
     "direction": "risk",
     "outcomes": [
      "Transdiagnostico"
     ],
     "weight": 0.5
    },
    {
     "id": "E2-n1",
     "block": "E2",
     "blockCode": "E2",
     "blockTitle": "Antecedentes psicopatologicos lifetime",
     "part": "Parte I · Lifetime",
     "n": "E2-n1",
     "labelRaw": "¿Alguna vez ansiedad de separación en la infancia?",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Antecedente lifetime (umbrella)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Pánico:** OR=6.11 (4.31-8.66) cl.I [Fullana 2019](https://doi.org/10.1017/S0033291719001247)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Pánico",
       "cls": "I",
       "ref": "Fullana 2019",
       "url": "https://doi.org/10.1017/S0033291719001247",
       "raw": "▲ **Pánico:** OR=6.11 (4.31-8.66) cl.I [Fullana 2019](https://doi.org/10.1017/S0033291719001247)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Ansiedad"
     ],
     "weight": 3.0
    },
    {
     "id": "E2-n2",
     "block": "E2",
     "blockCode": "E2",
     "blockTitle": "Antecedentes psicopatologicos lifetime",
     "part": "Parte I · Lifetime",
     "n": "E2-n2",
     "labelRaw": "¿Antecedente personal de trastorno psiquiátrico previo (cualquiera)?",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Antecedente lifetime (umbrella)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** OR=6.77 (5.07-9.04) cl.I [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)<br>▲ **TEPT:** OR=2.45 (1.67-3.61) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "I",
       "ref": "Wang 2025",
       "url": "https://doi.org/10.1016/j.bbih.2025.101068",
       "raw": "▲ **Depresión:** OR=6.77 (5.07-9.04) cl.I [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)"
      },
      {
       "dir": "risk",
       "condition": "TEPT",
       "cls": "III",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **TEPT:** OR=2.45 (1.67-3.61) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Depresion",
      "TEPT"
     ],
     "weight": 3.0
    },
    {
     "id": "E2-n3",
     "block": "E2",
     "blockCode": "E2",
     "blockTitle": "Antecedentes psicopatologicos lifetime",
     "part": "Parte I · Lifetime",
     "n": "E2-n3",
     "labelRaw": "¿Antecedente de inhibición conductual en la infancia / trastorno internalizante temprano?",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Antecedente lifetime (umbrella)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **TAG (inhibición conductual):** HR=1.97 (1.66-2.33) cl.II [Fullana 2019](https://doi.org/10.1017/S0033291719001247)<br>▲ **Fobia social (inhibición conductual):** OR=7.52 (3.04-18.61) cl.III [Fullana 2019](https://doi.org/10.1017/S0033291719001247)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "TAG (inhibición conductual)",
       "cls": "II",
       "ref": "Fullana 2019",
       "url": "https://doi.org/10.1017/S0033291719001247",
       "raw": "▲ **TAG (inhibición conductual):** HR=1.97 (1.66-2.33) cl.II [Fullana 2019](https://doi.org/10.1017/S0033291719001247)"
      },
      {
       "dir": "risk",
       "condition": "Fobia social (inhibición conductual)",
       "cls": "III",
       "ref": "Fullana 2019",
       "url": "https://doi.org/10.1017/S0033291719001247",
       "raw": "▲ **Fobia social (inhibición conductual):** OR=7.52 (3.04-18.61) cl.III [Fullana 2019](https://doi.org/10.1017/S0033291719001247)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Ansiedad"
     ],
     "weight": 2.0
    },
    {
     "id": "E2-n4",
     "block": "E2",
     "blockCode": "E2",
     "blockTitle": "Antecedentes psicopatologicos lifetime",
     "part": "Parte I · Lifetime",
     "n": "E2-n4",
     "labelRaw": "¿Antecedente de TLP / rasgos de personalidad del cluster B-C (esquizotípico, narcisista)?",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Antecedente lifetime (umbrella)",
     "predictor": "",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **TAG (TLP):** OR=4.71 (2.93-7.57) cl.II [Fullana 2019](https://doi.org/10.1017/S0033291719001247)<br>▲ **TAG (esquizotípico):** OR=2.60 (1.52-4.44) cl.III [Fullana 2019](https://doi.org/10.1017/S0033291719001247)<br>▲ **TAG (narcisista):** OR=2.31 (1.49-3.60) cl.III [Fullana 2019](https://doi.org/10.1017/S0033291719001247)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "TAG (TLP)",
       "cls": "II",
       "ref": "Fullana 2019",
       "url": "https://doi.org/10.1017/S0033291719001247",
       "raw": "▲ **TAG (TLP):** OR=4.71 (2.93-7.57) cl.II [Fullana 2019](https://doi.org/10.1017/S0033291719001247)"
      },
      {
       "dir": "risk",
       "condition": "TAG (esquizotípico)",
       "cls": "III",
       "ref": "Fullana 2019",
       "url": "https://doi.org/10.1017/S0033291719001247",
       "raw": "▲ **TAG (esquizotípico):** OR=2.60 (1.52-4.44) cl.III [Fullana 2019](https://doi.org/10.1017/S0033291719001247)"
      },
      {
       "dir": "risk",
       "condition": "TAG (narcisista)",
       "cls": "III",
       "ref": "Fullana 2019",
       "url": "https://doi.org/10.1017/S0033291719001247",
       "raw": "▲ **TAG (narcisista):** OR=2.31 (1.49-3.60) cl.III [Fullana 2019](https://doi.org/10.1017/S0033291719001247)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "Personalidad",
      "Ansiedad"
     ],
     "weight": 2.0
    },
    {
     "id": "E2-n5",
     "block": "E2",
     "blockCode": "E2",
     "blockTitle": "Antecedentes psicopatologicos lifetime",
     "part": "Parte I · Lifetime",
     "n": "E2-n5",
     "labelRaw": "¿Antecedente de TDAH infantil/adolescente (**inicio esperado antes de los 12 años**)?",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Antecedente lifetime (umbrella + cohortes)",
     "predictor": "RR=4.3 esquizofrenia; OR=4.5 esquizofreniforme",
     "instrument": "",
     "meta": true,
     "evidenceRaw": "▲ **Esquizofrenia:** RR=4.3 (1.9-8.57) [Steinhausen 2014](https://doi.org/10.1186/1471-244X-14-59)<br>▲ **Trastorno esquizofreniforme:** OR=4.5 (1.8-11.0) [Steinhausen 2014](https://doi.org/10.1186/1471-244X-14-59)<br>▲ **TCA:** OR=4.24 (2.62-6.87) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Solmi 2020)<br>▲ **T. uso de sustancias:** OR=2.36 (1.71-3.27) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Esquizofrenia",
       "cls": null,
       "ref": "Steinhausen 2014",
       "url": "https://doi.org/10.1186/1471-244X-14-59",
       "raw": "▲ **Esquizofrenia:** RR=4.3 (1.9-8.57) [Steinhausen 2014](https://doi.org/10.1186/1471-244X-14-59)"
      },
      {
       "dir": "risk",
       "condition": "Trastorno esquizofreniforme",
       "cls": null,
       "ref": "Steinhausen 2014",
       "url": "https://doi.org/10.1186/1471-244X-14-59",
       "raw": "▲ **Trastorno esquizofreniforme:** OR=4.5 (1.8-11.0) [Steinhausen 2014](https://doi.org/10.1186/1471-244X-14-59)"
      },
      {
       "dir": "risk",
       "condition": "TCA",
       "cls": "III",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **TCA:** OR=4.24 (2.62-6.87) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Solmi 2020)"
      },
      {
       "dir": "risk",
       "condition": "T. uso de sustancias",
       "cls": "III",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **T. uso de sustancias:** OR=2.36 (1.71-3.27) cl.III [Carvalho 2021](https://doi.org/10.1002/wps.20894)"
      }
     ],
     "evLevel": "MA",
     "direction": "risk",
     "outcomes": [
      "TDAH",
      "Psicosis",
      "TCA",
      "Sustancias"
     ],
     "weight": 1.0
    },
    {
     "id": "E2-n6",
     "block": "E2",
     "blockCode": "E2",
     "blockTitle": "Antecedentes psicopatologicos lifetime",
     "part": "Parte I · Lifetime",
     "n": "E2-n6",
     "labelRaw": "¿Depresión juvenil / episodio depresivo antes de la adultez (**<18 años**)?",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [
      {
       "key": "ini",
       "label": "Edad de inicio",
       "unit": ""
      }
     ],
     "sourceRaw": "Antecedente lifetime (Dunedin, citado en Steinhausen)",
     "predictor": "OR=3.3 manía; OR=7.4 esquizofreniforme",
     "instrument": "",
     "meta": false,
     "evidenceRaw": "▲ **Manía adulta:** OR=3.3 (1.2-9.2)<br>▲ **Trastorno esquizofreniforme:** OR=7.4 (3.6-16.1) [Steinhausen 2014](https://doi.org/10.1186/1471-244X-14-59)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Manía adulta",
       "cls": null,
       "ref": null,
       "url": null,
       "raw": "▲ **Manía adulta:** OR=3.3 (1.2-9.2)"
      },
      {
       "dir": "risk",
       "condition": "Trastorno esquizofreniforme",
       "cls": null,
       "ref": "Steinhausen 2014",
       "url": "https://doi.org/10.1186/1471-244X-14-59",
       "raw": "▲ **Trastorno esquizofreniforme:** OR=7.4 (3.6-16.1) [Steinhausen 2014](https://doi.org/10.1186/1471-244X-14-59)"
      }
     ],
     "evLevel": "Coh",
     "direction": "risk",
     "outcomes": [
      "Depresion",
      "Bipolar",
      "Psicosis"
     ],
     "weight": 1.0
    }
   ]
  },
  {
   "code": "F",
   "block": "F",
   "title": "Exposoma ambiental duro, digital y estilo de vida",
   "part": "Parte I · Exposoma",
   "items": [
    {
     "id": "58",
     "block": "F",
     "blockCode": "F",
     "blockTitle": "Exposoma ambiental duro, digital y estilo de vida",
     "part": "Parte I · Exposoma",
     "n": "58",
     "labelRaw": "Contaminación del aire (NO2, PM2.5)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Outdoor Env. Exposome / ABCD ([Moore 2022](https://academic.oup.com/exposome/article/2/1/osac010/6900933))",
     "predictor": "de 20 vars geoespaciales",
     "instrument": "XGBoost depresión infantil",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Der",
     "direction": "risk",
     "outcomes": [
      "Transdiagnostico"
     ],
     "weight": 0.5
    },
    {
     "id": "59",
     "block": "F",
     "blockCode": "F",
     "blockTitle": "Exposoma ambiental duro, digital y estilo de vida",
     "part": "Parte I · Exposoma",
     "n": "59",
     "labelRaw": "Ruido ambiental/proximidad a vías",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Outdoor Env. Exposome ([Moore 2022](https://academic.oup.com/exposome/article/2/1/osac010/6900933))",
     "predictor": "de 20 vars (3 dominios)",
     "instrument": "XGBoost depresión infantil",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Der",
     "direction": "risk",
     "outcomes": [
      "Transdiagnostico"
     ],
     "weight": 0.5
    },
    {
     "id": "60",
     "block": "F",
     "blockCode": "F",
     "blockTitle": "Exposoma ambiental duro, digital y estilo de vida",
     "part": "Parte I · Exposoma",
     "n": "60",
     "labelRaw": "Falta de espacio verde/baja caminabilidad",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Outdoor Env. Exposome ([Moore 2022](https://academic.oup.com/exposome/article/2/1/osac010/6900933))",
     "predictor": "de 20 vars geoespaciales",
     "instrument": "XGBoost depresión infantil",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Der",
     "direction": "risk",
     "outcomes": [
      "Transdiagnostico"
     ],
     "weight": 0.5
    },
    {
     "id": "61",
     "block": "F",
     "blockCode": "F",
     "blockTitle": "Exposoma ambiental duro, digital y estilo de vida",
     "part": "Parte I · Exposoma",
     "n": "61",
     "labelRaw": "Plomo/metales pesados",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ML chemical-mixture ([Wang 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC9938102/))",
     "predictor": "de 52 químicos (biomonitoreo)",
     "instrument": "RF AUC 0.967 (interno)",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Der",
     "direction": "risk",
     "outcomes": [
      "Transdiagnostico"
     ],
     "weight": 0.5
    },
    {
     "id": "62",
     "block": "F",
     "blockCode": "F",
     "blockTitle": "Exposoma ambiental duro, digital y estilo de vida",
     "part": "Parte I · Exposoma",
     "n": "62",
     "labelRaw": "Pesticidas/ftalatos/contaminantes",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ML chemical-mixture ([Wang 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC9938102/))",
     "predictor": "de 52 químicos",
     "instrument": "RF AUC 0.967 (interno)",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Der",
     "direction": "risk",
     "outcomes": [
      "Transdiagnostico"
     ],
     "weight": 0.5
    },
    {
     "id": "63",
     "block": "F",
     "blockCode": "F",
     "blockTitle": "Exposoma ambiental duro, digital y estilo de vida",
     "part": "Parte I · Exposoma",
     "n": "63",
     "labelRaw": "Exposoma digital (pantalla/redes)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "Digital Exposomic Risk Score / ABCD ([Moore 2022](https://academic.oup.com/exposome/article/2/1/osac010/6900933))",
     "predictor": "carga subfactor exp. diaria",
     "instrument": "salud mental juvenil",
     "meta": false,
     "evidenceRaw": "",
     "evidence": [],
     "evLevel": "Der",
     "direction": "risk",
     "outcomes": [
      "Transdiagnostico"
     ],
     "weight": 0.5
    },
    {
     "id": "64",
     "block": "F",
     "blockCode": "F",
     "blockTitle": "Exposoma ambiental duro, digital y estilo de vida",
     "part": "Parte I · Exposoma",
     "n": "64",
     "labelRaw": "Sueño (corta duración/alteración)",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "depRS (top predictor) ([Baldwin 2025](https://pubmed.ncbi.nlm.nih.gov/40672501/))",
     "predictor": "top de 23 predictores",
     "instrument": "depRS+PGS AUC 0.70",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** RR=1.92 (1.59-2.33) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Arango 2022) · RR=2.27 (1.89-2.71) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068) · — cl.II [Wu 2022](https://doi.org/10.1016/j.jad.2022.03.062)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "II",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▲ **Depresión:** RR=1.92 (1.59-2.33) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894) (tb. Arango 2022) · RR=2.27 (1.89-2.71) cl.II [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068) · — cl.II [Wu 2022](https://doi.org/10.1016/j.jad.2022.03.062)"
      }
     ],
     "evLevel": "Val-ext",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 2.0
    },
    {
     "id": "65",
     "block": "F",
     "blockCode": "F",
     "blockTitle": "Exposoma ambiental duro, digital y estilo de vida",
     "part": "Parte I · Exposoma",
     "n": "65",
     "labelRaw": "Dieta/restricción alimentaria",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "depRS (top predictor) ([Baldwin 2025](https://pubmed.ncbi.nlm.nih.gov/40672501/))",
     "predictor": "top de 23 predictores",
     "instrument": "depRS+PGS AUC 0.70",
     "meta": true,
     "evidenceRaw": "▲ **Depresión:** RR=1.25 (1.16-1.35) cl.II [Köhler 2018](https://doi.org/10.1016/j.jpsychires.2018.05.020) (tb. Carvalho 2021)<br>▼ **Depresión:** OR=0.87 (0.84-0.91) cl.I [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Depresión",
       "cls": "II",
       "ref": "Köhler 2018",
       "url": "https://doi.org/10.1016/j.jpsychires.2018.05.020",
       "raw": "▲ **Depresión:** RR=1.25 (1.16-1.35) cl.II [Köhler 2018](https://doi.org/10.1016/j.jpsychires.2018.05.020) (tb. Carvalho 2021)"
      },
      {
       "dir": "prot",
       "condition": "Depresión",
       "cls": "I",
       "ref": "Wang 2025",
       "url": "https://doi.org/10.1016/j.bbih.2025.101068",
       "raw": "▼ **Depresión:** OR=0.87 (0.84-0.91) cl.I [Wang 2025](https://doi.org/10.1016/j.bbih.2025.101068)"
      }
     ],
     "evLevel": "Val-ext",
     "direction": "risk",
     "outcomes": [
      "Depresion"
     ],
     "weight": 3.0
    },
    {
     "id": "66",
     "block": "F",
     "blockCode": "F",
     "blockTitle": "Exposoma ambiental duro, digital y estilo de vida",
     "part": "Parte I · Exposoma",
     "n": "66",
     "labelRaw": "Baja actividad física",
     "answerOptions": [
      "Sí",
      "No",
      "NS"
     ],
     "extraFields": [],
     "sourceRaw": "ALSPAC ML ([Yoo 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11458604/))",
     "predictor": "feature ML",
     "instrument": "modelo ML depresión",
     "meta": true,
     "evidenceRaw": "▲ **Demencia:** RR=1.62 (1.38-1.91) cl.II [Arango 2022](https://doi.org/10.1038/s41380-022-01586-8)<br>▼ **Demencia:** HR=0.62 (0.52-0.72) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894)",
     "evidence": [
      {
       "dir": "risk",
       "condition": "Demencia",
       "cls": "II",
       "ref": "Arango 2022",
       "url": "https://doi.org/10.1038/s41380-022-01586-8",
       "raw": "▲ **Demencia:** RR=1.62 (1.38-1.91) cl.II [Arango 2022](https://doi.org/10.1038/s41380-022-01586-8)"
      },
      {
       "dir": "prot",
       "condition": "Demencia",
       "cls": "II",
       "ref": "Carvalho 2021",
       "url": "https://doi.org/10.1002/wps.20894",
       "raw": "▼ **Demencia:** HR=0.62 (0.52-0.72) cl.II [Carvalho 2021](https://doi.org/10.1002/wps.20894)"
      }
     ],
     "evLevel": "Der",
     "direction": "risk",
     "outcomes": [
      "Demencia"
     ],
     "weight": 2.0
    }
   ]
  }
 ]
};
