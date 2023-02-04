import globalDataSet from "../../app/data/data.en";
import imgMain from "../assets/images/dragon.png";

const data = {
  activityHeading:
    "Students will identify a food chain and living and nonliving items in a terrarium and explore how they interact with each other.",

  instructionBoxContent:
    "My mom got me a bearded dragon for a pet! Help me take a look around the terrarium I made for her to make sure she has everything she needs to live!",
  InfoBoxContent:
    "Read the description and click on the correct name of the item.",

  buttonLabels: { ...globalDataSet.buttonLabels },

  resetLiveText: globalDataSet.resetLiveText,
  resetMsgContent: globalDataSet.resetPopupText,
  transitionPopup: {
    ...globalDataSet.transitionPopup,
    content:
      "Now that you have explored my bearded dragon’s terrarium, show me what you know!",
  },
  completionPopup: {
    ...globalDataSet.completionPopup,
    content:
      "You have answered all the questions! Now I’m sure my new bearded dragon has everything she needs to live!",
  },

  questionHeading: "Question: -1- of -2-",
  questionText:
    "Look at the item from the terrarium. Is it living, nonliving, or a food chain?",

  correctToastMessage: globalDataSet.correctToastMessage,
  incorrectToastMessage: globalDataSet.incorrectToastMessage,
  mainImg: {
    img: imgMain,
    alt: "A orange lizard called a bearded dragon with spikes on its head and pointy skin on its chin.",
  },
  terrariumAltText:
    "A terrarium with sand on the bottom, a bearded dragon, rock cave, strawberry plant, water bowl, and other plants",
  screenOneQues: [
    {
      srNo: "1",
      id: "question1",

      questionText:
        "<p> I put living and nonliving things in my bearded dragon’s terrarium. Can you see them?</p><p>Bearded dragons depend on living things to eat. Look around the terrarium. Click on a living thing that grows in the ground.</p>",
      answer: "strawberryPlant",
      screenTwoTxt:
        "This <b>living</b> thing is a strawberry plant. The Sun shines on this strawberry plant and helps it grow.  My bearded dragon will eat this plant so she can grow. She will eat these yummy strawberries too!",
      imgText: [
        {
          id: "plantTxt1",
          name: "Plant",
        },
      ],
      alt: "A strawberry plant with a lot of green leaves and red strawberries",
    },
    {
      srNo: "2",
      id: "question2",

      questionText:
        "That plant isn’t the only living thing in this terrarium! Click on the other living thing you see.",
      answer: "beardedDragon",
      screenTwoTxt:
        "The other living thing in this terrarium is my bearded dragon!  She depends on the strawberry plant for food. The strawberry plant depends on the Sun so it can grow. So the Sun helps the plant live, and the plant helps my bearded dragon live! This makes a perfect <b>food chain</b> for my pet!",
      imgText: [
        {
          id: "dragon",
          name: "Bearded dragon",
        },
      ],
      alt: "A orange lizard called a bearded dragon with spikes on its head and pointy skin on its chin",
    },
    {
      srNo: "3",
      id: "question3",

      questionText:
        "Bearded dragons also depend on nonliving things. They need a place to hide and rest. Click on the nonliving thing in the terrarium that makes a good shelter for bearded dragons.",
      answer: "rockCave",
      screenTwoTxt:
        "This rock is <b>nonliving</b>. It doesn’t eat plants. It doesn’t eat anything! But it will make a great place for my bearded dragon to go when she wants to be alone!",
      imgText: [
        {
          id: "rockTxt1",
          name: "Rock cave",
        },
      ],
      alt: "A light brown rock cave for the bearded dragon’s shelter",
    },
    {
      srNo: "4",
      id: "question4",

      questionText:
        "Just like all living things, bearded dragons need to drink. Click on the nonliving thing that bearded dragons can drink.",
      answer: "waterBowl",
      screenTwoTxt:
        "This water is <b>nonliving</b>. It doesn’t breathe or eat. But my bearded dragon will need water to survive. She will also love to play in the water!",
      imgText: [
        {
          id: "waterText1",
          name: "Water",
        },
      ],
      alt: "Water in a bowl made with gray rocks",
    },
  ],

  screenOneButtons: [
    {
      srNo: "1",
      id: "rockCave",
      text: "Rock cave",
    },

    {
      srNo: "2",
      id: "waterBowl",
      text: "Water",
    },

    {
      srNo: "3",
      id: "beardedDragon",
      text: "Bearded dragon",
    },
    {
      srNo: "4",
      id: "strawberryPlant",
      text: "Plant",
    },
  ],

  dashedLine: [
    {
      id: "rock",
    },
    {
      id: "water",
    },
    {
      id: "plant",
    },
    {
      id: "dragon",
    },
  ],

  mcqQuestions: [
    {
      id: "rockQuestion",
      answer: "nonLiving",
      label: [
        {
          id: "rockLabel",
          name: "Rock cave",
        },
      ],
      alt: "A light brown rock cave for the bearded dragon’s shelter",
    },
    {
      id: "plantQuestion",
      answer: "living",
      label: [
        {
          id: "plantLabel",
          name: "Plant",
        },
      ],
      alt: "A strawberry plant with a lot of green leaves and red strawberries",
    },
    {
      id: "foodChainQuestion",
      answer: "foodChain",
      alt: "A food chain that shows how energy is transferred from the Sun to the strawberry plant to the bearded dragon",
      label: [
        {
          id: "sunLabel",
          name: "Sun",
        },
        {
          id: "sPlantLabel",
          name: "Plant",
        },
        {
          id: "dragonLabel",
          name: "Bearded dragon",
        },

        {
          id: "arrowLabe3",
          name: "",
        },
        {
          id: "arrowLabe4",
          name: "",
        },
        {
          id: "helps",
          name: "helps the",
        },
        {
          id: "feed",
          name: "feeds the",
        },
      ],
    },
    {
      id: "waterBowlQuestion",
      answer: "nonLiving",
      alt: "Water in a bowl made with gray rocks",
      label: [
        {
          id: "waterLabel",
          name: "Water",
        },
      ],
    },
  ],

  radioOptions: [
    {
      id: "nonLiving",
      text: "Nonliving",
    },
    {
      id: "living",
      text: "Living",
    },
    {
      id: "foodChain",
      text: "Food chain",
    },
  ],
};

export default data;
