import commonData from "../../app/data/data.en";

//Images Frog
import frog from "../assets/images/frog/frog.png";
import frogEggs from "../assets/images/frog/frogEggs.png";
import tadpole from "../assets/images/frog/tadpole.png";
import tadpoleWithTwoLegs from "../assets/images/frog/tadpole_with_2_legs.png";

//Images Butterfly
import butterfly from "../assets/images/butterfly/butterfly.png";
import caterpillar from "../assets/images/butterfly/caterpillar.png";
import chrysalis from "../assets/images/butterfly/chrysalis.png";
import butterflyEggs from "../assets/images/butterfly/butterflyEggs.png";

//Images Beetle
import beetle from "../assets/images/beetle/beetle.png";
import beetleEggs from "../assets/images/beetle/beetleEggs.png";
import larva from "../assets/images/beetle/larva.png";
import pupa from "../assets/images/beetle/pupa.png";

//Images Lima Bean
import limaBean from "../assets/images/lima_bean/bean.png";
import germination from "../assets/images/lima_bean/germination.png";
import plant from "../assets/images/lima_bean/plant.png";
import seed from "../assets/images/lima_bean/seed.png";

//Images Cricket
import cricket from "../assets/images/cricket/cricket.png";
import cricketEggs from "../assets/images/cricket/cricketEggs.png";
import nymph from "../assets/images/cricket/nymph.png";


const data = {
  greetingMessage: "Hello",
  nextScreenButtonText: "Next Screen",
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  resetLiveText: commonData.resetLiveText,
  buttonLabels: { ...commonData.buttonLabels },
  resetPopupText: commonData.resetPopupText,
	completionPopup: {
    ...commonData.completionPopup,
    content: "You have completed the simulation.",
  },
  observationMotive:
    "In this simulation, the learner will drag and drop images to build and illustrate the correct order of the steps in the life cycles of various organisms.",
  introText:
    "Plants and animals have life cycles! Let's explore the life cycles of a cricket, a beetle, a butterfly, a lima bean, and a frog.",
  infoText:
    "All living things have a life cycle, but those life cycles can look different.  Explore the life cycles of different organisms, and see what patterns you notice.",

  istructionText: [
    "Click on the picture of the organism to learn more about its life cycle.",
    "Drag and drop the life stage into the correct place to illustrate the life cycle. The life cycle of the organism begins at 1 and ends at 4.",
    "Drag and drop the life stage into the correct place to illustrate the life cycle. The life cycle of the organism begins at 1 and ends at 3.",
  ],

  lives: [
    {
      id: "frog",
      title: "Frog",
      img: frog,
    },
    {
      id: "butterfly",
      title: "Butterfly",
      img: butterfly,
    },
    {
      id: "beetle",
      title: "Beetle",
      img: beetle,
    },
    {
      id: "limaBean",
      title: "Lima bean",
      img: limaBean,
    },
    {
      id: "cricket",
      title: "Cricket",
      img: cricket,
    },
  ],

	liveDropText: "dropped on",
	draggableText: "draggable",

	draggables: {
		frog: [
			{
				id: "frogEggs",
				label: "Eggs",
				source: "one",
				img: frogEggs,
			},
			{
				id: "frogTadpole",
				label: "Tadpole",
				source: "two",
				img: tadpole
			},
			{
				id: "frogTadpoleWithTwoLegs",
				label: "Tadpole with 2 legs",
				source: "three",
				img: tadpoleWithTwoLegs
			},
			{
				id: "frog",
				label: "Frog",
				source: "four",
				img: frog
			},
		],
		beetle: [
			{
				id: "beetleEggs",
				label: "Eggs",
				source: "one",
				img: beetleEggs
			},
			{
				id: "beetleLarva",
				label: "Larva",
				source: "two",
				img: larva
			},
			{
				id: "beetlePupa",
				label: "Pupa",
				source: "three",
				img: pupa
			},
			{
				id: "beetle",
				label: "Bettle",
				source: "four",
				img: beetle
			},
		],
		limaBean: [
			{
				id: "beanSeed",
				label: "Seed",
				source: "one",
				img: seed
			},
			{
				id: "beanGermination",
				label: "Germination",
				source: "two",
				img: germination
			},
			{
				id: "beanPlant",
				label: "Plant",
				source: "three",
				img: plant
			},
			{
				id: "bean",
				label: "Bean",
				source: "four",
				img: limaBean
			},
		],
		butterfly: [
			{
				id: "butterflyEggs",
				label: "Eggs",
				source: "one",
				img: butterflyEggs
			},
			{
				id: "butterflyCaterpillar",
				label: "Caterpillar",
				source: "two",
				img: caterpillar
			},
			{
				id: "butterflyChrysalis",
				label: "Chrysalis",
				source: "three",
				img: chrysalis
			},
			{
				id: "butterfly",
				label: "Butterfly",
				source: "four",
				img: butterfly
			},
		],
		cricket: [
			{
				id: "cricketEggs",
				label: "Eggs",
				source: "one",
				img: cricketEggs
			},
			{
				id: "cricketNymph",
				label: "Nymph",
				source: "two",
				img: nymph
			},
			{
				id: "cricket",
				label: "Cricket",
				source: "three",
				img: cricket
			}
		],
	},

	droppables: [
		{
			id: "one",
			value: "One",
			label: "Lifecycle stage 1 dropzone",
			accept: "one",
			count: "1"
		},
		{
			id: "two",
			value: "Two",
			label: "Lifecycle stage 2 dropzone",
			accept: "two",
			count: "2"
		},
		{
			id: "three",
			value: "Three",
			label: "Lifecycle stage 3 dropzone",
			accept: "three",
			count: "3"
		},
		{
			id: "four",
			value: "Four",
			label: "Lifecycle stage 4 dropzone",
			accept: "four",
			count: "4"
		}
	]
};

export default data;
