import globalData from "../../app/data";

const data = {
  instructionText: {
    burger:
      "Arrastra cada ingrediente a la balanza para determinar su masa. Luego, usa la masa medida para buscar la composición porcentual de cada ingrediente.",
    water:
      "Arrastra cada elemento a la balanza para determinar su masa. Luego, usa la masa medida para buscar la composición porcentual de cada elemento.",
  },
  draggablesBurger: [
    {
      id: "bun_top",
      name: "Panecillo (superior)",
      info: { mass: "40.0", massUnit: "g", percentage: "18.32%" },
      alt: "Una balanza electrónica que pesa la parte superior de un panecillo de hamburguesa. La balanza indica una masa de 40.0 g",
    },
    {
      id: "lettuce",
      name: "Lechuga",
      info: { mass: "20.0", massUnit: "g", percentage: "9.16%" },
      alt: "Una balanza electrónica que pesa una hoja de lechuga. La balanza indica una masa de 20.0 g.",
    },
    {
      id: "beef_patty",
      name: "Tortita de carne",
      info: { mass: "113.4", massUnit: "g", percentage: "51.92%" },
      alt: "Una balanza electrónica que pesa una tortita de carne. La balanza indica una masa de 113.4 g.",
    },
    {
      id: "cheese",
      name: "Queso",
      info: { mass: "25.0", massUnit: "g", percentage: "11.45%" },
      alt: "Una balanza electrónica que pesa una loncha de queso. La balanza indica una masa de 25.0 g.",
    },
    {
      id: "bun_bottom",
      name: "Panecillo (inferior)",
      info: { mass: "20.0", massUnit: "g", percentage: "9.16%" },
      alt: "Una balanza electrónica que pesa la parte inferior de un panecillo de hamburguesa. La balanza indica una masa de 20.0 g.",
    },
  ],

  draggablesWater: [
    {
      id: "hydrogen",
      name: "Hidrógeno",
      info: { mass: "2.016", massUnit: "g", percentage: "11.19%" },
      alt: "Una balanza electrónica que pesa dos átomos de hidrógeno. La balanza indica una masa de 2.016 g.",
    },
    {
      id: "oxygen",
      name: "Oxígeno",
      info: { mass: "15.999", massUnit: "g", percentage: "88.81%" },
      alt: "Una balanza electrónica que pesa un átomo de oxígeno. La balanza indica una masa de 15.999 g.",
    },
  ],

  helpText: " ayuda",
  showText: " mostrar",

  infoTableCommonText: [
    { id: "mass", name: "Masa (gramos)", value: "40.0", label: "mostrar" },
    {
      id: "percentage",
      name: "Composición porcentual",
      value: "18%",
      hide: 1,
      labelShow: "mostrar",
      labelHelp: "ayuda",
    },
  ],
  buttonLabels: { ...globalData.buttonLabels },
  resetLiveText: globalData.resetLiveText,
  resetPopupText: globalData.resetPopupText,
  startUpInfoMessage: `¿Qué porcentaje de queso tiene una hamburguesa con queso? La composición porcentual nos indica la cantidad de masa que ocupa cada elemento en un compuesto. ¡Vamos a buscar la composición porcentual de una hamburguesa con queso!`,
  helpInfoMessagge: [
    "Arrastra cada ingrediente o elemento a la balanza para determinar su masa en gramos y registrarla en la tabla de datos.",
    "Usa la masa medida para buscar la composición porcentual de cada elemento. Redondea tu composición porcentual a dos cifras decimales. La composición porcentual total debe ser igual a 100 %. Selecciona «Mostrar» para comprobar tus respuestas.",
  ],
  questionInfoMessagge: [
    "Fórmula para calcular la composición porcentual",
    "Composición porcentual = (masa del ingrediente / masa total) x 100",
  ],
  questionInfoWaterMessagge: [
    "Fórmula para calcular la composición porcentual",
    "Composición porcentual = (masa del elemento / masa total) x 100",
  ],

  droppableZones: [
    {
      id: "droppableZone1",
      label: "Balanza con área para colocar",
      heading: "Balanza de consumo de calorías",
      altText:
        "Una balanza electrónica con la base verde y la pantalla en blanco. Sobre la base hay una plataforma gris que está vacía.",
    },
  ],
  burgerTotalMassInfo: {
    type: "burger",
    imageAlt: "Una hamburguesa hecha de lechuga, queso, una tortita de carne y un panecillo.",
    massLabel: "Masa total (gramos): 218.4",
    percentageLabel: "Composición porcentual total: 100 %",
  },
  waterTotalMassInfo: {
    type: "water",
    imageAlt:
      "Una molécula de agua formada por un átomo de oxígeno y dos átomos de hidrógeno.",
    massLabel: "Masa molecular total (u): 18.015",
    percentageLabel: "Composición porcentual total: 100 %",
  },
  rightSectionHeading: "Masa y composición porcentual",
  transitionPopup: {
    ...globalData.transitionPopup,
    content:
      "Has calculado la composición porcentual de una hamburguesa con queso. Vamos a calcular la composición porcentual de una molécula de agua.",
  },
  completionPopup: {
    ...globalData.completionPopup,
    content: "Has calculado la composición porcentual de una molécula de agua.",
  },
  onDroppedLiveText: "Se coloca el -1- en el espacio correspondiente de la balanza.",
  onShowLiveText: "La composición porcentual de -1- es de -2-.",
};

export default data;




