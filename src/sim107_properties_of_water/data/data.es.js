import globalConfig from "../../app/data/data.es";
const buttonLabels = { ...globalConfig.buttonLabels };
import video from "../assets/videos/tree_animation.mp4";

const data = {
  buttonNo: buttonLabels.no,
  buttonYes: buttonLabels.yes,
  infoText: buttonLabels.info,
  resetText: buttonLabels.reset,
  buttonNext: buttonLabels.next,
  buttonStart: buttonLabels.start,
  buttonClose: buttonLabels.close,
  buttonFinish: buttonLabels.finish,
  buttonContinue: buttonLabels.continue,
  resetConfirmationText: globalConfig.resetLiveText,
  instructionBoxContent:
    "¡Hola! Vamos a explorar el área del estanque para aprender sobre las propiedades del agua.",
  InfoBoxContent:
    "Haz clic sobre los objetos etiquetados en el estanque para aprender más sobre las propiedades del agua.",
  resetMsgContent: globalConfig.resetPopupText,

  videoData: {
    srNo: "1",
    id: "Ques1",
    videoSrc: video,
    liveAlt:
      "Un árbol de cuyo tronco sale un corte transversal que muestra las estructuras internas del árbol. Por el tronco suben moléculas de agua H₂O.",
    alt: "Un árbol de cuyo tronco sale un corte transversal que muestra las estructuras internas del árbol.",
  },

  mcqData: [
    {
      id: 1,
      imageClass: "spiderweb-image",
      imageAlt: "Una telaraña con gotitas de agua sobre un fondo verde.",
    },
    {
      id: 3,
      imageClass: "insect-image",
      imageAlt:
        "Un insecto marrón con alas grises parado sobre el agua azul de un estanque.",
    },
  ],

  submitAnswer: buttonLabels.submitAnswer,
  resetLiveText: globalConfig.resetLiveText,
  rightMsg: globalConfig.correctToastMessage,
  wrongMsg: globalConfig.incorrectToastMessage,

  mainScreenHeading:
    "En todas partes del mundo hay agua. El agua es un compuesto con propiedades interesantes. Tres de ellas son la adhesión, la cohesión y la tensión superficial. La <b>adhesión</b> es la unión de moléculas que pertenecen a sustancias distintas. La <b>cohesión</b> es la unión de moléculas que son del mismo tipo. La <b>tensión superficial</b> mide la capacidad que tiene la superficie de un líquido para resistir una fuerza hacia abajo. Veamos estas propiedades del agua en distintas partes del estanque. Haz clic en cada elemento para aprender más sobre cada una de ellas.",

  hotspotData: [
    {
      id: 0,
      className: "outdoor-screen",
      altText:
        "Un estanque azul, rodeado de plantas y pasto, con árboles a un lado. Entre las plantas hay una telaraña. En el estanque hay un insecto.",
      hotspots: [
        {
          id: "spiderweb",
          altText: "Telaraña",
          serNo: 1,
          text: "Telaraña",
          class: "spi",
        },
        {
          id: "tree",
          altText: "Árbol",
          serNo: 2,
          text: "Árbol",
          class: "tre",
        },
        {
          id: "insect",
          altText: "Insecto",
          serNo: 3,
          text: "Insecto",
          class: "ins",
        },
      ],
      ariaLabel: "Outdoor area",
    },
  ],

  mainScreenMCQ: [
    {
      id: 1,
      answer: "adhesion",
      questionText:
        " Si miras de cerca esta telaraña, verás que en ella hay muchas gotitas de agua. Las gotitas pueden permanecer pegadas a la telaraña. Cuando la masa de la gotita de agua aumenta demasiado, la gravedad la atrae hacia abajo. Según la información dada, ¿qué propiedad del agua es esta: adhesión, cohesión o tensión superficial?",
      assetType: "",
      assetUrl: "",
      label: "Spiderweb",
      ariaLabel: "Spiderweb",
      className: "spiderweb",
    },
    {
      id: 2,
      answer: "cohesion",
      questionText:
        " Dentro de este árbol, puedes ver un primer plano de las moléculas de agua que se mueven en su interior. Para subir, las moléculas de agua se pegan unas a otras por medio de sus moléculas de hidrógeno. Esto permite que las moléculas de agua se mantengan unidas. Según la información dada, ¿qué propiedad del agua es esta: adhesión, cohesión o tensión superficial?",
      assetType: "Image",
      assetUrl: "",
      label: "Tree",
      ariaLabel: "Tree",
      className: "tree",
    },
    {
      id: 3,
      answer: "surface-tension",
      questionText:
        "Este mosquito es capaz de posarse sobre la superficie del agua sin caer adentro. Las moléculas de hidrógeno del agua se pegan unas a otras. Sin embargo, como en la superficie del agua no hay moléculas de hidrógeno a las que puedan unirse, se manifiesta esta propiedad. Según la información dada, ¿qué propiedad del agua es esta: adhesión, cohesión o tensión superficial?",
      assetType: "",
      assetUrl: "",
      label: "Insect",
      ariaLabel: "Insect",
      className: "insect",
    },
  ],

  answerOptions: [
    {
      id: "adhesion",
      disabled: false,
      text: "Adhesión",
      label: "Adhesión",
    },
    {
      id: "cohesion",
      disabled: false,
      text: "Cohesión",
      label: "Cohesión",
    },
    {
      id: "surface-tension",
      disabled: false,
      text: "Tensión superficial",
      label: "Tensión superficial",
    },
  ],

  completionPopup: {
    ...globalConfig.completionPopup,
    content: "Has completado exitosamente esta simulación.",
  },
  transitionPopup: {
    ...globalConfig.transitionPopup,
    content: "",
  },
  messages: [
    {
      type: "reset",
      resetButtonText: buttonLabels.yes,
      buttonContinueText: buttonLabels.no,
      content: globalConfig.resetPopupText,
    },
  ],
  activityHeading:
    "Los estudiantes observarán un estanque para aprender sobre la cohesión, la adhesión y la tensión superficial.",
  buttonLabels: { ...globalConfig.buttonLabels },
  label: "Molécula de agua",
};

export default data;
