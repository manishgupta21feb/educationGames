import commonData from "../../app/data/data.es";

const data = {
  buttonLabels: { ...commonData.buttonLabels, play: "Reproducir" },

  resetPopupText: commonData.resetPopupText,
  resetLiveText: commonData.resetLiveText,

  initialInfotext: `Vamos a experimentar con algunas fuerzas que actúan sobre una caja en dos situaciones: 
  vencer la fricción y fuerza neta.`,

  hintText: `¡Arrastra el deslizador para ajustar la cantidad de fuerza que actúa sobre la caja!`,

  launchScreenTitle: `¡Elige el experimento que quieres explorar!`,

  launchScreenButtons: [
    {
      id: "overcomingFriction",
      name: "Vencer la fricción",
      altText: `Una caja marrón colocada sobre una superficie tiene una flecha roja etiquetada «F1» 
      que apunta hacia la izquierda y 3 flechas azules que apuntan en direcciones distintas: hacia arriba, 
      hacia abajo y hacia la derecha.`,
      nextScreen: 1,
      leftText: "F1",
    },
    {
      id: "netForce",
      name: "Fuerza neta",
      altText: `Una caja marrón colocada sobre una superficie. Una flecha roja etiquetada «F1» 
      apunta hacia la izquierda, una flecha verde etiquetada «F2» apunta hacia la derecha, 
      una flecha azul apunta hacia arriba y otra flecha azul apunta hacia abajo.`,
      nextScreen: 2,
      leftText: "F1",
      rightText: "F2",
    },
  ],

  sliderLabel: "Fuerza",

  dataList: [
    { id: 0, value: 60, label: 60 },
    { id: 1, value: 80, label: 80 },
    { id: 2, value: 100, label: 100 },
    { id: 3, value: 120, label: 120 },
    { id: 4, value: 140, label: 140 },
  ],

  ScreenInfo: {
    screen1: {
      title: "Vencer la fricción:",
      infoText: `¡Ajusta la cantidad de fuerza aplicada para ver si la caja se mueve!`,
      slider: {
        title: `Fuerza aplicada (F1) en newtons`,
        altText: `La fuerza aplicada F1 es de `,
      },
      errorMsg: `La fuerza que elegiste no era suficiente para vencer la fricción. ¡Inténtalo otra vez!`,
      sucessMsg: `¡Buen trabajo! ¡Moviste la caja!`,
      leftText: "F1",
      altText: `Una caja marrón colocada sobre una superficie tiene una flecha roja etiquetada «F1» 
      que apunta hacia la izquierda y 3 flechas azules que apuntan en direcciones distintas: 
      hacia arriba, hacia abajo y hacia la derecha.`,
      altTextAfter: `Una caja marrón se desliza hacia el borde izquierdo de una superficie. En la esquina superior 
      izquierda hay un deslizador etiquetado «Fuerza aplicada».`,
    },
    screen2: {
      title: "Fuerza neta:",
      infoText: `¡Ajusta la cantidad de fuerza aplicada para ver si la caja se mueve!`,
      errorMsg: `Las fuerzas están equilibradas, ¡así que la caja no se moverá!`,
      sucessMsg: `Las fuerzas están desequilibradas, ¡así que la caja se mueve!`,
      slider: {
        title1: `Fuerza aplicada (F1) en newtons`,
        title2: `Fuerza aplicada (F2) en newtons`,
        altText1: `La fuerza aplicada F1 es de `,
        altText2: `La fuerza aplicada F2 es de `,
      },
      leftText: "F1",
      rightText: "F2",
      altText: `Una caja marrón colocada sobre una superficie. Una flecha roja etiquetada «F1» 
      apunta hacia la izquierda, una flecha verde etiquetada «F2» apunta hacia la derecha, 
      una flecha azul apunta hacia arriba y otra flecha azul apunta hacia abajo. En cada esquina 
      superior hay un deslizador etiquetado «Fuerza aplicada».`,
      altTextRight: `Una caja marrón se desliza hacia el borde derecho de una superficie.`,
      altTextLeft: `Una caja marrón se desliza hacia el borde izquierdo de una superficie.`,
      altTextDynamic: `Una caja colocada sobre una superficie. Una flecha roja etiquetada «F1» apunta hacia 
      la izquierda y una flecha verde etiquetada «F2» apunta hacia la derecha. El deslizador de fuerza aplicada 
      F1 marca -1- y el deslizador de fuerza aplicada F2 marca -2-.`,
    },
  },
};

export default data;
