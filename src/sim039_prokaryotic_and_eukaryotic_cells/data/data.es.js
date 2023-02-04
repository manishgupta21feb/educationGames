import globalConfig from "../../app/data/data.es";
const data = {
  stage1: {
    instructionText: "Arrastra y suelta las etiquetas en las áreas correctas.",
    elements: [
      {
        id: "tienen_núcleo",
        name: "Tienen núcleo",
        accept: "eukaryotic",
        target: "eucariotas",
      },
      {
        id: "no_tienen_núcleo",
        name: "No tienen núcleo",
        accept: "prokaryotic",
        target: "procariotas",
      },
      {
        id: "de_tamaño_mayor",
        name: "De tamaño mayor",
        accept: "eukaryotic",
        target: "eucariotas",
      },
      {
        id: "de_tamaño_menor",
        name: "De tamaño menor",
        accept: "prokaryotic",
        target: "procariotas",
      },
      {
        id: "citoplasma",
        name: "Citoplasma",
        accept: "both",
        target: "ambas",
      },
      {
        id: "orgánulos_rodeados_por_membranas",
        name: "Orgánulos rodeados por membranas",
        accept: "eukaryotic",
        target: "eucariotas",
      },
      {
        id: "fisión_binaria",
        name: "Fisión binaria",
        accept: "prokaryotic",
        target: "procariotas",
      },
      {
        id: "mitosis",
        name: "Mitosis",
        accept: "eukaryotic",
        target: "eucariotas",
      },
      {
        id: "ribosomas",
        name: "Ribosomas",
        accept: "both",
        target: "ambas",
      },
      {
        id: "adn",
        name: "ADN",
        accept: "both",
        target: "ambas",
      },
      {
        id: "células_humanas",
        name: "Células humanas",
        accept: "eukaryotic",
        target: "eucariotas",
      },
      {
        id: "pueden_vivir_en_ambientes_extremos",
        name: "Pueden vivir en ambientes extremos",
        accept: "prokaryotic",
        target: "procariotas",
      },
    ],
    dropZones: [
      {
        id: "prokaryotic",
        name: "prokaryotic",
        altText:
          "Área para colocar las características de las células procariotas",
        text: "Procariotas",
        label:
          "Área para colocar las características de las células procariotas",
      },
      {
        id: "both",
        name: "both",
        altText: "Área para colocar las características de ambas células",
        text: "Ambas",
        label: "Área para colocar las características de ambas células",
      },
      {
        id: "eukaryotic",
        name: "eukaryotic",
        altText:
          "Área para colocar las características de las células eucariotas",
        text: "Eucariotas",
        label:
          "Área para colocar las características de las células eucariotas",
      },
    ],
    dropRegionDetail: "Área para colocar",
    droppableAltText: ["Procariotas", "Ambas", "Eucariotas"],
    colorHeader: ["Procariotas", "Ambas", "Eucariotas"],
    reward: {
      header: globalConfig.completionPopup.heading,
      instruction: "Has completado la simulación.",
      buttonText: globalConfig.buttonLabels.reset,
    },
  },

  // buttonLabels: { ...globalConfig.buttonLabels },
  // completionPopup: {
  //   ...globalConfig.completionPopup,
  //   content: "You have correctly sorted all the objects.",
  // },

  onDropText: "Palabra clave -1- colocada en el espacio -2-",
  startButton: globalConfig.buttonLabels.start,
  buttonClose: globalConfig.buttonLabels.close,
  buttonNext: globalConfig.buttonLabels.next,
  buttonFinish: globalConfig.buttonLabels.finish,
  resetLiveText: globalConfig.resetLiveText,
  StartUpInfo: {
    buttonContinueText: globalConfig.buttonLabels.start,
    buttonContinueLabel: globalConfig.buttonLabels.start,
    content: `Arrastra y coloca cada característica en el espacio correcto del diagrama de Venn: procariotas, eucariotas o ambas.`,
  },
  header: {
    buttonReset: globalConfig.buttonLabels.reset,
    buttonInfo: globalConfig.buttonLabels.info,
  },
  toastMsg: {
    correct: globalConfig.correctToastMessage,
    incorrect: globalConfig.incorrectToastMessage,
  },
  info: {
    header: "Instructions",
    content:
      "¡Clasifica las características en los espacios correctos del diagrama de Venn!",
    buttonContinueText: globalConfig.buttonLabels.close,
    buttonContinueLabel: globalConfig.buttonLabels.close,
  },
  reset: {
    header: "",
    content: globalConfig.resetPopupText,
    resetButtonText: globalConfig.buttonLabels.yes,
    resetButtonLabel: globalConfig.buttonLabels.yes,
    buttonContinueText: globalConfig.buttonLabels.no,
    buttonContinueLabel: globalConfig.buttonLabels.no,
  },
  activityHeading:
    "Los usuarios arrastrarán y soltarán varias palabras clave en el diagrama de Venn que compara y contrasta las células procariotas y eucariotas.",
  draggable: "Elemento arrastrable",
};

export default data;
