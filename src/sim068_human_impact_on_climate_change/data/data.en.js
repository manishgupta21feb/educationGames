import commonData from "../../app/data/data.en";

const data = {
  greetingMessage: "Hello",
  nextScreenButtonText: "Next Screen",
  backScreenButtonText: "Back Screen",
  buttonLabels: { ...commonData.buttonLabels },
  startupPopUp:
    "Human actions affect global climate change. Advance through the stops on the timeline, and examine the data on four different graphs to determine how global climate has changed over time.",
  infoBoxContent:
    "Click the stops on the timeline and examine the graphs. Make sure to look at the graph titles and the labels on the x- and y-axes. To zoom in, click on the plus (+) button.",
  mainHeading:
    "The graphs on the screen show the measurements of four different environmental indicators: global carbon dioxide emissions, global sea level change, average global temperature, and the global Arctic sea ice minimum.",
  sliderLabel: "Timeline",
  resetPopupText: commonData.resetPopupText,
  resetLiveText: commonData.resetLiveText,
  completionScreen: {
    ...commonData.completionPopup,
    content: "You have successfully completed the simulation.",
  },
  buttonName: "Show Response",
  closeButtonLabel: "Close Zoom View",
  sliderData: [
    {
      id: "slidervalue1",
      value: 0,
      label: "1900",
    },
    {
      id: "slidervalue2",
      value: 1,
      label: "1950",
    },
    {
      id: "slidervalue3",
      value: 2,
      label: "2000",
    },
    {
      id: "slidervalue4",
      value: 3,
      label: "2020",
    },
  ],
  valuetextArray: {
    0: "Year 1900",
    1: "Year 1950",
    2: "Year 2000",
    3: "Year 2020",
  },
  descriptionBoxContent: [
    {
      id: "timeline1",
      response: false,
      closeButton: "1900 year close",
      content:
        "Think about what you know from the year 1900. Were there many factories? What about cars? How does the population in 1900 compare to the population today? Examine each graph closely. Can you predict what each graph will look like in 1950? Will the measurements increase or decrease?",
    },
    {
      id: "timeline2",
      response: true,
      closeButton: "1950 year close",
      buttonContent:
        "Great job! Global carbon level had the largest increase from 1900 to 1950. Why do you think that is? Can you predict what the global carbon level will be in another 50 years? Let's see what it was in 2000. ",
      content:
        "Now, take a look at each graph from 1950. What differences do you notice compared to 1900? Did the measurements of each environmental indicator increase, decrease, or stay the same? What changes happened over 50 years to get this data? Can you click on the graph that had the largest increase from 1900? ",
    },
    {
      id: "timeline3",
      response: true,
      closeButton: "2000 year close",
      buttonContent:
        "Correct! Although they are increasing at different rates, global carbon level and average global temperature are both showing an increase over the past 100 years. What correlation can you make between global carbon level and average global temperature? Let's jump ahead to the year 2020. What do you expect each graph to look like?",
      content:
        "Wow! Look at the graphs from 2000. They look very different from the past 100 years. Which two graphs show an  increase at the same time?",
    },
    {
      id: "timeline4",
      response: false,
      closeButton: "2020 year close",
      content:
        "Think back to the graphs from 1900. What differences do you see in the 2020 graphs compared to those from 1900? Let’s look at the global sea level graph and the global Arctic sea ice graph. How are they related? Notice that as the global Arctic sea ice decreases, the global sea level increases. As more ice in the Arctic region melts, sea levels rise. What do you think the graphs will look like for the year 2050? What impact do humans have on these environmental indicators?",
    },
  ],
  zoomButton: "Zoom",
  chartData: [
    {
      id: "chart1",
      xaxis: "Year",
      graphTitle:
        "Global Carbon Dioxide <span aria-hidden = 'true'>(CO<sub>2</sub>)</span><span class = 'sr-only sr-image' >(C O2)</span> Emissions",
      label: "Zoom Button of Global Carbon Dioxide (C O2) Emissions",
      yaxis:
        "<span aria-hidden = 'true'>CO<sub>2</sub></span><span class = 'sr-only sr-image' >C O2</span> emissions (billion metric tons)",
      years: ["1900", "1920", "1940", "1960", "1980", "2000", "2020"],
      reading: ["37", "35", "30", "25", "20", "15", "10", "5", "0"],
    },
    {
      id: "chart2",
      xaxis: "Year",
      graphTitle: "Global Sea Level Change",
      label: "Zoom Button of Global Sea Level Change",
      yaxis:
        "Sea level change (<span aria-hidden = 'true'>mm</span><span class='sr-only sr-image'>millimetre</span>)",
      years: ["1900", "1920", "1940", "1960", "1980", "2000", "2020"],
      reading: ["250", "200", "150", "100", "50", "0", "-50"],
    },
    {
      id: "chart3",
      xaxis: "Year",
      graphTitle: "Average Global Temperature",
      label: "Zoom Button of Average Global Temperature",
      yaxis:
        "Temperature difference <span aria-hidden='true'>(&degC)</span><span class = 'sr-only sr-image'>(degree celcius)</span>",
      years: ["1900", "1920", "1940", "1960", "1980", "2000", "2020"],
      reading: ["1.5", "1.0", "0.5", "0.0", "-0.5"],
    },
    {
      id: "chart4",
      xaxis: "Year",
      graphTitle: "Global Arctic Sea Ice Minimum",
      label: "Zoom Button of Global Arctic Sea Ice Minimum",
      yaxis:
        "Arctic sea ice minimum (million square <span aria-hidden='true'>km</span><span class = 'sr-only sr-image'>kilometre</span>)",
      years: ["1900", "1980", "1984", "1992", "2000", "2008", "2016"],
      reading: ["8.0", "7.0", "6.0", "5.0", "4.0", "3.0"],
    },
  ],
  pageHeading: "Students will examine climate data at four timeline stops.",
};

export default data;
