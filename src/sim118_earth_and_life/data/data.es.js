import commonData from "../../app/data/data.es";
import { common } from "../actions";

import launchImage from "../assets/images/scene_1.png";
import questionAImage from "../assets/images/scene_2.png";
import questionBImage from "../assets/images/scene_3.png";
import questionCImage from "../assets/images/scene_4.png";
import questionDImage from "../assets/images/scene_5.png";

const data = {
  learningObjective:
    "Los estudiantes leerán escenarios sobre diferentes planetas de nuestro universo.<br>	Los estudiantes identificarán y analizarán las características de los planetas para determinar si son habitables.",
  introductoryText:
    "¡Bienvenido! Vamos a despegar para explorar las características que hacen que un planeta sea habitable.",
  hint: "Haz clic sobre las diferentes ubicaciones para aprender más sobre las características de cada planeta.",
  buttonLabels: { ...commonData.buttonLabels },
  mainScreen: {
    imageSrc: launchImage,
    imageAlt:
      "Un campo de estrellas en el espacio exterior con las ubicaciones de cuatro planetas para explorar.",
    hotSpots: {
      locationA: {
        content: "A",
        location: "locationA",
        altText: "Planeta A",
        visited: false,
      },
      locationB: {
        content: "B",
        location: "locationB",
        altText: "Planeta B",
        visited: false,
      },
      locationC: {
        content: "C",
        location: "locationC",
        altText: "Planeta C",
        visited: false,
      },
      locationD: {
        content: "D",
        location: "locationD",
        altText: "Planeta D",
        visited: false,
      },
    },

    content:
      "Los científicos exploran activamente el espacio exterior para identificar planetas potencialmente habitables. Han delimitado su búsqueda a cuatro planetas, pero necesitan tu ayuda para determinar cuál podría ser habitado por los humanos.<br/><br/>Según las características de la Tierra, sabemos que, para poder albergar vida, un planeta debe tener agua líquida y estar a una cierta distancia de la estrella que orbita. Además, en su atmósfera debe haber oxígeno y una capa que lo proteja de los rayos ultravioletas.<br/><br/>¡Haz clic sobre cada ubicación para explorar cuál podría ser la próxima Tierra!",
  },
  locationA: {
    imgSrc: questionAImage,
    imageAlt:
      "El planeta Y568 tiene aproximadamente una cuarta parte del tamaño de la Tierra y está cerca de su estrella. Su puntaje en el gráfico de monitoreo de la salud es 2 de 4. El puntaje de la Tierra es 4 de 4.",
    introContent:
      "Bienvenido al planeta Y568. Este es un planeta especial, ya que su <strong>composición</strong>, o estructura atmosférica, es parecida a la de la Tierra. Eso significa que contiene oxígeno gaseoso y una <strong>capa de ozono</strong> que ayuda a bloquear la radiación ultravioleta emitida por su estrella central. Aunque estas dos características son necesarias, el planeta Y568 tiene algunas desventajas. Está a solo 58 millones de kilómetros de distancia de su estrella, ¡lo que significa que la temperatura es abrasadora! ¿Qué crees que signifique esto en términos del estado del agua en el planeta Y568? ",
    questionHeader:
      "¡Estás en lo correcto! En el planeta no hay agua líquida. De acuerdo con el medidor de vida y con esta información, ¿podría albergar vida humana el planeta Y568?",
    correctAnswer: "no",
  },
  locationB: {
    imgSrc: questionBImage,
    imageAlt:
      "El planeta Z257 es aproximadamente 1.5 veces más grande que la Tierra, tiene su propia luna y está lejos de su estrella. Su puntaje en el gráfico de monitoreo de la salud es 1.5 de 4. El puntaje de la Tierra es 4 de 4.",
    introContent:
      "Este es el planeta Z257. Este planeta se parece a la Tierra en que también tiene una luna, una atmósfera gaseosa y un terreno rocoso. Lamentablemente, allí terminan las similitudes. La <strong>proximidad</strong>, o cercanía, del planeta a su estrella es de unos 352 millones de kilómetros. Eso es casi el doble de la distancia que hay entre la Tierra y el Sol. ¿Qué significa eso en términos de la temperatura y el agua?",
    questionHeader:
      "¡Estás en lo correcto! Significa que las temperaturas están muy por debajo del punto de congelación y que el agua, de haberla, se encontraría en estado sólido. De acuerdo con el medidor de vida y con esta información, ¿podría albergar vida humana el planeta Z257?",
    correctAnswer: "no",
  },
  locationC: {
    imgSrc: questionCImage,
    imageAlt:
      "El planeta W731 tiene más o menos el mismo tamaño que la Tierra y está lejos de su estrella. Su puntaje en el gráfico de monitoreo de la salud es 3 de 4. El puntaje de la Tierra es 4 de 4.",
    introContent:
      "Bienvenido al planeta W731. Aunque su descubrimiento fue casual, ha generado mucho entusiasmo entre los científicos. El planeta W731 está rodeado de una <strong>atmósfera</strong> gaseosa que contiene oxígeno y una capa que protege su superficie de la radiación ultravioleta.",
    questionHeader:
      "La proximidad de este planeta a su sol es de unos 153 millones de kilómetros, solo 3 millones de kilómetros más que la de la Tierra al Sol. Debido a esta distancia, los científicos han hallado evidencia de agua líquida en su superficie y han determinado que tiene temperaturas estables durante el día y la noche. De acuerdo con el medidor de vida y con esta información, ¿podría albergar vida humana el planeta W731?",
    correctAnswer: "yes",
  },

  locationD: {
    imgSrc: questionDImage,
    imageAlt:
      "El planeta X498 es aproximadamente 2.5 veces más grande que la Tierra y está cerca de su estrella. Su puntaje en el gráfico de monitoreo de la salud es 2 de 4. El puntaje de la Tierra es 4 de 4.",
    introContent:
      "Este es el planeta X498. Tiene algunas características interesantes que vale la pena mencionar. Los científicos han hallado evidencia de agua sólida y líquida en su superficie. Además, la proximidad del planeta a su estrella es de 145 millones de kilómetros, una distancia muy parecida a la que hay entre la Tierra y el Sol, que es de 150 millones de kilómetros.",
    questionHeader:
      "La desventaja del planeta X498 es que su atmósfera gaseosa no tiene una capa de ozono que le ofrezca protección. Esto significa que, en su superficie, todos los organismos estarían expuestos a los daños de la radiación ultravioleta emitida por su estrella. De acuerdo con el medidor de vida y con esta información, ¿podría albergar vida humana el planeta X498?",
    correctAnswer: "no",
  },
  questions: [
    {
      id: "question1",
      question:
        "La/El _______________ es la capa gaseosa que rodea la Tierra y se mantiene en su lugar debido a la fuerza de gravedad. Contiene oxígeno, que es un gas necesario para la vida.",
      questionLabel:
        "La / El espacio en blanco es la capa gaseosa que rodea la Tierra y se mantiene en su lugar debido a la fuerza de gravedad. Contiene oxígeno, que es un gas necesario para la vida.",
      answer: "atmosphere_rb",
    },
    {
      id: "question2",
      question:
        "La atmósfera contiene _______________, un gas que protege a los organismos que habitan la superficie de la Tierra contra la peligrosa radiación ultravioleta emitida por el Sol.",
      questionLabel:
        "La atmósfera contiene espacio en blanco, un gas que protege a los organismos que habitan la superficie de la Tierra contra la peligrosa radiación ultravioleta emitida por el Sol.",
      answer: "ozone_rb",
    },
    {
      id: "question3",
      question:
        "La atmósfera terrestre contiene nitrógeno, oxígeno, argón y pequeñas cantidades de otros gases. Esta combinación de gases describe la/el  _________________, o estructura de la atmósfera.",
      questionLabel:
        "La atmósfera terrestre contiene nitrógeno, oxígeno, argón y pequeñas cantidades de otros gases. Esta combinación de gases describe la / el espacio en blanco, o estructura de la atmósfera.",
      answer: "composition_rb",
    },
    {
      id: "question4",
      question:
        "La Tierra está a unos 150 millones de kilómetros de distancia del Sol. Esta distancia afecta la temperatura y el estado del agua en la Tierra. La/El _________________ a una estrella como el Sol es una característica clave a la hora de determinar si un planeta es habitable.",
      questionLabel:
        "La Tierra está a unos 150 millones de kilómetros de distancia del Sol. Esta distancia afecta la temperatura y el estado del agua en la Tierra. La / El espacio en blanco, a una estrella como el Sol es una característica clave a la hora de determinar si un planeta es habitable.",
      answer: "proximity_rb",
    },
  ],

  assessmentRadioButtons: [
    {
      id: "composition_rb",
      text: "composición",
    },
    {
      id: "ozone_rb",
      text: "ozono",
    },
    {
      id: "proximity_rb",
      text: "proximidad",
    },
    {
      id: "atmosphere_rb",
      text: "atmósfera ",
    },
  ],

  radioButtons: [
    {
      id: "yes",
      text: "Sí",
      label: "Sí",
    },
    {
      id: "no",
      text: "No",
      label: "No",
    },
  ],

  questionText: {
    text1: "Pregunta:",
    text2: "de",
    sentence: "Selecciona el término que completa mejor la oración.",
  },

  feedbacks: {
    right: commonData.correctToastMessage,
    wrong: commonData.incorrectToastMessage,
    exception: "Esta es la respuesta correcta.",
  },
  transitionPopup: {
    ...commonData.transitionPopup,
    content:
      "Ahora que has explorado las características que hacen que un planeta sea habitable, es hora de demostrar lo que sabes.",
  },
  completionPopup: {
    ...commonData.completionPopup,
    content: "Has completado exitosamente esta simulación.",
  },
  resetPopupData: commonData.resetPopupText,
  temp: "ignore me",
};

export default data;
