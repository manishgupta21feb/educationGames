import commonData from "../../app/data/data.en";

const data = {
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  resetLiveText: commonData.resetLiveText,
  buttonLabels: { ...commonData.buttonLabels },
  resetPopupText: commonData.resetPopupText,
  resetLiveText: commonData.resetLiveText,
  completionPopup: {
    ...commonData.completionPopup,
    content: "You have successfully explored the properties of an ideal gas!",
  },
  observationMotive:
    "Students will explore the relationship between temperature, pressure, number of moles, and volume on an ideal gas.",
  screen1ImgTxt:
    "image of gas molecules in a container having constant random motion",
  infoText:
    "Follow the on screen instructions to explore the properties of an ideal gas.",
  pageHeading:
    "Explore the relationship between temperature, pressure, number of moles, and volume of an ideal gas. ",

  screen1: {
    id: "bottomArea",
    text1:
      "<b>Gas Laws</b> are a set of laws used to form generalizations about how changes in pressure, temperature, volume, and moles affect each other.",
    text2:
      "The <b>kinetic molecular theory</b> summarizes the behavior of gases in ideal gas conditions (high temperature and low pressure). This theory states that a large number of identical gas particles in a container are in constant, random, and rapid motion. No interactions occur between the molecules or the container.",

    imgTxt: [
      {
        id: "gas1",
        text: "Gas molecule",
      },
      {
        id: "gas2",
        text: "Container",
      },
    ],
  },
  mcqQuestionHeading: "Question: count of length",

  home: {
    title: "Select the law you want to explore!",
    frames: [
      {
        id: "daltonLaw",
        img: "",
        title: "Dalton’s law",
        target: "",
        altTxt: "Dalton Law",
        topStaticAltTxt:
          "pressure of gas in container 1 is P1 and pressure of gas in container 2 is P2 then combining the gas of both container P1 and P2 will be P total equals P1 plus P2",
        topScreen2AltTxt:
          "container 1 has C O 2 with 5 atmospheric pressure, container 2 has helium with 2 atmospheric pressure and container 3 has O 2 with 3 atmospheric pressure.",

        imgTxt: [
          {
            id: "daltontxt1",
            name: "P<sub>1</sub>",
          },
          {
            id: "daltontxt2",
            name: "P<sub>2</sub>",
          },
          {
            id: "daltontxt3",
            name: "<p>Combining</p><p>the gases</p>",
          },
          {
            id: "daltontxt4",
            name: "P<sub>total</sub>=P<sub>1</sub>+P<sub>2</sub>",
          },
        ],
        screen1Txt:
          "<b>Dalton’s law</b> states that the total pressure of a system of gases equals the sum of the individual pressures.",
        mcqQuestion: [
          {
            id: "daltonLawquestion1",
            questionText:
              "Combine the three gas samples below. What is their combined pressure?",
            answerId: "daltonRadio2",
            imgTxt: [
              {
                id: "daltontxt1",
                name: "<p>5.0 atm</p><p>CO<sub>2</sub></p>",
              },
              {
                id: "daltontxt2",
                name: "<p>2.0 atm</p><p>He</p>",
              },
              {
                id: "daltontxt3",
                name: "<p>3.0 atm</p><p>O<sub>2</sub></p>",
              },
            ],

            radioButton: [
              {
                id: "daltonRadio1",
                text: "8.0 atm",
              },
              {
                id: "daltonRadio2",
                text: "10.0 atm",
              },
              {
                id: "daltonRadio3",
                text: "7.0 atm",
              },
              {
                id: "daltonRadio4",
                text: "11.0 atm",
              },
            ],
          },
        ],
      },
      {
        id: "idealGasLaw",
        img: "",
        title: "Ideal gas law",
        target: "",
        altTxt: "Ideal gas Law",
        screen1Txt:
          "The ideal gas law is used to determine an unknown variable for a gas at set conditions.",
        topStaticAltTxt:
          "container P1 having high temperature and container P2 having low temperature ",
        topScreen2AltTxt:
          "The solid sodium azide reacts rapidly to produce the nitrogen gas and fill the air bag in 20–40 milliseconds",

        imgTxt: [
          {
            id: "igltxt1",
            name: "P<sub>1</sub>",
          },
          {
            id: "igltxt2",
            name: "P<sub>2</sub>",
          },

          {
            id: "igltxt3",
            name: "<p>At contant temp,</p><p>volume decreases</p><p>from V<sub>1</sub> to V<sub>2</sub></p>",
          },
          {
            id: "igltxt4",
            name: "<p>Contant temp,</p><p>pressure increases</p><p>from P<sub>1</sub> to P<sub>2</sub></p>",
          },
        ],
        mcqQuestion: [
          {
            id: "idealGasLawquestion1",
            questionText:
              "<p>Vehicle airbags work by reacting sodium azide, Na<sub>3</sub>N, with excess heat to produce nitrogen gas, N<sub>2</sub>. The solid sodium azide reacts rapidly to produce the nitrogen gas and fill the air bag in 20–40 milliseconds.</p> <p>PV = nRT</p> <p>Which variable is this example most concerned with?</p>",
            answerId: "idealGasRadio1",
            radioButton: [
              {
                id: "idealGasRadio1",
                text: "Moles",
              },
              {
                id: "idealGasRadio2",
                text: "Temperature",
              },
              {
                id: "idealGasRadio3",
                text: "Pressure",
              },
              {
                id: "idealGasRadio4",
                text: "Volume",
              },
            ],
          },
        ],
      },
      {
        id: "boylesLaw",
        img: "",
        title: "Boyle’s law",
        target: "",
        altTxt: "Boyles Law ",
        topStaticAltTxt:
          "Graph having volume and pressure shows inversly propostional relation between them ",
        topScreen2AltTxt:
          "Graph having volume and pressure shows inversly propostional relation between them ",
        imgDescription: [
          {
            id: "text0",
            text: "Low pressure results high volume of a beaker and gas molecules have random constant motion",
          },
          {
            id: "text1",
            text: "pressure between low and medium  results volume between medium and high of a beaker and gas molecules have random constant motion",
          },
          {
            id: "text2",
            text: "Medium pressure results medium volume of a beaker and gas molecules have random constant motion",
          },
          {
            id: "text3",
            text: "pressure between medium and high  results vloume between low and medium of a beaker and gas molecules have random constant motion",
          },
          {
            id: "text4",
            text: "high pressure results low volume of a beaker and gas molecules have random constant motion",
          },
        ],
        imgTxt: [
          {
            id: "boyletxt1",
            name: "Volume",
          },
          {
            id: "boyletxt2",
            name: "Pressure",
          },
        ],
        questionTitle:
          "Drag the slider to change pressure or volume, and observe the effect on the other variable.",
        screen1Txt:
          "<b>Boyle’s law</b> states that the volume of a gas is inversely proportional to a change in its pressure.",
        sliderTitle1: "Pressure Slider",
        sliderTitle2: "Volume Slider",
        isInverse: true,
        slider: [
          {
            listitems: [
              { id: 0, value: 0, label: "Low" },
              { id: 1, value: 1, label: "" },
              { id: 2, value: 2, label: "Medium" },
              { id: 3, value: 3, label: "" },
              { id: 4, value: 4, label: "High" },
            ],
          },
        ],
        valuetextArrayPressure: {
          0: " Low pressure with high volume",
          1: "pressure between low and medium with volume between medium and high",
          2: "Medium pressure with medium volume",
          3: "pressure between medium and high  with volume between medium and low",
          4: "High pressure with low volume",
        },
        valuetextArrayVolume: {
          4: " Low pressure with high volume",
          3: "pressure between low and medium with volume between medium and high",
          2: "Medium pressure with medium volume",
          1: "pressure between medium and high  with volume between medium and low",
          0: "High pressure with low volume",
        },
      },
      {
        id: "charlesLaw",
        img: "",
        title: "Charles’ law",
        target: "",
        altTxt: "Charles Law",
        screen1Txt:
          "Charles’ law states that the volume of a gas is directly proportional to a change in its temperature.",
        isInverse: false,
        topStaticAltTxt:
          "graph having volume and temperature showing volume is directly proportional to the change in temperature",
        topScreen2AltTxt:
          "graph having volume and temperature showing volume is directly proportional to the change in temperature",
        tempArray: [
          {
            id: "temp0",
            text: "325k",
          },
          {
            id: "temp1",
            text: "260k",
          },
          {
            id: "temp2",
            text: "195k",
          },
          {
            id: "temp3",
            text: "130k",
          },
          {
            id: "temp4",
            text: "65k",
          },
        ],

        imgDescription: [
          {
            id: "text0",
            text: "Low temprature results low volume of a beaker and gas molecules have random constant motion",
          },
          {
            id: "text1",
            text: "temprature between low and medium  results volume between low and medium of a beaker and gas molecules have random constant motion",
          },
          {
            id: "text2",
            text: "Medium temprature results medium volume of a beaker and gas molecules have random constant motion",
          },
          {
            id: "text3",
            text: "temprature between medium and high  results volume between medium and high of a beaker and gas molecules have random constant motion",
          },
          {
            id: "text4",
            text: "high temprature results high volume of a beaker and gas molecules have random constant motion",
          },
        ],
        imgTxt: [
          {
            id: "cltxt1",
            name: "Volume",
          },
          {
            id: "cltxt2",
            name: "Temperature",
          },
          {
            id: "charlestxt1",
            name: "-65.0",
          },
          {
            id: "charlestxt2",
            name: "<sup>o</sup>C",
          },
          {
            id: "charlestxt3",
            name: "250.0",
          },
          {
            id: "charlestxt4",
            name: "<sup>o</sup>C",
          },
        ],
        questionTitle:
          "Drag the slider to change temperature or volume, and observe the effect on the other variable.",
        sliderTitle1: "Temperature",
        sliderTitle2: "Volume",
        slider: [
          {
            listitems: [
              { id: 0, value: 0, label: "Low" },
              { id: 1, value: 1, label: "" },
              { id: 2, value: 2, label: "Medium" },
              { id: 3, value: 3, label: "" },
              { id: 4, value: 4, label: "High" },
            ],
          },
        ],
        valuetextArray: {
          0: " Low temperature with low volume",
          1: "temperature between low and medium with volume between low and medium",
          2: "Medium temperature with medium volume",
          3: "temperature between medium and high  with volume between medium and high",
          4: "High temperature with high volume",
        },
      },
      {
        id: "gayLussacLaw",
        img: "",
        title: "Gay-Lussac’s law",
        target: "",
        altTxt: "Gay Lussac's Law",
        topStaticAltTxt:
          "pressure of a gas is directly proportional to a change in its temperature.",
        topScreen2AltTxt: "air refueling in car tire",
        imgTxt: [
          {
            id: "lussactxt1",
            name: "<p>P<sub>1</sub></p><p>Low</p><p>temprature</p>",
          },
          {
            id: "lussactxt2",
            name: "<p>P<sub>2</sub></p><p>High</p><p>temprature</p>",
          },
        ],
        screen1Txt:
          "<b>Gay-Lussac’s law</b> states that the pressure of a gas is directly proportional to a change in its temperature.",
        mcqQuestion: [
          {
            id: "gayLussacLawquestion1",
            questionText:
              "How does the <b>summer</b> season affect tire pressure?",
            answerId: "gayLussacRadio1",
            radioButton: [
              {
                id: "gayLussacRadio1",
                text: "Higher temperature and higher pressure",
              },
              {
                id: "gayLussacRadio2",
                text: "Higher temperature and lower pressure",
              },
              {
                id: "gayLussacRadio3",
                text: "Lower temperature and higher pressure",
              },
              {
                id: "gayLussacRadio4",
                text: "Lower temperature and lower pressure",
              },
            ],
          },
          {
            id: "gayLussacLawquestion2",
            questionText:
              "How does the <b>winter</b> season affect tire pressure?",
            answerId: "gayLussacRadio4",
            radioButton: [
              {
                id: "gayLussacRadio1",
                text: "Higher temperature and higher pressure",
              },
              {
                id: "gayLussacRadio2",
                text: "Higher temperature and lower pressure",
              },
              {
                id: "gayLussacRadio3",
                text: "Lower temperature and higher pressure",
              },
              {
                id: "gayLussacRadio4",
                text: "Lower temperature and lower pressure",
              },
            ],
          },
        ],
      },
      {
        id: "avogadrosLaw",
        img: "",
        title: "Avogadro’s law",
        target: "",
        altTxt: "Avogardo's Law",
        screen1Txt:
          "<p><b>Avogadro’s law</b> states that the volume of a gas is directly proportional to a change in its moles.</p> <p><b>Avogadro</b> also stated that equal volumes of gas at the same temperature and pressure contain the same number of moles.</p>",
        topStaticAltTxt:
          "A Yellow balloon having 5 moles of o 2, A red balloon having 5 moles of h 2 and A blue balloon having 5 moles of c o 2",
        topScreen2AltTxt:
          "green ballon having 2 moles and dash liters of gas, red ballon having 3 moles and 30 liters of gas and blue ballon having dash moles and 45 liters of gas,  ",
        imgTxt: [
          {
            id: "avogardotxt1",
            name: "<p>5 mol</p><p>O<sub>2</sub></p>",
          },
          {
            id: "avogardotxt2",
            name: "<p>5 mol</p><p>H<sub>2</sub></p>",
          },
          {
            id: "avogardotxt3",
            name: "<p>5 mol</p><p>CO<sub>2</sub></p>",
          },
        ],
        mcqQuestion: [
          {
            id: "avogadrosLawquestion1",
            questionText:
              "How many liters of gas are contained in the green balloon?",
            answerId: "AvogadrosLawMCQ1Radio1",
            imgTxt: [
              {
                id: "avogardotxt1",
                name: "<p>2 moles</p><p>? Liters</p>",
              },
              {
                id: "avogardotxt2",
                name: "<p>3 moles</p><p>30 Liters</p>",
              },
              {
                id: "avogardotxt3",
                name: "<p>? moles</p><p>45 Liters</p>",
              },
              {
                id: "avogardotxt4",
                name: "<p>2 moles</p><p>? Liters</p>",
              },
              {
                id: "avogardotxt5",
                name: "<p>3 moles</p><p>30 Liters</p>",
              },
              {
                id: "avogardotxt6",
                name: "<p>? moles</p><p>45 Liters</p>",
              },
            ],
            radioButton: [
              {
                id: "AvogadrosLawMCQ1Radio1",
                text: "20 liters",
              },
              {
                id: "AvogadrosLawMCQ1Radio2",
                text: "30 liters",
              },
              {
                id: "AvogadrosLawMCQ1Radio3",
                text: "45 liters",
              },
            ],
          },
          {
            id: "avogadrosLawquestion2",
            questionText:
              "How many moles of gas are contained in the blue balloon?",
            answerId: "AvogadrosLawMCQ2Radio3",
            imgTxt: [
              {
                id: "avogardotxt1",
                name: "<p>2 moles</p><p>? Liters</p>",
              },
              {
                id: "avogardotxt2",
                name: "<p>3 moles</p><p>30 Liters</p>",
              },
              {
                id: "avogardotxt3",
                name: "<p>? moles</p><p>45 Liters</p>",
              },
              {
                id: "avogardotxt4",
                name: "<p>2 moles</p><p>? Liters</p>",
              },
              {
                id: "avogardotxt5",
                name: "<p>3 moles</p><p>30 Liters</p>",
              },
              {
                id: "avogardotxt6",
                name: "<p>? moles</p><p>45 Liters</p>",
              },
            ],
            radioButton: [
              {
                id: "AvogadrosLawMCQ2Radio1",
                text: "2 moles",
              },
              {
                id: "AvogadrosLawMCQ2Radio2",
                text: "3 moles",
              },
              {
                id: "AvogadrosLawMCQ2Radio3",
                text: "4.5 moles",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default data;
