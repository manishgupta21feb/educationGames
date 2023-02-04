import commonData from "../../app/data";

const data = {
  ...commonData.buttonLabels,
  optionItems: [
    { id: "game", text: "Juego", alt: "Manzana de madera roja" },
    { id: "prism", text: "Prisma", alt: "Bloque triangular rojo" },
    { id: "cap", text: "Gorro", alt: "Gorro tejido triangular rojo" },
    { id: "yarn_ball", text: "Bola de lana", alt: "Bola de lana azul" },
    { id: "marble_green", text: "Canica", alt: "Canica de vidrio verde" },
    { id: "marble_yellow", text: "Canica", alt: "Canica de vidrio amarilla" },
    {
      id: "plastic_toy_green",
      text: "Juguete de plástico",
      alt: "Juguete de plástico verde",
    },
    {
      id: "block_blue",
      text: "Bloque",
      alt: "Bloque de construcción de plástico azul",
    },
    {
      id: "block_green",
      text: "Bloque",
      alt: "Bloque de construcción de plástico verde",
    },
    {
      id: "plastic_toy_yellow",
      text: "Juguete de plástico",
      alt: "Juguete de plástico amarillo",
    },
  ],
  questions: [
    {
      id: "question1",
      type: "Shapes",
      subQuestions: [
        {
          id: "sub1",
          associatedObjects: ["block_blue", "block_green"],
          text: "Vamos a clasificar estos objetos por su forma. Haz clic sobre todos los objetos que tengan la forma de un <b>cubo</b>.",
        },
        {
          id: "sub2",
          associatedObjects: [
            "game",
            "yarn_ball",
            "marble_green",
            "marble_yellow",
          ],
          text: "Ahora, haz clic sobre todos los objetos que sean <b>redondos</b>.",
        },
      ],
    },
    {
      id: "question2",
      type: "Color",
      subQuestions: [
        {
          id: "sub1",
          associatedObjects: ["block_blue", "yarn_ball"],
          text: "Vamos a clasificar estos objetos por su color. Haz clic sobre todos los objetos <b>azules</b>.",
        },
        {
          id: "sub2",
          associatedObjects: ["prism", "cap", "game"],
          text: "Ahora, haz clic sobre todos los objetos <b>rojos</b>.",
        },
      ],
    },
    {
      id: "question3",
      type: "Texture",
      subQuestions: [
        {
          id: "sub1",
          associatedObjects: [
            "cap",
            "game",
            "yarn_ball",
            "block_blue",
            "block_green",
            "plastic_toy_green",
            "plastic_toy_yellow",
          ],
          text: "Vamos a clasificar estos objetos por la manera en que se sienten al tocarlos. Haz clic sobre todos los objetos que se sentirían <b>ásperos</b>.",
        },
        {
          id: "sub2",
          associatedObjects: ["marble_green", "marble_yellow", "prism"],
          text: "Haz clic sobre todos los objetos que se sentirían <b>lisos</b>.",
        },
      ],
    },
  ],
  resetLiveText: commonData.resetLiveText,
  resetPopupText: commonData.resetPopupText,
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  partiallyIncorrectToastMessage:
    "Algunas de tus respuestas son incorrectas. ¡Inténtalo otra vez!",
  completionPopup: {
    ...commonData.completionPopup,
    content:
      "¡Has clasificado todos estos objetos por sus formas, colores y texturas!",
  },
  mainImageAlt: `Una habitación con paredes de color morado; en la pared de atrás hay 1 cuadro derecho, una ventana y 
                  una cómoda. Hay 10 objetos clasificados por sus propiedades y colocados de forma ordenada sobre una alfombra.`,
  activityDescription: `En esta simulación, el estudiante clasificará objetos por su forma, color y textura (lisa o áspera).`,
  introductionPopupText: `¡Mi habitación está desordenada! Por favor, ayúdame a clasificar algunos de mis 
                          objetos por sus formas, colores y texturas.`,
  introductionPopupImageAlt: `Una habitación con paredes de color rosa y morado; en la pared de atrás hay una litera, una cómoda 
                              y un librero. Los cuadros que hay en la pared están torcidos; hay objetos esparcidos por toda la habitación.`,
  infoPopupText: `Haz clic sobre los objetos que tengan la propiedad descrita.`,
};

export default data;
