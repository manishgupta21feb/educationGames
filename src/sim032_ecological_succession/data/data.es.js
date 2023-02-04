import commonData from "../../app/data";

import pattern1 from "../assets/images/textures0001.png";
import pattern2 from "../assets/images/textures0002.png";
import pattern3 from "../assets/images/textures0003.png";
import pattern4 from "../assets/images/textures0004.png";
import pattern5 from "../assets/images/textures0005.png";
import pattern6 from "../assets/images/textures0006.png";
import pattern7 from "../assets/images/textures0007.png";

const data = {
  buttonLabels: { ...commonData.buttonLabels },
  initialTexts: {
    text1: `Hoy usarás un programa para viajar en el tiempo. Irás al futuro para ver cuánto tardará el bosque en verse así otra vez.`,
    text2: `Selecciona el tipo de evento catastrófico que destruyó el bosque. Luego, viaja al futuro y visita todas las paradas 
            de la sucesión ecológica en la escala de tiempo. En cada parada, fíjate bien en la imagen y en los datos sobre las 
            diferentes especies.`,
  },

  infoImageAltText:
    "Un sendero en un bosque con varios tipos de árboles, arbustos, pastos, hongos y mariposas.",

  graphTitle: "Diversidad de especies",

  screen0: {
    screenName: "volcanic",
    screenTitle: "Erupción volcánica",
    animationAltText: `Esta imagen muestra, de izquierda a derecha, la secuencia de todas las etapas de la sucesión ecológica.`,
    infoText: `Cerca del sendero, un volcán hizo erupción y expulsó lava. Al enfriarse, la lava se endureció y creó una capa de 
                roca nueva. Usa los botones que aparecen en la escala de tiempo de la sucesión ecológica para visitar cada parada 
                en el futuro.`,
    stopData: [
      {
        name: "stop1",
        infoText:
          "<p>El área está cubierta de <b>roca</b> volcánica endurecida.</p>",
        buttonText: "Año 0",
        altText:
          "Un ecosistema en el que solo hay rocas a la intemperie. No hay vida aparente. Tampoco hay suelo.",
        graphLabel: [
          {
            text: "Roca a la Intemperie, 100 %",
            class: "pattern6",
            altText:
              "Leyenda de color negro que representa la roca a la intemperie.",
          },
        ],
        graphData: [100],
      },
      {
        name: "stop2",
        infoText: `¡Llegaron las <b>especies pioneras!</b> Se han empezado a formar <b>líquenes y musgos</b> en las rocas a la intemperie. A medida que
                     estos organismos erosionan lentamente las rocas y se descomponen, comienza a formarse el suelo.`,
        buttonText: "Año 5",
        altText:
          "Un ecosistema con rocas. Pequeños organismos verdes crecen en la parte superior de todas las rocas. No hay suelo.",
        graphLabel: [
          {
            text: "Roca a la Intemperie, 50 %",
            class: "pattern6",
            altText:
              "Leyenda de color negro que representa la roca a la intemperie.",
          },
          {
            text: "Líquenes y musgos, 50 %",
            class: "pattern7",
            altText:
              "Leyenda de color naranja que representa los líquenes y los musgos.",
          },
        ],
        graphData: [50, 50],
      },
      {
        name: "stop3",
        infoText: `Los líquenes y musgos aún contribuyen a la formación del suelo. Ahora hay suficiente 
                    suelo para que crezcan <b>malezas y pastos</b>.`,
        buttonText: "Año 8",
        altText:
          "Un ecosistema con pocas rocas y algo de pasto. El suelo sobre el lecho rocoso es poco profundo.",
        graphLabel: [
          {
            text: "Líquenes y musgos, 15 %",
            class: "pattern7",
            altText:
              "Leyenda de color naranja que representa los líquenes y los musgos.",
          },
          {
            text: "Malezas y pastos, 85 %",
            class: "pattern2",
            altText:
              "Leyenda de color amarillo que representa las malezas y los pastos.",
          },
        ],
        graphData: [15, 85],
      },
      {
        name: "stop4",
        infoText: `A medida que los pastos y malezas mueren y se descomponen, su material orgánico ayuda a aumentar la cantidad 
                    de suelo. Al haber un suelo más profundo, pueden crecer plantas más grandes, como <b>arbustos</b>.`,
        buttonText: "Año 25",
        altText:
          "Un ecosistema completamente cubierto de pastos y flores silvestres. La profundidad del suelo aumenta.",
        graphLabel: [
          {
            text: "Líquenes y musgos, 5 %",
            class: "pattern7",
            altText:
              "Leyenda de color naranja que representa los líquenes y los musgos.",
          },
          {
            text: "Malezas y pastos, 65 %",
            class: "pattern2",
            altText:
              "Leyenda de color amarillo que representa las malezas y los pastos.",
          },
          {
            text: "Arbustos, 30 %",
            class: "pattern3",
            altText: "Leyenda de color verde que representa los arbustos.",
          },
        ],
        graphData: [5, 65, 30],
      },
      {
        name: "stop5",
        infoText: `A medida que los arbustos, pastos y malezas mueren y se descomponen, su material orgánico combinado 
                    ayuda a aumentar todavía más la cantidad de suelo. Al haber un suelo más profundo, pueden crecer 
                    plantas más grandes, como <b>árboles jóvenes</b>.`,
        buttonText: "Año 100",
        altText:
          "Un ecosistema completamente cubierto de pastos. En él crecen árboles pequeños y medianos. La profundidad del suelo aumenta de forma significativa.",
        graphLabel: [
          {
            text: "Líquenes y musgos, 2 %",
            class: "pattern7",
            altText:
              "Leyenda de color naranja que representa los líquenes y los musgos.",
          },
          {
            text: "Malezas y pastos, 45 %",
            class: "pattern2",
            altText:
              "Leyenda de color amarillo que representa las malezas y los pastos.",
          },
          {
            text: "Arbustos, 40 %",
            class: "pattern3",
            altText: "Leyenda de color verde que representa los arbustos.",
          },
          {
            text: "Árboles jóvenes, 13 %",
            class: "pattern4",
            altText:
              "Leyenda de color morado que representa los árboles jóvenes.",
          },
        ],
        graphData: [2, 45, 40, 13],
      },
      {
        name: "stop6",
        infoText: `¡El bosque ha alcanzado el estado de <b>comunidad clímax!</b> Eso significa que tiene <b>árboles maduros</b> 
                    y ha recuperado totalmente su estado original, es decir, el que tenía antes del evento catastrófico.`,
        buttonText: "Año 200",
        altText:
          "Un ecosistema completamente cubierto de pastos. En él crecen árboles grandes y altos. La profundidad del suelo está a su máximo nivel.",
        graphLabel: [
          {
            text: "Líquenes y musgos, 2 %",
            class: "pattern7",
            altText:
              "Leyenda de color naranja que representa los líquenes y los musgos.",
          },
          {
            text: "Arbustos, 30 %",
            class: "pattern3",
            altText: "Leyenda de color verde que representa los arbustos.",
          },
          {
            text: "Árboles maduros, 5 %",
            class: "pattern5",
            altText:
              "Leyenda de color azul que representa los árboles maduros.",
          },
          {
            text: "Malezas y pastos, 48 %",
            class: "pattern2",
            altText:
              "Leyenda de color amarillo que representa las malezas y los pastos.",
          },
          {
            text: "Árboles jóvenes, 15 %",
            class: "pattern4",
            altText:
              "Leyenda de color morado que representa los árboles jóvenes.",
          },
        ],
        graphData: [2, 30, 5, 48, 15],
      },
    ],
    finalStages: [
      {
        name: "Etapas pioneras",
        altText: "Del año 0 al 25.",
      },
      {
        name: "Etapas intermedias",
        altText: "Del año 25 al 100.",
      },
      {
        name: "Comunidad clímax",
        altText: "Del año 100 al 200.",
      },
    ],
  },
  screen1: {
    screenName: "wildfire",
    screenTitle: "Incendio forestal",
    animationAltText: `Esta imagen muestra, de izquierda a derecha, la secuencia de todas las etapas de la sucesión ecológica.`,
    infoText: `La caída de un rayo provocó un gran incendio forestal que se extendió por el bosque. Usa los botones que 
                aparecen en la escala de tiempo de la sucesión ecológica para visitar cada parada en el futuro.`,
    stopData: [
      {
        name: "stop1",
        infoText: `El incendio forestal se extendió por el bosque y mató a todos los organismos vivos. Dejó atrás 
                    troncos de árboles quemados y una capa de <b>suelo</b>.`,
        buttonText: "Año 0",
        altText:
          "Se observa fuego y árboles que aún arden. El suelo es profundo.",
        graphLabel: [
          {
            text: "Suelo, 100 %",
            class: "pattern1",
            altText: "Leyenda de color naranja que representa el suelo.",
          },
        ],
        graphData: [100],
      },
      {
        name: "stop2",
        infoText: `¡Llegaron las <b>especies pioneras!</b> En el suelo han comenzado a crecer <b>malezas y pastos</b>.`,
        buttonText: "Año 1",
        altText:
          "Un ecosistema completamente cubierto de pastos y flores silvestres. El suelo es profundo.",
        graphLabel: [
          {
            text: "Malezas y pastos, 100 %",
            class: "pattern2",
            altText:
              "Leyenda de color amarillo que representa las malezas y los pastos.",
          },
        ],
        graphData: [100],
      },
      {
        name: "stop3",
        infoText: `A medida que los pastos y malezas mueren y se descomponen, su material orgánico ayuda a aumentar la
                     cantidad de suelo. Al haber un suelo más profundo, pueden crecer plantas más grandes, como <b>arbustos</b>.`,
        buttonText: "Año 18",
        altText:
          "Un ecosistema completamente cubierto de pastos y flores silvestres. Hay algunos arbustos. El suelo es profundo.",
        graphLabel: [
          {
            text: "Malezas y pastos, 70 %",
            class: "pattern2",
            altText:
              "Leyenda de color amarillo que representa las malezas y los pastos.",
          },
          {
            text: "Arbustos, 30 %",
            class: "pattern3",
            altText: "Leyenda de color verde que representa los arbustos.",
          },
        ],
        graphData: [70, 30],
      },
      {
        name: "stop4",
        infoText: `A medida que los arbustos, pastos y malezas mueren y se descomponen, su material orgánico combinado 
                    ayuda a aumentar todavía más la cantidad de suelo. Al haber un suelo más profundo, pueden crecer 
                    plantas más grandes, como <b>árboles jóvenes</b>.`,
        buttonText: "Año 70",
        altText:
          "Un ecosistema completamente cubierto de pastos. En él crecen árboles pequeños y medianos. El suelo es profundo.",
        graphLabel: [
          {
            text: "Malezas y pastos, 50 %",
            class: "pattern2",
            altText:
              "Leyenda de color amarillo que representa las malezas y los pastos.",
          },
          {
            text: "Arbustos, 35 %",
            class: "pattern3",
            altText: "Leyenda de color verde que representa los arbustos.",
          },
          {
            text: "Árboles jóvenes, 15 %",
            class: "pattern4",
            altText:
              "Leyenda de color morado que representa los árboles jóvenes.",
          },
        ],
        graphData: [50, 35, 15],
      },
      {
        name: "stop5",
        infoText: `¡El bosque ha alcanzado el estado de <b>comunidad clímax!</b> Eso significa que tiene <b>árboles maduros</b> y ha 
                    recuperado totalmente su estado original, es decir, el que tenía antes del evento catastrófico.`,
        buttonText: "Año 100",
        altText:
          "Un ecosistema completamente cubierto de pastos. En él crecen árboles grandes y altos. El suelo es profundo.",
        graphLabel: [
          {
            text: "Malezas y pastos, 35 %",
            class: "pattern2",
            altText:
              "Leyenda de color amarillo que representa las malezas y los pastos.",
          },
          {
            text: "Arbustos, 25 %",
            class: "pattern3",
            altText: "Leyenda de color verde que representa los arbustos.",
          },
          {
            text: "Árboles jóvenes, 25 %",
            class: "pattern4",
            altText:
              "Leyenda de color morado que representa los árboles jóvenes.",
          },
          {
            text: "Árboles maduros, 15 %",
            class: "pattern5",
            altText:
              "Leyenda de color azul que representa los árboles maduros.",
          },
        ],
        graphData: [35, 25, 25, 15],
      },
    ],
    finalStages: [
      {
        name: "Etapas pioneras",
        altText: "Del año 0 al 18.",
      },
      {
        name: "Etapas intermedias",
        altText: "Del año 18 al 70.",
      },
      {
        name: "Comunidad clímax",
        altText: "Del año 70 al 100.",
      },
    ],
  },

  buttonStart: commonData.buttonLabels.start,
  buttonClose: commonData.buttonLabels.close,
  buttonNext: commonData.buttonLabels.next,
  buttonFinish: commonData.buttonLabels.finish,
  buttonContinue: commonData.buttonLabels.continue,

  launchScreenButtons: {
    volcanicEruption: "Erupción volcánica",
    wildfire: "Incendio forestal",
  },

  header: {
    buttonInfo: commonData.buttonLabels.info,
    buttonReset: commonData.buttonLabels.reset,
  },

  StartUpInfo: {
    buttonContinueText: commonData.buttonLabels.start,
    buttonContinueLabel: commonData.buttonLabels.start,
    content: `Este era el sendero favorito de mi familia. Lo recorríamos cada verano cuando visitábamos el 
                parque nacional STEMscopes. Lamentablemente, un evento catastrófico destruyó el bosque.`,
  },

  info: {
    content: `Haz clic sobre el botón para seleccionar el tipo de evento catastrófico. Luego, usa los botones que 
                aparecen en la escala de tiempo para recorrer las etapas de la sucesión ecológica.`,
    buttonContinueText: commonData.buttonLabels.close,
    buttonContinueLabel: commonData.buttonLabels.close,
  },

  reset: {
    content: commonData.resetPopupText,
    resetButtonText: commonData.buttonLabels.yes,
    resetButtonLabel: commonData.buttonLabels.yes,
    buttonContinueText: commonData.buttonLabels.no,
    buttonContinueLabel: commonData.buttonLabels.no,
  },
  patterns: [
    { class: "pattern1", src: pattern1 },
    { class: "pattern2", src: pattern2 },
    { class: "pattern3", src: pattern3 },
    { class: "pattern4", src: pattern4 },
    { class: "pattern5", src: pattern5 },
    { class: "pattern6", src: pattern6 },
    { class: "pattern7", src: pattern7 },
  ],
};

export default data;
