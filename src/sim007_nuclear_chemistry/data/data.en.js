import globalConfig from "../../app/data";

const data = {
  nuclearData: [
    {
      serialNo: 0,
      id: "question1",
      queslabel:
        "Thorium-234 with 90 protons yields Radon-230 with 88 protons plus blank",
      anslabel:
        "Thorium-234 with 90 protons yields Radon-230 with 88 protons plus an alpha particle with 2 protons and 2 neutrons",
      answer: "alpha", //234 90Th-->230 88Ra
      equation: {
        reactant1: {
          show: true,
          protons: "234",
          atomicNumber: "90",
          atomicSymbol: "Th",
        },
        reactant2: {
          show: true,
          protons: "230",
          atomicNumber: "88",
          atomicSymbol: "Ra",
        },
        resultant: {
          show: false,
          protons: "4",
          atomType: "alpha",
          atomicNumber: "2",
          atomicSymbol: "He",
        },
      },
    },
    {
      serialNo: 1,
      id: "question2",
      queslabel:
        "Technetium-99 with 43 protons yields Technetium-99 with 43 protons plus blank",
      anslabel:
        "Technetium-99 with 43 protons yields Technetium-99 with 43 protons plus a gamma ray",
      answer: "gamma", //99 43Tc+99 43Tc
      equation: {
        reactant1: {
          show: true,
          protons: "99",
          atomicNumber: "43",
          atomicSymbol: "Tc",
        },
        reactant2: {
          show: true,
          protons: "99",
          atomicNumber: "43",
          atomicSymbol: "Tc",
        },
        resultant: {
          show: false,
          protons: "0",
          atomType: "gamma",
          atomicNumber: "0",
          atomicSymbol: "γ",
        },
      },
    },
    {
      serialNo: 2,
      id: "question3",
      queslabel:
        "Beryllium-7 with 4 protons yields Beryllium-7 with 4 protons plus blank ",
      anslabel:
        "Beryllium-7 with 4 protons yields Beryllium-7 with 4 protons plus a gamma ray",
      answer: "gamma", //7 4 Be-->7 4 Be
      equation: {
        reactant1: {
          show: true,
          protons: "7",
          atomicNumber: "4",
          atomicSymbol: "Be",
        },
        reactant2: {
          show: true,
          protons: "7",
          atomicNumber: "4",
          atomicSymbol: "Be",
        },
        resultant: {
          show: false,
          protons: "0",
          atomType: "gamma",
          atomicNumber: "0",
          atomicSymbol: "γ",
        },
      },
    },
    {
      serialNo: 3,
      id: "question4",
      queslabel:
        "Radon-222 with 86 protons yields Polonium-218 with 84 protons plus blank",
      anslabel:
        "Radon-222 with 86 protons yields Polonium-218 with 84 protons plus an alpha particle with 2 protons and 2 neutrons",
      answer: "alpha", //222 86Rn-->218 84Po
      equation: {
        reactant1: {
          show: true,
          protons: "222",
          atomicNumber: "86",
          atomicSymbol: "Rn",
        },
        reactant2: {
          show: true,
          protons: "218",
          atomicNumber: "84",
          atomicSymbol: "Po",
        },
        resultant: {
          show: false,
          protons: "4",
          atomType: "alpha",
          atomicNumber: "2",
          atomicSymbol: "He",
        },
      },
    },
    {
      serialNo: 4,
      id: "question5",
      queslabel:
        "Iodine-129 with 53 protons yields Xenon-129 with 54 protons plus blank",
      anslabel:
        "Iodine-129 with 53 protons yields Xenon-129 with 54 protons plus a beta particle",
      answer: "beta", //129 53 I-->129 54 Xe
      equation: {
        reactant1: {
          show: true,
          protons: "129",
          atomicNumber: "53",
          atomicSymbol: "I",
        },
        reactant2: {
          show: true,
          protons: "129",
          atomicNumber: "54",
          atomicSymbol: "Xe",
        },
        resultant: {
          show: false,
          protons: "0",
          atomType: "beta",
          atomicSymbol: "e",
          atomicNumber: "-1",
        },
      },
    },
    {
      serialNo: 5,
      id: "question6",
      queslabel:
        "Uranium-235 with 92 protons yields blank plus Thorium-231 with 90 protons",
      anslabel:
        "Uranium-235 with 92 protons yields an alpha particle with 2 protons and 2 neutrons plus Thorium-231 with 90 protons",
      answer: "alpha", //235 92 U ⟶ _____ + 231 90 Th
      equation: {
        reactant1: {
          show: true,
          protons: "235",
          atomicNumber: "92",
          atomicSymbol: "U",
        },
        reactant2: {
          show: true,
          protons: "231",
          atomicNumber: "90",
          atomicSymbol: "Th",
        },
        resultant: {
          show: false,
          protons: "4",
          atomType: "alpha",
          atomicNumber: "2",
          atomicSymbol: "He",
        },
      },
    },
    {
      serialNo: 6,
      id: "question7",
      queslabel:
        "Americium-241 with 95 protons yields Neptunium-237 with 93 protons plus blank",
      anslabel:
        "Americium-241 with 95 protons yields Neptunium-237 with 93 protons plus an alpha particle with 2 protons and 2 neutrons",
      answer: "alpha", //241 95Am → 237 93Np
      equation: {
        reactant1: {
          show: true,
          protons: "241",
          atomicNumber: "95",
          atomicSymbol: "Am",
        },
        reactant2: {
          show: true,
          protons: "237",
          atomicNumber: "93",
          atomicSymbol: "Np",
        },
        resultant: {
          show: false,
          protons: "4",
          atomType: "alpha",
          atomicNumber: "2",
          atomicSymbol: "He",
        },
      },
    },
    {
      serialNo: 7,
      id: "question8",
      queslabel:
        "Actinium-227 with 89 protons yields Thorium-227 with 90 protons plus blank",
      anslabel:
        "Actinium-227 with 89 protons yields Thorium-227 with 90 protons plus a beta particle",
      answer: "beta", //227 89Ac → 227 90Th
      equation: {
        reactant1: {
          show: true,
          protons: "227",
          atomicNumber: "89",
          atomicSymbol: "Ac",
        },
        reactant2: {
          show: true,
          protons: "227",
          atomicNumber: "90",
          atomicSymbol: "Th",
        },
        resultant: {
          show: false,
          protons: "0",
          atomType: "beta",
          atomicSymbol: "e",
          atomicNumber: "-1",
        },
      },
    },
    {
      serialNo: 8,
      id: "question9",
      queslabel:
        "Carbon-14 with 6 protons yields Nitrogen-14 with 7 protons plus blank",
      anslabel:
        "Carbon-14 with 6 protons yields Nitrogen-14 with 7 protons plus a beta particle",
      answer: "beta", //14 6C → 14 7N
      equation: {
        reactant1: {
          show: true,
          protons: "14",
          atomicNumber: "6",
          atomicSymbol: "C",
        },
        reactant2: {
          show: true,
          protons: "14",
          atomicNumber: "7",
          atomicSymbol: "N",
        },
        resultant: {
          show: false,
          protons: "0",
          atomType: "beta",
          atomicSymbol: "e",
          atomicNumber: "-1",
        },
      },
    },
    {
      serialNo: 9,
      id: "question10",
      queslabel:
        "Thorium-234 with 90 protons yields Thorium-234 with 90 protons plus blank",
      anslabel:
        "Thorium-234 with 90 protons yields Thorium-234 with 90 protons plus a gamma ray",
      answer: "gamma", //234 90Th →234 90Th
      equation: {
        reactant1: {
          show: true,
          protons: "234",
          atomicNumber: "90",
          atomicSymbol: "Th",
        },
        reactant2: {
          show: true,
          protons: "234",
          atomicNumber: "90",
          atomicSymbol: "Th",
        },
        resultant: {
          show: false,
          protons: "0",
          atomType: "gamma",
          atomicNumber: "0",
          atomicSymbol: "γ",
        },
      },
    },
  ],
  answerOptions: [
    {
      id: "alpha",
      disabled: false,
      text: "Alpha",
      label: "Alpha particle with 2 protons and 2 neutrons",
      atom: {
        show: true,
        protons: "4",
        atomicNumber: "2",
        atomicSymbol: "He",
      },
    },
    {
      id: "beta",
      disabled: false,
      text: "Beta",
      label: "Beta particle",
      atom: {
        show: true,
        protons: "0",
        atomicNumber: "-1",
        atomicSymbol: "e",
      },
    },
    {
      id: "gamma",
      disabled: false,
      text: "Gamma",
      label: "Gamma ray",
      atom: {
        show: true,
        protons: "0",
        atomicNumber: "0",
        atomicSymbol: "γ",
      },
    },
  ],
  questionHeading: "Reaction -1- of 10.",
  resetLiveText: globalConfig.resetLiveText,
  rightMsg: globalConfig.correctToastMessage,
  resetPopupText: globalConfig.resetPopupText,
  buttonLabels: { ...globalConfig.buttonLabels },
  warningBoxHeader: globalConfig.incorrectToastMessage,
  reactionTypeQuestion:
    "Select the correct radioactive decay particle to balance the nuclear equation shown above.",
  infoContent:
    "Go through 10 different nuclear equations and select the right radioactive particle to balance them.",
  instructionBoxContent:
    "The following nuclear reactions are missing one of the products. Correctly identify the missing product in the nuclear reaction.",
  completionPopup: {
    ...globalConfig.completionPopup,
    content: "You have correctly balanced all the nuclear reactions.",
  },
};

export default data;
