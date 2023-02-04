import commonData from "../../app/data/data.en";

const data = {
 
  greetingMessage: "Hello",
  nextScreenButtonText: "Next Screen",
  backScreenButtonText: "Back Screen",
  buttonLabels: { ...commonData.buttonLabels },
  startupPopup:
    "Today, we are going to explore what happens to populations in an ecosystem when changes occur. ",
  resetLiveText: commonData.resetLiveText,
  resetPopupText: commonData.resetPopupText,
  infoPopupTextScreen1:
    "Click on the organism or organisms that apply in the food web.",
  infoPopupTextScreen2:
    "Make a choice for each drop-down menu you see. Then, click on the Check button.",
  transitionPopup: {
    ...commonData.transitionPopup,
    content:
      "Now that you have reviewed food webs, it is time to explore how changes impact them.",
  },
  completionScreen: {
    ...commonData.completionPopup,
    content: "You have completed the activity!",
  },
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  partialToastMessage:
    "You are almost correct! Please try again and fix your incorrect answers!",
  mcqHeadingScreen1:
    "Let's first review what you already know about food webs. Remember that a <b>food web</b> contains overlapping food chains with different pathways to show the flow of energy in an ecosystem. As each question appears, click on the part of the food web that applies.",
  mainimgalt: "Food web bottom—wheat, firespike, vine, melon; 2nd row—grasshopper, butterfly, fruit fly; 3rd row—mouse, frog, dragonfly, warbler; 4th row—snake, hawk",
  firstScreenButton: [
    {
      id: "snake",
      altText: "Snake",
      serNo: 1,
      text: "Snake",
    },
    {
      id: "hawk",
      altText: "Hawk",
      serNo: 2,
      text: "Hawk",
    },
    {
      id: "grasshoppermouse",

      altText: "Grasshopper mouse",
      serNo: 3,
      text: "Grasshopper mouse",
    },
  
    {
      id: "dragonfly",
      altText: "Dragonfly",
      serNo: 5,
      text: "Dragonfly",
    },
    {
      id: "frog",
      altText: "Frog",
      serNo: 4,
      text: "Frog",
    },

    {
      id: "warbler",
      altText: "Warbler",
      serNo: 6,
      text: "Warbler",
    },
    {
      id: "grasshopper",
      altText: "Grasshopper",
      serNo: 7,
      text: "Grasshopper",
    },
    {
      id: "butterfly",
      altText: "Butterfly",
      serNo: 8,
      text: "Butterfly",
    },
    {
      id: "fruitfly",
      altText: "Fruit fly",
      serNo: 9,
      text: "Fruit fly",
    },
    {
      id: "wheat",
      altText: "Wheat",
      serNo: 10,
      text: "Wheat",
    },
    {
      id: "firespike",
      altText: "Firespike",
      serNo: 11,
      text: "Firespike",
    },
    {
      id: "coralvine",
      altText: "Coral vine",
      serNo: 12,
      text: "Coral vine",
    },
    {
      id: "melon",
      altText: "Melon",
      serNo: 12,
      text: "Melon",
    },
  ],

  mcqData: [
    {
    
      id: "mcq1",
      question:
        "Most of the energy in a food web comes from the producers. Producers use energy from the Sun to create their own food. Click on ALL of the producers. ",
      correctAnswer: ["wheat", "firespike", "coralvine", "melon"],
    },
    {

      id: "mcq2",
      question:
        "The food web is divided into trophic levels. A <b>trophic level</b> is just a position an organism occupies in the food web. The trophic levels are producers, primary consumers, secondary consumers, and tertiary consumers. Primary consumers consume producers. Click on a primary consumer. ",
      correctAnswer: ["grasshopper"],
      correctAnswer2: ["grasshopper", "butterfly", "fruitfly"],
      // correctAnswer3: [],
    },
    {

      id: "mcq3",
      question:
        "The arrows in a food web show the transfer of energy from one organism to another. Click on ALL the organisms that get their energy from the grasshopper mouse.",
      correctAnswer: ["snake", "hawk"],
    },
  ],
  buttonCheck: "Check",
  headingScreen2:
    "Food webs remain in balance until some type of change affects limiting factors in the ecosystem. A <b>limiting factor</b> is a biotic or abiotic environmental factor that restricts the growth of a population. If you introduce an <b>invasive species</b> (a species that is not native to the ecosystem), competition among the same types of species occurs. <b>Competition</b> occurs when more than one individual or population in an ecosystem relies on the same limited resources. ",
  secondScreenData: [
    {
      id: "dropdownHeading1",
      question:
        "Let's say an invasive frog is introduced into this ecosystem. Use the drop-down menu to predict if the population for each species will increase, decrease, or stay the same. Once you have chosen for each highlighted species, click on the Check button to see if you were correct. ",
    },
    {
      id: "dropdownHeading2",
      question:
        "This time, let's remove a species and see what happens. Let's say a disease wipes out all the melons. Use the drop-down menu to predict if the population for that species will increase, decrease, or stay the same. Once you have chosen for each highlighted species, click on the Check button to see if you were correct.",
    },
  ],
  secondScreenGraphData: [
    {
      id: "headingChart1",
      question:
        " If an invasive frog is added to this ecosystem, the grasshopper population will decrease because there will be more frogs eating them, the snake population will gradually increase over time because there will be more frogs to eat, and since the grasshopper population decreases, the wheat will have less organisms eating them, and their population will increase. ",
    },
    {
      id: "headingChart2",
      question:
        "If the melon is removed from this ecosystem due to a disease, the fruit fly population would be greatly affected, decrease, and possibly become extinct because it has nothing else to eat. Since the fruit fly population decreases, the warbler may decrease a little bit over time but not change much because it has other organisms to eat. The same thing applies to the hawk. It would have other organisms to consume.",
    },
  ],
 
  graphData: [
    
    {
      legends: [
        { id: "snake", label: "Snake", alt:"Circle denotes Snake"},
        { id: "grasshopper", label: "Grasshopper", alt:"Square denotes Grashopper" },
        { id: "wheat", label: "Wheat",alt:"Triangle denotes Wheat" },
   
        
      ],
      // x-axis label values
      graphliveText:"Graph with 3 lines shows change in population from checkpoint 0 to checkpoint 6: snakes 2,000–3,000; grasshoppers 6,000–1,000; wheat 8,000–10,000",
      graphlabel:"Graph with 3 lines shows change in population from checkpoint 0 to checkpoint 6: snakes 2,000–3,000; grasshoppers 6,000–1,000; wheat 8,000–10,000",
      labels: ["0", "1", "2", "3", "4", "5", "6"],
     
      datasets: [
        {
          label: "Wheat",
          // y-axis data plotting values

          data: [8000],
          requiredData: [8000, 8100, 8500, 8750, 9000, 9500, 10200],
         
          borderWidth: 1,
         backgroundColor:"green",

        
          borderColor: "black",
          responsive: true,
          pointStyle: "triangle",
          pointBackgroundColor: "green",
          pointRadius: "6",
        },
        {
          label: "Grasshopper",
          // y-axis data plotting values

          data: [6000],
          requiredData: [6000, 5950, 5750, 5400, 4700, 3000, 1000],
          fill: false,
          borderWidth: 1,
          backgroundColor: "brown",
          borderColor: "black",
          responsive: true,
          pointStyle: "rect",
          pointBackgroundColor: "brown",
          pointRadius: "6",
        },
        {
          label: "Snake",

          // y-axis data plotting values
          data: [2000],
          requiredData: [2000,2000,2000,2250,2500,2800,3200],
          fill: false,
          borderWidth: 1,
          backgroundColor: "blue",
          borderColor: "black",
          responsive: true,
          pointStyle: "circle",
          pointBackgroundColor: "blue",
          pointRadius: "6",
        },
      ],
    },

    {
      // x-axis label values
      legends: [
        { id: "hawk", label: "Hawk", alt:"Circle denotes Hawk"},
        { id: "warbler", label: "Warbler", alt:"Square denotes Warbler" },
        { id: "fruitfly", label: "Fruitfly", alt:"Triangle denotes Fruitfly" },
        
       
      ],
      graphliveText:"Graph with 3 lines shows change in population from checkpoint 0 to checkpoint 6: fruit flies 7,000–500; warblers 5,000–3,500; hawks 2,000–2,000",
      graphlabel:"Graph with 3 lines shows change in population from checkpoint 0 to checkpoint 6: fruit flies 7,000–500; warblers 5,000–3,500; hawks 2,000–2,000",
      labels: ["0", "1", "2", "3", "4", "5", "6"],
      datasets: [
        {
          label: "Fruitfly",
          // y-axis data plotting values

          data: [7000],
          requiredData: [7000, 6500, 5500, 4700, 3800, 2100, 500],
          borderWidth: 1,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "black",
          responsive: true,
          pointStyle: "triangle",
          pointBackgroundColor: "green",
          pointRadius: "6",
        },
        {
          label: "Warbler",
          // y-axis data plotting values
          data: [5000],
          requiredData: [5000, 4500, 3800, 3200, 3150, 3100, 3150],
          fill: false,
          borderWidth: 1,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "black",
          responsive: true,
          pointStyle: "rect",
          pointBackgroundColor: "brown",
          pointRadius: "6",
        },
        {
          label: "Hawk",
          // y-axis data plotting values
          data: [2000],
          requiredData: [2000, 1750, 1800, 1850, 1800, 1850, 1900],
          fill: false,
          borderWidth: 1,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "black",
          responsive: true,
          pointStyle: "circle",
          pointBackgroundColor: "blue",
          pointRadius: "6",
        },
      ],
    },
  ],
  dropDown: [
    {
      id: "increase",
      value: "Increase",
      text: "Increase",
    },
    { id: "decrease", value: "Decrease", text: "Decrease" },
    { id: "nochange", value: "Nochange", text: "No change" },
  ],
  dropDown1: ["Snake", "RedHawk"],
  dropDown2: ["Grasshopper", "Wabler"],
  dropDown3: ["Wheat", "FruitFly"],
  chartHeading: [
    "If an invasive frog is added to this ecosystem, the grasshopper population will decrease because there will be more frogs eating them, the snake population will gradually increase over time because there will be more frogs to eat, and since the grasshopper population decreases, the wheat will have less organisms eating them, and their population will increase. ",
    " If the melon is removed from this ecosystem due to a disease, the fruit fly population would be greatly affected, decrease, and possibly become extinct because it has nothing else to eat. Since the fruit fly population decreases, the warbler may decrease a little bit over time but not change much because it has other organisms to eat. The same thing applies to the hawk. It would have other organisms to consume.",
  ],
  graphHeading: "Change in Population over Time",
  graphXaxisHeading: "Checkpoint",
  graphYaxisHeading: "Population size",
  questionHeading: "Question: -1- of -2-",
  pageHeadingOne:
    "Identify parts of the food web.",
    pageHeadingTwo:"Predict what will happen when ecosystems are disrupted by an invasive species and a disease.",
};

export default data;
