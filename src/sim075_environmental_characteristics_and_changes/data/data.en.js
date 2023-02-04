import commonData from "../../app/data/data.en";

const data = {
  buttonLabels: { ...commonData.buttonLabels },
  resetPopupText: commonData.resetPopupText,
  resetLiveText: commonData.resetLiveText,
  questionCounterString: commonData.questionCounterString2,
  completionPopup: commonData.completionPopup,
  completionPopupText: `Your term as mayor is ending. Review your final data to see how Moutainville did while you were mayor.
  Would you like to be mayor again to see if you can improve the city’s data?
  Click the Reset button to try another term as mayor.
  `,

  activityheading: `In this simulation, the learner will observe the effects of various 
  human-made and natural events on the health of the ecosystems near the town of which they are mayor.`,

  startUpInfoText: `You are the new mayor of Mountainville, and here is an open space to build your new town. 
  Several things will happen to your town as you build. As mayor, you have to identify the effects on the town 
  and decide if there is anything you can do to help. As you make decisions, you can see the impact on 
  the environment of your town.`,

  screens: {
    screen0: {
      id: "screen0",
      infoText: "Read the instructions and select your answer choice.",
      questions: [
        {
          id: "q1",
          text: "Mountainville is growing fast. New homes are needed. Choose a way to prepare your town for these new homes.",
          altText: "Initial image, forest with only one house.",
          options: [
            {
              id: "one",
              text: "Clear forest areas to create space to build new homes.",
              altText: "Clear forest areas to create space to build new homes.",
              ratings: {
                plantQuality: -3,
                animalQuality: -2,
                airQuality: -2,
                humanLivingQuality: 1,
                waterQuality: 0,
              },
            },
            {
              id: "two",
              text: "Build a dam to create a city lake. Homes and businesses can build around the lake.",
              altText:
                "Build a dam to create a city lake. Homes and businesses can build around the lake.",
              ratings: {
                plantQuality: -2,
                animalQuality: 1,
                airQuality: 0,
                humanLivingQuality: 2,
                waterQuality: 1,
              },
            },
            {
              id: "three",
              text: "Create city park areas that will ensure some habitats are saved.",
              altText:
                "Create city park areas that will ensure some habitats are saved.",
              ratings: {
                plantQuality: 2,
                animalQuality: 2,
                airQuality: 1,
                humanLivingQuality: 2,
                waterQuality: 0,
              },
            },
          ],
        },
        {
          id: "q2",
          text: `Now that the town is growing, you have been given the chance to build a highway and 
          a railroad next to town. The highway will make it easier for people to drive around town quickly. 
          Both the highway and the railroad would mean more businesses, and more people would move to your town.
          As mayor, you and your city council will vote on the new railroad and highway system. How will you vote?
          `,
          altText: "sample Alt text",
          options: [
            {
              id: "one",
              text: "Build both a highway and a railroad just outside of town.",
              altText: "Build both a highway and a railroad just outside of town.",
              ratings: {
                plantQuality: -3,
                animalQuality: -3,
                airQuality: -3,
                humanLivingQuality: 2,
                waterQuality: -1,
              },
            },
            {
              id: "two",
              text: "Build the railroad but not the highway.",
              altText: "Build the railroad but not the highway.",
              ratings: {
                plantQuality: -1,
                animalQuality: -1,
                airQuality: -1,
                humanLivingQuality: 1,
                waterQuality: 0,
              },
            },
            {
              id: "three",
              text: "Build the highway but not the railroad.",
              altText: "Build the highway but not the railroad.",
              ratings: {
                plantQuality: -2,
                animalQuality: -2,
                airQuality: -2,
                humanLivingQuality: 1,
                waterQuality: -1,
              },
            },
            {
              id: "four",
              text: "Build neither the highway nor the railroad.",
              altText: "Build neither the highway nor the railroad.",
              ratings: {
                plantQuality: 2,
                animalQuality: 2,
                airQuality: 1,
                humanLivingQuality: -1,
                waterQuality: 1,
              },
            },
          ],
        },
      ],
    },
    screen1: {
      id: "screen1",
      infoText: "Read the instructions and select your answer choice.",
      disasterInfo: `Natural disasters are sometimes unavoidable. Sometimes towns can prepare for them, 
      and sometimes they just have to clean up after them. Natural disasters can occur naturally or 
      because of the choices humans make. However, regardless of the cause of the natural disaster, 
      as mayor you have to evaluate its effects. Mountainville has been growing and thriving, 
      but it looks like a disaster has occurred.`,
      question: "Pick a disaster card to see what has happened to your town.",
      cards: [
        {
          id: "1",
          text: "1",
          label:"Disaster 1",
          content: `A wildfire started outside of town.  This is the end of the dry season, 
          and Moutainville has not had regular rain in two months. Town firefighters were able 
          to keep the downtown area safe, but homes on the edge of town were lost, and 24,000 
          acres of forest around town burned down.`,
          ratings: {
            plantQuality: -1,
            animalQuality: -2,
            airQuality: -2,
            humanLivingQuality: -2,
            waterQuality: 0,
          },
        },
        {
          id: "2",
          text: "2",
          label:"Disaster 2",
          content: `An invasive species of algae has taken over the pond in town. Fish in the 
          pond have started to die because oxygen levels in the water have dropped. The park 
          rangers have reported that some of the animals that eat fish have started to leave the 
          area, and people are noticing the pond does not smell good.`,
          ratings: {
            plantQuality: 1,
            animalQuality: -3,
            airQuality: -1,
            humanLivingQuality: -1,
            waterQuality: -3,
          },
        },
        {
          id: "3",
          text: "3",
          label:"Disaster 3",
          content: `Small earthquakes have started happening around a nearby volcano. 
          Scientists are monitoring the volcano and believe the earthquakes are a sign 
          that the volcano will erupt. Mountainville is close enough to be affected by the 
          earthquakes as well as the volcano if it erupts. Therefore, you have to start planning 
          evacuations and emergency services.`,
          ratings: {
            plantQuality: 0,
            animalQuality: -1,
            airQuality: 0,
            humanLivingQuality: -3,
            waterQuality: 0,
          },
        },
      ],
    },
    screen2: {
      id: "screen2",
      infoText: "Choose a rebuilding option, and click on it.",
      introText: `After the disaster that affected Mountainville, the whole town has come together to rebuild. 
      The city council has several rebuilding options to choose from.  Pick what you think Mountainville should 
      do next to help the town grow and prosper.`,
      options: [
        {
          id: "wg",
          text: "Water group",
          altText: "Water group",
          content: `Create a clean water group that tests and cleans the pond and rivers around town. 
          They will oversee a new recreational water area where people can kayak or canoe down the river.`,
          ratings: {
            plantQuality: 2,
            animalQuality: 1,
            airQuality: 2,
            humanLivingQuality: 2,
            waterQuality: 3,
          },
        },
        {
          id: "nf",
          text: "National forest",
          altText: "National forest",
          content: `Create a national forest initiative. This group will create and present to state and national 
          officials a proposal to turn the forests around Mountainville into a national forest. This will protect 
          the land and animals as well as bring in tourists wanting to camp, hike, and fish in the area.`,
          ratings: {
            plantQuality: 3,
            animalQuality: 3,
            airQuality: 2,
            humanLivingQuality: 2,
            waterQuality: 1,
          },
        },
        {
          id: "r",
          text: "Recycling",
          altText: "Recycling",
          content: `Create a city recycling committee. The city would place recycling bins around town 
          and do regular recycling pickups from people’s homes. The committee would oversee the building 
          of a recycling plant and create marketing materials and seminars for townspeople about reducing 
          and reusing everyday items.`,
          ratings: {
            plantQuality: 1,
            animalQuality: 2,
            airQuality: 0,
            humanLivingQuality: 1,
            waterQuality: 1,
          },
        },
      ],
    },
  },
  textLabels: { negative: "Negative", positive: "Positive" },
  ratings: [
    {
      id: "plantQuality",
      text: "Plant quality",
      altText: "Plant quality, -1- -2- star.",
      value: 0,
    },
    {
      id: "animalQuality",
      text: "Animal quality",
      altText: "Animal quality, -1- -2- star.",
      value: 0,
    },
    {
      id: "airQuality",
      text: "Air quality",
      altText: "Air quality, -1- -2- star.",

      value: 0,
    },
    {
      id: "humanLivingQuality",
      text: "Human living quality",
      altText: "Human living quality, -1- -2- star.",
      value: 0,
    },
    {
      id: "waterQuality",
      text: "Water quality",
      altText: "Water quality, -1- -2- star.",
      value: 0,
    },
  ],
};

export default data;
