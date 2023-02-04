import globalConfig from "../../app/data";

const data = {
  stage1: {
    instructionText:
      "Arrastra cada una de las nueve sustancias al lugar correcto en la escala de pH. Recuerda que 7 corresponde a un pH neutro. Los ácidos tienen un pH inferior a 7 y, las bases, un pH superior a 7.",
    elements: [
      {
        name: "Ácido de batería",
      },
      {
        name: "Jugo de limón",
      },
      {
        name: "Jugo de tomate",
      },
      {
        name: "Lluvia normal",
      },
      {
        name: "Agua destilada",
      },
      {
        name: "Bicarbonato de sodio",
      },
      {
        name: "Jabón blando",
      },
      {
        name: "Amoníaco",
      },
      {
        name: "Lejía",
      },
    ],
    dropRegionDetail: "Área para colocar la solución con un ",
    droppableAltText: [
      "valor de pH de 1, rojo-rosa",
      "valor de pH entre 2 y 3, naranja",
      "valor de pH de 4, beige-amarillo",
      "valor de pH entre 5 y 6, verde claro",
      "valor de pH de 7, verde-verde oscuro",
      "valor de pH entre 8 y 9, azul claro",
      "valor de pH de 10, azul celeste-azul",
      "valor de pH entre 11 y 12, azul oscuro",
      "valor de pH de 13, morado-púrpura",
    ],
    colors: [
      {
        name: "Rojo",
        class: "red",
        altText:"valor de pH de 1"
      },
      {
        name: "Rosa",
        class: "pink",
        altText:"valor de pH de 1"

      },
      {
        name: "Naranja",
        class: "orange",
        altText:"valor de pH entre 2 y 3"

      },
      {
        name: "Beige",
        class: "beige",
        altText:"valor de pH de 4"

      },
      {
        name: "Amarillo",
        class: "yellow",
        altText:"valor de pH de 4"

      },
      {
        name: "Verde claro",
        class: "lime-green",
        altText:"valor de pH entre 5 y 6"

      },
      {
        name: "Verde",
        class: "green",
        altText:"valor de pH de 7"

      },
      {
        name: "Verde oscuro",
        class: "dark-green",
        altText:"valor de pH de 7"

      },
      {
        name: "Azul claro",
        class: "light-blue",
        altText:"valor de pH entre 8 y 9"

      },
      {
        name: "Azul celeste",
        class: "pale-blue",
        altText:"valor de pH de 10"

      },
      {
        name: "Azul",
        class: "blue",
        altText:"valor de pH de 10"

      },
      {
        name: "Azul oscuro",
        class: "dark-blue",
        altText:"valor de pH entre 11 y 12"

      },
      {
        name: "Morado",
        class: "violet",
        altText:"valor de pH de 13"

      },
      {
        name: "Púrpura",
        class: "purple",
        altText:"valor de pH de 13"

      },
    ],
    colorHeader: [
      "Ácido (inferior a 7)",
      "Neutro (7)",
      "Básico (superior a 7)",
    ],
  },

  stage2: {
    instructionText:
      "Lee los siguientes enunciados y determina si describen propiedades de los ácidos o de las bases. Arrastra cada enunciado al recuadro correcto.",
    elements: [
      {
        name: "Una solución con un pH aproximado de 3",
        accept: "acid",
      },
      {
        name: "Ácido clorhídrico",
        accept: "acid",
      },
      {
        name: "Concentración alta de iones de hidrógeno",
        accept: "acid",
      },
      {
        name: "Una solución con un pH aproximado de 11",
        accept: "base",
      },
      {
        name: "Produce una sensación resbalosa en la piel",
        accept: "base",
      },
      {
        name: "Concentración de iones de hidrógeno de 10 elevado a la potencia -2",
        htmlText:
          "Concentración de iones de hidrógeno de 10 elevado a la potencia <sup>-2</sup>",
        // htmlText: "Hydrogen ion concentration of 10<sup>-2</sup>",
        accept: "acid",
      },
      {
        name: "Concentración de iones de hidrógeno de 10 elevado a la potencia -9",
        htmlText:
          "Concentración de iones de hidrógeno de 10 elevado a la potencia <sup>-9</sup>",
        // htmlText: "Hydrogen ion concentration of 10<sup>-9</sup>",
        accept: "base",
      },
      {
        name: "Sabor agrio",
        accept: "acid",
      },
      {
        name: "Concentración baja de iones de hidrógeno",
        accept: "base",
      },
      {
        name: "Sabor amargo",
        accept: "base",
      },
      {
        name: "Hidróxido de sodio",
        accept: "base",
      },
    ],
    dropRegionDetail: "Espacio para colocar las propiedades",
    droppableDetail: [
      {
        title: "Propiedades de los ácidos",
        name: "acid",
      },
      {
        title: "Propiedades de las bases",
        name: "base",
      },
    ],
  },
  resetPopup: globalConfig.resetPopupText,
  resetLiveText: globalConfig.resetLiveText,
  buttonLabels: { ...globalConfig.buttonLabels },
  infoMessage: "¡Arrastra cada recuadro al lugar correcto!",
  startupMessage: `El pH es una medida que expresa cuán ácida o básica (alcalina) es una solución química. Su valor depende de la concentración de iones de hidrógeno que tiene cada solución. Dicha concentración es muy alta en los ácidos y muy baja en las bases. En esta simulación, ubicarás ácidos y bases en la escala de pH según su concentración de iones de hidrógeno.`,
  toastMsg: {
    correct: globalConfig.correctToastMessage,
    incorrect: globalConfig.incorrectToastMessage,
  },
  transitionPopup: {
    ...globalConfig.transitionPopup,
    content:
      "Ahora que has explorado el pH de diferentes ácidos y bases, demuestra lo que sabes.",
  },
  completionPopup: {
    ...globalConfig.completionPopup,
    content:
      "Has contestado todas las preguntas sobre el pH de los ácidos y las bases.",
  },
};

export default data;
