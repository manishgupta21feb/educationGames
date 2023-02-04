import globalData from "../../app/data";
const info = {
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: "Start",
  buttonContinueLabel: "Start",
  content:
    "Cada año, la Tierra completa una traslación alrededor del Sol. Hoy explorarás cómo el movimiento de la Tierra en su órbita afecta las estaciones en los hemisferios norte y sur. Recorre las diferentes posiciones de la Tierra y observa las temperaturas promedio de Washington D. C. y Sídney, Australia, en cuatro puntos distintos a lo largo del año.",
};

const earthPositionLabels = [
    {
      id: "iplabel4",
      labels: [
        { id: "i4l1", text: "23 de septiembre" },
        { id: "i4l2", text: "Equinoccio de otoño" },
      ],
    },
    {
      id: "iplabel1",
      labels: [
        { id: "i1l1", text: "22 de diciembre" },
        { id: "i1l2", text: "Solsticio de invierno" },
      ],
    },
    {
      id: "iplabel3",
      labels: [
        { id: "i3l1", text: "22 de junio" },
        { id: "i3l2", text: "Solsticio de verano" },
      ],
    },
    {
      id: "iplabel2",
      labels: [
        { id: "i2l1", text: "21 de marzo" },
        { id: "i2l2", text: "Equinoccio de primavera" },
      ],
    },
  ];
  
  const imagesAltText = {
    intro:
    "Cuatro modelos de la Tierra que muestran diferentes posiciones orbitales alrededor del Sol durante las cuatro estaciones. Todos los modelos tienen una inclinación de 23.5 grados.",
    tiltedDec22:
    "La Tierra inclinada en su posición orbital el 22 de diciembre. El hemisferio sur recibe más rayos directos del Sol que el hemisferio norte.",
    tiltedMar21:
    "La Tierra inclinada en su posición orbital el 21 de marzo. Los hemisferios sur y norte reciben una cantidad similar de rayos directos del Sol.",
    tiltedJun22:
    "La Tierra inclinada en su posición orbital el 22 de junio. El hemisferio norte recibe más rayos directos del Sol que el hemisferio sur.",
    tiltedSep23:
    "La Tierra inclinada en su posición orbital el 23 de septiembre. Los hemisferios sur y norte reciben una cantidad similar de rayos directos del Sol.",
    nontiltedDec22:
    "La Tierra sin inclinación axial en su posición orbital el 22 de diciembre. Los hemisferios sur y norte reciben una cantidad similar de rayos directos del Sol.",
    nontiltedMar21:
    "La Tierra sin inclinación axial en su posición orbital el 21 de marzo. Los hemisferios sur y norte reciben una cantidad similar de rayos directos del Sol.",
    nontiltedJun22:
    "La Tierra sin inclinación axial en su posición orbital el 22 de junio. Los hemisferios sur y norte reciben una cantidad similar de rayos directos del Sol.",
    nontiltedSep23:
    "La Tierra sin inclinación axial en su posición orbital el 23 de septiembre. Los hemisferios sur y norte reciben una cantidad similar de rayos directos del Sol.",
    lastmcq:
    "Cuatro modelos de la Tierra que muestran diferentes posiciones orbitales alrededor del Sol durante las cuatro estaciones. Todos los modelos están inclinados.",
  };

  export default {
    dialogData: {
      start: {
        ...info,
        buttonContinueText: globalData.buttonLabels.start,
        buttonContinueLabel: globalData.buttonLabels.start,
      },
      info: {
        ...info,
        buttonClasses: "",
        buttonContinueText: globalData.buttonLabels.close,
        buttonContinueLabel: globalData.buttonLabels.close,
        content:
        "Washington D. C. está en el hemisferio norte. Sídney, Australia, está en el hemisferio sur.",
      },
      correct: {
        ...info,
        buttonContinueText: globalData.buttonLabels.continue,
        buttonContinueLabel: globalData.buttonLabels.continue,
      },
      incorrect: {
        ...info,
        dialogType: "warning",
        buttonContinueText: globalData.buttonLabels.close,
        buttonContinueLabel: globalData.buttonLabels.close,
      },
    },
  
    mcqQuestionText:
    "¿Qué estación experimenta el hemisferio norte cuando la Tierra está en esta posición de su órbita? (Pista: Washington D. C. está en el hemisferio norte).",
    mcqOptions: [
      { text: "Invierno", id: "winter" },
      { text: "Verano", id: "summer" },
      { text: "Primavera", id: "spring" },
      { text: "Otoño", id: "fall_autumn" },
    ],
    mcqOptions2: [
      { text: "El mes del año", id: "month" },
      { text: "La temperatura promedio", id: "temperature" },
      {
        text: "La dirección de la traslación de la Tierra alrededor del Sol",
        id: "direction",
      },
      { text: "La inclinación del eje de la Tierra", id: "tilt" },
    ],
  
    mcqData: [
      {
        id: 1,
        type: "part1",
        timeLabel: "22 de diciembre",
        alt: imagesAltText.tiltedDec22,
        textContent:
          "¿Qué estación experimenta el hemisferio norte cuando la Tierra está en esta posición de su órbita?",
        answer: "winter",
        graphData: {
          data1: {
            templeft: "48",
            tempright: "30",
            city: "Washington D. C.",
          },
          data2: {
            templeft: "78",
            tempright: "64",
            city: "Sídney, Australia",
          },
        },
      },
      {
        id: 2,
        type: "part2",
        timeLabel: "22 de diciembre",
        alt: imagesAltText.tiltedDec22,
        textContent:
           "¿Qué estación experimenta el hemisferio sur cuando la Tierra está en esta posición de su órbita?",
        answer: "summer",
        graphData: {
          data1: {
            templeft: "48",
            tempright: "30",
            city: "Washington D. C.",
          },
          data2: {
            templeft: "78",
            tempright: "64",
            city: "Sídney, Australia",
          },
        },
      },
  
      {
        id: 3,
        type: "part3",
        timeLabel: "21 de marzo",
        alt: imagesAltText.tiltedMar21,
        textContent:
        "¿Qué estación experimenta el hemisferio norte cuando la Tierra está en esta posición de su órbita?",
        answer: "spring",
        graphData: {
          data1: {
            templeft: "56",
            tempright: "35",
            city: "Washington D. C.",
          },
          data2: {
            templeft: "71",
            tempright: "59",
            city: "Sídney, Australia",
          },
        },
      },
      {
        id: 4,
        type: "part4",
        timeLabel: "21 de marzo",
        alt: imagesAltText.tiltedMar21,
        textContent:
        "¿Qué estación experimenta el hemisferio sur cuando la Tierra está en esta posición de su órbita?",
        answer: "fall_autumn",
        graphData: {
          data1: {
            templeft: "56",
            tempright: "35",
            city: "Washington D. C.",
          },
          data2: {
            templeft: "71",
            tempright: "59",
            city: "Sídney, Australia",
          },
        },
      },
  
      {
        id: 5,
        type: "part5",
        timeLabel: "22 de junio",
        alt: imagesAltText.tiltedJun22,
        textContent:
        "¿Qué estación experimenta el hemisferio norte cuando la Tierra está en esta posición de su órbita?",
        answer: "summer",
        graphData: {
          data1: {
            templeft: "85",
            tempright: "63",
            city: "Washington D. C.",
          },
          data2: {
            templeft: "63",
            tempright: "49",
            city: "Sídney, Australia",
          },
        },
      },
      {
        id: 6,
        type: "part6",
        timeLabel: "22 de junio",
        alt: imagesAltText.tiltedJun22,
        textContent:
        "¿Qué estación experimenta el hemisferio sur cuando la Tierra está en esta posición de su órbita?",
        answer: "winter",
        graphData: {
          data1: {
            templeft: "85",
            tempright: "63",
            city: "Washington D. C.",
          },
          data2: {
            templeft: "63",
            tempright: "49",
            city: "Sídney, Australia",
          },
        },
      },
  
      {
        id: 7,
        type: "part7",
        timeLabel: "23 de septiembre",
        alt: imagesAltText.tiltedSep23,
        textContent:
        "¿Qué estación experimenta el hemisferio norte cuando la Tierra está en esta posición de su órbita?",
        answer: "fall_autumn",
        graphData: {
          data1: {
            templeft: "81",
            tempright: "59",
            city: "Washington D. C.",
          },
          data2: {
            templeft: "69",
            tempright: "53",
            city: "Sídney, Australia",
          },
        },
      },
      {
        id: 8,
        type: "part8",
        timeLabel: "23 de septiembre",
        alt: imagesAltText.tiltedSep23,
        textContent:
        "¿Qué estación experimenta el hemisferio sur cuando la Tierra está en esta posición de su órbita?",
        answer: "spring",
        graphData: {
          data1: {
            templeft: "81",
            tempright: "59",
            city: "Washington D. C.",
          },
          data2: {
            templeft: "69",
            tempright: "53",
            city: "Sídney, Australia",
          },
        },
      },
      {
        id: 9,
        type: "part9",
        timeLabel: "22 de diciembre",
        alt: imagesAltText.nontiltedDec22,
        graphData: {
          data1: {
            templeft: "69",
            tempright: "46",
            city: "Washington D. C.",
          },
          data2: {
            templeft: "73",
            tempright: "59",
            city: "Sídney, Australia",
          },
        },
      },
      {
        id: 10,
        type: "part10",
        timeLabel: "21 de marzo",
        alt: imagesAltText.nontiltedMar21,
        graphData: {
          data1: {
            templeft: "69",
            tempright: "46",
            city: "Washington D. C.",
          },
          data2: {
            templeft: "73",
            tempright: "59",
            city: "Sídney, Australia",
          },
        },
      },
      {
        id: 11,
        type: "part11",
        timeLabel: "22 de junio",
        alt: imagesAltText.nontiltedJun22,
        graphData: {
          data1: {
            templeft: "69",
            tempright: "46",
            city: "Washington D. C.",
          },
          data2: {
            templeft: "73",
            tempright: "59",
            city: "Sídney, Australia",
          },
        },
      },
      {
        id: 12,
        type: "part12",
        timeLabel: "23 de septiembre",
        alt: imagesAltText.nontiltedSep23,
        graphData: {
          data1: {
            templeft: "69",
            tempright: "46",
            city: "Washington D. C.",
          },
          data2: {
            templeft: "73",
            tempright: "59",
            city: "Sídney, Australia",
          },
        },
      },
      {
        id: 13,
        type: "part9",
        timeLabel: "22 de diciembre",
        alt: imagesAltText.nontiltedDec22,
        graphData: {
          data1: {
            templeft: "69",
            tempright: "46",
            city: "Washington D. C.",
          },
          data2: {
            templeft: "73",
            tempright: "59",
            city: "Sídney, Australia",
          },
        },
      },
      {
        id: 14,
        alt: imagesAltText.lastmcq,
        type: "lastmcq",
        textContent:
          "¿Cuál de los siguientes factores afecta más cómo se experimentan las estaciones en la Tierra?",
        answer: "tilt",
        timeLabels: [...earthPositionLabels],
      },
    ],
  
    graphCommonData: {
      yaxis: [0, 20, 40, 60, 80, 100],
      axis: { xaxis: "eje X", yaxis: "eje Y" },
      temperature: "Temperatura promedio (°F)",
      average: {
        hightemperature: "Temperatura máxima promedio",
        lowtemperature: "Temperatura mínima promedio",
      },
      temperatureUnit: "fahrenheit",
      graphSRLabel:
        "Un gráfico que muestra la temperatura promedio en grados; el eje horizontal se titula «Zonas» y el eje vertical se titula «Temperatura».",
      highTempAltText: "La temperatura máxima promedio en -1- es de -2- grados Fahrenheit",
      lowTempAltText: "La temperatura mínima promedio en -1- es de -2- grados Fahrenheit",
    },
  
    questionHeading: "Pregunta 1 de 2.",
    buttonLabels: { ...globalData.buttonLabels },
  
    completionPopup: {
      ...globalData.completionPopup,
      content: "Has completado la simulación.",
    },
  
    transitionPopup1: {
      ...globalData.transitionPopup,
      content:
        "Acabas de representar cómo el movimiento de la Tierra en su órbita afecta las estaciones en los hemisferios norte y sur durante un año completo. A continuación, explorarás el efecto que tendría eliminar la inclinación de la Tierra en las estaciones del año.",
    },
    transitionPopup2: {
      ...globalData.transitionPopup,
      content:
        "Ahora que has completado otra órbita alrededor del Sol, contesta correctamente las siguientes preguntas para concluir la simulación.",
    },
  
    InfoBoxContent:
      "Identify the type of reaction based on your knowledge of reaction types and chemicals present.",
    instructionBoxContent:
    "Observa la posición de la Tierra en su órbita y analiza los datos del gráfico. Contesta correctamente todas las preguntas antes de pasar a la próxima posición orbital.",
    infoContent:
      "Go through 10 different nuclear equations and select the right radioactive particle to balance them.",
    audioAriaLable:
      "If you are using screen reader, turn off the audio button for better experience.",
    commonTextForMCQScreen1:
       "Observa la posición de la Tierra en su órbita y analiza los datos del gráfico. Contesta correctamente todas las preguntas antes de pasar a la próxima posición orbital.",
    commonTextForMCQScreen2:
    'Observa la posición de la Tierra en su órbita y analiza los datos del gráfico. Presiona la flecha «Siguiente» para mover la Tierra a la siguiente posición orbital.',
    introImageAlt: imagesAltText.intro,
    introPopupLabels: [
      {
        id: "iplabel0",
        labels: [
          {
            id: "i0l1",
            text: "23.5<span style='font-weight:400 !important;'>&deg</span>",
          },
        ],
      },
      ...earthPositionLabels,
    ],
    resetLiveText: globalData.resetLiveText,
    resetPopupText: globalData.resetPopupText,
    correctToastMessage: globalData.correctToastMessage,
    incorrectToastMessage: globalData.incorrectToastMessage,
  };
  
  
  