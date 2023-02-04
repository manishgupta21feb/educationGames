import globalCommonData from "../../app/data/data.en";

const data = {
  equationsData: [
    {
      srNo: "1",
      id: "question1",
      neutrons: "6",
      charge: "1-",
      alt: "charge negative one",
      element: "",
      class: "carbon",
      selectOptions: {
        protons: [
          {
            id: 2,
            text: "7",
            value: 7,
          },
          {
            id: 3,
            text: "6",
            value: 6,
          },
          {
            id: 4,
            text: "8",
            value: 8,
          },
        ],
        electrons: [
          {
            id: 2,
            text: "7",
            value: 7,
          },
          {
            id: 3,
            text: "6",
            value: 6,
          },
          {
            id: 4,
            text: "5",
            value: 5,
          },
        ],
        elementName: [
          {
            id: 2,
            text: "Carbon",
            value: "Carbon",
          },
          {
            id: 3,
            text: "Oxygen",
            value: "Oxygen",
          },
          {
            id: 4,
            text: "Nitrogen",
            value: "Nitrogen",
          },
        ],
        massNumber: [
          {
            id: 2,
            text: "12",
            value: 12,
          },
          {
            id: 3,
            text: "13",
            value: 13,
          },
          {
            id: 4,
            text: "19",
            value: 19,
          },
        ],
      },
      answer: {
        protons: "6",
        electrons: "7",
        elementName: "Carbon",
        massNumber: "12",
      },
      altText:
        "An atom with a nucleus of red and blue circles has 2 shells, 2 yellow circles representing electrons in the first shell and 5 in the second",
    },
    {
      srNo: "2",
      id: "question2",
      neutrons: "16",
      charge: "1-",
      alt: "charge negative one",
      element: "",
      class: "sulfur",
      selectOptions: {
        protons: [
          {
            id: 2,
            text: "17",
            value: 17,
          },
          {
            id: 3,
            text: "16",
            value: 16,
          },
          {
            id: 4,
            text: "18",
            value: 18,
          },
        ],
        electrons: [
          {
            id: 2,
            text: "17",
            value: 17,
          },
          {
            id: 3,
            text: "16",
            value: 16,
          },
          {
            id: 4,
            text: "15",
            value: 15,
          },
        ],
        elementName: [
          {
            id: 2,
            text: "Sulfur",
            value: "Sulfur",
          },
          {
            id: 3,
            text: "Chlorine",
            value: "Chlorine",
          },
          {
            id: 4,
            text: "Nitrogen",
            value: "Nitrogen",
          },
        ],
        massNumber: [
          {
            id: 2,
            text: "32",
            value: 32,
          },
          {
            id: 3,
            text: "16",
            value: 16,
          },
          {
            id: 4,
            text: "48",
            value: 48,
          },
        ],
      },
      answer: {
        protons: "16",
        electrons: "17",
        elementName: "Sulfur",
        massNumber: "32",
      },
      altText:
        "Atom with a nucleus of red and blue circles has 3 shells, 2 yellow circles representing electrons in the first shell, 8 in the second, 7 in the third",
    },
    {
      srNo: "3",
      id: "question3",
      neutrons: "8",
      charge: "2-",
      alt: "charge negative two",
      element: "<div>O<sup>2-</sup></div>",
      class: "element",
      selectOptions: {
        protons: [
          {
            id: 2,
            text: "8",
            value: 8,
          },
          {
            id: 3,
            text: "9",
            value: 9,
          },
          {
            id: 4,
            text: "10",
            value: 10,
          },
        ],
        electrons: [
          {
            id: 2,
            text: "8",
            value: 8,
          },
          {
            id: 3,
            text: "10",
            value: 10,
          },
          {
            id: 4,
            text: "6",
            value: 6,
          },
        ],
        elementName: [
          {
            id: 2,
            text: "Oxygen",
            value: "Oxygen",
          },
          {
            id: 3,
            text: "Neon",
            value: "Neon",
          },
          {
            id: 4,
            text: "Carbon",
            value: "Carbon",
          },
        ],
        massNumber: [
          {
            id: 2,
            text: "8",
            value: 8,
          },
          {
            id: 3,
            text: "16",
            value: 16,
          },
          {
            id: 4,
            text: "32",
            value: 32,
          },
        ],
      },
      answer: {
        protons: "8",
        electrons: "10",
        elementName: "Oxygen",
        massNumber: "16",
      },
      altText: "Oxygen with a negative 2 charge",
    },
    {
      srNo: "4",
      id: "question4",
      neutrons: "7",
      charge: "3-",
      alt: "charge negative three",
      element: "<div>N<sup>3-</sup></div>",
      class: "element",
      selectOptions: {
        protons: [
          {
            id: 2,
            text: "7",
            value: 7,
          },
          {
            id: 3,
            text: "3",
            value: 3,
          },
          {
            id: 4,
            text: "10",
            value: 10,
          },
        ],
        electrons: [
          {
            id: 2,
            text: "8",
            value: 8,
          },
          {
            id: 3,
            text: "10",
            value: 10,
          },
          {
            id: 4,
            text: "6",
            value: 6,
          },
        ],
        elementName: [
          {
            id: 2,
            text: "Oxygen",
            value: "Oxygen",
          },
          {
            id: 3,
            text: "Nitrogen",
            value: "Nitrogen",
          },
          {
            id: 4,
            text: "Carbon",
            value: "Carbon",
          },
        ],
        massNumber: [
          {
            id: 2,
            text: "7",
            value: 7,
          },
          {
            id: 3,
            text: "14",
            value: 14,
          },
          {
            id: 4,
            text: "32",
            value: 32,
          },
        ],
      },
      answer: {
        protons: "7",
        electrons: "10",
        elementName: "Nitrogen",
        massNumber: "14",
      },
      altText: "Nitrogen with a negative 3 charge",
    },
    {
      srNo: "5",
      id: "question5",
      neutrons: "4",
      charge: "1+",
      alt: "charge positive one",
      element: "<div>Li<sup>1+</sup></div>",
      class: "element",
      selectOptions: {
        protons: [
          {
            id: 2,
            text: "1",
            value: 1,
          },
          {
            id: 3,
            text: "3",
            value: 3,
          },
          {
            id: 4,
            text: "4",
            value: 4,
          },
        ],
        electrons: [
          {
            id: 2,
            text: "1",
            value: 1,
          },
          {
            id: 3,
            text: "2",
            value: 2,
          },
          {
            id: 4,
            text: "3",
            value: 3,
          },
        ],
        elementName: [
          {
            id: 2,
            text: "Lithium",
            value: "Lithium",
          },
          {
            id: 3,
            text: "Oxygen",
            value: "Oxygen",
          },
          {
            id: 4,
            text: "Hydrogen",
            value: "Hydrogen",
          },
        ],
        massNumber: [
          {
            id: 2,
            text: "4",
            value: 4,
          },
          {
            id: 3,
            text: "7",
            value: 7,
          },
          {
            id: 4,
            text: "10",
            value: 10,
          },
        ],
      },
      answer: {
        protons: "3",
        electrons: "2",
        elementName: "Lithium",
        massNumber: "7",
      },
      altText: "Lithium with a positive 1 charge",
    },
  ],

  dropDownHeadings: [
    {
      protonsHeading: "Protons",
      electronsHeading: "Electrons",
      elementnameHeading: "Element Name",
      massnumberHeading: "Mass Number",
    },
  ],

  bottomLabels: [
    { id: "protons", value: "Protons" },
    { id: "electrons", value: "Electrons" },
    { id: "neutrons", value: "Neutrons" },
  ],

  labels: [
    { id: "neutrons", name: "Neutrons" },
    { id: "charges", name: "Charge" },
  ],

  buttonLabels: { ...globalCommonData.buttonLabels },
  completionScreen: {
    ...globalCommonData.completionPopup,
    content: "You have correctly answered all the questions.",
  },

  startPopupAltText:
    "1 large atom in lower left corner, 3 small atoms in background, each with 3 yellow circles (electrons) orbiting a nucleus of 3 red and 3 blue circles",
  resetLiveText: globalCommonData.resetLiveText,
  resetMsgContent: globalCommonData.resetPopupText,
  questionHeading: globalCommonData.questionCounterString,
  correctToastMessage: globalCommonData.correctToastMessage,
  // incorrectToastMessage: globalCommonData.incorrectToastMessage,
  incorrectToastMessage: "Some of your answers are incorrect. Try again!",
  incorrectToastMessageTwo: "One answer is incorrect. Try again!",
  reactionTypeQuestion:
    "Choose the correct options to identify the number of protons and electrons, element name, and mass number for each atom or ion!",
  infoBoxContent:
    "<div>Look at the model, the number of neutrons, and the charge. Use this information to choose the correct number of protons and electrons, the element's name, and the mass number.</div><div>A neutral atom has an equal number of protons and electrons. If there is a charge, you will need to adjust the number of electrons. A negative charge (anion) means there are more electrons than protons, and a positive charge (cation) means there are fewer electrons than protons.</div><div>Mass number = Number of protons + Number of neutrons</div>",
  instructionBoxContent:
    "Atoms consist of three subatomic particles: protons, electrons, and neutrons. Let's use the number of neutrons and the charge to find the number of protons and electrons, the element name, and the mass number of different atoms or ions.",
  screenHeading:
    "Students will understand the different components of the atomic models including protons, neutrons, and electrons.",
};

export default data;
