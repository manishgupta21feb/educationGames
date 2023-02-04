import commonData from "../../app/data/data.es";
import globalCommonData from "../../app/data/data.es";
const data = {
  greetingMessage: "Hola",
  nextScreenButtonText: "siguiente pantalla",
  backScreenButtonText: "pantalla trasera",
  buttonLabels: { ...commonData.buttonLabels },
  startUpInfo: {
    buttonContinueText: "Comenzar",
    buttonContinueLabel: "Comenzar",
    instructionBoxContent:
      "¡Bienvenido al laboratorio de biología! Hoy identificarás algunas características básicas en muestras de diferentes organismos.",
  },
  mcqScreenHeading:
    "Según tus observaciones microscópicas, has recopilado los siguientes datos sobre diferentes organismos. Úsalos para contestar las preguntas.",
  buttonNo: "No",
  buttonYes: "Sí",
  buttonClose: "Cerrar",
  buttonInfo: "Información",
  buttonReset: "Reiniciar",
  resetMsgContent: "¿Quieres reiniciar?",
  mcqData: {
    tableSummary: "Información sobre las diferentes muestras",
    heading: [
      "",
      "Hoja",
      "Bacterias",
      "Ameba",
      "Humano (células de la mejilla)",
    ],
    tableData: [
      {
        thcontent: "Unicelular o pluricelular",
        leaf: "Pluricelular",
        bacteria: "Unicelular",
        amoeba: "Unicelular",
        human: "Pluricelular",
      },
      {
        thcontent: "Procariota o eucariota",
        leaf: "Eucariota",
        bacteria: "Procariota",
        amoeba: "Eucariota",
        human: "Eucariota",
      },
    ],
  },
  mcqQuestionData: [
    {
      id: "mcq1",
      question:
        "¿Alguno de estos organismos comparte las mismas dos características con otro?",
      radiobuttons: [
        {
          id: "rbsm1",
          value: "Sí",
          text: "Sí",
          label: "Sí",
        },
        {
          id: "rbsm2",
          value: "No",
          text: "No",
          label: "No",
        },
      ],
      answer: "Sí",
    },
    {
      id: "mcq2",
      question:
        "¿Qué dos organismos tienen las mismas características básicas?",
      radiobuttons: [
        {
          id: "rbsmm1",
          value: "Hoja y bacterias",
          text: "Hoja y bacterias",
          label: "Hoja y bacterias",
        },
        {
          id: "rbsmm2",
          value: "Bacterias y ameba",
          text: "Bacterias y ameba",
          label: "Bacterias y ameba",
        },
        {
          id: "rbsmm3",
          value: "Ameba y humano",
          text: "Ameba y humano",
          label: "Ameba y humano",
        },
        {
          id: "rbsmm4",
          value: "Hoja y humano",
          text: "Hoja y humano",
          label: "Hoja y humano",
        },
      ],
      answer: "Hoja y humano",
    },
    {
      id: "mcq3",
      question:
        "Tanto los humanos como las plantas son organismos complejos, pluricelulares y eucariotas. Una de sus diferencias principales es la manera en que obtienen energía. Las plantas son organismos productores que crean su propio alimento a partir de la energía del sol, mientras que los animales (incluidos los humanos) deben consumir la energía de otros organismos. <br><br>Al hablar de las características básicas de los organismos, estos se pueden identificar como autótrofos o heterótrofos. Los autótrofos crean su propio alimento, mientras que los heterótrofos obtienen la energía al consumir otros organismos. Según esta información, determina si las plantas y los humanos son autótrofos o heterótrofos.",
      radiobuttons: [
        {
          id: "rbsmmm1",
          value: "Planta: autótrofo Humano: autótrofo",
          text: "Planta: autótrofo <br> Humano: autótrofo",
          label: "Planta: autótrofo Humano: autótrofo",
        },
        {
          id: "rbsmmm2",
          value: "Planta: heterótrofo Humano: heterótrofo",
          text: "Planta: heterótrofo <br> Humano: heterótrofo",
          label: "Planta: heterótrofo Humano: heterótrofo",
        },
        {
          id: "rbsmmm3",
          value: "Planta: autótrofo Humano: heterótrofo",
          text: "Planta: autótrofo <br> Humano: heterótrofo",
          label: "Planta: autótrofo Humano: heterótrofo",
        },
        {
          id: "rbsmmm4",
          value: "Planta: heterótrofo Humano: autótrofo",
          text: "Planta: heterótrofo <br> Humano: autótrofo",
          label: "Planta: heterótrofo Humano: autótrofo",
        },
      ],
      answer: "Planta: autótrofo Humano: heterótrofo",
    },
  ],
  buttonNext: "Siguiente",
  incorrectToastMessage: "No es del todo correcto. ¡Inténtalo otra vez!",
  correctToastMessage: "¡Es correcto!",
  completionScreen: {
    ...globalCommonData.completionPopup,
    content:
      "¡Has identificado correctamente las características básicas de los organismos!",
  },
  resetLiveText: globalCommonData.resetLiveText,
  levelOneCompletionScreen: {
    ...globalCommonData.transitionPopup,
    content:
      "Has identificado correctamente dos de las características básicas de diferentes organismos. Pasa a la siguiente pantalla para aprender sobre la última característica básica.",
  },
  microscopicView: "Ver bajo el microscopio",
  buttonLabel: [
    {
      id: "leaf",
      value: "Hoja",
      disabled: false,
      text: "Hoja",
      label: "Hoja",
      imageMicroscopicText:
        "Un primer plano circular de la hoja ampliada muestra varias células claramente definidas y pegadas unas a otras como ladrillos. En cada célula se observa un círculo oscuro.",
      imageAltbutton:
        "Hay una muestra de una hoja bajo el lente del microscopio.",
      questionData: [
        {
          id: "mcq1",
          question: "¿Cuántas células tiene esta muestra: una o muchas?",
          radiobuttons: [
            {
              id: "rbs1",
              value: "Una célula",
              text: "Una célula",
              label: "Una célula",
            },
            {
              id: "rbs2",
              value: "Muchas células",
              text: "Muchas células",
              label: "Muchas células",
            },
          ],
          answer: "Muchas células",
        },
        {
          id: "mcq2",
          question:
            "El prefijo <i>uni-</i> significa «uno» y el prefijo <i>pluri-</i> significa «muchos». Según esta información, ¿crees que esta muestra es unicelular o pluricelular?",
          radiobuttons: [
            {
              id: "rbss1",
              value: "Unicelular",
              text: "Unicelular",
              label: "Unicelular",
            },
            {
              id: "rbss2",
              value: "Pluricelular",
              text: "Pluricelular",
              label: "Pluricelular",
            },
          ],
          answer: "Pluricelular",
        },
        {
          id: "mcq3",
          question:
            "Las células eucariotas tienen un núcleo que contiene material genético. Las células procariotas no tienen un núcleo. El núcleo es tan importante que, al examinar la célula bajo el microscopio, se ve como un círculo sólido y oscuro. ¿Observas un núcleo en esta muestra?",
          radiobuttons: [
            {
              id: "rb1",
              value: "Sí",
              text: "Sí",
              label: "Sí",
            },
            {
              id: "rb2",
              value: "No",
              text: "No",
              label: "No",
            },
          ],
          answer: "Sí",
        },
        {
          id: "mcq4",
          question:
            "Entonces, ¿se trata de un organismo eucariota o procariota?",
          radiobuttons: [
            {
              id: "rbm1",
              value: "Eucariota",
              text: "Eucariota",
              label: "Eucariota",
            },
            {
              id: "rbm2",
              value: "Procariota",
              text: "Procariota",
              label: "Procariota",
            },
          ],
          answer: "Eucariota",
        },
      ],
    },
    {
      id: "bacteria",
      value: "Bacterias",
      disabled: false,
      text: "Bacterias",
      label: "Bacterias",
      imageMicroscopicText:
        "Un primer plano circular de las bacterias ampliadas muestra células bacterianas individuales que parecen gusanos pequeños. En las células no se observa ninguna mancha oscura.",
      imageAltbutton:
        "Hay una muestra de bacterias bajo el lente del microscopio.",
      questionData: [
        {
          id: "mcq1",
          question: "¿Cuántas células tiene esta muestra: una o muchas?",
          radiobuttons: [
            {
              id: "rbs1",
              value: "Una célula",
              text: "Una célula",
              label: "Una célula",
            },
            {
              id: "rbs2",
              value: "Muchas células",
              text: "Muchas células",
              label: "Muchas células",
            },
          ],
          answer: "Una célula",
        },
        {
          id: "mcq2",
          question:
            "El prefijo <i>uni-</i> significa «uno» y el prefijo <i>pluri-</i> significa «muchos». Según esta información, ¿crees que esta muestra es unicelular o pluricelular?",
          radiobuttons: [
            {
              id: "rbss1",
              value: "Unicelular",
              text: "Unicelular",
              label: "Unicelular",
            },
            {
              id: "rbss2",
              value: "Pluricelular",
              text: "Pluricelular",
              label: "Pluricelular",
            },
          ],
          answer: "Unicelular",
        },
        {
          id: "mcq3",
          question:
            "Las células eucariotas tienen un núcleo que contiene material genético. Las células procariotas no tienen un núcleo. El núcleo es tan importante que, al examinar la célula bajo el microscopio, se ve como un círculo sólido y oscuro. ¿Observas un núcleo en esta muestra?",
          radiobuttons: [
            {
              id: "rb1",
              value: "Sí",
              text: "Sí",
              label: "Sí",
            },
            {
              id: "rb2",
              value: "No",
              text: "No",
              label: "No",
            },
          ],
          answer: "No",
        },
        {
          id: "mcq4",
          question:
            "Entonces, ¿se trata de un organismo eucariota o procariota?",
          radiobuttons: [
            {
              id: "rbm1",
              value: "Eucariota",
              text: "Eucariota",
              label: "Eucariota",
            },
            {
              id: "rbm2",
              value: "Procariota",
              text: "Procariota",
              label: "Procariota",
            },
          ],
          answer: "Procariota",
        },
      ],
    },
    {
      id: "amoeba",
      value: "Ameba",
      disabled: false,
      text: "Ameba",
      label: "Ameba",
      imageMicroscopicText:
        "Un primer plano circular de la ameba ampliada muestra la célula individual de la ameba. La célula tiene una forma abstracta y un círculo oscuro en el centro.",
      imageAltbutton:
        "Hay una muestra de una ameba bajo el lente del microscopio.",
      questionData: [
        {
          id: "mcq1",
          question: "¿Cuántas células tiene esta muestra: una o muchas?",
          radiobuttons: [
            {
              id: "rbs1",
              value: "Una célula",
              text: "Una célula",
              label: "Una célula",
            },
            {
              id: "rbs2",
              value: "Muchas células",
              text: "Muchas células",
              label: "Muchas células",
            },
          ],
          answer: "Una célula",
        },
        {
          id: "mcq2",
          question:
            "El prefijo <i>uni-</i> significa «uno» y el prefijo <i>pluri-</i> significa «muchos». Según esta información, ¿crees que esta muestra es unicelular o pluricelular?",
          radiobuttons: [
            {
              id: "rbss1",
              value: "Unicelular",
              text: "Unicelular",
              label: "Unicelular",
            },
            {
              id: "rbss2",
              value: "Pluricelular",
              text: "Pluricelular",
              label: "Pluricelular",
            },
          ],
          answer: "Unicelular",
        },
        {
          id: "mcq3",
          question:
            "Las células eucariotas tienen un núcleo que contiene material genético. Las células procariotas no tienen un núcleo. El núcleo es tan importante que, al examinar la célula bajo el microscopio, se ve como un círculo sólido y oscuro. ¿Observas un núcleo en esta muestra?",
          radiobuttons: [
            {
              id: "rb1",
              value: "Sí",
              text: "Sí",
              label: "Sí",
            },
            {
              id: "rb2",
              value: "No",
              text: "No",
              label: "No",
            },
          ],
          answer: "Sí",
        },
        {
          id: "mcq4",
          question:
            "Entonces, ¿se trata de un organismo eucariota o procariota?",
          radiobuttons: [
            {
              id: "rbm1",
              value: "Eucariota",
              text: "Eucariota",
              label: "Eucariota",
            },
            {
              id: "rbm2",
              value: "Procariota",
              text: "Procariota",
              label: "Procariota",
            },
          ],
          answer: "Eucariota",
        },
      ],
    },
    {
      id: "human",
      value: "Células del interior de una mejilla humana",
      disabled: false,
      text: "Células del interior de una mejilla humana",
      label: "Células del interior de una mejilla humana",
      imageMicroscopicText:
        "Un primer plano circular de las células del interior de una mejilla humana ampliadas muestra varias células redondas. En cada célula se observa una mancha oscura.",
      imageAltbutton:
        "Hay una muestra de células del interior de una mejilla humana bajo el lente del microscopio.",
      questionData: [
        {
          id: "mcq1",
          question: "¿Cuántas células tiene esta muestra: una o muchas?",
          radiobuttons: [
            {
              id: "rbs1",
              value: "Una célula",
              text: "Una célula",
              label: "Una célula",
            },
            {
              id: "rbs2",
              value: "Muchas células",
              text: "Muchas células",
              label: "Muchas células",
            },
          ],
          answer: "Muchas células",
        },
        {
          id: "mcq2",
          question:
            "El prefijo <i>uni-</i> significa «uno» y el prefijo <i>pluri-</i> significa «muchos». Según esta información, ¿crees que esta muestra es unicelular o pluricelular?",
          radiobuttons: [
            {
              id: "rbss1",
              value: "Unicelular",
              text: "Unicelular",
              label: "Unicelular",
            },
            {
              id: "rbss2",
              value: "Pluricelular",
              text: "Pluricelular",
              label: "Pluricelular",
            },
          ],
          answer: "Pluricelular",
        },
        {
          id: "mcq3",
          question:
            "Las células eucariotas tienen un núcleo que contiene material genético. Las células procariotas no tienen un núcleo. El núcleo es tan importante que, al examinar la célula bajo el microscopio, se ve como un círculo sólido y oscuro. ¿Observas un núcleo en esta muestra?",
          radiobuttons: [
            {
              id: "rb1",
              value: "Sí",
              text: "Sí",
              label: "Sí",
            },
            {
              id: "rb2",
              value: "No",
              text: "No",
              label: "No",
            },
          ],
          answer: "Sí",
        },
        {
          id: "mcq4",
          question:
            "Entonces, ¿se trata de un organismo eucariota o procariota?",
          radiobuttons: [
            {
              id: "rbm1",
              value: "Eucariota",
              text: "Eucariota",
              label: "Eucariota",
            },
            {
              id: "rbm2",
              value: "Procariota",
              text: "Procariota",
              label: "Procariota",
            },
          ],
          answer: "Eucariota",
        },
      ],
    },
  ],
  pageHeading:
    "Los estudiantes observan diferentes organismos bajo el microscopio para identificar sus características básicas.",
  questionHeading: globalCommonData.questionCounterString2,
  imageAltText:
    "Hay un microscopio en la parte izquierda de una mesa de laboratorio.",
  screenHeading:
    "Observa la vista ampliada de la muestra bajo el microscopio. Usa esta información para contestar las preguntas.",
  informationBoxContent:
    "Selecciona la muestra para verla bajo el microscopio. Luego, contesta correctamente las preguntas.",
};

export default data;
