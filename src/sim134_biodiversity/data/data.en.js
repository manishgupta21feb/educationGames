import commonData from "../../app/data/data.en";
import { common } from "../actions";

import launchImage from "../assets/images/location_a.png";
import questionAImage from "../assets/images/location_b.png";
import questionBImage from "../assets/images/location_c.png";
import questionCImage from "../assets/images/location_d.png";
import questionDImage from "../assets/images/location_e.png";
import questionEImage from "../assets/images/location_f.png";
import questionFImage from "../assets/images/location_g.png";

const data = {
  learningObjective:
    "Students will read scenarios about different ecosystems and organisms found within them. Students will determine whether the ecosystem has high or low biodiversity.Students will identify how biodiversity directly affects sustainability.",
  introductoryText:
    "Hello! Let’s explore different ecosystems and the biodiversity each contains.",
  hint: "Click on the different ecosystems to learn more about biodiversity and the flow of energy throughout the world.",
  buttonLabels: { ...commonData.buttonLabels },
  mainScreen: {
    imageSrc: launchImage,
    imageAlt:
      "World map shows biome locations. Moving from north to south: tundra, taiga, temperate forest, grassland, desert, & tropical rain forest at equator",
    hotSpots: {
      locationB: {
        content: "Tundra",
        location: "locationB",
        altText: "Tundra",
        visited: false,
      },
      locationC: {
        content: "Taiga",
        location: "locationC",
        altText: "Taiga",
        visited: false,
      },
      locationA: {
        content: "Temperate forest",
        location: "locationA",
        altText: "Temperate forest",
        visited: false,
      },
      locationD: {
        content: "Desert",
        location: "locationD",
        altText: "Desert",
        visited: false,
      },
      locationF: {
        content: "Tropical rain forest",
        location: "locationF",
        altText: "Tropical rain forest",
        visited: false,
      },
      locationE: {
        content: "Grassland",
        location: "locationE",
        altText: "Grassland",
        visited: false,
      },
    },
    legends: {
      headline:
        "Diversity zones (DZ): Number of species per 10,000 km<sup>2</sup>",
      headlineAria:
        "Diversity zones (DZ): Number of species per 10,000 km square",
      list: {
        legend1: {
          content: "DZ 1",
          range: "<20 spp.",
          allyContent: "DZ 1 less than the 20 spp.",
        },
        legend2: {
          content: "DZ 2",
          range: "20-200 spp.",
          allyContent: "DZ 2 20 to 200 spp.",
        },
        legend3: {
          content: "DZ 3",
          range: "200-500 spp.",
          allyContent: "DZ 3 200 to 500 spp.",
        },
        legend4: {
          content: "DZ 4",
          range: "500-1000 spp.",
          allyContent: "DZ 4 500 to 1000 spp.",
        },
        legend5: {
          content: "DZ 5",
          range: "1000-1500 spp.",
          allyContent: "DZ 5 1000 to 1500 spp.",
        },
        legend6: {
          content: "DZ 6",
          range: "1500-2000 spp.",
          allyContent: "DZ 6 1500 to 2000 spp.",
        },
        legend7: {
          content: "DZ 7",
          range: "2000-3000 spp.",
          allyContent: "DZ 7 2000 to 3000 spp.",
        },
        legend8: {
          content: "DZ 8",
          range: "3000-4000 spp.",
          allyContent: "DZ 8 3000 to 4000 spp.",
        },
        legend9: {
          content: "DZ 9",
          range: "4000-5000 spp.",
          allyContent: "DZ 9 4000 to 5000 spp.",
        },
        legend10: {
          content: "DZ 10",
          range: ">5000 spp.",
          allyContent: "DZ 10 greater than 5000 spp.",
        },
      },
    },

    content:
      "Imagine that you are sitting on the sidewalk at school. You look up and see a field of grass scattered with a few trees. You think to yourself, “How many other organisms live in that field?” Without knowing it, you're wondering about the <strong>biodiversity</strong> within your area or <strong>ecosystem</strong>.<br/><br/> Biodiversity describes the amount of plant and animal life in an area. The higher the biodiversity, the more <strong>sustainability</strong>, or longevity, an ecosystem has. Let’s explore the biodiversity found within different ecosystems around the world. Click on each label to find out more.",
  },
  locationA: {
    imgSrc: questionAImage,
    imgLabel: "Bacteria",
    imageAlt:
      "Temperate forest biome with a lot of deciduous trees, flowers, bushes & grasses; many animals including deer, birds, rabbits, squirrels, & a cougar",
    questionHeader:
      "Welcome to the temperate forest! The temperate forest is home to many different organisms, from the large cougar to the smallest bacteria. As the organisms consume each other, <strong>energy</strong> and <strong>nutrients</strong> move from one to the next. The more plants and animals that live in the forest, the healthier it becomes. Based on the information and the image, would a temperate forest have a high or low biodiversity?",
    correctAnswer: "High biodiversity",
  },
  locationB: {
    imgSrc: questionBImage,
    imgLabel: "Bacteria",
    imageAlt:
      "Tundra biome with a lot of snow and ice, a few low-level plants, some bacteria, 2 arctic hares, an arctic fox, and a musk ox",
    questionHeader:
      "Brrr, it’s cold in the tundra! The organisms that live in the tundra have adapted over thousands of years to withstand the extreme temperatures. Due to the permafrost, or permanently frozen soil, few producers are able to grow in this area. Animals, like the musk ox and arctic hare, rely on the brutal winds to expose the few plants that are able to thrive in this area. Based on the information and the image, would a tundra have a high or low biodiversity?",
    correctAnswer: "Low biodiversity",
  },
  locationC: {
    imgSrc: questionCImage,
    imageAlt:
      "Taiga biome with some snow on the ground, many tall evergreen trees, a few bushes, patches of grass, bacteria, a tiger, a beaver, a moose & a marten",
    imgLabel: "Bacteria",
    questionHeader:
      "Look at all of the coniferous trees in the taiga! Coniferous trees are trees that do not lose their leaves. As the temperatures change throughout the seasons, so do the number of organisms in this ecosystem. Several organisms migrate to this area during the spring and summer to mate and follow food sources. The changes in organisms throughout the seasons allow for <strong>matter, energy,</strong> and <strong>nutrients</strong> to be cycled back into the ecosystem. Based on the information and the image, would a taiga have a high or low biodiversity?",
    correctAnswer: "High biodiversity",
  },

  locationD: {
    imgSrc: questionDImage,
    imageAlt:
      "Desert biome with a lot of sand and sand dunes, very few low-level plants, a camel, a scorpion, and a fennec fox",
    imgLabel: "Bacteria",
    questionHeader:
      "Oh man, it’s so hot in this desert! Extreme high and low temperatures, harsh winds, and little precipitation are all characteristics of this desert. Many animals have become nocturnal; this allows them to hunt at night without overheating. The plants that are able to survive in this area have adapted extremely deep roots in order to reach the precious water. Based on the information and the image, would a desert have a high or low biodiversity? ",
    correctAnswer: "Low biodiversity",
  },
  locationE: {
    imgSrc: questionEImage,
    imgLabel: "Bacteria",
    imageAlt:
      "Grassland biome covered in grass with a few trees, a waterhole in the center, bacteria & animals including vultures, an elephant, a rhino & a zebra",
    questionHeader:
      "The waterhole in this grassland is booming with organisms right now! With warm temperatures year-round and a large amount of rain during the summer, it’s no wonder that so many organisms are able to survive in this ecosystem. Multiple food chains can be identified in this image, but they all eventually end with the decomposers. Bacteria break down the dead plant and animal matter, returning the energy and nutrients to the soil, where the producers will use it. Based on the information and the image, would a grassland have a high or low biodiversity? ",
    correctAnswer: "High biodiversity",
  },
  locationF: {
    imgSrc: questionFImage,
    imgLabel: "Bacteria",
    imageAlt:
      "Tropical rain forest biome with a lot of trees, vines, mushrooms & plants; Many animals including a monkey, tropical birds, frogs, snakes, & a jaguar",
    introContent:
      "Look at all of the plants and animals in the rain forest! There are multiple species of plants and animals that are found only in the rain forest. Biodiversity is extremely important, as all organisms are interconnected through the flow of energy. What do you think would happen to the number of animals in the rain forest if the number of plants was reduced?",
    questionHeader:
      "You’re right! The number of animals would likely be lower, which in turn would cause lower biodiversity. An ideal ecosystem would have multiple food choices for each animal. This would reduce the amount of competition and ensure the survival of the species. Based on the information and the image, would a tropical rain forest have a high or low biodiversity?",
    questionLabel:
      "You’re right! The number of animals would likely be lower, which in turn would cause lower biodiversity. An ideal ecosystem would have multiple food choices for each animal. This would reduce the amount of competition and ensure the survival of the species. Based on the information and the image, would a tropical rain forest have a high or low biodiversity?",
    correctAnswer: "High biodiversity",
  },
  questions: [
    {
      id: "question1",
      question:
        "The _______________ is the gaseous layer that surrounds Earth and is held in place by gravity. It contains oxygen, which is a necessary gas for life.",
      questionLabel:
        "The blank is the gaseous layer that surrounds Earth and is held in place by gravity. It contains oxygen which is a necessary gas for life.",
      answer: "atmosphere_rb",
    },
    {
      id: "question2",
      question:
        "The atmosphere contains _______________, a gas that protects organisms on Earth’s surface from dangerous ultraviolet radiation emitted by the Sun.",
      questionLabel:
        "The atmosphere contains blank a gas that protects organisms on Earth’s surface from dangerous ultraviolet radiation emitted from the Sun.",
      answer: "ozone_rb",
    },
    {
      id: "question3",
      question:
        "Earth’s atmosphere contains nitrogen, oxygen, argon, and trace amounts of other gases. This combination of gases describes the  _________________, or makeup, of the atmosphere.",
      questionLabel:
        "Earth’s atmosphere contains nitrogen, oxygen, argon, and trace amounts of other gases. This combination of gases describes the blank or makeup, of the atmosphere.",
      answer: "composition_rb",
    },
    {
      id: "question4",
      question:
        "Earth is approximately 150 million kilometers from the Sun. This distance affects Earth’s temperature and the state of water. The _________________ to the Sun is a key characteristic in determining if a planet is habitable.",
      questionLabel:
        "Earth is approximately 150 million kilometers from the Sun. This distance affects Earth’s temperature and the state of water. The blank to the Sun is a key characteristic in determining if a planet is habitable.",
      answer: "proximity_rb",
    },
  ],

  assessmentRadioButtons: [
    {
      id: "composition_rb",
      text: "composition",
    },
    {
      id: "ozone_rb",
      text: "ozone",
    },
    {
      id: "proximity_rb",
      text: "proximity",
    },
    {
      id: "atmosphere_rb",
      text: "atmosphere ",
    },
  ],

  radioButtons: [
    {
      id: "High biodiversity",
      text: "High biodiversity",
      label: "High biodiversity",
    },
    {
      id: "Low biodiversity",
      text: "Low biodiversity",
      label: "Low biodiversity",
    },
  ],

  questionText: {
    text1: "Question:",
    text2: "of",
    sentence: "Select the term that best completes the sentence.",
  },

  feedbacks: {
    right: commonData.correctToastMessage,
    wrong: commonData.incorrectToastMessage,
    exception: "This is the correct answer.",
  },
  transitionPopup: {
    ...commonData.transitionPopup,
    content:
      "Now that you have explored the characteristics that make a planet habitable, it’s time to show what you know.",
  },
  completionPopup: {
    ...commonData.completionPopup,
    content: "You have successfully completed the simulation.",
  },
  resetPopupData: commonData.resetPopupText,
  temp: "ignore me",

  imagesArr: [
    launchImage,
    questionAImage,
    questionBImage,
    questionCImage,
    questionDImage,
    questionEImage,
    questionFImage,
  ],
};

export default data;
