import commonData from "../../app/data";
import screen2DayHome from "../assets/images/screen2_day_home_cloud_sun.png";
import screen2DaySchool from "../assets/images/screen2_day_school_cloud_sun.png";

const altTexts = {
  sun: "The Sun shining bright in the daytime sky",
  clouds: "A white, fluffy cloud in the daytime sky",
  school: "A school during the day with the Sun and two clouds in the sky",
  afterday:
    "A house at night with the Moon and stars in the dark blue night sky",
  moon: "The Moon in the nighttime sky with many stars in the dark blue background",
  stars: `A dark blue night sky with one large, bright star in the middle and many small stars in the background`,
};

const data = {
  ...commonData.buttonLabels,
  activityObjective: `In this activity students will explore the Sun, the Moon, stars, clouds, and the pattern of day and night.`,
  introductionPopupText:
    "We see many things in the sky during the day and at night. Let's explore them!",
  screen1DefaultOST: `Day and night happen over and over. During the day, we can see the Sun. We may see clouds. 
                        It is light outside. We go to school. We play. We eat. During the night, we may see stars and the Moon. 
                        It is dark outside. We go to sleep. Let’s check out the things we see in the sky during the day and at night. 
                        Click on each object to find out more about it.`,
  screen1MainImageAlt: `On one side is a house in the day with the sun in the sky, 
                        and on the other side is the same house at night with the 
                        Moon and stars in the sky`,
  screen1TopViewButtons: [
    {
      text: "Sun",
      alt: altTexts.sun,
      id: "topviewbtnsun",
      ost: `We see the Sun during the day. It is big and bright. 
            It looks like it moves across the sky. It gives us light and heat.`,
    },
    {
      text: "Clouds",
      alt: altTexts.clouds,
      id: "topviewbtncloud",
      ost: `We see clouds during the day. If we look carefully during some nights, we can see clouds then too! Sometimes, there are only a few clouds. Sometimes, there are a lot of clouds. Sometimes, there are no clouds at all!`,
    },
    {
      text: "Moon",
      alt: altTexts.moon,
      id: "topviewbtnmoon",
      ost: `We see the Moon at night, but sometimes, the Moon can be seen during the day. 
            The Moon looks different each night. Sometimes, it is big and round. 
            Sometimes, it is only a piece. Sometimes, we cannot see the Moon at all!`,
    },
    {
      text: "Stars",
      alt: altTexts.stars,
      id: "topviewbtnstar",
      ost: `We see stars at night. Stars look like small dots of light. 
            If it is very dark and there are no clouds, we can see a lot of stars!`,
    },
  ],
  screen2MCQs: [
    {
      id: "question1",
      answer: "night",
      alt: altTexts.stars,
      text: "Do you see stars during the day or night?",
    },
    {
      answer: "day",
      id: "question2",
      alt: altTexts.clouds,
      text: "Do you usually see clouds during the day or night?",
    },
    {
      id: "question3",
      answer: "night",
      alt: altTexts.moon,
      text: "Do you usually see the Moon during the day or night?",
    },
    {
      id: "question4",
      answer: "day",
      alt: altTexts.sun,
      text: "Do you see the Sun during the day or night?",
    },
    {
      answer: "day",
      id: "question5",
      alt: altTexts.school,
      text: "Do you go to school during the day or night?",
    },
    {
      id: "question6",
      answer: "night",
      alt: altTexts.afterday,
      text: "What always comes after the day?",
    },
  ],
  screen2MCQAnswerOptions: [
    {
      id: "day",
      text: "Day",
    },
    {
      id: "night",
      text: "Night",
    },
  ],
  mcqQuestionHeading: "Question: -1- of -2-",
  imagesArray: [screen2DayHome, screen2DaySchool],
  resetLiveText: commonData.resetLiveText,
  resetPopupText: commonData.resetPopupText,
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  screen1InfoText: "Click on an object in the sky.",
  screen2InfoText: "Choose day or night to answer the question.",
  transitionPopup: {
    ...commonData.transitionPopup,
    content:
      "Now that you have looked at objects that appear in the sky during the day and at night, it's time to show what you know!",
  },
  completionPopup: {
    ...commonData.completionPopup,
    content:
      "You have shown you know about the objects you see in the sky during the day and at night!",
  },
};

export default data;
