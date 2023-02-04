import commonData from "../../app/data";

const data = {

  buttonLabels: { ...commonData.buttonLabels },
  learningObjective:
    "Students will observe the weather that occurs for five days and match it with the appropriate weather symbols and name the season that is most likely occurring based on the five-day weather.",
  hintContent:
    "Click the day, look at the picture, and drag the weather symbol under the picture that would be used to show the weather for that day. Then choose the season it would be when you would see this kind of weather.",
  completionPopup: {
    ...commonData.completionPopup,
    content: "You have matched weather symbols and seasons with the weather!",
  },
  resetMsgContent: commonData.resetPopupText,
  resetLiveText: commonData.resetLiveText,
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  instructionBoxContent:
    "Weather changes from day to day. We can tell what season it is by the weather. Let's explore the weather!",
  ost_same:
    "Click on each day. Look at the picture. Drag the weather symbol that shows what kind of weather it is that day into the box below the picture.",
  last_ost:
    "Now that you have observed the weather that occurs for five days, what do you think the season is? Complete the sentence.",
  dragTag: "draggable",
  popupImgAlt:
    "4 images–1st rainy & tree has few green leaves; 2nd sunny & tree full of leaves & fruit; 3rd snowy & tree has no leaves; 4th sunny & tree loses leaves",
  dropZones: [
    {
      id: "mon_day",
      name: "Monday",
      visited: false,
      headingText:
        "Drag the weather symbol under the picture to show Monday's weather.",
      label: "Monday droppable area",
      alt: {
        season1:
          "Two boys standing in the rain. One boy has an umbrella. Puddles are on the ground. The Sun is partially behind a cloud in the blue sky.",
        season2:
          "A boy with goggles is swimming in blue water at the beach. The sky is blue with a few clouds. The Sun is partially behind one of the clouds.",
        season3:
          "A boy is raking orange leaves under a tree with a few orange leaves left on it. The Sun is in an orange sky & the grass is pale green and yellow.",
        season4:
          "A girl wearing gloves, a hat, and a coat is making a snowman. Snow is falling from the sky and is on the ground.",
      },
      afterDrop: {
        season1:
          "Rain is falling from a cloud with the Sun partially behind it.",
        season2:
          "A thermometer with the red liquid almost to the top and the Sun partially behind the thermometer",
        season3: "A red and white windsock on a pole",
        season4: "A blue cloud with blue snowflakes falling from it",
      },
    },
    {
      id: "tues_day",
      name: "Tuesday",
      visited: false,
      headingText:
        "Drag the weather symbol under the picture to show Tuesday's weather.",
      label: "Tuesday droppable area",
      alt: {
        season1:
          "The Sun and clouds are in the blue sky. Butterflies, grass, and flowers are on the ground.",
        season2:
          "A boy in shorts is flying a kite in an open field with green grass. There are 2 white clouds in a blue sky. The Sun is behind one of the clouds.",
        season3:
          "A boy throws orange leaves under a tree with a few leaves left on it. The Sun is behind the clouds in an orange sky. The grass is turning yellow.",
        season4:
          "A girl wearing gloves, a hat, and a coat is making a large snowball.",
      },
      afterDrop: {
        season1: "The Sun",
        season2: "A red and white windsock on a pole",
        season3: "The Sun partially behind three gray clouds",
        season4:
          "A thermometer has blue in the lower fourth of the tube. A snowflake is partially behind the thermometer.",
      },
    },
    {
      id: "wed_day",
      name: "Wednesday",
      visited: false,
      headingText:
        "Drag the weather symbol under the picture to show Wednesday's weather.",
      label: "Wednesday droppable area",
      alt: {
        season1:
          "Rain falls on snow-covered mountains & a rainbow is over the mountains. 2 gray & white clouds are in the blue sky. The Sun is behind 1 of the clouds.",
        season2:
          "A tree full of leaves & red fruit is in a grassy field. Butterflies and flowers are under the tree. The Sun and 2 white clouds are in the orange sky.",
        season3:
          "A boy in shorts is flying a kite in an open field with green grass. There are 2 white clouds in an orange sky. The Sun is behind one of the clouds.",
        season4:
          "A girl in gloves, a hat, and a coat is making a snow angel in the snow. ",
      },
      afterDrop: {
        season1: "A rainbow over 2 gray and white clouds",
        season2:
          "A thermometer with the red liquid almost to the top and the Sun partially behind the thermometer",
        season3: "A red and white windsock on a pole",
        season4:
          "A thermometer has blue in the lower fourth of the tube. A snowflake is partially behind the thermometer.",
      },
    },
    {
      id: "thurs_day",
      name: "Thursday",
      visited: false,
      headingText:
        "Drag the weather symbol under the picture to show Thursday's weather.",
      label: "Thursday droppable area",
      alt: {
        season1:
          "The Sun and 2 white clouds are in the blue sky. Green grass and red flowers are on the ground.",
        season2:
          "A boy wears sunglasses & holds an ice pop on a beach. Behind him is the blue ocean & a blue sky with a few white clouds. The Sun is behind a cloud.",
        season3:
          "In the green grass, an American flag on a pole is waving in the wind. There are 2 white clouds in an orange sky. The Sun is behind one of the clouds.",
        season4: "A snowy field with several evergreen trees with snow on them",
      },
      afterDrop: {
        season1: "The Sun",
        season2:
          "A thermometer with the red liquid almost to the top and the Sun partially behind the thermometer",
        season3: "A red and white windsock on a pole",
        season4:
          "A thermometer has blue in the lower fourth of the tube. A snowflake is partially behind the thermometer.",
      },
    },
    {
      id: "fri_day",
      name: "Friday",
      visited: false,
      headingText:
        "Drag the weather symbol under the picture to show Friday's weather.",
      label: "Friday droppable area",
      alt: {
        season1:
          "4 birds flying through some clouds in a blue sky and the sun shining.",
        season2:
          "On a beach are chairs with a red & yellow umbrella & palm trees. The blue ocean & blue sky with a few white clouds and the Sun are in the background.",
        season3:
          "A bare tree has a few orange & yellow leaves. Some leaves are falling on the yellowing grass. 4 gray & white clouds are in the darkening sky.",
        season4:
          "It is snowing & snow completely covers the ground. A boy and a girl are both wearing gloves, hats, and coats and making large snowballs.",
      },
      afterDrop: {
        season1: "The Sun",
        season2:
          "A thermometer with the red liquid almost to the top and the Sun partially behind the thermometer",
        season3: "Three gray clouds",
        season4: "A blue cloud with blue snowflakes falling from it",
      },
    },
  ],
  seasons: ["season1", "season2", "season3", "season4"],
  dropdownHeading: "This is the kind of weather that happens in the",
  dropdownItems: [
    { id: "spring", value: "season1", text: "spring" },
    { id: "summer", value: "season2", text: "summer" },
    { id: "fall", value: "season3", text: "fall" },
    { id: "winter", value: "season4", text: "winter" },
  ],
  dragingData: [
    {
      id: "season1",
      dragData: [
        {
          id: "drag0",
          name: "sunny",
          altText: "Sunny draggable 1",
          accept: "tues_day,thurs_day,fri_day",
          isDisable: false,
        },
        {
          id: "drag1",
          name: "rainy",
          altText: "Rainy draggable",
          accept: "mon_day",
          isDisable: false,
        },
        {
          id: "drag2",
          name: "sunny",
          altText: "Sunny draggable 2",
          accept: "tues_day,thurs_day,fri_day",
          isDisable: false,
        },
        {
          id: "drag3",
          name: "rainy with a rainbow",
          altText: "Rainy with a rainbow draggable",
          accept: "wed_day",
          isDisable: false,
        },
        {
          id: "drag4",
          name: "sunny",
          altText: "Sunny draggable 3",
          accept: "tues_day,thurs_day,fri_day",
          isDisable: false,
        },
      ],
    },
    {
      id: "season2",
      dragData: [
        {
          id: "drag0",
          name: "Sunny and hot",
          altText: "Sunny and hot draggable 1",
          accept: "mon_day,wed_day,thurs_day,fri_day",
          isDisable: false,
        },

        {
          id: "drag1",
          name: "Sunny and hot",
          altText: "Sunny and hot draggable 2",
          accept: "mon_day,wed_day,thurs_day,fri_day",
          isDisable: false,
        },
        {
          id: "drag2",
          name: "Sunny and hot",
          altText: "Sunny and hot draggable 3",
          accept: "mon_day,wed_day,thurs_day,fri_day",
          isDisable: false,
        },
        {
          id: "drag3",
          name: "Windy",
          altText: "Windy draggable",
          accept: "tues_day",
          isDisable: false,
        },
        {
          id: "drag4",
          name: "Sunny and hot ",
          altText: "Sunny and hot draggable 4",
          accept: "mon_day,wed_day,thurs_day,fri_day",
          isDisable: false,
        },
      ],
    },
    {
      id: "season3",
      dragData: [
        {
          id: "drag0",
          name: "Partly Sunny",
          altText: "Partly sunny draggable",
          accept: "tues_day",
          isDisable: false,
        },
        {
          id: "drag1",
          name: "Windy",
          altText: "Windy draggable 1",
          accept: "mon_day,thurs_day,wed_day",
          isDisable: false,
        },
        {
          id: "drag2",
          name: "Windy",
          altText: "Windy draggable 2",
          accept: "mon_day,thurs_day,wed_day",
          isDisable: false,
        },
        {
          id: "drag3",
          name: "Cloudy",
          altText: "Cloudy draggable",
          accept: "fri_day",
          isDisable: false,
        },
        {
          id: "drag4",
          name: "Windy",
          altText: "Windy draggable 3",
          accept: "mon_day,thurs_day,wed_day",
          isDisable: false,
        },
      ],
    },
    {
      id: "season4",
      dragData: [
        {
          id: "drag0",
          name: "Cold",
          altText: "Cold draggable 1",
          accept: "tues_day,thurs_day,wed_day",
          isDisable: false,
        },
        {
          id: "drag1",
          name: "Snowing",
          altText: "Snowing draggable 1",
          accept: "mon_day,fri_day",
          isDisable: false,
        },
        {
          id: "drag2",
          name: "Cold",
          altText: "Cold draggable 2",
          accept: "tues_day,thurs_day,wed_day",
          isDisable: false,
        },
        {
          id: "drag3",
          name: "Snowing",
          altText: "Snowing draggable 2",
          accept: "mon_day,fri_day",
          isDisable: false,
        },
        {
          id: "drag4",
          name: "Cold",
          altText: "Snowing draggable 3",
          accept: "tues_day,thurs_day,wed_day",
          isDisable: false,
        },
      ],
    },
  ],
};

export default data;
