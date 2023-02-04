import commonData from "../../app/data";
import globalCommonData from "../../app/data";
const data = {
  greetingMessage: "Hello",
  nextScreenButtonText: "Next Screen",
  backScreenButtonText: "Back Screen",
  buttonLabels: { ...commonData.buttonLabels },
  startUpInfo: {
    buttonContinueText: "Start",
    buttonContinueLabel: "Start",
    instructionBoxContent: [
      "The Milky Way is our home. Earth is just one of eight planets in the Milky Way. Read the clue cards about each planet, and try to put the planets in the correct order.",
      "Use the planet name cards below to be sure to spell the planet name correctly.",
    ],
  },

  resetLiveText: globalCommonData.resetLiveText,
  completionScreen: {
    ...globalCommonData.completionPopup,
    content: "You have put the planets in their correct order from the Sun!",
  },
  mainHeading:
    "Read the clue cards to match the facts to the planets and type their names in the correct positions.",
  typingPlanet: [
    {
      id: "planet1",
      text: "Planet 1",
      altText: "Mercury",
    },
    {
      id: "planet2",
      text: "Planet 2",
      altText: "Venus",
    },
    {
      id: "planet3",
      text: "Planet 3",
      altText: "Earth",
    },
    {
      id: "planet4",
      text: "Planet 4",
      altText: "Mars",
    },
    {
      id: "planet5",
      text: "Planet 5",
      altText: "Jupiter",
    },
    {
      id: "planet6",
      text: "Planet 6",
      altText: "Saturn",
    },
    {
      id: "planet7",
      text: "Planet 7",
      altText: "Uranus",
    },
    {
      id: "planet8",
      text: "Planet 8",
      altText: "Neptune",
    },
  ],
  planetName: [
    {
      id: "earth",
      text: "Earth",
    },
    {
      id: "uranus",
      text: "Uranus",
    },
    {
      id: "jupiter",
      text: "Jupiter",
    },
    {
      id: "mars",
      text: "Mars",
    },
    {
      id: "neptune",
      text: "Neptune",
    },
    {
      id: "mercury",
      text: "Mercury",
    },
    {
      id: "venus",
      text: "Venus",
    },
    {
      id: "saturn",
      text: "Saturn",
    },
  ],
  clueCardHeading: "Clue Card (-1- of -2-)",
  planetHeading: "Planets",
  clueCards: [
    {
      clue: "I am smaller than Earth and closer to the Sun. Earth is not my next-door neighbor. ",
      clueButton: "mercury",
    },
    {
      clue: "I am often called Earth's twin, even though I am closer to the Sun and much hotter than my neighbor. I am about the same size as Earth, and I am a rocky planet.",
      clueButton: "venus",
    },
    {
      clue: "I am the third planet, home to humans and many other organisms. I am mostly made of water, and I am the perfect temperature for life.",
      clueButton: "earth",
    },
    {
      clue: "I am known as the Red Planet, and you can see me in the sky at night from Earth. NASA flew a helicopter above my surface. ",
      clueButton: "mars",
    },
    {
      clue: "I am the first of the outer planets, or gas giants, found beyond the Asteroid Belt. If you reach Saturn, you have gone too far to find me!",
      clueButton: "jupiter",
    },
    {
      clue: "I am famous for my rings that are made of ice crystals, dust, and rocks. I am a gas giant located just after my neighbor, who is the largest planet.",
      clueButton: "saturn",
    },
    {
      clue: "I am smaller than Saturn, but like my bigger brother, I am also an outer planet. I have a turquoise color. It only takes 17 hours for me to rotate. ",
      clueButton: "uranus",
    },
    {
      clue: "One of my neighbors is a dwarf planet. I am more than 3 billion miles away from the Sun, and I have the fastest wind speed of any planet.",
      clueButton: "neptune",
    },
  ],
  buttonFinish: "Finish",
  buttonInfo: "Info",
  buttonReset: "Reset",
  resetMsgContent: "Are you sure you want to reset?",
  buttonYes: "Yes",
  buttonNo: "No",
  buttonClose: "Close",

  buttonFinish: "Finish",
  bottonCheck: "Check",
  correctToastMessage: "That's right!",
  incorrectToastMessage: "Not quite right. Try again!",
  partiallyIncorrectToastMessage: "One input is incorrect. Try again!",
  imageAltText:
    "Sun & 8 planets in our solar system in a line across center of dark blue background; Sun on left & planets in order from nearest to farthest from Sun",
  pageHeading:
    "In this simulation, the learner will identify the sequence of the planets in Earth's solar system in relation to the Sun.",
  infoBoxContent:
    "Read the clue cards to match the facts to the planets, and then type the names of the planets in their correct positions in our solar system. ",
};

export default data;
