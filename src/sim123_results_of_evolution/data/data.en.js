import commonData from "../../app/data/data.en";

const data = {
  greetingMessage: "Hello",
  nextScreenButtonText: "Next Screen",
  backScreenButtonText: "Back Screen",
  buttonLabels: { ...commonData.buttonLabels },
  startUpPopup:
    "Many factors influence the evolution of a species. Natural selection, or the survival of the best fit species, is only one explanation of how species evolve. In this activity, you will discover the different factors that influence the evolution of a population of mice living in the brush on the side of a mountain. The population is made up of gray and brown mice, each with different environmental advantages. The gray mice have the advantage of blending in with the rocks, and the brown mice have the advantage of blending in with the brush.  Select Start to see the different ways this population of mice can evolve.",
  resetLiveText: commonData.resetLiveText,
  resetPopupText: commonData.resetPopupText,
  infoPopupText:
    "Read the text on each screen to discover more about various factors of speciation, including genetic drift, the founder effect, and the bottleneck effect!",
  completionScreen: {
    ...commonData.completionPopup,
    content: "You successfully answered all of the questions correctly!",
  },
  pageHeading:
    "Students will be able to identify the effects of genetic drift, founder effect, bottleneck effect, gene flow, mutation and recombination have on a population.",
  // imageAltText: "Mice should be distributed throughout the ecosystem",
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  rightScreenData: [
    {
      id: "screen1",
      heading:
        "Click on the Reproduce button and observe what happens. Then, click the Reproduce button again to see what happens next!",

      defaultRats: [
        {
          id: "column1",
          display1: true,
          display2: true,
          display3: true,
          text: [],
          data: [
            {
              id: "row1",
              datasource: [
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
              ],
            },
            { id: "row2", datasource: ["grey-mouse", "grey-mouse"] },
          ],
        },
        {
          id: "column2",
          display1: false,
          display2: true,
          display3: true,
          text: [],
          data: [{ id: "columnrow", datasource: ["arrow1", "arrow2"] }],
        },
        {
          id: "column3",
          display1: false,
          display2: true,
          display3: true,
          text: [],
          data: [
            {
              id: "row1",
              datasource: [
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
              ],
            },
            {
              id: "row2",
              datasource: [
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
              ],
            },
          ],
        },
        {
          id: "column4",
          display1: false,
          display2: false,
          display3: true,
          text: [],
          data: [{ id: "columnrow", datasource: ["arrow3", "arrow4"] }],
        },
        {
          id: "column5",
          display1: false,
          display2: false,
          display3: true,
          text: [],
          data: [
            {
              id: "row1",
              datasource: [
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
              ],
            },
            {
              id: "row2",
              datasource: [
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
              ],
            },
          ],
        },
      ],
      buttonIncluded: [
        {
          id: "reproduce1",
          text: "Reproduce",
          disable1: false,
          disable2: false,
        },
      ],
      imageAltText: [
        "6 brown mice on the left and 2 gray mice on the right",
        "6 brown mice and 2 gray mice produce 6 brown mice and 4 gray mice",
        "6 brown mice & 2 gray mice produce 6 brown mice & 4 gray mice and they produce 10 brown mice & 8 gray mice",
      ],
      question:
        "Based on your observations, what is the correct definition for genetic drift?",
      scroll: true,
      liveText: [
        "6 brown mice and 2 gray mice produce 6 brown mice and 4 gray mice",
        "6 brown mice & 2 gray mice produce 6 brown mice & 4 gray mice and they produce 10 brown mice & 8 gray mice",
      ],
      radiobuttons: [
        {
          id: "option1",
          value:
            "A reduction of the size of a population to a single or a few individuals, resulting in loss of genetic variation",
          text: "A reduction of the size of a population to a single or a few individuals, resulting in loss of genetic variation",
          label:
            "A reduction of the size of a population to a single or a few individuals, resulting in loss of genetic variation",
        },
        {
          id: "option2",
          value:
            "The transfer of alleles or genes from one population to another",
          text: "The transfer of alleles or genes from one population to another",
          label:
            "The transfer of alleles or genes from one population to another",
        },
        {
          id: "option3",
          value:
            "The change in the frequency of an allele in a population due to the random-chance survival of certain organisms within the population",
          text: "The change in the frequency of an allele in a population due to the random-chance survival of certain organisms within the population",
          label:
            "The change in the frequency of an allele in a population due to the random-chance survival of certain organisms within the population",
        },
        {
          id: "option4",
          value: "A change in the DNA sequence of a chromosome",
          text: "A change in the DNA sequence of a chromosome",
          label: "A change in the DNA sequence of a chromosome",
        },
      ],
      answer: "option3",
    },
    {
      id: "screen2",
      heading:
        "Click on the Migrate button and observe what happens. Then, click on the Reproduce button to see what happens next!",
      buttonIncluded: [
        { id: "migrate", text: "Migrate", disable1: false, disable2: true },
        { id: "reproduce", text: "Reproduce", disable1: true, disable2: false },
      ],
      liveText: [
        "Original population of mice - 6 brown & 2 gray & migratory population - 2 brown & 3 gray combined are 8 brown mice & 5 gray mice.",
        "Original mice population - 6 brown & 2 gray & migratory population - 2 brown & 3 gray combined are 8 brown & 5 gray, and they produce 10 brown & 11 gray",
      ],
      imageAltText: [
        "On the left is the original population of 6 brown mice & 2 gray mice. On the right is the migratory population of 2 brown mice & 3 gray mice.",
        "Original population of mice - 6 brown & 2 gray & migratory population - 2 brown & 3 gray combined are 8 brown mice & 5 gray mice.",
        "Original mice population - 6 brown & 2 gray & migratory population - 2 brown & 3 gray combined are 8 brown & 5 gray, and they produce 10 brown & 11 gray",
      ],
      defaultRats: [
        {
          id: "column1",
          display1: true,
          display2: true,
          display3: true,
          text: [
            { class: "column10", text: "Original Population " },
            { class: "column11", text: "Migratory Population" },
          ],
          data: [
            {
              id: "row1",
              datasource: [
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "grey-mouse",
                "grey-mouse",
                "brown-mouse",
              ],
            },
            {
              id: "row2",
              datasource: [
                "brown-mouse",
                "brown-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
              ],
            },
          ],
        },
        {
          id: "column2",
          display1: false,
          display2: true,
          display3: true,
          text: [],
          data: [{ id: "columnrow", datasource: ["arrow1", "arrow2"] }],
        },
        {
          id: "column3",
          display1: false,
          display2: true,
          display3: true,
          text: [{ class: "column30", text: "Combined Population" }],
          data: [
            {
              id: "rowcolumn ",
              datasource: [
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
              ],
            },
          ],
        },
        {
          id: "column4",
          display1: false,
          display2: false,
          display3: true,
          text: [],
          data: [{ id: "columnrow", datasource: ["arrow3", "arrow4"] }],
        },
        {
          id: "column5",
          display1: false,
          display2: false,
          display3: true,
          text: [{ class: "column60", text: "Second Generation" }],
          data: [
            {
              id: "rowcolumn ",
              datasource: [
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "brown-mouse",
              ],
            },
          ],
        },
      ],
      question: "What other factor might influence gene flow in a population?",
      scroll: false,
      radiobuttons: [
        {
          id: "option1",
          value: "Emigration",
          text: "Emigration",
          label: "Emigration",
        },
        {
          id: "option2",
          value: "Predation",
          text: "Predation",
          label: "Predation",
        },
        {
          id: "option3",
          value: "Lack of food",
          text: "Lack of food",
          label: "Lack of food",
        },
        {
          id: "option4",
          value: "Size of individuals",
          text: "Size of individuals",
          label: "Size of individuals",
        },
      ],
      answer: "option1",
    },
    {
      id: "screen3",
      heading:
        "Click on the Reproduce button and observe what happens. Then, click the Reproduce button again to see what happens next!",
      buttonIncluded: [
        {
          id: "reproduce1",
          text: "Reproduce",
          disable1: false,
          disable2: false,
        },
      ],
      liveText: [
        "6 brown mice and 2 gray mice produce a second generation of 4 brown mice, 6 gray mice, and 1 white mouse",
        "6 brown mice & 2 gray produce a 2nd generation of 4 brown, 6 gray & 1 white & they produce a 3rd generation of 3 brown, 10 gray, and 1 white mouse.",
      ],
      imageAltText: [
        "6 brown mice on the left and 2 gray mice on the right",
        "6 brown mice and 2 gray mice produce a second generation of 4 brown mice, 6 gray mice, and 1 white mouse",
        "6 brown mice & 2 gray produce a 2nd generation of 4 brown, 6 gray & 1 white & they produce a 3rd generation of 3 brown, 10 gray, and 1 white mouse.",
      ],
      defaultRats: [
        {
          id: "column1",
          display1: true,
          display2: true,
          display3: true,
          text: [],
          data: [
            {
              id: "row1",
              datasource: [
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
              ],
            },
            {
              id: "row2",
              datasource: ["grey-mouse", "grey-mouse"],
            },
          ],
        },
        {
          id: "column2",
          display1: false,
          display2: true,
          display3: true,
          text: [],
          data: [{ id: "columnrow", datasource: ["arrow1", "arrow2"] }],
        },
        {
          id: "column3",
          display1: false,
          display2: true,
          display3: true,
          text: [{ class: "column33", text: "Second Generation" }],
          data: [
            {
              id: "rowcolumn ",
              datasource: [
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "white-mouse",
              ],
            },
          ],
        },
        {
          id: "column4",
          display1: false,
          display2: false,
          display3: true,
          text: [],
          data: [{ id: "columnrow", datasource: ["arrow7", "arrow8"] }],
        },
        {
          id: "column5",
          display1: false,
          display2: false,
          display3: true,
          text: [{ class: "column51", text: "Third Generation" }],
          data: [
            {
              id: "rowcolumns",
              datasource: [
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "white-mouse",
              ],
            },
          ],
        },
      ],

      question:
        "Which scenario would make the white fur a beneficial mutation?",
      scroll: true,
      radiobuttons: [
        {
          id: "option1",
          value:
            "The white mouse stands out in the shrubs and is easily seen by predators.",
          text: "The white mouse stands out in the shrubs and is easily seen by predators.",
          label:
            "The white mouse stands out in the shrubs and is easily seen by predators.",
        },
        {
          id: "option2",
          value:
            "The white mouse stands out against the gray rock and is easily seen by predators.",
          text: "The white mouse stands out against the gray rock and is easily seen by predators.",
          label:
            "The white mouse stands out against the gray rock and is easily seen by predators.",
        },
        {
          id: "option3",
          value:
            "The white mouse blends into snow that occurs for 7 months a year.",
          text: "The white mouse blends into snow that occurs for 7 months a year.",
          label:
            "The white mouse blends into snow that occurs for 7 months a year.",
        },
        {
          id: "option4",
          value:
            "The white fur allows the mouse’s skin to sunburn and develop skin cancer.",
          text: "The white fur allows the mouse’s skin to sunburn and develop skin cancer.",
          label:
            "The white fur allows the mouse’s skin to sunburn and develop skin cancer.",
        },
      ],
      answer: "option3",
    },
    {
      id: "screen4",
      heading: "Click on the Flood button and observe what happens!",
      buttonIncluded: [
        {
          id: "flood",
          text: "Flood",
          disable1: false,
          disable2: true,
        },
      ],
      liveText: [
        "3 brown mice, 10 gray & 1 white are separated into 1 brown & 5 gray in one population & 2 brown, 4 gray & 1 white in another",
        "3 brown mice, 10 gray & 1 white are separated into 1 brown & 5 gray in one population & 2 brown, 4 gray & 1 white in another",
      ],
      imageAltText: [
        "3 brown mice, 10 gray mice, and 1 white mouse",
        "3 brown mice, 10 gray & 1 white are separated into 1 brown & 5 gray in one population & 2 brown, 4 gray & 1 white in another",
        "3 brown mice, 10 gray & 1 white are separated into 1 brown & 5 gray in one population & 2 brown, 4 gray & 1 white in another",
      ],
      defaultRats: [
        {
          id: "column1",
          display1: true,
          display2: true,
          display3: true,
          text: [],
          data: [
            {
              id: "rowcolumn",
              datasource: [
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "white-mouse",
              ],
            },
          ],
        },
        {
          id: "column2",
          display1: false,
          display2: true,
          display3: true,
          text: [],
          data: [{ id: "columnrow", datasource: ["arrow5", "arrow6"] }],
        },
        {
          id: "column3",
          display1: false,
          display2: true,
          display3: true,
          text: [
            { class: "column40", text: "Original Ecosystem" },
            { class: "column41", text: "Valley Ecosystem" },
          ],
          data: [
            {
              id: "row3",
              datasource: [
                "brown-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
              ],
            },
            {
              id: "row4",
              datasource: [
                "brown-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "white-mouse",
                "brown-mouse",
              ],
            },
          ],
        },
      ],
      question:
        "Which scenario best describes how the original population might change over time?",
      scroll: true,
      radiobuttons: [
        {
          id: "option1",
          value:
            "The original population will remain the same because the flood had little effect.",
          text: "The original population will remain the same because the flood had little effect.",
          label:
            "The original population will remain the same because the flood had little effect..",
        },
        {
          id: "option2",
          value:
            "The original population will eventually become all or mostly gray due to the low number of brown mice.",
          text: "The original population will eventually become all or mostly gray due to the low number of brown mice.",
          label:
            "The original population will eventually become all or mostly gray due to the low number of brown mice.",
        },
        {
          id: "option3",
          value:
            "The original population will eventually become all or mostly brown because of the change in the population.",
          text: "The original population will eventually become all or mostly brown because of the change in the population.",
          label:
            "The original population will eventually become all or mostly brown because of the change in the population.",
        },
        {
          id: "option4",
          value:
            "The original population will eventually merge with the valley population as mice can travel large distances.",
          text: "The original population will eventually merge with the valley population as mice can travel large distances.",
          label:
            "The original population will eventually merge with the valley population as mice can travel large distances.",
        },
      ],
      answer: "option2",
    },
    {
      id: "screen5",
      heading:
        "Click on the Fire button and observe what happens! Then, click on the Reproduce button to see what happens next!",
      buttonIncluded: [
        { id: "fire", text: "Fire", disable1: false, disable2: true },
        { id: "reproduce", text: "Reproduce", disable1: true, disable2: false },
      ],
      liveText: [
        "A population of 8 brown mice and 6 gray mice are at the top. After a fire, only 1 brown and 6 gray survive.",
        "8 brown mice & 6 gray mice are at the top. After a fire, 1 brown & 6 gray survive & they produce 1 brown & 10 gray mice",
      ],
      imageAltText: [
        "8 brown mice and 6 gray mice",
        "A population of 8 brown mice and 6 gray mice are at the top. After a fire, only 1 brown and 6 gray survive.",
        "8 brown mice & 6 gray mice are at the top. After a fire, 1 brown & 6 gray survive & they produce 1 brown & 10 gray mice",
      ],

      question:
        "What are some other things that might cause a bottleneck effect?",
      scroll: false,
      defaultRats: [
        {
          id: "column1",
          display1: true,
          display2: true,
          display3: true,
          text: [],
          data: [
            {
              id: "rowcolumn",
              datasource: [
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
              ],
            },
          ],
        },
        {
          id: "column2",
          display1: false,
          display2: true,
          display3: true,
          text: [],
          data: [{ id: "columnrow", datasource: ["arrow9", "arrow10"] }],
        },
        {
          id: "column3",
          display1: false,
          display2: true,
          display3: true,
          text: [{ class: "column20", text: "After Fire" }],
          data: [
            {
              id: "rowcolumns",
              datasource: [
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "brown-mouse",
              ],
            },
          ],
        },
        {
          id: "column4",
          display1: false,
          display2: false,
          display3: true,
          text: [],
          data: [{ id: "columnrow", datasource: ["arrow11", "arrow12"] }],
        },
        {
          id: "column5",
          display1: false,
          display2: false,
          display3: true,
          text: [{ class: "column50", text: "Second Generation" }],
          data: [
            {
              id: "rowcolumns",
              datasource: [
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "grey-mouse",
                "brown-mouse",
              ],
            },
          ],
        },
      ],
      radiobuttons: [
        {
          id: "option1",
          value: "Pollution",
          text: "Pollution",
          label: "Pollution",
        },
        {
          id: "option2",
          value: "Earthquake",
          text: "Earthquake",
          label: "Earthquake",
        },
        {
          id: "option3",
          value: "Disease killing only gray mice",
          text: "Disease killing only gray mice",
          label: "Disease killing only gray mice",
        },
        {
          id: "option4",
          value: "Volcano erupted",
          text: "Volcano erupted",
          label: "Volcano erupted",
        },
      ],
      answer: "option3",
    },
    {
      id: "screen6",
      heading:
        " Click on the Reproduce button and observe what happens. Then, click the Reproduce button again to see what happens next!",
      buttonIncluded: [
        {
          id: "reproduce1",
          text: "Reproduce",
          disable1: false,
          disable2: false,
        },
      ],
      liveText: [
        "5 dark brown mice produce 3 dark brown and 4 brown mice",
        "5 dark brown mice produce 3 dark brown and 4 brown mice which produce 2 light tan mice, 5 brown, and 2 dark brown mice",
      ],
      defaultRats: [
        {
          id: "column1",
          display1: true,
          display2: true,
          display3: true,
          text: [],
          data: [
            {
              id: "rowcolumn",
              datasource: [
                "red-mouse",
                "red-mouse",
                "red-mouse",
                "red-mouse",
                "red-mouse",
              ],
            },
          ],
        },
        {
          id: "column2",
          display1: false,
          display2: true,
          display3: true,
          text: [],
          data: [{ id: "columnrow", datasource: ["arrow1", "arrow2"] }],
        },
        {
          id: "column3",
          display1: false,
          display2: true,
          display3: true,
          text: [],
          data: [
            {
              id: "rowcolumn",
              datasource: [
                "red-mouse",
                "red-mouse",
                "red-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
              ],
            },
          ],
        },
        {
          id: "column4",
          display1: false,
          display2: false,
          display3: true,
          text: [],
          data: [{ id: "columnrow", datasource: ["arrow3", "arrow4"] }],
        },
        {
          id: "column5",
          display1: false,
          display2: false,
          display3: true,
          text: [],
          data: [
            {
              id: "rowcolumn",
              datasource: [
                "orange-mouse",
                "orange-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "brown-mouse",
                "red-mouse",
                "red-mouse",
              ],
            },
          ],
        },
      ],
      imageAltText: [
        "5 dark brown mice",
        "5 dark brown mice produce 3 dark brown and 4 brown mice",
        "5 dark brown mice produce 3 dark brown and 4 brown mice which produce 2 light tan mice, 5 brown, and 2 dark brown mice",
      ],
      question:
        "Which scenario provides a disadvantage as the mouse fur color moves toward light tan? ",
      scroll: true,
      radiobuttons: [
        {
          id: "option1",
          value:
            "Drought causes the shrubs to die, causing light brown grasses to be the dominant plant type and the groundcover a  tan-colored sand.",
          text: "Drought causes the shrubs to die, causing light brown grasses to be the dominant plant type and the groundcover a  tan-colored sand.",
          label:
            "Drought causes the shrubs to die, causing light brown grasses to be the dominant plant type and the groundcover a  tan-colored sand.",
        },
        {
          id: "option2",
          value:
            "The ground becomes saturated with water and turns dark brown or black.",
          text: "The ground becomes saturated with water and turns dark brown or black.",
          label:
            "The ground becomes saturated with water and turns dark brown or black.",
        },
        {
          id: "option3",
          value: "Ice from the mountain top melts and the shrubs thicken.",
          text: "Ice from the mountain top melts and the shrubs thicken.",
          label: "Ice from the mountain top melts and the shrubs thicken.",
        },
        {
          id: "option4",
          value:
            "There is no change to the original ecosystem, but both fur colors provide camouflage.",
          text: "There is no change to the original ecosystem, but both fur colors provide camouflage.",
          label:
            "There is no change to the original ecosystem, but both fur colors provide camouflage.",
        },
      ],
      answer: "option2",
    },
  ],
};

export default data;
