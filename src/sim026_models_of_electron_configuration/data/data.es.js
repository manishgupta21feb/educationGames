import commonData from "../../app/data/data.es";

const data = {
  buttonLabels: { ...commonData.buttonLabels },
  completionPopup: commonData.completionPopup,
  transitionPopup: commonData.transitionPopup,
  transitionPopupHeading: commonData.transitionPopup.heading,
  resetPopupText: commonData.resetPopupText,
  resetLiveText: commonData.resetLiveText,
  completionPopupText: "Has completado exitosamente esta simulación.",

  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,

  observationMotive: `En esta simulación, los estudiantes podrán elegir las áreas de la tabla 
  periódica que corresponden a determinadas configuraciones electrónicas.`,
  startUpInfoText: `¡Sigue las instrucciones para completar esta actividad!`,
  infoText: {
    0: `Elige las secciones correctas para los subniveles s, p, d y f en la tabla periódica. 
    Recuerda que el helio forma parte del subnivel s.`,
    1: `<P aria-label="Elige el área correcta para los niveles de energía 2 s, 3p, 4d, 3d y 6 s en la tabla periódica. 
    Recuerda que el bloque de energía del subnivel d es una unidad menor.">Elige el área correcta para los niveles de energía 2s, 3p, 4d, 3d y 6s en la tabla periódica. 
    Recuerda que el bloque de energía del subnivel d es una unidad menor.</p>`,
    2: `Mira la última configuración electrónica para encontrar el elemento.`,
  },
  transitionText: {
    first: `<p aria-label="Ahora que has explorado los niveles s, p, d y f, 
    busquemos los niveles de energía 2 s, 3p, 4d, 3d y 6 s en la tabla periódica.">
    Ahora que has explorado los niveles s, p, d y f, busquemos los niveles de energía 2s, 3p, 4d, 3d y 6s 
    en la tabla periódica.</p>`,
    second: `Ahora que has explorado los subniveles y niveles de energía, 
    busquemos algunos elementos según sus configuraciones electrónicas.`,
  },
  questionScreenZero: `La tabla periódica está dividida en cuatro secciones. 
  Selecciona la sección correcta para el subnivel -1- en la tabla periódica.`,

  screen0options: ["s", "p", "d", "f"],
  screen0optionsResult: {
    s: "section1",
    p: "section2",
    d: "section3",
    f: "section4",
  },

  screen1options: [
    { key: "2s", value: "2 s" },
    { key: "3p", value: "3p" },
    { key: "4d", value: "4d" },
    { key: "3d", value: "3d" },
    { key: "6s", value: "6 s" },
  ],
  screen1optionsSections: {
    "2s": "section1",
    "3p": "section2",
    "4d": "section3",
    "3d": "section3",
    "6s": "section1",
  },
  screen1optionsSectionsOptions: {
    section1: [
      { id: "option1", label: "Elementos con números atómicos 1 y 2." },
      { id: "option2", label: "option1", ariahidden: true },
      { id: "option3", label: "Elementos con números atómicos 3 y 4." },
      { id: "option4", label: "Elementos con números atómicos 11 y 12." },
      { id: "option5", label: "Elementos con números atómicos 19 y 20." },
      { id: "option6", label: "Elementos con números atómicos 37 y 38." },
      { id: "option7", label: "Elementos con números atómicos 55 y 56." },
      { id: "option8", label: "Elementos con números atómicos 87 y 88." },
    ],
    section2: [
      { id: "option1", label: "Elementos con números atómicos del 5 al 10." },
      { id: "option2", label: "Elementos con números atómicos del 13 al 18." },
      { id: "option3", label: "Elementos con números atómicos del 31 al 36." },
      { id: "option4", label: "Elementos con números atómicos del 49 al 54." },
      { id: "option5", label: "Elementos con números atómicos del 81 al 86." },
      {
        id: "option6",
        label: "Elementos con números atómicos del 113 al 118.",
      },
    ],
    section3: [
      { id: "option1", label: "Elementos con números atómicos del 21 al 30." },
      { id: "option2", label: "Elementos con números atómicos del 39 al 48." },
      { id: "option3", label: "Elementos con números atómicos del 72 al 80." },
      {
        id: "option4",
        label: "Elementos con números atómicos del 104 al 112.",
      },
    ],
  },
  screen1optionsResult: {
    "2s": "option3",
    "3p": "option2",
    "4d": "option2",
    "3d": "option1",
    "6s": "option7",
  },

  screen2options: [
    {
      id: "1s2",
      text: "<span aria-hidden='true'>1s<sup>2</sup></span>",
      label: "1 s superíndice 2",
    },
    {
      id: "1s22s22p63s23p4",
      text: "<span aria-hidden='true'>1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>4</sup></span>",
      label:
        "1 s superíndice 2 2 s superíndice 2 2p superíndice 6 3 s superíndice 2 3p superíndice 4",
    },
    {
      id: "1s22s22p63s23p64s23d8",
      text: "<span aria-hidden='true'>1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>2</sup>3d<sup>8</sup></span>",
      label:
        "1 s superíndice 2 2 s superíndice 2 2p superíndice 6 3 s superíndice 2 3p superíndice 6 4 s superíndice 2 3d superíndice 8",
    },
    {
      id: "1s22s22p3",
      text: "<span aria-hidden='true'>1s<sup>2</sup>2s<sup>2</sup>2p<sup>3</sup></span>",
      label: "1 s superíndice 2 2 s superíndice 2 2p superíndice 3",
    },
    {
      id: "1s22s22p63s23p1",
      text: "<span aria-hidden='true'>1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>1</sup></span>",
      label:
        "1 s superíndice 2 2 s superíndice 2 2p superíndice 6 3 s superíndice 2 3p superíndice 1",
    },
  ],
  screen2optionsSections: {
    "1s2": "section1",
    "1s22s22p63s23p4": "section2",
    "1s22s22p63s23p64s23d8": "section3",
    "1s22s22p3": "section4",
    "1s22s22p63s23p1": "section5",
  },
  screen2optionsSectionsOptions: {
    section1: [
      { id: "option1", label: "Hidrógeno" },
      { id: "option2", label: "Helio" },
      { id: "option3", label: "Berilio" },
      { id: "option4", label: "Calcio" },
      { id: "option5", label: "Galio" },
      { id: "option6", label: "Tecnecio" },
      { id: "option7", label: "Antimonio" },
      { id: "option8", label: "Cesio" },
    ],
    section2: [
      { id: "option1", label: "Nitrógeno" },
      { id: "option2", label: "Magnesio" },
      { id: "option3", label: "Silicio" },
      { id: "option4", label: "Azufre" },
      { id: "option5", label: "Cloro" },
      { id: "option6", label: "Cromo" },
      { id: "option7", label: "Cobre" },
      { id: "option8", label: "Selenio" },
    ],
    section3: [
      { id: "option1", label: "Aluminio" },
      { id: "option2", label: "Calcio" },
      { id: "option3", label: "Vanadio" },
      { id: "option4", label: "Hierro" },
      { id: "option5", label: "Níquel" },
      { id: "option6", label: "Arsénico" },
      { id: "option7", label: "Rodio" },
      { id: "option8", label: "Oro" },
    ],
    section4: [
      { id: "option1", label: "Berilio" },
      { id: "option2", label: "Nitrógeno" },
      { id: "option3", label: "Flúor" },
      { id: "option4", label: "Sodio" },
      { id: "option5", label: "Fósforo" },
      { id: "option6", label: "Manganeso" },
      { id: "option7", label: "Estroncio" },
      { id: "option8", label: "Antimonio" },
    ],
    section5: [
      { id: "option1", label: "Boro" },
      { id: "option2", label: "Oxígeno" },
      { id: "option3", label: "Sodio" },
      { id: "option4", label: "Aluminio" },
      { id: "option5", label: "Argón" },
      { id: "option6", label: "Potasio" },
      { id: "option7", label: "Escandio" },
      { id: "option8", label: "Manganeso" },
    ],
  },
  screen2optionsResult: {
    "1s2": "option2",
    "1s22s22p63s23p4": "option4",
    "1s22s22p63s23p64s23d8": "option5",
    "1s22s22p3": "option2",
    "1s22s22p63s23p1": "option4",
  },

  questionScreenOne: `Selecciona el área correcta para el nivel y el subnivel de energía -1- en la tabla periódica.`,

  questionScreenTwo: `Selecciona el elemento que tiene la siguiente configuración electrónica: -1-`,

  equationOptions: {
    screen0: [
      {
        id: "section1",
        disabled: false,
        text: "Sección 1",
        html: "<span aria-hidden='true'>Sección 1</span>",
        label:
          "Sección 1, elementos de la fila 1 en las columnas 1 y 18 y elementos de las filas 2 a 7 en las columnas 1 y 2.",
      },
      {
        id: "section2",
        disabled: false,
        text: "Sección 2",
        html: "<span aria-hidden='true'>Sección 2</span>",
        label:
          "Sección 2, elementos de las filas 2 a 7 en las columnas 13 a 18.",
      },
      {
        id: "section3",
        disabled: false,
        text: "Sección 3",
        html: "<span aria-hidden='true'>Sección 3</span>",
        label:
          "Sección 3, elementos de las filas 4 a 7 en las columnas 3 a 12.",
      },
      {
        id: "section4",
        disabled: false,
        text: "Sección 4",
        html: "<span aria-hidden='true'>Sección 4</span>",
        label:
          "Sección 4, elementos de las filas 6 y 7 en la columna 3 y elementos con números atómicos del 57 al 71 y del 89 al 103.",
      },
    ],
  },
};

export default data;
