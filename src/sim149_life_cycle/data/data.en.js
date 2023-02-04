import globalDataSet from "../../app/data";
import imgMain from "../assets/images/main.png";
const data = {
  activityHeading:
    "Students will investigate the life cycles of a butterfly and frog. They will then match the life cycle stage names to images that represent the stages.",

  instructionBoxContent:
    "Every living thing has a life cycle. It starts when a plant or animal is born. It ends when the plant or animal dies. Life cycles have different stages. Stages are times in a living thing's life. Let’s investigate the life cycle stages of a butterfly and a frog.",
  InfoBoxContent:
    "Click on the life cycle stage to learn more about it. Then, drag each life cycle stage word to the box under the picture that shows the stage.",

  buttonLabels: { ...globalDataSet.buttonLabels },

  resetLiveText: globalDataSet.resetLiveText,
  resetMsgContent: globalDataSet.resetPopupText,

  completionPopup: {
    ...globalDataSet.completionPopup,
    content:
      "You have investigated and identified the life cycles of a butterfly and a frog. Well done!",
  },
  transitionPopupButterDnD: {
    ...globalDataSet.transitionPopup,
    content: " Next, let’s investigate a frog’s life cycle!",
  },

  correctToastMessage: globalDataSet.correctToastMessage,
  incorrectToastMessage: globalDataSet.incorrectToastMessage,

  correctToastAfterFive: "This is the correct answer.",
  mainImg: {
    img: imgMain,
    alt: "A green and yellow frog with black spots is sitting to the left of an orange and black butterfly.",
  },

  butterFlyFrog: [
    {
      id: "butterfly",
      dropZones: [
        {
          id: "eggs",
          label: "Butterfly life cycle stage 1 drop zone",
        },
        {
          id: "larva",
          label: "Butterfly life cycle stage 2 drop zone",
        },
        {
          id: "pupa",
          label: "Butterfly life cycle stage 3 drop zone",
        },
        {
          id: "adult",
          label: "Butterfly life cycle stage 4 drop zone",
        },
      ],
      rightQuestion: [
        {
          id: "label1",
          ost: "<h2>There are four stages in a butterfly’s life cycle. Each stage is very different! Let’s start by investigating the egg stage.</h2><h3>Click on the <strong>eggs.</strong></h3>",
          nextBtn: "butter_eggs",
        },
        {
          id: "butter_eggs",
          ost: "<p>This is a butterfly’s <strong>egg</strong> stage. Adult butterflies lay their eggs on plants. They can lay hundreds of eggs at a time! The eggs are very tiny. It takes about four days for the eggs to hatch. Then, out come the caterpillars! You might know a caterpillar is also called a <strong>larva!</strong></p><h3>Click on the <strong>larva.</strong></h3>",
          nextBtn: "butter_larva",
        },
        {
          id: "butter_larva",
          ost: "<p>Butterfly <strong>larvae</strong> look like short fat worms with legs. Larvae eat a lot! They eat the plants their eggs were on. They eat and eat and eat. They also grow. Larvae shed their skin when they need to grow. Then, they grow new skin. After the larvae grow enough, they go into a <strong>pupa</strong> stage.</p><h3>Click on the <strong>pupa.</strong></h3>",
          nextBtn: "butter_pupa",
        },
        {
          id: "butter_pupa",
          ost: "<p>The larva wraps itself up in a hard shell. This is called a <strong>pupa.</strong> It is also called a chrysalis. The butterfly does not come out for a while. It does not eat any food. It rests a lot. But, there are big changes happening! Inside, the pupa slowly changes into an <strong>adult</strong> butterfly.</p><h3>Click on the <strong>adult</strong> butterfly.</h3>",
          nextBtn: "butter_adult",
        },
        {
          id: "butter_adult",
          ost: "A butterfly comes out of its pupa as an <strong>adult.</strong> Adult butterflies look very different from the larva that entered the pupa stage. The butterfly can fly.  Female butterflies fly from place to place to find the perfect plant where they can lay their <strong>eggs.</strong> Then, the butterfly’s life cycle starts all over again!",
        },
      ],
      leftHeading: "Butterfly Life Cycle",
      imgAlt:
        "Butterfly life cycle in a circle. Eggs on leaf at top—an arrow around to caterpillar on leaf—next arrow to green pupa—final arrow to adult butterfly",
      leftImages: [
        {
          id: "butter_eggs",
          text: "Eggs",
        },
        {
          id: "butter_larva",

          text: "Larva",
        },
        {
          id: "butter_pupa",

          text: "Pupa",
        },
        {
          id: "butter_adult",

          text: "Adult",
        },
      ],
      transitionPopupOne: {
        ...globalDataSet.transitionPopup,
        content:
          "Now that you have investigated a butterfly’s life cycle, show what you know!",
      },
    },
    {
      id: "frog",
      dropZones: [
        {
          id: "eggs",
          label: "Frog life cycle stage 1 drop zone",
        },
        {
          id: "larva",
          label: "Frog life cycle stage 2 drop zone",
        },
        {
          id: "pupa",
          label: "Frog life cycle stage 3 drop zone",
        },
        {
          id: "adult",
          label: "Frog life cycle stage 4 drop zone",
        },
      ],
      rightQuestion: [
        {
          id: "label1",
          ost: "<h2>Just like the butterfly, there are four stages of a frog’s life cycle. Each stage is very different too! Let’s start by investigating the egg stage.</h2><h3>Click on the <strong>eggs.</strong></h3>",
          nextBtn: "frog_eggs",
        },
        {
          id: "frog_eggs",
          ost: "<p>This is a frog’s <strong>egg</strong> stage. Adult frogs lay their eggs in shallow, still water. They lay a lot of eggs at a time. The tiny eggs have black dots surrounded by jellylike material.  It takes one to three weeks for the eggs to hatch. Then, out come the tadpoles! Another name for tadpoles is <strong>larvae!</strong></p><h3>Click on the <strong>tadpole.</strong></h3>",
          nextBtn: "frog_larva",
        },
        {
          id: "frog_larva",
          ost: "<p>Frog <strong>larvae</strong> look more like fish than frogs! They have a head, gills, and a tail fin. They swim in the water. Tadpoles eat small plants. Around six to twelve weeks, the larvae become <strong>pupae.</strong></p><h3>Click on the frog <strong>pupa.</strong></h3>",
          nextBtn: "frog_pupa",
        },
        {
          id: "frog_pupa",
          ost: "<p>Like butterflies, tadpoles change. They become froglets during their <strong>pupa</strong> stage. They grow lungs and legs. They start eating bugs and small fish. They continue to grow and change for two to four years. When froglets are ready, they leave their water home. With lungs and legs, they can live on land! They are now <strong>adult</strong> frogs!</p><h3>Click on the <strong>adult</strong> frog.</h3>",
          nextBtn: "frog_adult",
        },
        {
          id: "frog_adult",
          ost: "<strong>Adult</strong> frogs look very different from tadpoles! They can live on land, but they also like to go swimming. Female frogs will look for water where they can lay <strong>eggs</strong>. Then, the frog’s life cycle starts all over again!",
        },
      ],
      leftHeading: "Frog Life Cycle",
      leftImages: [
        {
          id: "frog_eggs",

          text: "Eggs",
        },
        {
          id: "frog_larva",

          text: "Tadpole",
        },
        {
          id: "frog_pupa",

          text: "Pupa",
        },
        {
          id: "frog_adult",

          text: "Adult",
        },
      ],
      imgAlt:
        "Frog life cycle is shown in a circle. Group of eggs at top—arrow around to tadpole—next arrow to tadpole with front legs—final arrow to adult frog",
      transitionPopupOne: {
        ...globalDataSet.transitionPopup,
        content:
          "Now that you have investigated a frog’s life cycle, show what you know!",
      },
    },
  ],
  butterFlyLeftHeading: "Butterfly Life Cycle",

  dndLabel:
    "Drag and drop the life cycle stage names into the boxes below the life cycle stages.",
  draggables: [
    {
      id: "eggs",
      text: "Eggs",
      altText: "Eggs draggable",
    },
    {
      id: "larva",
      text: "Larva",
      altText: "Larva draggable",
    },
    {
      id: "pupa",
      text: "Pupa",
      altText: "Pupa draggable",
    },
    {
      id: "adult",
      text: "Adult",
      altText: "Adult draggable",
    },
  ],
  draggables2: [
    {
      id: "eggs",
      text: "Eggs",
      altText: "Eggs draggable",
    },
    {
      id: "larva",
      text: "Tadpole",
      altText: "Tadpole draggable",
    },
    {
      id: "pupa",
      text: "Pupa",
      altText: "Pupa draggable",
    },
    {
      id: "adult",
      text: "Adult",
      altText: "Adult draggable",
    },
  ],

  liveTexts: [
    {
      id: "butter_eggs",
      text: "A green leaf has 5 white, oval eggs on it",
    },
    {
      id: "butter_larva",
      text: "A larva is sitting on a green leaf. It is a caterpillar with green, black, and white stripes",
    },
    {
      id: "butter_pupa",
      text: "The pupa is light green and is wrapped around the larva",
    },
    {
      id: "butter_adult",
      text: "A butterfly with its wings open. It is orange and black with white spots",
    },
    {
      id: "frog_eggs",
      text: "A group of 17 circular eggs that are yellow in color with black spots in the middle",
    },
    {
      id: "frog_larva",
      text: "A greenish-brown tadpole, or larva, with a small mouth, wide tail, and black eyes",
    },
    {
      id: "frog_pupa",
      text: "A greenish-brown pupa, which is a tadpole with 2 front legs, has a small mouth, a wide tail, and black eyes",
    },
    {
      id: "frog_adult",
      text: "An adult frog that is green and brown in color with black spots and 4 legs",
    },
  ],
};

export default data;
