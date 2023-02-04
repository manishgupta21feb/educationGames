import globalDataSet from "../../app/data/data.es";
import instructionImg from "../assets/images/startInfoImg.png";
import mineralsVideo from "../assets/videos/mineralsVideo.mp4";
import organicVideo from "../assets/videos/organicMatVideo.mp4";
import waterVideo from "../assets/videos/waterVideo.mp4";
import airVideo from "../assets/videos/airVideo.mp4";
import soilImg from "../assets/images/soil.png";

const data = {
  observationMotive:
    "En esta simulación, el estudiante observará cómo se forma el suelo a lo largo del tiempo.",
  topHeading:
    "Los minerales, los organismos, el aire y el agua desempeñan papeles importantes en la formación del suelo. Haz clic sobre una sección para obtener más información.",
  graphColor: ["#BA5B08", "#0056B3", "#35374C", "#1B8338"],

  pieChartData: [
    {
      SerNo: 1,
      graphData: [45, 55],
      graphLabel: [
        {
          text: "Minerales, 45.0 %",
          class: "pattern2",
          altText: "El naranja con rayas blancas representa los minerales.",
        },
        {
          text: "Otros, 55.0 %",
          class: "pattern5",
          altText: "El negro representa los otros componentes.",
        },
      ],
    },
    {
      SerNo: 2,
      graphData: [5, 95],
      graphLabel: [
        {
          text: "Materia orgánica, 5.0 %",
          class: "pattern3",
          altText: "El azul con rayas blancas representa la materia orgánica.",
        },
        {
          text: "Otros, 95.0 %",
          class: "pattern5",
          altText: "El negro representa los otros componentes.",
        },
      ],
    },
    {
      SerNo: 3,
      graphData: [25, 75],
      graphLabel: [
        {
          text: "Agua, 25.0 %",
          class: "pattern4",
          altText: "El negro con rayas blancas representa el agua.",
        },
        {
          text: "Otros, 75.0 %",
          class: "pattern5",
          altText: "El negro representa los otros componentes.",
        },
      ],
    },
    {
      SerNo: 4,
      graphData: [25, 75],
      graphLabel: [
        {
          text: "Aire, 25.0 %",
          class: "pattern1",
          altText: "El verde con manchas blancas representa el aire.",
        },
        {
          text: "Otros, 75.0 %",
          class: "pattern5",
          altText: "El negro representa los otros componentes.",
        },
      ],
    },
    {
      SerNo: 5,
      graphData: [45, 5, 25, 25],
      graphLabel: [
        {
          text: "Minerales, 45.0 %",
          class: "pattern2",
          altText: "El naranja con rayas blancas representa los minerales.",
        },
        {
          text: "Materia orgánica, 5.0 %",
          class: "pattern3",
          altText: "El azul con rayas blancas representa la materia orgánica.",
        },
        {
          text: "Agua, 25.0 %",
          class: "pattern4",
          altText: "El negro con rayas blancas representa el agua.",
        },
        {
          text: "Aire, 25.0 %",
          class: "pattern1",
          altText: "El verde con manchas blancas representa el aire.",
        },
      ],
    },
  ],

  mainScreenData: [
    {
      SerNo: 1,
      text1:
        "El primer material que hay en el suelo son los minerales. Los minerales —como el cuarzo— son sustancias puras, mientras que las rocas —como el granito— son una mezcla de muchos minerales. Hay cuarzo en el granito, pero no hay granito en el cuarzo.",
      text2:
        "Con el tiempo, la meteorización descompone los minerales y las rocas para crear partículas que forman aproximadamente el 45 % de la mezcla de cualquier suelo.",
      text3:
        "La meteorización ocurre cuando el viento, la lluvia y el hielo quiebran los minerales en partículas muy pequeñas. Esto toma cientos, y a veces miles, de años. Estudiamos la meteorización cuando hablamos sobre la formación de grandes accidentes geográficos. El mismo proceso de meteorización que forma el suelo también forma cañones o deltas.",
      videoData: {
        srNo: "1",
        id: "Ques1",
        videoSrc: mineralsVideo,
        alt: "Se forman grietas pequeñas en una roca grande que se calienta y se enfría. Luego llueve, el agua se congela y se forma hielo en las grietas. El agua se expande y las grietas también, de modo que se rompe lentamente la roca.",
      },
      graphAlt:
        "Una gráfica circular que tiene casi una mitad sombreada de color naranja con rayas blancas para representar los minerales y el resto sombreado de color negro.",
    },
    {
      SerNo: 2,
      text1:
        "La materia orgánica incluye cualquier cosa que esté viva o haya estado viva alguna vez. Las hojas que caen de un árbol y se descomponen con el tiempo para formar parte del suelo son un componente de la materia orgánica de un suelo.",
      text2:
        "Las raíces de las plantas también viven en el suelo. Cuando la planta muere, las raíces se descomponen y aún forman parte de la materia orgánica de ese suelo.",
      text3:
        "Muchos animales, como insectos y gusanos, viven en el suelo y también forman parte de su materia orgánica.",
      videoData: {
        srNo: "2",
        id: "Ques2",
        videoSrc: organicVideo,
        alt: "Una imagen que muestra pasto y raíces en el suelo; los organismos vivos que hay en el suelo mueren, pero sus restos permanecen allí y se descomponen.",
      },
      graphAlt:
        "Una gráfica circular que tiene una sección pequeña sombreada de color azul con rayas blancas para representar la materia orgánica y el resto sombreado de color negro.",
    },
    {
      SerNo: 3,
      text1:
        "La cantidad de agua que hay en un suelo varía según la ubicación de ese suelo en la Tierra. Algunos suelos tienen mucha agua, como los de los bosques, mientras que otros suelos son muy secos, como los de los desiertos. Aunque la cantidad de agua en un suelo puede variar, todos los suelos necesitan agua para formarse. Además, el agua es necesaria para la vida, por lo que cualquier materia orgánica que haya en el suelo necesita una cierta cantidad de agua para sobrevivir.",
      text2:
        "El agua de la lluvia o de la nieve se filtra hacia el suelo a través de la tierra. Esta agua puede ser utilizada por animales y plantas o almacenada en los espacios que hay entre las partículas de suelo.",
      text3: "",
      videoData: {
        srNo: "3",
        id: "Ques3",
        videoSrc: waterVideo,
        alt: "Desde el cielo, cae precipitación —como lluvia— sobre la tierra. El agua viaja por el suelo y llena los espacios que hay entre los pequeños granos de tierra.",
      },
      graphAlt:
        "Una gráfica circular que tiene una cuarta parte sombreada de color negro con rayas blancas para representar el agua y tres cuartas partes sombreadas de color negro.",
    },
    {
      SerNo: 4,
      text1:
        "El aire está formado por muchos tipos de gases diferentes. Al igual que las rocas son mezclas de minerales, el aire es una mezcla de gases. En los espacios que hay entre el agua y las partículas de suelo se concentran gases, como el oxígeno y el nitrógeno, que contribuyen a que haya vida en el suelo.",
      text2:
        "Los suelos con mayores cantidades de aire son livianos y sueltos; se separan fácilmente porque hay menos sustancias que los mantengan unidos. Los suelos con menos aire son muy densos y pesados.",
      text3: "",
      videoData: {
        srNo: "4",
        id: "Ques4",
        videoSrc: airVideo,
        alt: "Un suelo marrón debajo de un pasto verde; se observan unas líneas de aire blanco que penetran el suelo y un primer plano del agua y del aire que llenan los espacios entre las partículas de suelo.",
      },
      graphAlt:
        "Una gráfica circular que tiene una cuarta parte sombreada de color verde con manchas blancas para representar el aire y tres cuartas partes sombreadas de color negro.",
    },
    {
      SerNo: 5,
      text1:
        "La manera en que se forma un suelo y los materiales que lo componen nos dicen mucho sobre un área. Los científicos que estudian el suelo trabajan para crear mapas de los tipos de suelos. También trabajan para mantener los suelos saludables, es decir, para que haya un equilibrio sano de agua, aire, materia orgánica y minerales. La destrucción del suelo debido a la actividad humana —como la construcción, la agricultura y la contaminación— es un asunto serio en el que trabajan los científicos que estudian el suelo.",
      text2: "",
      text3: "",
      img: soilImg,
      alt: "Un corte transversal de las capas del suelo de la Tierra: la capa de abajo tiene rocas grises, la siguiente capa es de suelo marrón y rocas grises, las próximas dos capas son de suelo marrón y la capa de arriba tiene el suelo rojo con raíces y pasto.",
      graphAlt:
        "Una gráfica circular que muestra que la composición general de los suelos consta de minerales, materia orgánica, agua y aire.",
    },
  ],

  tabArray: [
    { id: "Minerals", title: "Minerales" },
    { id: "Organic material", title: "Materia orgánica" },
    { id: "Water", title: "Agua" },
    { id: "Air", title: "Aire" },
    { id: "Soil", title: "Suelo" },
  ],
  instructionBoxContent: {
    label:
      "La palabra «suelo» es un término general que describe una mezcla compleja de minerales, agua, aire y materia orgánica (tanto seres vivos como seres que alguna vez estuvieron vivos).<br>",
    label2:
      "El suelo está formado por diferentes mezclas de estos materiales, por lo que cada lugar específico de la Tierra tiene un suelo único. Aunque cada suelo sea único, la manera en que se forman todos los suelos es básicamente la misma.",
    img: instructionImg,
    alt: "Un terreno agrícola en el que crecen diferentes cultivos.",
  },
  InfoBoxContent:
    "Haz clic sobre cada sección para obtener información detallada sobre el suelo.",
  buttonLabels: { ...globalDataSet.buttonLabels },
  resetLiveText: globalDataSet.resetLiveText,
  resetMsgContent: globalDataSet.resetPopupText,
};

export default data;
