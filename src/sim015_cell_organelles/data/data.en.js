import screenText from "../assets/audios/Sim015-Scene1_1_CellWorld_1a.mp3";
import screenText2 from "../assets/audios/CellWorld_1b.mp3";
import nucleus from "../assets/audios/Nucleus.mp3";
import cellMembraneAnimal from "../assets/audios/CellMembrane_Animal.mp3";
import cellMembranePlant from "../assets/audios/CellMembrane_Plant.mp3";
import cellWall from "../assets/audios/CellWall_Plant.mp3";
import chloroplast from "../assets/audios/Chloroplast.mp3";
import cytoplasm from "../assets/audios/Cytoplasm.mp3";
import mitochondria from "../assets/audios/Mitochondria.mp3";
import ribosomes from "../assets/audios/Ribosomes.mp3";
import vacuoles from "../assets/audios/Vacuole_Animal.mp3";
import vacuole from "../assets/audios/Vacuole_Plant.mp3";
// import screenIntro from "../assets/audios/Scene2_0_Heading.mp3";
import screen2 from "../assets/audios/Sim015-Scene2.mp3";
import globalData from "../../app/data/data.en";

import { dragDropImg } from "./dragData";
const data = {
  combineDragImg: dragDropImg.cellMembPlusPlantImg,
  screenData: [
    {
      id: 0,
      component: "TBContainer",
    },
    {
      id: 1,
      component: "LRContainer",
    },
    {
      id: 2,
      component: "FullContainer",
    },
  ],
  buttonLabels: { ...globalData.buttonLabels },
  resetLiveText: globalData.resetLiveText,
  resetMsgContent: globalData.resetPopupText,
  toastMsg: {
    correct: globalData.correctToastMessage,
    incorrect: globalData.incorrectToastMessage,
    partialCorrect: "Some of the answers are correct.",
  },
  transitionPopup: {
    ...globalData.transitionPopup,
    content:
      "Now that you have explored various cell organelles, it is time to show what you know.",
  },
  startButton: "Start",
  buttonClose: "Close",
  buttonContinue: "Continue",
  buttonNext: "Next",
  buttonFinish: "Finish",
  buttonNo: "No",
  buttonYes: "Yes",
  // resetMsgContent: "Are you sure you want to reset?",
  // resetLiveText: "Your activity has been reset",
  audioAriaLable:
    "If you are using screen reader, turn off the audio button for better experience.",
  audioPlay: "Audio On",
  audioStop: "Audio Off",
  dragBtnText: "draggable",
  instructionBoxContent:
    "Click on an organelle to learn more about it, and then drag it to the correct cell.",
  InfoBoxContent:
    "Drag an organelle into the correct cell to learn more about it.",
  infoText: "Info",
  infoLabel: "Info",
  resetText: "Reset",
  resetLabel: "Reset",
  StartUpInfo: {
    buttonContinueText: globalData.buttonLabels.start,
    buttonContinueLabel: globalData.buttonLabels.start,
    instructionBoxContent:
      "Welcome to Cell World! Today, you will explore the organelles in plant and animal cells.",
  },
  header: {
    buttonReset: "Reset",
    buttonInfo: "Info",
    instructionBoxHeader: "Instructions",
    instructionBoxContent:
      "Drag an organelle into the correct cell to learn more about it.",
    buttonClose: "Close",
  },
  completionScreen: {
    ...globalData.completionPopup,
    content: "You have successfully identified the cell organelles!",
  },

  introduction: {
    screenFirstText:
      "Did you know cells are the smallest units of living things? Cells are made of many <strong>organelles</strong>, or parts. These organelles each have their own functions. Today, we will look at the organelles in plant and animal cells. Observe the two cell types. What differences do you see?",
    screenSecondText:
      "The animal cell is oval-shaped, while the plant cell is rectangular. Most of the organelles in cells are the same, but there are a few differences. We will find out why that is soon. Drag an organelle into a cell to find out more about it.",
  },

  introImages: [
    {
      srNo: 0,
      id: "AnimalCell",
      label: "Animal Cell",
      ariaLabel: "Animal cell without any organelles",
      altText: "Animal cell and plant cell without any organelles",
    },
    {
      srNo: 1,
      id: "PlantCell",
      label: "Plant Cell",
      ariaLabel: "Plant cell without any organelles",
      altText: "Animal cell and plant cell without any organelles",
    },
  ],
  animalDropZone: {
    ariaLabel: "Animal cell without any organelles",
    altText: "Animal cell with ",
    label: "Animal Cell",
  },
  plantDropZone: {
    ariaLabel: "Plant cell without any organelles",
    altText: "Plant cell with ",
    label: "Plant Cell",
  },
  draggableData: {
    introHeading: "Select an organelle and drag it to the correct cell. ",
    id: 0,
    ariaLabel: "Select an organelle and drag it to the correct cell. ",
    close: "Close",
    draggables: [
      {
        srNo: 0,
        id: "cellWall",
        label: "Cell Wall",
        ariaLabel: "cell wall",
        altText: {
          thumbnailAltText:
            "This is the cell wall. Only plants have this organelle. Notice the shape of it. The reason that plant cells are rectangular is due to this organelle. The cell wall is a tough, protective barrier that surrounds the outer membrane of plant cells. It also gives plant cells a rigid structure so that they can grow up straight and tall.",
          ariaAltText: "Cell wall",
        },
        infoText:
          "This is the <b>cell wall</b>. Only plants have this organelle. Notice the shape of it. The reason that plant cells are rectangular is due to this organelle. The cell wall is a tough, protective barrier that surrounds the outer membrane of plant cells. It also gives plant cells a rigid structure so that they can grow up straight and tall. ",
        audioLabel: "CELL_WALL",
        dargImg: dragDropImg.cellWallDragImg,
        assetURL: { plantAsset: dragDropImg.cellWallPlantImg },
        type: "plant-cell-wall",
      },
      {
        srNo: 1,
        id: "cellMembranePlant",
        label: "Cell Membrane",
        ariaLabel: "cell membrane",
        altText: {
          thumbnailAltText:
            "This is the cell membrane of a plant cell. The cell membrane is a lipid barrier that encloses the cytoplasm and controls what enters and exits the cell. Think of it like a gate.",
          ariaAltText: "Cell membrane in the shape of a rectangle",
        },
        // altText: "Plant cell without any organelles",
        infoText:
          "This is the <b>cell membrane</b> of a plant cell. The cell membrane is a lipid barrier that encloses the cytoplasm and controls what enters and exits the cell. Think of it like a gate. ",
        audioLabel: "CELL_MEMBRANE_PLANT",
        dargImg: dragDropImg.cellMembPlantDragImg,
        assetURL: { plantAsset: dragDropImg.cellMembPlantImg },
        type: "plant-cell-membrane",
      },
      {
        srNo: 2,
        id: "cellMembraneAnimal ",
        label: "Cell Membrane",
        ariaLabel: "cell membrane",
        altText: {
          thumbnailAltText:
            "This is the cell membrane of an animal cell. The cell membrane is a lipid barrier that encloses the cytoplasm and controls what enters and exits the cell. Think of it like a gate.",
          ariaAltText: "Cell membrane",
        },
        //altText: "Animal cell without any organelles",
        infoText:
          "This is the <b>cell membrane</b> of an animal cell. The cell membrane is a lipid barrier that encloses the cytoplasm and controls what enters and exits the cell. Think of it like a gate.",
        audioLabel: "CELL_MEMBRANE_ANIMAL",
        dargImg: dragDropImg.cellMembAnimalDragImg,
        assetURL: { animalAsset: dragDropImg.cellMembAnimalImg },
        type: "cell-membrane-animal",
      },
      {
        srNo: 3,
        id: "cytoplasmOne",
        label: "Cytoplasm",
        ariaLabel: "cytoplasm",
        altText: {
          thumbnailAltText:
            "This is the cytoplasm. Cytoplasm is the jellylike material inside the outer membrane of a cell that holds the nucleus, organelles, and other components of the cell.",
          ariaAltText: "Cytoplasm in the shape of a oval",
        },
        //altText: "Cytoplasm in the shape of a oval",
        infoText:
          "This is the <b>cytoplasm</b>. Cytoplasm is the jellylike material inside the outer membrane of a cell that holds the nucleus, organelles, and other components of the cell. ",
        audioLabel: "CYTOPLASM",
        dargImg: dragDropImg.cytoplasmAnimalDragImg,
        assetURL: { animalAsset: dragDropImg.cytoplasmAnimalImg },
        type: "cytoplasm-animal",
      },
      {
        srNo: 4,
        id: "cytoplasmTwo",
        label: "Cytoplasm",
        ariaLabel: "cytoplasm",
        altText: {
          thumbnailAltText:
            "This is the cytoplasm. Cytoplasm is the jellylike material inside the outer membrane of a cell that holds the nucleus, organelles, and other components of the cell.",
          ariaAltText: "Cytoplasm in the shape of a rectangle",
        },
        //altText: "Cytoplasm in the shape of a rectangle",
        infoText:
          "This is the <b>cytoplasm</b>. Cytoplasm is the jellylike material inside the outer membrane of a cell that holds the nucleus, organelles, and other components of the cell. ",
        audioLabel: "CYTOPLASM",
        dargImg: dragDropImg.cytoplasmPlantDragImg,
        assetURL: { plantAsset: dragDropImg.cytoplasmPlantImg },
        type: "cytoplasm-plant",
      },
      {
        srNo: 5,
        id: "nucleusOne",
        label: "Nucleus",
        ariaLabel: "nucleus",
        altText: {
          thumbnailAltText:
            "This is the nucleus, both plants and animals have one. The nucleus is a membrane-bound organelle in eukaryotic cells that contains the DNA. It is the control center of the cell.",
          ariaAltText: "Nucleus",
        },
        //altText: "Nucleus",
        infoText:
          "This is the <b>nucleus</b>, both plants and animals have one. The nucleus is a membrane-bound organelle in eukaryotic cells that contains the DNA. It is the control center of the cell. ",
        audioLabel: "NUCLEUS",
        dargImg: dragDropImg.nucleusDragImg,
        assetURL: {
          animalAsset: dragDropImg.nucleusAnimalImg,
          plantAsset: dragDropImg.nucleusPlantImg,
        },
        type: "nucleus",
      },

      {
        srNo: 6,
        id: "vacuole ",
        label: "Vacuole",
        ariaLabel: "1 large vacuole",
        altText: {
          thumbnailAltText:
            "This is the vacuole. Plants have one large vacuole to store water and food in. The vacuole also helps the plant stay upright when it is full.",
          ariaAltText: "One large vacuole",
        },
        infoText:
          "This is the <b>vacuole</b>. Plants have one large vacuole to store water and food in. The vacuole also helps the plant stay upright when it is full. ",
        audioLabel: "VACUOLE",
        dargImg: dragDropImg.vacuolePlantDragImg,
        assetURL: { plantAsset: dragDropImg.vacuolePlantImg },
        type: "vacuole-plant",
      },
      {
        srNo: 7,
        id: "mitochondriaOne",
        label: "Mitochondria",
        ariaLabel: "3 mitochondria",
        altText: {
          thumbnailAltText:
            "This is a mitochondrion. It is the powerhouse of the cell, meaning it functions in energy production. Plants and animals have multiple mitochondria in each cell.",
          ariaAltText: "Mitochondria",
        },
        // altText: "Mitochondria",
        infoText:
          "This is a <b>mitochondrion</b>. It is the powerhouse of the cell, meaning it functions in energy production. Plants and animals have multiple <b>mitochondria</b> in each cell.",
        audioLabel: "MITOCHONDRIA",
        dargImg: dragDropImg.mitochondriaDragImg,
        assetURL: {
          animalAsset: dragDropImg.mitochondriaAnimalImg,
          plantAsset: dragDropImg.mitochondriaPlantImg,
        },
        type: "mitochondria",
      },
      {
        srNo: 8,
        id: "ribosomesOne",
        label: "Ribosomes located on endoplasmic ",
        ariaLabel: "ribosomes on endoplasmic reticulum",
        altText: {
          thumbnailAltText:
            "These are ribosomes. They are small, spherical organelles that are responsible for making proteins in cells. They can be found attached to the walls of the endoplasmic reticulum, like shown here, or floating in the cytoplasm.",
          ariaAltText:
            "Ribosomes attached to the walls of the endoplasmic reticulum",
        },
        //altText: "Ribosomes attached to the walls of the endoplasmic reticulum",
        infoText:
          "These are <b>ribosomes</b>. They are small, spherical organelles that are responsible for making proteins in cells. They can be found attached to the walls of the endoplasmic reticulum, like shown here, or floating in the cytoplasm.",
        audioLabel: "RIBOSOMES",
        dargImg: dragDropImg.ribosomesDragImg,
        assetURL: {
          animalAsset: dragDropImg.ribosomesAnimalImg,
          plantAsset: dragDropImg.ribosomesPlantImg,
        },
        type: "ribosome",
      },

      {
        srNo: 9,
        id: "nucleusTwo",
        label: "Nucleus",
        ariaLabel: "nucleus",
        altText: {
          thumbnailAltText:
            "This is the nucleus, both plants and animals have one. The nucleus is a membrane-bound organelle in eukaryotic cells that contains the DNA. It is the control center of the cell",
          ariaAltText: "Nucleus",
        },
        //altText: "Nucleus",
        infoText:
          "This is the <b>nucleus</b>, both plants and animals have one. The nucleus is a membrane-bound organelle in eukaryotic cells that contains the DNA. It is the control center of the cell. ",
        audioLabel: "NUCLEUS",
        dargImg: dragDropImg.nucleusDragImg,
        assetURL: {
          animalAsset: dragDropImg.nucleusAnimalImg,
          plantAsset: dragDropImg.nucleusPlantImg,
        },
        type: "nucleus",
      },

      {
        srNo: 10,
        id: "chlroplast",
        label: "Chloroplast",
        ariaLabel: "3 cholroplast",
        altText: {
          thumbnailAltText:
            "This is the chloroplast. Chloroplasts are only found in plant cells. They are membrane-bound organelles that are the site of photosynthesis, meaning they help the plant make food. Animals are able to eat other organisms, so this organelle is not needed for them.",
          ariaAltText: "Chloroplast",
        },
        // altText: "Chloroplast",
        infoText:
          " This is the <b>chloroplast</b>. Chloroplasts are only found in plant cells. They are membrane-bound organelles that are the site of photosynthesis, meaning they help the plant make food. Animals are able to eat other organisms, so this organelle is not needed for them. ",
        audioLabel: "CHLOROPLAST",
        dargImg: dragDropImg.chloroplastDragImg,
        assetURL: { plantAsset: dragDropImg.chloroplastPlantImg },
        type: "plant-chloroplast",
      },
      {
        srNo: 11,
        id: "vacuoles",
        label: "Vacuoles",
        ariaLabel: "3 vacuoles",
        altText: {
          thumbnailAltText:
            "These are vacuoles. Animals have multiple small vacuoles to store water and food in.",
          ariaAltText: "Three small vacuoles",
        },
        //altText: "Three small vacuoles",
        infoText:
          "These are <b>vacuoles</b>. Animals have multiple small vacuoles to store water and food in. ",
        audioLabel: "VACUOLES",
        dargImg: dragDropImg.vacuoleAnimalDragImg,
        assetURL: { animalAsset: dragDropImg.vacuoleAnimalImg },
        type: "animal-vacuoles",
      },
      {
        srNo: 12,
        id: "mitochondriaTwo",
        label: "Mitochondria",
        ariaLabel: "3 mitochondria",
        altText: {
          thumbnailAltText:
            "This is a mitochondrion. It is the powerhouse of the cell, meaning it functions in energy production. Plants and animals have multiple mitochondria in each cell.",
          ariaAltText: "Mitochondria",
        },
        //altText: "Mitochondria",
        infoText:
          "This is a <b>mitochondrion</b>. It is the powerhouse of the cell, meaning it functions in energy production. Plants and animals have multiple <b>mitochondria</b> in each cell.",
        audioLabel: "MITOCHONDRIA",
        dargImg: dragDropImg.mitochondriaDragImg,
        assetURL: {
          animalAsset: dragDropImg.mitochondriaAnimalImg,
          plantAsset: dragDropImg.mitochondriaPlantImg,
        },
        type: "mitochondria",
      },
      {
        srNo: 13,
        id: "ribosomesTwo",
        label: "Ribosomes located on endoplasmic ",
        ariaLabel: "ribosomes on endoplasmic reticulum",
        altText: {
          thumbnailAltText:
            "These are ribosomes. They are small, spherical organelles that are responsible for making proteins in cells. They can be found attached to the walls of the endoplasmic reticulum, like shown here, or floating in the cytoplasm.",
          ariaAltText:
            "Ribosomes attached to the walls of the endoplasmic reticulum",
        },
        //altText: "Ribosomes attached to the walls of the endoplasmic reticulum",
        infoText:
          "These are <b>ribosomes</b>. They are small, spherical organelles that are responsible for making proteins in cells. They can be found attached to the walls of the endoplasmic reticulum, like shown here, or floating in the cytoplasm.",
        audioLabel: "RIBOSOMES",
        dargImg: dragDropImg.ribosomesDragImg,
        assetURL: {
          animalAsset: dragDropImg.ribosomesAnimalImg,
          plantAsset: dragDropImg.ribosomesPlantImg,
        },
        type: "ribosome",
      },
    ],
  },
  Screen2: {
    questionHeading: "Select the organelle that is being described.",
    options: [
      { name: "Chloroplast", isDisable: false },
      { name: "Cell membrane", isDisable: false },
      { name: "Mitochondrion", isDisable: false },
      { name: "Cytoplasm", isDisable: false },
      { name: "Nucleus", isDisable: false },
    ],
    aria: "is dropped",
    blank: "blank dropzone",
    description: "5 droppable area",
    questionList: [
      {
        value:
          "1. This organelle is only found in plant cells. It produces food for the plant.",
        label:
          "This organelle is only found in plant cells. It produces food for the plant. Dropzone",
        answerId: "Chloroplast",
        id: "drop_1",
      },
      {
        value:
          "2. This organelle is like a gatekeeper. It controls what goes in and out of the cell.",
        label:
          "This organelle is like a gatekeeper. It controls what goes in and out of the cell. Dropzone",
        answerId: "Cell membrane",
        id: "drop_2",
      },
      {
        value: "3. This organelle produces energy for the cell.",
        label: "This organelle produces energy for the cell. Dropzone",
        answerId: "Mitochondrion",
        id: "drop_3",
      },
      {
        value:
          "4. This organelle is the jellylike substance that holds the organelles in place.",
        label:
          "This organelle is the jellylike substance that holds the organelles in place. Dropzone",
        answerId: "Cytoplasm",
        id: "drop_4",
      },
      {
        value: "5. This organelle is the control center of the cell.",
        label: "This organelle is the control center of the cell. Dropzone",
        answerId: "Nucleus",
        id: "drop_5",
      },
    ],
  },
  sounds: [
    {
      id: "SCREEN_TEXT",
      src: screenText,
    },
    {
      id: "SCREEN_TEXT2",
      src: screenText2,
    },
    {
      id: "NUCLEUS",
      src: nucleus,
    },
    {
      id: "CELL_MEMBRANE_ANIMAL",
      src: cellMembraneAnimal,
    },
    {
      id: "CELL_MEMBRANE_PLANT",
      src: cellMembranePlant,
    },
    {
      id: "CELL_WALL",
      src: cellWall,
    },
    {
      id: "CHLOROPLAST",
      src: chloroplast,
    },
    {
      id: "CYTOPLASM",
      src: cytoplasm,
    },
    {
      id: "MITOCHONDRIA",
      src: mitochondria,
    },
    {
      id: "RIBOSOMES",
      src: ribosomes,
    },
    {
      id: "VACUOLES",
      src: vacuoles,
    },
    {
      id: "VACUOLE",
      src: vacuole,
    },
    {
      id: "SCREEN_INTRO",
      src: screen2,
    },
  ],
};

export default data;
