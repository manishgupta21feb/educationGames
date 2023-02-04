import globalCommonData from "../../app/data";
import experiment1 from "../assets/videos/experiment1.mp4";
import experiment2 from "../assets/videos/experiment2.mp4";
import experiment3 from "../assets/videos/experiment3.mp4";
import redArrow from "../assets/images/arrows.png";
import exp1_start from "../assets/images/exp1_start.png";
import exp1_end from "../assets/images/exp1_end.png";
import exp2_start from "../assets/images/exp2_start.png";
import exp2_end from "../assets/images/exp2_end.png";
import exp3_start from "../assets/images/exp3_start.png";

const data = {
  mainScreenAlt:
    "Una mesa de laboratorio con 3 estaciones: la de conducción tiene 2 vasos con termómetros y una barra de metal; la de convección tiene un vaso de precipitados con agua sobre una placa calefactora y un plato con arroz; la de radiación tiene una lámpara y un radiómetro.",
  observationMotive:
    "Los estudiantes realizan experimentos en un laboratorio de ciencias para investigar los métodos de transferencia de energía térmica.",
  resetLiveText: globalCommonData.resetLiveText,
  observationAlt:
    "Una mesa de laboratorio con 3 estaciones: la de conducción tiene 2 vasos con termómetros y una barra de metal; la de convección tiene un vaso de precipitados con agua sobre una placa calefactora y un plato con arroz; la de radiación tiene una lámpara y un radiómetro.",
  instructionBoxContent:
    "Bienvenido al laboratorio de ciencias. Hoy exploraremos los tres tipos de transferencia de energía térmica.",
  infoContent:
    "Elige un experimento científico para aprender más sobre la transferencia de energía térmica.",
  finsihBoxHeader: "¡Felicitaciones!",
  finishBoxContent: "¡Has completado exitosamente la simulación!",
  nextScreenCompletion: {
    text:
      "Ahora que has investigado los tres métodos de transferencia de energía térmica, es hora de demostrar lo que sabes.",
    heading: "¡Buen trabajo!",
    button: "Continuar",
  },
  dropzone: "área para colocar-",
  dropzoneText: " se suelta en el área para colocar - ",
  h1InfoTextA11Y:
    "Contesta las siguientes preguntas para demostrar lo que sabes. Determina cuál de los escenarios representa mejor la conducción, la convección o la radiación.",
  toastMsg: {
    correct: globalCommonData.correctToastMessage,
    incorrect: "No es del todo correcto.",
    partialCorrect: "Algunas de las respuestas son correctas.",
  },
  videoStop: "Detener el video",
  introductionHeading:
    "Selecciona cada uno de los experimentos que hay en la mesa de laboratorio para investigar los diferentes métodos de transferencia de energía térmica.",
  buttonLabels: { ...globalCommonData.buttonLabels },
  redArrow: {
    aria: "Barra de metal",
  },
  readingMeters: {
    meterA: {
      label: "Termómetro A",
      value: 20,
      endValue: 31,
    },
    meterB: {
      label: "Termómetro B",
      value: 40,
      endValue: 31,
    },
  },
  completionScreen: {
    ...globalCommonData.completionPopup,
    content: "¡Felicitaciones! ¡Has completado exitosamente la simulación!",
  },
  isDroppedOn: "se suelta en el",
  Screen3: {
    questionHeading:
      "Determina cuál de los escenarios representa mejor la conducción, la convección o la radiación.",
    options: [
      {
        id: "te_1",
        name: "Radiación",
        isDisable: false,
        answerId: "Radiación",
        isHidden: false,
        draggableTxt: "arrastrable",
      },
      {
        id: "te_2",
        name: "Conducción",
        isDisable: false,
        answerId: "Conducción",
        isHidden: false,
        draggableTxt: "arrastrable",
      },
      {
        id: "te_3",
        name: "Convección",
        isDisable: false,
        answerId: "Convección",
        isHidden: false,
        draggableTxt: "arrastrable",
      },
    ],
    description:
      "Determina cuál de los escenarios representa mejor la conducción, la convección o la radiación.",
    questionList: [
      {
        id: "te_drop_0",
        value: "1. Un estudiante asa un malvavisco sobre el fuego.",
        answerId: "Radiación",
        hidden: false,
        aria: "área para colocar 1",
        label:
          "1. Un estudiante asa un malvavisco sobre el fuego, área para colocar.",
      },
      {
        id: "te_drop_1",
        value:
          "2. Cuando sujetas una taza de chocolate caliente, tus manos se calientan.",
        answerId: "Conducción",
        hidden: false,
        aria: "área para colocar 2",
        label:
          "2. Cuando sujetas una taza de chocolate caliente, tus manos se calientan, área para colocar.",
      },
      {
        id: "te_drop_2",
        value:
          "3. En el segundo piso de la escuela hace más calor y en el primero hace más frío.",
        label:
          "3. En el segundo piso de la escuela hace más calor y en el primero hace más frío, área para colocar.",
        answerId: "Convección",
        hidden: false,
        aria: "área para colocar 3",
      },
    ],
  },
  messages: [
    {
      type: "Reiniciar",
      resetButtonText: "Si",
      buttonContinueText: "No",
      header: "Reiniciar la simulación",
      content: "¿Estás seguro de que quieres reiniciar?",
    },
  ],
  thermometer: [
    {
      label: "Termómetro 1",
      aria: "Termómetro 1",
      classes: "meter-1 meter1-es",
    },
    {
      label: "Termómetro 2",
      aria: "Termómetro 2",
      classes: "meter-2",
    },
    {
      label: "°C",
      classes: "degree-1 degree-1-es",
    },
    { label: "°C", classes: "degree-2 degree-2-es" },
    { label: "100 ºC", classes: "degree-3" },
  ],
  animationInfo: [
    {
      label: "Vaso A",
      aria: "Vasos térmicos con agua: Vaso A",
      classes: "cup-a-es",
    },
    {
      label: "Vaso B",
      aria: "Vasos térmicos con agua: Vaso B",
      classes: "cup-b-es",
    },
  ],
  observationsData: [
    {
      id: "te_video_1",
      lablesBeforeAfter: [
        { id: 0, before: "A", classes: "exp1__cup-a", after: "A" },
        { id: 0, before: "B", classes: "exp1__cup-b", after: "B" },
        {
          id: 1,
          before: "20",
          classes: "exp1__meter-1 es",
          after: "31",
          text: "°C",
          classes2: "exp1__degree1 es",
        },
        {
          id: 2,
          before: "40",
          classes: "exp1__meter-2 es",
          after: "31",
          text: "°C",
          classes2: "exp1__degree2 es",
        },
      ],
      classes: "exp1",
      beforeExperiment:
        "Esta investigación demuestra la conducción. La <b> conducción </b> es un método de transferencia térmica que ocurre cuando dos objetos se tocan directamente. ¿Qué crees que pasará al añadir la barra de metal a los vasos? Haz clic sobre el botón para reproducir el video y ver cómo la conducción afecta la temperatura del agua en cada vaso.",

      afterExperiment:
        "Observa los resultados. ¿Qué ocurrió con la temperatura del vaso A? ¿Y con la del vaso B? Nota que la temperatura del vaso A aumentó lentamente y la temperatura del vaso B disminuyó lentamente hasta que ambos vasos alcanzaron la misma temperatura. Esto se llama <b> equilibrio térmico</b>.",
      videoSrc: experiment1,
      isPlayed: false,
      buttonLabels: "Conducción",
      experimentName: "Investigación de la conducción",
      alt:
        "2 vasos térmicos con agua sobre una mesa de laboratorio: vaso A y vaso B. El termómetro en el vaso A marca 20 °C y el termómetro del vaso B marca 40 °C. A la derecha hay una barra metálica doblada.",
      afterAlt:
        "2 vasos térmicos con agua sobre una mesa de laboratorio: vaso A y vaso B. El termómetro en el vaso A marca 31 °C y el termómetro del vaso B marca 31 °C. A la derecha hay una barra metálica doblada.",
      liveText:
        "Se añade una barra metálica doblada a 2 vasos blancos llenos de agua. La temperatura del agua es de 20 °C en el vaso A y 40 °C en el vaso B. Durante la animación, el vaso A sube a 31 °C y el vaso B baja a 31 °C.",
      isDisable: false,
      labels: [
        {
          labelName: "Vasos térmicos con agua",
          classes: "two-cup",
        },
        {
          labelName: "Barra de metal",
          classes: "metal-bar-es",
        },
      ],
    },
    {
      id: "te_video_2",
      lablesBeforeAfter: [
        {
          // before: "100<span style='font-family:TisaPro'>°</span>C",
          // classes: "exp2__degree",
          // after: "100<span style='font-family:TisaPro'>°</span>C ",
          before: "100 ºC",
          classes: "exp2__degree",
          after: "100 ºC",
        },
      ],
      classes: "exp2",
      beforeExperiment:
        "Esta investigación demuestra la convección. La <b> convección </b> es un tipo de transferencia térmica que ocurre en líquidos y gases cuando las partículas más calientes y menos densas se mueven hacia arriba, y las partículas más frías y densas se mueven hacia abajo. Mira los materiales que tenemos hoy en el laboratorio. ¿De qué forma crees que veremos cómo ocurre la convección? Haz clic sobre el botón para reproducir el video. ",
      afterExperiment:
        "Observa los resultados. Nota que el arroz subió y bajó en el agua hirviente. Esto ocurrió debido a la<b> convección</b>. A medida que el agua se calentó, subió y elevó el arroz. Luego, empujó hacia abajo el agua más fría que estaba arriba. Esto creó una corriente circular.",
      videoSrc: experiment2,
      isPlayed: false,
      buttonLabels: "Convección",
      experimentName: "Investigación de la convección",
      afterAlt: "Agua que hierve a 100 °C. Se añade arroz al agua hirviente.",
      alt:
        "Hay un vaso de precipitados con agua hirviente sobre una placa calefactora. A su derecha, sobre la mesa, hay un plato con un montón de arroz crudo.",
      liveText:
        "Agua que hierve a 100 °C. Se añade arroz al agua hirviente. El arroz se mueve en forma circular, cae al fondo, se calienta y vuelve a subir.",
      isDisable: false,
      labels: [
        {
          labelName: "Agua",
          classes: "water",
        },
        {
          labelName: "Placa calefactora",
          classes: "hot-plate-es",
        },
        {
          labelName: "Arroz crudo",
          classes: "uncooked-rice-es",
        },
      ],
    },
    {
      id: "te_video_3",
      lablesBeforeAfter: [],
      classes: "exp3",
      beforeExperiment:
        "Esta investigación demuestra la radiación. La <b> radiación </b> es un tipo de transferencia térmica que ocurre debido al movimiento de ondas electromagnéticas o partículas subatómicas. Mira los materiales que tenemos hoy en el laboratorio. ¿Cómo crees que ocurrirá la radiación? ¡Enciende la lámpara para verlo!",
      afterExperiment:
        "Observa lo que ocurrió en el radiómetro al encender la lámpara. Aunque la lámpara no lo tocaba, la pieza en su interior se movía. Esto se debe a la <b> radiación</b>. Los radiómetros se mueven cada vez que detectan radiación infrarroja. Estos instrumentos nos ayudan a determinar si hay radiación infrarroja, ya que nuestros ojos no pueden ver esas ondas.",
      videoSrc: experiment3,
      isPlayed: false,
      buttonLabels: "Radiación",
      experimentName: "Investigación de la radiación",
      afterAlt:
        "Cuando se enciende la luz, la veleta negra y blanca del radiómetro se mueve.",
      liveText:
        "Debajo de una lámpara hay un radiómetro, que es un instrumento en forma de bombilla con una veleta negra y blanca. Cuando la luz está encendida, la veleta se mueve. Cuando la luz está apagada, la veleta se detiene.",
      alt:
        "Cuando se apaga la luz, la veleta negra y blanca del radiómetro no se mueve.",
      isDisable: false,
      labels: [
        {
          labelName: "Lámpara de calor",
          classes: "heat-lamp-es",
        },
        {
          labelName: "Radiómetro",
          classes: "radiometer",
        },
      ],
    },
  ],
  currentExperimentNumber: -1,
};

export default data;
