import commonData from "../../app/data/data.en";

const data = {
  greetingMessage: "Hello",
  nextScreenButtonText: "Next Screen",
  backScreenButtonText: "Back Screen",
  buttonLabels: { ...commonData.buttonLabels },

  foodChainData: [
    {
      id: "sun",
      srNo: "1",
      text: "Sun",
      label: "Sun",
      description:
        "I am the start of every food chain on the farm. I give energy to the plants, which helps them grow. Without me, plants would die and animals would have nothing to eat.",
    },
    {
      id: "hawk",
      srNo: "2",
      text: "Hawk",
      label: "Hawk",
      description:
        " There are lots of tasty animals down there! I’m a consumer of small animals like rabbits, snakes, squirrels, and mice. Without them, I would not get the energy I need to live.",
    },
    {
      id: "wheat-field",
      srNo: "3",
      text: "Wheat field",
      label: "Wheat field",
      description:
        "I get my energy from the Sun. Because I can’t move around, I make my own food. That makes me a producer! Sometimes, the wind blows my seeds to other places, or an animal eats my seeds, and new wheat plants grow.",
    },
    {
      id: "farmer",
      srNo: "4",
      text: "Farmer",
      label: "Farmer",
      description:
        "Taking care of the farm is hard work, but I love getting energy from fresh vegetables and cow’s milk. I’m a consumer of both plants and animals. I also plant the sunflower seeds in different places so new sunflowers will grow!",
    },
    {
      id: "coyote",
      srNo: "5",
      text: "Coyote",
      label: "Coyote",
      description:
        " I try to hide from the farmer because he doesn’t like that I get my energy from his animals and plants. I am a consumer of most of the living organisms on the farm. After I eat the sunflower and wheat seeds, I go back into the forest. Some seeds get stuck to my fur and then fall off in new places. Seeds also come out in my waste and start to grow.",
    },

    {
      id: "cow",
      srNo: "6",
      text: "Cow",
      label: "Cow",
      description:
        " I’m a consumer of plants. The farmer gives me wheat from the field to eat. I eat grass sometimes too. The energy from plants helps keep me healthy.",
    },
    {
      id: "squirrel",
      srNo: "7",
      text: "Squirrel",
      label: "Squirrel",
      description:
        "I love sunflower seeds! That means I’m a consumer. I like to bury them in different places, but sometimes I forget where I buried them! They give me the energy I need, and I help plant new sunflowers! We depend on each other!",
    },

    {
      id: "mouse",
      srNo: "8",
      text: "Mouse",
      label: "Mouse",
      description:
        " I love living on the farm! I get my energy from all kinds of plants, including wheat and sunflower seeds. There are lots of scary animals here, though. I hide in the grass so they won’t eat me. I don’t want to give them my energy yet!",
    },

    {
      id: "dog",
      srNo: "9",
      text: "Dog",
      label: "Dog",
      description:
        " I’m a consumer! I get the energy I need from the food the farmer feeds me because it is made from meat and plants. He feeds me near the garden. Sometimes the sunflower seeds get stuck between my toes and in my fur. I shake and shake, which helps spread the seeds in new places so they can grow.",
    },
    {
      id: "snake",
      srNo: "10",
      text: "Snake",
      label: "Snake",
      description:
        "That mouse and rabbit sure look good! I don’t eat plants, but I’m a consumer of small animals. I swallow them whole! That’s where I get my energy!",
    },
    {
      id: "sunflower",
      srNo: "11",
      text: "Sunflower",
      label: "Sunflower",
      description:
        "I get my energy to grow from the Sun. I’m a producer because I make my own food. The bees help pollinate me so I can make more sunflowers, and the farmer and his dog help carry my seeds to new places where new plants grow.",
    },

    {
      id: "bees",
      srNo: "12",
      text: "Bees",
      label: "Bees",
      description:
        "I’m a consumer of sunflower nectar. It tastes so sweet! The sunflowers give me energy, and I pollinate the sunflowers. When I eat the nectar, the sunflower’s pollen sticks to my legs and body. Then, I take the pollen to other sunflowers. We depend on each other!",
    },
    {
      id: "rabbit",
      srNo: "13",
      text: "Rabbit",
      label: "Rabbit",
      description:
        "I’m a consumer of grass and those yummy carrots growing in the garden. I depend on their energy to live. I also love to eat sunflower seeds. Sometimes, I carry them to a new place to eat later, but I forget where I put them and they start growing!",
    },
  ],

  infoTextOne: "Click on a button to learn how the organism gets its energy.",
  infoTextTwo: "Drag each organism between two arrows in the food chain.",

  headingOne:
    "Students will click on objects in a farm scene to explore food chains that include producers and consumers and how some plants depend on other living things for pollination and to move their seeds around.",
  startInfo:
    "Welcome to STEMscopes Farm! We have quite a few plants and animals that depend on each other to live. Let’s explore the food chains on the farm!",

  transitionPopup: {
    ...commonData.transitionPopup,
    content:
      "The STEMscopes Farm sure is a great place for energy to move from the Sun to producers and then to consumers. Complete this challenge by making one food chain from the farm that shows the flow of energy!",
  },
  completionPopup: {
    ...commonData.completionPopup,
    content:
      "You have successfully made one of the food chains from the STEMscopes Farm. Organisms depend on each other for many things, including energy, pollination, and moving seeds around!",
  },

  pageHeadingOne:
    "Click on an object to learn about how it depends on other organisms at the farm.",
  pageHeadingTwo:
    "Create a food chain by dragging and dropping the organisms between the arrows to show how energy moves.",

  draggables: [
    {
      srNo: 1,
      id: "sunflower",
      label: "Sunflower",
      altText: "sunflower",
      text: "Sunflower",
      maxDrops: 1,
      totalDrops: 0,
    },
    {
      srNo: 2,
      id: "mouse",
      label: "Mouse",
      altText: "mouse",
      maxDrops: 1,
      totalDrops: 0,
    },
    {
      srNo: 3,
      id: "sun",
      label: "Sun",
      altText: "sun",
      maxDrops: 1,
      totalDrops: 0,
    },
    {
      srNo: 4,
      id: "hawk",
      label: "Hawk",
      altText: "hawk",
      maxDrops: 1,
      totalDrops: 0,
    },
    {
      srNo: 5,
      id: "snake",
      label: "Snake",
      altText: "snake",
      maxDrops: 1,
      totalDrops: 0,
    },
  ],

  droppables: [
    {
      srNo: 1,
      id: "dropzone1",
      // label: "Stage one DropZone1",
      // altText: "Stage one DropZone1",
      label: "First stage of food chain dropzone",
      altText: "First stage of food chain dropzone",
      dragType: "",
    },
    {
      srNo: 2,
      id: "dropzone2",
      label: "Second stage of food chain dropzone",
      altText: "Second stage of food chain dropzone",
      dragType: "",
    },
    {
      srNo: 3,
      id: "dropzone3",
      label: "Third stage of food chain dropzone",
      altText: "Third stage of food chain dropzone",
      dragType: "",
    },
    {
      srNo: 4,
      id: "dropzone4",
      label: "Fourth stage of food chain dropzone",
      altText: "Fourth stage of food chain dropzone",
      dragType: "",
    },
    {
      srNo: 5,
      id: "dropzone5",
      label: "Fifth stage of food chain dropzone",
      altText: "Fifth stage of food chain dropzone",
      dragType: "",
    },
  ],

  rightMsg: commonData.correctToastMessage,
  wrongMsg: commonData.incorrectToastMessage,
  resetLiveText: commonData.resetLiveText,
  resetPopupText: commonData.resetPopupText,

  buttonLabels: { ...commonData.buttonLabels },
  onDropText: "-1- dropped at -2-",
  draggable: "draggable",
  imageAlt: "Image showing farm",
  droppedText: "dropped",
};

export default data;
