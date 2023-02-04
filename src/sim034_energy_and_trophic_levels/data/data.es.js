const info = {
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: "Comenzar",
  buttonContinueLabel: "Comenzar",
  content:
    "¡Bienvenido al hermoso bosque de Pineywoods! Hoy explorarás cómo fluye la energía a través de diferentes organismos en este ecosistema. ",
};

const completionScreen = {
  content:
    "Has contestado todas las preguntas sobre la energía y los niveles tróficos.",
  type: "positive",
  heading: "¡Felicitaciones!",
  buttonText: "Reiniciar",
  ButtonLabel: "Reiniciar",
  buttonClasses: "reset-white reverse icon",
};

const RawTextData = {
  classifyingMatterContent: [
    {
      id: 1,
      text: "producers",
      label: "Productores",
      className: "gold-spoon",
      batteryPercentage: "100 %",
      batteryAlt:
        "Batería completamente cargada; tiene el 100 % de energía disponible.",
      textContent:
        "Los <b>productores</b> constituyen el primer nivel trófico. Ellos obtienen toda su energía del sol. En cada ecosistema hay más productores que organismos de cualquier otro tipo.",
      textAlt:
        "Los productores constituyen el primer nivel trófico. Ellos obtienen toda su energía del sol. En cada ecosistema hay más productores que organismos de cualquier otro tipo.",
    },
    {
      id: 2,
      text: "primary",
      batteryPercentage: "10 %",
      label: "Consumidores primarios",
      className: "glass-of-water",
      batteryAlt:
        "Batería parcialmente cargada; tiene un 10 % de energía disponible.",
      textContent:
        "Los <b>consumidores primarios</b> constituyen el segundo nivel trófico. Ellos obtienen toda su energía de los productores.",
      textAlt:
        "Los consumidores primarios constituyen el segundo nivel trófico. Ellos obtienen toda su energía de los productores.",
    },
    {
      id: 3,
      text: "secondary",
      batteryPercentage: "1 %",
      label: "Consumidores secundarios",
      batteryAlt: "Batería baja; tiene un 1 % de energía disponible.",
      textContent:
        "Los <b>consumidores secundarios</b> constituyen el tercer nivel trófico. Ellos obtienen su energía de los consumidores primarios.",
      textAlt:
        "Los consumidores secundarios constituyen el tercer nivel trófico. Ellos obtienen su energía de los consumidores primarios.",
    },
    {
      id: 4,
      text: "tertiary",
      batteryPercentage: "0.1 %",
      label: "Consumidores terciarios",
      batteryAlt:
        "Una batería casi agotada; tiene un 0.1 % de energía disponible.",
      textContent:
        "Los <b>consumidores terciarios</b> constituyen el cuarto nivel trófico. Ellos obtienen su energía de los consumidores secundarios. Hay muy pocos consumidores terciarios en cualquier ecosistema.",
      textAlt:
        "Los consumidores terciarios constituyen el cuarto nivel trófico. Ellos obtienen su energía de los consumidores secundarios. Hay muy pocos consumidores terciarios en cualquier ecosistema.",
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
      content:
        "Haz clic sobre cada nivel trófico para conocer su nivel de energía y su posición en la cadena alimenticia.",
    },
    correct: {
      ...info,
      buttonContinueText: "Continuar",
      buttonContinueLabel: "Continuar",
    },
  },
  kitchenItems: [
    {
      id: "tertiary",
      text: "Consumidores terciarios",
      className: "pyramid-eagle",
      alt: "La cuarta capa de la pirámide de energía, que es la parte superior, muestra un águila.",
    },
    {
      id: "secondary",
      text: "Consumidores secundarios",
      className: "pyramid-snake",
      alt: "La tercera capa más alta de la pirámide de energía muestra unas serpientes.",
    },
    {
      id: "primary",
      text: "Consumidores primarios",
      className: "pyramid-rabbit",
      alt: "La segunda capa más alta de la pirámide de energía muestra unos conejos.",
    },
    {
      id: "producers",
      text: "Productores",
      className: "pyramid-plant",
      alt: "La capa inferior de la pirámide de energía muestra unas plantas.",
    },
  ],

  mcqQuestionText:
    "Lee cada pregunta y selecciona el nivel trófico que se describe.",
  mcqOptions: [
    "Productores",
    "Consumidores primarios",
    "Consumidores secundarios",
    "Consumidores terciarios",
  ],

  mcqData: [
    {
      id: 1,
      ques: "Este nivel trófico tiene la menor cantidad de energía en la pirámide de energía.",
      answer: "consumidores terciarios",
      imageClass: "compound",
      // imageAlt: "A single leopard seal",
    },
    {
      id: 2,
      ques: "Este nivel trófico tiene la mayor cantidad de energía en la pirámide de energía.",
      answer: "productores",
      imageClass: "homogeneous-mixture",
      // imageAlt: "Several silverfish in water",
    },
    {
      id: 3,
      ques: "Este nivel trófico está formado por herbívoros. Los herbívoros son animales que solo comen plantas.",
      answer: "consumidores primarios",
      imageClass: "element",
      // imageAlt: "Penguins and silverfish",
    },
    {
      id: 4,
      ques: "Este nivel trófico está formado exclusivamente por autótrofos. Los autótrofos procesan la energía del sol para producir su propio alimento.",
      answer: "productores",
      imageClass: "homogeneous-mixture",
      // imageAlt: "Multiple silverfish",
    },
  ],

  questionHeading: "Pregunta -1- de 4.",

  completionDialog: {
    reset: { ...completionScreen },
    continue: {
      ...completionScreen,
      heading: "¡Buen trabajo!",
      buttonText: "Continuar",
      buttonClasses: "right-arrow icon",
      content:
        "Has explorado exitosamente cómo fluye la energía a través de los diferentes niveles tróficos en un ecosistema. Ahora ha llegado el momento de demostrar lo que sabes.",
    },
  },

  resetText: [
    {
      type: "Reiniciar",
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
  //   selected: "Selected",
  alreadySelected: "Ya se ha seleccionado",
  resetLiveText: "Your activity has been reset",
  screentext1: "Flujo de energía en una cadena alimenticia",
  screentext2: "Pirámide de energía",
  bttryText: "Energía disponible",
  screentext3: "Haz clic sobre cada nivel trófico para aprender más sobre él.",
  mcqHelpText:
    "Lee cada pregunta y selecciona el nivel trófico que se describe.",
  activityAlts: {
    popupImage:
      "Un ecosistema forestal con pastos, flores silvestres, arbustos y árboles; en el suelo hay conejos y serpientes. Hay un águila en un árbol.",
    sun: "El sol",
    brownRabbit: "Conejo marrón",
    eagle: "Águila posada en un árbol",
    snake: "Serpiente con franjas rojas, amarillas y negras",
    plants: "Planta silvestre; pastos altos con una flor amarilla",
    firstScreenPyramid:
      "Un diagrama de una cadena alimenticia. La energía fluye del sol a las plantas, a un conejo, a una serpiente y, por último, a un águila.",
    secondScreenPyramid:
      "Un modelo de la pirámide de energía; plantas en la capa inferior, conejos en la segunda capa, serpientes en la tercera capa y un águila en la capa superior o cuarta.",
    mcqsScreenPyramid:
      "La pirámide de energía completa; plantas en la capa inferior, conejos en la segunda capa, serpientes en la tercera capa y un águila en la capa superior o cuarta.",
  },
  headingText:
    "Los estudiantes exploran cómo se relacionan las pirámides de energía con las cadenas alimenticias y observan cómo disminuye la energía disponible en cada nivel trófico.",
};

export default RawTextData;
