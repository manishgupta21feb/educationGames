import globalDataSet from "../../app/data/data.en";

const data = {
  activityHeading:
    "In this simulation, students will navigate through plant and animal parts to learn about the specific parts and their functions.",
  instructionBoxContent:
    "Welcome to the great outdoors! Are you ready to explore the parts of plants and animals that help them live? Let’s go!",
  instructionBoxImgAria:
    "A jungle with many flowers, trees & vines has an elephant, a snake, a tiger, a monkey, a turtle, a chameleon, and three birds.",
  InfoBoxContent: "Drag a part into the correct place and learn more about it.",
  monekyDiscription:
    " Just like plants, animal parts work together to help animals live. Let’s look at the parts of this monkey and see how each part helps the monkey stay alive. Drag the monkey’s body part to where it belongs on the monkey.",
  treeDiscription:
    "Did you know plants have many different parts? These parts work together to help the plant live and make new plants. Today, we will look at the parts of this plant and see how each part helps the plant stay alive. Drag the plant part to where it belongs on the plant.",
  buttonLabels: { ...globalDataSet.buttonLabels },
  continueButtonLabel: "Continue",
  completionPopup: {
    ...globalDataSet.completionPopup,
    content:
      "You have put all the parts of the plant and animal in the correct place. Now you know what helps plants and animals live!",
  },

  transitionPopup: {
    ...globalDataSet.transitionPopup,
    content:
      "You have put all the parts of this plant in the correct place! Now this plant can live! Next, let’s explore the parts of animals that help them live.",
  },
  resetLiveText: globalDataSet.resetLiveText,
  resetMsgContent: globalDataSet.resetPopupText,
  correctToastMsg: globalDataSet.correctToastMessage,
  incorrectToastMsg: globalDataSet.incorrectToastMessage,

  menkeyDroppableImgAria:
    "A brown monkey stands with its arms up. Its arms, legs, tail, ears, eyes, and  Its head and body are visible.",
  treeDroppableImgAria:
    "An outline of a plant in the soil that includes the leaves, a stem, a flower, fruit, and roots.",
  monekyFinalImageAria:
    "A brown monkey stands with its arms up. All of the monkey’s body parts are visible.",
  treeFinalImageAria:
    "A plant with green leaves, a green stem, a white flower, two long red peppers, and tan roots that are in the soil.",

  treeDynamicAria:
    "An outline of a plant that includes droppable -1-  for -2-. The plant’s -3-  -4- attached to the plant.",
  monkeyDynamicAria:
    "The -1- -2- attached to the monkey. -3- the monkey’s -4-.",

  treeDynamicWords: { area: "area", areas: "areas" },
  helpingVerb: { is: "is", are: "are", and: "and" },
  monekyDynamicAriaSecondPart: {
    plural: "There are droppable areas for each of",
    singular: "There is droppable area for ",
  },

  monekeydraggables: [
    {
      srNo: 1,
      source: "A",
      id: "left-hand",
      label: "Left arm",
      altTxtNormal: "left arm",
      altTxtCombined: "left and right arms",
    },
    {
      srNo: 2,
      id: "eye-1",
      source: "B",
      label: "Left eye",
      altTxtNormal: "left eye",
      altTxtCombined: "left and right eyes",
    },
    {
      srNo: 3,
      id: "left-leg",
      source: "C",
      label: "Left leg",
      altTxtNormal: "left leg",
      altTxtCombined: "left-right legs",
    },
    {
      srNo: 4,
      source: "D",
      id: "right-ear",
      label: "Right ear",
      altTxtNormal: "right ear",
      altTxtCombined: "left-right ears",
    },
    {
      srNo: 5,
      id: "tell",
      source: "E",
      label: "Tail",
      altTxtNormal: "tail",
      altTxtCombined: "tail",
    },
    {
      srNo: 6,
      id: "right-hand",
      source: "F",
      label: "Right arm",
      altTxtNormal: "right arm",
      altTxtCombined: "left and right arms",
    },
    {
      srNo: 7,
      source: "G",
      id: "eye-2",
      label: "Right eye",
      altTxtNormal: "right eye",
      altTxtCombined: "left and right eyes",
    },
    {
      srNo: 8,
      id: "right-leg",
      source: "H",
      label: "Right leg",
      altTxtNormal: "right leg",
      altTxtCombined: "left-right legs",
    },
    {
      srNo: 9,
      id: "left-ear",
      source: "I",
      label: "Left ear",
      altTxtNormal: "left ear",
      altTxtCombined: "left-right ears",
    },
  ],
  monkeyDropzones: [
    {
      target: "A",
      id: "dropzone1",
      toastMsg:
        "<b>Correct!</b> This is the monkey’s <b>limb</b>. Limbs help animals move. Being able to move helps animals go to food, water, and shelter. Being able to move also helps the animal run away from danger. The monkey can use its hand to hold objects. Being able to hold objects helps animals eat, use tools, and protect themselves. Limbs help keep animals alive.",
      label: "Droppable area left arm",
    },
    {
      target: "B",
      id: "dropzone2",
      toastMsg:
        "<b>Correct!</b> This is the monkey’s <b>eye</b>. Eyes help animals see things around them. Eyes help animals see food, water, and places to live. They also help animals see when there is danger. Eyes help keep animals alive.",
      label: "Droppable area left eye",
    },
    {
      target: "C",
      id: "dropzone3",
      toastMsg:
        "<b>Correct!</b> This is the monkey’s <b>limb</b>. Limbs help animals move. Being able to move helps animals go to food, water, and shelter. Being able to move also helps animals run away from danger. The monkey can use its foot to hold objects. Being able to hold objects helps animals eat, use tools, and protect themselves. Limbs help keep animals alive.",
      label: "Droppable area left leg",
    },
    {
      target: "D",
      id: "dropzone4",
      toastMsg:
        "<b>Correct!</b> This is the monkey’s <b>ear</b>. Ears help animals hear things around them. Ears help animals hear other animals. They also help animals hear when they are in danger. Ears help keep animals alive.",
      label: "Droppable area right ear",
    },
    {
      target: "E",
      id: "dropzone5",
      toastMsg:
        "<b>Correct!</b> This is the monkey’s <b>tail</b>. The monkey can use its tail to hold objects like tree branches to help it move. Being able to move helps animals go to food, water, and shelter. Being able to move also helps animals run away from danger. Tails help keep animals alive.",
      label: "Droppable area tail",
    },
    {
      target: "F",
      id: "dropzone6",
      toastMsg:
        "<b>Correct!</b> This is the monkey’s <b>limb</b>. Limbs help animals move. Being able to move helps animals go to food, water, and shelter. Being able to move also helps the animal run away from danger. The monkey can use its hand to hold objects. Being able to hold objects helps animals eat, use tools, and protect themselves. Limbs help keep animals alive.",
      label: "Droppable area right arm",
    },
    {
      target: "G",
      id: "dropzone7",
      toastMsg:
        "<b>Correct!</b> This is the monkey’s <b>eye</b>. Eyes help animals see things around them. Eyes help animals see food, water, and places to live. They also help animals see when there is danger. Eyes help keep animals alive.",
      label: "Droppable area right eye",
    },
    {
      target: "H",
      id: "dropzone8",
      toastMsg:
        "<b>Correct!</b> This is the monkey’s <b>limb</b>. Limbs help animals move. Being able to move helps animals go to food, water, and shelter. Being able to move also helps animals run away from danger. The monkey can use its foot to hold objects. Being able to hold objects helps animals eat, use tools, and protect themselves. Limbs help keep animals alive.",
      label: "Droppable area right leg",
    },
    {
      target: "I",
      id: "dropzone9",
      toastMsg:
        "<b>Correct!</b> This is the monkey’s <b>ear</b>. Ears help animals hear things around them. Ears help animals hear other animals. They also help animals hear when they are in danger. Ears help keep animals alive.",
      label: "Droppable area left ear",
    },
  ],

  treeDragable: [
    {
      srNo: 1,
      source: "A",
      id: "roots",
      label: "Root",
      dynamicAriaTxt1: "roots",
      dynamicAriaTxt2: "tan roots that are in the soil",
    },
    {
      srNo: 2,
      id: "stem",
      source: "B",
      label: "Stem",
      dynamicAriaTxt1: "a stem",
      dynamicAriaTxt2: "a green stem",
    },
    {
      srNo: 3,
      id: "leaves",
      source: "C",
      label: "Leaves",
      dynamicAriaTxt1: "the leaves",
      dynamicAriaTxt2: "green leaves",
    },
    {
      srNo: 4,
      source: "D",
      id: "flower",
      label: "Flower",
      dynamicAriaTxt1: "a flower",
      dynamicAriaTxt2: "a white flower",
    },
    {
      srNo: 5,
      id: "fruit",
      source: "E",
      label: "Fruit",
      dynamicAriaTxt1: "fruit",
      dynamicAriaTxt2: " two long red peppers",
    },
  ],

  treeDropzones: [
    {
      target: "A",
      id: "treeDropzone1",
      toastMsg:
        "<b>Correct!</b> These are the <b>roots</b> of the plant. The roots take in water for the plant. They also take in nutrients that help the plant grow. Roots also hold the plant in the soil.",
      label: "Droppable area roots",
    },
    {
      target: "E",
      id: "treeDropzone5",
      toastMsg:
        "<b>Correct!</b> This is the <b>fruit</b> of the plant. There are seeds inside the fruit. Fruit takes care of the seeds so new plants will grow.",
      label: "Droppable area fruit",
    },
    {
      target: "B",
      id: "treeDropzone2",
      toastMsg:
        "<b>Correct!</b> This is the <b>stem</b> of the plant. The stem carries the food and water from the roots to other parts of the plant. It also holds up the rest of the plant.",
      label: "Droppable area stem",
    },
    {
      target: "C",
      id: "treeDropzone3",
      toastMsg:
        "<b>Correct!</b> These are the <b>leaves</b> of the plant. The plant can’t move around to find food, so the leaves make food for the plant! This gives the plant energy to live and grow.",
      label: "Droppable area leaves",
    },
    {
      target: "D",
      id: "treeDropzone4",
      toastMsg:
        "<b>Correct!</b> These are the <b>flowers</b> of the plant. They are pretty and they smell good! Their color and smell bring insects to help plants make seeds so that new plants can grow.",
      label: "Droppable area flower",
    },
  ],
};

export default data;
