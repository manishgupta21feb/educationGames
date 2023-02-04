import globalDataSet from "../../app/data";

const data = {
  activityHeading:
    "Students select living and nonliving things in an environment and read information about whether the objects have basic needs and produce young. Students then identify the objects as living or nonliving.",

  instructionBoxContent:
    "Look around! Our world is made up of both living and nonliving things. Let’s explore some of them!",
  InfoBoxContent:
    "Click the buttons and classify the things as living or nonliving.",
  imgAlt:
    "Pond with sand, plants & fish in water; ducks & plants are on top. Next to pond are trees, rocks, grass & 2 deer on sand; birds & the Sun are in sky",
  buttonLabels: { ...globalDataSet.buttonLabels },

  resetLiveText: globalDataSet.resetLiveText,
  resetMsgContent: globalDataSet.resetPopupText,

  completionPopup: {
    ...globalDataSet.completionPopup,
    content:
      "You have correctly classified all these things as living or nonliving.",
  },

  correctToastMessage: globalDataSet.correctToastMessage,
  incorrectToastMessage: globalDataSet.incorrectToastMessage,

  screenOneTxt:
    "Living things must have their basic needs met to stay alive. They also have young. Nonliving things do not have basic needs. They do not have young. Click on the buttons to explore some living and nonliving things. Then, select whether you think they are living or nonliving.",

  screenOneQues: [
    {
      id: "bird",
      answer: "living",
      screenTwoTxt:
        "We see birds flying in the sky, in trees, and on the ground. Birds build nests that are shelters for their young. They eat worms and berries. They drink water. Are birds living or nonliving things?",
    },
    {
      id: "sun",
      answer: "nonliving",
      screenTwoTxt:
        "The Sun shines brightly in the sky during the day. It gives us light and heat. It does not need air, water, or food. It does not have young. Is the Sun a living or nonliving thing?",
    },
    {
      id: "cloud",
      answer: "nonliving",
      screenTwoTxt:
        "We see clouds in the sky. Even though they move, they are not looking for food or shelter. A cloud does not make young clouds.  Are clouds living or nonliving things?",
    },
    {
      id: "deer",
      answer: "living",
      screenTwoTxt:
        "This deer and her young are drinking water from the pond. They like to eat plants. Deer have shelters in forests. They breathe air.  Are deer living or nonliving things?",
    },
    {
      id: "duck",
      answer: "living",
      screenTwoTxt:
        " Ducks are birds that swim in the water. This duck has her young swimming behind her. Some ducks eat frogs and fish, while other ducks eat seeds and plants. Ducks build their nests on the ground. Are ducks living or nonliving things?",
    },
    {
      id: "water",
      answer: "nonliving",
      screenTwoTxt:
        "There are lots of things in this water. Water doesn’t eat any of them. It doesn’t need sunlight or air or space.  Is water a living or nonliving thing?",
    },
    {
      id: "frog",
      answer: "living",
      screenTwoTxt:
        "This frog likes to wait on lily pads and catch flies, spiders, and butterflies to eat. Frogs breathe air through their noses which are on top of their heads. They take in water through their skin! They have young that start out looking nothing like them.  Are frogs living or nonliving things?",
    },
    {
      id: "plant",
      answer: "living",
      screenTwoTxt:
        "See the plants in the water and on land?  All plants need sunlight, nutrients, air, water, and space. The seeds from adult plants make new plants. Are plants living or nonliving things?",
    },
    {
      id: "sand",
      answer: "nonliving",
      screenTwoTxt:
        "Sand is made from pieces of rocks and shells. Sand is in the water, but it doesn’t need water. Sand doesn’t need food. It doesn’t need anything! Is sand a living or nonliving thing?",
    },
    {
      id: "fish",
      answer: "living",
      screenTwoTxt:
        "Fish swim in the water. They move around to find food. They take in air that is in the water. They lay hundreds of eggs at a time that become baby fish called fry. Are fish living or nonliving things?",
    },
    {
      id: "rock",
      answer: "nonliving",
      screenTwoTxt:
        "This rock is beside the water, but it doesn’t need to drink the water. It doesn’t need to eat or breathe air. It doesn’t have baby rocks. Are rocks living or nonliving things?",
    },
  ],

  radioOptions: [
    {
      id: "living",
      text: "Living",
    },
    {
      id: "nonliving",
      text: "Nonliving",
    },
  ],

  screenOneButtons: [
    {
      id: "sun",
      text: "Sun",
    },
    {
      id: "bird",
      text: "Bird",
    },
    {
      id: "water",
      text: "Water",
    },

    {
      id: "cloud",
      text: "Cloud",
    },
    {
      id: "plant",
      text: "Plant",
    },
    {
      id: "deer",
      text: "Deer",
    },
    {
      id: "rock",
      text: "Rocks",
    },
    {
      id: "duck",
      text: "Ducks",
    },
    {
      id: "sand",
      text: "Sand",
    },
    {
      id: "frog",
      text: "Frog",
    },
    {
      id: "fish",
      text: "Fish",
    },
  ],
};

export default data;
