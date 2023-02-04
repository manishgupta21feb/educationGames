import commonData from "../../app/data/data.es";
import hotspotBackground from "../assets/images/Main.png";
import zoom_wheel from "../assets/images/zoom_wheel.png";
import zoom_top from "../assets/images/zoom_top.png";
import zoom_break from "../assets/images/zoom_breaks.png";
import cartAnimation from "../assets/videos/newVideo.mp4";
const data = {
  buttonLabels: { ...commonData.buttonLabels },
  completionPopup: {
    ...commonData.completionPopup,
    content:
      "¡Has identificado correctamente las fuerzas que actúan sobre la montaña rusa!",
  },
  transitionPopup: {
    ...commonData.transitionPopup,
    content:
      "Ahora que has explorado el efecto de las fuerzas sobre la montaña rusa, es hora de demostrar lo que sabes.",
  },
  resetMsgContent: commonData.resetPopupText,
  resetLiveText: commonData.resetLiveText,
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  partiallyCorrectToastMessage:
    "Algunas de tus respuestas son incorrectas. ¡Inténtalo otra vez!",
  activityHeading:
    "El estudiante analizará los efectos de la gravedad, la fricción, el magnetismo, la fuerza aplicada y la fuerza normal sobre un objeto.",
  hintContent:
    "Haz clic sobre las zonas activas para aprender acerca de las fuerzas que afectan a la montaña rusa. Luego, parea cada ejemplo con el tipo de fuerza correcto.",
  instructionBoxContent:
    "Bienvenido a Force World, ¡el parque de diversiones más grande del país! Hoy explorarás cómo actúan las fuerzas sobre una de nuestras montañas rusas más populares.",
  bgAltText:
    "Una montaña rusa con una colina alta y una segunda colina más baja tiene un carrito sobre la vía.",
  Screen1: {
    introductionHeading:
      "¿Has subido alguna vez a una montaña rusa? Mientras la barra (ya sea la que sostiene del regazo o la que sostiene de los hombros) te sujetaba al carrito, ¿te preguntaste qué sujetaba el carrito a la vía? Explora esta simulación de una montaña rusa para descubrir cómo distintos tipos de fuerza ayudan a mantener el carrito de una montaña rusa en su vía.",
    backgroundImg: hotspotBackground,
    helpPopupText: "Click on hotspot",
  },
  hotspots: [
    {
      id: "cart-wheel",
      travserId: 1,
      imgBgAlt:
        "Un círculo muestra un primer plano del sistema de ruedas del carrito de la montaña rusa. La montaña rusa está al fondo.",
      hotspotDescription: {
        detail1:
          "La vía tiene neumáticos verticales en su interior. Esto ayuda a <b>aumentar la fuerza</b> de fricción para comenzar y terminar el recorrido de forma segura. En la parte inferior del carrito hay varios grupos de ruedas, cada uno de ellos compuesto por seis ruedas. Dos ruedas entran en contacto con la vía por arriba, dos ruedas entran en contacto con la vía por el lado y dos ruedas entran en contacto con la vía por abajo. Esta combinación de ruedas y posiciones sujeta el carrito a la vía.",
        detail2:
          "<b>La fuerza de fricción</b> actúa mientras las seis ruedas se mueven sobre la vía de acero debido al roce de las ruedas contra la vía. De forma similar, cuando el carrito se acerca a una colina alta, la vía usa unos neumáticos grandes para impulsar el carrito hacia arriba a una velocidad de entre 5 y 8 mph, aproximadamente. El aumento de la fricción entre el carrito y la combinación vía-neumático forza la subida del carrito colina arriba. Este es un ejemplo de la fuerza que aplican los neumáticos de la vía sobre el carrito. Se usa una <b>fuerza aplicada</b> para mover el carrito en contra de las fuerzas de <b>gravedad</b> y <b>fricción.</b> La fuerza de gravedad impediría la subida del carrito colina arriba. Los neumáticos de la vía también se emplean en el punto de frenado al final de la vía, donde usan una <b>fuerza aplicada</b> para disminuir, en vez de aumentar, la velocidad del carrito.",
      },
      ariaLabel: "Rueda del carrito",
      zoomImg: zoom_wheel,
      imgAlt:
        "Un primer plano del sistema de ruedas del carrito de la montaña rusa muestra 2 pares de ruedas, uno que se desliza por encima de la vía y otro que se desliza por debajo de ella.",
    },
    {
      id: "cart",
      travserId: 2,
      imgBgAlt:
        "Un círculo muestra un primer plano del carrito sobre la vía de la montaña rusa. La montaña rusa está al fondo.",
      hotspotDescription: {
        detail1:
          "En la cima de la montaña rusa, el carrito tiene la mayor <b>energía potencial gravitacional</b> porque alcanza la distancia máxima respecto al punto más bajo de la vía. Normalmente, mientras más alta sea la colina, mayor será la velocidad del carrito al bajar por la vía. De forma similar, a medida que el carrito baja una colina y empieza a subir la próxima, este pierde energía y velocidad porque se mueve hacia arriba, en contra de la <b>fuerza de gravedad.</b> Durante todo el recorrido también se aplica una <b>fuerza normal</b> sobre el carrito. La <b>fuerza normal</b> es aquella ejercida sobre un objeto por su superficie de apoyo. En este caso, la fuerza normal es el empuje hacia arriba de la vía contra el carrito.",
      },
      ariaLabel: "Carrito de la montaña rusa",
      zoomImg: zoom_top,
      imgAlt:
        "Un primer plano del carrito sobre la vía de la montaña rusa. El carrito está en la cima de la colina más alta de la montaña rusa. ",
    },
    {
      id: "track",
      travserId: 3,
      imgBgAlt:
        "Un círculo muestra un primer plano del tramo del sistema de frenado en la vía de la montaña rusa. La montaña rusa está al fondo.",
      hotspotDescription: {
        detail1:
          "¿Sabes cómo disminuyen la velocidad las montañas rusas al final del recorrido? Una montaña rusa tiene un sistema de frenado parecido al de un automóvil. El carrito de la montaña rusa llega a un punto de la vía que tiene a ambos lados unos imanes grandes que se usan para frenar, o reducir, la velocidad del carrito. Los imanes grandes situados a cada lado del carrito crean un <b>campo magnético</b> que genera corriente entre la vía y el carrito. La intensa <b>fuerza del magnetismo</b> crea un <b>campo magnético</b>. Este atrae el carrito de la montaña rusa hacia los imanes y lo obliga a reducir la velocidad. Algunas montañas rusas usan la <b>propulsión magnética,</b> en vez de neumáticos o sistemas de cadena, para forzar la subida del carrito por una colina empinada. En esta parte de la vía, la atracción de los <b>campos magnéticos</b> entre la vía y el carrito ayuda a acelerar rápidamente el carrito en lugar de disminuir su velocidad.",
      },
      ariaLabel: "Frenos magnéticos de la montaña rusa",
      zoomImg: zoom_break,
      imgAlt:
        "Un primer plano del tramo del sistema de frenado en la vía de la montaña rusa. Hay dos imanes grandes conectados a la parte exterior de ambos lados de la vía.",
    },
  ],
  animationAssest: {
    id: "video1",
    videoId: "animationCart",
    videoSrc: cartAnimation,
    startAlt:
      "El carrito se mueve hacia la cima de la primera colina y se prepara para bajar por la vía.",
    endAlt:
      "El carrito se detiene al final de la vía después de pasar la zona de frenado.",
    videoStartLiveText:
      "El carrito sube lentamente cada colina y acelera al bajar. Se detiene al final de la vía después de pasar la zona de frenado.",
  },
  forceDirections: [
    {
      forceName: "Fuerza aplicada",
      classes: "arrowApplied",
      ariaLable: "Fuerza aplicada dirigida hacia delante",
      lineWidth: "80px",
      direction: "right",
    },
    {
      forceName: "Fuerza de fricción",
      classes: "arrowFriction",
      ariaLable: "Fricción dirigida hacia atrás",
      lineWidth: "89px",
      direction: "left",
    },
    {
      forceName: "Fuerza normal",
      classes: "arrowNormal",
      ariaLable: "Fuerza normal dirigida hacia arriba",
      lineWidth: "36px",
      direction: "top",
    },
    {
      forceName: "Fuerza de gravedad",
      classes: "arrowGravity",
      ariaLable: "Gravedad dirigida hacia abajo",
      lineWidth: "36px",
      direction: "bottom",
    },
  ],

  screen2: {
    questionHeading:
      "Arrastra cada tipo de fuerza y paréalo con la descripción correcta.",
    aria: "se coloca",
    options: [
      { name: "Fuerza aplicada", isDisable: false },
      { name: "Fricción", isDisable: false },
      { name: "Gravedad", isDisable: false },
      { name: "Magnetismo", isDisable: false },
      { name: "Fuerza normal", isDisable: false },
    ],
    description: "5 droppable area",
    blank: "área para colocar en blanco",
    questionList: [
      {
        answerId: "Fricción",
        label:
          "La resistencia que experimenta cualquier superficie u objeto al moverse sobre otra superficie u objeto. Área para colocar.",
        value:
          "1. La resistencia que experimenta cualquier superficie u objeto al moverse sobre otra superficie u objeto.",
        id: "drop_1",
      },
      {
        answerId: "Gravedad",
        label:
          "La fuerza que atrae un objeto hacia el centro de la Tierra. Área para colocar.",
        value: "2. La fuerza que atrae un objeto hacia el centro de la Tierra.",
        id: "drop_2",
      },
      {
        answerId: "Fuerza normal",
        label:
          "La fuerza de empuje que ejerce sobre un objeto su superficie de apoyo, como una mesa o un piso. Área para colocar.",
        value:
          "3. La fuerza de empuje que ejerce sobre un objeto su superficie de apoyo, como una mesa o un piso.",
        id: "drop_3",
      },
      {
        answerId: "Fuerza aplicada",
        label:
          "La fuerza que se añade a un objeto para moverlo o cambiar su forma. Área para colocar.",
        value:
          "4. La fuerza que se añade a un objeto para moverlo o cambiar su forma.",
        id: "drop_4",
      },
      {
        answerId: "Magnetismo",
        label:
          "La fuerza que puede atraer o repeler objetos. Área para colocar.",
        value: "5. La fuerza que puede atraer o repeler objetos.",
        id: "drop_5",
      },
    ],
  },
};

export default data;
