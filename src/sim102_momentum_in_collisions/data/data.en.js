import globalConfig from "../../app/data/data.en";

import carvscar2020 from "../assets/videos/carvscar2020.mp4";
import carvscar3030 from "../assets/videos/carvscar3030.mp4";
import carvscar2030 from "../assets/videos/carvscar2030.mp4";
import carvscar3020 from "../assets/videos/carvscar3020.mp4";
import carvstruck2020 from "../assets/videos/carvstruck2020.mp4";
import carvstruck3030 from "../assets/videos/carvstruck3030.mp4";
import carvstruck2030 from "../assets/videos/carvstruck2030.mp4";
import carvstruck3020 from "../assets/videos/carvstruck3020.mp4";
import truckvstruck2020 from "../assets/videos/truckvstruck2020.mp4";
import truckvstruck3030 from "../assets/videos/truckvstruck3030.mp4";
import truckvstruck2030 from "../assets/videos/truckvstruck2030.mp4";
import truckvstruck3020 from "../assets/videos/truckvstruck3020.mp4";
import car20 from "../assets/videos/car20.mp4";
import car30 from "../assets/videos/car30.mp4";
import { ariaLiveText } from "../../app/actions";

const buttonLabels = { ...globalConfig.buttonLabels };
const data = {
  buttonNo: "No",
  buttonPlay: "Drive",
  buttonNext: buttonLabels.next,
  buttonLabelsData: { ...globalConfig.buttonLabels },
  buttonYes: buttonLabels.yes,
  infoText: buttonLabels.info,
  resetText: buttonLabels.reset,
  buttonStart: buttonLabels.start,
  buttonClose: buttonLabels.close,
  resetConfirmationText: globalConfig.resetLiveText,
  currentExperimentNumber: 0,
  resetLiveText: globalConfig.resetLiveText,
  completionScreen: {
    ...globalConfig.completionPopup,
    content:
      "You have successfully explored the different ways that mass and velocity affect collisions.",
  },
  // imgAlt: [
  //   {
  //     id: "carvscar",
  //     label: "Two cars on a road heading toward each other",
  //   },
  //   {
  //     id: "carvstruck",
  //     label: "One car and one truck on a road heading toward each other",
  //   },
  //   {
  //     id: "truckvstruck",
  //     label: "Two trucks on a road heading toward each other",
  //   },
  //   {
  //     id: "carvsbuilding",
  //     label: "One car on a road heading toward a building",
  //   },
  // ],
  activityHeading:
    " Students will experiment with billiard balls and cars to see how momentum is conserved during elastic and inelastic collisions.",
  thumbnails: [
    {
      srNo: "0",
      id: "carvscar",
      label: "Car versus Car",
      questionId: "carvscar",
      text: "Car vs Car",
      imglabel: "Two cars on a road heading toward each other",
      altText: "Two cars on a road heading toward each other",
    },
    {
      srNo: "1",
      id: "carvstruck",
      text: "Car vs Truck",
      label: "Car versus Truck",
      questionId: "carvstruck",
      imglabel: "One car and one truck on a road heading toward each other",
      altText: "One car and one truck on a road heading toward each other",
    },
    {
      srNo: "2",
      id: "truckvstruck",
      text: " Truck vs Truck",
      label: "Truck versus Truck",
      questionId: "truckvstruck",
      imglabel: "Two trucks on a road heading toward each other",
      altText: "Two trucks on a road heading toward each other",
    },
    {
      srNo: "3",
      id: "carvsbuilding",
      text: "Car vs Building",
      label: "Car versus Building",
      questionId: "carvsbuilding",
      imglabel: "One car on a road heading toward a building",
      altText: "One car on a road heading toward a building",
    },
  ],

  mainHeadingAll:
    "Explore the results of this collision. Adjust the velocity of each of the objects on the screen to see how that affects the collision.",
  mainHeadingCarvsBuilding:
    "Explore the results of this collision. Adjust the velocity of the object on the screen to see how that affects the collision.",
  readingScreenMass: "Mass",
  readingScreenVelocity: "Initial velocity",
  sliderText: [
    {
      id: "carvscar",
      leftSliderText: "Velocity of red car (m/s)",
      rightSliderText: "Velocity of blue car (m/s)",
      leftarialabel: "Velocity of red car meter per second",
      rightarialabel: "Velocity of blue car meter per second",
    },
    {
      id: "carvstruck",
      leftSliderText: "Velocity of red car (m/s)",
      rightSliderText: "Velocity of orange truck (m/s)",
      leftarialabel: "Velocity of red car meter per second",
      rightarialabel: "Velocity of orange truck meter per second",
    },
    {
      id: "truckvstruck",
      leftSliderText: "Velocity of yellow truck (m/s)",
      rightSliderText: "Velocity of orange truck (m/s)",
      leftarialabel: "Velocity of yellow truck meter per second",
      rightarialabel: "Velocity of orange truck meter per second",
    },
    {
      id: "carvsbuilding",
      leftSliderText: "Velocity of red car (m/s)",
      leftarialabel: "Velocity of red car meter per second",
    },
  ],
  metertext: "m/sec",
  metertextlabel: "meter per second",
  readingScreen: [
    {
      id: "carvscar",
      leftScreenHeading: "Red car",
      leftScreenMass: "1,000 kg",

      rightScreenHeading: "Blue car",
      rightScreenMass: "1,000 kg",
    },
    {
      id: "carvstruck",
      leftScreenHeading: "Red car",
      leftScreenMass: "1,000 kg",

      rightScreenHeading: "Orange truck",
      rightScreenMass: "3,000 kg",
    },
    {
      id: "truckvstruck",
      leftScreenHeading: "Yellow truck",
      leftScreenMass: "3,000 kg",

      rightScreenHeading: "Orange truck",
      rightScreenMass: "3,000 kg",
    },
    {
      id: "carvsbuilding",

      leftScreenHeading: "Red car",
      leftScreenMass: "1,000 kg",
    },
  ],
  valuetextArray0: {
    0: "20 meter per second",
    1: "30 meter per second",
  },
  listitems: [
    { id: 0, value: 0, label: "20 " },
    { id: 1, value: 1, label: "30" },
  ],

  observationsData: [
    {
      id: "rb1",
      classes: "carvscar2020",
      videoSrc: carvscar2020,
      isPlayed: false,
      experimentName: "carvscar2020",
      isDisable: false,
      //  altText: " demo video alt text",
      liveText: "The two cars collide, producing damage to each.",
    },

    {
      id: "rb2",
      classes: "carvscar3030",
      videoSrc: carvscar3030,
      isPlayed: false,
      experimentName: "carvscar30vs30",
      isDisable: false,
      // altText: " demo video alt text",
      liveText: "The two cars collide, producing damage to each.",
    },

    {
      id: "rb3",
      classes: "carvscar2030",
      experimentName: "carvscar2030",
      videoSrc: carvscar2030,
      isPlayed: false,
      isDisable: false,
      // altText: " demo video alt text",
      liveText: "The two cars collide, producing damage to each.",
    },

    {
      id: "rb4",
      classes: "carvscar3020",
      videoSrc: carvscar3020,
      isPlayed: false,
      buttonLabels: "Bus moving",
      experimentName: "Bus moving",
      isDisable: false,
      // altText: " demo video alt text",
      liveText: "The two cars collide, producing damage to each.",
    },

    {
      id: "carvstruck2020",
      classes: "carvstruck2020",
      videoSrc: carvstruck2020,
      isPlayed: false,
      experimentName: "carvstruck2020",
      isDisable: false,
      //  altText: " demo video alt text",
      liveText:
        "The car and the truck collide, producing damage to each. The car is more damaged than the truck",
    },
    {
      id: "carvstruck3030",
      classes: "carvstruck3030",
      videoSrc: carvstruck3030,
      isPlayed: false,
      experimentName: "carvstruck3030",
      isDisable: false,
      // altText: " demo video alt text",
      liveText:
        "The car and the truck collide, producing damage to each. The car is more damaged than the truck",
    },
    {
      id: "carvstruck2030",
      classes: "carvstruck2030",
      experimentName: "carvstruck2030",
      videoSrc: carvstruck2030,
      isPlayed: false,
      isDisable: false,
      //altText: " demo video alt text",
      liveText:
        "The car and the truck collide, producing damage to each. The car is more damaged than the truck",
    },
    {
      id: "carvstruck3020",
      classes: "carvstruck3020",
      videoSrc: carvstruck3020,
      isPlayed: false,
      experimentName: "carvstruck3020",
      isDisable: false,
      // altText: " demo video alt text",
      liveText:
        "The car and the truck collide, producing damage to each. The car is more damaged than the truck",
    },

    {
      id: "truckvstruck2020",
      classes: "truckvstruck2020",
      videoSrc: truckvstruck2020,
      isPlayed: false,
      experimentName: "truckvstruck2020",
      isDisable: false,
      //altText: " demo video alt text",
      liveText: "The two trucks collide, producing damage to each.",
    },
    {
      id: "truckvstruck3030",
      classes: "truckvstruck3030",
      videoSrc: truckvstruck3030,
      isPlayed: false,
      experimentName: "truckvstruck3030",
      isDisable: false,
      // altText: " demo video alt text",
      liveText: "The two trucks collide, producing damage to each.",
    },
    {
      id: "truckvstruck2030",
      classes: "truckvstruck2030",
      experimentName: "truckvstruck2030",
      videoSrc: truckvstruck2030,
      isPlayed: false,
      isDisable: false,
      // altText: " demo video alt text",
      liveText: "The two trucks collide, producing damage to each.",
    },
    {
      id: "truckvstruck3020",
      classes: "truckvstruck3020",
      videoSrc: truckvstruck3020,
      isPlayed: false,
      experimentName: "Bus moving",
      isDisable: false,
      //altText: " demo video alt text",
      liveText: "The two trucks collide, producing damage to each.",
    },

    {
      id: "car20",
      classes: "car20",
      videoSrc: car20,
      isPlayed: false,
      experimentName: "car20",
      isDisable: false,
      // altText: " demo video alt text",
      liveText:
        "The car and the building collide, producing damage to the car. The building is undamaged.",
    },
    {
      id: "car30",
      classes: "car30",
      videoSrc: car30,
      isPlayed: false,
      experimentName: "car30",
      isDisable: false,
      // altText: " demo video alt text",
      liveText:
        "The car and the building collide, producing damage to the car. The building is undamaged.",
    },
  ],

  resetLiveText: globalConfig.resetLiveText,
  resetPopupText: globalConfig.resetPopupText,

  buttonLabels: { ...globalConfig.buttonLabels },
  infoContentfirst: "Choose a scenario to explore the results of a collision.",
  infoContentsecond: "Select the velocity for each vehicle.",
  thumbHeading: "Select a scenario to explore the results of the collision.",
  initialInfoDialog: {
    heading:
      "The scenarios in this simulation involve vehicles moving toward each other at an intersection or a vehicle moving toward a building. If none of the vehicles stop, a collision will occur. Explore the results of these collisions.",
  },
};
export default data;
