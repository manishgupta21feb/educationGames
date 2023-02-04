import commonData from "../../app/data/data.es";

const data = {
  greetingMessage: "Hola",
  nextScreenButtonText: "siguiente pantalla",
  backScreenButtonText: "pantalla trasera",

  buttonLabels: { ...commonData.buttonLabels },

  activityHeading:
    "Aplicar el concepto de masa molar para convertir de moles a gramos o viceversa y para calcular el número de átomos o moléculas que hay en una muestra de material por medio del número de Avogadro.",
  instructionBoxContent:
    "Usa el diagrama para determinar cómo calcular las cantidades que faltan en la tabla. La primera fila ya está hecha.",
  infoBoxContent:
    "Usa la información proporcionada para completar los cáculos y arrastra las respuestas a la tabla.",
  topAreaTextDescription:
    "Arrastra las respuestas a los espacios correctos para completar la tabla y envía tus respuestas.",
  buttonLabels: { ...commonData.buttonLabels },
  dndButtonLabel: "Submit Answer",
  resetLiveText: commonData.resetLiveText,
  resetMsgContent: commonData.resetPopupText,
  completionPopup: {
    ...commonData.completionPopup,
    content: "¡Lo lograste!",
  },
  questionHeading: "Pregunta: -1- de 4",

  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  incorrectToastMessageDnD:
    "¡No es del todo correcto! ¡Inténtalo otra vez y arregla tus respuestas incorrectas!",
  imgAltText:
    "3 círculos con etiquetas: «Masa» a la izquierda, «Moles» en el centro y «Partículas» a la derecha. 2 flechas etiquetadas «Dividir» apuntan hacia el círculo de los moles y 2 flechas etiquetadas «Multiplicar» apuntan en la dirección contraria.",
  tableCaption:
    "Calcula las cantidades que faltan y coloca la respuesta en el espacio correspondiente.",
  liveAriaTxt: "colocado en",
  dropLabels: [
    {
      id: "label1",
      text: "Elemento (masa molar)",
    },
    {
      id: "label2",
      text: "Masa",
    },
    {
      id: "label3",
      text: "Moles",
    },
    {
      id: "label4",
      text: "Partículas (átomos o moléculas)",
    },
  ],
  staticQuestion: [
    [
      {
        id: "staticdrop1",
        classes: "static-drop",

        hidden: false,

        value:
          "<p aria-hidden='true'>Na (22.99 g)</p><p class='sr-only'>Sodio Na (22.99 gramos)</p>",
      },
      {
        id: "staticdrop2",
        classes: "static-drop",

        hidden: false,

        value:
          "<p aria-hidden='true'>45.98 g</p><p class='sr-only'>45.98 gramos</p>",
      },
      {
        id: "staticdrop3",
        classes: "static-drop",

        hidden: false,
        ariaName: "2",

        value: "<p>2</p>",
      },
      {
        id: "staticdrop3",
        classes: "static-drop",

        hidden: false,
        ariaName: "1.204 multiplicado por 10 elevado a la potencia 24",

        value:
          "<p aria-hidden='true'>1.204 x 10<sup>24</sup></p> <p class='sr-only'>1.204 multiplicado por 10 elevado a la potencia 24</p>",
      },
    ],
  ],
  replaceTableContent: [
    {
      id: "dummydrop1",
      classes: "dummy-static-drop",
      dropZone: true,
      hidden: false,
    },
    {
      id: "dummydrop2",
      classes: "dummy-static-drop",
      dropZone: true,
      hidden: false,
    },
    {
      id: "dummydrop3",
      classes: "dummy-static-drop",
      dropZone: true,
      hidden: false,
    },
    {
      id: "dummydrop4",
      classes: "dummy-static-drop",
      dropZone: true,
      hidden: false,
    },
  ],
  dndQuestion: [
    {
      srNo: "1",
      id: "question1",

      draggable: [
        {
          id: "drag1",
          dragValue: "53.26 g",

          isDisable: false,
          answerId: "",
          isHidden: false,
          ariaName: "53.26 Elemento arrastrable «gramos»",
        },
        {
          id: "drag2",
          dragValue: "119.85 g",

          isDisable: false,
          answerId: "option1drag1",
          isHidden: false,
          ariaName: "119.85 Elemento arrastrable «gramos»",
        },
        {
          id: "drag3",
          dragValue:
            "<p aria-hidden='true'>9.03 x 10<sup>23</sup></p><p class='sr-only'>Partículas 9.03 multiplicado por 10 elevado a la potencia 23</p>",

          isDisable: false,
          answerId: "option1drag2",
          isHidden: false,
          title: "elemento arrastrable 3",
          ariaName:
            "Elemento arrastrable «9.03 multiplicado por 10 elevado a la potencia 23»",
        },
        {
          id: "drag4",
          dragValue:
            "<p aria-hidden='true'>9.03 x 10<sup>24</sup></p><p class='sr-only'>Partículas 9.03 multiplicado por 10 elevado a la potencia 24</p>",

          isDisable: false,
          answerId: "",
          isHidden: false,
          title: "elemento arrastrable 4",
          ariaName:
            "Elemento arrastrable «9.03 multiplicado por 10 elevado a la potencia 24»",
        },
      ],

      dropZone: [
        {
          id: "drop1",
          classes: "static-drop-zone",
          isStatic: true,
          answerId: "",
          hidden: true,

          ariaName: "Bromo Br (79.9 gramos)",
          label: "Elemento (masa molar)",
          value: "<p aria-hidden='true'>Br (79.9 g)</p>",
        },
        {
          id: "drop2",
          classes: "drop-zone",
          isStatic: false,
          answerId: "option1drag1",
          hidden: false,
          ariaName: "Área para colocar",
          label: "Área para colocar la masa del bromo",
        },
        {
          id: "drop3",
          classes: "static-drop-zone",
          isStatic: true,
          answerId: "",
          hidden: true,
          ariaName: "1.5",
          label: "1.5",
          value: "<p aria-hidden='true'>1.5</p>",
        },
        {
          id: "drop4",
          classes: "drop-zone",
          isStatic: false,
          answerId: "option1drag2",
          hidden: false,
          ariaName: "Área para colocar",
          label:
            "Área para colocar las partículas (átomos o moléculas) de bromo",
        },
      ],
    },
    {
      srNo: "2",
      id: "question2",

      draggable: [
        {
          id: "drag1",
          dragValue: "47.97 g",

          isDisable: false,
          answerId: "option2drag1",
          isHidden: false,
          ariaName: "47.97 Elemento arrastrable «gramos»",
        },
        {
          id: "drag2",
          dragValue: "31.98 g",

          isDisable: false,
          answerId: "",
          isHidden: false,
          ariaName: "31.98 Elemento arrastrable «gramos»",
        },
        {
          id: "drag3",
          dragValue: "3",

          isDisable: false,
          answerId: "option2drag2",
          isHidden: false,
          title: "elemento arrastrable 3",
          ariaName: "3 elemento arrastrable",
        },
        {
          id: "drag4",
          dragValue: "2",

          isDisable: false,
          answerId: "",
          isHidden: false,
          title: "elemento arrastrable 4",
          ariaName: "2 elemento arrastrable",
        },
      ],

      dropZone: [
        {
          id: "drop1",
          classes: "static-drop-zone",
          isStatic: true,
          answerId: "",
          hidden: true,
          ariaName: "Oxígeno O (15.99 g)",

          value: "<p aria-hidden='true'>O (15.99 g)</p>",
        },
        {
          id: "drop2",
          classes: "drop-zone",
          isStatic: false,
          answerId: "option2drag1",
          hidden: false,
          ariaName: "Área para colocar",
          label: "Área para colocar la masa del oxígeno",
        },
        {
          id: "drop3",
          classes: "drop-zone",
          isStatic: false,
          answerId: "option2drag2",
          hidden: false,
          ariaName: "Área para colocar",
          label: "Área para colocar los moles del oxígeno",
        },
        {
          id: "drop4",
          classes: "static-drop-zone",
          isStatic: true,
          answerId: "",
          hidden: true,
          ariaName: "1.806 multiplicado por 10 elevado a la potencia 24",

          value: "<p aria-hidden='true'>1.806 x 10<sup>24</sup></p>",
        },
      ],
    },
    {
      srNo: "3",
      id: "question3",

      draggable: [
        {
          id: "drag1",
          dragValue: "3",

          isDisable: false,
          answerId: "",
          isHidden: false,
          ariaName: "3 elemento arrastrable",
        },
        {
          id: "drag2",
          dragValue: "2.5",

          isDisable: false,
          answerId: "option3drag1",
          isHidden: false,
          ariaName: "2.5 elemento arrastrable",
        },
        {
          id: "drag3",
          dragValue: "<p aria-hidden='true'>1.51 x 10<sup>24</sup></p>",

          isDisable: false,
          answerId: "option3drag2",
          isHidden: false,
          title: "elemento arrastrable 3",
          ariaName: "1.51 multiplicado por 10 elevado a la potencia 24",
        },
        {
          id: "drag4",
          dragValue: "<p aria-hidden='true'>1.51 x 10<sup>23</sup></p>",

          isDisable: false,
          answerId: "",
          isHidden: false,
          title: "elemento arrastrable 4",
          ariaName:
            "Elemento arrastrable «1.51 multiplicado por 10 elevado a la potencia 23»",
        },
      ],

      dropZone: [
        {
          id: "drop1",
          classes: "static-drop-zone",
          isStatic: true,
          answerId: "",
          hidden: true,
          ariaName: "Fósforo P (30.97 g)",

          value: "<p aria-hidden='true'>P (30.97 g)</p>",
        },
        {
          id: "drop2",
          classes: "static-drop-zone",
          isStatic: true,
          answerId: "",
          hidden: true,
          ariaName: "77.43 gramos",

          value: "<p aria-hidden='true'>77.43 g</p>",
        },
        {
          id: "drop3",
          classes: "drop-zone",
          isStatic: false,
          answerId: "option3drag1",
          hidden: false,
          ariaName: "Área para colocar",
          label: "Área para colocar los moles del fósforo",
        },
        {
          id: "drop4",
          classes: "drop-zone",
          isStatic: false,
          answerId: "option3drag2",
          hidden: false,
          ariaName: "Área para colocar",
          label:
            "Área para colocar las partículas (átomos o moléculas) de fósforo",
        },
      ],
    },
    {
      srNo: "4",
      id: "question4",

      draggable: [
        {
          id: "drag1",
          dragValue: "10.5 g",

          isDisable: false,
          answerId: "option4drag1",
          isHidden: false,
          ariaName: "10.5 Elemento arrastrable «gramos»",
        },
        {
          id: "drag2",
          dragValue: "0.097 g",

          isDisable: false,
          answerId: "",
          isHidden: false,
          ariaName: "0.097 Elemento arrastrable «gramos»",
        },
        {
          id: "drag3",
          dragValue: "<p aria-hidden='true'>6.26 x 10<sup>24</sup></p>",

          isDisable: false,
          answerId: "option4drag2",
          isHidden: false,
          title: "elemento arrastrable 3",
          ariaName:
            "Elemento arrastrable «6.26 multiplicado por 10 elevado a la potencia 24»",
        },
        {
          id: "drag4",
          dragValue: "<p aria-hidden='true'>6.32 x 10<sup>23</sup></p>",

          isDisable: false,
          answerId: "",
          isHidden: false,
          title: "elemento arrastrable 4",
          ariaName:
            "Elemento arrastrable «6.32 multiplicado por 10 elevado a la potencia 23»",
        },
      ],

      dropZone: [
        {
          id: "drop1",
          classes: "static-drop-zone",
          isStatic: true,
          answerId: "",
          hidden: true,
          ariaName: "Hidrógeno H (1.01 gramos)",

          value: "<p aria-hidden='true'>H (1.01 g)</p>",
        },
        {
          id: "drop2",
          classes: "drop-zone",
          isStatic: false,
          answerId: "option4drag1",
          hidden: false,
          ariaName: "Área para colocar",
          label: "Área para colocar la masa del hidrógeno",
        },
        {
          id: "drop3",
          classes: "static-drop-zone",
          isStatic: true,
          answerId: "",
          hidden: true,
          ariaName: "10.4",

          value: "<p aria-hidden='true'>10.4</p>",
        },
        {
          id: "drop4",
          classes: "drop-zone",
          answerId: "option4drag2",
          hidden: false,
          ariaName: "Área para colocar",
          isStatic: false,
          label:
            "Área para colocar las partículas (átomos o moléculas) de hidrógeno",
        },
      ],
    },
  ],

  imgText: [
    {
      id: "txt1",
      text: "Masa",
      hidden: true,
    },
    {
      id: "txt2",
      text: "Moles",
      hidden: true,
    },
    {
      id: "txt3",
      text: "Partículas",
      hidden: true,
    },
    {
      id: "txt4",
      text: "<p aria-hidden='true'>Dividir</p><p class='sr-only'>La masa dada dividida entre la masa molar dada equivale a los moles.</p>",
      hidden: false,
      ariaName:
        "La masa dada dividida entre la masa molar dada equivale a los moles.",
    },
    {
      id: "txt5",
      text: "<p aria-hidden='true'>Dividir</p><p class='sr-only'>La cantidad de partículas dada dividida entre 6.02 multiplicado por 10 elevado a la potencia 23 equivale a los moles.</p>",
      hidden: false,
      ariaName:
        "La cantidad de partículas dada dividida entre 6.02 multiplicado por 10 elevado a la potencia 23 equivale a los moles.",
    },
    {
      id: "txt6",
      text: "<p aria-hidden='true'>Multiplicar</p><p class='sr-only'>Los moles dados multiplicados por la masa molar equivalen a la masa.</p>",
      hidden: false,
      ariaName:
        "Los moles dados multiplicados por la masa molar equivalen a la masa.",
    },
    {
      id: "txt7",
      text: "<p aria-hidden='true'>Multiplicar</p><p class='sr-only'>Los moles dados multiplicados por 6.02 multiplicado por 10 elevado a la potencia 23 equivalen a las partículas.</p>",
      hidden: false,
      ariaName:
        "Los moles dados multiplicados por 6.02 multiplicado por 10 elevado a la potencia 23 equivalen a las partículas.",
    },
    {
      id: "txt8",
      text: "Masa molar",
      hidden: true,
    },
    {
      id: "txt9",
      text: "6.02 x 10<sup>23</sup>",
      hidden: true,
    },
  ],
};

export default data;
