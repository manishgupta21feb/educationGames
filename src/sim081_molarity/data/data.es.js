import commonData from "../../app/data";
import questionVideo1 from "../assets/videos/video1.mp4";
import questionVideo2 from "../assets/videos/video2.mp4";
import questionVideo3 from "../assets/videos/video3.mp4";
import questionVideo4 from "../assets/videos/Video4.mp4";
import questionVideo5 from "../assets/videos/video5.mp4";
import questionVideo6 from "../assets/videos/video6new.mp4";

const info = {
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: "Start",
  buttonContinueLabel: "Start",
  content:
    "La molaridad (M) se define como el número de moles de soluto dividido entre los litros de solución. La molaridad mide la cantidad de soluto en una solución y cambia cuando se altera la cantidad de solvente. En esta simulación, ajustarás la cantidad de solvente para obtener la molaridad deseada.",
};

const data = {
  greetingMessage: "Hola",
  nextScreenButtonText: "siguiente pantalla",
  backScreenButtonText: "pantalla trasera",

  instruction:
    "Intenta diluir la solución y determinar la cantidad necesaria de solvente para obtener la molaridad deseada.",
  buttonLabels: { ...commonData.buttonLabels },
  buttonContinue: commonData.buttonLabels.continue,
  finish: commonData.buttonLabels.finish,
  questionsData: {
    currentMolarity: "Molaridad actual",
    currentVolume: "Molaridad actual",
    desiredMolarity: "Molaridad actual",
    amountSolvent: "Cantidad necesaria de solvente (mL)",
  },

  labelOne: "Cantidad de solvente aumentada (mL)",
  labelTwo: "Cantidad de solvente disminuida (mL)",
  increment: "Aumentar el valor",
  decrement: "Disminuir el valor",

  labelhundread: "100",
  labeleighty: "80",
  labelsixty: "60",
  labelforty: "40",
  labeltwenty: "20",

  incrementLiveText: "El valor de la cantidad necesaria de solvente aumenta a ",
  decrementLiveText:
    "El valor de la cantidad necesaria de solvente disminuye a ",
  dialogData: {
    start: {
      ...info,
      buttonContinueText: commonData.buttonLabels.start,
      buttonContinueLabel: commonData.buttonLabels.start,
    },
    info: {
      ...info,
      buttonClasses: "",
      buttonContinueText: commonData.buttonLabels.close,
      buttonContinueLabel: commonData.buttonLabels.close,
      content: "Ajusta el regulador para añadirle agua a la solución.",
    },
    correct: {
      ...info,
      buttonContinueText: commonData.buttonLabels.continue,
      buttonContinueLabel: commonData.buttonLabels.continue,
    },
    incorrect: {
      ...info,
      dialogType: "warning",
      buttonContinueText: commonData.buttonLabels.close,
      buttonContinueLabel: commonData.buttonLabels.close,
    },
  },

  completionPopup: {
    ...commonData.completionPopup,
    content: "Has creado exitosamente las soluciones deseadas. ¡Bien hecho!",
  },

  molerityData: [
    {
      srNo: "1",
      id: "question1",
      answer: "30",
      videoSrc: questionVideo1,
      currentMolarity: "2M",
      currentVolume: "30 mL",
      desiredMolarity: "1M",
      step: 5,
      alt: "Un vaso de precipitados transparente que contiene 30 mL de líquido a una concentración de 2 M sobre una mesa de laboratorio.",
      altVideoPlay:
        "Un vaso de precipitados transparente que contiene 60 mL de líquido a una concentración de 2 M sobre una mesa de laboratorio.",
      altAfterPlay:
        "Un vaso de precipitados transparente que contiene 60 mL de líquido a una concentración de 2 M sobre una mesa de laboratorio.",
    },
    {
      srNo: "2",
      id: "question2",
      answer: "4",
      videoSrc: questionVideo2,
      currentMolarity: "1.75M",
      currentVolume: "25 mL",
      desiredMolarity: "1.5M",
      step: 2,
      alt: "Un vaso de precipitados transparente que contiene 25 mL de líquido a una concentración de 1.75M sobre una mesa de laboratorio.",
      altVideoPlay:
        "Un vaso de precipitados transparente que contiene 29 mL de líquido a una concentración de 1.75M sobre una mesa de laboratorio.",
      altAfterPlay:
        "Un vaso de precipitados transparente que contiene 29 mL de líquido a una concentración de 1.75M sobre una mesa de laboratorio.",
    },
    {
      srNo: "3",
      id: "question3",
      answer: "25",
      videoSrc: questionVideo3,
      currentMolarity: "0.5M",
      currentVolume: "58 mL",
      desiredMolarity: "0.35M",
      step: 5,
      alt: "Un vaso de precipitados transparente que contiene 58 mL de líquido a una concentración de 0.5M sobre una mesa de laboratorio.",
      altVideoPlay:
        "Un vaso de precipitados transparente que contiene 83 mL de líquido a una concentración de 0.5M sobre una mesa de laboratorio.",
      altAfterPlay:
        "Un vaso de precipitados transparente que contiene 83 mL de líquido a una concentración de 0.5M sobre una mesa de laboratorio.",
    },
    {
      srNo: "4",
      id: "question4",
      answer: "24",
      videoSrc: questionVideo4,
      currentMolarity: "0.75M",
      currentVolume: "48 mL",
      desiredMolarity: "0.50M",
      step: 4,
      alt: "Un vaso de precipitados transparente que contiene 48 mL de líquido a una concentración de 0.75M sobre una mesa de laboratorio.",
      altVideoPlay:
        "Un vaso de precipitados transparente que contiene 72 mL de líquido a una concentración de 0.75M sobre una mesa de laboratorio.",
      altAfterPlay:
        "Un vaso de precipitados transparente que contiene 72 mL de líquido a una concentración de 0.75M sobre una mesa de laboratorio.",
    },
    {
      srNo: "5",
      id: "question5",
      answer: "7",
      videoSrc: questionVideo5,
      currentMolarity: "6M ",
      currentVolume: "35 mL",
      desiredMolarity: "5M",
      step: 1,
      alt: "Un vaso de precipitados transparente que contiene 35 mL de líquido a una concentración de 6M sobre una mesa de laboratorio.",
      altVideoPlay:
        "Un vaso de precipitados transparente que contiene 42 mL de líquido a una concentración de 6M sobre una mesa de laboratorio.",
      altAfterPlay:
        "Un vaso de precipitados transparente que contiene 42 mL de líquido a una concentración de 6M sobre una mesa de laboratorio.",
    },
    {
      srNo: "6",
      id: "question6",
      answer: "4",
      videoSrc: questionVideo6,
      currentMolarity: "2M ",
      currentVolume: "25 mL",
      desiredMolarity: "1.75M",
      step: 1,
      alt: "Un vaso de precipitados transparente que contiene 25 mL de líquido a una concentración de 2M sobre una mesa de laboratorio.",
      altVideoPlay:
        "Un vaso de precipitados transparente que contiene 29 mL de líquido a una concentración de 2M sobre una mesa de laboratorio.",
      altAfterPlay:
        "Un vaso de precipitados transparente que contiene 29 mL de líquido a una concentración de 2M sobre una mesa de laboratorio.",
    },
  ],

  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: "No hay suficiente solvente. ¡Inténtalo otra vez!",
  partiallyIncorrectToastMessage:
    "Hay demasiado solvente. ¡Inténtalo otra vez!",
  resetPopupText: commonData.resetPopupText,
  resetText: commonData.buttonLabels.reset,
  closeButton: commonData.buttonLabels.close,
  startButton: commonData.buttonLabels.start,
  resetPopupText: commonData.resetPopupText,
  submitAnswer: commonData.buttonLabels.submitAnswer,
  pageHeading:
    "Los estudiantes calcularán la cantidad necesaria de solvente para diluir una solución.",
  buttonYes: commonData.buttonLabels.yes,
  buttonNo: commonData.buttonLabels.no,
};

export default data;
