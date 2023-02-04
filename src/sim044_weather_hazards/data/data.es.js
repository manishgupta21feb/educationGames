import globalData from "../../app/data";
const data = {
    activityInstructions:
      "Pulsa las zonas activas para leer la información sobre el tiempo en el área correcta del país.",
    hotspots: [
      {
        id: "tarantula",
        title: "Sequía en la frontera entre Nuevo México y Arizona",
        imageAlt: "Un desierto seco, agrietado y sin plantas con un sol brillante.",
        heading:
          "Esta área experimenta una sequía. No llueve hace más de 165 días.",
        listItems: [],
      },
      {
        id: "differentrocklayers",
        title: "Tornado en la frontera entre Iowa y Misuri",
        imageAlt:
          "Un tornado que baja de una nube de tormenta al lado de una carretera plana vacía.",
        heading:
          "¡Aquí se pronostican tornados! Estos ocurren en tormentas eléctricas con vientos giratorios a una velocidad de hasta 300 mph.",
        listItems: [],
      },
      {
        id: "stingray",
        title: "Tormenta de nieve en el estado de Pensilvania",
        imageAlt:
          "Una carretera totalmente nevada, con bancos de nieve que llegan hasta la mitad de los troncos de los árboles que bordean la carretera.",
        heading:
          "¡Se acerca una tormenta de nieve! Eso significa que habrá mucha lluvia, temperaturas bajas y quizás hasta vientos fuertes.",
        listItems: [],
      },
      {
        id: "coyotetracks",
        title: "Huracán en el estado de Carolina del Sur",
        imageAlt:
          "Una vista aérea de un huracán cuya pared de nubes blancas se arremolinan y se esparcen hasta cubrir toda la imagen.",
        heading:
          "Un huracán pasará varios días en esta área. Los huracanas son tormentas grandes que se forman sobre el océano antes de tocar tierra.",
        listItems: [],
      },
    ],

    transitionPopup: {
        ...globalData.transitionPopup,
        content:
          "<p>Ahora que has leído sobre el estado del tiempo, elige la acción más adecuada para cada amenaza meteorológica. </p><p>Esta información es importante para que el público de Wanda, la presentadora del tiempo, pueda mantenerse a salvo.</p>",
      },
      completionPopup: {
        ...globalData.completionPopup,
        content: "Has completado correctamente la simulación.",
      },
    
      questionHeading: "Pregunta: 1 de 7",
      questionHeading2:
        "Elige la amenaza meteorológica que se relaciona con la acción descrita.",
      questionsData: [
        {
          id: 1,
          label: "Almacena agua en tu casa.",
          answer: "Sequía",
          answerId: "Drought",
        },
        {
          id: 2,
          label: "Toma bebidas frías para mantenerte hidratado.",
          answer: "Sequía",
          answerId: "Drought",
        },
        {
          id: 3,
          label:
            "Haz un plan para mantenerte caliente si se va la luz. Puedes usar una chimenea como calefacción. Asegúrate de tener suficientes cobijas, guantes y gorros.",
          answer: "Tormenta de nieve",
          answerId: "Blizzard",
        },
        {
          id: 4,
          label: "No conduzcas con nieve. Las carreteras estarán muy resbaladizas.",
          answer: "Tormenta de nieve",
          answerId: "Blizzard",
        },
        {
          id: 5,
          label: "Ve a una habitación sin ventanas para protegerte del viento.",
          answer: "Tornado",
          answerId: "Tornado",
        },
        {
          id: 6,
          label:
            "Escucha las emisoras de radio de noticias locales, ya que con este tiempo puede haber cambios muy rápidos. Una alerta de vigilancia significa que esta condición del tiempo es posible. Una advertencia significa que la condición del tiempo se avecina y debes buscar refugio.",
          answer: "Tornado",
          answerId: "Tornado",
        },
        {
          id: 7,
          label:
            "Averigua la ruta de evacuación de tu ciudad y prepárate para salir si las autoridades locales lo piden. En estas condiciones, lo más seguro es abandonar el área. Tapa las ventanas con persianas o tablones de madera para protegerlas de cualquier objeto volador.",
          answer: "Huracán",
          answerId: "Hurricane",
        },
      ],
      answerOptions: [
        {
          id: "Drought",
          disabled: false,
          imgAlt: "",
          text: "Sequía",
          label: "Sequía",
        },
        {
          id: "Tornado",
          disabled: false,
          text: "Tornado",
          label: "Tornado",
        },
        {
          id: "Blizzard",
          disabled: false,
          text: "Tormenta de nieve",
          label: "Tormenta de nieve",
        },
        {
          id: "Hurricane",
          disabled: false,
          text: "Huracán",
          label: "Huracán",
        },
      ],
    
      resetLiveText: globalData.resetLiveText,
      resetMsgContent: globalData.resetPopupText,
      // questionHeading: globalData.questionCounterString,
      correctToastMessage: globalData.correctToastMessage,
      incorrectToastMessage: globalData.incorrectToastMessage,
      next: globalData.buttonLabels.next,
      continue: globalData.buttonLabels.continue,
      submitAnswer: globalData.buttonLabels.submitAnswer,
      close: globalData.buttonLabels.close,
      finish: globalData.buttonLabels.finish,
      // buttonLabels: { ...globalData.buttonLabels },
      // next: "Next",
      noButton: globalData.buttonLabels.no,
      yesButton: globalData.buttonLabels.yes,
      infoText: globalData.buttonLabels.info,
      resetText: globalData.buttonLabels.reset,
      closeButton: globalData.buttonLabels.close,
      startButton: globalData.buttonLabels.start,
      resetPopupText: globalData.resetPopupText,
      helpPopupText:
        "Pulsa las zonas activas en el mapa para leer las descripciones del estado del tiempo y ayudar a los espectadores de Wanda a prepararse para los pronósticos en sus respectivas áreas. ",
      initialInfoPopupText: [
        "Hoy, ayudarás a Wanda, la presentadora del tiempo, y a su equipo de noticias a informar a los espectadores sobre cómo responder a las amenazas del tiempo en sus respectivas áreas.",
        "El tiempo puede estar caluroso o frío, soleado o lluvioso. A veces, hay condiciones extremas que pueden ser peligrosas para las personas y la propiedad.",
      ],
      fossilsBGAltText:
        "Un mapa de los Estados Unidos con zonas activas sobre cuatro áreas: la frontera entre Nuevo México y Arizona, la frontera entre Iowa y Misuri, el estado de Carolina del Sur y el estado de Pensilvania.",
    };
    
    export default data;
    