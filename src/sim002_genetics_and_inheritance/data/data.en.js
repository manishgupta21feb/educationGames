import globalConfig from "../../app/data";
const buttonLabels = { ...globalConfig.buttonLabels };

const data = {
  plantTypes: {
    tw: {
      type: "tw",
      name: "Homozygous tall plant with white flowers",
      genotypeText: "<p>tt F<sup>w</sup>F<sup>w</sup></p>",
      flowerClass: "tall-white",
      genotypeValue: "tt FwFw selected",
    },
    hosr: {
      type: "hosr",
      name: "Homozygous short plant with red flowers",
      genotypeText: "<p>TT F<sup>r</sup>F<sup>r</sup></p>",
      flowerClass: "small-red",
      genotypeValue: "TT FrFr selected",
    },
    hesr: {
      type: "hesr",
      name: "Heterozygous short plant with red flowers",
      genotypeText: "<p>Tt F<sup>r</sup>F<sup>r</sup></p>",
      flowerClass: "small-red",
      genotypeValue: "Tt FrFr selected ",
    },
    hosp: {
      type: "hosp",
      name: "Homozygous short plant with pink flowers",
      genotypeText: "<p>TT F<sup>r</sup>F<sup>w</sup></p>",
      flowerClass: "small-pink",
      genotypeValue: "TT FrFw selected ",
    },
    hesp: {
      type: "hesp",
      name: "Heterozygous short plant with pink flowers",
      genotypeText: "<p>Tt F<sup>r</sup>F<sup>w</sup></p>",
      flowerClass: "small-pink",
      genotypeValue: "Tt FrFw selected ",
    },
    hosw: {
      type: "hosw",
      name: "Homozygous short plant with white flowers",
      genotypeText: "<p>TT F<sup>w</sup>F<sup>w</sup></p>",
      flowerClass: "small-white",
      genotypeValue: "TT FwFw selected ",
    },
    hesw: {
      type: "hesw",
      name: "Heterozygous short plant with white flowers",
      genotypeText: "<p>Tt F<sup>w</sup>F<sup>w</sup></p>",
      flowerClass: "small-white",
      genotypeValue: "Tt FwFw selected ",
    },
    tr: {
      type: "tr",
      name: "Homozygous tall plant with red flowers",
      genotypeText: "<p>tt F<sup>r</sup>F<sup>r</sup></p>",
      flowerClass: "tall-red",
      genotypeValue: "tt FrFr selected ",
    },
    tp: {
      type: "tp",
      name: "Homozygous tall plant with pink flowers",
      genotypeText: "<p>tt F<sup>r</sup>F<sup>w</sup></p>",
      flowerClass: "tall-pink",
      genotypeValue: "tt FrFw selected ",
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
      descText: "Choose any pair of plants to begin!",
      buttonText: buttonLabels.start,
    },
    error: {
      type: "error",
      title: "",
      descText: "Too many cross-breedings attempted, please reset.",
      buttonText: buttonLabels.reset,
    },
    info: {
      type: "info",
      title: "",
      descText:
        "Use their offspring and the genetic analyzer to figure out the genetic makeup of the offspring.",
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
        "Click on any two flowers to crossbreed them. Use their offspring and the genetic analyzer to figure out the genetic make up.",
      buttonText: buttonLabels.continue,
    },
  },
  labels: {
    cross: "Cross",
    genotype: "Genotype",
    info: buttonLabels.info,
    reset: buttonLabels.reset,
  },
  phenotypeGenotypeTable: {
    caption: "Phenotype Genotype Table",
    header: {
      phenotype: "Phenotype",
      genotype: "Genotype",
    },
    body: [
      {
        id: "row1",
        data: [
          {
            id: "row1col1",
            data: "Homozygous tall plant with white flowers",
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
            data: "Homozygous short plant with red flowers",
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
            data: "Heterozygous short plant with red flowers",
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
            data: "Homozygous short plant with pink flowers",
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
            data: "Heterozygous short plant with pink flowers",
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
            data: "Homozygous short plant with white flowers",
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
            data: "Heterozygous short plant with white flowers",
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
            data: "Homozygous tall plant with red flowers",
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
            data: "Homozygous tall plant with pink flowers",
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
    "This simulation demonstrates how crossbreeding and genetic analysis works.",
  ...buttonLabels,
  genotypeAnalyzer: "Genotype Analyzer",
  crossedLiveText: "Crossed, outcome -1- new flowers",
  selected: "selected",
  notselected: "not selected",
};

export default data;
