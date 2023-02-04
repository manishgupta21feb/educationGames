import commonData from "../../app/data/data.en";
import batteryVideo from "../assets/videos/battery.mp4";
import wireVideo from "../assets/videos/wir.mp4";
import bulbVideo from "../assets/videos/bulb_new.mp4";
import fullCircuit from "../assets/videos/main_new.mp4";
const data = {
  buttonLabels: { ...commonData.buttonLabels },
  completionPopup: {
    ...commonData.completionPopup,
    content:
      "You have successfully explored how energy is transformed in multiple systems!",
  },
  transitionPopup: {
    ...commonData.transitionPopup,
    content:
      "You have successfully explored how energy is transformed and conserved in one system. Get ready to explore the next system.",
  },
  resetMsgContent: commonData.resetPopupText,
  resetLiveText: commonData.resetLiveText,
  activityHeading:
    "Students will describe how energy is conserved through transformations in systems such as electrical circuits and food webs enegry system.",
  hintContent:
    "Click the buttons to learn about energy conservation and transformations in different systems.",
  instructionBoxContent:
    "Have you ever wondered how energy conservation and transformation take place within a system? Today, you will explore two different energy system scenarios: an electrical circuit and a food web.",
  bgAltText: "Simple electrical circuit with copper wire connecting each end of the battery to either side of the light bulb in a rectangular path ",
  screen0Hotspots: [
    {
      id: "hotspot2",
      ariaLabel: "bulb",
      text: "Bulb",
      hotspotText:
        "Click on the bulb to explore the energy transformations from the wire to the bulb.",
      assets: {
        id: "video2",
        videoSrc: bulbVideo,
        alt:"White arrow shows electrical energy moving through wire to the light bulb. Labels identify that the light bulb gives off light energy and heat energy.",
        videoLabels: ["Electrical energy"],
        videoEndLabels:["Light energy", "Heat energy"],
        associatedText:
          "The <b>electrical energy</b> in the wires is transformed into <b>heat energy</b> and <b>light energy</b> in the light bulb within the <b>circuit.</b> ",
      },
    },
    {
      id: "hotspot0",
      ariaLabel: "battery",
      text: "Battery",
      hotspotText:
        "The <b>law of conservation of energy</b> states that energy can neither be created nor destroyed; it just changes form. Let’s explore two different types of <b>energy transformations.</b> First, click on the battery to explore the energy transformations from the battery to the wire.",
      assets: {
        id: "video0",
        videoSrc: batteryVideo,
        alt:"Close-up view of the battery & copper wire; chemical energy label under battery; white arrow shows electrical energy moving through wire from battery",
        videoLabels: ["Electrical energy", "Chemical energy"],
        associatedText:
          "<b>Chemical energy</b> from the battery is transformed into <b>electrical energy,</b> moving from the battery to the wires in an <b>electrical circuit.</b>",
      },
    },
    {
      id: "hotspot1",
      ariaLabel: "wire",
      text: "Wire",
      hotspotText:
        "Click on the wire to explore the energy transformations through the wires.",
      assets: {
        id: "video1",
        videoSrc: wireVideo,
        alt:"White arrow shows electrical energy moving through the copper wire",
        videoLabels: ["Electrical energy"],
        associatedText:
          "The <b>electrical energy</b> moves through the wires around the circuit. Energy is conserved by changing forms and continuing through the circuit.",
      },
    },
  ],
  fullCircuit: {
    id: "video3",
    videoSrc: fullCircuit,
    alt:"The white arrow shows that electrical energy completes the circuit by traveling down the copper wire from the light bulb back to the battery.",
  },
  screen1Hotspots: [
    {
      id: "hotspot4",
      ariaLabel: "Sun",
      text: "Sun",
      alt:"The Sun is shining on a forest ecosystem.",
      hotspotText:
        "Energy is transformed at each trophic level of the <b>food web</b> in an ecosystem. Click on the Sun to explore the energy transformations from the Sun to the oak tree.",
      assets: {
        id: "img0",
        alt: "Black arrows show that the Sun transfers radiant energy to acorns on the tree",
        arrowLabel: ["Radiant energy"],
        associatedText: [
          "The Sun provides <b>radiant energy</b> to the oak tree. Then, the oak tree transforms this <b>radiant energy,</b> with the help of water and carbon dioxide, into <b>chemical energy</b> through the process of <b>photosynthesis.</b>",
          "The oak tree is a producer because it can produce its own energy without relying on other organisms. Producers have the most energy in ecosystems because producers are at the beginning of the food web in every ecosystem.",
        ],
      },
    },
    {
      id: "hotspot5",
      ariaLabel: "Acorn",
      text: "Acorn",
      alt:"Acorns in a tree",
      hotspotText:
        "Click on the acorn to explore the energy transformations from the acorn to the squirrel. ",
      assets: {
        id: "img1",
        alt: "Black arrows show that the acorns transfer chemical energy to a squirrel that is eating an acorn in the tree",
        arrowLabel: ["Radiant energy", "Chemical energy"],
        associatedText: [
          "An oak tree produces acorns as it grows. The Douglas squirrel eats an acorn and receives <b>chemical energy.</b> The squirrel's body uses some of the <b>chemical energy</b> as fuel for movement, breathing, and waste removal processes.",
          "A large portion of the chemical energy is also transformed into <b>heat energy</b> and released to the atmosphere. Ultimately, the squirrel has a lower amount of <b>chemical energy</b> to transfer to the next organism in the food web than it received from the oak tree.",
        ],
      },
    },
    {
      id: "hotspot6",
      ariaLabel: "Squirrel ",
      text: "Squirrel ",
      alt:"A squirrel in a tree eating an acorn",
      hotspotText:
        "Click on the squirrel to explore the energy transformations from the squirrel to the ringtail cat.",
      assets: {
        id: "img1",
        alt: "Black arrows show that the squirrel transfers chemical energy to the ringtail cat",
        arrowLabel: ["Radiant energy", "Chemical energy", "Chemical energy"],
        associatedText: [
          "The ringtail cat eats the Douglas squirrel and receives <b>chemical energy.</b> The ringtail cat's body uses some of the <b>chemical energy</b> as fuel for movement, breathing, and waste removal processes.",
          "A large portion of the chemical energy is also transformed into <b>heat energy</b> and released to the atmosphere. Ultimately, the ringtail cat has a lower amount of <b>chemical energy</b> to transfer to the next organism in the food web than it received from the Douglas squirrel.",
        ],
      },
    },
  ],
  screen0HotspotSequence: ["hotspot0", "hotspot1", "hotspot2"],
  screen1HotspotSequence: ["hotspot4", "hotspot5", "hotspot6"],
};

export default data;
