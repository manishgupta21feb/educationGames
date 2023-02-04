import commonData from "../../app/data/data.en";
import imgQuestion1 from "../assets/images/visual1.png";
import imgQuestion2 from "../assets/images/visual2.png";
import imgQuestion3 from "../assets/images/visual3.png";
import imgQuestion4 from "../assets/images/visual4.png";
import imgQuestion5 from "../assets/images/visual6.png";
import animationVideo1 from "../assets/videos/animation1.mp4";
import animationVideo2 from "../assets/videos/animation2.mp4";

const data = {
  greetingMessage: "Hello",
  nextScreenButtonText: "Next Screen",
  backScreenButtonText: "Back Screen",
  buttonLabels: { ...commonData.buttonLabels },
  introText:
    "Aqueous solutions occur when a solid is dissolved into water. During this simulation, you will investigate what can be done to manipulate the properties of an aqueous solution.",
  infoText:
    "Read the information, and advance through the simulation as instructed.",
  observationMotive:
    "In this simulation, the student will describe how solutes and solvents, and how concentration and dilution are related. Also, the student will investigate and model how temperature, surface area, and agitation affect the rate of dissolution of solid solutes in aqueous solutions",
  resetPopupText: commonData.resetPopupText,
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  resetLiveText: commonData.resetLiveText,
  transitionPopup: {
    ...commonData.transitionPopup,
    content:
      "Now that you know about the parts of an aqueous solution, let's see what can be done to change how fast a solute dissolves into a solvent.",
  },
  completionPopup: {
    ...commonData.completionPopup,
    content: "You have completed the Aqueous Solutions simulation.",
  },

  questions: [
    {
      id: "question1",
      question:
        "<strong>Solutions</strong> are made of at least two materials, the solvent and the solute. What is the solvent in an aqueous solution?",
      questionLabel:
        "Solutions are made of at least two materials, the solvent and the solute. What is the solvent in an aqueous solution?",
      answer: "question1_rb_o1",
      img: imgQuestion1,
      alt: "A spoon of salt is added to 300 mL water in Beaker A. In solutions, the dissolved solid is the solute. In an aqueous solution, water is the solvent.",
      tableTitle: "Solution A",
      spoon: "Spoon",
      beaker: "Beaker A",
      salt: "Salt",
      text1:
        "In any solution, the solid that is dissolved is called the solute.",
      text2: "In an aqueous solution, water is called the solvent.",
      table: [
        {
          object: "Amount of salt",
          quantity: "15 g",
        },
        {
          object: "Amount of water",
          quantity: "300 mL",
        },
        {
          object: "Concentration",
          quantity: "5%",
        },
      ],
    },
    {
      id: "question2",
      question:
        "To change the dilution of the solution, more solvent was added. How does diluting a solution impact the concentration?",
      questionLabel:
        "To change the dilution of the solution, more solvent was added. How does diluting a solution impact the concentration?",
      answer: "question2_rb_o2",
      img: imgQuestion2,
      alt: "Beaker A with 300 mL of water and beaker B with 500 mL of water are on a lab table. One spoonful of salt is being added to each beaker.",
      tableTitleA: "Solution A",
      tableTitleB: "Solution B",
      spoonA: "Spoon A",
      spoonB: "Spoon B",
      beakerA: "Beaker A",
      beakerB: "Beaker B",
      salt: "Salt",
      tableA: [
        {
          object: "Amount of salt",
          quantity: "15 g",
        },
        {
          object: "Amount of water",
          quantity: "300 mL",
        },
        {
          object: "Concentration",
          quantity: "5%",
        },
      ],
      tableB: [
        {
          object: "Amount of salt",
          quantity: "15 g",
        },
        {
          object: "Amount of water",
          quantity: "500 mL",
        },
        {
          object: "Concentration",
          quantity: "3%",
        },
      ],
    },
    {
      id: "question3",
      question:
        "To change the <strong>concentration</strong> of the solution, either add more solute or add more solvent. How does increasing the amount of solute affect a solution?",
      questionLabel:
        "To change the concentration of the solution, either add more solute or add more solvent. How does increasing the amount of solute affect a solution?",
      answer: "question3_rb_o1",
      img: imgQuestion3,
      alt: "Beaker C with 300 mL of water is on a lab table. Two spoonfuls of salt are being added to the water in the beaker.",
      tableTitle: "Solution C",
      spoonA: "Spoon A",
      spoonB: "Spoon B",
      beaker: "Beaker C",
      salt: "Salt",
      table: [
        {
          object: "Amount of salt",
          quantity: "30 g",
        },
        {
          object: "Amount of water",
          quantity: "300 mL",
        },
        {
          object: "Concentration",
          quantity: "10%",
        },
      ],
    },
    {
      question:
        "There are many ways to change the speed at which a solute dissolves in a solvent. This is called the <strong>rate of dissolution</strong>.",
      questionLabel:
        "There are many ways to change the speed at which a solute dissolves in a solvent. This is called the rate of dissolution.",
      img: imgQuestion4,
      alt: "A lab table has the following items on it from left to right: digital thermometer, metal spoon, mortar and pestle, beaker of water, and bowl of salt",
      names: [
        "Thermometer",
        "Spoon",
        "Mortar and pestle",
        "Beaker of water",
        "Salt",
      ],
      reading: "20°C",
    },
    {
      id: "question4",
      question:
        "One way to change the rate of dissolution is to stir or agitate the solution. <strong>Agitation</strong> helps the solute dissolve into the solvent faster. What does the term agitation mean?",
      questionLabel:
        "One way to change the rate of dissolution is to stir or agitate the solution. Agitation helps the solute dissolve into the solvent faster. What does the term agitation mean?",
      answer: "question4_rb_o2",
      videoSrc: animationVideo1,
      videoId: "animationVideo1",
      liveText:
        "When one spoonful of salt is added to 300 mL of water, it seems to disappear into the solution.",
      alt: "A beaker with 300 mL of water is on a lab table. A spoonful of salt is over the beaker, but the salt is still in the spoon.",
      altEnd:
        "A beaker with 300 mL of water is on a lab table. The salt was added to the water and it seems to have disappeared into the solution.",
      name: "Beaker of water",
    },
    {
      id: "question5",
      question:
        "Another way to change the rate of dissolution is to change the <strong>temperature</strong> of the solvent. What is the relationship between temperature and rate of dissolution?",
      questionLabel:
        "Another way to change the rate of dissolution is to change the temperature of the solvent. What is the relationship between temperature and rate of dissolution?",
      answer: "question5_rb_o2",
      img: imgQuestion5,
      alt: "A thermometer is in a beaker of water being heated by a flame. A line graph shows rate of dissolution where speed increases as temperature increases.",
      names: ["Rate of dissolution", "Speed", "Temperature"],
      reading: "90°C",
    },
    {
      id: "question6",
      question:
        "The final way to change the rate of dissolution is to increase the <strong>surface area</strong> of the solute. This can be done by grinding the substance into smaller particles by physical means. How can you change the rate of dissolution?",
      questionLabel:
        "The final way to change the rate of dissolution is to increase the surface area of the solute. This can be done by grinding the substance into smaller particles by physical means. How can you change the rate of dissolution?",
      answer: "question6_rb_o4",
      videoSrc: animationVideo2,
      videoId: "animationVideo2",
      liveText:
        "The pestle grinds the solid salt crystals into a fine powder in the mortar.",
      alt: "White,solid salt crystals sitting in a mortar, which looks like a bowl. A white pestle, which is a tool used for grinding, rests inside the mortar.",
      altEnd:
        "The salt crystals are a fine powder in the mortar after being ground by the pestle.",
      name: "Mortar and pestle",
    },
  ],

  radioButtons: [
    [
      {
        id: "question1_rb_o1",
        text: "Water",
      },
      {
        id: "question1_rb_o2",
        text: "Any liquid",
      },
      {
        id: "question1_rb_o3",
        text: "The solid",
      },
      {
        id: "question1_rb_o4",
        text: "The final product",
      },
    ],

    [
      {
        id: "question2_rb_o1",
        text: "Concentration increases",
      },
      {
        id: "question2_rb_o2",
        text: "Concentration decreases",
      },
    ],

    [
      {
        id: "question3_rb_o1",
        text: "Increases the concentration",
      },
      {
        id: "question3_rb_o2",
        text: "Decreases the concentration",
      },
    ],

    [
      {
        id: "questionNot_rb_o1",
        text: "blank",
      },
    ],

    [
      {
        id: "question4_rb_o1",
        text: "To grind into small pieces",
      },
      {
        id: "question4_rb_o2",
        text: "To stir",
      },
    ],

    [
      {
        id: "question5_rb_o1",
        text: "As temperature increases,  the rate of dissolution decreases.",
      },
      {
        id: "question5_rb_o2",
        text: "As temperature increases, the rate of dissolution increases.",
      },
      {
        id: "question5_rb_o3",
        text: "There is no relationship between temperature and rate of dissolution.",
      },
    ],

    [
      {
        id: "question6_rb_o1",
        text: "Increase agitation",
      },
      {
        id: "question6_rb_o2",
        text: "Decrease temperature",
      },
      {
        id: "question6_rb_o3",
        text: "Increase surface area",
      },
      {
        id: "question6_rb_o4",
        text: "All of the above",
      },
    ],
  ],
};

export default data;
