import commonData from "../../app/data/data.es";

const data = {
  greetingMessage: "Hola",
  nextScreenButtonText: "siguiente pantalla",
  backScreenButtonText: "pantalla trasera",
  buttonLabels: { ...commonData.buttonLabels },
  startupPopup:
    "Todos los organismos vivos necesitan energía para sobrevivir y reproducirse. Esta energía se transfiere de un organismo a otro y puede representarse a través de una pirámide ecológica. En esta simulación, identificarás organismos vivos, los clasificarás como productores o consumidores y determinarás la energía en su nivel trófico.",
  resetLiveText: commonData.resetLiveText,
  resetPopupText: commonData.resetPopupText,
  infoPopupText: "La flecha indica el nivel trófico en el que debes enfocarte.",
  mcqQuestionHeading:
    "Identifica el organismo vivo indicado por la flecha, clasifícalo como productor o consumidor e indica la energía en ese nivel trófico.",
  completionScreen: {
    ...commonData.completionPopup,
    content: "Has completado exitosamente esta simulación.",
  },
  helpHintContent:
    "A medida que nos movemos de la parte inferior a la parte superior de la pirámide, cada nivel tiene una décima parte de la energía que había en el nivel anterior.",
  questionHeading: "Pregunta: -1- de -2-",
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  partialToastMessage:
    "¡No es del todo correcto! ¡Inténtalo otra vez y arregla tus respuestas incorrectas!",
  consumerData: [
    { id: "producer", value: "Productor", text: "Productor" },
    {
      id: "primary_consumer",
      value: "Consumidor primario",
      text: "Consumidor primario",
    },
    {
      id: "secondary_consumer",
      value: "Consumidor secundario",
      text: "Consumidor secundario",
    },
    {
      id: "tertiary_consumer",
      value: "Consumidor terciario",
      text: "Consumidor terciario",
    },
  ],
  livingOrganismHeading: "Organismo vivo",
  classifyHeading: "Clasificación",
  energyHeading: "Energía",
  mcqData: [
    {
      id: "question1",
      livingOrganismOption: [
        { id: "frog", value: "Rana", text: "Rana" },
        { id: "grass", value: "Pasto", text: "Pasto" },
        { id: "grasshopper", value: "Saltamontes", text: "Saltamontes" },
        { id: "snake", value: "Serpiente", text: "Serpiente" },
      ],
      energyOption: [
        { id: "e1", text: "10 kcal", value: "10 kcal" },
        { id: "e2", text: "100 kcal", value: "100 kcal" },
        { id: "e3", text: "1000 kcal", value: "1000 kcal" },
        { id: "e4", text: "10,000 kcal", value: "10,000 kcal" },
      ],
      correctLiving: "Rana",
      correctConsumer: "Consumidor secundario",
      correctEnergy: "100 kcal",
      classes: "image1",
      displayData: ["10 kcal", "10,000 kcal"],
      imageAltText:
        "Una pirámide de energía con pasto en el nivel inferior, que tiene 10,000 kcal, un saltamontes en el segundo nivel, una rana en el tercer nivel y una serpiente en el cuarto nivel, que tiene 10 kcal; una flecha apunta hacia el tercer nivel.",
    },
    {
      id: "question2",
      livingOrganismOption: [
        { id: "flower", value: "Flor", text: "Flor" },
        { id: "mouse", value: "Ratón", text: "Ratón" },
        { id: "owl", value: "Búho", text: "Búho" },
        { id: "snake", value: "Serpiente", text: "Serpiente" },
      ],
      energyOption: [
        { id: "e1", text: "10 kcal", value: "10 kcal" },
        { id: "e2", text: "100 kcal", value: "100 kcal" },
        { id: "e3", text: "1000 kcal", value: "1000 kcal" },
        { id: "e4", text: "2000 kcal", value: "2000 kcal" },
      ],
      correctLiving: "Ratón",
      correctConsumer: "Consumidor primario",
      correctEnergy: "1000 kcal",
      classes: "image2",
      displayData: ["10 kcal", "10,000 kcal"],
      imageAltText:
        "Una pirámide de energía con pasto y flores en el nivel inferior, que tiene 10,000 kcal, un ratón en el segundo nivel, una serpiente en el tercer nivel y un búho en el cuarto nivel, que tiene 10 kcal; una flecha apunta hacia el segundo nivel.",
    },
    {
      id: "question3",
      livingOrganismOption: [
        { id: "frog", value: "Rana", text: "Rana" },
        { id: "grass", value: "Pasto", text: "Pasto" },
        { id: "grasshopper", value: "Saltamontes", text: "Saltamontes" },
        { id: "snake", value: "Serpiente", text: "Serpiente" },
      ],
      energyOption: [
        { id: "e1", text: "10 kcal", value: "10 kcal" },
        { id: "e2", text: "100 kcal", value: "100 kcal" },
        { id: "e4", text: "10,000 kcal", value: "10,000 kcal" },
        { id: "e3", text: "1,000 kcal", value: "1000 kcal" },
      ],
      correctLiving: "Pasto",
      correctConsumer: "Productor",
      correctEnergy: "10,000 kcal",
      classes: "image1",
      displayData: ["10 kcal", "1,000 kcal"],
      imageAltText:
        "Una pirámide de energía con pasto en el nivel inferior, un saltamontes en el segundo nivel, que tiene 1,000 kcal, una rana en el tercer nivel y una serpiente en el cuarto nivel, que tiene 10 kcal; una flecha apunta hacia el primer nivel.",
    },
    {
      id: "question4",
      livingOrganismOption: [
        { id: "frog", value: "Rana", text: "Rana" },
        { id: "grass", value: "Pasto", text: "Pasto" },
        { id: "grasshopper", value: "Saltamontes", text: "Saltamontes" },
        { id: "snake", value: "Serpiente", text: "Serpiente" },
      ],
      energyOption: [
        { id: "e1", text: "10 kcal", value: "10 kcal" },
        { id: "e2", text: "5000 kcal", value: "5000 kcal" },
        { id: "e3", text: "3000 kcal", value: "3000 kcal" },
        { id: "e4", text: "1000 kcal", value: "1000 kcal" },
      ],
      correctLiving: "Saltamontes",
      correctConsumer: "Consumidor primario",
      correctEnergy: "1000 kcal",
      classes: "image1",
      displayData: ["10 kcal", "10,000 kcal"],
      imageAltText:
        "Una pirámide de energía con pasto en el nivel inferior, que tiene 10,000 kcal, un saltamontes en el segundo nivel, una rana en el tercer nivel y una serpiente en el cuarto nivel, que tiene 10 kcal; una flecha apunta hacia el segundo nivel.",
    },
    {
      id: "question5",
      livingOrganismOption: [
        { id: "frog", value: "Rana", text: "Rana" },
        { id: "grass", value: "Pasto", text: "Pasto" },
        { id: "grasshopper", value: "Saltamontes", text: "Saltamontes" },
        { id: "snake", value: "Serpiente", text: "Serpiente" },
      ],
      energyOption: [
        { id: "e1", text: "10 kcal", value: "10 kcal" },
        { id: "e2", text: "100 kcal", value: "100 kcal" },
        { id: "e4", text: "10,000 kcal", value: "10,000 kcal" },
        { id: "e3", text: "1,000 kcal", value: "1000 kcal" },
      ],
      correctLiving: "Serpiente",
      correctConsumer: "Consumidor terciario",
      correctEnergy: "10 kcal",
      classes: "image1",
      displayData: ["100 kcal", "10,000 kcal"],
      imageAltText:
        "Una pirámide de energía con pasto en el nivel inferior, que tiene 10,000 kcal, un saltamontes en el segundo nivel, una rana en el tercer nivel, que tiene 100 kcal, y una serpiente en el cuarto nivel; una flecha apunta hacia el cuarto nivel.",
    },
    {
      id: "question6",
      livingOrganismOption: [
        { id: "flower", value: "Flor", text: "Flor" },
        { id: "mouse", value: "Ratón", text: "Ratón" },
        { id: "owl", value: "Búho", text: "Búho" },
        { id: "snake", value: "Serpiente", text: "Serpiente" },
      ],
      energyOption: [
        { id: "e1", text: "10 kcal", value: "10 kcal" },
        { id: "e2", text: "100 kcal", value: "100 kcal" },
        { id: "e4", text: "10,000 kcal", value: "10,000 kcal" },
        { id: "e3", text: "1,000 kcal", value: "1000 kcal" },
      ],
      correctLiving: "Serpiente",
      correctConsumer: "Consumidor secundario",
      correctEnergy: "100 kcal",
      classes: "image2",
      displayData: ["10 kcal", "10,000 kcal"],
      imageAltText:
        "Una pirámide de energía con pasto y flores en el nivel inferior, que tiene 10,000 kcal, un ratón en el segundo nivel, una serpiente en el tercer nivel y un búho en el cuarto nivel, que tiene 10 kcal; una flecha apunta hacia el tercer nivel.",
    },
    {
      id: "question7",
      livingOrganismOption: [
        { id: "flower", value: "Flor", text: "Flor" },
        { id: "mouse", value: "Ratón", text: "Ratón" },
        { id: "owl", value: "Búho", text: "Búho" },
        { id: "snake", value: "Serpiente", text: "Serpiente" },
      ],
      energyOption: [
        { id: "e1", text: "10 kcal", value: "10 kcal" },
        { id: "e2", text: "100 kcal", value: "100 kcal" },
        { id: "e4", text: "10,000 kcal", value: "10,000 kcal" },
        { id: "e3", text: "1,000 kcal", value: "1000 kcal" },
      ],
      correctLiving: "Búho",
      correctConsumer: "Consumidor terciario",
      correctEnergy: "10 kcal",
      classes: "image2",
      displayData: ["100 kcal", "10,000 kcal"],
      imageAltText:
        "Una pirámide de energía con pasto y flores en el nivel inferior, que tiene 10,000 kcal, un ratón en el segundo nivel, una serpiente en el tercer nivel, que tiene 100 kcal, y un búho en el cuarto nivel; una flecha apunta hacia el cuarto nivel.",
    },
    {
      id: "question8",
      livingOrganismOption: [
        { id: "flower", value: "Flor", text: "Flor" },
        { id: "mouse", value: "Ratón", text: "Ratón" },
        { id: "owl", value: "Búho", text: "Búho" },
        { id: "snake", value: "Serpiente", text: "Serpiente" },
      ],
      energyOption: [
        { id: "e1", text: "10 kcal", value: "10 kcal" },
        { id: "e2", text: "100 kcal", value: "100 kcal" },
        { id: "e4", text: "10,000 kcal", value: "10,000 kcal" },
        { id: "e3", text: "1,000 kcal", value: "1000 kcal" },
      ],
      correctLiving: "Flor",
      correctConsumer: "Productor",
      correctEnergy: "10,000 kcal",
      classes: "image2",
      displayData: ["10 kcal", "1,000 kcal"],
      imageAltText:
        "Una pirámide de energía con pasto y flores en el nivel inferior, un ratón en el segundo nivel, que tiene 1,000 kcal, una serpiente en el tercer nivel y un búho en el cuarto nivel, que tiene 10 kcal; una flecha apunta hacia el primer nivel.",
    },
  ],
  pageHeading:
    "Los estudiantes clasificarán seres vivos como productores o consumidores y usarán pirámides ecológicas para determinar la energía.",
};

export default data;
