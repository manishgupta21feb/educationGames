import globalData from "../../app/data/data.es";

import sahara from "../assets/audios/sahara.mp3";
import algeria from "../assets/audios/algeria.mp3";
import akerneset from "../assets/audios/akerneset.mp3";
import dust_bowl from "../assets/audios/dust_bowl.mp3";
import matterhorn from "../assets/audios/matterhorn.mp3";
import great_plains from "../assets/audios/great_plains.mp3";
import sahara_desert from "../assets/audios/sahara_desert.mp3";
import mushroom_rocks from "../assets/audios/mushroom_rocks.mp3";
import motlatse_river from "../assets/audios/motlatse_river.mp3";
import geiranger_fjord from "../assets/audios/geiranger_fjord.mp3";
import motlatse_canyon from "../assets/audios/motlatse_canyon.mp3";
import paternoster_lakes from "../assets/audios/paternoster_lakes.mp3";
import glacier_national_park from "../assets/audios/glacier_national_park.mp3";
import mushroom_rocks_of_kansas from "../assets/audios/mushroom_rocks_of_kansas.mp3";
import mammoth_cave_national_park from "../assets/audios/mammoth_cave_national_park.mp3";
import laki_and_grimsvotn_volcanoes from "../assets/audios/laki_and_grimsvotn_volcanoes.mp3";

const sfxs = [
  { id: "SAHARA", src: sahara },
  { id: "ALGERIA", src: algeria },
  { id: "AKERNESET", src: akerneset },
  { id: "DUST_BOWL", src: dust_bowl },
  { id: "MATTERHORN", src: matterhorn },
  { id: "GREAT_PLAINS", src: great_plains },
  { id: "SAHARA_DESERT", src: sahara_desert },
  { id: "MUSHROOM_ROCKS", src: mushroom_rocks },
  { id: "MOTLATSE_RIVER", src: motlatse_river },
  { id: "GEIRANGER_FJORD", src: geiranger_fjord },
  { id: "MOTLATSE_CANYON", src: motlatse_canyon },
  { id: "PATERNOSTER_LAKES", src: paternoster_lakes },
  { id: "GLACIER_NATIONAL_PARK", src: glacier_national_park },
  { id: "MUSHROOM_ROCKS_OF_KANSAS", src: mushroom_rocks_of_kansas },
  { id: "MAMMOTH_CAVE_NATIONAL_PARK", src: mammoth_cave_national_park },
  { id: "LAKI_AND_GRIMSVOTN_VOLCANOES", src: laki_and_grimsvotn_volcanoes },
];

const audioButtonsAlts = {
  SAHARA: "Audio del Sahara",
  ALGERIA: "Audio de Argelia",
  AKERNESET: "Audio de Akerneset",
  DUST_BOWL: "Audio del Dust Bowl",
  MATTERHORN: "Audio del monte Cervino",
  GREAT_PLAINS: "Audio de las Grandes Llanuras",
  SAHARA_DESERT: "Audio del desierto del Sahara",
  MUSHROOM_ROCKS: "Audio de las rocas fungiformes",
  MOTLATSE_RIVER: "Audio de las rocas de Motlatse",
  GEIRANGER_FJORD: "Audio del fiordo de Geiranger",
  MOTLATSE_CANYON: "Audio del cañón de Motlatse",
  PATERNOSTER_LAKES: "Audio de los lagos paternóster",
  GLACIER_NATIONAL_PARK: "Audio del parque nacional Los Glaciares",
  MUSHROOM_ROCKS_OF_KANSAS: "Audio de las rocas fungiformes de Kansas",
  MAMMOTH_CAVE_NATIONAL_PARK: "Audio del parque nacional Mammoth Cave",
  LAKI_AND_GRIMSVOTN_VOLCANOES: "Audio de los volcanes Laki y Grimsvötn",
};

const data = {
  activityInstructions: "Accidentes geográficos formados por:",
  landforms: [
    {
      id: "wind",
      text: "Viento",
      alt: "Un mapamundi con zonas activas que resaltan el parque estatal Mushroom Rock en Kansas, Estados Unidos, y las dunas de arena del desierto del Sahara, en el norte de Egipto.",
      hotspots: [
        {
          id: "mushroom_rock_park",
          label: "Parque estatal Mushroom Rock",
          text: "Parque estatal Mushroom Rock, Kansas",
          alt: "Una formación rocosa en el parque estatal Mushroom Rock. La roca tiene la forma de un hongo, con una parte superior circular grande sobre un pedestal alto y delgado.",
          description: `<div>
          <div class="speaker-button-wrapper"><button class='speaker-icon' data-sfx-id='MUSHROOM_ROCKS'
                  title='${audioButtonsAlts.MUSHROOM_ROCKS}' aria-label='${audioButtonsAlts.MUSHROOM_ROCKS}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>Las rocas fungiformes</u></strong></div> se forman en muy pocas áreas del mundo.<div
              class="speaker-button-wrapper"><button class='speaker-icon' data-sfx-id='MUSHROOM_ROCKS_OF_KANSAS'
              title='${audioButtonsAlts.MUSHROOM_ROCKS_OF_KANSAS}' aria-label='${audioButtonsAlts.MUSHROOM_ROCKS_OF_KANSAS}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>Las rocas fungiformes de Kansas</u></strong></div> fueron utilizadas por los indígenas americanos y los primeros colonizadores como lugar de encuentro en las Grandes Llanuras.</div>`,
          options: [
            {
              id: "weathering",
              text: "La acción del viento cerca del suelo y alrededor de rocas blandas durante miles de años ha creado estas interesantes formaciones.",
            },
          ],
        },
        {
          id: "sahara_sand_dune",
          label: "Dunas de arena del desierto del Sahara",
          text: "Dunas de arena del desierto del Sahara, norte de África",
          alt: "Dunas de arena dorada con tonos rojizos en el desierto del Sahara.",
          description: `<div><div class='speaker-button-wrapper'><button class='speaker-icon' data-sfx-id='SAHARA_DESERT'
          title='${audioButtonsAlts.SAHARA_DESERT}' aria-label='${audioButtonsAlts.SAHARA_DESERT}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>El desierto del Sahara </u></strong></div> es el desierto cálido más grande del mundo. Mucha gente se imagina el <div
      class='speaker-button-wrapper'><button class='speaker-icon' data-sfx-id='SAHARA' title='${audioButtonsAlts.SAHARA}' aria-label='${audioButtonsAlts.SAHARA}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>Sahara</u></strong></div>
      lleno de dunas de arena, pero no es así. Hay muchos tipos diferentes de desiertos y dunas de arena. Las dunas de <div class='speaker-button-wrapper'><button class='speaker-icon'
          data-sfx-id='ALGERIA' title='${audioButtonsAlts.ALGERIA}' aria-label='${audioButtonsAlts.ALGERIA}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>Argelia</u></strong></div>, cuya altura alcanza los 450 metros, están entre las más grandes del mundo.</div>`,
          options: [
            {
              id: "erosion",
              text: `En <div class='speaker-button-wrapper'><button class='speaker-icon' data-sfx-id='SAHARA_DESERT'
              title='${audioButtonsAlts.SAHARA_DESERT}' aria-label='${audioButtonsAlts.SAHARA_DESERT}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>el desierto del Sahara</u></strong></div>
              , el viento mueve y desplaza constantemente las dunas de arena.`,
            },
          ],
        },
      ],
    },
    {
      id: "ice",
      text: "Hielo",
      alt: "Un mapamundi con zonas activas que resaltan el parque nacional Los Glaciares en el norte de Montana, el fiordo de Geiranger en Noruega y el monte Cervino en Suiza.",
      hotspots: [
        {
          id: "geiranger_fjord",
          label: "Fiordo de Geiranger",
          text: "Fiordo de Geiranger en Noruega",
          alt: "Empinadas paredes montañosas se elevan desde un profundo valle glaciar con un cuerpo de agua transparente en el área más baja.",
          description: `<div>El
          <div class='speaker-button-wrapper'><button class='speaker-icon' data-sfx-id='GEIRANGER_FJORD'
          title='${audioButtonsAlts.GEIRANGER_FJORD}' aria-label='${audioButtonsAlts.GEIRANGER_FJORD}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>fiordo de Geiranger
          </u></strong></div>  es un valle glaciar con paredes altas y empinadas que fueron creadas por los glaciares hace mucho tiempo. Este fiordo es sumamente peligroso porque está al pie de <div class='speaker-button-wrapper'><button
                  class='speaker-icon' data-sfx-id='AKERNESET' title='${audioButtonsAlts.AKERNESET}' aria-label='${audioButtonsAlts.AKERNESET}'></button>
              <span aria-hidden='true'>&nbsp;</span><strong><u>Akerneset</u></strong>
          </div>, la montaña más grande del área.
      </div>`,
          options: [
            {
              id: "erosion",
              text: "Si todo el hielo y la nieve de esta montaña se derritiera y erosionara el fiordo, podría cubrir el valle, lo cual pondría en peligro la vida y el sustento de sus habitantes.",
            },
          ],
        },
        {
          id: "glacier_national_park",
          label: "Parque nacional Los Glaciares",
          text: "Parque nacional Los Glaciares en Montana",
          alt: "Cordillera del parque nacional Los Glaciares con laderas empinadas, un bosque frondoso en las zonas más bajas y solamente roca en las zonas más altas.",
          subsectionImageAlt: {
            erosion:
              "Un lago transparente formado por la escorrentía de agua en la parte alta de las montañas.",
            // weathering:
            //   "Steep cliffs of mountains with waterfalls falling down the side of the mountain.",
          },
          description: `<div>El
            <div class='speaker-button-wrapper'><button class='speaker-icon' data-sfx-id='GLACIER_NATIONAL_PARK'
            title='${audioButtonsAlts.GLACIER_NATIONAL_PARK}' aria-label='${audioButtonsAlts.GLACIER_NATIONAL_PARK}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>parque nacional Los Glaciares</u></strong></span></div> tiene unos 25 glaciares activos. Un glaciar activo es un glaciar que se mueve. Los glaciares avanzan lentamente. Se estima que los de este parque nacional tienen aproximadamente 7,000 años de edad. Esta área es única, pues en ella se observan diferentes tipos de glaciares.</div>`,
          options: [
            {
              id: "erosion",
              text: `La erosión glaciar creó distintos accidentes geográficos, como valles glaciares, valles colgados y <div class='speaker-button-wrapper'><button class='speaker-icon'
                data-sfx-id='PATERNOSTER_LAKES' title='${audioButtonsAlts.PATERNOSTER_LAKES}' aria-label='${audioButtonsAlts.PATERNOSTER_LAKES}'></button><span
                aria-hidden='true'>&nbsp;</span><strong><u>lagos paternóster</u></strong></div>. A medida que retrocedían, los glaciares tallaron valles y formaron presas naturales con los detritos rocosos que dejaban atrás. La escorrentía de la nieve y el hielo derretidos llenó las áreas creadas por los diques y formó los llamados lagos paternóster.`,
            },
          ],
        },
        {
          id: "the_matterhorn",
          label: "Monte Cervino",
          text: "The Matterhorn, Switzerland",
          alt: "El monte Cervino es una montaña de pico puntiagudo y grandes laderas planas, con rocas y nieve en la cima y vegetación en la parte más baja.",
          description: `<div>El <div class='speaker-button-wrapper'><button class='speaker-icon' data-sfx-id='MATTERHORN'
          title='${audioButtonsAlts.MATTERHORN}' aria-label='${audioButtonsAlts.MATTERHORN}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>monte Cervino</u></strong></div> fue literalmente tallado por el hielo. Al principio, tenía el aspecto típico de una montaña. Sus partes más altas alternaban constantemente entre la acumulación y la fusión de la nieve. A medida que esta se derretía, el agua se colaba por las grietas de las rocas, donde se congelaba y expandía cuando la temperatura era inferior al punto de congelación. Esa expansión provocó el desprendimiento de pedazos de roca de la montaña.</div>`,
          options: [
            {
              id: "erosion",
              text: "Y así fue como la montaña adquirió su forma característica.",
            },
          ],
        },
      ],
    },
    {
      id: "water",
      text: "Agua en movimiento",
      alt: "Un mapamundi con zonas activas que resaltan el parque nacional White Sands en Nuevo México, el parque nacional Mammoth Cave en Kentucky y el cañón de Motlatse en Sudáfrica.",
      hotspots: [
        {
          id: "white_sands_national_park",
          label: "Parque nacional White Sands",
          text: "Parque nacional White Sands, Nuevo México",
          alt: "Dunas de arena blanca con montañas rocosas a lo lejos.",
          description:
            "<div>El parque nacional White Sands es un desierto de brillante arena blanca en el sur de Nuevo México. Pero ¿qué es esta arena y cómo llegó allí? Es un suelo muy distinto del que se encuentra en los alrededores, y todo eso se debe a la erosión hídrica. La arena es mayormente yeso, un mineral blando muy común. Normalmente, el agua disuelve el yeso al pasar sobre la tierra, y luego fluyen juntos hacia el océano.</div>",
          options: [
            {
              id: "erosion",
              text: "En White Sands, hace entre 12,000 y 24,000 años, una masa de agua bajó de las cercanas Montañas Rocosas y cayó en un cuerpo de agua poco profundo. Como resultado, se formó una gruesa capa de yeso en el suelo de un gran lago. Cuando el lago se secó, dejó atrás las brillantes partículas de yeso blanco que hoy conocemos como el parque nacional White Sands. Las dunas de White Sands se desplazan hasta 9 metros (30 pies) cada año.",
            },
          ],
        },
        {
          id: "mammoth_caves",
          label: "Parque nacional Mammoth Cave",
          text: "Parque nacional Mammoth Cave, Kentucky",
          alt: "Interior de una cueva con estalactitas y estalagmitas.",
          description: `<div>El
            <div class='speaker-button-wrapper'><button class='speaker-icon' data-sfx-id='MAMMOTH_CAVE_NATIONAL_PARK'
            title='${audioButtonsAlts.MAMMOTH_CAVE_NATIONAL_PARK}' aria-label='${audioButtonsAlts.MAMMOTH_CAVE_NATIONAL_PARK}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>
            parque nacional Mammoth Cave</u></strong></span></div> es el sistema de cuevas más largo que se conoce en el mundo. Si bien es cierto que hay mapas de más de 400 millas de cuevas, aún falta mucho por explorar y cartografiar. En esta área de Kentucky abunda la piedra caliza. Los científicos sospechan que el sistema completo podría sumar hasta 1,000 millas de cuevas. Se le llama sistema porque no consta de una sola cavidad grande, sino de varias cuevas que se conectan y forman una especie de laberinto a partir de la escorrentía de agua y la disposición de rocas y sedimentos que esta deja a su paso.
            </div>`,
          options: [
            {
              id: "weathering",
              text: "Los ríos de la superficie terrestre y el agua de lluvia penetran lentamente la piedra caliza y tallan este extraordinario sistema de cuevas.",
            },
          ],
        },
        {
          id: "motlatse_canyon",
          label: "Cañón de Motlatse",
          text: "Cañón de Motlatse, Mpumalanga, Sudáfrica",
          alt: "Un río que corre por un cañón cubierto de plantas verdes.",
          description: `<div>Este es el tercer cañón más grande de la Tierra. A diferencia de los más grandes, como el Gran Cañón en Estados Unidos y el cañón del río Fish en Namibia, el de  <div class='speaker-button-wrapper'><button class='speaker-icon'
                  data-sfx-id='MOTLATSE_CANYON' title='${audioButtonsAlts.MOTLATSE_CANYON}' aria-label='${audioButtonsAlts.MOTLATSE_CANYON}'></button><span
                  aria-hidden='true'>&nbsp;</span><strong><u>Motlatse</u></strong></div> es un cañón verde, lo que significa que está cubierto por una frondosa vegetación subtropical. Durante millones de años, el desplazamiento de sedimentos de diversos tamaños, desde granos de arena hasta peñascos, ha aumentado lentamente la profundidad del cañón.
            </div>`,
          options: [
            {
              id: "erosion",
              text: `El <div class='speaker-button-wrapper'><button class='speaker-icon' data-sfx-id='MOTLATSE_RIVER'
              title='${audioButtonsAlts.MOTLATSE_RIVER}' aria-label='${audioButtonsAlts.MOTLATSE_RIVER}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>río Motlatse</u></strong></div>,
              que lo atraviesa esculpió el cañón al transportar sedimentos de la cuarcita y la lutita que forman las montañas circundantes.`,
            },
          ],
        },
      ],
    },
    {
      id: "vegetation",
      text: "Vegetación",
      alt: "Un mapamundi con zonas activas que resaltan las Grandes Llanuras en el centro de Estados Unidos y el campo de lava de Eldhraun en Islandia.",
      hotspots: [
        {
          id: "great_plains",
          label: "Grandes Llanuras",
          text: "Grandes Llanuras, Norteamérica",
          alt: "Terreno llano con un polvorín de tierra que rueda sobre él.",
          description: `<div>Añadir plantas al terreno puede ayudar a detener la meteorización y la erosión. A principios del siglo XX, los agricultores de las <div class='speaker-button-wrapper'><button class='speaker-icon' data-sfx-id='GREAT_PLAINS'
          title='${audioButtonsAlts.GREAT_PLAINS}' aria-label='${audioButtonsAlts.GREAT_PLAINS}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>Grandes Llanuras
          </u></strong></div>habían arrancado los pastizales y despejado grandes áreas de tierra fértil para sembrar algodón, maíz, trigo y otros cultivos. Esto dejó el suelo expuesto y vulnerable a fuertes sequías y tormentas de polvo que, a finales de la década de 1930, se extendían desde Nebraska hasta la franja de Texas. Dicho fenómeno recibió el nombre de <div class='speaker-button-wrapper'><button class='speaker-icon' data-sfx-id='DUST_BOWL'
          title='${audioButtonsAlts.DUST_BOWL}' aria-label='${audioButtonsAlts.DUST_BOWL}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>Dust Bowl</u></strong></span></div>, que significa ‘cuenco de polvo’. El desarrollo de la rotación de cultivos, la replantación de pastizales nativos y el uso de sistemas de riego han detenido en gran medida estas tormentas de polvo.</div>`,
          options: [
            {
              id: "weathering",
              text: "Durante el Dust Bowl, las sequías arruinaron los cultivos y varias millas de suelo quedaron expuestas a la acción del viento.",
            },
          ],
        },
        {
          id: "eldhraun_lava_field",
          label: "Campo de lava de Eldhraun",
          text: "Campo de lava de Eldhraun, Islandia",
          alt: "Tierra cubierta por musgo de color verde brillante",
          description: `    <div>En 1783, los <div class='speaker-button-wrapper'><button class='speaker-icon'
            data-sfx-id='LAKI_AND_GRIMSVOTN_VOLCANOES' title='${audioButtonsAlts.LAKI_AND_GRIMSVOTN_VOLCANOES}' aria-label='${audioButtonsAlts.LAKI_AND_GRIMSVOTN_VOLCANOES}'></button><span
            aria-hidden='true'>&nbsp;</span><strong><u>volcanes Laki y Grimsvötn</u></strong></div>comenzaron a arrojar lava. Durante 8 meses, expulsaron aproximadamente 14 kilómetros cúbicos de lava basáltica y nubes de gases tóxicos que contaminaron el suelo. Como resultado, la isla experimentó una hambruna que causó la muerte de vacas, ovejas, peces e incluso personas. En la actualidad, lo que queda de aquel peligroso campo de lava es este terreno cubierto de suave musgo. Las rocas volcánicas que hay debajo han perdido sus bordes y adoptado formas redondeadas.
            </div>`,
          options: [
            {
              id: "weathering",
              text: "El musgo ha debilitado las rocas de lava y suavizado sus bordes. Donde antes había afilados bordes de lava seca, ahora solo quedan suaves almohadas de musgo.",
            },
          ],
        },
      ],
    },
  ],

  hotspotOptions: [
    {
      id: "weathering",
      text: "Meteorización",
    },
    {
      id: "erosion",
      text: "Erosión",
    },
  ],
  sfxs: sfxs,
  resetLiveText: globalData.resetLiveText,
  resetPopupText: globalData.resetPopupText,
  buttonLabels: {
    ...globalData.buttonLabels,
    pauseAnimation: "Pause Animation",
    playAnimation: "Reproducir la animación",
  },
  earthAnimationAlt: "Una vista de la Tierra.",
  earthAnimationLiveText: {
    paused: "Pausa de la animación de la Tierra en rotación",
    played: "Reproducción de la animación de la Tierra en rotación",
  },
  helpPopupText: [
    "Selecciona los botones para explorar diferentes accidentes geográficos del mundo.",
    "Selecciona las zonas activas para leer sobre un accidente geográfico y sus características.",
  ],
  initialInfoPopupText:
    "Selecciona los botones para explorar diferentes accidentes geográficos del mundo.",
  //   fossilsBGAltText:
  //     "Aerial view of a natural park area. The area has a small pond, river, beach, rocky hills, grasslands and forest. Pink dots identify dig sites.",
  erosionInfoText:
    "Haz clic sobre «Erosión» para obtener más información sobre la erosión y este accidente geográfico.",
  weatheringInfoText:
    "Haz clic sobre «Meteorización» para obtener más información sobre la meteorización y este accidente geográfico.",
  activityHeading:
    "En esta simulación, el estudiante conocerá algunos de los extraordinarios accidentes geográficos que hay en la Tierra.",
};

export default data;
