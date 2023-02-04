import commonData from "../../app/data/data.en";
import blackHole from "../assets/videos/black_hole.mp4";
import whiteDwarf from "../assets/videos/white_drawf.mp4";
import neutronStar from "../assets/videos/neutron_star.mp4";

const data = {
  ...commonData.buttonLabels,
  resetLiveText: commonData.resetLiveText,
  resetPopupText: commonData.resetPopupText,
  draggables: {
    screenonemainlabel:"Stellar nebula" ,
    screen0: [
     
      
      {
        id: "item0",
        circleText: "A",
        videoSrc: whiteDwarf,
       
        labels:[
         
          { id: "average_star", label: "Average star" },
          { id: "red_giant", label: "Red giant" },
          { id: "planetary_nebula", label: "Planetary nebula" },
          { id: "white_dwarf", label: "White dwarf" },
        ],
       
        alt: "Star A with Solar mass = 1 draggable",
        bottomText: "Star A<br />solar mass = 1",
        videoAlt: "The transition of a star into a white dwarf",
        videoLive:"live text demo for video 1",
      },
      {
        id: "item1",
        circleText: "B",
        videoSrc: neutronStar,
        labels:[
          
          { id: "massive_star", label: "Massive star" },
          { id: "red_supergiant", label: "Red supergiant" },
          { id: "supernova", label: "Supernova" },
          { id: "neutron_star", label: "Neutron star" },
        ],
        alt: "Star B with Solar mass = 5 draggable",
        bottomText: "Star B<br />solar mass = 5",
        videoAlt: "The transition of a star into a neutron star",
        videoLive:"live text demo for video 2",
      },
      {
        id: "item2",
        circleText: "C",
        videoSrc: blackHole,
        labels:[
        
          { id: "massive_star", label: "Massive star" },
          { id: "red_supergiant", label: "Red supergiant" },
          { id: "supernova", label: "Supernova" },
          { id: "black_hole", label: "Black hole" },
        ],
        alt: "Star C with Solar mass = 10 draggable",
        bottomText: "Star C<br />solar mass = 10",
        videoAlt: "The transition of a star into a black hole",
        videoLive:"live text demo for video 3",
      },
    ],
    screen1: [
      {
        id: "item0",
        circleText: "A",
        screen2Text:"Look at the temperature and luminosity for Star A. Drag and drop it to the correct location on the diagram.",
        alt:"Star A Temperature: 15,000 K Luminosity: 0.5 draggable",
        bottomScreen4TextTwo:"Star A<br/>Temp: 15,000 K<br/>Luminosity: 0.5",
        live:"live text demo for dropdown 1",
 
      },
      {
        id: "item1",
        circleText: "B",
        screen2Text:"Look at the temperature and luminosity for Star B. Drag and drop it to the correct location on the diagram.",
        alt:"Star B Temperature: 6,000 K Luminosity: 110 draggable",
        bottomScreen4TextTwo:"Star B<br/>Temp: 6,000 K<br/>Luminosity: 110",
        live:"live text demo for dropdown 2",
      },
      {
        id: "item2",
        circleText: "C",
        screen2Text:"Look at the temperature and luminosity for Star C. Drag and drop it to the correct location on the diagram.",
        alt:"Star C Temperature: 4,000 K Luminosity: 0.05 draggable",
        bottomScreen4TextTwo:"Star C<br/>Temp: 4,000 K<br/>Luminosity: 0.05",
        live:"live text demo for dropdown 3",
      },
      {
        id: "item3",
        circleText: "D",       
        screen2Text:"Look at the temperature and luminosity for Star D. Drag and drop it to the correct location on the diagram.",
        alt:"Star D Temperature: 7,000 K Luminosity: 7500 draggable",
        bottomScreen4TextTwo:"Star D<br/>Temp: 7,000 K<br/>Luminosity: 7500",
        live:"live text demo for dropdown 4",
      },
    ],
  },
  dropzones: {
    screen0: [
      {
        hidden: false,
        id: "dropzone0",
        label: "Stellar nebula dropzone",
      },
    ],
    screen1: [
      {
        hidden: false,
        id: "item0",
        alt: "This is a dropzone",
        label: "This is a dropzone",
      },
      {
        hidden: false,
        id: "item1",
        alt: "This is a dropzone",
        label: "This is a dropzone",
      },
      {
        hidden: false,
        id: "item2",
        alt: "This is a dropzone",
        label: "This is a dropzone",
      },
      {
        hidden: false,
        id: "item3",
        alt: "This is a dropzone",
        label: "This is a dropzone",
      },
    ],
  },
  radiobuttons: [
    {
      id: "mass",
      text: "The star's mass",
    },
    {
      id: "temperature",
      text: "The star's temperature",
    },
    {
      id: "brightness",
      text: "The star's brightness",
    },
    {
      id: "composition",
      text: "The star's composition",
    },
  ],
  starLifeCyclesCollageImageAlt: " alt of screen2 demo",
  screen2labels: [
    {id:"mainlabel", label: "Life Cycle of Stars"},
    { id: "stellar_nebula", label: "Stellar nebula" },
    { id: "average_star", label: "Average star" },
    { id: "red_giant", label: "Red giant" },
    { id: "planetary_nebula", label: "Planetary nebula" },
    { id: "white_dwarf", label: "White dwarf" },
    { id: "massive_star", label: "Massive star" },
    { id: "red_supergiant", label: "Red supergiant" },
    { id: "supernova", label: "Supernova" },
    { id: "neutron_star", label: "Neutron star" },
    { id: "black_hole", label: "Black hole" },
  ],

  hotspots: [
    {
      id: "hotspot6",
      text: "Supergiants",
      option: "supergiants",
      popupText: `<strong>Supergiants <span aria-hidden="true">&#8212;</span></strong> The biggest and brightest stars`,
    },
    {
      id: "hotspot1",
      option: "luminosity",
      text: "Luminosity (Sun = 1)",
      popupText: `<strong>Luminosity <span aria-hidden="true">&#8212;</span></strong> The intensity, or brightness, of light from a celestial body`,
    },
    {
      id: "hotspot5",
      text: "Giants",
      option: "giants",
      popupText: `<strong>Giants <span aria-hidden="true">&#8212;</span></strong> Stars that are bigger and have a higher luminosity than main sequence stars.`,
    },
    {
      id: "hotspot4",
      text: "Main sequence",
      option: "main_sequence",
      popupText: `<strong>Main Sequence Stars <span aria-hidden="true">&#8212;</span></strong> The category of stable stars in the middle developmental phases that plot 
                  along a continuous diagonal belt on the Hertzsprung-Russell diagram. All stars are main sequence 
                  stars at some point in their life cycle.`,
    },
    {
      id: "hotspot3",
      text: "White Dwarfs",
      option: "white_dwarfs",
      popupText: `<strong>White Dwarfs <span aria-hidden="true">&#8212;</span></strong> These are stars that tend to be hotter with lower luminosity. 
                  This is what our Sun will become.`,
    },
    {
      id: "hotspot2",
      option: "temperature",
      text: "Temperature (Kelvin) /Stellar Classification",
      popupText: `<strong>Temperature <span aria-hidden="true">&#8212;</span></strong> Notice that the closer you get to the Y axis, the higher the temperature.`,
    },
  ],
  graphAxes: {
    xAxis: [
      {
        id: "xaxis0",
        text: "0.0001",
      },
      {
        id: "xaxis1",
        text: "0.01",
      },
    
      {
        id: "xaxis2",
        text: "1",
      },
      {
        id: "xaxis3",
        text: "100",
      },
      {
        id: "xaxis4",
        text: "10000",
      },
      
    ],
    yAxis: [
      {
        id: "yaxis0",
        text: "30000",
      },
      {
        id: "yaxis1",
        text: "20000",
      },
      {
        id: "yaxis2",
        text: "10000",
      },
      {
        id: "yaxis3",
        text: "7000",
      },
      {
        id: "yaxis4",
        text: "6000",
      },
      {
        id: "yaxis5",
        text: "4000",
      },
      {
        id: "yaxis6",
        text: "3000",
      },
    ],
  },
 
  activityHeadingOne:"Students will observe stars of different masses moving through their life cycles.",
  activityHeadingTwo:"Students will place stars on Hertzsprung-Russell diagram based on their temperature and luminosity.",
  mcqAnswer: "mass",
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  correctToastSecondScreen:"That's right! It's the star's mass that determines its life cycle!",
  transitionPopup: {
    ...commonData.transitionPopup,
    content: `Now that you have explored the life cycles of different 
              stars, it's time to see how to classify them.`,
  },
  completionPopup: {
    ...commonData.completionPopup,
    content: "You have completed the simulation!",
  },
  screen1leftalt:"screen 1 left alt demo",
  hertzsprungRussellImageAlt:"graph image alt demo",
  screen1RightOSTInstruction: `All stars go through a life cycle, but not all cycles are the same. 
                              Click and drag each star to the stellar nebula and note what happens.`,
  activityDescription: `Students will view stars moving through life cycles and then 
                        categorize stars based on mass, temperature, and luminosity. `,
  introductionPopupText: `There's nothing better than a clear night full of stars! Today, 
                          we are going to take a closer look at the characteristics of stars.`,
  introductionPopupImageAlt:
    "A girl sitting on a roof top and looking towards the sky during night time.",
  mcqHeading: `Based on what you observed, what do you think determines the pathway a star will take?`,
  infoPopupTextScreen1: `Click and drag the star to the stellar nebula.`,
  infoPopupTextScreen2: `Click each hotspot and read the information. Click and 
                        drag the stars to the correct location on the H-R diagram.`,
  screen3RightSectionOST: `Stars can be classified based on their characteristics and sorted 
                            onto the diagram you see here. Select each hotspot to learn more.`,
};

export default data;
