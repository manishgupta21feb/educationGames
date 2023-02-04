import globalConfig from "../../app/data";

const data = {
  correctToastMsg: globalConfig.correctToastMessage,
  incorrectToastMsg: globalConfig.incorrectToastMessage,
  equationsData: [
    {
      srNo: 1,
      id: "question1",
      questionText:
        "Una de las recetas lleva azúcar en polvo, la cual suele tardar 2 minutos en disolverse. ¿Qué puede usar ella para que el azúcar en polvo se disuelva más rápido?",
      questionSubText: "",
      answer: ["hotplate", "spoon"],
    },
    {
      srNo: 2,
      id: "question2",
      questionText:
        "Un cliente se queja de que su bebida no está lo suficientemente dulce. Lily intenta añadir más azúcar, pero esta no se disuelve en la bebida. ¿Qué puede usar Lily para crear una bebida más dulce?",
      questionSubText: "",
      answer: ["hotplate"],
    },
    {
      srNo: 3,
      id: "question3",
      questionSubText: "¿Qué puede usar Lily para acelerar este proceso?",
      questionText:
        "Lily recibe las siguientes instrucciones para preparar la bebida de una cliente:",
      alldata: [
        { id: "item1", label: "Calentar el café." },
        { id: "item2", label: "Colocar 3 cubos de azúcar en el café." },
        {
          id: "item3",
          label: "Revolver el café hasta que el azúcar se disuelva por completo.",
        },
      ],

      answer: ["mortar"],
    },
    {
      srNo: 4,
      id: "question4",
      questionText:
        "Una cliente se queja de que su bebida carbonatada pierde rápidamente toda la efervescencia y quiere una bebida nueva. ¿Qué puede usar Lily para asegurar que la bebida mantenga su efervescencia por más tiempo?",
      questionSubText: "",
      answer: ["icecube"],
    },
    {
      srNo: 5,
      id: "question5",
      questionSubText:
        "¿Qué puede usar Lily para preparar esta bebida lo más rápido posible?",
      questionText:
        "Lily recibe la siguiente lista de ingredientes para preparar una bebida:",
      alldata: [
        { id: "item1", label: "Sirope de vainilla" },
        { id: "item2", label: "Cubos de azúcar" },
        {
          id: "item3",
          label: "Café",
        },
        {
          id: "item4",
          label: "Leche",
        },
      ],

      answer: ["hotplate", "mortar", "spoon"],
    },
  ],

  equationOptions: [
    {
      id: "hotplate",
      disabled: false,
      text: "Placa calefactora",
      label: "Placa calefactora",
    },
    {
      id: "mortar",
      disabled: false,
      text: "Mortero",
      label: "Mortero",
    },

    {
      id: "icecube",
      disabled: false,
      text: "Cubos de hielo",
      label: "Cubos de hielo",
    },
    {
      id: "spoon",
      disabled: false,
      text: "Cuchara",
      label: "Cuchara",
    },
  ],

  resetLiveText: globalConfig.resetLiveText,
  rightMsg: globalConfig.correctToastMessage,
  resetPopupText: globalConfig.resetPopupText,
  buttonLabels: { ...globalConfig.buttonLabels },
  warningBoxHeader: globalConfig.incorrectToastMessage,

  imageAlt:
    "Una placa calefactora, un mortero, una bandeja de cubos de hielo y una cuchara sobre el mostrador de una cafetería; al fondo, hay una mesa con dos personas que toman café.",
  
  activityHeading:
    "Según el escenario presentado, los estudiantes determinarán qué factores alterarán la solubilidad para demostrar comprensión de las tasas de solubilidad. ",

  infoContent:
    "Vuelve a leer el escenario y piensa en los factores que aumentan o disminuyen la tasa de solubilidad. Luego, intenta identificar el equipo necesario para modificar la tasa de solubilidad en dicho escenario. Recuerda que algunos escenarios requerirán más de un equipo.",
  instructionBoxContent: [
    "Lily trabaja en una cafetería y quiere desarrollar técnicas para preparar las bebidas más rápido.",
    "La tasa de solubilidad se puede modificar por medio de varias técnicas. En esta simulación, leerás cada escenario y determinarás qué equipo o equipos es mejor usar para obtener la tasa de solubilidad deseada.",
  ],

  completionScreen: {
    ...globalConfig.completionPopup,
    content:
      "Has identificado correctamente el equipo necesario para modificar la tasa de solubilidad en todas las situaciones.",
  },
};

export default data;
