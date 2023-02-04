import commonData from "../../app/data/data.es";
import batteryVideo from "../assets/videos/battery.mp4";
import wireVideo from "../assets/videos/wir.mp4";
import bulbVideo from "../assets/videos/bulb_new.mp4";
import fullCircuit from "../assets/videos/main_new.mp4";
const data = {
  buttonLabels: { ...commonData.buttonLabels },
  completionPopup: {
    ...commonData.completionPopup,
    content:
      "¡Has explorado exitosamente cómo se transforma y conserva la energía en varios sistemas!",
  },
  transitionPopup: {
    ...commonData.transitionPopup,
    content:
      "Has explorado exitosamente cómo se transforma y conserva la energía en uno de los sistemas. Prepárate para explorar el siguiente sistema.",
  },
  resetMsgContent: commonData.resetPopupText,
  resetLiveText: commonData.resetLiveText,
  activityHeading:
    "Los estudiantes describirán cómo se conserva la energía mediante transformaciones en sistemas de energía, como los circuitos eléctricos y las redes alimenticias.",
  hintContent:
    "Haz clic sobre los botones para aprender acerca de la conservación y transformación de la energía en diferentes sistemas.",
  instructionBoxContent:
    "¿Te has preguntado alguna vez cómo ocurre la conservación y transformación de la energía en un sistema? Hoy explorarás dos sistemas de energía diferentes: un circuito eléctrico y una red alimenticia.",
  bgAltText:
    "Un circuito eléctrico simple con un cable de cobre que conecta cada extremo de la batería con cada lado de la bombilla y sigue un recorrido rectangular.",
  screen0Hotspots: [
    {
      id: "hotspot2",
      ariaLabel: "Bombilla",
      text: "Bombilla",
      hotspotText:
        "Haz clic sobre la bombilla para explorar las transformaciones de energía desde el cable hasta la bombilla.",
      assets: {
        id: "video2",
        videoSrc: bulbVideo,
        alt: "Una flecha blanca indica el movimiento de la energía eléctrica a través del cable y hasta la bombilla. Dos etiquetas identifican que la bombilla emite energía luminosa y térmica.",
        videoLabels: ["Energía eléctrica"],
        videoEndLabels: ["Energía luminosa", "Energía térmica"],
        associatedText:
          "La <b>energía eléctrica</b> en los cables se transforma en <b>energía térmica</b> y en <strong>luminosa</strong> dentro de la bombilla en el <b>circuito.</b>",
      },
    },
    {
      id: "hotspot0",
      ariaLabel: "Batería",
      text: "Batería",
      hotspotText:
        "La <b>ley de conservación de la energía</b> dice que la energía no se crea ni se destruye; simplemente cambia de forma. Vamos a explorar dos tipos diferentes de <b>transformaciones de energía.</b> Primero, haz clic sobre la batería para explorar las transformaciones de energía desde la batería hasta el cable.",
      assets: {
        id: "video0",
        videoSrc: batteryVideo,
        alt: "Primer plano de la batería y el cable de cobre; debajo de la batería hay una etiqueta que dice «Energía química»; una flecha blanca indica el movimiento de la energía eléctrica que sale de la batería y pasa a través del cable.",
        videoLabels: ["Energía eléctrica", "Energía química"],
        associatedText:
          "La <b>energía química</b> de la batería se transforma en <b>energía eléctrica</b> al moverse de la batería a los cables en un <b>circuito eléctrico.</b>",
      },
    },
    {
      id: "hotspot1",
      ariaLabel: "Cable",
      text: "Cable",
      hotspotText:
        "Haz clic sobre el cable para explorar las transformaciones de energía a través de los cables.",
      assets: {
        id: "video1",
        videoSrc: wireVideo,
        alt: "Una flecha blanca indica el movimiento de la energía eléctrica a través del cable de cobre.",
        videoLabels: ["Energía eléctrica"],
        associatedText:
          "La <b>energía eléctrica</b> se mueve a través de los cables por todo el circuito. La energía se conserva al cambiar de forma y cuando circula por el circuito.",
      },
    },
  ],
  fullCircuit: {
    id: "video3",
    videoSrc: fullCircuit,
    alt: "La flecha blanca indica que la energía eléctrica completa el circuito al recorrer el cable de cobre que baja de la bombilla y regresa a la batería.",
  },
  screen1Hotspots: [
    {
      id: "hotspot4",
      ariaLabel: "Sol",
      text: "Sol",
      alt: "El sol brilla sobre un ecosistema forestal.",
      hotspotText:
        "La energía se transforma en cada nivel trófico de la <b>red alimenticia</b> en un ecosistema. Haz clic sobre el sol para explorar las transformaciones de energía desde el sol hasta el roble.",
      assets: {
        id: "img0",
        alt: "Unas flechas negras indican que el sol transfiere energía radiante a las bellotas del árbol.",
        arrowLabel: ["Energía radiante"],
        associatedText: [
          "El sol proporciona <b>energía radiante</b> al roble. Luego, con la ayuda del agua y del dióxido de carbono, el roble transforma esta <b>energía radiante</b> en <b>energía química</b> a través del proceso de fotosíntesis.",
          "El roble es un productor porque puede generar su propia energía sin depender de otros organismos. Los productores son los que más energía tienen en los ecosistemas, pues se sitúan en el primer nivel de la red alimenticia en cada ecosistema.",
        ],
      },
    },
    {
      id: "hotspot5",
      ariaLabel: "Bellota",
      text: "Bellota",
      alt: "Bellotas en un árbol.",
      hotspotText:
        "Haz clic sobre la bellota para explorar las transformaciones de energía desde la bellota hasta la ardilla.",
      assets: {
        id: "img1",
        alt: "Unas flechas negras indican que las bellotas transfieren energía química a una ardilla que se come una bellota en el árbol.",
        arrowLabel: ["Energía radiante", "Energía química"],
        associatedText: [
          "A medida que crece, un roble produce bellotas. La ardilla de Douglas se come una bellota y recibe <b>energía química.</b> El cuerpo de la ardilla utiliza una parte de la <b>energía química</b> como combustible para moverse, respirar y eliminar desechos.",
          "Gran parte de la energía química se transforma en <b>energía térmica</b> y se libera en la atmósfera. Al final, la cantidad de <b>energía química</b> que la ardilla puede transferir al siguiente organismo en la red alimenticia es menor que la que recibió del roble.",
        ],
      },
    },
    {
      id: "hotspot6",
      ariaLabel: "Ardilla",
      text: "Ardilla",
      alt: "Un ardilla que se come una bellota en un árbol.",
      hotspotText:
        "Haz clic sobre la ardilla para explorar las transformaciones de energía desde la ardilla hasta el gato de cola anillada.",
      assets: {
        id: "img1",
        alt: "Unas flechas negras indican que la ardilla transfiere energía química al gato de cola anillada.",
        arrowLabel: ["Energía radiante", "Energía química", "Energía química"],
        associatedText: [
          "El gato de cola anillada se come a la ardilla de Douglas y recibe <b>energía química</b>. El cuerpo del gato de cola anillada utiliza una parte de la <b>energía química</b> como combustible para moverse, respirar y eliminar desechos.",
          "Gran parte de la energía química se transforma en <b>energía térmica</b> y se libera en la atmósfera. Al final, la cantidad de <b>energía química</b> que el gato de cola anillada puede transferir al siguiente organismo en la red alimenticia es menor que la que recibió de la ardilla de Douglas.",
        ],
      },
    },
  ],
  screen0HotspotSequence: ["hotspot0", "hotspot1", "hotspot2"],
  screen1HotspotSequence: ["hotspot4", "hotspot5", "hotspot6"],
};

export default data;
