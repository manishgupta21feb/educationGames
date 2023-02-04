import commonData from "../../app/data/data.es";

import fifteen_ouns_part1 from "../assets/videos/fifteen_ounce_part1.mp4";
import fifteen_ouns_part2 from "../assets/videos/fifteen_ounce_part2.mp4";

import twenty_ouns_part1 from "../assets/videos/twenty_ounce_part1.mp4";
import twenty_ouns_part2 from "../assets/videos/twenty_ounce_part2.mp4";

import ball_1 from "../assets/videos/ball_1.mp4";
import ball_2 from "../assets/videos/ball_2.mp4";
import ball_3 from "../assets/videos/ball_3.mp4";

import start_screen_2 from "../assets/images/Start_screen1.png";
import fifteen_part1 from "../assets/images/fifteen_ounce_part1.png";
import fifteen_part2 from "../assets/images/fifteen_ounce_part2.png";
import twenty_part1 from "../assets/images/twenty_ounce_part1.png";
import twenty_part2 from "../assets/images/twenty_ounce_part2.png";

import ball1 from "../assets/images/ball_1.png";
import ball2 from "../assets/images/ball_2.png";
import ball3 from "../assets/images/ball_3.png";

import ball1_poster from "../assets/images/Start_screen1wth_ball.png";
import ball2_poster from "../assets/images/Start_screen2wth_ball.png";
import ball3_poster from "../assets/images/Start_screen3wth_ball.png";

import temp_1 from "../assets/images/Launch_page_tab1.png";
import temp_2 from "../assets/images/Launch_page_tab2.png";

import gravity_screen_1 from "../assets/images/Start_screen.png";
import arrow_head from "../assets/images/Arrow.png";

const data = {
  simHeading:
    "En esta simulación, el estudiante explorará la gravedad y la fricción.",
  infoContent:
    "La fuerza es un empuje o una atracción. Hay fuerzas invisibles que actúan sobre los objetos. Aunque no puedas ver la fuerza que empuja o atrae un objeto, sí puedes ver los efectos que tiene esa fuerza en el objeto. La gravedad es una fuerza que atrae, mientras que la fricción es una fuerza que empuja.",
  hintContent: {
    launch: "Selecciona cualquiera de los escenarios dados.",
    gravity:
      "Elige una bola, lee la información y luego prueba el efecto que tiene la gravedad en ella.",
    friction:
      "Escoge la cantidad de arroz que quieres verter en la botella y haz clic sobre «Prueba»<span aria-hidden='true'>.</span>",
  },
  launchPage: {
    ostHeading: "Escoge una fuerza para explorarla.",
    gravity: {
      imgSrc: temp_1,
      imgAlt: "Un manzano en un campo con una manzana que cae al suelo.",
      content: "Gravedad",
    },
    friction: {
      imgSrc: temp_2,
      imgAlt:
        "Un niño sentado en la parte superior de un tobogán en un parque.",
      content: "Fricción",
    },
  },
  gravity: {
    content:
      "La gravedad es una fuerza que atrae los objetos hacia el centro de la Tierra. En esta simulación, probarás el efecto de la gravedad en diferentes bolas.<span class='break' aria-hidden='true'></span>Esta es una prueba de caída libre. Eso significa que las bolas caen en un vacío y que la única fuerza que actúa sobre ellas es la gravedad.<span class='break' aria-hidden='true'></span>Selecciona una bola para probar el efecto de la gravedad en ella.",
    balls: [
      {
        imgSrc: ball1,
        isViewed: false,
        currentSelected: false,
        details: {
          name: "Bola de boliche",
          Weight: "Peso: 10 lb",
          Diameter: "Diámetro: 8.5 in",
          diameterAria: "Diámetro 8.5 pulgadas",
          Timer: "4.45",
        },
      },
      {
        imgSrc: ball2,
        isViewed: false,
        currentSelected: false,
        details: {
          name: "Bola de béisbol",
          Weight: "Peso: 5.25 oz",
          Diameter: "Diámetro: 3 in",
          diameterAria: "Diámetro 3 pulgadas",
          Timer: "4.45",
        },
      },
      {
        imgSrc: ball3,
        isViewed: false,
        currentSelected: false,
        details: {
          name: "Canica",
          Weight: "Peso: 0.15 oz",
          Diameter: "Diámetro: 0.5 in",
          Aria: "Diámetro 0.5 pulgadas",
          Timer: "4.45",
        },
      },
    ],
    baseImgData: [
      {
        imgSrc: gravity_screen_1,
        alt: "Un equipo de pruebas de 100 metros de altura en el pasto, con árboles y cielo azul al fondo.  ",
      },
      {
        imgSrc: ball1_poster,
        alt: "Una bola de boliche en la parte superior del equipo de pruebas de 100 metros de altura.",
      },
      {
        imgSrc: ball2_poster,
        alt: "Una bola de béisbol en la parte superior del equipo de pruebas de 100 metros de altura.",
      },
      {
        imgSrc: ball3_poster,
        alt: "Una marble en la parte superior del equipo de pruebas de 100 metros de altura.",
      },
    ],
    videoData: [
      {
        id: "gravity_poster_1",
        videoSrc: ball_1,
        bgSrc: ball1_poster,
        alt: "Una bola de boliche en la parte superior del equipo de pruebas de 100 metros de altura.",
        altEnd: "Una bola de boliche en el suelo debajo del equipo de pruebas.",
        liveText:
          "Una bola de boliche que cae hacia el suelo desde el equipo de pruebas.",
      },
      {
        id: "gravity_poster_2",
        videoSrc: ball_2,
        bgSrc: ball2_poster,
        alt: "Una bola de béisbol en la parte superior del equipo de pruebas de 100 metros de altura.",
        altEnd: "Una bola de béisbol en el suelo debajo del equipo de pruebas.",
        liveText:
          "Una bola de béisbol que cae hacia el suelo debajo del equipo de pruebas.",
      },
      {
        id: "gravity_poster_3",
        videoSrc: ball_3,
        bgSrc: ball3_poster,
        alt: "Una canica en la parte superior del equipo de pruebas de 100 metros de altura.",
        altEnd: "Una canica en el suelo debajo del equipo de pruebas.",
        liveText:
          "Una canica que cae hacia el suelo debajo del equipo de pruebas.",
      },
    ],
    timerAria: { minutes: "minutos", seconds: "segundos" },
  },
  friction: {
    content:
      "Cuando hablamos de fricción, a menudo pensamos en lo que ocurre al frotarnos las manos. O bien pensamos en que no hay fricción cuando tratamos de caminar sobre una acera helada.<span class='break' aria-hidden='true'></span>La fricción es la fuerza opuesta, o la resistencia, que se produce debido al roce entre dos objetos. A veces hay mucha fricción, como cuando nos frotamos las manos, y otras veces hay poca fricción, como cuando nos deslizamos sobre el hielo.",
    questionContent:
      "Elige una cantidad de arroz para verter en la botella de agua de 20 onzas y probar cuán fuerte puede ser la fricción.",
    experiment1: [
      {
        id: "friction_poster_1",
        videoSrc: fifteen_ouns_part1,
        bgSrc: fifteen_part1,
        alt: "El vaso de precipitados con menos arroz tiene 15 onzas de arroz. El arroz se vierte en la botella vacía a través de un embudo.",
        altEnd: "La botella de vidrio llenada con 15 onzas de arroz.",
        liveText:
          "El vaso de precipitados con menos arroz tiene 15 onzas de arroz. El arroz se vierte en la botella vacía a través de un embudo.",
      },
      {
        id: "friction_poster_2",
        videoSrc: fifteen_ouns_part2,
        bgSrc: fifteen_part2,
        alt: "Se introduce el palito de madera en la botella de vidrio y luego se saca. La botella se queda sobre la mesa y el palito de madera sale de la botella.",
        altEnd:
          "Un primer plano del arroz dentro de la botella muestra mucho espacio entre los granos de arroz.",
        liveText:
          "Se introduce el palito de madera en la botella de vidrio y luego se saca. La botella se queda sobre la mesa y el palito de madera sale de la botella.",
        conclusion:
          "¿Qué ocurrió? ¿Era lo que esperabas?<br><br>Inténtalo otra vez con la otra cantidad para ver si el resultado es diferente. Si ya lo intentaste con ambas cantidades, ¿qué crees que haya causado los resultados?",
        conclusionLive:
          "¿Qué ocurrió? ¿Era lo que esperabas?Inténtalo otra vez con la otra cantidad para ver si el resultado es diferente. Si ya lo intentaste con ambas cantidades, ¿qué crees que haya causado los resultados?",
      },
    ],
    experiment2: [
      {
        id: "friction_poster_3",
        videoSrc: twenty_ouns_part1,
        bgSrc: twenty_part1,
        alt: "El vaso de precipitados con más arroz tiene 20 onzas de arroz. Se vierte el arroz en la botella a través de un embudo. Se agita la botella para hacer espacio para todo el arroz.",
        altEnd: "La botella de vidrio llenada con 20 onzas de arroz.",
        liveText:
          "El vaso de precipitados con más arroz tiene 20 onzas de arroz. Se vierte el arroz en la botella a través de un embudo. Se agita la botella para hacer espacio para todo el arroz.",
      },
      {
        id: "friction_poster_4",
        videoSrc: twenty_ouns_part2,
        bgSrc: twenty_part2,
        alt: "Se introduce el palito de madera en la botella de vidrio y luego se saca. La botella se levanta de la mesa.",
        altEnd:
          "Un primer plano del arroz dentro de la botella muestra los granos de arroz muy juntos.",
        liveText:
          "Se introduce el palito de madera en la botella de vidrio y luego se saca. La botella se levanta de la mesa.",
        conclusion:
          "¿Qué ocurrió? ¿Era lo que esperabas?<br><br>Inténtalo otra vez con la otra cantidad para ver si el resultado es diferente. Si ya lo intentaste con ambas cantidades, ¿qué crees que haya causado los resultados?",
        conclusionLive:
          "¿Qué ocurrió? ¿Era lo que esperabas? Inténtalo otra vez con la otra cantidad para ver si el resultado es diferente. Si ya lo intentaste con ambas cantidades, ¿qué crees que haya causado los resultados?",
      },
    ],
    baseImgData: {
      baseImage: {
        imgSrc: start_screen_2,
        alt: "Un embudo, un palito de madera, una botella de vidrio vacía y dos vasos de precipitados con diferentes cantidades de arroz sobre una mesa de laboratorio.",
      },
      experiment1: [
        {
          imgSrc: fifteen_part1,
          alt: "El vaso de precipitados con menos arroz tiene 15 onzas de arroz. El arroz se vierte en la botella vacía a través de un embudo.",
        },
        {
          imgSrc: fifteen_part2,
          alt: "Se introduce el palito de madera en la botella de vidrio y luego se saca. La botella se queda sobre la mesa y el palito de madera sale de la botella.",
        },
      ],
      experiment2: [
        {
          imgSrc: twenty_part1,
          alt: "El vaso de precipitados con más arroz tiene 20 onzas de arroz. Se vierte el arroz en la botella a través de un embudo. Se agita la botella para hacer espacio para todo el arroz.",
        },
        {
          imgSrc: twenty_part2,
          alt: "Se introduce el palito de madera en la botella de vidrio y luego se saca. La botella se levanta de la mesa.",
        },
      ],
    },
  },
  radioButtons: [
    {
      id: "experiment1",
      text: "15 oz",
      label: "15 oz",
    },
    {
      id: "experiment2",
      text: "20 oz",
      label: "20 oz",
    },
  ],
  transitionPopup: {
    ...commonData.transitionPopup,
    content: "Prueba otra fuerza.",
  },
  poleData: {
    imgSrc: arrow_head,
    alt: "flecha hacia arriba y flecha hacia abajo",
    content: "100 m",
  },
  buttonContent: { test: "Prueba" },
  buttonLabels: { ...commonData.buttonLabels },
  commonData,
};

export default data;
