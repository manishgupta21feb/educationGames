import globalConfig from "../../app/data";

const data = {
  nuclearData: [
    {
      serialNo: 0,
      id: "question1",
      queslabel:
        "Torio-234 con 90 protones produce radón-230 con 88 protones más un espacio en blanco.",
      anslabel:
        "Torio-234 con 90 protones produce radón-230 con 88 protones más una partícula alfa con 2 protones y 2 neutrones.",
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
        "Tecnecio-99 con 43 protones produce tecnecio-99 con 43 protones más un espacio en blanco.",
      anslabel:
        "Tecnecio-99 con 43 protones produce tecnecio-99 con 43 protones más un rayo gamma.",
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
        "Berilio-7 con 4 protones produce berilio-7 con 4 protones más un espacio en blanco.",
      anslabel:
        "Berilio-7 con 4 protones produce berilio-7 con 4 protones más un rayo gamma.",
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
        "Radón-222 con 86 protones produce polonio-218 con 84 protones más un espacio en blanco.",
      anslabel:
        "Radón-222 con 86 protones produce polonio-218 con 84 protones más una partícula alfa con 2 protones y 2 neutrones.",
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
        "Yodo-129 con 53 protones produce xenón-129 con 54 protones más un espacio en blanco.",
      anslabel:
        "Yodo-129 con 53 protones produce xenón-129 con 54 protones más una partícula beta.",
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
        "Uranio-235 con 92 protones produce un espacio en blanco más torio-231 con 90 protones.",
      anslabel:
        "Uranio-235 con 92 protones produce una partícula alfa con 2 protones y 2 neutrones más torio-231 con 90 protones.  ",
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
        "Americio-241 con 95 protones produce neptunio-237 con 93 protones más un espacio en blanco.",
      anslabel:
        "Americio-241 con 95 protones produce neptunio-237 con 93 protones más una partícula alfa con 2 protones y 2 neutrones.",
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
        "Actinio-227 con 89 protones produce torio-227 con 90 protones más un espacio en blanco.",
      anslabel:
        "Actinio-227 con 89 protones produce torio-227 con 90 protones más una partícula beta.",
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
        "Carbono-14 con 6 protones produce nitrógeno-14 con 7 protones más un espacio en blanco.",
      anslabel:
        "Carbono-14 con 6 protones produce nitrógeno-14 con 7 protones más una partícula beta.",
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
        "Torio-234 con 90 protones produce torio-234 con 90 protones más un espacio en blanco.",
      anslabel:
        "Torio-234 con 90 protones produce torio-234 con 90 protones más un rayo gamma.",
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
      text: "Alfa",
      label: "Partícula alfa con 2 protones y 2 neutrones",
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
      label: "Partícula beta",
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
      label: "Rayo gamma",
      atom: {
        show: true,
        protons: "0",
        atomicNumber: "0",
        atomicSymbol: "γ",
      },
    },
  ],
  questionHeading: "Reacción -1- de 10.",
  resetLiveText: globalConfig.resetLiveText,
  rightMsg: globalConfig.correctToastMessage,
  resetPopupText: globalConfig.resetPopupText,
  buttonLabels: { ...globalConfig.buttonLabels },
  warningBoxHeader: globalConfig.incorrectToastMessage,
  reactionTypeQuestion:
    "Selecciona la partícula radiactiva correcta para balancear la ecuación nuclear que aparece arriba.",
  infoContent:
    "Selecciona la partícula radiactiva correcta para balancear estas 10 ecuaciones nucleares.",
  instructionBoxContent:
    "En las siguientes reacciones nucleares falta uno de los productos. Identifica correctamente el producto que falta en la reacción nuclear.",
  completionPopup: {
    ...globalConfig.completionPopup,
    content: "Has balanceado correctamente todas las reacciones nucleares.",
  },
};

export default data;
