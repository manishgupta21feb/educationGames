import globalData from "../../app/data";

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
  SAHARA: "sahara audio",
  ALGERIA: "algeria audio",
  AKERNESET: "akerneset audio",
  DUST_BOWL: "dust bowl audio",
  MATTERHORN: "matterhorn audio",
  GREAT_PLAINS: "great plains audio",
  SAHARA_DESERT: "sahara desert audio",
  MUSHROOM_ROCKS: "mushroom rocks audio",
  MOTLATSE_RIVER: "motlatse rocks audio",
  GEIRANGER_FJORD: "geiranger fjord audio",
  MOTLATSE_CANYON: "motlatse canyon audio",
  PATERNOSTER_LAKES: "paternoster lakes audio",
  GLACIER_NATIONAL_PARK: "glacier national park audio",
  MUSHROOM_ROCKS_OF_KANSAS: "mushroom rocks of kansas audio",
  MAMMOTH_CAVE_NATIONAL_PARK: "mammoth cave national park audio",
  LAKI_AND_GRIMSVOTN_VOLCANOES: "laki and grimsvotn volcanoes audio",
};

const data = {
  activityInstructions: "Landforms changed by:",
  landforms: [
    {
      id: "wind",
      text: "Wind",
      alt: "World map with hotspots highlighting Mushroom Rock State Park in Kansas United States and the Sahara Desert sand dunes in Northern Egypt.",
      hotspots: [
        {
          id: "mushroom_rock_park",
          label: "Mushroom Rock State Park",
          text: "Mushroom Rock State Park, Kansas",
          alt: "A rock formation at Mushroom Rock State Park. The rock is shaped like a mushroom with a large circular top sitting on top of a thin tall pedestal.",
          description: `<div>
          <div class="speaker-button-wrapper"><button class='speaker-icon' data-sfx-id='MUSHROOM_ROCKS'
                  title='${audioButtonsAlts.MUSHROOM_ROCKS}' aria-label='${audioButtonsAlts.MUSHROOM_ROCKS}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>Mushroom</div> rocks</u></strong> are formed in very few areas of the world. The <div
              class="speaker-button-wrapper"><button class='speaker-icon' data-sfx-id='MUSHROOM_ROCKS_OF_KANSAS'
              title='${audioButtonsAlts.MUSHROOM_ROCKS_OF_KANSAS}' aria-label='${audioButtonsAlts.MUSHROOM_ROCKS_OF_KANSAS}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>mushroom</div> rocks of Kansas</u></strong> were used by Native Americans and early pioneers as a
          meeting place in the Great Plains.</div>`,
          options: [
            {
              id: "weathering",
              text: "Wind blowing low to the ground and then wrapping up and around soft rocks over thousands of years has created these interesting formations.",
            },
          ],
        },
        {
          id: "sahara_sand_dune",
          label: "Sahara Desert sand dunes",
          text: "Sahara Desert sand dunes, North Africa",
          alt: "Sahara Desert sand dunes of bright red golden sand.",
          description: `<div>The <div class='speaker-button-wrapper'><button class='speaker-icon' data-sfx-id='SAHARA_DESERT'
          title='${audioButtonsAlts.SAHARA_DESERT}' aria-label='${audioButtonsAlts.SAHARA_DESERT}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>Sahara</div>
  desert</u></strong> is the world's largest hot desert. Many people picture the <div
      class='speaker-button-wrapper'><button class='speaker-icon' data-sfx-id='SAHARA' title='${audioButtonsAlts.SAHARA}' aria-label='${audioButtonsAlts.SAHARA}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>Sahara</u></strong></div>
  filled with sand dunes, but that is not the case. There are many different types of desert landforms and many different types of sand dunes. The dunes in <div class='speaker-button-wrapper'><button class='speaker-icon'
          data-sfx-id='ALGERIA' title='${audioButtonsAlts.ALGERIA}' aria-label='${audioButtonsAlts.ALGERIA}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>Algeria</u></strong></div> are some of the
  largest in the world at 450 meters high.</div>`,
          options: [
            {
              id: "erosion",
              text: `The sand dunes of the <div class='speaker-button-wrapper'><button class='speaker-icon' data-sfx-id='SAHARA_DESERT'
              title='${audioButtonsAlts.SAHARA_DESERT}' aria-label='${audioButtonsAlts.SAHARA_DESERT}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>Sahara</div> desert</u></strong>
      move and shift constantly based on the wind in the area.`,
            },
          ],
        },
      ],
    },
    {
      id: "ice",
      text: "Ice",
      alt: "World map with hotspots highlighting Glacier National Park in northern Montana, Geiranger Fjord in Norway, and The Matterhorn in Switzerland.",
      hotspots: [
        {
          id: "geiranger_fjord",
          label: "Geiranger Fjord",
          text: "Geiranger Fjord in Norway",
          alt: "Steep mountain walls rise up in a deep U-shaped valley with a body of clear water in the lowest-lying area.",
          description: `<div>The
          <div class='speaker-button-wrapper'><button class='speaker-icon' data-sfx-id='GEIRANGER_FJORD'
          title='${audioButtonsAlts.GEIRANGER_FJORD}' aria-label='${audioButtonsAlts.GEIRANGER_FJORD}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>Geiranger</div>
          Fjord</u></strong> is a U-shaped valley with high, steep walls that were created by glaciers long ago. This
          fjord is
          particularly dangerous because it is at the base of <div class='speaker-button-wrapper'><button
                  class='speaker-icon' data-sfx-id='AKERNESET' title='${audioButtonsAlts.AKERNESET}' aria-label='${audioButtonsAlts.AKERNESET}'></button>
              <span aria-hidden='true'>&nbsp;</span><strong><u>Akerneset</u></strong>
          </div>, the largest mountain in the area.
      </div>`,
          options: [
            {
              id: "erosion",
              text: "If all the snow and ice on this mountain melt and erode into this fjord, it could fill up the valley, endangering the lives and livelihoods of people in the area.",
            },
          ],
        },
        {
          id: "glacier_national_park",
          label: "Glacier National Park",
          text: "Glacier National Park in Montana",
          alt: "Mountain range throughout Glacier National Park with steep sides, lush forest in the lower levels of the park and rocks only higher up.",
          subsectionImageAlt: {
            erosion:
              "A clear lake in the high parts of mountains made from water run off.",
            weathering:
              "Steep cliffs of mountains with waterfalls falling down the side of the mountain.",
          },
          description: `<div>
            <div class='speaker-button-wrapper'><button class='speaker-icon' data-sfx-id='GLACIER_NATIONAL_PARK'
            title='${audioButtonsAlts.GLACIER_NATIONAL_PARK}' aria-label='${audioButtonsAlts.GLACIER_NATIONAL_PARK}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>Glacier</div> National
            Park</u></strong></span> has about 25 active glaciers in the park. An active glacier is a moving glacier.
            Glaciers move slowly. The glaciers at this national park are estimated to be about 7,000 years old. Many
            different glacier landforms can be seen in this one area, making it very unique.</div>`,
          options: [
            {
              id: "erosion",
              text: `Glacial erosion created many different landforms, such as U-shaped valleys, hanging valleys, and <div class='speaker-button-wrapper'><button class='speaker-icon'
                data-sfx-id='PATERNOSTER_LAKES' title='${audioButtonsAlts.PATERNOSTER_LAKES}' aria-label='${audioButtonsAlts.PATERNOSTER_LAKES}'></button><span
                aria-hidden='true'>&nbsp;</span><strong><u>paternoster</div> lakes</u></strong>. As the glaciers retreated, they carved out valleys and created natural dams from the rock debris they left behind. Melted ice and snow runoff filled the areas created by the dams to form the paternoster lakes.`,
            },
          ],
        },
        {
          id: "the_matterhorn",
          label: "The Matterhorn",
          text: "The Matterhorn, Switzerland",
          alt: "The Matterhorn is a single mountain with a pointed tip and large flat sides. There are areas of bare rock and snow at the top and green at the bottom.",
          description: `<div>The <div class='speaker-button-wrapper'><button class='speaker-icon' data-sfx-id='MATTERHORN'
          title='${audioButtonsAlts.MATTERHORN}' aria-label='${audioButtonsAlts.MATTERHORN}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>Matterhorn</u></strong></div> was literally carved by ice. When
            the mountain first developed, it looked like a traditionally shaped mountain. The highest parts of the mountain
            were constantly cycling between being covered with snow and then snow melting. As the snow melted, water got
            into the cracks of the rocks. When the temperature dropped below freezing, the water began to freeze and expand.
            This expansion caused pieces of rock to break off from the mountain.</div>`,
          options: [
            {
              id: "erosion",
              text: "As the rock fell away, the distinct mountain shape formed.",
            },
          ],
        },
      ],
    },
    {
      id: "water",
      text: "Moving Water",
      alt: "World map with hotspots highlighting White Sands National Park in New Mexico, Mammoth Cave National Park in Kentucky & Motlatse Canyon in South Africa.",
      hotspots: [
        {
          id: "white_sands_national_park",
          label: "White Sands National Park",
          text: "White Sands National Park, New Mexico",
          alt: "Sand dunes of pure white sand with rocky mountains in the far background.",
          description:
            "<div>White Sands National Park is a desert of bright, white sand in southern New Mexico. But what is this sand and how did it get there? It is a very different soil than any found in the surrounding areas, and that is all due to water erosion. The sand is actually mostly gypsum, which is a very common soft mineral. Usually water dissolves gypsum as it washes over land, and then the water and gypsum flow to the oceans together.</div>",
          options: [
            {
              id: "erosion",
              text: "In White Sands 12,000 to 24,000 years ago, water washed off the nearby Rocky Mountains and into a shallow ocean area. This resulted in a thick layer of gypsum on the floor of a huge lake. When that lake dried up, it left behind the bright white gypsum particles that we now know as White Sands National Park. The dunes at White Sands move as much as 9 meters (30 feet) per year.",
            },
          ],
        },
        {
          id: "mammoth_caves",
          label: "Mammoth Cave National Park",
          text: "Mammoth Cave National Park, Kentucky",
          alt: "Inside a cave with both stalactites and stalagmites.",
          description: `<div>
            <div class='speaker-button-wrapper'><button class='speaker-icon' data-sfx-id='MAMMOTH_CAVE_NATIONAL_PARK'
            title='${audioButtonsAlts.MAMMOTH_CAVE_NATIONAL_PARK}' aria-label='${audioButtonsAlts.MAMMOTH_CAVE_NATIONAL_PARK}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>Mammoth</div> Cave
            National Park</u></strong></span> is the longest-known cave system in the world. Over 400 miles of the caves
            have been mapped so far, but much of this system has yet to be explored and is still unmapped. Scientists
            suspect the entire system could add up to 1,000 miles of cave systems. This area of Kentucky is mostly a
            limestone base. It is called a system because, instead of one big room, it is made of many different caves
            that connect in a maze-like fashion based on water runoff and how rocks and sediments have been left behind.
            </div>`,
          options: [
            {
              id: "weathering",
              text: "Above-ground rivers and rainwater slowly seep through the limestone, carving out this amazing cave system.",
            },
          ],
        },
        {
          id: "motlatse_canyon",
          label: "Motlatse Canyon",
          text: "Motlatse Canyon, Mpumalanga, South Africa",
          alt: "A river running through a canyon covered in green plants.",
          description: `<div>This is the third largest canyon on Earth. Unlike the other larger canyons, like the Grand Canyon in the United
            States and Fish River Canyon in Namibia, <div class='speaker-button-wrapper'><button class='speaker-icon'
                  data-sfx-id='MOTLATSE_CANYON' title='${audioButtonsAlts.MOTLATSE_CANYON}' aria-label='${audioButtonsAlts.MOTLATSE_CANYON}'></button><span
                  aria-hidden='true'>&nbsp;</span><strong><u>Motlatse</div> Canyon</u></strong> is a green canyon, meaning it is
            filled with lush subtropical vegetation.<br />Over millions of years, the movement of sediments that range in
            size from sand to boulders has slowly deepened the canyon.
            </div>`,
          options: [
            {
              id: "erosion",
              text: `The <div class='speaker-button-wrapper'><button class='speaker-icon' data-sfx-id='MOTLATSE_RIVER'
              title='${audioButtonsAlts.MOTLATSE_RIVER}' aria-label='${audioButtonsAlts.MOTLATSE_RIVER}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>Motlatse</div> River</u></strong>,
                which runs through the canyon, carved the canyon out by carrying sediments of the quartzite rock and shale that make
                up the surrounding mountains.`,
            },
          ],
        },
      ],
    },
    {
      id: "vegetation",
      text: "Vegetation",
      alt: "World map with hotspots highlighting the Great Plains in the central United States and Eldhraun lava field in Iceland.",
      hotspots: [
        {
          id: "great_plains",
          label: "Great Plains",
          text: "Great Plains in North America",
          alt: "Flat dusty land with dirt rolling across the land.",
          description: `<div>Adding plants to land can help stop weathering and erosion. In the early 1900s, farmers across the <div class='speaker-button-wrapper'><button class='speaker-icon' data-sfx-id='GREAT_PLAINS'
          title='${audioButtonsAlts.GREAT_PLAINS}' aria-label='${audioButtonsAlts.GREAT_PLAINS}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>Great
          </div> Plains</u></strong> had pulled up grassland and left large areas of rich soil exposed to plant cotton, corn, wheat, and other crops. This left the land open and vulnerable to dust storms and drought. In the late 1930s, drought and a series of severe dust storms spanned from Nebraska through the Texas panhandle. This is referred to as the <div class='speaker-button-wrapper'><button class='speaker-icon' data-sfx-id='DUST_BOWL'
          title='${audioButtonsAlts.DUST_BOWL}' aria-label='${audioButtonsAlts.DUST_BOWL}'></button><span aria-hidden='true'>&nbsp;</span><strong><u>Dust</div> Bowl</u></strong></span>. The development of crop rotation, replanting areas of native grasslands, and irrigating farms have largely stopped these dust storms.</div>`,
          options: [
            {
              id: "weathering",
              text: "During the Dust Bowl, the droughts caused crops to fail and miles of exposed dirt to be picked up by wind.",
            },
          ],
        },
        {
          id: "eldhraun_lava_field",
          label: "Eldhraun lava field",
          text: "Eldhraun lava field, Iceland",
          alt: "Bright green moss-covered ground.",
          description: `    <div>In 1783, the <div class='speaker-button-wrapper'><button class='speaker-icon'
            data-sfx-id='LAKI_AND_GRIMSVOTN_VOLCANOES' title='${audioButtonsAlts.LAKI_AND_GRIMSVOTN_VOLCANOES}' aria-label='${audioButtonsAlts.LAKI_AND_GRIMSVOTN_VOLCANOES}'></button><span
            aria-hidden='true'>&nbsp;</span><strong><u>Laki</div> and Grimsvotn volcanoes</u></strong> began spewing out
            lava. Together, over the course of 8 months, they released an estimated 14 cubic kilometers of basalt lava along
            with clouds of poisonous gases that contaminated the soil. This resulted in famine for the island, killing cows,
            sheep, fish, and even people. Today all that is left of this once-treacherous lava field is this soft
            moss-covered terrain. Under that moss, the volcanic rocks have lost their edges and have rounded out.
            </div>`,
          options: [
            {
              id: "weathering",
              text: "The moss has weakened the lava rocks and softened their edges. Where there were once sharp edges of dried lava, now all you see are soft pillows of moss.",
            },
          ],
        },
      ],
    },
  ],

  hotspotOptions: [
    {
      id: "weathering",
      text: "Weathering",
    },
    {
      id: "erosion",
      text: "Erosion",
    },
  ],
  sfxs: sfxs,
  resetLiveText: globalData.resetLiveText,
  resetPopupText: globalData.resetPopupText,
  buttonLabels: {
    ...globalData.buttonLabels,
    pauseAnimation: "Pause Animation",
    playAnimation: "Play Animation",
  },
  earthAnimationAlt: "A view of Earth.",
  earthAnimationLiveText: {
    paused: "Spinning earth animation is paused",
    played: "Spinning earth animation is playing",
  },
  helpPopupText: [
    "Select the buttons to explore different landforms around the world.",
    "Select the location hotspots to read about a particular landform and its characteristics.",
  ],
  initialInfoPopupText:
    "Select the buttons to explore different landforms around the world.",
  fossilsBGAltText:
    "Aerial view of a natural park area. The area has a small pond, river, beach, rocky hills, grasslands and forest. Pink dots identify dig sites.",
  erosionInfoText:
    "Click on Erosion to learn more information about erosion and this landform.",
  weatheringInfoText:
    "Click on Weathering to learn more information about weathering and this landform.",
  activityHeading:
    "In this simulation, the learner will learn about a few amazing landforms on Earth.",
};

export default data;
