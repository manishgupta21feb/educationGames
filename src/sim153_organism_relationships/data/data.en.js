import globalCommonData from "../../app/data/data.en";

const data = {
  mainImgAlt: "A rain forest with a waterfall in the background & different plants on the forest floor; a large, decaying log & mushrooms also on the forest floor",
  mainHeading:
    "In nature, there are often winners and losers. In predatory relationships, there are those that eat and those that are eaten. Similarly, organisms compete for abiotic resources like sunlight, space, water, and soil. The ones that win have a better chance at survival.<br></br>Relationships between organisms are not always that clear. There are several types of relationships that do not result in winners and losers. In any habitat, relationships between organisms result in benefits and costs for both organisms. ",
  dragAndDropHeading: [
    {
      srNo: "1",
      id: "heading1",
      isActive: "understoryplants",
      headingText:
        "Our first relationship is <b>competition</b>. When organisms compete, they work against each other toward the same goal. Plants in the rain forest must compete with other plants to obtain sunlight and nutrients. Click on the understory plants and drag them to your new rain forest to see how they compete for resources.",
    },

    {
      srNo: "2",
      id: "heading2",
      isActive: "kapoktree",
      headingText:
        "Now, drag the kapok tree to continue building your rain forest.",
    },
    {
      srNo: "3",
      id: "heading3",
      isActive: "vine",
      headingText: "Click and drag the vine to add it to the rain forest.",
    },
    {
      srNo: "4",
      id: "heading4",
      isActive: "bromeliad",
      headingText:
        "Find another plant that would have a <b>commensal</b> relationship with the kapok. Drag and drop it onto the kapok tree.",
    },
    {
      srNo: "5",
      id: "heading5",
      isActive: "frog",
      headingText:
        "Now, find an animal that would benefit from living in the bromeliad but not hurt it.",
    },
    {
      srNo: "6",
      id: "heading6",
      isActive: "ant",
      headingText:
        "The frog might eat ants that live on the kapok tree. This is <b>predation</b>, a kind of relationship where one species interacts with another by consuming it. There are numerous species of ants in the rain forest, one of which is the leaf-cutter ant. Now, let’s look at relationships with the leaf-cutter ant. Click on the leaf-cutter ant and drag it to the rain forest.",
    },
  ],

  draggableItems: [
    {
      id: "understoryplants",
      label: "Understory plants",
      ariaLabel: "Understory Plants Draggable",
      imageAltText: "A large flowering plant with bright pink petals was added to the soil on the forest floor.",
      popupMessage:
        "Great! Plants like corpse flowers have to compete with other plants for many resources, including sunlight and pollinators. To attract pollinators, the corpse flower produces a substance that smells like rotten flesh. This smell attracts flies, and the flies help pollinate the corpse flower. Some of the other plants attract pollinators with bright flowers, like orchids. These grow on the sides of trees to get the space they need. Sunlight is in short supply here, so plants like the elephant ear may grow huge leaves to gather as much sunlight as possible.",
      srNo: 1,
    },
    {
      id: "kapoktree",
      label: "Kapok tree",
      ariaLabel: "Kapok Tree Draggable",
      imageAltText: "A very large kapok tree with a wide trunk and many branches was added to the forest floor.",
      popupMessage: " Great! Kapok trees have a relationship with vines.",
      srNo: 2,
    },
    {
      id: "vine",
      label: "Vine",
      ariaLabel: "Vine Draggable",
      imageAltText: "Green vines with pink flowers were added to the kapok tree.",
      popupMessage:
        "Vines like this <b>compete</b> with other plants for abiotic resources like sunlight. To give them an advantage, vines use whatever means they can to reach the highest, sunniest places in the canopy. In this case, the vine uses the height of the kapok to reach the sun, and the kapok is not affected. We call this relationship <b>commensalism</b>.",
      srNo: 3,
    },
    {
      id: "bromeliad",
      label: "Bromeliad",
      ariaLabel: "Bromeliad Draggable",
      imageAltText: "A flowering plant with red flowers was added to one of the branches of the kapok tree. This plant attaches to the tree far from the forest floor.",
      popupMessage:
        "Right! This flowering plant is called a bromeliad. Some people call them air plants. This is another commensal relationship because the bromeliad gets a strong place to anchor its roots, and it does not damage the kapok tree. In the meantime, the kapok does not benefit from this relationship.",
      srNo: 4,
    },
    {
      id: "frog",
      label: "Frog",
      ariaLabel: "Frog Draggable",
      imageAltText: "A yellow frog with brown spots was added and sits on leaves of the bromiliad plant.",
      popupMessage:
        "That's correct! This frog can lay its eggs in the pools of water inside the bromeliad. Some scientists think the plant may also benefit from the nitrogen in the frog's waste because nitrogen acts as fertilizer. If the scientists are correct, then this is an example of <b>mutualism</b> where both organisms in a relationship benefit from having one another around. This is the ultimate win-win relationship in nature.",
      srNo: 5,
    },
    {
      id: "ant",
      label: "Leaf-cutter ant",
      ariaLabel: "Leaf-cutter Ant Draggable",
      imageAltText: "A leaf-cutter ant was added to the kapok tree. The leaf-cutter ant is walking up the tree with a freshly cut leaf in its mouth.",
      popupMessage:
        "Life for a leaf-cutter ant is hard! When it's not being hunted by predators, it has to watch out for parasites like the phorid fly. In a <b>parasitic</b> relationship, one organism benefits while the other suffers and may lose its life. In this case, the phorid fly will lay its eggs inside of the ant, and the offspring will eventually kill the ant.",
      srNo: 6,
    },
  ],

  dropzoneArea: [
    {
      id: "dropzone",
      label: "rainforest droppable area",
    },
  ],
  equationsData: [
    {
      srNo: "1",
      id: "question1",
      questionText:
        " The leaf-cutter ants have a relationship with another organism where they both benefit. The leaf-cutter ants give something to this species, and they benefit in return. What type of relationship is this?",
      equationOptions: [
        {
          id: "parasitism",
          disabled: false,
          text: "Parasitism",
          label: "Parasitism",
        },
        {
          id: "commensalism",
          disabled: false,
          text: "Commensalism",
          label: "Commensalism",
        },
        {
          id: "mutualism",
          disabled: false,
          text: "Mutualism",
          label: "Mutualism",
        },
        {
          id: "predation",
          disabled: false,
          text: "Predation",
          label: "Predation",
        },
      ],
      answer: "mutualism",
    },

    {
      srNo: "2",
      id: "question2",
      questionText:
        "When army ants hunt, they scare insects, and they run out into the open where antbirds feast. The antbirds benefit, and the army ants neither benefit nor suffer. In which type of relationship does one organism enjoy a benefit while the other is unaffected?",
      equationOptions: [
        {
          id: "predation",
          disabled: false,
          text: "Predation",
          label: "Predation",
        },
        {
          id: "mutualism",
          disabled: false,
          text: "Mutualism",
          label: "Mutualism",
        },
        {
          id: "competition",
          disabled: false,
          text: "Competition",
          label: "Competition",
        },
        {
          id: "commensalism",
          disabled: false,
          text: "Commensalism",
          label: "Commensalism",
        },
      ],
      answer: "commensalism",
    },
    {
      srNo: "3",
      id: "question3",
      questionText:
        "Monkeys must avoid being eaten while roaming the rain forest. Danger lurks. In this relationship, one organism will eat the other. What kind of relationship is this?",
      equationOptions: [
        {
          id: "parasitism",
          disabled: false,
          text: "Parasitism",
          label: "Parasitism",
        },
        {
          id: "competition",
          disabled: false,
          text: "Competition",
          label: "Competition",
        },
        {
          id: "predation",
          disabled: false,
          text: "Predation",
          label: "Predation",
        },
      ],
      answer: "predation",
    },
    {
      srNo: "4",
      id: "question4",
      questionText:
        " Several organisms have the same goal. In this case, big cats like leopards and tigers want the same food as the jaguar. What kind of relationship is this?",
      equationOptions: [
        {
          id: "parasitism",
          disabled: false,
          text: "Parasitism",
          label: "Parasitism",
        },
        {
          id: "competition",
          disabled: false,
          text: "Competition",
          label: "Competition",
        },
        {
          id: "predation",
          disabled: false,
          text: "Predation",
          label: "Predation",
        },
      ],
      answer: "competition",
    },
  ],

  greetingMessage: "Hello",
  nextScreenButtonText: "Next Screen",
  backScreenButtonText: "Back Screen",
  buttonLabels: { ...globalCommonData.buttonLabels },
  startUpPopup:
    "Welcome to the great outdoors—where relationships are where it's at!<br></br>Today, you will build a rain forest ecosystem and learn about some of the relationships among organisms in this area.",
  resetLiveText: globalCommonData.resetLiveText,
  resetPopupText: globalCommonData.resetPopupText,
  correctToastMessage: globalCommonData.correctToastMessage,
  incorrectToastMessage: globalCommonData.incorrectToastMessage,
  questionHeading: "Question: -1- of -2-",
  activityHeading:
    "Students will build their own rain forest by reading about the five types of relationships and choosing the organisms that exemplify that relationship. Students will choose the type of relationship described in the on screen text.",

  infoPopupText:
    "As you read through the simulation, click and drag the organism to the rain forest. It will snap into place.",
  completionScreen: {
    ...globalCommonData.completionPopup,
    content:
      "You have successfully described different relationships in the rain forest!",
  },
  transitionPopup: {
    ...globalCommonData.transitionPopup,
    content:
      "Now, it's your turn to see if you can identify the organism relationships. Read each scenario, and select the organism relationship it describes.",
  },
};

export default data;