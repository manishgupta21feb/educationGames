import globalCommonData from "../../app/data/data.es";

const data = {
  equationsData: [
    {
      srNo: "1",
      id: "question1",
      neutrons: "6",
      charge: "1-",
      alt: "carga negativa de uno",
      element: "",
      class: "carbon",
      selectOptions: {
        protons: [
          {
            id: 2,
            text: "7",
            value: 7,
          },
          {
            id: 3,
            text: "6",
            value: 6,
          },
          {
            id: 4,
            text: "8",
            value: 8,
          },
        ],
        electrons: [
          {
            id: 2,
            text: "7",
            value: 7,
          },
          {
            id: 3,
            text: "6",
            value: 6,
          },
          {
            id: 4,
            text: "5",
            value: 5,
          },
        ],
        elementName: [
          {
            id: 2,
            text: "Carbono",
            value: "Carbon",
          },
          {
            id: 3,
            text: "Oxígeno",
            value: "Oxygen",
          },
          {
            id: 4,
            text: "Nitrógeno",
            value: "Nitrogen",
          },
        ],
        massNumber: [
          {
            id: 2,
            text: "12",
            value: 12,
          },
          {
            id: 3,
            text: "13",
            value: 13,
          },
          {
            id: 4,
            text: "19",
            value: 19,
          },
        ],
      },
      answer: {
        protons: "6",
        electrons: "7",
        elementName: "Carbon",
        massNumber: "12",
      },
      altText:
        "Un átomo, cuyo núcleo está formado por círculos rojos y azules, tiene 2 capas con círculos amarillos que representan los electrones: 2 en la primera capa y 5 en la segunda.",
    },
    {
      srNo: "2",
      id: "question2",
      neutrons: "16",
      charge: "1-",
      alt: "carga negativa de uno",
      element: "",
      class: "sulfur",
      selectOptions: {
        protons: [
          {
            id: 2,
            text: "17",
            value: 17,
          },
          {
            id: 3,
            text: "16",
            value: 16,
          },
          {
            id: 4,
            text: "18",
            value: 18,
          },
        ],
        electrons: [
          {
            id: 2,
            text: "17",
            value: 17,
          },
          {
            id: 3,
            text: "16",
            value: 16,
          },
          {
            id: 4,
            text: "15",
            value: 15,
          },
        ],
        elementName: [
          {
            id: 2,
            text: "Azufre",
            value: "Sulfur",
          },
          {
            id: 3,
            text: "Cloro",
            value: "Chlorine",
          },
          {
            id: 4,
            text: "Nitrógeno",
            value: "Nitrogen",
          },
        ],
        massNumber: [
          {
            id: 2,
            text: "32",
            value: 32,
          },
          {
            id: 3,
            text: "16",
            value: 16,
          },
          {
            id: 4,
            text: "48",
            value: 48,
          },
        ],
      },
      answer: {
        protons: "16",
        electrons: "17",
        elementName: "Sulfur",
        massNumber: "32",
      },
      altText:
        "Un átomo, cuyo núcleo está formado por círculos rojos y azules, tiene 3 capas con círculos amarillos que representan los electrones: 2 en la primera capa, 8 en la segunda y 7 en la tercera.",
    },
    {
      srNo: "3",
      id: "question3",
      neutrons: "8",
      charge: "2-",
      alt: "carga negativa de dos",
      element: "<div>O<sup>2-</sup></div>",
      class: "element",
      selectOptions: {
        protons: [
          {
            id: 2,
            text: "8",
            value: 8,
          },
          {
            id: 3,
            text: "9",
            value: 9,
          },
          {
            id: 4,
            text: "10",
            value: 10,
          },
        ],
        electrons: [
          {
            id: 2,
            text: "8",
            value: 8,
          },
          {
            id: 3,
            text: "10",
            value: 10,
          },
          {
            id: 4,
            text: "6",
            value: 6,
          },
        ],
        elementName: [
          {
            id: 2,
            text: "Oxígeno",
            value: "Oxygen",
          },
          {
            id: 3,
            text: "Neón",
            value: "Neon",
          },
          {
            id: 4,
            text: "Carbono",
            value: "Carbon",
          },
        ],
        massNumber: [
          {
            id: 2,
            text: "8",
            value: 8,
          },
          {
            id: 3,
            text: "16",
            value: 16,
          },
          {
            id: 4,
            text: "32",
            value: 32,
          },
        ],
      },
      answer: {
        protons: "8",
        electrons: "10",
        elementName: "Oxygen",
        massNumber: "16",
      },
      altText: "Oxígeno con una carga negativa de 2",
    },
    {
      srNo: "4",
      id: "question4",
      neutrons: "7",
      charge: "3-",
      alt: "carga negativa de tres",
      element: "<div>N<sup>3-</sup></div>",
      class: "element",
      selectOptions: {
        protons: [
          {
            id: 2,
            text: "7",
            value: 7,
          },
          {
            id: 3,
            text: "3",
            value: 3,
          },
          {
            id: 4,
            text: "10",
            value: 10,
          },
        ],
        electrons: [
          {
            id: 2,
            text: "8",
            value: 8,
          },
          {
            id: 3,
            text: "10",
            value: 10,
          },
          {
            id: 4,
            text: "6",
            value: 6,
          },
        ],
        elementName: [
          {
            id: 2,
            text: "Oxígeno",
            value: "Oxygen",
          },
          {
            id: 3,
            text: "Nitrógeno",
            value: "Nitrogen",
          },
          {
            id: 4,
            text: "Carbono",
            value: "Carbon",
          },
        ],
        massNumber: [
          {
            id: 2,
            text: "7",
            value: 7,
          },
          {
            id: 3,
            text: "14",
            value: 14,
          },
          {
            id: 4,
            text: "32",
            value: 32,
          },
        ],
      },
      answer: {
        protons: "7",
        electrons: "10",
        elementName: "Nitrogen",
        massNumber: "14",
      },
      altText: "Nitrógeno con una carga negativa de 3",
    },
    {
      srNo: "5",
      id: "question5",
      neutrons: "4",
      charge: "1+",
      alt: "carga positiva de uno",
      element: "<div>Li<sup>1+</sup></div>",
      class: "element",
      selectOptions: {
        protons: [
          {
            id: 2,
            text: "1",
            value: 1,
          },
          {
            id: 3,
            text: "3",
            value: 3,
          },
          {
            id: 4,
            text: "4",
            value: 4,
          },
        ],
        electrons: [
          {
            id: 2,
            text: "1",
            value: 1,
          },
          {
            id: 3,
            text: "2",
            value: 2,
          },
          {
            id: 4,
            text: "3",
            value: 3,
          },
        ],
        elementName: [
          {
            id: 2,
            text: "Litio",
            value: "Lithium",
          },
          {
            id: 3,
            text: "Oxígeno",
            value: "Oxygen",
          },
          {
            id: 4,
            text: "Hidrógeno",
            value: "Hydrogen",
          },
        ],
        massNumber: [
          {
            id: 2,
            text: "4",
            value: 4,
          },
          {
            id: 3,
            text: "7",
            value: 7,
          },
          {
            id: 4,
            text: "10",
            value: 10,
          },
        ],
      },
      answer: {
        protons: "3",
        electrons: "2",
        elementName: "Lithium",
        massNumber: "7",
      },
      altText: "Litio con una carga positiva de 1",
    },
  ],

  dropDownHeadings: [
    {
      protonsHeading: "Protones",
      electronsHeading: "Electrones",
      elementnameHeading: "Nombre del elemento",
      massnumberHeading: "Número de masa",
    },
  ],

  bottomLabels: [
    { id: "protons", value: "Protones" },
    { id: "electrons", value: "Electrones" },
    { id: "neutrons", value: "Neutrones" },
  ],

  labels: [
    { id: "neutrons", name: "Neutrones" },
    { id: "charges", name: "Carga" },
  ],

  buttonLabels: { ...globalCommonData.buttonLabels },
  completionScreen: {
    ...globalCommonData.completionPopup,
    content: "Has contestado correctamente todas las preguntas.",
  },

  startPopupAltText:
    "1 átomo grande en la esquina inferior izquierda y 3 átomos pequeños al fondo, cada uno de ellos con 3 círculos amarillos (electrones) que giran alrededor de un núcleo formado por 3 círculos rojos y 3 círculos azules.",
  resetLiveText: globalCommonData.resetLiveText,
  resetMsgContent: globalCommonData.resetPopupText,
  questionHeading: globalCommonData.questionCounterString,
  correctToastMessage: globalCommonData.correctToastMessage,
  // incorrectToastMessage: globalCommonData.incorrectToastMessage,
  incorrectToastMessage:
    "Algunas de tus respuestas son incorrectas. ¡Inténtalo otra vez!",
  incorrectToastMessageTwo:
    "Una de las respuestas es incorrecta. ¡Inténtalo otra vez!",
  reactionTypeQuestion:
    "¡Elige las opciones correctas para identificar el número de protones y electrones, el nombre del elemento y el número de masa de cada átomo o ion!",
  infoBoxContent:
    "<div>Mira el modelo, el número de neutrones y la carga. Usa esta información para elegir el número de protones y electrones, el nombre del elemento y el número de masa correctos.</div><div>Un átomo neutro tiene el mismo número de protones que de electrones. Si hay una carga, tendrás que ajustar el número de electrones. Una carga negativa (anión) significa que hay más electrones que protones, mientras que una carga positiva (catión) significa que hay menos electrones que protones.</div><div>Número de masa = número de protones + número de neutrones.</div>",
  instructionBoxContent:
    "Los átomos están formados por tres partículas subatómicas: protones, electrones y neutrones. Vamos a usar el número de neutrones y la carga para hallar el número de protones y electrones, el nombre del elemento y el número de masa de diferentes átomos o iones.",
  screenHeading:
    "Los estudiantes comprenderán los diferentes componentes de los modelos atómicos, incluidos los protones, los neutrones y los electrones.",
};

export default data;
