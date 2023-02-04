import commonData from "../../app/data/data.en";

const data = {
  buttonLabels: { ...commonData.buttonLabels },
  completionPopup: {
    ...commonData.completionPopup,
    content:
      "You have correctly sorted the bodies of water by the type of water they contain. Well done!",
  },
  transitionPopup: {
    ...commonData.transitionPopup,
    content:
      "Now that you have explored different bodies of water, show what you know!",
  },
  introImageAlt: "demo alt text bodies of water",
  check: commonData.buttonLabels.check,
  resetMsgContent: commonData.resetPopupText,
  resetLiveText: commonData.resetLiveText,
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  partiallyIncorrectToastMessage:
    "Some of your answers are correct. Try again!",
  activityHeading:
    "Most of Earth’s surface is covered by different bodies of water. Let’s explore them!",
  hintContent: "Click on the button on a body of water to learn about it.",
  hintContent2: "Sort the bodies of water by the type of water they contain.",

  instructionBoxContent:
    "Most of Earth’s surface is covered by different bodies of water. Let’s explore them!",
  bgAltText:
    "Most of Earth’s surface is covered by different bodies of water. Let’s explore them!",
  screen0:
    "Click on the buttons to learn more about the different bodies of water on Earth!",
  hotspotVisitAlt: "Visited",
  boxTitle: "Key Descriptors",
  dragBtnText: "draggable",
  liveAriaTxt: "dropped on",
  hotspots: [
    {
      id: "hotspot_1",
      visited: false,
      label: "Lakes",
      details: {
        id: "video_Hotspot_1",
        label_0: "Kinetic energy",
        label_1: "Gravitational potential energy",
        alt: "Student swinging & 2 bar graphs labeled kinetic energy (KE) & gravitational potential energy (GPE) changing; at peak swing GPE is maximum & KE is 0.",
        hotspotText:
          "Lakes are much smaller than oceans but bigger than ponds. Lakes have land all around them. At many lakes, you can see land on the other side. They are usually deep. Many lakes are filled with fresh water, but there are also saltwater lakes. Lakes get their water from streams or rivers. Unlike rivers and streams, lake water does not flow. Lake water can be clear, brown, or green from the algae that grows in the lake.",
      },
    },
    {
      id: "hotspot_2",
      visited: false,
      label: "Streams",
      details: {
        id: "video_Hotspot_2",
        label_0: "Kinetic energy",
        label_1: "Elastic potential energy",
        alt: "Shooting arrow & 2 bar graphs: kinetic energy (KE) & elastic potential energy (EPE) changing-EPE max when bow pulled back; KE max when arrow flying",
        hotspotText:
          "Streams are not as deep and wide as rivers. Like rivers, their water flows downhill along the land. The flowing water can move soil and small pebbles from one place to another. They get their clear, fresh water from melted snow and ice or from the rain. Streams flow into rivers. The fresh water in streams is usually clear.",
      },
    },
    {
      id: "hotspot_3",
      visited: false,
      label: "River",
      hotspotText:
        "The trampoline contains several springs that connect the mat to the metal frame. These springs stretch and contract as a person jumps on the trampoline. As the spring coils stretch, they store <b>elastic potential energy</b>. This energy can then be transferred into <b>kinetic energy</b>, helping the person to jump really high!",
      details: {
        id: "video_Hotspot_3",
        label_0: "Kinetic energy",
        label_1: "Elastic potential energy",
        alt: "Jumping on trampoline & 2 bar graphs: kinetic energy (KE) & elastic potential energy (EPE); EPE max-trampoline pushed down most; KE max-girl in air",
        hotspotText:
          "Most rivers are very wide and are deeper than streams. Their fresh water flows downhill along land into lakes or oceans. The moving water can move rocks and soil from one place to another, which can cause the water to be brown. The fresh water in rivers comes from streams and rain.",
      },
    },
    {
      id: "hotspot_4",
      visited: false,
      label: "Ponds",
      details: {
        id: "video_Hotspot_4",
        label_0: "Kinetic energy",
        label_1: "Chemical potential energy",
        alt: "Adding gas to lawn mower & 2 bar graphs: kinetic energy (KE) & chemical potential energy (CPE) changing; CPE increases as gas added & KE stays at 0",
        hotspotText:
          "Ponds are like lakes, only smaller. They are surrounded by land and contain fresh water. The water in ponds comes from streams or from the rain. Ponds are not as deep as lakes. Just like the water in lakes, the water in ponds doesn't flow. Pond water can be clear but sometimes looks green because of the green algae that grows in ponds.",
      },
    },
    {
      id: "hotspot_5",
      visited: false,
      label: "Puddles",
      details: {
        id: "video_Hotspot_5",
        label_0: "Kinetic energy",
        label_1: "Chemical potential energy",
        alt: "Adding gas to lawn mower & 2 bar graphs: kinetic energy (KE) & chemical potential energy (CPE) changing; CPE increases as gas added & KE stays at 0",
        hotspotText:
          " Puddles are very small areas filled with fresh water. They are all different sizes and shapes. Puddles appear in dips in the ground after it rains or when water splashes into them from somewhere else. They are usually not deep. The water in puddles can be clear but if the water mixes with the soil, it becomes brown. After a while, puddles dry up, and there is no more fresh water in them.",
      },
    },
    {
      id: "hotspot_6",
      visited: false,
      label: "Ocean",
      details: {
        id: "video_Hotspot_6",
        label_0: "Kinetic energy",
        label_1: "Chemical potential energy",
        alt: "Adding gas to lawn mower & 2 bar graphs: kinetic energy (KE) & chemical potential energy (CPE) changing; CPE increases as gas added & KE stays at 0",
        hotspotText:
          "Most of Earth’s surface is covered in oceans! Oceans are very large and deep. They contain salt water. Ocean water moves in waves that go up and down and back and forth. The moving water can break off pieces of rock and move them to another place. Because oceans move soil and rocks, ocean water can look brown, but it can also be clear.",
      },
    },
  ],
  venDiagramData: {
    instructionText:
      "Bodies of water contain fresh water, salt water, or may contain either fresh water or salt water. Sort the cards by the type of water they contain. Then, click the Check button to check your answer.",
    elements: [
      {
        id: "stored_energy",
        name: "Puddles",
        ariaLabel: "Puddles",
        accept: "kinetic_energy",
        isDisable: false,
      },
      {
        id: "energy_of_motion",
        name: "Ponds",
        ariaLabel: "Ponds",
        accept: "kinetic_energy",
        isDisable: false,
      },
      {
        id: "elastic_energy",
        name: "Lakes",
        ariaLabel: "Lakes",
        accept: "both",
        isDisable: false,
      },
      {
        id: "can_be_transformed",
        name: "Streams",
        ariaLabel: "Streams",
        accept: "kinetic_energy",
        isDisable: false,
      },
      {
        id: "gravitational_energy",
        name: "Rivers",
        ariaLabel: "Rivers",
        accept: "kinetic_energy",
        isDisable: false,
      },
      {
        id: "chemical_energy",
        name: "Oceans",
        ariaLabel: "Oceans",
        accept: "potential_energy",
        isDisable: false,
      },
    ],
    dropZones: [
      {
        id: "kinetic_energy",
        name: "Fresh water",
        label: "Fresh water droppable area",
        text: "Fresh water",
        answerId: "kinetic_energy",
      },
      {
        id: "both",
        name: "May contain fresh water or salt water",
        label: "May contain fresh water or salt water droppable area",
        text: "May contain fresh water or salt water",
        answerId: "both",
      },
      {
        id: "potential_energy",
        name: "Salt water",
        label: "Salt water droppable area",
        text: "Salt water",
        answerId: "potential_energy",
      },
    ],
  },
};

export default data;
