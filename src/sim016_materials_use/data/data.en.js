import metalSeat from "../assets/images/metal_seat_3x.png";
import woodenSeat from "../assets/images/wooden_seat_3x.png";
import clothSeat from "../assets/images/cloth_seat_3x.png";
import globalDataSet from "../../app/data/data.en";
import swing from "../assets/videos/reward_anim.mp4";

const data = {
  screenData: [
    {
      id: 0,
      component: "LRContainer",
    },
    {
      id: 1,
      component: "FullContainer",
    },
  ],
  draggableData: {
    introHeading:
      "Review the information about each material by clicking on it, and then drag the correct seat to the broken swing. ",
    id: 0,
    ariaLabel:
      "Review the information about each material by clicking on it, and then drag the correct seat to the broken swing.",
    close: "Close",
    draggables: [
      {
        srNo: 0,
        id: "metalSeat",
        label: "Metal Seat",
        ariaLabel: "metal seat draggable",
        altText: { thumbnailAltText: "Metal seat", ariaAltText: "Metal seat " },
        infoText:
          "Ouch! A metal seat might last the longest and even hold the biggest kid, but it might burn your legs in the summer heat!",
        audioLabel: "Metal_Seat",
        dargImg: metalSeat,
        assetURL: { animalAsset: metalSeat },
        // type: "plant-cell-wall",
        temperature:
          "<span class='icons temperature'></span><span class='textBox'>Temperature in Sun</span><span class='numBox'>160&degF</span>",
        weight:
          "<span class='icons weight'></span><span class='textBox'>Weight &nbsp limit</span><span class='numBox'>250 lbs.</span>",
        material:
          "<span class='icons date'></span><span class='textBox'>Material lifetime</span><span class='numBox'>15 years</span>",
      },
      {
        srNo: 1,
        id: "woodenSeat",
        label: "Wooden Seat",
        ariaLabel: "wooden seat draggable",
        altText: {
          thumbnailAltText: "Wooden Seat",
          ariaAltText: "Wooden Seat",
        },
        infoText:
          "A wooden seat is the best choice! It is not too hot, can hold the biggest kids, and will last a long time.",
        audioLabel: "Wooden_Seat",
        dargImg: woodenSeat,
        assetURL: { animalAsset: woodenSeat },
        // type: "woodenSeat",
        temperature:
          "<span class='icons temperature'></span><span class='textBox'>Temperature in Sun</span><span class='numBox'>95&degF</span>",
        weight:
          "<span class='icons weight'></span><span class='textBox'>Weight &nbsp limit</span><span class='numBox'>200 lbs.</span>",
        material:
          "<span class='icons date'></span><span class='textBox'>Material lifetime</span><span class='numBox'>12 years</span>",
      },
      {
        srNo: 2,
        id: "clothSeat",
        label: "Cloth Seat",
        ariaLabel: "cloth seat draggable",
        altText: { thumbnailAltText: "Cloth seat", ariaAltText: "Cloth seat" },
        infoText: "A cloth seat will not last very long and might tear easily.",
        audioLabel: "Cloth_Seat",
        dargImg: clothSeat,
        assetURL: { animalAsset: clothSeat },
        // type: "cell-membrane-animal",
        temperature:
          "<span class='icons temperature'></span><span class='textBox'>Temperature in Sun</span><span class='numBox'>85&degF</span>",
        weight:
          "<span class='icons weight'></span><span class='textBox'>Weight &nbsp limit</span><span class='numBox'>100 lbs.</span>",
        material:
          "<span class='icons date'></span><span class='textBox'>Material lifetime</span><span class='numBox'>3 years</span>",
      },
    ],
  },
  animalDropZone: [
    {
      id: 0,
      ariaLabel:
        "A blue and gray swing set with one swing that is broken sits on green grass. ",
      altText:
        "A blue and gray swing set with one swing that is broken sits on green grass. ",
      label: "Drop zone swing",
    },
  ],
  completionPopup: {
    ...globalDataSet.completionPopup,
    content: "You have completed the simulation.",
  },
  resetLiveText: globalDataSet.resetLiveText,
  resetPopupText: globalDataSet.resetPopupText,
  backgroundAltText:
    "A blue and gray swing set with one swing sits on green grass. A child is sitting on the wooden seat.",
  assetURL: swing,
  helpingButton: "Info",
  helpingButtonLabel: "Properties Info",
  instructionBoxContent:
    "Your swing is broken.  Which material should you use to fix it?   All of these materials will work, but only one is the best for the outdoors and will last a long time.",
  InfoBoxContent:
    "Go through the information about each seat material, and then drag the correct seat to the broken swing.",

  buttonLabels: { ...globalDataSet.buttonLabels },
  liveText: "-1- dropped",
  droppableAreaAltText: "Swing seat droppable area",
};

export default data;
