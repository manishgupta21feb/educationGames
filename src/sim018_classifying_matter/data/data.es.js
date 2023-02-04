import globalData from "../../app/data/data.es";

const info = {
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: "Comenzar",
  buttonContinueLabel: "Comenzar",
  content:
    "Bienvenido a la cocina. Echemos un vistazo para determinar qué tipos de objetos hay.",
};

const infoString = [
  "Lee la oración y selecciona el objeto que se describe.",
  "Un <strong>elemento</strong> es una sustancia pura compuesta por el mismo tipo de átomo.",
  "Un <strong>compuesto</strong> se forma mediante el enlace químico de dos o más elementos.",
  "Una <strong>mezcla heterogénea</strong> tiene una distribución irregular de sus componentes. Las partes individuales se pueden separar.",
  "Una <strong>mezcla homogénea</strong> tiene una distribución uniforme de sus componentes. Cada una de sus partes es igual que las demás.",
];

const RawTextData = {
  classifyingMatterContent: [
    {
      id: 1,
      label: "Cuchara de oro",
      alt: "Cuchara de oro",
      className: "gold-spoon",
      instructions: [
        "La materia se puede clasificar como un elemento, un compuesto o una mezcla. Un elemento es una sustancia pura formada por el mismo tipo de átomo. Echa un vistazo a la cocina. ¿Qué objeto crees que sea un elemento?",
      ],
      answerText: [
        "¡Correcto! Esta cuchara de oro representa un elemento porque está hecha solamente de oro. Cada uno de sus átomos es de oro, un elemento cuyo símbolo en la tabla periódica es «Au».",
      ],
    },
    {
      id: 2,
      label: "Vaso de agua",
      alt: "Vaso de agua",
      className: "glass-of-water",
      instructions: [
        "Ahora que has encontrado el objeto que representa un elemento en la cocina, ¿puedes encontrar el que representa un compuesto? Un <strong>compuesto</strong> se forma mediante el enlace químico de dos o más elementos. Los compuestos son una combinación de elementos. ¿Qué objeto de la cocina crees que represente un compuesto?",
      ],
      answerText: [
        "¡Correcto! El agua representa un compuesto porque está formada por dos elementos: oxígeno e hidrógeno. Cuando dos átomos de hidrógeno se combinan químicamente con un átomo de oxígeno, el resultado es una molécula de agua (H<sub>2</sub>O).",
      ],
    },
    {
      id: 3,
      label: "Jugo de naranja",
      alt: "Vaso de jugo de naranja",
      className: "orange-juice",
      instructions: [
        "Recuerda que la materia se puede clasificar como un elemento, un compuesto o una mezcla. Hasta ahora has descubierto que el oro es un elemento y que el agua es un compuesto. Nos quedan dos objetos por describir: el cereal y el jugo de naranja.",
        "Hay dos tipos diferentes de mezclas. Una <strong>mezcla homogénea</strong> tiene una distribución uniforme de sus componentes; cada una de sus partes es igual que las demás. Una <strong>mezcla heterogénea</strong> tiene una distribución irregular de sus componentes; las sustancias que la componen nunca se mezclan del todo y es posible separarlas. ¿Qué objeto crees que represente una mezcla homogénea?",
      ],
      answerText: [
        "¡Correcto! El jugo de naranja se considera una mezcla homogénea. La razón por la cual es una mezcla homogénea es porque es una combinación de pulpa sólida y jugo de naranja líquido distribuidos de manera uniforme.",
      ],
    },
    {
      id: 4,
      label: "Cereal",
      className: "cereals",
      alt: "Un tazón de cereal. El cereal incluye pequeños malvaviscos de colores y crujientes trozos de cereal.",
      instructions: [
        "Ahora que has identificado la mezcla homogénea, es hora de buscar la mezcla heterogénea. Recuerda que una <strong>mezcla heterogénea</strong> tiene una distribución irregular de sus componentes. Las sustancias que la componen nunca se mezclan del todo y es posible separarlas. ¿Qué objeto crees que represente una mezcla heterogénea?",
      ],
      answerText: [
        "¡Correcto! El cereal se considera una <strong>mezcla heterogénea</strong>. La razón por la cual es una mezcla heterogénea es porque está formado por diferentes componentes que se pueden separar físicamente. En este caso, puedes sacar del tazón los pedazos que quieras. Por ejemplo, puedes comerte todos los malvaviscos y dejar los trozos de cereal. Una mezcla heterogénea siempre tiene diferentes componentes que se pueden separar físicamente.",
      ],
    },
  ],

  dialogData: {
    start: {
      ...info,
      buttonContinueText: "Comenzar",
      buttonContinueLabel: "Comenzar",
    },
    info: {
      ...info,
      header: "",
      buttonContinueText: "Cerrar",
      buttonContinueLabel: "Cerrar",
      buttonClasses: "",
      content: infoString,
    },
    correct: {
      ...info,
      buttonContinueText: "Continuar",
      buttonContinueLabel: "Continuar",
    },
  },
  kitchenItems: [
    { id: "gold_spoon", text: "Cuchara de oro", className: "gold-spoon" },
    {
      id: "glass_of_water",
      text: "Vaso de agua",
      className: "glass-of-water",
    },
    { id: "orange_juice", text: "Jugo de naranja", className: "orange-juice" },
    { id: "cereals", text: "Cereal", className: "cereals" },
  ],

  mcqQuestionText: "Selecciona el término que mejor corresponda a la imagen.",
  mcqOptions: [
    "Elemento",
    "Compuesto",
    "Mezcla homogénea",
    "Mezcla heterogénea",
  ],

  mcqData: [
    {
      id: 1,
      label: "Sal (NaCl)",
      answer: "Compuesto",
      imageClass: "compound",
      imageAlt: "Sal de mesa en un salero con un montón de sal al lado.",
    },
    {
      id: 2,
      label: "Helado",
      answer: "Mezcla homogénea",
      imageClass: "homogeneous-mixture",
      imageAlt: "Tazón blanco con tres bolas de helado rosa.",
    },
    {
      id: 3,
      answer: "Elemento",
      imageClass: "element",
      label: "Aluminio (Al)",
      imageAlt: "Lata de refresco hecha de aluminio.",
    },
    {
      id: 4,
      label: "Galletas con trocitos de chocolate",
      answer: "Mezcla heterogénea",
      imageClass: "heterogeneous-mixture",
      imageAlt:
        "Un plato gris en el que hay tres galletas con trocitos de chocolate.",
    },
  ],

  questionHeading: "Pregunta -1- de 4.",

  transitionPopup: {
    ...globalData.transitionPopup,
    content:
      "Ahora que has explorado los elementos, los compuestos y las mezclas, demuestra lo que sabes.",
  },

  completionPopup: {
    ...globalData.completionPopup,
    content:
      "Has contestado todas las preguntas sobre la clasificación de la materia.",
  },

  resetText: [
    {
      type: "reset",
      resetButtonText: "Sí",
      buttonContinueText: "No",
      content: "¿Quieres reiniciar?",
    },
  ],

  rightMsg: "¡Es correcto!",
  wrongMsg: "No es del todo correcto. ¡Inténtalo otra vez!",
  submitAnswer: "Enviar respuesta",
  buttonFinish: "Terminar",
  buttonNext: "Siguiente",
  buttonClose: "Cerrar",
  reset: "Reiniciar",
  info: "Información",
  continueButton: "Continuar",
  // audioAriaLable:
  // "If you are using screen reader, turn off the audio button for better experience.",
  // audioPlay: "Audio On",
  // audioStop: "Audio Off",
  // selected: "Selected",
  // alreadySelected: "Already selected",
  resetLiveText: "Tu actividad se ha reiniciado.",
  screen1Heading:
    "Los estudiantes determinarán si cada tipo de materia es un elemento, un compuesto, una mezcla homogénea o una mezcla heterogénea.",
  fullViewBGAlt:
    "En el fondo se observa una cocina con aparatos y utensilios sobre la encimera.",
};

export default RawTextData;
