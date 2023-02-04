import commonData from "../../app/data/";
import mainImg from "../assets/images/main_img.png";
const data = {
  buttonLabels: { ...commonData.buttonLabels },
  instructionBoxContent:
    "¿Te has preguntado alguna vez por qué nunca se acaba el agua? El agua siempre está en movimiento, ya sea por la atmósfera, en la superficie terrestre o incluso bajo tierra. ¿Puedes completar el diagrama con los diferentes procesos que ocurren durante el ciclo del agua para demostrar tus conocimientos?",
  mainImg: {
    img: mainImg,
    alt: "Un corte transversal de un medio ambiente acuático muestra que el agua evaporada por el sol va hacia el aire, donde se condensa y forma nubes para luego regresar a los ríos y aguas subterráneas en forma de lluvia.",
  },
  headingLeaveOne:
    "Los estudiantes usan una actividad de arrastrar y soltar para describir e ilustrar cómo el agua de la Tierra se mueve por la atmósfera y la superficie terrestre a través de una serie de procesos repetitivos.",
  infoText:
    "Haz clic sobre una imagen y arrástrala al lugar correcto para completar el diagrama del ciclo del agua.",
  topAreaTextDescription:
    "Arrastra las imágenes y palabras al lugar que les corresponde para completar el diagrama del ciclo del agua.",
  completionPopup: {
    ...commonData.completionPopup,
    content: "Has completado la simulación.",
  },
  liveAriaTxt: "colocado en",
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  resetMsgContent: commonData.resetPopupText,
  draggable: [
    {
      id: "condensation",
      dragName:
        "Elemento arrastrable con la palabra «Condensación» y una imagen de una nube con pequeñas gotas en su interior que representan el vapor de agua.",
      ansId: "condensationdrop",
      label: "Condensación",
      para: "Cuando el vapor de agua sube a la atmósfera y se enfría, empieza a formar pequeñas gotas de agua. Esto se llama condensación. La formación de las nubes comienza con la condensación. La niebla también se forma por condensación. Cuando ves agua en el exterior de un vaso frío en un día caliente, eso es condensación. El agua no viene del interior del vaso; el vapor de agua que hay en el aire que rodea el vaso se vuelve a convertir en agua líquida debido a la temperatura del vidrio.",
    },
    {
      id: "evoporation",
      dragName:
        "Elemento arrastrable con la palabra «Evaporación» y una imagen de flechas que suben desde una fuente de agua.",
      ansId: "evoporationdrop",
      label: "Evaporación",
      para: "A medida que el agua líquida se calienta, esta se transforma en un gas llamado vapor de agua. El vapor de agua empieza a subir hacia la atmósfera. Este proceso se llama evaporación. A veces, cuando afuera hace un calor pegajoso, puedes sentir el vapor de agua en el aire. A esto se le llama humedad. Cuando los niveles de humedad son altos, esto significa que hay una gran cantidad de vapor de agua en el aire. Si el nivel de humedad es bajo, hay poca cantidad de agua en el aire.",
    },
    {
      id: "sunenergy",
      dragName:
        "Elemento arrastrable con la frase «Energía del sol» y una imagen del sol.",
      ansId: "sunenergydrop",
      label: "Energía del <br/>sol",
      para: "El sol calienta el agua que hay en los océanos y en la superficie de la Tierra, pero no lo hace de manera uniforme. Este calentamiento desigual impulsa el ciclo del agua y las condiciones del tiempo en la Tierra. Sin la energía del sol, el ciclo del agua no podría continuar.",
    },
    {
      id: "precipitation",
      dragName:
        "Elemento arrastrable con la palabra «Precipitación» y una imagen de una nube de la que cae lluvia.",
      ansId: "precipitationdrop",
      label: "Precipitación",
      para: "Cuando las gotas de agua en la atmósfera pesan demasiado, estas vuelven a caer a la Tierra. Dichas gotas pueden caer en forma de nieve, aguanieve o granizo. El tipo de precipitación depende completamente de la temperatura del aire. Al caer en forma de precipitación, el agua llena nuestros ríos, lagos y océanos.",
    },
    {
      id: "groundwater",
      dragName:
        "Elemento arrastrable con la frase «Flujo de agua subterránea» y una imagen de un área donde el agua y la tierra se encuentran, en la que se observa claramente la filtración de agua hacia el suelo. Aquí se pueden usar flechas para mostrar la dirección del elemento arrastrable que representa el flujo de agua.",
      ansId: "groundwaterdrop",
      label: "Flujo de agua subterránea",
      para: "Una parte de la precipitación se filtra hacia el suelo; a esto se le conoce como agua subterránea. El agua subterránea fluye por los espacios que hay entre las rocas bajo tierra. En algunas áreas, hay capas de roca bajo tierra —llamadas acuíferos— que pueden almacenar agua subterránea. Casi toda el agua que usamos en la agricultura e incluso gran parte de nuestra agua potable vienen de acuíferos. Con el tiempo, el agua fluye hacia ríos, lagos y océanos, y vuelve a ser parte del ciclo del agua.",
    },
  ],

  droppable: [
    {
      id: "sunenergydrop",
      hidden: false,
      beforeDropTxt: "Área para colocar una fase del ciclo del agua 1",
      ariaLabel: "dropped",
      label: "Área para colocar una fase del ciclo del agua 1",
    },
    {
      id: "evoporationdrop",
      hidden: false,
      beforeDropTxt: "Área para colocar una fase del ciclo del agua 2",
      ariaLabel: "dropped",
      label: "Área para colocar una fase del ciclo del agua 2",
    },
    {
      id: "condensationdrop",
      hidden: false,
      beforeDropTxt: "Área para colocar una fase del ciclo del agua 3",
      ariaLabel: "dropped",
      label: "Área para colocar una fase del ciclo del agua 3",
    },
    {
      id: "precipitationdrop",
      hidden: false,
      beforeDropTxt: "Área para colocar una fase del ciclo del agua 4",
      ariaLabel: "dropped",
      label: "Área para colocar una fase del ciclo del agua 4",
    },
    {
      id: "groundwaterdrop",
      hidden: false,
      beforeDropTxt: "Área para colocar una fase del ciclo del agua 5",
      ariaLabel: "dropped",
      label: "Área para colocar una fase del ciclo del agua 5",
    },
  ],

  arrows: [
    {
      id: "arrow1",
      clsName: "top-left",
    },
    {
      id: "arrow2",
      clsName: "top-right",
    },
    {
      id: "arrow3",
      clsName: "down-left",
    },
    {
      id: "arrow4",
      clsName: "down-right",
    },
    {
      id: "arrow5",
      clsName: "mid",
    },
  ],
};

export default data;
