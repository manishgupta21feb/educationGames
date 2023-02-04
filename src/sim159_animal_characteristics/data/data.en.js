import commonData from "../../app/data";

const data = {
  ...commonData.buttonLabels,
  mcq1: [
    {
      type: "bear",
      id: "bear_fur",
      frames: ["fur"],
      answer: [`live`],
      description: `black bear fur`, // no translation required
      imageAlt: `black bear fur`,
      text: [
        `Black bears have fur that helps keep them warm. Their fur also helps keep water off their bodies.`,
        `Fur helps black bears–`,
      ],
    },
    {
      type: "bear",
      id: "bear_claws",
      answer: [`move`],
      frames: ["claws"],
      description: `four black bear legs with short claws visible`, // no translation required
      imageAlt: `four black bear legs with short claws visible`,
      text: [
        `Black bears have four legs. They can run very fast. Their sharp claws help them climb trees.`,
        `Legs help black bears–`,
      ],
    },
    {
      type: "bear",
      answer: [`eat`],
      id: "bear_teeth_and_claw",
      frames: ["teeth", "claws_legs"],
      description: `bear teeth and bear claw`, // no translation required
      imageAlt: `bear teeth and bear claw`,
      text: [
        `Black bears have both sharp teeth and flat teeth, just like you! They use their teeth to help them 
        chew grass, berries, and meat. Their sharp claws tear apart tree branches to look for insects.`,
        `Teeth and claws help black bears–`,
      ],
    },
    {
      type: "penguin",
      answer: [`live`],
      frames: ["feathers"],
      id: "penguin_feathers",
      description: `emperor penguin feathers`, // no translation required
      imageAlt: `emperor penguin feathers`,
      text: [
        `Emperor penguins have two layers of feathers on their bodies and legs to help 
        them stay warm. Their feathers also protect them from very cold water.`,
        `Feathers help emperor penguins–`,
      ],
    },
    {
      type: "penguin",
      answer: [`move`],
      frames: ["legs", "flippers"],
      id: "penguin_legs_claws_flippers",
      description: `emperor penguin legs, claws, and flippers`, // no translation required
      imageAlt: `emperor penguin legs, claws, and flippers`,
      text: [
        `Emperor penguins stand on two legs. They use their strong claws to help them hold on to the ice. Penguins 
          also use their feet to push them as they slide on their bellies and their flippers to swim in the water.`,
        `Legs, claws, and flippers help emperor penguins–`,
      ],
    },
    {
      type: "penguin",
      answer: [`eat`],
      frames: ["beak"],
      id: "penguin_beak",
      description: `emperor penguin beak`, // no translation required
      imageAlt: `emperor penguin beak`,
      text: [
        `Emperor penguins have strong beaks that are long and flat. Their beaks help them catch fish and other animals in the ocean.`,
        `Beaks help emperor penguins–`,
      ],
    },
  ],
  mcq2: [
    {
      id: "bear",
      type: "bear",
      answer: [`fur`, `legs`],
      description: `Black adult black bear and brown cub from Launch Screen.`, // no translation required
      imageAlt: `Black adult black bear and brown cub.`,
      text: [
        `Adult female black bears have young called cubs. Select two ways this black bear cub and its parent look the same.`,
      ],
    },
    {
      id: "penguin",
      type: "penguin",
      answer: [`beaks`, `feathers`],
      description: `Black and white emperor penguin and gray young penguin from Launch Screen.`, // no translation required
      imageAlt: `Black and white emperor penguin and gray young penguin.`,
      text: [
        `Adult female emperor penguins have young called chicks. Select two ways this chick and its parent look the same.`,
      ],
    },
  ],
  mcq1Options: [
    {
      id: "live",
      text: "live in their habitat.",
    },
    {
      id: "move",
      text: "move.",
    },
    {
      id: "eat",
      text: "eat.",
    },
  ],
  mcq2Options: {
    bear: [
      {
        id: "fur",
        text: "Both have fur.",
      },
      {
        id: "size",
        text: "Both are the same size.",
      },
      {
        id: "color",
        text: "Both are the same color.",
      },
      {
        id: "legs",
        text: "Both have four legs.",
      },
    ],
    penguin: [
      {
        id: "feathers",
        text: "Both have feathers.",
      },
      {
        id: "color",
        text: "Both are the same color.",
      },
      {
        id: "beaks",
        text: "Both have beaks.",
      },
      {
        id: "size",
        text: "Both are the same size.",
      },
    ],
  },
  resetLiveText: commonData.resetLiveText,
  resetPopupText: commonData.resetPopupText,
  correctToastMessage: commonData.correctToastMessage,
  mcqQuestionHeading: commonData.questionCounterString2,
  incorrectToastMessage: commonData.incorrectToastMessage,
  transitionPopup: {
    ...commonData.transitionPopup,
    content: `Different external animal characteristics help animals live in their habitats, move, and eat. 
              Now, let's see which external characteristics of animal parents and their young look alike.`,
  },
  completionPopup: {
    ...commonData.completionPopup,
    content: `You have named two ways animal parents and their young look alike!`,
  },
  infoPopupText: {
    screen1: `Click on the answer that shows how the animal characteristic helps the animal.`,
    screen2: `Click on two ways the adult and its young look the same.`,
  },
  activityDescription: `Students will identify which external animal characteristics help animals live in 
                        their environment, move, eat, and how external characteristics of adults and their 
                        young resemble each other.`,
  introductionPopupText: `Animals have certain external characteristics that help them survive in their habitats. 
                          Choose whether certain characteristics of black bears and emperor penguins help them live 
                          in their habitats, move from place to place, or get food to eat.`,
  introductionPopupImage1Alt: `bear with a cub`,
  introductionPopupImage2Alt: `penguin with a young penguin`,
};

export default data;
