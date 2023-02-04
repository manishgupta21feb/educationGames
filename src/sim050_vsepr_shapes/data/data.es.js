import commonData from "../../app/data";
const data = {
  buttonLabels: {
    ...commonData.buttonLabels,
  },
  equationsData: [
    {
      srNo: "1",

      answer: ["shapes1", "lonepair5"],
      questionId: "question1",
      altText:
        "A la derecha hay un círculo verde etiquetado «Cl» que representa el cloruro. A la izquierda hay una barra que conecta un círculo gris pequeño etiquetado «H» con el cloruro y representa el enlace con 3 pares solitarios.",
    },
    {
      srNo: "2",

      answer: ["shapes1", "lonepair1"],
      questionId: "question2",
      altText:
        "En el centro hay un círculo gris etiquetado «C». De este círculo salen 2 círculos rojos etiquetados «O», con 2 barras que representan los enlaces sin ningún par solitario.",
    },
    {
      srNo: "3",

      answer: ["shapes1", "lonepair1"],
      questionId: "question3",
      altText:
        "A green circle labeled Be is at the center. 2 gray circles labeled H branch out from each side and are bonded to the Be with no lone pairs.",
    },
    {
      srNo: "4",

      answer: ["shapes2", "lonepair1"],
      questionId: "question4",
      altText:
        "En el centro hay un círculo rosa etiquetado «B» que representa el boro. De este círculo salen 3 círculos verdes etiquetados «Cl» y enlazados con el boro sin ningún par solitario.",
    },
    {
      srNo: "5",

      answer: ["shapes2", "lonepair1"],
      questionId: "question5",
      altText:
        "En el centro hay un círculo rosa etiquetado «B» que representa el boro. De este círculo salen 3 círculos grises etiquetados «H» y enlazados con el boro sin ningún par solitario.",
    },
    {
      srNo: "6",

      answer: ["shapes2", "lonepair1"],
      questionId: "question6",
      altText:
        "En el centro hay un círculo rosa etiquetado «B» que representa el boro. De este círculo salen 3 círculos rojos etiquetados «Br» y enlazados con el boro sin ningún par solitario.",
    },
    {
      srNo: "7",

      answer: ["shapes3", "lonepair3"],
      questionId: "question7",
      altText:
        "En el centro hay un círculo rojo etiquetado «O» que representa el oxígeno. De este círculo salen 2 círculos grises etiquetados «H» y enlazados con el oxígeno con 2 pares solitarios.",
    },
    {
      srNo: "8",

      answer: ["shapes4", "lonepair1"],
      questionId: "question8",
      altText:
        "En el centro hay un círculo gris oscuro etiquetado «C» que representa el carbono. De este círculo salen 4 círculos de un gris más claro etiquetados «H» y enlazados con el carbono sin ningún par solitario.",
    },
    {
      srNo: "9",

      answer: ["shapes4", "lonepair1"],
      questionId: "question9",
      altText:
        "En el centro hay un círculo pardo etiquetado «Si» que representa el silicio. De este círculo salen 4 círculos rojos etiquetados «Br» y enlazados con el silicio sin ningún par solitario.",
    },
    {
      srNo: "10",

      answer: ["shapes4", "lonepair1"],
      questionId: "question10",
      altText:
        "En el centro hay un círculo gris oscuro etiquetado «C» del que salen 3 círculos de un gris más claro etiquetados «H» y 1 círculo verde etiquetado «Cl» sin ningún par solitario.",
    },
    {
      srNo: "11",

      answer: ["shapes5", "lonepair2"],
      questionId: "question11",
      altText:
        "En el centro hay un círculo azul etiquetado «N» que representa el nitrógeno. De este círculo salen 3 círculos grises etiquetados «H» y enlazados con el nitrógeno con 1 par solitario.",
    },
    {
      srNo: "12",

      answer: ["shapes5", "lonepair2"],
      questionId: "question12",
      altText:
        "A red circle labeled P for phosphorus is in the center. 3 pink circles labeled I branch out and are bonded to the phosphorous with one lone pair.",
    },
  ],

  shapesOptions: [
    {
      id: "shapes1",
      disabled: false,
      text: "Lineal",
      label: "Lineal",
    },
    {
      id: "shapes2",
      disabled: false,
      text: "Trigonal plana",
      label: "Trigonal plana",
    },
    {
      id: "shapes3",
      disabled: false,
      text: "Angular",
      label: "Angular",
    },
    {
      id: "shapes4",
      disabled: false,
      text: "Tetraédrica",
      label: "Tetraédrica",
    },
    {
      id: "shapes5",
      disabled: false,
      text: "Pirámide trigonal",
      label: "Pirámide trigonal",
    },
  ],

  loneOptions: [
    {
      id: "lonepair1",
      disabled: false,
      text: "0 pares solitarios",
      label: "0 pares solitarios",
    },
    {
      id: "lonepair2",
      disabled: false,
      text: "1 par solitario",
      label: "1 par solitario",
    },
    {
      id: "lonepair3",
      disabled: false,
      text: "2 pares solitarios",
      label: "2 pares solitarios",
    },
    {
      id: "lonepair4",
      disabled: false,
      text: "3 pares solitarios",
      label: "3 pares solitarios",
    },
    {
      id: "lonepair5",
      disabled: false,
      text: "No hay un átomo central.",
      label: "No hay un átomo central.",
    },
  ],
  h1InfoTextA11Y:
    "Los estudiantes usarán la teoría de TRePEV para clasificar estructuras moleculares.",

  partialIncorrect1:
    "La forma molecular seleccionada no era la correcta. ¡Inténtalo otra vez!",
  partialIncorrect2:
    "Los pares solitarios seleccionados no eran los correctos. ¡Inténtalo otra vez!",

  questionHeading: "Pregunta: -1- de 12.",

  reactionTypeQuestion: "Selecciona la forma molecular.",
  reactionTypeQuestion2:
    "Selecciona el número de pares solitarios en el átomo central.",
  InfoBoxContent:
    "Examina la molécula y determina la forma molecular y el número de pares solitarios en el átomo central. Podría ser útil que dibujes tu molécula en un trozo de papel.",
  instructionBoxContent:
    "Todas las moléculas son compuestos covalentes, que son enlaces entre dos o más elementos no metálicos. Cada molécula crea una forma específica según las reglas de la teoría de repulsión de pares electrónicos de valencia (TRePEV). En esta simulación, identificarás la forma molecular y el número de pares solitarios en el átomo central para cada compuesto molecular.",
  completionPopup: {
    ...commonData.completionPopup,
    content: "¡Has identificado correctamente todas las formas! ¡Buen trabajo!",
  },
  resetLiveText: commonData.resetLiveText,
  resetMsgContent: commonData.resetPopupText,
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
};

export default data;
