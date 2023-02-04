import commonData from "../../app/data";
import globalCommonData from "../../app/data";
const data = {
  greetingMessage: "Hola",
  nextScreenButtonText: "siguiente pantalla",
  backScreenButtonText: "pantalla trasera",
  buttonLabels: { ...commonData.buttonLabels },
  startUpInfo: {
    buttonContinueText: "Comenzar",
    buttonContinueLabel: "Comenzar",
    instructionBoxContent: [
      "El tiempo es diferente en distintas partes de los Estados Unidos, incluso en el mismo día.",
      "Compararás el tiempo en varias ciudades en el mismo día, así como el tiempo en una ciudad en dos días distintos, para ver cuán diferente puede ser el tiempo.",
    ],
  },
  resetLiveText: globalCommonData.resetLiveText,
  completionScreen: {
    ...globalCommonData.completionPopup,
    content: "Has completado exitosamente esta simulación.",
  },
  initialTextOnScreen:
    "Haz clic en una ciudad para leer los instrumentos meteorológicos.",
  mcqQuestion:
    "Lee los instrumentos meteorológicos para comparar el tiempo en diferentes días y lugares en los Estados Unidos.",
  radioButtons: [
    {
      id: "rb1",
      value: "30 de junio",
      disabled: false,
      text: "30 de junio",
      label: "30 de junio",
    },
    {
      id: "rb2",

      value: "18 de noviembre",
      disabled: false,
      text: "18 de noviembre",
      label: "18 de noviembre",
    },
  ],
  buttonLabels: [
    {
      id: "medway-me",
      value: "Medway, ME",
      disabled: false,
      text: "Medway, ME",
      label: "Medway, ME",
    },
    {
      id: "seattle-wa",
      value: "Seattle, WA",
      disabled: false,
      text: "Seattle, WA",
      label: "Seattle, WA",
    },
    {
      id: "terre-aute-in",
      value: "Terre Haute, IN",
      disabled: false,
      text: "Terre Haute, IN",
      label: "Terre Haute, IN",
    },
    {
      id: "parker-az",
      value: "Parker, AZ",
      disabled: false,
      text: "Parker, AZ",
      label: "Parker, AZ",
    },
    {
      id: "wilmington-nc",
      value: "Wilmington, NC",
      disabled: false,
      text: "Wilmington, NC",
      label: "Wilmington, NC",
    },
    {
      id: "brownsville-tx",
      value: "Brownsville, TX",
      disabled: false,
      text: "Brownsville, TX",
      label: "Brownsville, TX",
    },
  ],
  reading: [
    {
      s: {
        temperature: ["70", "65", "60"],
        direction: "S",
        windDirection: "5 mph",
        precipitation: [" 1", "0"],
        imageAltText:
          "El 30 de junio, en Seattle, WA, el termómetro marca 66 °F, el medidor de lluvia/nieve marca 0.3 in de precipitación y el anemómetro registra vientos del sur a 5 mph.",
      },

      p: {
        temperature: ["105", "100"],
        direction: "E",
        windDirection: "10 mph",
        precipitation: [" 1", "0"],
        imageAltText:
          "El 30 de junio, en Parker, AZ, el termómetro marca 106 °F, el medidor de lluvia/nieve marca 0.0 in de precipitación y el anemómetro registra vientos del este a 10 mph.",
      },

      b: {
        temperature: ["95", "90"],
        direction: "E",
        windDirection: "17 mph",
        precipitation: [" 1", "0"],
        imageAltText:
          "El 30 de junio, en Brownsville, TX, el termómetro marca 94 °F, el medidor de lluvia/nieve marca 0.2 in de precipitación y el anemómetro registra vientos del este a 17 mph.",
      },

      t: {
        temperature: ["90", "85", "80"],
        direction: "SE",
        windDirection: "2 mph",
        precipitation: [" 1", "0"],
        imageAltText:
          "El 30 de junio, en Terre Haute, IN, el termómetro marca 86 °F, el medidor de lluvia/nieve marca 0.2 in de precipitación y el anemómetro registra vientos del este a 2 mph.",
      },

      m: {
        temperature: ["75", "70", "65"],
        direction: "E",
        windDirection: "2 mph",
        precipitation: [" 1", "0"],
        imageAltText:
          "El 30 de junio, en Medway, ME, el termómetro marca 71 °F, el medidor de lluvia/nieve marca 0.8 in de precipitación y el anemómetro registra vientos del este a 2 mph.",
      },

      w: {
        temperature: ["95", "90", "85"],
        direction: "E",
        windDirection: "20 mph",
        precipitation: [" 1", "0"],
        imageAltText:
          "El 30 de junio, en Wilmington, NC, el termómetro marca 90 °F, el medidor de lluvia/nieve marca 0.6 in de precipitación y el anemómetro registra vientos del este a 20 mph.",
      },
    },
    {
      s: {
        temperature: ["55", "50", "45"],
        windDirection: "2 mph",
        direction: "O",
        precipitation: ["2", "1"],
        imageAltText:
          "El 18 de noviembre, en Seattle, WA, el termómetro marca 51 °F, el medidor de lluvia/nieve marca 1.7 in de precipitación y el anemómetro registra vientos del oeste a 2 mph.",
      },
      p: {
        temperature: ["80", "75"],
        windDirection: "3 mph",
        direction: "O",
        precipitation: [" 1", "0"],
        imageAltText:
          "El 18 de noviembre, en Parker, AZ, el termómetro marca 79 °F, el medidor de lluvia/nieve marca 0.0 in de precipitación y el anemómetro registra vientos del oeste a 3 mph.",
      },

      b: {
        temperature: ["80", "75", "70"],
        windDirection: "6 mph",
        direction: "E",
        precipitation: [" 1", "0"],
        imageAltText:
          "El 18 de noviembre, en Brownsville, TX, el termómetro marca 76 °F, el medidor de lluvia/nieve marca 0.1 in de precipitación y el anemómetro registra vientos del este a 6 mph.",
      },

      t: {
        temperature: ["55", "50 ", "45"],
        windDirection: "4 mph",
        direction: "SO",
        precipitation: [" 1", "0"],
        imageAltText:
          "El 18 de noviembre, en Terre Haute, IN, el termómetro marca 50 °F, el medidor de lluvia/nieve marca 0.4 in de precipitación y el anemómetro registra vientos del suroeste a 4 mph.",
      },

      m: {
        temperature: ["40", "35", "30"],
        windDirection: "7 mph",
        direction: "E",
        precipitation: ["3"],
        imageAltText:
          "El 18 de noviembre, en Medway, ME, el termómetro marca 37 °F, el medidor de lluvia/nieve marca 3.0 in de precipitación y el anemómetro registra vientos del este a 7 mph.",
      },

      w: {
        temperature: ["65", "60"],
        windDirection: "14 mph",
        direction: "SO",
        precipitation: [" 0", "1"],
        imageAltText:
          "El 18 de noviembre, en Wilmington, NC, el termómetro marca 62 °F, el medidor de lluvia/nieve marca 0.4 in de precipitación y el anemómetro registra vientos del suroeste a 14 mph.",
      },
    },
  ],

  bgs: [
    {
      id: "bg1",
      answer: 0,
      type: "s",
    },
    {
      id: "bg2",
      answer: 1,
      type: "s",
    },
    {
      id: "bg3",
      answer: 0,
      type: "p",
    },
    {
      id: "bg4",
      answer: 1,
      type: "p",
    },
    {
      id: "bg5",
      answer: 0,
      type: "b",
    },
    {
      id: "bg6",
      answer: 1,
      type: "b",
    },
    {
      id: "bg7",
      answer: 0,
      type: "t",
    },
    {
      id: "bg8",
      answer: 1,
      type: "t",
    },
    {
      id: "bg9",
      answer: 0,
      type: "m",
    },
    {
      id: "bg10",
      answer: 1,
      type: "m",
    },
    {
      id: "bg11",
      answer: 0,
      type: "w",
    },
    {
      id: "bg12",
      answer: 1,
      type: "w",
    },
  ],

  imageAltText:
    "Mapa de los Estados Unidos con botones que resaltan las siguientes ciudades: Seattle, WA; Parker, AZ; Brownsville, TX; Terre Haute, IN; Medway, ME y Wilmington, NC.",
  imageText:
    "Un mapa de los Estados Unidos con un botón resaltado -1-",
  altImageText:
    "Muestra diferentes estados del tiempo en distintas ciudades de los Estados Unidos.",
  weatherInstrument: ["Termómetro", "Medidor de lluvia/nieve", "Anemómetro"],
  buttonFinish: "Terminar",
  buttonInfo: "Información",
  buttonReset: "Reiniciar",
  resetMsgContent: "¿Quieres reiniciar?",
  buttonYes: "Sí",
  buttonNo: "No",
  buttonClose: "Cerrar",
  buttonContinue: "Continuar",

  pageHeading:
    "Explora diferentes ciudades para obtener información sobre el tiempo en distintos meses y lugares en los Estados Unidos.",
  infoBoxContent:
    "Los datos meteorológicos se refieren específicamente al área y al día. Explora el tiempo en diferentes lugares de los Estados Unidos.",
};

export default data;
