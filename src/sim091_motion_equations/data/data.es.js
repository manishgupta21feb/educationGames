import globalConfig from "../../app/data";
import curved from "../assets/videos/curved.mp4";
import straight from "../assets/videos/straight.mp4";
const buttonLabels = { ...globalConfig.buttonLabels };

const data = {
  buttonNo: "No",
  buttonPlay: "Reproducir",
  buttonLabelsData: { ...globalConfig.buttonLabels },
  buttonYes: buttonLabels.yes,
  infoText: buttonLabels.info,
  resetText: buttonLabels.reset,
  buttonStart: buttonLabels.start,
  buttonClose: buttonLabels.close,
  resetConfirmationText: globalConfig.resetLiveText,
  currentExperimentNumber: 0,
  instructionBoxContent:
    "Un estudiante deja caer un balón desde la ventana de un autobús. Compara las perspectivas del estudiante y del espectador cuando el autobús está parado y cuando está en movimiento.",
  InfoBoxContent:
    "Un estudiante está a punto de dejar caer un balón desde la ventana de un autobús mientras un espectador lo observa. Selecciona si el autobús está parado o en movimiento y luego pulsa «Reproducir» para ver el balón caer desde la perspectiva elegida.",

  equationOptions: [
    {
      id: "stationary",
      disabled: false,
      text: "Autobús parado",
      label: "Autobús parado",
    },
    {
      id: "moving",
      disabled: false,
      text: "Autobús en movimiento",
      label: "Autobús en movimiento",
    },
  ],

  observationsData: [
    {
      id: "stationary",
      classes: "curved",
      videoSrc: straight,
      isPlayed: false,
      buttonLabels: "Autobús parado",
      text: "Autobús parado",
      experimentName: "Autobús parado",

    
      isDisable: false,
      liveText:
        "Primer plano de una persona que observa un autobús escolar al fondo. Un estudiante deja caer un balón desde la segunda ventana del autobús.",
    },
    {
      id: "moving",
      classes: "straight",
      text: "Autobús en movimiento",
      videoSrc: curved,
      isPlayed: false,
      buttonLabels: "Autobús en movimiento",
      experimentName: "Autobús en movimiento",
     
      isDisable: false,

      liveText:
        "Primer plano de una persona que observa un autobús escolar al fondo. Un estudiante deja caer un balón desde la segunda ventana del autobús mientras este se mueve.",
    },
  ],

  resetMsgContent: globalConfig.resetPopupText,
  resetLiveText: globalConfig.resetLiveText,

  imagealt:
    "Primer plano de una persona que observa un autobús escolar al fondo. Un estudiante deja caer un balón desde la segunda ventana del autobús.",

  mainHeading:
    "Un estudiante deja caer un balón desde la ventana de un autobús. Selecciona si el autobús está parado o en movimiento. Pulsa «Reproducir» para ver la perspectiva del estudiante y del espectador respecto a la caída del balón.",
  activityHeading:
    "Los estudiantes explorarán cómo se relaciona el marco de referencia con la velocidad y el desplazamiento.",

  messages: [
    {
      type: "reset",
      resetButtonText: buttonLabels.yes,
      content: globalConfig.resetPopupText,
    },
  ],
};

export default data;
