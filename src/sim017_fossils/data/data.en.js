const data = {
  activityInstructions:
    "Each dot on the map indicates a dig location. Select the dots to discover specifics about what was found.",
  hotspots: [
    {
      id: "tarantula",
      title: "Dig site in the small pond area near the beach.",
      heading: "Fossil Identified: <strong>Tarantula</strong>",
      subheading: "Depth of Fossil: <strong>35 meters</strong>",
      imageAlt: "A fossil image of a tarantula in dark grey stone.",
      listHeading: "Known tarantula facts:",
      listItems: [
        "Spider",
        "Hunts at night and eats small insects",
        "Lives largely in arid habitats",
      ],
    },
    {
      id: "differentrocklayers",
      imageAlt:
        "A Key of layers of the Earth.  The highest level is green ground level. Level 2 from the top starts at 20 meters down and is purple. Level 3 from the top starts at 50 meters down and is blue. Level 4 from the top starts at 80 meters down and is Grey. Level 4 ends at 100 meters below ground level.",
      title: "Dig site in a grassland.",
      listHeading: "Known core layer facts:",
      heading: "Core Sample:<strong> Different rock layers </strong>",
      subheading: "Depth of Core Sample: <strong> 100 meters </strong>",
      imageTextContent: [
        "Ground",
        "10 meters",
        "50 meters",
        "80 meters",
        "100 meters",
      ],
      listItems: [
        "Made up of volcanic rock",
        "Contains large amounts of algae and plant life indicative of the ocean floor",
        "Contains very few plant and small animal fossils but does contain many different types of rocks",
        "Contains large mammal fossils and abundant plant life",
      ],
      listItemsAlt: [
        "Grey- level 4 80-100 meters below ground",
        "blue- level 3 50-80 meters below ground",
        "purple- level 2 10-50 meters below ground",
        "green- level 1 Ground 10 meters below ground",
      ],
    },
    {
      id: "stingray",
      title: "Dig site 3 is on the beach near the river",
      heading: "Fossil Identified: <strong>Stingray</strong>",
      subheading: "Depth of Fossil: <strong> 64 meters </strong>",
      imageAlt: "the fossil of a stingray in light grey soft rock.",
      listHeading: "Known stingray facts:",
      listItems: [
        "Saltwater fish",
        "Eats small animals found on the seafloor",
        "Lives in groups",
      ],
    },
    {
      id: "coyotetracks",
      imageAlt: "Paw print fossil in dark brown rock.",
      title: "Dig site an the top of a rocky mountain",
      heading: "Fossil Identified: <strong>Coyote tracks</strong>",
      subheading: "Depth of Fossil: <strong>23 meters</strong>",
      listHeading: "Known coyote facts:",
      listItems: [
        "Hunts alone or in pairs",
        "Omnivore",
        "Habitat varies from wooded areas to prairies to deserts",
      ],
    },
    {
      id: "pottery",
      title: "Dig Site at a beach near grasslands",
      imageAlt:
        "Broken pieces of two ancient pottery pieces. Neither pots have all their pieces.",
      heading: "Fossil Identified: <strong>Pottery</strong>",
      subheading: "Depth of Fossil: <strong> 47 meters </strong>",
      listHeading: "Known pottery facts:",
      listItems: [
        "Made by baking wet dirt in the sun in molds",
        "Human-made",
        "Used to carry dry goods or liquids",
      ],
    },
  ],
  noButton: "No",
  yesButton: "Yes",
  infoText: "Info",
  resetText: "Reset",
  closeButton: "Close",
  startButton: "Start",
  resetPopupText: "Are you sure you want to reset?",
  helpPopupText:
    "Each dot on the map indicates a dig location and gives specifics about what was found. Select the dots to know more.",
  initialInfoPopupText:
    "It is 3030, and a group of scientists are digging up different areas in a state park to try and see what clues they can find about the past.",
  fossilsBGAltText:
    "Aerial view of a natural park area. The area has a small pond, river, beach, rocky hills, grasslands and forest. Pink dots identify dig sites.",
};

export default data;
