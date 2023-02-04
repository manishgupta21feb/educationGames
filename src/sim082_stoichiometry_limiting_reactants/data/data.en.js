import globalConfig from "../../app/data/data.en";

const data = {

  // MCQ Data
  mcqData: [
    {
      id: "1",
      answer: "Oxygen",
      equation: {
        equationLeft: "2H<sub>2</sub> + O<sub>2</sub>",
        equationRight: "2H<sub>2</sub>O"
      },
      equationRead: {
        equationLeftRead: "2 H 2 plus O 2",
        equationRightRead: "2 H 2 O"
      },
      reactantsClass: "first-reactants",
      reactantsAlt: "10 groups of 2 gray circles each labeled H for hydrogen molecules and 4 groups of 2 red circles each labeled O for oxygen molecules.",
    },
    {
      id: "2",
      answer: "Potassium",
      equation: {
        equationLeft: "3K + AlCl<sub>3</sub>",
        equationRight: "Al + 3KCl"
      },
      equationRead: {
        equationLeftRead: "3 K plus A l C l 3",
        equationRightRead: "A l plus 3 K C l"
      },
      reactantsClass: "second-reactants",
      reactantsAlt: "7 purple circles labeled K for potassium atoms and 4 groups of 3 green circles labeled Cl and 1 gray circle labeled Al for aluminum chloride molecules."
    },
    {
      id: "3",
      answer: "Silver",
      equation: {
        equationLeft: "2Ag + Br<sub>2</sub>",
        equationRight: "2AgBr"
      },
      equationRead: {
        equationLeftRead: "2 A g plus B r 2",
        equationRightRead: "2 A g B r"
      },
      reactantsClass: "third-reactants",
      reactantsAlt: "10 gray circles labeled Ag for silver atoms and 6 groups of 2 red circles each labeled Br for Bromine molecules."
    },
    {
      id: "4",
      answer: "Gold(I) chloride",
      equation: {
        equationLeft: "Li + AuCl",
        equationRight: "Au + LiCl"
      },
      equationRead: {
        equationLeftRead: "L i plus A u C l",
        equationRightRead: "A u plus L i C l"
      },
      reactantsClass: "fourth-reactants",
      reactantsAlt: "7 purple circles labeled Li for lithium atoms; 5 groups of 1 yellow circle labeled Au & 1 green circle labeled Cl for gold (I) chloride molecules."
    },
    {
      id: "5",
      answer: "Copper(II) chloride",
      equation: {
        equationLeft: "2Fe + 3CuCl<sub>2</sub>",
        equationRight: "3Cu + 2FeCl<sub>3</sub>"
      },
      equationRead: {
        equationLeftRead: "2 F r plus 3 C u C l 2",
        equationRightRead: "3 C u plus 2 F e C l 3"
      },
      reactantsClass: "fifth-reactants",
      reactantsAlt: "9 orange circles labeled Fe for iron atoms and 9 groups of 1 orange circle labeled Cu & 2 green circles labeled Cl for copper (II) chloride molecules."
    },
    {
      id: "6",
      answer: "Iron",
      equation: {
        equationLeft: "4Fe + 3O<sub>2</sub>",
        equationRight: "2Fe<sub>2</sub>O<sub>3</sub>"
      },
      equationRead: {
        equationLeftRead: "4 F e plus 3 O 2",
        equationRightRead: "2 F e 2 O 3"
      },
      reactantsClass: "sixth-reactants",
      reactantsAlt: "12 orange circles labeled Fe for iron atoms and 12 groups of 2 red circles each labeled O for oxygen molecules."
    },
  ],

  //MCQ Options
  mcqOptions: [
    ["Hydrogen", "Oxygen"],
    ["Potassium", "Aluminum chloride"],
    ["Silver", "Bromine"],
    ["Lithium", "Gold(I) chloride"],
    ["Iron", "Copper(II) chloride"],
    ["Iron", "Oxygen"]
  ],

  //Instruction Text
  instructionText: "On the left is a balanced chemical equation and the available reactants for a reaction. Determine which reactant will run out first.",

  //Question Heading
  questionHeading: "Question: -1- of 6",

  //Starting Toast Content
  instructionBoxContent: "Stoichiometry is based upon the law of conservation of mass, where the total mass of the reactants must equal the mass of the products. This means that substances in a balanced reaction occur in a specific ratio. If the reaction is not balanced, it may not occur. In this simulation, you will determine which substance is limiting the reaction.",

  //Reset Toast Content
  resetMsgContent: globalConfig.resetPopupText,

  //Corret Toast Content
  correctToastMsg: globalConfig.correctToastMessage,

  //Incorrect Toast Content
  incorrectToastMsg: globalConfig.incorrectToastMessage,

  //Completion Popup Texts
  completionPopup: {
    ...globalConfig.completionPopup,
    content: "You have successfully chosen the correct limiting reactants! "
  },

  //infoText
  infoDialogText: "Compare the molecules to the balanced equation. Choose the chemical that acts as the limiting reactant.",

  // activityHeading
  activityHeading: "Students will be able to identify the limiting reactant when given a chemical reaction and picture.",

  //Question Text
  questionText: "What is the limiting reactant?",

  //Corret Toast Content
  correctToastMsg: globalConfig.correctToastMessage,

  //Incorrect Toast Content
  incorrectToastMsg: globalConfig.incorrectToastMessage,

  // Left Equation Heading
  leftEquationHeading: "Balanced Chemical Equation:",

  //Button Texts
  buttonLabels: { ...globalConfig.buttonLabels },

};

export default data;
