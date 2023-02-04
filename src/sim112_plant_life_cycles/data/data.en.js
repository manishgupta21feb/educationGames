import commonData from "../../app/data/data.en";

const data = {
  greetingMessage: "Hello",
  nextScreenButtonText: "Next Screen",
  backScreenButtonText: "Back Screen",
  buttonLabels: { ...commonData.buttonLabels },
  startUpPopup:
    "Three children want to start a backyard garden. Let's help them learn about the life cycle of plants and how to take care of them! In this activity, you will choose the pictures from the right side of the screen and drag them to the planting table in the correct order.",
  resetLiveText: commonData.resetLiveText,
  resetPopupText: commonData.resetPopupText,
  infoPopupText:
    "Click on the pictures and put them in the correct order on the planting table. Then, match the young plants with the parent plants in the garden.",
  completionScreen: {
    ...commonData.completionPopup,
    content:
      "You have matched the young plants with their parent plants and shown the order of a plant's life cycle! Well done!",
  },
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  pageHeading1:
    "Students will navigate through a plant's life cycle to learn about the order of the life cycle and the changes plants make as they grow.",
  pageHeading2:
    "Students will explore young and parent plants and identify features that young plants have that resemble their parent plants.",
  transitionPopup: {
    ...commonData.transitionPopup,
    content:
      "You have correctly placed the life cycle of a plant in order.  Now the children know what to expect when their plants begin to grow.",
  },

  imageAltPopupText:
    "3 children are in a city park working on a box garden. 2 girls are planting plants in the box & a boy is watering the plants with a watering can.",
  imageAltScreen1: "A gray planting table with two shelves",
  imageAltScreen2:
    "On the left of a raised box garden is a green plant with 6 red tomatoes, and on the right side of the garden is a sunflower.",
  draggableItemsScreen1: [
    {
      id: "scenerio1",
      screenHeading:
        "Place the pictures in order to show what a plant needs to grow.",
      dragItem: [
        {
          id: "sunlight_for_seed",
          label: "Sunlight for a Seed Draggable",
          target: "dropzone4",
          correctMessage:
            "<b>That's right!</b> When a seed gets sunlight, it gets warm, and it will really start to grow! It will grow out of the soil and up toward the sunlight.",
          imageAltText:
            "A fourth red pot full of soil is to the right of the other 3 pots. The Sun is shining on the pot.",
        },
        {
          id: "soil",
          label: "Soil Draggable",
          target: "dropzone1",
          correctMessage:
            "<b>That's right!</b> Plants get water and nutrients from soil. Plants need soil to live. A pot should have soil in it before a seed is planted.",
          imageAltText:
            "A red pot filled with soil is on the left side of the bottom shelf of the planting table. Above the pot is a trowel that is adding soil to the pot.",
        },
        {
          id: "watering_seed",
          label: "Watering a Seed Draggable",
          target: "dropzone3",
          correctMessage:
            "<b>That's right!</b> A seed needs water to grow. When the seed gets water, the seed will start to grow.",
          imageAltText:
            "A third red pot full of soil is on the bottom shelf to the right of the other 2 pots. A blue watering can is above the pot adding water to it.",
        },
        {
          id: "planting_seed",
          label: "Planting a Seed Draggable",
          target: "dropzone2",
          correctMessage:
            "<b>That's right!</b> Seeds are covered in soil. Soil protects the seeds and keeps them warm so they can start growing.",
          imageAltText:
            "On the bottom shelf, a second red pot with soil in it is to the right of the pot with the trowel. A hand is placing a seed in the second pot.",
        },
      ],
    },
    {
      id: "scenerio2",
      screenHeading:
        "We can see how the plant changes once it grows above the soil. Place the pictures in order to show the changes a plant makes during its life cycle.",
      dragItem: [
        {
          id: "adult_plant_with_flowers",
          label: "Adult Plant with Flowers Draggable",
          target: "dropzone3",
          correctMessage:
            "<b>That's right!</b> Once the plant is an adult, it grows flowers. They are colorful and smell! Their color and smell bring insects to help the adult plants make seeds. ",
          imageAltText:
            "A third red pot is to the right of the pot with the young plant. A green adult plant is visible growing in the pot",
        },

        {
          id: "adult_plant",
          label: "Adult Plant Draggable",
          target: "dropzone2",
          correctMessage:
            "<b>That's right!</b> A seedling grows into an adult plant. An adult plant is bigger than a seedling. It has grown a lot more leaves. An adult plant is ready to make new seeds.",
          imageAltText:
            "A second red pot is to the right of the pot with the seedling. A green young plant is visible growing in the pot.",
        },
        {
          id: "adult_plant_with_fruit",
          label: "Adult Plant with Fruit Draggable",
          target: "dropzone4",
          correctMessage:
            "<b>That's right!</b> The flowers make fruit. Fruit has seeds inside it to make new plants. The seeds can be planted, and the life cycle starts all over again.",
          imageAltText:
            "A fourth red pot is to the right of the pot with the adult plant. A green adult plant with red fruit is visible growing in the pot.",
        },
        {
          id: "seedling",
          label: "Seedling Draggable",
          target: "dropzone1",
          correctMessage:
            "<b>That's right!</b> When a seed gets the right amount of water and warmth from sunlight, it grows into a seedling. A seedling is a young plant. It has a stem and a few leaves.",
          imageAltText:
            "A red pot filled with soil is on the left side of the bottom shelf of the planting table. A green seedling is visible growing in the pot.",
        },
      ],
    },
  ],
  droppableScreen1: [
    {
      id: "dropzone_scenerio1",
      dropItem: [
        {
          id: "dropzone1",
          label: "First droppable area of planting table",
          class: "soil",
        },
        {
          id: "dropzone2",
          label: "Second droppable area of planting table",
          class: "planting_seed",
        },
        {
          id: "dropzone3",
          label: "Third droppable area of planting table",
          class: "watering_seed",
        },
        {
          id: "dropzone4",
          label: "Fourth droppable area of planting table",
          class: "sunlight_for_seed",
        },
      ],
    },
    {
      id: "dropzone_scenerio2",
      dropItem: [
        {
          id: "dropzone1",
          label: "First droppable area of planting table",
          class: "seedling",
        },
        {
          id: "dropzone2",
          label: "Second droppable area of planting table",
          class: "adult_plant",
        },
        {
          id: "dropzone3",
          label: "Third droppable area of planting table",
          class: "adult_plant_with_flowers",
        },
        {
          id: "dropzone4",
          label: "Fourth droppable area of planting table",
          class: "adult_plant_with_fruit",
        },
      ],
    },
  ],
  draggableItemsScreen2: [
    {
      id: "screen2",
      screenHeading2:
        "When plants are young, they often look like their parents. The shape of their leaves may look the same. The color of their leaves may look the same. Place the young plant beside its parent.<br><br> Look at the color and shape of the leaves of this young tomato plant. Which plant is its parent?",
      dragItem: [
        {
          id: "young_tomato_plant",
          label: "Young Tomato Plant Draggable",
          target: "dropzone1",
          imageAltText:
            "On the left of a raised box garden is a green plant with 6 red tomatoes & a young, green tomato plant. On the right side of the garden is a sunflower.",
        },
      ],
    },
    {
      id: "screen2value",
      screenHeading2:
        "When plants are young, they often look like their parents. The shape of their leaves may look the same. The color of their leaves may look the same. Place the young plant beside its parent.<br><br>  Look at the color and shape of the leaves of this young flower plant. Which plant is its parent?",
      dragItem: [
        {
          id: "young_flower_plant",
          label: "Young Flower Plant Draggable",
          target: "dropzone2",
          imageAltText:
            "On the left of a raised box garden is a green plant with 6 red tomatoes. On the right side of the garden is a sunflower & a young, green plant.",
        },
      ],
    },
  ],

  droppableScreen2: [
    {
      id: "dropzone_screen2",
      dropItem: [
        {
          id: "dropzone1",
          label: "First Plant Droppable Area",
          class: "young_tomato_plant",
        },
        {
          id: "dropzone2",
          label: "Second Plant Droppable Area",
          class: "young_flower_plant",
        },
      ],
    },
  ],
};

export default data;
