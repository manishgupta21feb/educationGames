import commonData from "../../app/data/data.en";

// labbackground //
import labBackground from "../assets/images/main.png";

// Tabs Icon //

import waterImg from "../assets/images/water.png";
import vinegarImg from "../assets/images/vinegar.png";
import sugarImg from "../assets/images/sugar.png";
import ironImg from "../assets/images/iron.png";
import sodaImg from "../assets/images/soda.png";
import beadsImg from "../assets/images/beads.png";
import beaker from "../assets/images/beaker.png";

// Videos //
import video1 from "../assets/videos/water_vinegar.mp4";
import video2 from "../assets/videos/water_sugar.mp4";
import video3 from "../assets/videos/water_iron.mp4";
import video4 from "../assets/videos/water_soda.mp4";
import video5 from "../assets/videos/water_beads.mp4";
import video6 from "../assets/videos/vinegar_sugar.mp4";
import video7 from "../assets/videos/vinegar_iron.mp4";
import video8 from "../assets/videos/vinegar_soda.mp4";
import video9 from "../assets/videos/vinegar_beads.mp4";
import video10 from "../assets/videos/sugar_iron.mp4";
import video11 from "../assets/videos/sugar_soda.mp4";
import video12 from "../assets/videos/sugar_beads.mp4";
import video13 from "../assets/videos/iron_soda.mp4";
import video14 from "../assets/videos/iron_beads.mp4";
import video15 from "../assets/videos/soda_beads.mp4";

import bgImg1 from "../assets/images/water_vinegar.png";
import bgImg2 from "../assets/images/water_sugar.png";
import bgImg3 from "../assets/images/water_iron.png";
import bgImg4 from "../assets/images/water_soda.png";
import bgImg5 from "../assets/images/water_beads.png";
import bgImg6 from "../assets/images/vinegar_sugar.png";
import bgImg7 from "../assets/images/vinegar_iron.png";
import bgImg8 from "../assets/images/vinegar_soda.png";
import bgImg9 from "../assets/images/vinegar_beads.png";
import bgImg10 from "../assets/images/sugar_iron.png";
import bgImg11 from "../assets/images/sugar_soda.png";
import bgImg12 from "../assets/images/sugar_beads.png";
import bgImg13 from "../assets/images/iron_soda.png";
import bgImg14 from "../assets/images/iron_beads.png";
import bgImg15 from "../assets/images/soda_beads.png";

const data = {
  labBackgroundData: {
    source: labBackground,
    alt: "On a lab table an empty beaker on a digital scale reads 10 g.  Below are beakers with water, vinegar, sugar, iron filings, baking soda & plastic beads",
    updatedAlt:
      "from below was added to the beaker on the scale. The scale reads",
  },
  learningObjective:
    "In this simulation the learner will observe and measure the masses and physical properties of various substances before and after they are mixed.",
  introductoryText:
    "What happens when you combine different materials? Do they maintain their physical properties? Test various combinations of materials to find out.",
  section1Instruction:
    "Click on one item at a time to measure its mass on the digital scale. Once you have measured the mass, click on it again to move it back to the table.<br/>The mass of the beaker is 10 g.",
  section2Instruction:
    "Click on two items to mix them together. Once you are done observing the mixture, click on the items to move them back to the table, and make new selections.<br/>The mass of the beaker is 10 g.",
  transitionPopup: {
    ...commonData.transitionPopup,
    content:
      "Now that you have measured the masses of all the materials, let’s combine some of them and see what happens.",
  },
  completionPopup: {
    ...commonData.completionPopup,
    content: "You have successfully completed the simulation.",
  },
  resetPopupData: commonData.resetPopupText,
  table1TopContent: "Outcome",
  table2TopContent: "Outcome",
  section1TableHeader: { col1: "Substance", col2: "State", col3: "Mass (g)" },
  section2TableHeader: {
    col1: "Substance 1",
    col2: "Substance 2",
    col3: "Combined mass (g)",
  },
  transitionMessage:
    "Good job! Now that you have measured the masses of all the materials, let’s combine some of them and see what happens.",
  labels: {
    beaker: {
      content: "beaker",
      name: "beaker",
      weight: 10,
      source: beaker,
      isSelected: true,
      isMeasured: true,
      currentMixture: false,
      type: "none",
      liveText: "NA",
      compoundRemovedLive: "NA",
    },
    water: {
      content: "Water",
      name: "water",
      weight: 50,
      source: waterImg,
      emptyContainerSrc: beaker,
      isSelected: false,
      isMeasured: false,
      currentMixture: false,
      type: "Liquid",
      liveText:
        "Water is poured on the weighing scale and scale reads 50 gram while dropping water.",
      compoundRemovedLive:
        "Water is removed from the weighing scale and scale reads 10 gram while removing water.",
    },
    vinegar: {
      content: "Vinegar",
      name: "vinegar",
      weight: 60,
      source: vinegarImg,
      emptyContainerSrc: beaker,
      isSelected: false,
      isMeasured: false,
      currentMixture: false,
      type: "Liquid",
      liveText:
        "Vinegar is poured on the weighing scale and scale reads 60 gram while dropping Vinegar.",
      compoundRemovedLive:
        "Vinegar is removed from the weighing scale and scale reads 10 gram while removing Vinegar.",
    },
    sugar: {
      content: "Sugar",
      name: "sugar",
      weight: 80,
      source: sugarImg,
      emptyContainerSrc: beaker,
      isSelected: false,
      isMeasured: false,
      currentMixture: false,
      type: "Solid",
      liveText:
        "Sugar is poured on the weighing scale and scale reads 80 gram while dropping Sugar.",
      compoundRemovedLive:
        "Sugar is removed from the weighing scale and scale reads 10 gram while removing Sugar.",
    },
    iron: {
      content: "Iron filings",
      name: "iron",
      weight: 90,
      source: ironImg,
      emptyContainerSrc: beaker,
      isSelected: false,
      isMeasured: false,
      currentMixture: false,
      type: "Solid",
      liveText:
        "Iron filings is poured on the weighing scale and scale reads 90 gram while dropping Iron filings.",
      compoundRemovedLive:
        "Iron filings is removed from the weighing scale and scale reads 10 gram while removing Iron filings.",
    },
    soda: {
      content: "Baking soda",
      name: "soda",
      weight: 95,
      source: sodaImg,
      emptyContainerSrc: beaker,
      isSelected: false,
      isMeasured: false,
      currentMixture: false,
      type: "Solid",
      liveText:
        "Baking soda is poured on the weighing scale and scale reads 95 gram while dropping Baking soda.",
      compoundRemovedLive:
        "Baking soda is removed from the weighing scale and scale reads 10 gram while removing Baking soda.",
    },
    beads: {
      content: "Plastic beads",
      name: "beads",
      weight: 263,
      source: beadsImg,
      emptyContainerSrc: beaker,
      isSelected: false,
      isMeasured: false,
      currentMixture: false,
      type: "Solid",
      liveText:
        "Plastic beads is poured on the weighing scale and scale reads 263 gram while dropping Plastic beads.",
      compoundRemovedLive:
        "Plastic beads is removed from the weighing scale and scale reads 10 gram while removing Plastic beads.",
    },
  },
  compoundVideos: {
    vid1: {
      keywords: "water vinegar",
      id: "poster1",
      videoSrc: video1,
      bgSrc: bgImg1,
      isViewed: false,
      alt: "The water and vinegar from below were both added to the one beaker on the scale and mixed together. The scale reads 100 gram.",
      altEnd:
        "The water and vinegar from below were both added to the one beaker on the scale and mixed together. The scale reads 100 gram.",
      liveText:
        "Water and vinegar are poured on the weighing scale and scale reads 100 gram while dropping water and vinegar.",
      compoundRemovedLive:
        "Water and vinegar are removed from the weighing scale and scale reads 10 gram while removing water and vinegar.",
    },
    vid2: {
      keywords: "water sugar",
      id: "poster2",
      videoSrc: video2,
      bgSrc: bgImg2,
      isViewed: false,
      alt: "The water and sugar from below were both added to the one beaker on the scale and mixed together. The scale reads 120 gram.",
      altEnd:
        "The water and sugar from below were both added to the one beaker on the scale and mixed together. The scale reads 120 gram.",
      liveText:
        "Water and sugar are poured on the weighing scale and scale reads 120 gram while dropping water and sugar.",
      compoundRemovedLive:
        "Water and sugar are removed from the weighing scale and scale reads 10 gram while removing water and sugar.",
    },
    vid3: {
      keywords: "water iron",
      id: "poster3",
      videoSrc: video3,
      bgSrc: bgImg3,
      isViewed: false,
      alt: "The water and iron filings from below were both added to the one beaker on the scale and mixed together. The scale reads 130 gram.",
      altEnd:
        "The water and iron filings from below were both added to the one beaker on the scale and mixed together. The scale reads 130 gram.",
      liveText:
        "Water and iron filings are poured on the weighing scale and scale reads 130 gram while dropping water and iron filings.",
      compoundRemovedLive:
        "Water and iron filings are removed from the weighing scale and scale reads 10 gram while removing water and iron filings.",
    },
    vid4: {
      keywords: "water soda",
      id: "poster4",
      videoSrc: video4,
      bgSrc: bgImg4,
      isViewed: false,
      alt: "The water and baking soda from below were both added to the one beaker on the scale and mixed together. The scale reads 135 gram.",
      altEnd:
        "The water and baking soda from below were both added to the one beaker on the scale and mixed together. The scale reads 135 gram.",
      liveText:
        "Water and baking soda are poured on the weighing scale and scale reads 135 gram while dropping water and baking soda.",
      compoundRemovedLive:
        "Water and baking soda are removed from the weighing scale and scale reads 10 gram while removing water and baking soda.",
    },
    vid5: {
      keywords: "water beads",
      id: "poster5",
      videoSrc: video5,
      bgSrc: bgImg5,
      isViewed: false,
      alt: "The water and plastic beads from below were both added to the one beaker on the scale and mixed together. The scale reads 303 gram.",
      altEnd:
        "The water and plastic beads from below were both added to the one beaker on the scale and mixed together. The scale reads 303 gram.",
      liveText:
        "Water and plastic beads are poured on the weighing scale and scale reads 303 gram while dropping water and plastic beads.",
      compoundRemovedLive:
        "Water and plastic beads are removed from the weighing scale and scale reads 10 gram while removing water and plastic beads.",
    },
    vid6: {
      keywords: "vinegar sugar",
      id: "poster6",
      videoSrc: video6,
      bgSrc: bgImg6,
      isViewed: false,
      alt: "The vinegar and sugar from below were both added to the one beaker on the scale and mixed together. The scale reads 130 gram.",
      altEnd:
        "The vinegar and sugar from below were both added to the one beaker on the scale and mixed together. The scale reads 130 gram.",
      liveText:
        "Vinegar and sugar are poured on the weighing scale and scale reads 130 gram while dropping vinegar and sugar.",
      compoundRemovedLive:
        "Vinegar and sugar are removed from the weighing scale and scale reads 10 gram while removing vinegar and sugar.",
    },
    vid7: {
      keywords: "vinegar iron",
      id: "poster7",
      videoSrc: video7,
      bgSrc: bgImg7,
      isViewed: false,
      alt: "The vinegar and iron filings from below were both added to the one beaker on the scale and mixed together. The scale reads 140 gram.",
      altEnd:
        "The vinegar and iron filings from below were both added to the one beaker on the scale and mixed together. The scale reads 140 gram.",
      liveText:
        "Vinegar and iron filings are poured on the weighing scale and scale reads 140 gram while dropping vinegar and iron filings.",
      compoundRemovedLive:
        "Vinegar and iron filings are removed from the weighing scale and scale reads 10 gram while removing vinegar and iron filings.",
    },
    vid8: {
      keywords: "vinegar soda",
      id: "poster8",
      videoSrc: video8,
      bgSrc: bgImg8,
      isViewed: false,
      alt: "The vinegar and baking soda from below were both added to the one beaker on the scale and mixed together. The scale reads 145 gram.",
      altEnd:
        "The vinegar and baking soda from below were both added to the one beaker on the scale and mixed together. The scale reads 145 gram.",
      liveText:
        "Vinegar and baking soda are poured on the weighing scale and scale reads 145 gram while dropping vinegar and baking soda.",
      compoundRemovedLive:
        "Vinegar and baking soda are removed from the weighing scale and scale reads 10 gram while removing vinegar and baking soda.",
    },
    vid9: {
      keywords: "vinegar beads",
      id: "poster9",
      videoSrc: video9,
      bgSrc: bgImg9,
      isViewed: false,
      alt: "The vinegar and plastic beads from below were both added to the one beaker on the scale and mixed together. The scale reads 313 gram.",
      altEnd:
        "The vinegar and plastic beads from below were both added to the one beaker on the scale and mixed together. The scale reads 313 gram.",
      liveText:
        "Vinegar and plastic beads are poured on the weighing scale and scale reads 313 gram while dropping vinegar and plastic beads.",
      compoundRemovedLive:
        "Vinegar and plastic beads are removed from the weighing scale and scale reads 10 gram while removing vinegar and plastic beads.",
    },
    vid10: {
      keywords: "sugar iron",
      id: "poster10",
      videoSrc: video10,
      bgSrc: bgImg10,
      isViewed: false,
      alt: "The sugar and iron filings from below were both added to the one beaker on the scale and mixed together. The scale reads 160 gram.",
      altEnd:
        "The sugar and iron filings from below were both added to the one beaker on the scale and mixed together. The scale reads 160 gram.",
      liveText:
        "Sugar and iron filings are poured on the weighing scale and scale reads 160 gram while dropping sugar and iron filings.",
      compoundRemovedLive:
        "Sugar and iron filings are removed from the weighing scale and scale reads 10 gram while removing sugar and iron filings.",
    },
    vid11: {
      keywords: "sugar soda",
      id: "poster11",
      videoSrc: video11,
      bgSrc: bgImg11,
      isViewed: false,
      alt: "The sugar and baking soda from below were both added to the one beaker on the scale and mixed together. The scale reads 165 gram.",
      altEnd:
        "The sugar and baking soda from below were both added to the one beaker on the scale and mixed together. The scale reads 165 gram.",
      liveText:
        "Sugar and baking soda are poured on the weighing scale and scale reads 165 gram while dropping sugar and baking soda.",
      compoundRemovedLive:
        "Sugar and baking soda are removed from the weighing scale and scale reads 10 gram while removing sugar and baking soda.",
    },
    vid12: {
      keywords: "sugar beads",
      id: "poster12",
      videoSrc: video12,
      bgSrc: bgImg12,
      isViewed: false,
      alt: "The sugar and plastic beads from below were both added to the one beaker on the scale and mixed together. The scale reads 333 gram.",
      altEnd:
        "The sugar and plastic beads from below were both added to the one beaker on the scale and mixed together. The scale reads 333 gram.",
      liveText:
        "Sugar and plastic beads are poured on the weighing scale and scale reads 333 gram while dropping sugar and plastic beads.",
      compoundRemovedLive:
        "Sugar and plastic beads are removed from the weighing scale and scale reads 10 gram while removing sugar and plastic beads.",
    },
    vid13: {
      keywords: "iron soda",
      id: "poster13",
      videoSrc: video13,
      bgSrc: bgImg13,
      isViewed: false,
      alt: "The iron filings and baking soda from below were both added to the one beaker on the scale and mixed together. The scale reads 175 gram.",
      altEnd:
        "The iron filings and baking soda from below were both added to the one beaker on the scale and mixed together. The scale reads 175 gram.",
      liveText:
        "Iron filings and baking soda are poured on the weighing scale and scale reads 175 gram while dropping iron filings and baking soda.",
      compoundRemovedLive:
        "Iron filings and baking soda are removed from the weighing scale and scale reads 10 gram while removing iron filings and baking soda.",
    },
    vid14: {
      keywords: "iron beads",
      id: "poster14",
      videoSrc: video14,
      bgSrc: bgImg14,
      isViewed: false,
      alt: "The iron filings and plastic beads from below were both added to the one beaker on the scale and mixed together. The scale reads 343 gram.",
      altEnd:
        "The iron filings and plastic beads from below were both added to the one beaker on the scale and mixed together. The scale reads 343 gram.",
      liveText:
        "Iron filings and plastic beads are poured on the weighing scale and scale reads 343 gram while dropping iron filings and plastic beads.",
      compoundRemovedLive:
        "Iron filings and plastic beads are removed from the weighing scale and scale reads 10 gram while removing iron filings and plastic beads.",
    },
    vid15: {
      keywords: "soda beads",
      id: "poster15",
      videoSrc: video15,
      bgSrc: bgImg15,
      isViewed: false,
      alt: "The baking soda and plastic beads from below were both added to the one beaker on the scale and mixed together. The scale reads 348 gram.",
      altEnd:
        "The baking soda and plastic beads from below were both added to the one beaker on the scale and mixed together. The scale reads 348 gram.",
      liveText:
        "Baking soda and plastic beads are poured on the weighing scale and scale reads 348 gram while dropping baking soda and plastic beads.",
      compoundRemovedLive:
        "Baking soda and plastic beads are removed from the weighing scale and scale reads 348 gram while removing baking soda and plastic beads.",
    },
  },
  simButtonLabels: { mix: "Mix" },
  unitData: "g",
  selectionContent: "selected",
  deselectionContent: "deselected",
  hint: "First, click on one item at a time to measure its mass on the digital scale. Then, click on two items to mix them together.",

  accessibilityContent: {
    clearCompound: "Remove compound from the weighing scale",
    clearMixture: "Remove mixture from the weighing scale",
  },
  buttonLabels: { ...commonData.buttonLabels },
};

export default data;
