import globalDataSet from "../../app/data";

const data = {
  activityHeading:
    "Los estudiantes seleccionan seres vivos y objetos no vivos en un ambiente y leen información sobre si tienen necesidades básicas y producen crías. Luego, los estudiantes identifican los objetos como seres vivos u objetos no vivos.",

  instructionBoxContent:
    "¡Echa un vistazo! Nuestro mundo está formado por seres vivos y objetos no vivos. ¡Vamos a explorar algunos de ellos!",
  InfoBoxContent:
    "Haz clic sobre los botones y clasifica los elementos como seres vivos u objetos no vivos.",
  imgAlt:
    "Un estanque con arena, plantas y peces en el agua; en la superficie hay patos y plantas. Al lado del estanque hay árboles, rocas, pasto y 2 venados en la arena; en el cielo soleado hay un pájaro.",
  buttonLabels: { ...globalDataSet.buttonLabels },

  resetLiveText: globalDataSet.resetLiveText,
  resetMsgContent: globalDataSet.resetPopupText,

  completionPopup: {
    ...globalDataSet.completionPopup,
    content:
      "Has clasificado correctamente todos estos elementos como seres vivos u objetos no vivos.",
  },

  correctToastMessage: globalDataSet.correctToastMessage,
  incorrectToastMessage: globalDataSet.incorrectToastMessage,

  screenOneTxt:
    "Los seres vivos necesitan satisfacer sus necesidades básicas para mantenerse vivos. También tienen crías. Los objetos no vivos no tienen necesidades básicas. Tampoco tienen crías. Haz clic sobre los botones para explorar algunos seres vivos y objetos no vivos. Luego, selecciona si crees que son seres vivos u objetos no vivos.",

  screenOneQues: [
    {
      id: "bird",
      answer: "living",
      screenTwoTxt:
        "Vemos pájaros en la tierra, en los árboles y volar en el cielo. Los pájaros construyen nidos que son refugios para sus crías. Ellos comen gusanos y bayas. También beben agua. ¿Son los pájaros seres vivos u objetos no vivos?",
    },
    {
      id: "sun",
      answer: "nonliving",
      screenTwoTxt:
        "Durante el día, el sol brilla intensamente en el cielo. Nos proporciona luz y calor. No necesita aire, agua ni alimento. No tiene crías. ¿Es el sol un ser vivo o un objeto no vivo?",
    },
    {
      id: "cloud",
      answer: "nonliving",
      screenTwoTxt:
        "Vemos nubes en el cielo. Aunque se mueven, no buscan alimento ni refugio. Una nube no tiene crías. ¿Son las nubes seres vivos u objetos no vivos?",
    },
    {
      id: "deer",
      answer: "living",
      screenTwoTxt:
        "Este venado y sus crías toman agua del estanque. Les gusta comer plantas. Los venados tiene refugios en los bosques. Ellos respiran aire. ¿Son los venados seres vivos u objetos no vivos?",
    },
    {
      id: "duck",
      answer: "living",
      screenTwoTxt:
        "Los patos son pájaros que nadan en el agua. Las crías de esta pata nadan detrás de ella. Algunos patos comen ranas y peces, mientras que otros comen semillas y plantas. Los patos construyen sus nidos en el suelo. ¿Son los patos seres vivos u objetos no vivos?",
    },
    {
      id: "water",
      answer: "nonliving",
      screenTwoTxt:
        "En esta agua hay muchas cosas. El agua no se come ninguna de ellas. No necesita luz solar ni aire ni espacio. ¿Es el agua un ser vivo o un objeto no vivo?",
    },
    {
      id: "frog",
      answer: "living",
      screenTwoTxt:
        "A esta rana le gusta esperar sobre las hojas de los nenúfares para atrapar y comer moscas, arañas y mariposas. Las ranas respiran aire por la nariz, la cual está en la parte superior de sus cabezas. ¡Ellas absorben agua a través de su piel! Tienen crías que, al principio, no se parecen en nada a ellas. ¿Son las ranas seres vivos u objetos no vivos?",
    },
    {
      id: "plant",
      answer: "living",
      screenTwoTxt:
        "¿Ves las plantas en el agua y en la tierra? Todas las plantas necesitan luz solar, nutrientes, aire, agua y espacio. Las semillas de las plantas adultas forman plantas nuevas. ¿Son las plantas seres vivos u objetos no vivos?",
    },
    {
      id: "sand",
      answer: "nonliving",
      screenTwoTxt:
        "La arena está hecha de pedazos de rocas y conchas marinas. La arena está en el agua, pero no necesita agua. Tampoco necesita alimento. ¡No necesita nada! ¿Es la arena un ser vivo o un objeto no vivo?",
    },
    {
      id: "fish",
      answer: "living",
      screenTwoTxt:
        "Los peces nadan en el agua. Se mueven de un lugar a otro para buscar alimento. Ellos toman el aire que hay en el agua. Ponen cientos de huevos que se convierten en crías llamadas alevines. ¿Son los peces seres vivos u objetos no vivos?",
    },
    {
      id: "rock",
      answer: "nonliving",
      screenTwoTxt:
        "Esta roca está junto al agua, pero no necesita beber de ella. No requiere comer ni respirar aire. Tampoco tiene crías. ¿Son las rocas seres vivos u objetos no vivos?",
    },
  ],

  radioOptions: [
    {
      id: "living",
      text: "Seres vivos",
    },
    {
      id: "nonliving",
      text: "Objetos no vivos",
    },
  ],

  screenOneButtons: [
    {
      id: "sun",
      text: "Sol",
    },
    {
      id: "bird",
      text: "Pájaro",
    },
    {
      id: "water",
      text: "Agua",
    },

    {
      id: "cloud",
      text: "Nube",
    },
    {
      id: "plant",
      text: "Planta",
    },
    {
      id: "deer",
      text: "Venado",
    },
    {
      id: "rock",
      text: "Rocas",
    },
    {
      id: "duck",
      text: "Patos",
    },
    {
      id: "sand",
      text: "Arena",
    },
    {
      id: "frog",
      text: "Rana",
    },
    {
      id: "fish",
      text: "Pez",
    },
  ],
};

export default data;
