import commonData from "../../app/data";
import mainImg from "../assets/images/jungle.png";

const data = {
  buttonLabels: { ...commonData.buttonLabels },

  activityHeading:
    "In this simulation, the learner will investigate physical traits of plants and animals as well as behaviors of animals and sort the cards into two groups based on those that are inherited and those that are learned or acquired.",
  instructionBoxContent:
    "Living organisms have traits. Some are how they behave, and some are how they look. Explore behavioral and physical traits further in this simulation.",

  behaviorsInstinctCorrect:
    "Yes! This behavior is an INSTINCT. Baby animals are born with these behaviors, like breathing and seeking food.",
  behaviorsLearnedCorrect:
    "Yes! This behavior is LEARNED. The animal gains this skill through experience or learning and must practice it, like walking or hunting.",
  behaviorIncorrect:
    "No, this is not right. Remember, animals are born with instincts but must practice and learn other behaviors.",

  physicalInheritedCorrect:
    "Yes! This trait is INHERITED. Young organisms get these traits from their biological parents.",
  physicalAcquiredCorrect:
    "Yes! This trait is ACQUIRED. The living organism gets this physical trait through interactions with its environment.",
  physicalIncorrect:
    "No, this is not right. Remember, inherited traits come from biological parents, while acquired traits come from things that happen in the environment.",
  mainImg: {
    img: mainImg,
    alt: "Screen One alt text ",
  },
  resetLiveText: commonData.resetLiveText,
  resetMsgContent: commonData.resetPopupText,
  completionPopup: {
    ...commonData.completionPopup,
    content: "You have successfully completed the simulation.",
  },

  defaultScreenText:
    "Click on either the Physical traits or Behavioral traits card to begin the simulation.",
  defaultInfo: "Choose a trait to explore.",
  screenOneContent: [
    {
      id: "physical",
      btnText: "Physical traits",
      alt: "Physical Traits image alt",
    },
    {
      id: "behavior",
      btnText: "Behavioral traits",
      alt: "Behavioral Traits image alt",
    },
  ],
  questionHeading: "-1- of 8",
  screensData: [
    {
      id: "physical",
      noChangeTxt:
        "Many physical traits are passed down genetically from parent to child. Physical traits are usually parts of an organism's physical appearance, the way a living thing looks. This inheritance of physical traits explains why elephants look like elephants; they get their physical traits directly from their biological parents. Some physical traits are not inherited; they are acquired. These are physical traits that are influenced by the environment―for example, an elephant that has a broken tusk.",
      noChangeTxtTwo: "Choose whether the trait is inherited or acquired.",
      infoText:
        "An inherited trait is one the organism is born with, and an acquired trait is one that develops through interactions with the environment.",
      mcqQuestions: [
        {
          id: "plant",
          questionTxt: "One plant has brown spots from disease.",
          answer: "acquired",
        },
        {
          id: "banana",
          questionTxt: "A banana plant has long yellow fruit.",
          answer: "inherited",
        },
        {
          id: "buffalo",
          questionTxt: "A buffalo has a large scar on its back.",
          answer: "acquired",
        },
        {
          id: "palm",
          questionTxt: "A palm tree has round coconuts as fruit.",
          answer: "inherited",
        },
        {
          id: "sunlight",
          questionTxt:
            "One plant grows more slowly than others because it does not get as much sunlight.",
          answer: "acquired",
        },
        {
          id: "tiger_strips",
          questionTxt:
            "A tiger has orange and black stripes, just like its parents.",
          answer: "inherited",
        },
        {
          id: "trampled",
          questionTxt: "A plant on the ground was trampled and is now flat.",
          answer: "acquired",
        },
        {
          id: "turtle",
          questionTxt: "A turtle has a patterned shell.",
          answer: "inherited",
        },
      ],
      radioOptions: [
        {
          id: "acquired",
          text: "Acquired",
          label: "Acquired",
        },
        {
          id: "inherited",
          text: "Inherited",
          label: "Inherited",
        },
      ],
      mcqImages: [
        {
          id: "plant",
          altText: "plant alt text",
        },
        {
          id: "banana",
          altText: "banana alt text",
        },
        {
          id: "buffalo",
          altText: "buffalo alt text",
        },
        {
          id: "palm",
          altText: "palm alt text",
        },
        {
          id: "sunlight",
          altText: "sunlight alt text",
        },
        {
          id: "tiger_strips",
          altText: "tiger stris alt text",
        },
        {
          id: "trampled",
          altText: "trampled alt text",
        },
        {
          id: "turtle",
          altText: "turtle alt text",
        },
      ],
    },
    {
      id: "behavior",
      noChangeTxt:
        "Behavioral traits are the actions, or behaviors, of an organism. Behavioral traits are classified into two categories: instincts and learned behaviors. Instincts are behaviors that an animal is born with; they are inherited behaviors. Baby animals know how to do these behaviors as soon as they are born. Learned behaviors must be observed and practiced. Baby animals are not born with the ability to perform these behaviors.",
      noChangeTxtTwo:
        "Choose whether the behavior described is an instinct or a learned behavior.",
      infoText:
        "An instinct is a behavior an animal or plant is born with, whereas a learned behavior is gained as an animal or plant grows.",
      mcqQuestions: [
        {
          id: "birds",
          questionTxt: "Birds fly through the lush jungle.",
          answer: "learned",
        },
        {
          id: "tiger",
          questionTxt: "Tiger babies use smell to find their mother’s milk.",
          answer: "instinct",
        },
        {
          id: "autumn",
          questionTxt: "In autumn, hummingbirds migrate to warmer places.",
          answer: "instinct",
        },
        {
          id: "snake",
          questionTxt:
            "Snakes choose the palm tree with the most mice living under it.",
          answer: "learned",
        },
        {
          id: "tortoise",
          questionTxt:
            "Tortoises push their bodies out of their eggs when they hatch.",
          answer: "instinct",
        },
        {
          id: "elephant",
          questionTxt: " Elephants use their trunks to pick up food.",
          answer: "learned",
        },
        {
          id: "monkey",
          questionTxt:
            "Monkeys groom each other by removing bugs from each other's fur.",
          answer: "learned",
        },
        {
          id: "spider",
          questionTxt: "Spiders spin webs.",
          answer: "instinct",
        },
      ],
      mcqImages: [
        {
          id: "birds",
          altText: "birds alt text",
        },
        {
          id: "tiger",
          altText: "tiger alt text",
        },
        {
          id: "autumn",
          altText: "autumn alt text",
        },
        {
          id: "snake",
          altText: "anake alt text",
        },
        {
          id: "tortoise",
          altText: "tortoise alt text",
        },
        {
          id: "elephant",
          altText: "elephant alt text",
        },
        {
          id: "monkey",
        },
        {
          id: "spider",
        },
      ],
      radioOptions: [
        {
          id: "learned",
          text: "Learned",
          label: "Learned",
        },
        {
          id: "instinct",
          text: "Instinct",
          label: "Instinct",
        },
      ],
    },
  ],
};

export default data;
