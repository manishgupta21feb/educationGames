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
  MOTLATSE_CANYON: "Audio del ca????n de Motlatse",
  PATERNOSTER_LAKES: "Audio de los lagos patern??ster",
  GLACIER_NATIONAL_PARK: "Audio del parque nacional Los Glaciares",
  MUSHROOM_ROCKS_OF_KANSAS: "Audio de las rocas fungiformes de Kansas",
  MAMMOTH_CAVE_NATIONAL_PARK: "Audio del parque nacional Mammoth Cave",
  LAKI_AND_GRIMSVOTN_VOLCANOES: "Audio de los volcanes Laki y Grimsv??tn",
};

const data = {
  activityInstructions: "Accidentes geogr??ficos formados por:",
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
          alt: "Una formaci??n rocosa en el parque estatal Mushroom Rock. La roca tiene la forma de un hongo, con una parte superior circular grande sobre un pedestal alto y delgado.",
          description: `<div>
          <div class="speaker-button-wrapper"><button class='speaker-icon' data-sfx-id='MUSHROOM_ROCKS'
                  title='${audioButtonsAlts.MUSHROOM_ROCKS}' aria-label='${audioButtonsAlts.MUSHROOM_ROCKS}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>Las rocas fungiformes</u></strong></div> se forman en muy pocas ??reas del mundo.<div
              class="speaker-button-wrapper"><button class='speaker-icon' data-sfx-id='MUSHROOM_ROCKS_OF_KANSAS'
              title='${audioButtonsAlts.MUSHROOM_ROCKS_OF_KANSAS}' aria-label='${audioButtonsAlts.MUSHROOM_ROCKS_OF_KANSAS}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>Las rocas fungiformes de Kansas</u></strong></div> fueron utilizadas por los ind??genas americanos y los primeros colonizadores como lugar de encuentro en las Grandes Llanuras.</div>`,
          options: [
            {
              id: "weathering",
              text: "La acci??n del viento cerca del suelo y alrededor de rocas blandas durante miles de a??os ha creado estas interesantes formaciones.",
            },
          ],
        },
        {
          id: "sahara_sand_dune",
          label: "Dunas de arena del desierto del Sahara",
          text: "Dunas de arena del desierto del Sahara, norte de ??frica",
          alt: "Dunas de arena dorada con tonos rojizos en el desierto del Sahara.",
          description: `<div><div class='speaker-button-wrapper'><button class='speaker-icon' data-sfx-id='SAHARA_DESERT'
          title='${audioButtonsAlts.SAHARA_DESERT}' aria-label='${audioButtonsAlts.SAHARA_DESERT}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>El desierto del Sahara </u></strong></div> es el desierto c??lido m??s grande del mundo. Mucha gente se imagina el <div
      class='speaker-button-wrapper'><button class='speaker-icon' data-sfx-id='SAHARA' title='${audioButtonsAlts.SAHARA}' aria-label='${audioButtonsAlts.SAHARA}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>Sahara</u></strong></div>
      lleno de dunas de arena, pero no es as??. Hay muchos tipos diferentes de desiertos y dunas de arena. Las dunas de <div class='speaker-button-wrapper'><button class='speaker-icon'
          data-sfx-id='ALGERIA' title='${audioButtonsAlts.ALGERIA}' aria-label='${audioButtonsAlts.ALGERIA}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>Argelia</u></strong></div>, cuya altura alcanza los 450 metros, est??n entre las m??s grandes del mundo.</div>`,
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
          alt: "Empinadas paredes monta??osas se elevan desde un profundo valle glaciar con un cuerpo de agua transparente en el ??rea m??s baja.",
          description: `<div>El
          <div class='speaker-button-wrapper'><button class='speaker-icon' data-sfx-id='GEIRANGER_FJORD'
          title='${audioButtonsAlts.GEIRANGER_FJORD}' aria-label='${audioButtonsAlts.GEIRANGER_FJORD}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>fiordo de Geiranger
          </u></strong></div>  es un valle glaciar con paredes altas y empinadas que fueron creadas por los glaciares hace mucho tiempo. Este fiordo es sumamente peligroso porque est?? al pie de <div class='speaker-button-wrapper'><button
                  class='speaker-icon' data-sfx-id='AKERNESET' title='${audioButtonsAlts.AKERNESET}' aria-label='${audioButtonsAlts.AKERNESET}'></button>
              <span aria-hidden='true'>&nbsp;</span><strong><u>Akerneset</u></strong>
          </div>, la monta??a m??s grande del ??rea.
      </div>`,
          options: [
            {
              id: "erosion",
              text: "Si todo el hielo y la nieve de esta monta??a se derritiera y erosionara el fiordo, podr??a cubrir el valle, lo cual pondr??a en peligro la vida y el sustento de sus habitantes.",
            },
          ],
        },
        {
          id: "glacier_national_park",
          label: "Parque nacional Los Glaciares",
          text: "Parque nacional Los Glaciares en Montana",
          alt: "Cordillera del parque nacional Los Glaciares con laderas empinadas, un bosque frondoso en las zonas m??s bajas y solamente roca en las zonas m??s altas.",
          subsectionImageAlt: {
            erosion:
              "Un lago transparente formado por la escorrent??a de agua en la parte alta de las monta??as.",
            // weathering:
            //   "Steep cliffs of mountains with waterfalls falling down the side of the mountain.",
          },
          description: `<div>El
            <div class='speaker-button-wrapper'><button class='speaker-icon' data-sfx-id='GLACIER_NATIONAL_PARK'
            title='${audioButtonsAlts.GLACIER_NATIONAL_PARK}' aria-label='${audioButtonsAlts.GLACIER_NATIONAL_PARK}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>parque nacional Los Glaciares</u></strong></span></div> tiene unos 25 glaciares activos. Un glaciar activo es un glaciar que se mueve. Los glaciares avanzan lentamente. Se estima que los de este parque nacional tienen aproximadamente 7,000 a??os de edad. Esta ??rea es ??nica, pues en ella se observan diferentes tipos de glaciares.</div>`,
          options: [
            {
              id: "erosion",
              text: `La erosi??n glaciar cre?? distintos accidentes geogr??ficos, como valles glaciares, valles colgados y <div class='speaker-button-wrapper'><button class='speaker-icon'
                data-sfx-id='PATERNOSTER_LAKES' title='${audioButtonsAlts.PATERNOSTER_LAKES}' aria-label='${audioButtonsAlts.PATERNOSTER_LAKES}'></button><span
                aria-hidden='true'>&nbsp;</span><strong><u>lagos patern??ster</u></strong></div>. A medida que retroced??an, los glaciares tallaron valles y formaron presas naturales con los detritos rocosos que dejaban atr??s. La escorrent??a de la nieve y el hielo derretidos llen?? las ??reas creadas por los diques y form?? los llamados lagos patern??ster.`,
            },
          ],
        },
        {
          id: "the_matterhorn",
          label: "Monte Cervino",
          text: "The Matterhorn, Switzerland",
          alt: "El monte Cervino es una monta??a de pico puntiagudo y grandes laderas planas, con rocas y nieve en la cima y vegetaci??n en la parte m??s baja.",
          description: `<div>El <div class='speaker-button-wrapper'><button class='speaker-icon' data-sfx-id='MATTERHORN'
          title='${audioButtonsAlts.MATTERHORN}' aria-label='${audioButtonsAlts.MATTERHORN}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>monte Cervino</u></strong></div> fue literalmente tallado por el hielo. Al principio, ten??a el aspecto t??pico de una monta??a. Sus partes m??s altas alternaban constantemente entre la acumulaci??n y la fusi??n de la nieve. A medida que esta se derret??a, el agua se colaba por las grietas de las rocas, donde se congelaba y expand??a cuando la temperatura era inferior al punto de congelaci??n. Esa expansi??n provoc?? el desprendimiento de pedazos de roca de la monta??a.</div>`,
          options: [
            {
              id: "erosion",
              text: "Y as?? fue como la monta??a adquiri?? su forma caracter??stica.",
            },
          ],
        },
      ],
    },
    {
      id: "water",
      text: "Agua en movimiento",
      alt: "Un mapamundi con zonas activas que resaltan el parque nacional White Sands en Nuevo M??xico, el parque nacional Mammoth Cave en Kentucky y el ca????n de Motlatse en Sud??frica.",
      hotspots: [
        {
          id: "white_sands_national_park",
          label: "Parque nacional White Sands",
          text: "Parque nacional White Sands, Nuevo M??xico",
          alt: "Dunas de arena blanca con monta??as rocosas a lo lejos.",
          description:
            "<div>El parque nacional White Sands es un desierto de brillante arena blanca en el sur de Nuevo M??xico. Pero ??qu?? es esta arena y c??mo lleg?? all??? Es un suelo muy distinto del que se encuentra en los alrededores, y todo eso se debe a la erosi??n h??drica. La arena es mayormente yeso, un mineral blando muy com??n. Normalmente, el agua disuelve el yeso al pasar sobre la tierra, y luego fluyen juntos hacia el oc??ano.</div>",
          options: [
            {
              id: "erosion",
              text: "En White Sands, hace entre 12,000 y 24,000 a??os, una masa de agua baj?? de las cercanas Monta??as Rocosas y cay?? en un cuerpo de agua poco profundo. Como resultado, se form?? una gruesa capa de yeso en el suelo de un gran lago. Cuando el lago se sec??, dej?? atr??s las brillantes part??culas de yeso blanco que hoy conocemos como el parque nacional White Sands. Las dunas de White Sands se desplazan hasta 9 metros (30 pies) cada a??o.",
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
            parque nacional Mammoth Cave</u></strong></span></div> es el sistema de cuevas m??s largo que se conoce en el mundo. Si bien es cierto que hay mapas de m??s de 400 millas de cuevas, a??n falta mucho por explorar y cartografiar. En esta ??rea de Kentucky abunda la piedra caliza. Los cient??ficos sospechan que el sistema completo podr??a sumar hasta 1,000 millas de cuevas. Se le llama sistema porque no consta de una sola cavidad grande, sino de varias cuevas que se conectan y forman una especie de laberinto a partir de la escorrent??a de agua y la disposici??n de rocas y sedimentos que esta deja a su paso.
            </div>`,
          options: [
            {
              id: "weathering",
              text: "Los r??os de la superficie terrestre y el agua de lluvia penetran lentamente la piedra caliza y tallan este extraordinario sistema de cuevas.",
            },
          ],
        },
        {
          id: "motlatse_canyon",
          label: "Ca????n de Motlatse",
          text: "Ca????n de Motlatse, Mpumalanga, Sud??frica",
          alt: "Un r??o que corre por un ca????n cubierto de plantas verdes.",
          description: `<div>Este es el tercer ca????n m??s grande de la Tierra. A diferencia de los m??s grandes, como el Gran Ca????n en Estados Unidos y el ca????n del r??o Fish en Namibia, el de  <div class='speaker-button-wrapper'><button class='speaker-icon'
                  data-sfx-id='MOTLATSE_CANYON' title='${audioButtonsAlts.MOTLATSE_CANYON}' aria-label='${audioButtonsAlts.MOTLATSE_CANYON}'></button><span
                  aria-hidden='true'>&nbsp;</span><strong><u>Motlatse</u></strong></div> es un ca????n verde, lo que significa que est?? cubierto por una frondosa vegetaci??n subtropical. Durante millones de a??os, el desplazamiento de sedimentos de diversos tama??os, desde granos de arena hasta pe??ascos, ha aumentado lentamente la profundidad del ca????n.
            </div>`,
          options: [
            {
              id: "erosion",
              text: `El <div class='speaker-button-wrapper'><button class='speaker-icon' data-sfx-id='MOTLATSE_RIVER'
              title='${audioButtonsAlts.MOTLATSE_RIVER}' aria-label='${audioButtonsAlts.MOTLATSE_RIVER}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>r??o Motlatse</u></strong></div>,
              que lo atraviesa esculpi?? el ca????n al transportar sedimentos de la cuarcita y la lutita que forman las monta??as circundantes.`,
            },
          ],
        },
      ],
    },
    {
      id: "vegetation",
      text: "Vegetaci??n",
      alt: "Un mapamundi con zonas activas que resaltan las Grandes Llanuras en el centro de Estados Unidos y el campo de lava de Eldhraun en Islandia.",
      hotspots: [
        {
          id: "great_plains",
          label: "Grandes Llanuras",
          text: "Grandes Llanuras, Norteam??rica",
          alt: "Terreno llano con un polvor??n de tierra que rueda sobre ??l.",
          description: `<div>A??adir plantas al terreno puede ayudar a detener la meteorizaci??n y la erosi??n. A principios del siglo XX, los agricultores de las <div class='speaker-button-wrapper'><button class='speaker-icon' data-sfx-id='GREAT_PLAINS'
          title='${audioButtonsAlts.GREAT_PLAINS}' aria-label='${audioButtonsAlts.GREAT_PLAINS}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>Grandes Llanuras
          </u></strong></div>hab??an arrancado los pastizales y despejado grandes ??reas de tierra f??rtil para sembrar algod??n, ma??z, trigo y otros cultivos. Esto dej?? el suelo expuesto y vulnerable a fuertes sequ??as y tormentas de polvo que, a finales de la d??cada de 1930, se extend??an desde Nebraska hasta la franja de Texas. Dicho fen??meno recibi?? el nombre de <div class='speaker-button-wrapper'><button class='speaker-icon' data-sfx-id='DUST_BOWL'
          title='${audioButtonsAlts.DUST_BOWL}' aria-label='${audioButtonsAlts.DUST_BOWL}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>Dust Bowl</u></strong></span></div>, que significa ???cuenco de polvo???. El desarrollo de la rotaci??n de cultivos, la replantaci??n de pastizales nativos y el uso de sistemas de riego han detenido en gran medida estas tormentas de polvo.</div>`,
          options: [
            {
              id: "weathering",
              text: "Durante el Dust Bowl, las sequ??as arruinaron los cultivos y varias millas de suelo quedaron expuestas a la acci??n del viento.",
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
            aria-hidden='true'>&nbsp;</span><strong><u>volcanes Laki y Grimsv??tn</u></strong></div>comenzaron a arrojar lava. Durante 8 meses, expulsaron aproximadamente 14 kil??metros c??bicos de lava bas??ltica y nubes de gases t??xicos que contaminaron el suelo. Como resultado, la isla experiment?? una hambruna que caus?? la muerte de vacas, ovejas, peces e incluso personas. En la actualidad, lo que queda de aquel peligroso campo de lava es este terreno cubierto de suave musgo. Las rocas volc??nicas que hay debajo han perdido sus bordes y adoptado formas redondeadas.
            </div>`,
          options: [
            {
              id: "weathering",
              text: "El musgo ha debilitado las rocas de lava y suavizado sus bordes. Donde antes hab??a afilados bordes de lava seca, ahora solo quedan suaves almohadas de musgo.",
            },
          ],
        },
      ],
    },
  ],

  hotspotOptions: [
    {
      id: "weathering",
      text: "Meteorizaci??n",
    },
    {
      id: "erosion",
      text: "Erosi??n",
    },
  ],
  sfxs: sfxs,
  resetLiveText: globalData.resetLiveText,
  resetPopupText: globalData.resetPopupText,
  buttonLabels: {
    ...globalData.buttonLabels,
    pauseAnimation: "Pause Animation",
    playAnimation: "Reproducir la animaci??n",
  },
  earthAnimationAlt: "Una vista de la Tierra.",
  earthAnimationLiveText: {
    paused: "Pausa de la animaci??n de la Tierra en rotaci??n",
    played: "Reproducci??n de la animaci??n de la Tierra en rotaci??n",
  },
  helpPopupText: [
    "Selecciona los botones para explorar diferentes accidentes geogr??ficos del mundo.",
    "Selecciona las zonas activas para leer sobre un accidente geogr??fico y sus caracter??sticas.",
  ],
  initialInfoPopupText:
    "Selecciona los botones para explorar diferentes accidentes geogr??ficos del mundo.",
  //   fossilsBGAltText:
  //     "Aerial view of a natural park area. The area has a small pond, river, beach, rocky hills, grasslands and forest. Pink dots identify dig sites.",
  erosionInfoText:
    "Haz clic sobre ??Erosi??n?? para obtener m??s informaci??n sobre la erosi??n y este accidente geogr??fico.",
  weatheringInfoText:
    "Haz clic sobre ??Meteorizaci??n?? para obtener m??s informaci??n sobre la meteorizaci??n y este accidente geogr??fico.",
  activityHeading:
    "En esta simulaci??n, el estudiante conocer?? algunos de los extraordinarios accidentes geogr??ficos que hay en la Tierra.",
};

export default data;
