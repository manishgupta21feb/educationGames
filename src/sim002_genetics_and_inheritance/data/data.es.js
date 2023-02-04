import globalConfig from "../../app/data";
const buttonLabels = { ...globalConfig.buttonLabels };

const data = {
  plantTypes: {
    tw: {
      type: "tw",
      name: "Planta homocigótica alta con flores blancas",
      genotypeText: "<p>tt F<sup>w</sup>F<sup>w</sup></p>",
      flowerClass: "tall-white",
      genotypeValue: "Se ha seleccionado «tt FwFw». ",
    },
    hosr: {
      type: "hosr",
      name: "Planta homocigótica baja con flores rojas",
      genotypeText: "<p>TT F<sup>r</sup>F<sup>r</sup></p>",
      flowerClass: "small-red",
      genotypeValue: "Se ha seleccionado «TT FrFr». ",
    },
    hesr: {
      type: "hesr",
      name: "Planta heterocigótica baja con flores rojas",
      genotypeText: "<p>Tt F<sup>r</sup>F<sup>r</sup></p>",
      flowerClass: "small-red",
      genotypeValue: "Se ha seleccionado «Tt FrFr». ",
    },
    hosp: {
      type: "hosp",
      name: "Planta homocigótica baja con flores rosadas",
      genotypeText: "<p>TT F<sup>r</sup>F<sup>w</sup></p>",
      flowerClass: "small-pink",
      genotypeValue: "Se ha seleccionado «TT FrFw». ",
    },
    hesp: {
      type: "hesp",
      name: "Planta heterocigótica baja con flores rosadas",
      genotypeText: "<p>Tt F<sup>r</sup>F<sup>w</sup></p>",
      flowerClass: "small-pink",
      genotypeValue: "Se ha seleccionado «Tt FrFw». ",
    },
    hosw: {
      type: "hosw",
      name: "Planta homocigótica baja con flores blancas",
      genotypeText: "<p>TT F<sup>w</sup>F<sup>w</sup></p>",
      flowerClass: "small-white",
      genotypeValue: "Se ha seleccionado «TT FwFw». ",
    },
    hesw: {
      type: "hesw",
      name: "Planta heterocigótica baja con flores blancas",
      genotypeText: "<p>Tt F<sup>w</sup>F<sup>w</sup></p>",
      flowerClass: "small-white",
      genotypeValue: "Se ha seleccionado «Tt FwFw». ",
    },
    tr: {
      type: "tr",
      name: "Planta homocigótica alta con flores rojas",
      genotypeText: "<p>tt F<sup>r</sup>F<sup>r</sup></p>",
      flowerClass: "tall-red",
      genotypeValue: "Se ha seleccionado «tt FrFr». ",
    },
    tp: {
      type: "tp",
      name: "Planta homocigótica alta con flores rosadas",
      genotypeText: "<p>tt F<sup>r</sup>F<sup>w</sup></p>",
      flowerClass: "tall-pink",
      genotypeValue: "Se ha seleccionado «tt FrFw». ",
    },
  },

  initialFlowers: ["tw", "tw", "hosr", "hosr"],

  crossCombinatios: [
    {
      cross: ["tw", "tw"],
      result: ["tw", "tw", "tw", "tw"],
      crossType: "twtw",
      generation: 1,
    },
    {
      cross: ["hosr", "hosr"],
      result: ["hosr", "hosr", "hosr", "hosr"],
      crossType: "hosrhosr",
      generation: 1,
    },
    {
      cross: ["hosr", "tw"],
      result: ["hesp", "hesp", "hesp", "hesp"],
      crossType: "hosrtw",
      generation: 2,
    },
    {
      cross: ["hesp", "hesp"],
      result: [
        "hosr",
        "hesr",
        "hesr",
        "hosw",
        "hesw",
        "hesw",
        "hosp",
        "hosp",
        "hesp",
        "hesp",
        "hesp",
        "hesp",
        "tr",
        "tw",
        "tp",
        "tp",
      ],
      generation: 3,
      crossType: "hesphesp",
      generation: 3,
    },
    {
      cross: ["hesp", "tw"],
      result: ["hesw", "hesp", "tw", "tp"],
      crossType: "hesptw",
      generation: 3,
    },
    {
      cross: ["hesp", "hosr"],
      result: ["hesr", "hesp", "hosr", "hosp"],
      crossType: "hesphosr",
      generation: 3,
    },
  ],

  messages: {
    initialInfo: {
      type: "initialInfo",
      title: "",
      descText: "¡Elige cualquier pareja de plantas para comenzar!",
      buttonText: buttonLabels.start,
    },
    error: {
      type: "error",
      title: "",
      descText:
        "Has hecho demasiados intentos de cruzamiento. Debes reiniciar.",
      buttonText: buttonLabels.reset,
    },
    info: {
      type: "info",
      title: "",
      descText:
        "Usa las plantas descendientes y el analizador genético para determinar la composición genética de las plantas descendientes.",
      buttonText: buttonLabels.continue,
    },
    reset: {
      type: "reset",
      title: "", //"Reset Simulation",
      descText: globalConfig.resetPopupText,
      resetButtonText: buttonLabels.yes,
      resetButtonLabel: buttonLabels.yes,
      buttonContinueText: buttonLabels.no,
      buttonContinueLabel: buttonLabels.no,
    },
    use: {
      type: "use",
      title: "",
      descText:
        "Haz clic sobre dos flores para cruzarlas. Usa las plantas descendientes y el analizador genético para determinar la composición genética.",
      buttonText: buttonLabels.continue,
    },
  },
  labels: {
    cross: "Cruzar",
    genotype: "Genotipo",
    info: buttonLabels.info,
    reset: buttonLabels.reset,
  },
  phenotypeGenotypeTable: {
    caption: "Tabla de fenotipos y genotipos",
    header: {
      phenotype: "Fenotipo",
      genotype: "Genotipo",
    },
    body: [
      {
        id: "row1",
        data: [
          {
            id: "row1col1",
            data: "Planta homocigótica alta con flores blancas",
          },
          {
            id: "row1col2",
            data: "tt F<sup>w</sup>F<sup>w</sup>",
          },
        ],
      },
      {
        id: "row2",
        data: [
          {
            id: "row2col1",
            data: "Planta homocigótica baja con flores rojas",
          },
          {
            id: "row2col2",
            data: "TT F<sup>r</sup>F<sup>r</sup>",
          },
        ],
      },
      {
        id: "row3",
        data: [
          {
            id: "row3col1",
            data: "Planta heterocigótica baja con flores rojas",
          },
          {
            id: "row3col2",
            data: "Tt F<sup>r</sup>F<sup>r</sup>",
          },
        ],
      },
      {
        id: "row4",
        data: [
          {
            id: "row4col1",
            data: "Planta homocigótica baja con flores rosadas",
          },
          {
            id: "row4col2",
            data: "TT F<sup>r</sup>F<sup>w</sup>",
          },
        ],
      },
      {
        id: "row5",
        data: [
          {
            id: "row5col1",
            data: "Planta heterocigótica baja con flores rosadas",
          },
          {
            id: "row5col2",
            data: "Tt F<sup>r</sup>F<sup>w</sup>",
          },
        ],
      },
      {
        id: "row6",
        data: [
          {
            id: "row6col1",
            data: "Planta homocigótica baja con flores blancas",
          },
          {
            id: "row6col2",
            data: "TT F<sup>w</sup>F<sup>w</sup>",
          },
        ],
      },
      {
        id: "row7",
        data: [
          {
            id: "row7col1",
            data: "Planta heterocigótica baja con flores blancas",
          },
          {
            id: "row7col2",
            data: "Tt F<sup>w</sup>F<sup>w</sup>",
          },
        ],
      },
      {
        id: "row8",
        data: [
          {
            id: "row8col1",
            data: "Planta homocigótica alta con flores rojas",
          },
          {
            id: "row8col2",
            data: "tt F<sup>r</sup>F<sup>r</sup>",
          },
        ],
      },
      {
        id: "row9",
        data: [
          {
            id: "row8col1",
            data: "Planta homocigótica alta con flores rosadas",
          },
          {
            id: "row9col2",
            data: "tt F<sup>r</sup>F<sup>w</sup>",
          },
        ],
      },
    ],
  },
  resetLiveText: globalConfig.resetLiveText,
  activityHeading:
    "Esta simulación demuestra cómo funcionan los cruzamientos y el análisis genético.",
  ...buttonLabels,
  genotypeAnalyzer: "Analizador de genotipos",
  crossedLiveText: "Resultado del cruzamiento: -1- flores nuevas",
  selected: "seleccionado",
  notselected: "no seleccionado",
};

export default data;
