import commonData from "../../app/data/data.en";
import mainImg from "../assets/images/main_img.png";
const data = {
  buttonLabels: { ...commonData.buttonLabels },
  instructionBoxContent:
    "Have you ever wondered why we never run out of water? Water is always moving—through the atmosphere, on the surface of Earth, and even underground. Can you demonstrate your knowledge of the water cycle by completing the diagram with the different processes that occur during the cycle?",
  mainImg: {
    img: mainImg,
    alt: "Cross-section of a water environment shows the Sun causing water to evaporate into air, condense into clouds, return as rain into rivers & groundwater",
  },
  headingLeaveOne:
    "use a drag and drop activity to describe and illustrate how water on Earth moves through the atmosphere and the surface of Earth through a series of repeating processes.",
  infoText:
    "Click on an image, and drag it to where it belongs in the diagram to complete the water cycle.",
  topAreaTextDescription:
    "Complete the diagram by dragging the images and words to where they fit in the water cycle.",
  completionPopup: {
    ...commonData.completionPopup,
    content: "You have completed the simulation",
  },
  liveAriaTxt: "dropped on",
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  resetMsgContent: commonData.resetPopupText,
  draggable: [
    {
      id: "condensation",
      dragName:
        "Condensation- cloud with small droplets within cloud to show water vapor draggable",
      ansId: "condensationdrop",
      label: "Condensation",
      para: "When water vapor rises into the atmosphere and cools, it begins to form tiny droplets of water. This is called condensation. Cloud formation begins with condensation. Condensation also creates fog. When you see water on the outside of a cold glass on a hot day, that is condensation.  The water is not from inside the glass; it is actually the water from the air around the glass turning from water vapor back into liquid water because of the temperature of the glass.",
    },
    {
      id: "evoporation",
      dragName:
        "Evaporation- arrows coming up from a source of water draggable",
      ansId: "evoporationdrop",
      label: "Evaporation",
      para: "As water heats up, it begins to change from its liquid state to a gas called water vapor. This water vapor begins to rise into the atmosphere. This process is called evaporation. Sometimes, when it’s hot and sticky outside, you can feel the water vapor in the air—this is called humidity. When humidity levels are high, that means there is a large amount of water vapor in the air. If the humidity is low, there is a small amount of water in the air.",
    },
    {
      id: "sunenergy",
      dragName: "Sun’s energy-image of sun draggable.",
      ansId: "sunenergydrop",
      label: "Sun's energy",
      para: "The Sun heats the water of Earth’s oceans and the water on Earth’s surface. Water on Earth is heated unevenly by the Sun, and this uneven heating drives the water cycle, as well as all the weather on Earth. Without the energy from the Sun, the water cycle would not be able to continue.",
    },
    {
      id: "precipitation",
      dragName: "Precipitation- cloud with rain falling from it draggable",
      ansId: "precipitationdrop",
      label: "Precipitation",
      para: "When water droplets get too heavy, they fall from the atmosphere back to Earth. These drops can fall as snow, sleet, or hail. The type of precipitation is completely dependent on the air temperature. When water falls as precipitation, it fills our rivers, lakes, and oceans.",
    },
    {
      id: "groundwater",
      dragName:
        "Groundwater flow- an area where water and land meet and water seeping into ground can clearly be seen. Arrows can be used here to show direction of water flow draggable",
      ansId: "groundwaterdrop",
      label: "Groundwater flow",
      para: "Some precipitation seeps into the ground; this is known as groundwater. Groundwater flows through the spaces in rocks underground. In some areas, there are underground layers of rock that can hold groundwater called aquifers. Most of the water we use for farming and even a large amount of our drinking water comes from aquifers. Eventually, the water flows to rivers, lakes, and oceans and becomes a part of the water cycle all over again.",
    },
  ],

  droppable: [
    {
      id: "sunenergydrop",
      hidden: false,
      beforeDropTxt: "Drop zone water cycle stage 1",
      ariaLabel: "dropped",
      label: "Water cycle stage 1 droppable area",
    },
    {
      id: "evoporationdrop",
      hidden: false,
      beforeDropTxt: "Drop zone water cycle stage 2",
      ariaLabel: "dropped",
      label: "Water cycle stage 2 droppable area",
    },
    {
      id: "condensationdrop",
      hidden: false,
      beforeDropTxt: "Drop zone water cycle stage 3",
      ariaLabel: "dropped",
      label: "Water cycle stage 3 droppable area",
    },
    {
      id: "precipitationdrop",
      hidden: false,
      beforeDropTxt: "Drop zone water cycle stage 4",
      ariaLabel: "dropped",
      label: "Water cycle stage 4 droppable area",
    },
    {
      id: "groundwaterdrop",
      hidden: false,
      beforeDropTxt: "Drop zone water cycle stage 5",
      ariaLabel: "dropped",
      label: "Water cycle stage 5 droppable area",
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
