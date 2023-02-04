import globalCommonData from "../../app/data";

const data = {

  equationsData: [
    {
      srNo: "1",
      id: "question1",
      questionText:
        "Después de estudiar las temperaturas y cantidades de lluvia en nuestro planeta durante 100 años, los científicos han creado este mapa de zonas <span aria-hidden=true>_________</span><span class=sr-only> espacio </span> del mundo.",
        equationOptions: [
          {
            id: "weather",
            disabled: false,
            text: "meteorológicas",
            label: "meteorológicas",
          },
          {
            id: "climate",
            disabled: false,
            text: "climáticas",
            label: "climáticas",
          },
        ],
        answer: "climate",
      altimgText:
        "Un mapamundi que usa colores para identificar diferentes zonas climáticas del mundo según las temperaturas y las lluvias de los pasados 100 años.",
      legends: [
        { id: "polar_zone", label: "Zona polar" },
        { id: "subpolar_zone", label: "Zona subpolar" },
        { id: "temprate_zone", label: "Zona templada" },
        { id: "subtropical_zone", label: "Zona subtropical" },
        { id: "tropical_zone", label: "Zona tropical" },
        { id: "subequatorial_zone", label: "Zona subecuatorial" },
        { id: "equatorial_zone", label: "Zona ecuatorial" },
      ],
    },

    {
      srNo: "2",
      id: "question2",
      questionText:
        "¡Saca tu protector solar y un sombrero! El <span aria-hidden=true>_________</span><span class=sr-only> espacio </span> de hoy traerá temperaturas altas y un cielo sin nubes.",
      heading: "EL PRONÓSTICO DE HOY",
     
  equationOptions: [
    {
      id: "weather",
      disabled: false,
      text: "tiempo",
      label: "Tiempo",
    },
    {
      id: "climate",
      disabled: false,
      text: "clima",
      label: "Clima",
    },
  ],
      answer: "weather",
      altimgText:
        "El pronóstico del día, que prevé un tiempo despejado y soleado con temperaturas que pueden variar entre un mínimo de 62° y un máximo de 80°.",
      alldata: [
        {
          id: "time_1",
          data: [
            { id: "item1", value: "9 a. m." },
            { id: "item2", value: "Despejado" },
            { id: "item3", value: "62&deg;" },
          ],
        },
        {
          id: "time_2",
          data: [
            { id: "item1", value: "11 a. m." },
            { id: "item2", value: "Despejado" },
            { id: "item3", value: "72&deg;" },
          ],
        },
        {
          id: "time_3",
          data: [
            { id: "item1", value: "1 p. m." },
            { id: "item2", value: "Despejado" },
            { id: "item3", value: "77&deg;" },
          ],
        },
        {
          id: "time_4",
          data: [
            { id: "item1", value: "3 p. m." },
            { id: "item2", value: "Despejado" },
            { id: "item3", value: "80&deg;" },
          ],
        },
        {
          id: "time_5",
          data: [
            { id: "item1", value: "5 p. m." },
            { id: "item2", value: "Despejado" },
            { id: "item3", value: "78&deg;" },
          ],
        },
        {
          id: "time_6",
          data: [
            { id: "item1", value: "7 p. m." },
            { id: "item2", value: "Despejado" },
            { id: "item3", value: "73&deg;" },
          ],
        },
        {
          id: "time_7",
          data: [
            { id: "item1", value: "9 p. m." },
            { id: "item2", value: "Despejado" },
            { id: "item3", value: "66&deg;" },
          ],
        },
      ],
    },
    {
      srNo: "3",
      id: "question3",
      questionText:
        "Parece que mañana el <span aria-hidden=true>_________</span><span class=sr-only> espacio </span> estará peligroso en gran parte del país. La zona central de los Estados Unidos se debe preparar para tormentas extremas.",
        equationOptions: [
          {
            id: "weather",
            disabled: false,
            text: "tiempo",
            label: "Tiempo",
          },
          {
            id: "climate",
            disabled: false,
            text: "clima",
            label: "Clima",
          },
        ],
        answer: "weather",
      heading: "AMENAZA DE TIEMPO EXTREMO",
      altimgText:
        "Un mapa de los Estados Unidos que identifica con el color rojo una amenaza de tiempo extremo en el área central del país.",

      legends: [
        { id: "possible", label: "Posible" },
        { id: "likely", label: "Probable" },
        { id: "very_likely", label: "Muy probable" },
      ],
      alldata: [{}],
    },
    {
      srNo: "4",
      id: "question4",
      questionText:
        "Este gráfico creado por Atlantic Meteorologist nos muestra en qué época del año es más probable que haya tormentas extremas. ¡Esta información es muy importante para decidir cuándo cruzarás el océano Atlántico a remo!",
        equationOptions: [
          {
            id: "weather",
            disabled: false,
            text: "Tiempo",
            label: "Tiempo",
          },
          {
            id: "climate",
            disabled: false,
            text: "Clima",
            label: "Clima",
          },
        ],
        answer: "climate",
      altimgText:
        "Un gráfico que usa colores para mostrar la frecuencia de las tormentas tropicales en el océano Atlántico para cada mes durante los últimos 100 años.",

      legends: [
        { id: "tropical_depression", label: "Depresión tropical" },
        { id: "tropical_storm", label: "Tormenta tropical" },
        { id: "hurricane", label: "Huracán" },
        { id: "major_hurricane", label: "Huracán mayor" },
      ],
      heading: "Frecuencia de tormentas tropicales en el océano Atlántico durante 100 años",
      subheading: "Ciclones tropicales en 100 años",
      alldata: [
        {
          id: "scale",
          data: [
            { id: "item22", value: "00" },
            { id: "item21", value: "05" },
            { id: "item20", value: "10" },
            { id: "item19", value: "15" },
            { id: "item18", value: "20" },
            { id: "item17", value: "25" },
            { id: "item16", value: "30" },
            { id: "item15", value: "35" },
            { id: "item14", value: "40" },
            { id: "item13", value: "45" },
            { id: "item12", value: "50" },
            { id: "item11", value: "55" },
            { id: "item10", value: "60" },
            { id: "item9", value: "65" },
            { id: "item8", value: "70" },
            { id: "item7", value: "75" },
            { id: "item6", value: "80" },
            { id: "item5", value: "85" },
            { id: "item4", value: "90" },
            { id: "item3", value: "95" },
            { id: "item2", value: "100" },
            { id: "item1", value: "105" },
          ],
        },
        {
          id: "day_scale",
          data: [
            { id: "item24", value: "May. 1" },
            { id: "item23", value: "May. 10" },
            { id: "item22", value: "May. 20" },
            { id: "item21", value: "Jun. 1" },
            { id: "item20", value: "Jun. 10" },
            { id: "item19", value: "Jun. 20" },
            { id: "item18", value: "Jul. 1" },
            { id: "item17", value: "Jul. 10" },
            { id: "item16", value: "Jul. 20" },
            { id: "item15", value: "Agto. 1" },
            { id: "item14", value: "Agto. 10" },
            { id: "item13", value: "Agto. 20" },
            { id: "item12", value: "Agto. 1" },
            { id: "item11", value: "Agto. 10" },
            { id: "item10", value: "Sept. 20" },
            { id: "item9", value: "Oct. 1" },
            { id: "item8", value: "Oct. 10" },
            { id: "item7", value: "Oct. 20" },
            { id: "item6", value: "Nov. 1" },
            { id: "item5", value: "Nov. 10" },
            { id: "item4", value: "Nov. 20" },
            { id: "item3", value: "Dic. 1" },
            { id: "item2", value: "Dic. 10" },
            { id: "item1", value: "Dic. 20" },
          ],
        },
      ],
    },
    {
      srNo: "5",
      id: "question5",
      questionText:
        "Última hora</br>Se ha emitido una advertencia de tornado para esta área. ¡Busque refugio y manténgase a salvo!",
        equationOptions: [
          {
            id: "weather",
            disabled: false,
            text: "Tiempo",
            label: "Tiempo",
          },
          {
            id: "climate",
            disabled: false,
            text: "Clima",
            label: "Clima",
          },
        ],
        answer: "weather",
      heading: "ADVERTENCIA DE TORNADO",
      subheading: "HASTA LAS 11 p. m.",
      altimgText:
        "Un mapa de advertencia de tornado que usa el color rojo para mostrar el área de Dallas y Fort Worth donde hay probabilidades de que ocurra un tornado hasta las 11:00 p. m.",
      alldata: [
        {
          id: "country_4",
          data: [{ id: "graham", label: "Graham" }],
        },
        {
          id: "country_2",
          data: [{ id: "dallas", label: "Dallas" }],
        },
        {
          id: "country_1",
          data: [{ id: "fort_worth", label: "Fort Worth" }],
        },

        {
          id: "country_5",
          data: [{ id: "mineola", label: "Mineola" }],
        },
        {
          id: "country_3",
          data: [{ id: "stephenville", label: "Stephenville" }],
        },
      ],
    },
  ],

  

  buttonLabels: { ...globalCommonData.buttonLabels },
  completionScreen: {
    ...globalCommonData.completionPopup,
    content: "¡Has contestado correctamente todas las preguntas!",
  },

  resetLiveText: globalCommonData.resetLiveText,
  resetMsgContent: globalCommonData.resetPopupText,
  correctToastMessage: globalCommonData.correctToastMessage,
  incorrectToastMessage: globalCommonData.incorrectToastMessage,
  questionHeading: "Pregunta: -1- de -2-.",
  infoBoxContent: "Elige si las noticias muestran datos sobre el tiempo o sobre el clima.",
  altintroimgtext:
    "Escenario de un noticiero con el logo de STEMscopes News sobre un fondo azul con un mapamundi de color azul claro.",

  instructionBoxContent:
    "Eres uno de los nuevos reporteros de STEMscopes News y debes asegurarte de presentar correctamente las noticias. En la pantalla aparecerán datos sobre el tiempo o el clima. Tu tarea es identificar si los datos se refieren al tiempo o al clima y presentarlos correctamente a tus espectadores.",
  activityHeading:
    "En esta simulación, el estudiante diferenciará entre el tiempo y el clima.",
};

export default data;
