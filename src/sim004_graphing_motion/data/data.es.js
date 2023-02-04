import globalConfig from "../../app/data";
const buttonLabels = { ...globalConfig.buttonLabels };

import starImage from "../assets/images/star.png";
import circleImage from "../assets/images/circle.png";
import triangleImage from "../assets/images/triangle.png";
import pentagonImage from "../assets/images/pentagon.png";
import rectangleImage from "../assets/images/rectangle.png";

const data = {
  finishButton: {
    text: buttonLabels.finish,
    label: buttonLabels.finish,
    ariaLabel: buttonLabels.finish,
  },

  accelerationDataList: {
    listitems: [
      { id: "1", value: -5, label: "-5" },
      { id: "2", value: -4, label: "-4" },
      { id: "3", value: -3, label: "-3" },
      { id: "4", value: -2, label: "-2" },
      { id: "5", value: -1, label: "-1" },
      { id: "6", value: 0, label: "0" },
      { id: "7", value: 1, label: "1" },
      { id: "8", value: 2, label: "2" },
      { id: "9", value: 3, label: "3" },
      { id: "10", value: 4, label: "4" },
      { id: "11", value: 5, label: "5" },
    ],
  },

  distanceDataList: {
    listitems: [
      { id: "1", value: 1, label: "1" },
      { id: "2", value: 2, label: "2" },
      { id: "3", value: 3, label: "3" },
      { id: "4", value: 4, label: "4" },
      { id: "5", value: 5, label: "5" },
    ],
  },

  timeDataList: {
    listitems: [
      { id: "1", value: 1, label: "1" },
      { id: "2", value: 2, label: "2" },
      { id: "3", value: 3, label: "3" },
      { id: "4", value: 4, label: "4" },
      { id: "5", value: 5, label: "5" },
    ],
  },

  radioOption: ["left"],
  animationDirection: ["animateToleft", "animateToRight"],
  disable: ["disable"],
  buttonReset: buttonLabels.reset,
  buttonInfo: buttonLabels.info,
  buttonClose: buttonLabels.close,
  messages: [
    {
      type: "reset",
      resetButtonText: buttonLabels.yes,
      buttonContinueText: buttonLabels.no,
      content: globalConfig.resetPopupText,
    },
  ],
  carPositionText: "Posición del carro a",
  controlsHeading: "Control de programación",
  directionHeadingText: "Dirección",
  distanceHeadingText: "Distancia (m)",
  timeHeadingText: "Tiempo (s)",
  accelerationHeadingText: "Aceleración",
  playButtonText: "Reproducir el viaje ",
  instructionBoxHeader: "Instruction",
  instructionBoxContent1:
    "Usa la interfaz para mover el carro y observa cómo los diferentes tipos de movimiento afectan su recorrido.",
  instructionBoxContent2: "Para comenzar, ¡programa tu carro!",
  infoText:
    "Selecciona la distancia que recorrerá el carro para programar su movimiento. Luego, elige la aceleración o el tiempo que le tomará al carro recorrer esa distancia.",
  // "Program the car to move by selecting the distance or acceleration and how long a period of time this takes.",
  buttonStart: buttonLabels.start,
  completionPopup: {
    ...globalConfig.completionPopup,
    content: "Has completado todos los viajes.",
  },
  rightMsg: `¡Viaje -1- completado!`,
  keepGoing: "¡Continúa! Programa el siguiente viaje.",
  buttonPlay: "Reproducir el viaje -1-",
  buttonCompleted: "Viajes completados",
  buttonPlayProgress: "Viaje -1- en curso...",
  carPositionLiveText: "el carro está a -1- metros.",
  min: -5,
  max: 5,
  GraphHeading: "Posición vs. tiempo",
  GraphHeadingLabel: "Posición versus tiempo",
  trip1: "Viaje 1",
  trip2: "Viaje 2",
  trip3: "Viaje 3",
  trip4: "Viaje 4",
  trip5: "Viaje 5",
  trip1Label: "Un círculo azul",
  trip2Label: "Un cuadrado naranja",
  trip3Label: "Un triángulo verde",
  trip4Label: "Un pentágono negro",
  trip5Label: "Una estrella roja",
  backgroundColor: "rgba(75,192,192,0.4)",
  borderColor: "rgba(0,86,179,1)",
  borderCapStyle: "butt",
  borderJoinStyle: "miter",
  pointBorderColor: "rgba(0,86,179,1)",
  pointBackgroundColor: "rgba(0,86,179,1)",
  pointHoverBackgroundColor: "rgba(0,86,179,1)",
  pointHoverBorderColor: "rgba(220,220,220,1)",
  type: "line",
  fontFamily: "TisaPro",
  XlabelString: "Tiempo (s)",
  YlabelString: "Posición (m)",
  resetHeaderContent: "Reset Simulation",
  resetMsgContent: globalConfig.resetPopupText,
  startButton: buttonLabels.start,
  buttonYes: buttonLabels.yes,
  buttonNo: buttonLabels.no,
  resetConfirmationText: globalConfig.resetLiveText,
  graphLabel: "Gráfico que muestra el movimiento del carro",
  graphRole: "img",

  ariaLabels: {
    carAt: "el carro está a -1- metros",
    meters: "metros",
    road: "Una carretera en la que puede viajar un carro",
    car: "Un carro rojo que viaja hacia la",
    distance: "El carro no se movió. La distancia total recorrida",
    carNotMoved: "El carro no se movió",
  },

  slidersLabels: {
    time: {
      ariaLabel: "Tiempo",
      valueLabel1: "segundo",
      valueLabel2: "segundos",
      title: "Tiempo en segundos",
    },
    distance: {
      valueLabel1: "metro",
      valueLabel2: "metros",
      ariaLabel: "distancia",
      title: "Distancia en metros",
    },
    acceleration: {
      ariaLabel: "aceleración",
      valueLabel: "metros por segundo cuadrado",
      title: "Aceleración en metros por segundo cuadrado",
    },
  },

  radiobuttonLabel: {
    time: {
      label: "Tiempo (s)",
      alt: "Tiempo en segundos",
    },
    acceleration: {
      label: "Aceleración (m/s<sup>2</sup>)",
      alt: "Aceleración en metros por segundo cuadrado",
    },
  },

  pointerImages: {
    circle: circleImage,
    pentagon: pentagonImage,
    rectangle: rectangleImage,
    star: starImage,
    triangle: triangleImage,
  },
  directions: [
    { id: "left", text: "Izquierda" },
    { id: "right", text: "Derecha" },
  ],
  controlInstructionsText:
    "Selecciona el valor de la distancia y el valor del tiempo o de la aceleración para programar su movimiento.",
  chartDataSetText: "Viaje -1- toma -2- segundos y -3- metros",
  ...buttonLabels,
};

export default data;
