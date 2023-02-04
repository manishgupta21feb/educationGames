import globalConfig from "../../app/data/data.en";
import video1 from "../assets/videos/oil_drilling.mp4";
import video2 from "../assets/videos/artificial_reef.mp4";

const data = {

  //Screen 1 MCQ Data
  mainScreenMCQ: [
    {
      id: "1",
      questionText: "Humans are dependent on oil as a resource. We use the oil that we drill from the ocean to create items like plastics, gasoline, diesel fuel, and even fuel to heat our homes. The oil companies try to maintain the ocean while drilling, but accidents can and do happen. Pieces of equipment can litter the ocean; oil spills happen, which cause loss of marine life; and the ecosystem can be disturbed while setting up oil rigs. Based on this information, would oil drilling cause a positive or negative modification on the ocean?",
      answer: "Negative modification",
      questionLabel: "Humans are dependent on oil as a resource. We use the oil that we drill from the ocean to create items like plastics, gasoline, diesel fuel, and even fuel to heat our homes. The oil companies try to maintain the ocean while drilling, but accidents can and do happen. Pieces of equipment can litter the ocean; oil spills happen, which cause loss of marine life; and the ecosystem can be disturbed while setting up oil rigs. Based on this information, would oil drilling cause a positive or negative modification on the ocean?"
    },
    {
      id: "2",
      questionText: "We all know that food is a requirement for life. As humans, we are dependent on the ocean as a food resource. Worldwide, we catch approximately 179 million tons of seafood annually but only consume around 156 million tons. That means that we discard approximately 23 million tons of caught seafood every year! When we catch more than we can use or consume, it is called <b>overfishing</b>. As a result of our overfishing, fish are unable to maintain population levels due to not having enough individuals to reproduce. Based on this information, would overfishing cause a positive or negative modification to the ocean?",
      answer: "Negative modification",
      questionLabel: "We all know that food is a requirement for life. As humans, we are dependent on the ocean as a food resource. Worldwide, we catch approximately 179 million tons of seafood annually but only consume around 156 million tons. That means that we discard approximately 23 million tons of caught seafood every year! When we catch more than we can use or consume, it is called overfishing. As a result of our overfishing, fish are unable to maintain population levels due to not having enough individuals to reproduce. Based on this information, would overfishing cause a positive or negative modification to the ocean?"
    },
    {
      id: "3",
      questionText: "As ocean temperatures rise, coral reefs have begun to die off. Coral reefs provide food, protection, and shelter to a range of marine life.  As humans, we are trying to help reverse the damage by creating <b>artificial reefs</b>. Artificial reefs can be created from cleaned ships that have been sunken or even concrete structures placed strategically on the ocean floor. These artificial reefs allow organisms to reinhabit areas and increase the biodiversity in those areas. Based on this information, is this modification positive or negative?",
      answer: "Positive modification",
      questionLabel: "As ocean temperatures rise, coral reefs have begun to die off. Coral reefs provide food, protection, and shelter to a range of marine life.  As humans, we are trying to help reverse the damage by creating artificial reefs. Artificial reefs can be created from cleaned ships that have been sunken or even concrete structures placed strategically on the ocean floor. These artificial reefs allow organisms to reinhabit areas and increase the biodiversity in those areas. Based on this information, is this modification positive or negative?"
    },
  ],

  //Main screen MCQ Options
  mainMCQOptions: ["Positive modification", "Negative modification"],

  //Screen 1 Answer Options
  answerOptions: [
    {
      id: 'positive-modification',
      disabled: false,
      text: 'Positive modification'
    },
    {
      id: 'negative-modification',
      disabled: false,
      text: 'Negative modification'
    }
  ],

  // Full Screen MCQ Questions
  mcqQuestions: [
    "How does creating artificial reefs modify the ocean?",
    "How does oil drilling modify the ocean?",
    "How does overfishing modify the ocean?",
    "Assume human activity does not occur, then how does that modify the ocean?"
  ],

  //Full Screen MCQ Options
  mcqOptions: [
    "The ocean becomes more polluted.",
    "Organisms are encouraged to return to the area.",
    "Organisms and ecosystems thrive.",
    "It reduces the amount of fish necessary to repopulate the area."
  ],

  //Screen 2 MCQ Data
  mcqData: [
    {
      id: 1,
      questionText: "How does creating artificial reefs modify the ocean?",
      answer: "Organisms are encouraged to return to the area.",
    },
    {
      id: 2,
      questionText: "How does oil drilling modify the ocean?",
      answer: "The ocean becomes more polluted.",
    },
    {
      id: 3,
      questionText: "How does overfishing modify the ocean?",
      answer: "It reduces the amount of fish necessary to repopulate the area.",
    },
    {
      id: 4,
      questionText: "Assume human activity does not occur, then how does that modify the ocean?",
      answer: "Organisms and ecosystems thrive.",
    },
  ],

  //Hotspot Object
  hotspotData: [
    {
      id: "0",
      className: "main-screen",
      altText: "Fishing boat & oil drilling rig on ocean’s surface; drilling equipment extends to seafloor from rig; artificial reef on seafloor; some fish swimming.",
      hotspots: [
        {
          id: "oil-drilling",
          text: "Oil drilling",
          altText: "Oil drilling",
          serNo: 1,
        },
        {
          id: "overfishing",
          text: "Overfishing",
          altText: "Overfishing",
          serNo: 2,
        },
        {
          id: "artificial-reef",
          text: "Artificial reef",
          altText: "Artificial reef",
          serNo: 3,
        }
      ],
    }
  ],

  //Video Data
  videoData: [
    {
      srNo: "1",
      id: "1",
      alt: "Oil flowing up the pipe from the layered seafloor to the oil rig.",
      videoSrc: video1,
    },
    {
      srNo: "2",
      id: "2",
      alt: "An artificial reef on the seafloor; some seaweed is growing on the seafloor; some fish are swimming in the water.",
      videoSrc: video2,
    }
  ],

  //Insctuction Text for MCQ
  instructionText: "Read the following questions and select the correct answer.",

  //Question Heading
  questionHeading: "Question: -1- of 4",

  //Starting Toast Content
  instructionBoxContent: "Hello! Let’s dive in and explore how humans are dependent on the oceans and how our activities have modified them.",

  //Reset Toast Content
  resetMsgContent: globalConfig.resetPopupText,

  //Corret Toast Content
  correctToastMsg: globalConfig.correctToastMessage,

  //Incorrect Toast Content
  incorrectToastMsg: globalConfig.incorrectToastMessage,

  //Completion Popup Texts
  completionPopup: {
    ...globalConfig.completionPopup,
    content: "You have successfully completed the simulation."
  },

  //transition Popup Texts
  transitionPopup: {
    ...globalConfig.transitionPopup,
    content: "Now that you have explored human dependency and modifications on the ocean, it’s time to show what you know."
  },

  // Sim Introduction Heading
  introductionHeading: "How are humans dependent on the ocean? How do humans cause modifications to the ocean? The <b>ocean</b> is a large saltwater ecosystem that only thrives when everything is in balance. As humans, we are dependent on this ecosystem for food and nonrenewable resources like oil. Our <b>human activities</b> have consequences for this ecosystem. As a result, <b>modifications</b>, or changes, happen. The modifications can be positive or negative. Click on each label to find out more.",

  // activityHeading
  activityHeading: "Students will explore how humans are dependent on the ocean and also identify how human dependency on the ocean modifies the ecosystem.",

  // overfishingAlt
  overfishingAlt: "Fishing boat with net full of fish; Global Annual Seafood Amounts bar graph shows 180 million metric tons caught, 157 mmt consumed & 23 mmt discarded.",

  //infoText
  infoDialogText: "Click on the labels to learn more about how humans depend on and modify the ocean.",

  //Oil Drilling Live Text
  oilDrillingLiveText: "Drilling equipment sent from rig to seafloor using a pipe to break through the layers of the floor, allowing oil to flow up the pipe to the rig.",

  //Artificial Reef Live Text
  artificialReefLiveText: "Aug 2019 person installs metal dome on seafloor, Nov 2019 small coral growing, Dec 2020 more coral growing & many fish, Sept 2021 covered in coral.",

  //Reset Live Text
  resetLiveText: globalConfig.resetLiveText,

  //chart Aria label
  chartAriaLabel: 'Global Annual Seafood Amounts bar graph shows 180 million metric tons caught, 157 mmt consumed & 23 mmt discarded.',

  //Button Texts
  buttonLabels: { ...globalConfig.buttonLabels },
};

export default data;
