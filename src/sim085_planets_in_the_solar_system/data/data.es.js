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
      "La Vía Láctea es nuestro hogar. La Tierra es solo uno de los ocho planetas que hay en la Vía Láctea. Lee las tarjetas de pista sobre cada planeta y trata de colocar los planetas en el orden correcto.",
      "Usa las etiquetas con los nombres de los planetas que aparecen abajo para asegurarte de escribir correctamente el nombre de cada planeta.",
    ],
  },

  resetLiveText: globalCommonData.resetLiveText,
  completionScreen: {
    ...globalCommonData.completionPopup,
    content: "¡Has ordenado correctamente los planetas desde el Sol!",
  },
  mainHeading:
    "Lee las tarjetas de pista para parear la información con los planetas y escribe sus nombres en la posición correcta.",
  typingPlanet: [
    {
      id: "planet1",
      text: "Planeta 1",
      altText: "Mercurio",
    },
    {
      id: "planet2",
      text: "Planeta 2",
      altText: "Venus",
    },
    {
      id: "planet3",
      text: "Planeta 3",
      altText: "Tierra",
    },
    {
      id: "planet4",
      text: "Planeta 4",
      altText: "Marte",
    },
    {
      id: "planet5",
      text: "Planeta 5",
      altText: "Júpiter",
    },
    {
      id: "planet6",
      text: "Planeta 6",
      altText: "Saturno",
    },
    {
      id: "planet7",
      text: "Planeta 7",
      altText: "Urano",
    },
    {
      id: "planet8",
      text: "Planeta 8",
      altText: "Neptuno",
    },
  ],
  planetName: [
    {
      id: "earth",
      text: "Tierra",
    },
    {
      id: "uranus",
      text: "Urano",
    },
    {
      id: "jupiter",
      text: "Júpiter",
    },
    {
      id: "mars",
      text: "Marte",
    },
    {
      id: "neptune",
      text: "Neptuno",
    },
    {
      id: "mercury",
      text: "Mercurio",
    },
    {
      id: "venus",
      text: "Venus",
    },
    {
      id: "saturn",
      text: "Saturno",
    },
  ],
  clueCardHeading: "Tarjeta de pista (-1- de -2-)",
  planetHeading: "Planetas",
  clueCards: [
    {
      clue: "Soy más pequeño que la Tierra y estoy más cerca del Sol. La Tierra no es mi vecina de al lado.",
      clueButton: "mercurio",
    },
    {
      clue: "Me suelen llamar el gemelo de la Tierra, aunque estoy más cerca del Sol y soy mucho más caliente que mi vecino. Soy un planeta rocoso y más o menos del mismo tamaño que la Tierra.",
      clueButton: "venus",
    },
    {
      clue: "Soy el tercer planeta, hogar de los humanos y de muchos otros organismos. Casi toda mi superficie está cubierta por agua y mi temperatura es perfecta para la vida.",
      clueButton: "tierra",
    },
    {
      clue: "Me llaman el planeta rojo, y puedes verme de noche en el cielo desde la Tierra. La NASA voló un helicóptero sobre mi superficie.",
      clueButton: "marte",
    },
    {
      clue: "Soy el primero de los planetas exteriores, o gigantes gaseosos, que están más allá del cinturón de asteroides. Si llegas a Saturno, ¡estás demasiado lejos para encontrarme!",
      clueButton: "júpiter",
    },
    {
      clue: "Soy famoso por mis anillos, que están hechos de cristales de hielo, polvo y rocas. Soy un gigante gaseoso localizado justo después de mi vecino, que es el planeta más grande.",
      clueButton: "saturno",
    },
    {
      clue: "Soy más pequeño que Saturno, pero, al igual que mi hermano mayor, también soy un planeta exterior. Soy de color turquesa. Solo tardo 17 horas en completar una rotación.",
      clueButton: "urano",
    },
    {
      clue: "Uno de mis vecinos es un planeta enano. Estoy a más de 3 billones de millas de distancia del Sol y mis vientos son más rápidos que los de cualquier otro planeta.",
      clueButton: "neptuno",
    },
  ],
  buttonFinish: "Terminar",
  buttonInfo: "Información",
  buttonReset: "Reiniciar",
  resetMsgContent: "¿Quieres reiniciar?",
  buttonYes: "Sí",
  buttonNo: "No",
  buttonClose: "Cerrar",

  buttonFinish: "Terminar",
  bottonCheck: "Revisar",
  correctToastMessage:"¡Es correcto!",
  incorrectToastMessage: "No es del todo correcto. ¡Inténtalo otra vez!",
  partiallyIncorrectToastMessage:
    "Uno de los nombres es incorrecto. ¡Inténtalo otra vez!",
  imageAltText:
    "En el centro de la imagen, sobre un fondo azul oscuro, aparecen el Sol y los 8 planetas de nuestro sistema solar en fila; el Sol está a la izquierda y los planetas están en orden del más cercano al más lejano.",
  pageHeading:
    "En esta simulación, el estudiante identificará el orden de los planetas con respecto al Sol en el sistema solar de la Tierra.",
  infoBoxContent:
    "Lee las tarjetas de pista para parear la información con los planetas y luego escribe sus nombres en la posición correcta en nuestro sistema solar.",
};

export default data;
