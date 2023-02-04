import commonData from "../../app/data/data.en";
import { common } from "../actions";

import launchImage from "../assets/images/scene_1.png";
import questionAImage from "../assets/images/scene_2.png";
import questionBImage from "../assets/images/scene_3.png";
import questionCImage from "../assets/images/scene_4.png";
import questionDImage from "../assets/images/scene_5.png";

const data = {
  learningObjective:
    "Students will read scenarios about different planets within our universe.<br>	Students will identify and analyze characteristics of planets to determine if they are habitable.",
  introductoryText:
    "Welcome! Let’s take off and explore the characteristics that make a planet habitable.",
  hint: "Click on the different locations to learn more about the planet's characteristics.",
  buttonLabels: { ...commonData.buttonLabels },
  mainScreen: {
    imageSrc: launchImage,
    imageAlt:
      "Field of stars in deep space four planet locations highlighted for exploration",
    hotSpots: {
      locationA: {
        content: "A",
        location: "locationA",
        altText: "Planet A",
        visited: false,
      },
      locationB: {
        content: "B",
        location: "locationB",
        altText: "Planet B",
        visited: false,
      },
      locationC: {
        content: "C",
        location: "locationC",
        altText: "Planet C",
        visited: false,
      },
      locationD: {
        content: "D",
        location: "locationD",
        altText: "Planet D",
        visited: false,
      },
    },

    content:
      "Scientists are actively exploring deep space for potential habitable planets. They’ve narrowed their search to four planets, but they need your help to determine which planet could potentially be inhabited by humans.<br/><br/>Based on Earth’s characteristics, we know that in order for a planet to support life, it must have liquid water, have oxygen in the atmosphere, be a certain distance from the star it orbits, and have a layer in the atmosphere that protects from ultraviolet rays.<br/><br/>Click on each location to explore the next potential Earth!",
  },
  locationA: {
    imgSrc: questionAImage,
    imageAlt:
      "Planet Y568 is about one fourth the size of Earth, is close to its star, and scores only 2 out of 4 on the health monitor graph. Earth scores 4 out of 4.",
    introContent:
      "Welcome to Planet Y568. Planet Y568 is a special planet in that its atmospheric <strong>composition</strong>, or makeup, is similar to that of Earth’s. This means that it contains gaseous oxygen and an <strong>ozone layer</strong> that helps block out ultraviolet radiation from its central star. While these two characteristics are necessary, it does have a few downfalls. Planet Y568 is only 58 million kilometers away from its star, which means the temperature is scorching! What do you think this means about the state of water on Planet Y568? ",
    questionHeader:
      "You’re correct! There isn’t any liquid water on the planet. Based on the life meter and this information, would Planet Y568 be able to support human life?",
    correctAnswer: "no",
  },
  locationB: {
    imgSrc: questionBImage,
    imageAlt:
      "Planet Z257 is about 1.5 times larger than Earth, has its own moon, is far from its star & scores only 1.5 of 4 on health monitor. Earth scores 4 of 4",
    introContent:
      "This is Planet Z257. Planet Z257 is similar to Earth in that it also has a moon, a gaseous atmosphere, and rocky terrain. Sadly, that is where the similarities end. The <strong>proximity</strong>, or closeness, to its star is approximately 352 million kilometers. That is over twice the distance that Earth is from the Sun. So what does that mean about the temperature and water?",
    questionHeader:
      "You’re correct! That means that the temperatures are well below freezing, and that any water content would be in the solid state. Based on the life meter and this information, would Planet Z257 be able to support human life?",
    correctAnswer: "no",
  },
  locationC: {
    imgSrc: questionCImage,
    imageAlt:
      "Planet W731 is about the same size as Earth, is far from its star, and scores 3 out of 4 on the heath monitor graph. Earth scores 4 out of 4.",
    introContent:
      "Welcome to Planet W731. Planet W731 was discovered by accident, but scientists are thrilled by its discovery. Planet W731 is surrounded by a gaseous <strong>atmosphere</strong> that contains oxygen and a protective layer that protects the surface from ultraviolet radiation.",
    questionHeader:
      "The proximity to its sun is approximately 153 million kilometers, which is only 3 million kilometers more than Earth is from the Sun. Because of this distance, scientists have found evidence of liquid water on the surface and determined that it has stable temperatures throughout the day and night. Based on the life meter and this information, would Planet W731 be able to support human life?",
    correctAnswer: "yes",
  },

  locationD: {
    imgSrc: questionDImage,
    imageAlt:
      "Planet X498 is about 2.5 times larger than Earth, is close to its star, and scores only 2 out of 4 on health monitor graph. Earth scores 4 out of 4.",
    introContent:
      "This is Planet X498. Planet X498 has a few exciting characteristics that must be discussed. Scientists have found evidence of solid and liquid water on the surface of Planet X498. The proximity to its star is 145 million kilometers, which is extremely similar to Earth’s 150 million kilometers from the Sun.",
    questionHeader:
      "The downfall of Planet X498 is that its gaseous atmosphere does not have a protective ozone layer. This means that all organisms on the surface would be exposed to harmful ultraviolet radiation from the star. Based on the life meter and this information, would Planet X498 be able to support human life?",
    correctAnswer: "no",
  },
  questions: [
    {
      id: "question1",
      question:
        "The _______________ is the gaseous layer that surrounds Earth and is held in place by gravity. It contains oxygen, which is a necessary gas for life.",
      questionLabel:
        "The blank is the gaseous layer that surrounds Earth and is held in place by gravity. It contains oxygen which is a necessary gas for life.",
      answer: "atmosphere_rb",
    },
    {
      id: "question2",
      question:
        "The atmosphere contains _______________, a gas that protects organisms on Earth’s surface from dangerous ultraviolet radiation emitted by the Sun.",
      questionLabel:
        "The atmosphere contains blank a gas that protects organisms on Earth’s surface from dangerous ultraviolet radiation emitted from the Sun.",
      answer: "ozone_rb",
    },
    {
      id: "question3",
      question:
        "Earth’s atmosphere contains nitrogen, oxygen, argon, and trace amounts of other gases. This combination of gases describes the  _________________, or makeup, of the atmosphere.",
      questionLabel:
        "Earth’s atmosphere contains nitrogen, oxygen, argon, and trace amounts of other gases. This combination of gases describes the blank or makeup, of the atmosphere.",
      answer: "composition_rb",
    },
    {
      id: "question4",
      question:
        "Earth is approximately 150 million kilometers from the Sun. This distance affects Earth’s temperature and the state of water. The _________________ to a star like the Sun is a key characteristic in determining if a planet is habitable. ",
      questionLabel:
        "Earth is approximately 150 million kilometers from the Sun. This distance affects Earth’s temperature and the state of water. The blank to a star like the Sun is a key characteristic in determining if a planet is habitable.",
      answer: "proximity_rb",
    },
  ],

  assessmentRadioButtons: [
    {
      id: "composition_rb",
      text: "composition",
    },
    {
      id: "ozone_rb",
      text: "ozone",
    },
    {
      id: "proximity_rb",
      text: "proximity",
    },
    {
      id: "atmosphere_rb",
      text: "atmosphere ",
    },
  ],

  radioButtons: [
    {
      id: "yes",
      text: "Yes",
      label: "Yes",
    },
    {
      id: "no",
      text: "No",
      label: "No",
    },
  ],

  questionText: {
    text1: "Question:",
    text2: "of",
    sentence: "Select the term that best completes the sentence.",
  },

  feedbacks: {
    right: commonData.correctToastMessage,
    wrong: commonData.incorrectToastMessage,
    exception: "This is the correct answer.",
  },
  transitionPopup: {
    ...commonData.transitionPopup,
    content:
      "Now that you have explored the characteristics that make a planet habitable, it’s time to show what you know.",
  },
  completionPopup: {
    ...commonData.completionPopup,
    content: "You have successfully completed the simulation.",
  },
  resetPopupData: commonData.resetPopupText,
  temp: "ignore me",
};

export default data;
