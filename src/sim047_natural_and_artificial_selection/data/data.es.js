import commonData from "../../app/data/data.es";
import DefaultImg from "../assets/images/default.png";
import screen0Img from "../assets/images/image_0011.png";
import gen2Image from "../assets/images/image_0012.png";
import gen3Image from "../assets/images/image_0013.png";
import gen4Image from "../assets/images/image_0014.png";
import gen5Image from "../assets/images/image_0015.png";
import Default2 from "../assets/images/default2.png";
import screen1Img from "../assets/images/image_0021.png";
import screen1Img2 from "../assets/images/image_0022.png";
import screen1Img3 from "../assets/images/image_0023.png";
import screen1Img4 from "../assets/images/image_0024.png";
import pattern1 from "../assets/images/green3x.png";
import pattern2 from "../assets/images/orange3x.png";
const data = {
  buttonLabels: { ...commonData.buttonLabels },
  completionPopup: {
    ...commonData.completionPopup,
    content: "Has completado exitosamente esta simulación.",
  },
  resetMsgContent: commonData.resetPopupText,
  resetLiveText: commonData.resetLiveText,
  sliderLabel: "Línea cronológica",
  slider0: {
    listitems: [
      {
        id: 0,
        value: 0,
        label: "Generación 0",
        altImg:
          "La generación 0 muestra 6 tortugas pardas y 5 tortugas verdes sobre la arena de una playa. Dos pájaros vuelan en el cielo.",
      },
      {
        id: 1,
        value: 1,
        label: "Generación 1",
        altImg:
          "La generación 1 muestra 5 tortugas pardas y 5 tortugas verdes sobre la arena de una playa. Dos pájaros vuelan en el cielo.",
      },
      {
        id: 2,
        value: 2,
        label: "Generación 2",
        altImg:
          "La generación 2 muestra 6 tortugas pardas y 4 tortugas verdes sobre la arena de una playa. Dos pájaros vuelan en el cielo, cada uno de ellos con una tortuga verde en sus garras.",
      },
      {
        id: 3,
        value: 3,
        label: "Generación 3",
        altImg:
          "La generación 3 muestra 7 tortugas pardas y 3 tortugas verdes sobre la arena de una playa. Dos pájaros vuelan en el cielo, cada uno de ellos con una tortuga verde en sus garras.",
      },
      {
        id: 4,
        value: 4,
        label: "Generación 4",
        altImg:
          "La generación 4 muestra 9 tortugas pardas y 1 tortuga verde sobre la arena de una playa. Dos pájaros vuelan en el cielo. Uno tiene en sus garras una tortuga verde y, el otro, una tortuga parda.",
      },
      {
        id: 5,
        value: 5,
        label: "Generación 5",
        altImg:
          "La generación 5 muestra 10 tortugas pardas y ninguna tortuga verde sobre la arena de una playa. Dos pájaros vuelan en el cielo, cada uno de ellos con una tortuga parda en sus garras.",
      },
    ],
  },
  slider1: {
    listitems: [
      {
        id: 0,
        value: 0,
        label: "Edad antigua",
        altImg:
          "Crece una planta de maíz. Parece un arbusto verde con muchas hojas y ramas. A la derecha, hay una regla para medir la altura de la planta en pulgadas.",
      },
      {
        id: 6,
        value: 1,
        label: "Hace 9,000 años",
        altImg:
          "Primer plano de hace 9,000 años. La mazorca de maíz es asimétrica y su forma es irregular. Su altura es de 2 pulgadas. La planta parece un arbusto con muchas hojas y ramas.",
      },
      {
        id: 7,
        value: 2,
        label: "Hace 6,000 años",
        altImg:
          "Primer plano de hace 6,000 años. La mazorca de maíz es simétrica y su forma es más parecida a la actual. Su altura es de 2 pulgadas. La planta parece un arbusto con muchas hojas y ramas.",
      },
      {
        id: 8,
        value: 3,
        label: "Hace 3,000 años",
        altImg:
          "Primer plano de hace 3,000 años. La mazorca de maíz tiene una forma parecida a la actual. Cada mazorca mide 3 pulgadas de altura. La planta es más alta y delgada, con hojas largas que salen de un tallo central.",
      },
      {
        id: 9,
        value: 4,
        label: "Edad moderna",
        altImg:
          "Primer plano de la edad moderna. La mazorca de maíz tiene su forma actual. Cada mazorca mide 6 pulgadas de altura. La planta es alta y delgada, con hojas largas que salen de un tallo central.",
      },
    ],
  },
  valuetextArray0: {
    0: "Generación 0",
    1: "Generación 1",
    2: "Generación 2",
    3: "Generación 3",
    4: "Generación 4",
    5: "Generación 5",
  },
  valuetextArray1: {
    0: "Edad antigua",
    1: "Hace 9,000 años",
    2: "Hace 6,000 años",
    3: "Hace 3,000 años",
    4: "Edad moderna",
  },
  activityHeading:
    "El estudiante explorará los efectos de la selección natural y artificial en diferentes poblaciones.",
  instructionBoxContent:
    "Bienvenido a la playa Variación. Hoy exploraremos los efectos de la selección natural y artificial en diferentes poblaciones.",
  hintContent:
    "Recorre la línea cronológica para ver cómo cambian los rasgos en las poblaciones a través de las generaciones.</br>En la línea cronológica de la <b>selección natural</b>, observa cuántos individuos presentan cada rasgo cromático y cómo se distribuyen los rasgos entre toda la población, según se muestra en la gráfica circular.",
  pieChartHeader:
    "Distribución de rasgos cromáticos en la población de tortugas",
  tabs: [
    {
      id: 0,
      tab: "Selección natural",
      classes: "natural",
    },
    {
      id: 1,
      tab: "Selección artificial",
      classes: "artificial",
    },
  ],
  defaultData: [
    {
      id: 0,
      Ost_0:
        "Recorre la línea cronológica para ver cómo cambian los rasgos en las poblaciones a través de las generaciones.",
      tabOst0_DefaultImg: DefaultImg,
    },
    {
      id: 1,
      Ost_0:
        "Recorre la línea cronológica para ver cómo cambian los rasgos en la población de maíz a través de las generaciones.",
      tabOst0_DefaultImg: Default2,
    },
  ],
  cropImgScale: [0, 1, 2, 3, 4, 5, 6],
  scaleUnit: "Pulgadas",
  timelineData1: [
    {
      id: 1,
      travseralId: 1,
      name: "Generation 1",
      classes: "gen1",
      imageSrc: screen0Img,
      altImg: "Beach scene with 5 green turtles and 5 tan turtles.",
      infoText:
        "Todas las <b>poblaciones</b> de organismos presentan variaciones en sus <b>rasgos</b>. En la playa Variación, la población de tortugas tiene dos variaciones de color: el pardo y el verde.",
      graphData: [50, 50],
      graphLabel: [
        {
          text: "Verdes, 50 %",
          class: "pattern1",
          color: "#4c9c62",
          altText: "Las tortugas verdes representan el 50 %.",
        },
        {
          text: "Pardas, 50 %",
          class: "pattern2",
          color: "#9b4c06",
          altText: "Las tortugas pardas representan el 50 %.",
        },
      ],
    },
    {
      id: 2,
      travseralId: 2,
      name: "Generation 2",
      classes: "gen2",
      imageSrc: gen2Image,
      infoText:
        "Han pasado 30 años. La población de aves caza a las tortugas. Las tortugas verdes son más fáciles de ver en la arena y se les atrapa con más frecuencia que a las tortugas pardas. Las tortugas pardas tienen mayores probabilidades de sobrevivir lo suficiente como para reproducirse y transmitir su color a las crías.",
      graphData: [40, 60],
      graphLabel: [
        {
          text: "Verdes, 40 %",
          class: "pattern1",
          color: "#4c9c62",
          altText: "Las tortugas verdes representan el 40 %",
        },
        {
          text: "Pardas, 60 %",
          class: "pattern2",
          color: "#9b4c06",
          altText: "Las tortugas pardas representan el 60 %",
        },
      ],
    },
    {
      id: 3,
      travseralId: 3,
      name: "Generation 3",
      classes: "gen3",
      imageSrc: gen3Image,
      infoText:
        "Han pasado 40 años. La población de aves todavía caza a las tortugas. Las tortugas verdes todavía son más fáciles de ver en la arena, y se les atrapa con más frecuencia que a las tortugas pardas. Las tortugas pardas todavía se reproducen y transmiten su color a las crías con más frecuencia que las tortugas verdes.",
      graphData: [30, 70],
      graphLabel: [
        {
          text: "Verdes, 30 %",
          class: "pattern1",
          color: "#4c9c62",
          altText: "Las tortugas verdes representan el 30 %",
        },
        {
          text: "Pardas, 70 %",
          class: "pattern2",
          color: "#9b4c06",
          altText: "Las tortugas pardas representan el 70 %",
        },
      ],
    },
    {
      id: 4,
      travseralId: 4,
      name: "Generation 4",
      classes: "gen4",
      imageSrc: gen4Image,
      infoText:
        "Han pasado 35 años más. El número de tortugas con el rasgo de color verde ha disminuido tanto que la población de aves ha empezado a cazar algunas tortugas pardas.",
      graphData: [10, 90],
      graphLabel: [
        {
          text: "Verdes, 10 %",
          class: "pattern1",
          color: "#4c9c62",
          altText: "Las tortugas verdes representan el 10 %",
        },
        {
          text: "Pardas, 90 %",
          class: "pattern2",
          color: "#9b4c06",
          altText: "Las tortugas pardas representan el 90 %",
        },
      ],
    },
    {
      id: 5,
      travseralId: 5,
      name: "Generation 5",
      classes: "gen5",
      imageSrc: gen5Image,
      infoText:
        "Han pasado 50 años más. Observa cuántos individuos presentan cada rasgo de color y cómo se distribuyen los rasgos entre toda la población, según se muestra en la gráfica circular. ¿Cómo han cambiado los rasgos genéticos de la población de tortugas a través de las generaciones?",
      graphData: [0, 100],
      graphLabel: [
        {
          text: "Verdes, 0 %",
          class: "pattern1",
          color: "#4c9c62",
          altText: "Las tortugas verdes representan el 0 %",
        },
        {
          text: "Pardas, 100 %",
          class: "pattern2",
          color: "#9b4c06",
          altText: "Las tortugas pardas representan el 100 %",
        },
      ],
    },
  ],
  timelineData2: [
    {
      id: 1,
      travseralId: 6,
      name: "9,000 Years Ago",
      classes: "content1",
      imageSrc: screen1Img,
      infoText:
        "En los campos crecía espontáneamente un pasto silvestre llamado teosinte. Sus semillas tenían una cáscara exterior dura que no se podía masticar. Esta cáscara solo se abría cuando la planta alcanzaba su maduración. Los humanos masticaban los tallos verdes para obtener nutrientes. Observa la altura, la forma y la organización de las semillas amarillas.",
    },
    {
      id: 2,
      travseralId: 7,
      name: "6,000 Years Ago",
      classes: "content2",
      imageSrc: screen1Img2,
      infoText:
        "Los agricultores de la época empezaron a sembrar las semillas de las plantas de teosinte que tenían la cáscara más blanda. La reproducción selectiva de la planta durante generaciones hizo desaparecer por completo el rasgo asociado a la cáscara dura. Ahora, la gente podía comer directamente las semillas (es decir, los granos). Observa la altura, la forma y la organización de las semillas.",
    },
    {
      id: 3,
      travseralId: 8,
      name: "3,000 Years Ago",
      classes: "content3",
      imageSrc: screen1Img3,
      infoText:
        "Para que un cultivo prospere se requiere mucho tiempo y energía. Los agricultores querían que las plantas de maíz produjeran más granos en cada mazorca. Empezaron a sembrar solamente las semillas de las plantas cuyas mazorcas tenían más granos de maíz y dejaron de sembrar las de aquellas que tenían mazorcas más cortas y con menos granos. Observa la altura, la forma y la organización de las semillas.",
    },
    {
      id: 4,
      travseralId: 9,
      name: "Modern Time",
      classes: "content4",
      imageSrc: screen1Img4,
      infoText:
        "Los agricultores modernos todavía usan técnicas de <b>selección artificial</b> para sembrar maíz. Su objetivo es producir de manera consistente mazorcas altas con muchos granos comestibles. ¿Qué otros rasgos crees que eligen las personas para la reproducción selectiva de sus cultivos? Observa la altura, la forma y la organización de las semillas.",
    },
  ],
  patterns: [
    { class: "pattern1", src: pattern1 },
    { class: "pattern2", src: pattern2 },
  ],
};

export default data;
