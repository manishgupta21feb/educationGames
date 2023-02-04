import globalConfig from "../../app/data";
import Animation from "../assets/videos/Animation.mp4";
const buttonLabels = { ...globalConfig.buttonLabels };

const data = {
  buttonNo: buttonLabels.no,
  buttonYes: buttonLabels.yes,
  buttonLabelsData: { ...globalConfig.buttonLabels },
  infoText: buttonLabels.info,
  resetText: buttonLabels.reset,
  buttonContinue: buttonLabels.continue,
  buttonNext: buttonLabels.next,
  buttonStart: buttonLabels.start,
  buttonClose: buttonLabels.close,
  buttonFinish: buttonLabels.finish,
  resetConfirmationText: globalConfig.resetLiveText,
  altintroimgtextOne: "Una escena de una playa cerca de la hora de la puesta del sol. El agua se extiende hasta la costa. No se ve arena.",
  altintroimgtextTwo: "Una escena de la misma playa durante el día. El agua cubre la mitad de la arena. La otra mitad de la arena queda a la vista.",
  instructionBoxContent:
    "Imagínate que una tarde vas a pescar y encuentras una roca en la que puedes pararte para lanzar tu anzuelo. Al día siguiente, llevas a un amigo a pescar al mismo lugar y te encuentras con que el agua está muy lejos. Hoy explorarás qué hace posible las mareas oceánicas.",
  InfoBoxContent:
    "Haz clic sobre los botones para aprender acerca de las diferencias en las mareas terrestres. Luego, lee cada escenario y predice el tipo de marea que se puede producir.",
  resetMsgContent: globalConfig.resetPopupText,
  commonText:
    "Predice el tipo de marea que podría experimentar la Tierra en cada escenario.",
 
  observationsData: [
    {
      id: "animation",
      classes: "animation",
      videoSrc: Animation,
      isPlayed: false,
      buttonLabels: "Planeta en movimiento",
      alt: "A medida que la Luna gira alrededor de la Tierra, el abultamiento mareal terrestre cambia constantemente porque la Luna atrae el agua hacia sí.",
      ariaLiveText: "A medida que la Luna gira alrededor de la Tierra, el abultamiento mareal terrestre cambia constantemente porque la Luna atrae el agua hacia sí.",
      text: "Planeta en movimiento",
      experimentName: "Animation",
      isDisable: false,
    },
  ],
  time1: "6:00 p. m.",
  time2: "11:00 a. m.",
  equationsData: [
    {
      srNo: 1,
      id: "question1",
      answer: "springtide",
      moonStageText: "Luna nueva",
      altimgText: "Luna en posición de luna nueva, ubicada en línea recta entre el Sol y la Tierra; el abultamiento mareal está orientado hacia la Luna.",
      questionText:
        "Si la Luna está en fase de luna nueva en su órbita alrededor de la Tierra, mi predicción es que el océano tendrá una  <span aria-hidden=true>_________.</span><span class=sr-only> espacio en blanco.</span>  ",
    },
    {
      srNo: 2,
      id: "question2",
      answer: "neaptide",
      moonStageText: "Luna en cuarto creciente",
      altimgText: "Luna en posición de cuarto creciente, perpendicular a la línea formada por el Sol y la Tierra y ubicada debajo de esta última; el abultamiento mareal está orientado hacia la Luna.",
      questionText:
        "Si la Luna está en fase de cuarto creciente en su órbita alrededor de la Tierra, mi predicción es que el océano tendrá una <span aria-hidden=true>_________.</span><span class=sr-only> espacio en blanco.</span> ",
    },
    {
      srNo: 3,
      id: "question3",
      answer: "neaptide",
      moonStageText: "Luna en cuarto menguante",
      altimgText: "Luna en posición de cuarto menguante, perpendicular a la línea formada por el Sol y la Tierra y ubicada por encima de esta última; el abultamiento mareal está orientado hacia la Luna.",
      questionText:
        "Si la Luna está en fase de cuarto menguante en su órbita alrededor de la Tierra, mi predicción es que el océano tendrá una<span aria-hidden=true>_________.</span><span class=sr-only> espacio en blanco.</span> ",
    },
    {
      srNo: 4,
      id: "question4",
      moonStageText: "Luna llena",
      answer: "springtide",
      altimgText: "Luna en posición de luna llena, alineada con el Sol y la Tierra; el abultamiento mareal está orientado hacia la Luna.",
      questionText:
        "Si la Luna está en fase de luna llena en su órbita alrededor de la Tierra, mi predicción es que el océano tendrá una <span aria-hidden=true>_________.</span><span class=sr-only> espacio en blanco.</span> ",
    },
  ],
  equationOptions: [
    {
      id: "springtide",
      disabled: false,
      text: "marea viva",
      label: "marea viva",
    },
    {
      id: "neaptide",
      disabled: false,
      text: "marea muerta",
      label: "marea muerta",
    },
  ],

  submitAnswer: buttonLabels.submitAnswer,
  resetLiveText: globalConfig.resetLiveText,
  rightMsg: globalConfig.correctToastMessage,
  wrongMsg: globalConfig.incorrectToastMessage,

  hotspotData: [
    {
      id: 0,
      className: "outdoor-screen",
      altText: "Diagrama del sistema formado por la Tierra, el Sol y la Luna. Se muestra la Luna en 4 posiciones distintas alrededor de la Tierra. La posición A está entre el Sol y la Tierra. La Luna gira alrededor de la Tierra en sentido contrario a las manecillas del reloj.",
      hotspots: [
        
        {
          id: "B",
          altText: "Luna B",
          serNo: 2,
          text: "B",
        },
        {
          id: "C",
          altText: "Luna C",
          serNo: 3,
          text: "C",
        },
        {
          id: "A",

          altText: "Luna A",
          serNo: 1,
          text: "A",
        },
        {
          id: "D",
          altText: "Luna D",
          serNo: 4,
          text: "D",
        },
      ],
      introductionHeading:
        "La <b>fuerza gravitacional</b> de la Luna hace que los océanos se abulten o sobresalgan hacia ella cada día. A medida que la Tierra gira, se experimenta una cantidad mayor o menor de esta fuerza en diferentes ubicaciones.<br><br> En los lugares donde los océanos se abultan se producen  <b>mareas altas</b>. Esto ocurre cuando el nivel del mar alcanza su altura máxima y las aguas oceánicas llegan más lejos tierra adentro. En los lugares donde los océanos no se abultan se producen <b>mareas bajas.</b> Esto ocurre cuando el nivel del mar alcanza su altura mínima y la profundidad de las aguas oceánicas cerca de la costa es muy baja.<br><br>Además de las mareas altas y bajas que ocurren a diario, la Tierra experimenta mareas vivas y muertas. Hoy explorarás cómo la <b>fuerza gravitacional</b> del Sol y la Luna en diferentes posiciones afecta las mareas vivas y muertas en la Tierra. Haz clic sobre los botones para aprender más sobre este tema.",
      clickContent: "Haz clic sobre cada elemento para obtener más información.",
      ariaLabel: "Área exterior",
    },
  ],
  lowTideText: "Marea baja",
  highTideText: "Marea alta",
  moonText: "Luna",
  sunText: "Sol",
  earthText: "Tierra",
  secondScreenText: [
    {
      id: 1,
      imageClass: "hotspot-a",
      moonStage: "Luna nueva",
      tideText: "Marea viva",
      imgAlt: "La Luna en una línea recta entre la Tierra y el Sol. El abultamiento mareal está orientado hacia la Luna. Cuando la Tierra experimenta una marea viva, se alcanzan las mayores mareas altas y las menores mareas bajas.",
      introductionHeading:
        "Cuando la Luna está situada en una línea recta entre la Tierra y el Sol, se encuentra en la fase de <b>luna nueva</b>. En esta posición, el Sol y la Luna ejercen su <b>fuerza gravitacional</b> sobre la Tierra en la misma dirección.Esto amplía el efecto de la fuerza y hace que los océanos se abulten mucho en esos días.La Tierra experimenta estas mareas altas mayores y mareas bajas menores, conocidas como <b>mareas vivas</b>, dos veces en cada ciclo lunar.",
    },
    {
      id: 2,
      imageClass: "hotspot-b",
      moonStage: "Cuarto creciente",
      tideText: "Marea muerta",
      imgAlt: "Luna en posición perpendicular a la Tierra y por encima de ella. El abultamiento mareal está orientado hacia la Luna. Cuando la Tierra experimenta una marea muerta, las mareas altas y bajas son moderadas.",

      introductionHeading:
        "Después de unos siete días, la Luna pasa a la fase de <b>cuarto creciente</b>.En esta posición, la Luna, la Tierra y el Sol forman un ángulo de 90°. Como la Luna está más cerca de la Tierra que el Sol, su atracción gravitacional sobre la Tierra es mayor. Por lo tanto, el océano terrestre se abulta hacia la Luna, pero no hacia el Sol. La Luna y el Sol ejercen sus fuerzas gravitacionales en direcciones diferentes, de modo que anulan mutuamente una parte de su impacto. La Tierra experimenta estas mareas altas y bajas de menor altura, conocidas como<b>mareas muertas</b>,dos veces en cada ciclo lunar.",
    },
    {
      id: 3,

      imageClass: "hotspot-c",
      moonStage: "Luna llena",
      tideText: "Marea viva",
      imgAlt: "La Tierra en una línea recta entre la Luna y el Sol. El abultamiento mareal está orientado hacia la Luna. Cuando la Tierra experimenta una marea viva, se alcanzan las mayores mareas altas y las menores mareas bajas.",
      introductionHeading:
        "Después de unos siete días, la Luna pasa a la fase de <b>luna llena</b>. Nuevamente, la Luna, la Tierra y el Sol están alineados. Cada vez que estos tres cuerpos celestes forman una línea recta, la Tierra experimenta una <b>marea viva</b>.",
    },
    {
      id: 4,
      imageClass: "hotspot-d",
      moonStage: "Cuarto menguante",
      tideText: "Marea muerta",
      imgAlt: "Luna en posición perpendicular a la Tierra y por debajo de ella. El abultamiento mareal está orientado hacia la Luna. Cuando la Tierra experimenta una marea muerta, las mareas altas y bajas son moderadas.",
      introductionHeading:
        "Después de unos siete días, la Luna pasa a la fase de <b>cuarto menguante</b>. Nuevamente, la Luna, la Tierra y el Sol forman un ángulo de 90°. Cada vez que estos tres cuerpos celestes forman un ángulo de 90°, la Tierra experimenta una <b>marea muerta</b>.",
    },
  ],

  questionHeading: "Pregunta: -1- de 4",
  completionPopup: {
    ...globalConfig.completionPopup,
    content:
      "¡Has predicho correctamente cómo las posiciones del Sol, la Tierra y la Luna afectan las mareas!",
  },
  transitionPopup: {
    ...globalConfig.transitionPopup,
    content:
      "Has explorado exitosamente cómo las posiciones del Sol, la Tierra y la Luna afectan las mareas. Ahora ha llegado el momento de demostrar lo que sabes.",
  },
  messages: [
    {
      type: "reset",
      resetButtonText: buttonLabels.yes,
      buttonContinueText: buttonLabels.no,
      content: globalConfig.resetPopupText,
    },
  ],
  activityHeading:
    "Los estudiantes observan las fuerzas gravitacionales que ejercen el Sol y la Luna en diferentes posiciones y hacen predicciones sobre las mareas vivas y muertas.",
};

export default data;
