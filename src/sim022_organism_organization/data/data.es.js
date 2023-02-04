import esData from "../../app/data/data.es";

const info = {
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: esData.buttonLabels.start,
  buttonContinueLabel: esData.buttonLabels.start,
  content:
    "Hoy explorarás las diferentes partes de las que está formado Freezing, un pingüino emperador.",
};

const completionScreen = {
  content: "Has completado exitosamente esta simulación.",
  type: "positive",
  heading: esData.completionPopup.heading,
  buttonText: esData.buttonLabels.reset,
  ButtonLabel: esData.buttonLabels.reset,
  buttonClasses: "reset-white reverse icon",
};

const RawTextData = {
  ecosystemContent: [
    {
      id: 1,
      className: "organism-penguin",
      textContent:
        "Freezing es un pingüino emperador hembra al que le encanta vivir en la costa de la Antártica. Ella es un <b>organismo</b> vivo individual. Cualquier planta o animal individual se considera un <b>organismo</b>.",
      clickContent: "Haz clic sobre el <b>organismo</b>.",
      correctText:
        "<b>¡Correcto!</b> Freezing es el <b>organismo</b> individual. Ahora, pasemos al siguiente nivel de organización jerárquica: el sistema de órganos.",
      altText:
        "Una imagen de un pingüino parado en el centro con un fondo gris.",

      correctAnswer: ["penguin"],
      animals: [
        {
          id: "penguin",
          text: "Pingüino",
        },
      ],
    },
    {
      id: 2,
      className: "organism-population",
      textContent:
        "Aunque Freezing es un <b>organismo</b> individual, está formado por varios sistemas de órganos. Muchos de sus sistemas de órganos se parecen a los de los seres humanos. Al igual que nosotros, tiene un sistema esquelético, un sistema circulatorio y muchos otros sistemas de órganos. Su sistema circulatorio lleva oxígeno a todas las partes de su cuerpo a través de la sangre. Su sistema esquelético le proporciona estructura y soporte a su cuerpo.",
      clickContent: " Haz clic sobre los dos <b>sistemas de órganos</b>.",
      correctText:
        "<b>¡Correcto!</b> Los sistemas circulatorio y esquelético son solo dos de todos los <b>sistemas de órganos</b> que trabajan juntos para permitir el funcionamiento de un <b>organismo</b> individual. Ahora, pasemos al siguiente nivel de organización jerárquica: el órgano.",
      correctAnswer: ["skeletal-system", "circulatory-system"],
      altText:
        "Un diagrama que muestra el interior de un pingüino. Se observan los huesos del sistema esquelético, así como el corazón y los vasos sanguíneos del sistema circulatorio.",

      animals: [
        {
          id: "skeletal-system",
          text: "Sistema esquelético",
          liveText:
            "A la derecha del pingüino que muestra ambos sistemas del cuerpo, aparece un diagrama que solo muestra su sistema esquelético. Se observa la estructura ósea del pingüino.",
        },
        {
          id: "circulatory-system",
          text: "Sistema circulatorio",
          liveText:
            "A la derecha del pingüino que muestra ambos sistemas del cuerpo, aparece un diagrama que solo muestra su sistema circulatorio. Se observan el corazón y los vasos sanguíneos del pingüino.",
        },
      ],
    },
    {
      id: 3,
      className: "organism-community",
      textContent:
        "Cada <b>sistema de órganos</b> está formado por órganos diferentes. Al igual que en los seres humanos, los órganos que forman el sistema circulatorio de Freezing incluyen el corazón, los vasos sanguíneos y la sangre.",
      clickContent:
        "Haz clic en dos de los <b>órganos</b> principales del sistema circulatorio.",
      correctText:
        "<b>¡Correcto!</b> El corazón y los vasos sanguíneos son <b>órganos</b> individuales que trabajan juntos para formar un <b>sistema de órganos</b> (el sistema circulatorio). Ahora, pasemos al siguiente nivel de organización jerárquica: el tejido.",
      incorrectText:
        "<b>¡Incorrecto!</b> No hiciste clic en el tejido correcto. Haz clic en las tres <b>células</b> que forman el <b>tejido</b> muscular cardíaco.",
      correctAnswer: ["heart", "blood-vessels"],
      altText:
        "Un diagrama que muestra el corazón en el centro del pecho del pingüino. Del corazón salen vasos sanguíneos hacia las aletas, la cabeza, los riñones y las patas.",

      animals: [
        {
          id: "heart",
          text: "Corazón",
        },
        {
          id: "blood-vessels",
          text: "Vasos sanguíneos",
        },
      ],
    },
    {
      id: 4,
      className: "heart-system",
      textContent:
        "Cada <b>órgano</b> está formado por <b>tejidos</b> diferentes. Un <b>tejido</b> es una masa de células similares que desempeñan una función especializada.",
      clickContent: "Haz clic en los <b>tejidos</b> que forman el corazón.",
      correctText:
        "<b>¡Correcto!</b> El <b>tejido</b> sanguíneo, el <b>tejido</b> nervioso y el <b>tejido</b> muscular cardíaco trabajan juntos para formar un <b>órgano</b> (el corazón). Ahora, pasemos al siguiente nivel de organización jerárquica: la célula.",
      correctAnswer: ["blood-tissue", "cardiac-tissue", "nerve-tissue"],
      altText:
        "En el centro hay un diagrama del corazón. Se muestran los tres tipos de tejidos que forman el corazón: el tejido sanguíneo, el tejido nervioso y el tejido cardíaco.",

      animals: [
        {
          id: "blood-tissue",
          text: "Tejido sanguíneo",
        },
        {
          id: "cardiac-tissue",
          text: "Tejido cardíaco",
        },
        {
          id: "nerve-tissue",
          text: "Tejido nervioso",
        },
      ],
    },
    {
      id: 5,
      className: "heart-open",
      textContent:
        "Cada <b>tejido</b> está formado por <b>células</b> que desempeñan la misma función. La <b>célula</b> es la unidad estructural y funcional más elemental de los organismos vivos. Las células son tan pequeñas que a veces es difícil distinguirlas cuando se observa una muestra de tejido.",
      clickContent:
        "Haz clic en las <b>células</b> que forman el <b>tejido</b> muscular cardíaco.",
      correctText:
        "<b>¡Correcto!</b> Las <b>células</b> musculares cardíacas ayudan a formar el <b>tejido</b> muscular cardíaco.",
      incorrectText:
        "<b>¡Incorrecto!</b> No hiciste clic en el tejido correcto. Haz clic en las <b>células</b> que forman el <b>tejido</b> muscular cardíaco.",
      correctAnswer: ["cardiac-cells"],
      altText:
        "Un corte transversal del corazón que muestra que las células sanguíneas forman el tejido sanguíneo, las células nerviosas forman el tejido nervioso y las células musculares cardíacas forman el tejido muscular cardíaco.",
      animals: [
        {
          id: "blood-cells",
          text: "Células sanguíneas",
        },
        {
          id: "cardiac-cells",
          text: "Células musculares cardíacas",
        },
        {
          id: "nerve-cells",
          text: "Células nerviosas",
        },
      ],
    },
  ],

  dialogData: {
    start: {
      ...info,
      buttonContinueText: esData.buttonLabels.start,
      buttonContinueLabel: esData.buttonLabels.start,
    },
    info: {
      ...info,
      header: "",
      buttonContinueText: esData.buttonLabels.close,
      buttonContinueLabel: esData.buttonLabels.close,
      buttonClasses: "",
      content: "Lee el cuento provisto y sigue las instrucciones.",
    },
    correct: {
      ...info,
      dialogType: "positive",
      buttonContinueText: esData.buttonLabels.continue,
      buttonContinueLabel: esData.buttonLabels.continue,
    },
    incorrect: {
      ...info,
      dialogType: "warning",
      buttonContinueText: esData.buttonLabels.close,
      buttonContinueLabel: esData.buttonLabels.close,
    },
  },

  mcqQuestionText: "Selecciona el término que mejor corresponda a la pista.",
  mcqOptions: ["Sistema de órganos", "Tejido", "Célula", "Órgano", "Organismo"],

  mcqData: [
    {
      id: 1,
      ques: "Soy un grupo de tejidos que trabajan juntos para desempeñar una función. ¿Qué soy?",
      class: "organism-seal",
      answer: "órgano",
    },
    {
      id: 2,
      ques: "Soy la unidad más elemental de la vida. Cuando me combino con otras unidades como yo, formamos un tejido. ¿Qué soy?",
      class: "community",
      answer: "célula",
    },
    {
      id: 3,
      ques: "Soy un grupo de órganos que trabajan juntos para desempeñar una función. Uno de mis grupos incluye el corazón, los vasos sanguíneos y la sangre. ¿Qué soy?",
      class: "population-penguin",
      answer: "sistema de órganos",
    },
    {
      id: 4,
      ques: "Soy un hueso del sistema esquelético. ¿Qué soy?",
      class: "population-fish",
      answer: "órgano",
    },
    {
      id: 5,
      ques: "Estoy formado por células que realizan la misma función. Puedo formar una parte del corazón. ¿Qué soy?",
      class: "ecosystem",
      answer: "tejido",
    },
  ],

  questionHeading: "Pregunta -1- de 5.",

  completionDialog: {
    reset: { ...completionScreen },
    continue: {
      ...completionScreen,
      heading: esData.transitionPopup.heading,
      buttonText: esData.buttonLabels.continue,
      buttonClasses: "right-arrow icon",
      type: "attention",
      content:
        "Ahora que has explorado la organización jerárquica de un pingüino, demuestra lo que sabes.",
    },
  },

  resetText: [
    {
      type: "reset",
      resetButtonText: esData.buttonLabels.yes,
      buttonContinueText: esData.buttonLabels.no,
      content: esData.resetPopupText,
    },
  ],

  buttonText: esData.buttonLabels.continue,
  rightMsg: esData.correctToastMessage,
  wrongMsg: esData.incorrectToastMessage,
  submitAnswer: esData.buttonLabels.submitAnswer,
  buttonFinish: esData.buttonLabels.finish,
  buttonNext: esData.buttonLabels.next,
  buttonClose: esData.buttonLabels.close,
  reset: esData.buttonLabels.reset,
  info: esData.buttonLabels.info,
  resetLiveText: esData.resetLiveText,
  mcqInfotext: "Selecciona el término que mejor corresponda a la pista.",
  screen1Heading:
    "Los estudiantes observarán que un organismo está formado por sistemas de órganos que, a su vez, están formados por órganos que, a su vez, están formados por tejidos que, a su vez, están formados por células. Los estudiantes clasificarán imágenes como célula, tejido, órgano, sistema de órganos y organismo.",
};

export default RawTextData;
