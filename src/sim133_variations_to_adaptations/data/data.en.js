import commonData from "../../app/data/data.en";
import { common } from "../actions";

import questionAImage from "../assets/images/hawk.png";
import questionBImage from "../assets/images/heron.png";
import questionCImage from "../assets/images/cardinal.png";
import questionDImage from "../assets/images/woodpecker.png";

const data = {
  learningObjective:
    "Students will view different bird beaks and match up which food they will eat based on their beak shape.",
  learningObjective2:
    "Students will be given an environmental change that changes the availability of food and must choose between two beak shapes to decide which will survive.",
  introductoryText:
    "Hi there! Let’s look at the beaks of some birds that live in this environment.",
  hint: "Click on each bird to learn more about its beak.",
  buttonLabels: { ...commonData.buttonLabels },
  secondScreenText:
    "Environmental changes happen all the time. These changes affect the organisms that live in that environment. Variations in populations can lead to adaptations that help the organisms to survive over generations.",
  smallBeakedBirdTxt: "Small-beaked bird",
  largeBeakedBirdTxt: "Large-beaked bird",
  SecondScreenImgAria:
    "Silhouettes of two birds: on the left is a large-beaked bird and on the right is a small-beaked bird.",
  firstScreenImgAria:
    "Lake ecosystem surrounded by grass, trees & 4 birds: a heron standing in water, a cardinal on a rock, a hawk on a tree branch & a woodpecker in a tree.",

  mainScreen: {
    imageAlt: "Image of forest and pond",
    hotSpots: {
      locationA: {
        content: "Hawk",
        location: "locationA",
        altText: "Hawk",
        visited: false,
      },

      locationB: {
        content: "Heron",
        location: "locationB",
        altText: "Heron",
        visited: false,
      },

      locationC: {
        content: "Cardinal",
        location: "locationC",
        altText: "Cardinal",
        visited: false,
      },

      locationD: {
        content: "Woodpecker",
        location: "locationD",
        altText: "Woodpecker",
        visited: false,
      },
    },
    content:
      "Have you ever noticed that birds all have different-shaped beaks? Each bird’s beak is shaped to help it eat specific foods. Click on the birds to examine their beaks and see what they might eat in this environment.",
  },

  locationA: {
    id: "Hawks",
    imgSrc: questionAImage,
    imageAlt:
      "A close-up of a hawk shows a bird with a long, curved beak that comes to a sharp point at the end. It has brown feathers on its head and face.",
    question:
      "Hawks have hook-shaped beaks that are good for tearing their food. Based on this information, which type of food do hawks eat?",
    answer: "small_animals",
  },

  locationB: {
    id: "Herons",
    imgSrc: questionBImage,
    imageAlt:
      "A close-up of a heron shows a bird with a long, white neck; a long, thin, pointed beak; and black feathers on its head.",
    question:
      "Herons have long, pointed beaks that are good for hunting in water environments. Based on this information, which type of food do herons eat?",
    answer: "fish",
  },

  locationC: {
    id: "Cardinal",
    imgSrc: questionCImage,
    imageAlt:
      "Close-up of a cardinal shows a bird with a short, wide beak that is slightly curved at the end. It has red feathers & black feathers around its face.",
    question:
      "Cardinals have short, cone-shaped beaks that are good for cracking things open. Based on this information, which type of food do cardinals eat?",
    answer: "seeds",
  },

  locationD: {
    id: "Woodpeckers",
    imgSrc: questionDImage,
    imageAlt:
      "A close-up of a woodpecker shows a bird with a short, thin, pointed beak; a short neck with black and white feathers; and red feathers on its head.",
    question:
      "Woodpeckers have strong chisel-shaped beaks that are good for boring into the wood of trees. Based on this information, which type of food do woodpeckers eat?",
    answer: "insects",
  },

  questionHeading: commonData.questionCounterString2,

  questions: [
    {
      id: "question1",
      question:
        "A bird population has two variations in beak size: large and small. The large beak variation of this bird first appeared in 1948. That same year, there was a drought that caused smaller seeds to become scarce, but larger seeds were not affected. Which birds do you think were able to survive this environmental change better?",
      answer: "largeBeakedBirdTxt",
      feedBackText:
        "<b>That’s right!</b> The large-beaked birds were able to successfully pass on their larger beaks to the next generations after the drought.",
    },
    {
      id: "question2",
      question:
        "Ten years later in the same environment, there was an invasive species that caused the larger seeds to become scarce, but it didn’t affect the smaller seeds. Which bird do you think was able to survive this environmental change better?",
      answer: "bothBirds",
      feedBackText:
        "<b>That’s right!</b> Both the birds were able to do well, because both can eat the smaller seeds.",
    },
    {
      id: "question3",
      question:
        "Ten years later in the same environment, there was a different species of bird that entered the environment. The new species also had a small beak and ate the smaller seeds. Which bird do you think was able to survive this environmental change better?",
      answer: "largeBeakedBirdTxt",
      feedBackText:
        "<b>That’s right!</b> The large-beaked birds were able to survive the environmental change better.",
    },
  ],

  assessmentRadioButtons: [
    {
      id: "seeds",
      text: "Seeds",
    },
    {
      id: "small_animals",
      text: "Small animals",
    },
    {
      id: "insects",
      text: "Insects",
    },
    {
      id: "fish",
      text: "Fish ",
    },
  ],

  secondScreenRadioButtons: [
    {
      id: "largeBeakedBirdTxt",
      text: "Large-beaked birds",
    },
    {
      id: "smallBeakedBirdTxt",
      text: "Small-beaked birds",
    },
    {
      id: "bothBirds",
      text: "Both birds",
    },
    {
      id: "noBird",
      text: "Neither birds",
    },
  ],

  graphData: [
    {
      labels: [null, "1948", "1958", "1968", "1978"],
      datasets: [
        {
          label: "Large-beaked birds",
          data: [null, 20, 150],
          pointBackgroundColor: "#0056B3",
          borderWidth: 1,
          borderColor: "#3E3D3D",
          pointStyle: "point",
          pointRadius: "6",
        },
        {
          label: "Small-beaked birds",
          data: [null, 300, 200],
          pointBackgroundColor: "#BA5B08",
          borderWidth: 1,
          borderColor: "#3E3D3D",
          pointStyle: "rect",
          pointRadius: "6",
        },
      ],
    },
    {
      labels: [null, "1948", "1958", "1968", "1978"],

      datasets: [
        {
          label: "Large-beaked birds",
          data: [null, 20, 130, 210],
          pointBackgroundColor: "#0056B3",
          borderWidth: 1,
          borderColor: "#3E3D3D",
          pointStyle: "point",
          pointRadius: "6",
        },
        {
          label: "Small-beaked birds",
          data: [null, 300, 200, 270],
          pointBackgroundColor: "#BA5B08",
          borderWidth: 1,
          borderColor: "#3E3D3D",
          pointStyle: "rect",
          pointRadius: "6",
        },
      ],
    },
    {
      labels: [null, "1948", "1958", "1968", "1978"],

      datasets: [
        {
          label: "Large-beaked birds",
          data: [null, 20, 130, 210, 370],
          pointBackgroundColor: "#0056B3",
          borderWidth: 1,
          borderColor: "#3E3D3D",
          pointStyle: "point",
          pointRadius: "6",
        },
        {
          label: "Small-beaked birds",
          data: [null, 300, 200, 250, 100],
          pointBackgroundColor: "#BA5B08",
          borderWidth: 1,
          borderColor: "#3E3D3D",
          pointStyle: "rect",
          pointRadius: "6",
        },
      ],
    },
  ],

  graphAriaLabels: [
    "2 lines on a graph show large & small-beak bird population change 1948–1958; large-beaks increased from 10–150 & small-beaks decreased from 300–200.",
    "The graph shows that, from 1958–1968, the large-beak population increased from 150 to 200 and the small-beak population increased from 200 to 280.",
    "The graph shows that, from 1968–1978, the large-beak population increased from 200 to 380 and the small-beak population decreased from 250 to 100.",
  ],
  graphXaxisHeading: "Year",
  graphYaxisHeading: "Population of birds",
  largeBeakedLabel: "Large-beaked birds",
  smallBeakedLabel: "Small-beaked birds",

  feedbacks: {
    right: commonData.correctToastMessage,
    wrong: commonData.incorrectToastMessage,
    exception: "This is the correct answer.",
  },
  transitionPopup: {
    ...commonData.transitionPopup,
    content:
      "Now that you have explored some bird beak adaptations, let’s see how variations in beak shape can lead to adaptations.",
  },
  completionPopup: {
    ...commonData.completionPopup,
    content: "You have successfully completed the simulation!",
  },
  resetPopupData: commonData.resetPopupText,
  temp: "ignore me",
};

export default data;
