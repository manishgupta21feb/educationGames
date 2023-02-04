import globalDataSet from "../../app/data";
import imgMain from "../assets/images/dragon.png";

const data = {
  activityHeading:
    "Los estudiantes identificarán una cadena alimenticia. También identificarán y explorarán las interacciones entre los seres vivos y los objetos no vivos en un terrario.",

  instructionBoxContent:
    "¡Mi mamá me regaló una hembra de dragón barbudo como mascota! ¡Ayúdame a echar un vistazo al terrario que le hice para asegurarme de que tenga todo lo que necesita para vivir!",
  InfoBoxContent:
    "Lee la descripción y haz clic sobre el nombre correcto de cada elemento.",

  buttonLabels: { ...globalDataSet.buttonLabels },

  resetLiveText: globalDataSet.resetLiveText,
  resetMsgContent: globalDataSet.resetPopupText,
  transitionPopup: {
    ...globalDataSet.transitionPopup,
    content:
      "Ahora que has explorado el terrario de mi dragón barbudo, ¡demuéstrame lo que sabes!",
  },
  completionPopup: {
    ...globalDataSet.completionPopup,
    content:
      "¡Has contestado todas las preguntas! ¡Ahora sé que mi dragón barbudo tiene todo lo que necesita para vivir!",
  },

  questionHeading: "Pregunta: -1- de -2-",
  questionText:
    "Mira este elemento del terrario. ¿Es un ser vivo, un objeto no vivo o una cadena alimenticia?",

  correctToastMessage: globalDataSet.correctToastMessage,
  incorrectToastMessage: globalDataSet.incorrectToastMessage,
  mainImg: {
    img: imgMain,
    alt: "Un lagarto naranja, llamado dragón barbudo, con espinas en la cabeza y piel puntiaguda en el mentón.",
  },
  terrariumAltText:
    "Un terrario con arena en el fondo, un dragón barbudo, una cueva de roca, una planta de fresa, un tazón con agua y otras plantas.",
  screenOneQues: [
    {
      srNo: "1",
      id: "question1",

      questionText:
        "<p>En el terrario de mi dragón barbudo hay seres vivos y objetos no vivos. ¿Puedes verlos?</p><p>Los dragones barbudos obtienen su alimento de seres vivos. Echa un vistazo al terrario. Haz clic sobre un ser vivo que crezca en el suelo.</p>",
      answer: "strawberryPlant",
      screenTwoTxt:
        "Este ser <b>vivo</b> es una planta de fresa. El sol brilla sobre esta planta de fresa y la ayuda a crecer. Mi dragón barbudo se comerá esta planta para poder crecer. ¡También se comerá estas deliciosas fresas!",
      imgText: [
        {
          id: "plantTxt1",
          name: "Planta",
        },
      ],
      alt: "Una planta de fresa con muchas hojas verdes y fresas rojas.",
    },
    {
      srNo: "2",
      id: "question2",

      questionText:
        "¡Esa planta no es el único ser vivo en el terrario! Haz clic sobre el otro ser vivo que ves.",
      answer: "beardedDragon",
      screenTwoTxt:
        "¡El otro ser vivo en este terrario es mi hembra de dragón barbudo! Ella depende de la planta de fresa para obtener alimento. La planta de fresa depende del sol para poder crecer. Entonces, ¡el sol ayuda a la planta a vivir y la planta ayuda a mi dragón barbudo a vivir! ¡Esta es una <b>cadena alimenticia</b> perfecta para mi mascota!",
      imgText: [
        {
          id: "dragon",
          name: "Dragón barbudo",
        },
      ],
      alt: "Un lagarto naranja, llamado dragón barbudo, con espinas en la cabeza y piel puntiaguda en el mentón.",
    },
    {
      srNo: "3",
      id: "question3",

      questionText:
        "Los dragones barbudos también dependen de objetos no vivos. Ellos necesitan un lugar para esconderse y descansar. Haz clic sobre el objeto no vivo que es un buen refugio para mi dragón barbudo en el terrario.",
      answer: "rockCave",
      screenTwoTxt:
        "Esta roca es un objeto <b>no vivo</b>. No come plantas. ¡No come nada! Sin embargo, ¡es un lugar al que mi hembra de dragón barbudo podrá ir cuando quiera estar sola! ",
      imgText: [
        {
          id: "rockTxt1",
          name: "Cueva de roca",
        },
      ],
      alt: "Una cueva de roca de color marrón claro que le sirve de refugio al dragón barbudo.",
    },
    {
      srNo: "4",
      id: "question4",

      questionText:
        "Como todos los seres vivos, los dragones barbudos necesitan beber. Haz clic sobre el objeto no vivo que los dragones barbudos pueden beber.",
      answer: "waterBowl",
      screenTwoTxt:
        "Esta agua es un objeto <b>no vivo</b>. No respira ni come. Pero mi dragón barbudo necesitará agua para sobrevivir. ¡También le encantará jugar en el agua!",
      imgText: [
        {
          id: "waterText1",
          name: "Agua",
        },
      ],
      alt: "Agua en un tazón hecho de rocas grises.",
    },
  ],

  screenOneButtons: [
    {
      srNo: "1",
      id: "rockCave",
      text: "Cueva de roca",
    },

    {
      srNo: "2",
      id: "waterBowl",
      text: "Agua",
    },

    {
      srNo: "3",
      id: "beardedDragon",
      text: "Dragón barbudo",
    },
    {
      srNo: "4",
      id: "strawberryPlant",
      text: "Planta",
    },
  ],

  dashedLine: [
    {
      id: "rock",
    },
    {
      id: "water",
    },
    {
      id: "plant",
    },
    {
      id: "dragon",
    },
  ],

  mcqQuestions: [
    {
      id: "rockQuestion",
      answer: "nonLiving",
      label: [
        {
          id: "rockLabel",
          name: "Cueva de roca",
        },
      ],
      alt: "Una cueva de roca de color marrón claro que le sirve de refugio al dragón barbudo.",
    },
    {
      id: "plantQuestion",
      answer: "living",
      label: [
        {
          id: "plantLabel",
          name: "Planta",
        },
      ],
      alt: "Una planta de fresa con muchas hojas verdes y fresas rojas.",
    },
    {
      id: "foodChainQuestion",
      answer: "foodChain",
      alt: "Una cadena alimenticia que muestra cómo se transfiere la energía del sol a la planta de fresa y luego al dragón.",
      label: [
        {
          id: "sunLabel",
          name: "El sol",
        },
        {
          id: "sPlantLabel",
          name: "planta",
        },
        {
          id: "dragonLabel",
          name: "dragón barbudo",
        },

        {
          id: "arrowLabe3",
          name: "",
        },
        {
          id: "arrowLabe4",
          name: "",
        },
        {
          id: "helps",
          name: "ayuda a la",
        },
        {
          id: "feed",
          name: "y alimenta al",
        },
      ],
    },
    {
      id: "waterBowlQuestion",
      answer: "nonLiving",
      alt: "Agua en un tazón hecho de rocas grises.",
      label: [
        {
          id: "waterLabel",
          name: "Agua",
        },
      ],
    },
  ],

  radioOptions: [
    {
      id: "nonLiving",
      text: "Objeto no vivo",
    },
    {
      id: "living",
      text: "Ser vivo",
    },
    {
      id: "foodChain",
      text: "Cadena alimenticia",
    },
  ],
};

export default data;
