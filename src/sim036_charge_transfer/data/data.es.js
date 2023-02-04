import globalCommonData from "../../app/data/data.es";
import questionVideo2 from "../assets/videos/induction_1.mp4";
import questionVideo4 from "../assets/videos/induction_2.mp4";
import questionVideo1 from "../assets/videos/conduction_1.mp4";
import questionVideo5 from "../assets/videos/conduction_2.mp4";
import questionVideo3 from "../assets/videos/polarization_1.mp4";
import questionVideo6 from "../assets/videos/polarization_2.mp4";

const data = {
  equationsData: [
    {
      srNo: "1",
      id: "question1",
      answer: "conduction",
      videoSrc: questionVideo1,
      alt: "Una varilla de metal con cargas positivas negras toca una esfera de metal con cargas positivas rojas. Se transfiere una carga por contacto directo.",
    },
    {
      srNo: "2",
      id: "question2",
      answer: "induction",
      videoSrc: questionVideo2,
      alt: "Una varilla de vidrio con cargas negativas azules sobre dos esferas de metal, cada una de ellas con una carga negativa. Se induce una carga sin contacto directo.",
    },
    {
      srNo: "3",
      id: "question3",
      answer: "polarization",
      videoSrc: questionVideo3,
      alt: "Un peine marrón con cargas negativas negras toca un papel rosa con cargas positivas y negativas negras. Se induce una carga en el papel por contacto con el peine.",
    },
    {
      srNo: "4",
      id: "question4",
      answer: "induction",
      videoSrc: questionVideo4,
      alt: "Un globo rojo con cargas negativas negras se acerca a dos esferas de metal, cada una de ellas con una carga negativa. Se induce una carga sin contacto directo.",
    },
    {
      srNo: "5",
      id: "question5",
      answer: "conduction",
      videoSrc: questionVideo5,
      alt: "Una varilla de vidrio con cargas positivas azules toca una esfera de metal con cargas negativas rojas. Se transfieren cargas a la esfera de metal por contacto directo.",
    },
    {
      srNo: "6",
      id: "question6",
      answer: "polarization",
      videoSrc: questionVideo6,
      alt: "Un globo rojo con cargas negativas negras y un papel rosa con cargas positivas y negativa negras; se induce una carga en el papel por contacto con el globo.",
    },
  ],

  equationOptions: [
    {
      id: "induction",
      disabled: false,
      text: "Inducción",
      label: "Inducción",
    },
    {
      id: "conduction",
      disabled: false,
      text: "Conducción",
      label: "Conducción",
    },
    {
      id: "polarization",
      disabled: false,
      text: "Polarización",
      label: "Polarización",
    },
  ],

  buttonLabels: {
    ...globalCommonData.buttonLabels,
  },
  completionScreen: {
    ...globalCommonData.completionPopup,
    content: "Has completado la simulación.",
  },

  resetLiveText: globalCommonData.resetLiveText,
  resetMsgContent: globalCommonData.resetPopupText,
  questionHeading: "Pregunta -1- de -2-",
  correctToastMessage: globalCommonData.correctToastMessage,
  incorrectToastMessage: globalCommonData.incorrectToastMessage,
  reactionTypeQuestion:
    "Determina el tipo de carga según la interacción de los materiales cargados que se muestran.",
  infoBoxContent:
    "¡Examina e identifica los diferentes tipos de transferencias de carga que se muestran!",
  instructionBoxContent:
    "Cuando los objetos se cargan, se mueven electrones entre ellos. Esto puede suceder por inducción, conducción o polarización. En esta simulación, investigarás qué tipo de transferencia de carga ocurre entre diferentes materiales.",
};

export default data;
