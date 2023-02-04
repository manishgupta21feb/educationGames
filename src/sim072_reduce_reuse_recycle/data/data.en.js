import globalConfig from "../../app/data/data.en";

import small_dustbin from "../assets/images/info_images/small/small_dustbin.png";
import small_pack from "../assets/images/info_images/small/small_pack.png";
import small_tiffin from "../assets/images/info_images/small/small_tiffin.png";
import small_plastic from "../assets/images/info_images/small/small_plastic.png";
import small_cloth from "../assets/images/info_images/small/small_cloth.png";
import small_flask from "../assets/images/info_images/small/small_flask.png";
import small_can from "../assets/images/info_images/small/small_can.png";
import small_paper_pack from "../assets/images/info_images/small/small_paper_pack.png";
import small_bottles from "../assets/images/info_images/small/small_bottles.png";
import small_jar from "../assets/images/info_images/small/small_jar.png";
import small_paper_plate from "../assets/images/info_images/small/small_paper_plate.png";
import small_clothes from "../assets/images/info_images/small/small_clothes.png";
import small_cycle from "../assets/images/info_images/small/small_cycle.png";
import small_shopping_bag from "../assets/images/info_images/small/small_shopping_bag.png";

import info_can from "../assets/images/info_images/can.png";
import info_bottles from "../assets/images/info_images/bottles.png";
import info_plastic from "../assets/images/info_images/plastic.png";
import info_paper_plate from "../assets/images/info_images/paper_plate.png";
import info_flask from "../assets/images/info_images/flask.png";
import info_jar from "../assets/images/info_images/jar.png";
import info_tiffin from "../assets/images/info_images/tiffin.png";
import info_cloth from "../assets/images/info_images/cloth.png";
import info_clothes from "../assets/images/info_images/clothes.png";
import info_cycle from "../assets/images/info_images/cycle.png";
import info_paper_pack from "../assets/images/info_images/paper_pack.png";
import info_shopping_bag from "../assets/images/info_images/shopping_bag.png";

const completionScreen = {
  ...globalConfig.completionPopup,
  content: "You have completed the simulation.",
};

const data = {
  buttonLabels: { ...globalConfig.buttonLabels },
  resetConfirmationText: globalConfig.resetLiveText,
  resetMsgContent: globalConfig.resetPopupText,
  resetLiveText: globalConfig.resetLiveText,
  rightMsg: globalConfig.correctToastMessage,
  wrongMsg: globalConfig.incorrectToastMessage,
  about:
    "School lunchroom with groups of students sitting at tables surrounded by different items.",
  h1InfoTextA11Y:
    "In this simulation, the learner will explore items you might find in a school lunchroom and determine if these items and more should be reduced in use, recycled, or reused multiple times.",
  infoLabel: "Info",
  resetLabel: "Reset",
  instructionBoxContent:
    "We can take steps to reduce, reuse, and recycle items in our everyday lives. Doing one or more of these will lead to less trash in landfills and reduce processing of new items. Constantly creating new items makes more waste and uses more and more resources.",
  InfoBoxContent: "Click on as many items as you think apply.",
  transitionPopup: {
    ...globalConfig.transitionPopup,
    content:
      "Now, you will identify which items can be reused or recycled and which activities can help reduce the amount of trash.",
  },
  transitionPopupQuestionOne: {
    ...globalConfig.transitionPopup,
    content: "You have successfully identified items that can be recycled.",
  },
  transitionPopupQuestionTwo: {
    ...globalConfig.transitionPopup,
    content: "You have successfully identified items that can be reduced.",
  },

  completionDialog: {
    reset: { ...completionScreen },
  },
  altVisited: "Visited",
  hotspotHeading:
    'Click on the hotspots to learn more about each item. Once you have read about each item, click "Next" to choose if you should reduce, reuse, or recycle it.',
  messages: [
    {
      type: "reset",
      resetButtonText: "Yes",
      buttonContinueText: "No",
      header: "Reset Simulation",
      content: "Are you sure you want to reset?",
    },
  ],
  hotspots: [
    {
      id: "foodScraps",
      text: "Food Scraps",
      type: "",
      heading: " <strong>Food Scraps</strong>",
      visited: false,
      details: {
        img: small_dustbin,
        title: "Food scraps",
        imageClass: "hotspot-pop-up-foodScraps",
        imageAlt: "An orange can with food scraps inside",
        heading:
          "Your school might have a compost area where you can throw away certain food scraps. Compost allows food to be used again in a new way as it decomposes.",
      },
    },
    {
      id: "fruiteDrinkBox",
      text: "Fruit Drink Box",
      type: "",
      heading: " <strong>Fruit Drink Box</strong>",
      visited: false,
      details: {
        img: small_pack,
        title: "Fruit drink box",
        imageClass: "hotspot-pop-up-fruiteDrinkBox",
        imageAlt:
          "A white fruit drink box with orange on the bottom and an orange splash in the center",
        heading:
          "Like water, juices can be put into reusable bottles. But if you do drink from a disposable juice box or pouch, sometimes those boxes and pouches are made from materials that can be used again to make more juice boxes and even to make milk containers.",
      },
    },
    {
      id: "reusableLunchContainer",
      text: "Reusable Lunch Container",
      type: "",
      heading: " <strong>Reusable Lunch Container</strong>",
      visited: false,
      details: {
        img: small_tiffin,
        title: "Reusable lunch container",
        imageClass: "hotspot-pop-up-reusableLunchContainer",
        imageAlt:
          "A blue reusable lunch container that is partially open with lunch items inside",
        heading:
          "A lunch container you can use many times can help keep your lunch organized and prevent leaking. Using one will reduce the amount of plastic sandwich bags thrown into the trash. You can use a container like this for several years! ",
      },
    },
    {
      id: "flatwareFruitPudding",
      text: "Items in disposable packaging",
      type: "",
      heading: " <strong>Items in disposable packaging</strong>",
      visited: false,
      details: {
        img: small_plastic,
        title: "Items in disposable packaging",
        imageClass: "hotspot-pop-up-flatwareFruitPudding",
        imageAlt: "Items in disposable packaging",
        heading:
          "Excess packaging can create waste in landfills. The average person throws away 4.5 pounds of trash each day, and anything that comes in extra packaging contributes to this amount. ",
      },
    },
    {
      id: "clothNapkin",
      text: "Cloth Napkin",
      type: "",
      heading: " <strong>Cloth Napkin</strong>",
      visited: false,
      details: {
        img: small_cloth,
        title: "Cloth napkin",
        imageClass: "hotspot-pop-up-clothNapkin",
        imageAlt: "A white cloth napkin",
        heading:
          "A cloth napkin can be put back into your lunchbox and washed at home so that you can use it over and over again. Using things more than once reduces waste.",
      },
    },
    {
      id: "refillableWaterBottle",
      text: "Refillable Water Bottle",
      type: "",
      heading: " <strong>Refillable Water Bottle</strong>",
      visited: false,
      details: {
        img: small_flask,
        title: "Refillable water bottle",
        imageClass: "hotspot-pop-up-refillableWaterBottle",
        imageAlt: "A stainless steel refillable water bottle",
        heading:
          "A refillable water bottle can be used for years if you take care of it and keep it clean. As a bonus, it can keep your water cold all day! Using a reusable water bottle helps the environment in all the ways a disposable one hurts it.  It takes less energy to create, it does not contribute to landfills and ocean trash, and it does not affect animals.",
      },
    },
    {
      id: "sodaCan",
      text: "Soda Can",
      type: "",
      heading: " <strong>Soda Can</strong>",
      visited: false,
      details: {
        img: small_can,
        title: "Soda can",
        imageClass: "hotspot-pop-up-sodaCan",
        imageAlt: "A red and white soda can",
        heading:
          "Aluminum cans can cause extra waste if they are thrown in the trash, but there is a better way to dispose of them! Aluminum is a metal that can be turned into something new, such as car parts, rebar in construction, or even metal cans.",
      },
    },
    {
      id: "paperLunchBag",
      text: "Paper Lunch Bag",
      type: "",
      heading: " <strong>Paper Lunch Bag</strong>",
      visited: false,
      details: {
        img: small_paper_pack,
        title: "Paper lunch bag",
        imageClass: "hotspot-pop-up-paperLunchBag",
        imageAlt:
          "A brown paper lunch bag that is folded at the top and has lunch inside",
        heading:
          "Throwing away paper lunch sacks means less to carry in your backpack home, but more trash in a landfill. Most of the time, paper sacks have food on them or get wet during lunch, so recycling them might not be an option. Did you realize that to recycle anything it should be rinsed off before putting it in the recycling bin? Be sure to put your bag in the right waste bin!",
      },
    },
    {
      id: "plasticWaterBottle",
      text: "Plastic Water Bottle",
      type: "",
      heading: " <strong>Plastic Water Bottle</strong>",
      visited: false,
      details: {
        img: small_bottles,
        title: "Plastic water bottle",
        imageClass: "hotspot-pop-up-plasticWaterBottle",
        imageAlt: "A clear plastic water bottle with a blue top",
        heading:
          "Plastics can cause many problems. They take a lot of energy to create, and their production releases extra carbon dioxide into the atmosphere. Also, a lot of discarded plastic ends up in the ocean, and this discarded plastic has contributed to giant ocean garbage patches. Animals on land and in the ocean choke on plastic. Drinking water is very important, but drinking it out of a plastic water bottle is very bad for the environment.",
      },
    },
  ],
  questionsData: [
    {
      id: 1,
      question:
        "Which items should be recycled? Clicking on the items will bring them into the Recycle section.",
      options: [
        {
          id: "soda-can",
          active: true,
          img: small_can,
          imageClass: "option-soda-can",
          imageAlt: "",
          heading: "Soda can",
        },
        {
          id: "cloth-napkin",
          active: true,
          img: small_cloth,
          imageClass: "option-cloth-napkin",
          imageAlt: "",
          heading: "Cloth napkin",
        },
        {
          id: "plastic-water-bottle",
          active: true,
          img: small_bottles,
          imageClass: "option-plastic-water-bottle",
          imageAlt: "",
          heading: "Plastic water bottle",
        },
        {
          id: "disposable-packaging",
          active: true,
          img: small_plastic,
          imageClass: "option-disposable-packaging",
          imageAlt: "",
          heading: "Disposable packaging",
        },
        {
          id: "refillable-water-bottle",
          active: true,
          img: small_flask,
          imageClass: "option-refillable-water-bottle",
          imageAlt: "",
          heading: "Refillable water bottle",
        },
        {
          id: "glass-jar",
          active: true,
          img: small_jar,
          imageClass: "option-glass-jar",
          imageAlt: "",
          heading: "Glass jar",
        },
        {
          id: "lunch-box",
          active: true,
          img: small_tiffin,
          imageClass: "option-lunch-box",
          imageAlt: "",
          heading: "Lunch box",
        },
        {
          id: "paper-plate",
          active: true,
          img: small_paper_plate,
          imageClass: "option-paper-plate",
          imageAlt: "",
          heading: "Paper plate",
        },
      ],
      answers: [
        {
          id: "soda-can",
          show: false,
          img: info_can,
          imageClass: "answer-soda-can",
          imageAlt: "A red and white soda can",
        },
        {
          id: "plastic-water-bottle",
          show: false,
          img: info_bottles,
          imageClass: "answer-plastic-water-bottle",
          imageAlt: "A clear plastic water bottle with a blue top",
        },
        {
          id: "disposable-packaging",
          show: false,
          img: info_plastic,
          imageClass: "answer-disposable-packaging",
          imageAlt: "Items in disposable packaging",
        },
        {
          id: "paper-plate",
          show: false,
          img: info_paper_plate,
          imageClass: "answer-paper-plate",
          imageAlt: "Paper plate",
        },
      ],
      boxHeading: "Recycle",
    },
    {
      id: 2,
      question:
        "Which items can be reused to reduce human impact on the environment? Clicking on the items will bring them into the Reuse section.",
      options: [
        {
          id: "soda-can",
          active: true,
          img: small_can,
          imageClass: "option-soda-can",
          imageAlt: "",
          heading: "Soda can",
        },
        {
          id: "cloth-napkin",
          active: true,
          img: small_cloth,
          imageClass: "option-cloth-napkin",
          imageAlt: "",
          heading: "Cloth napkin",
        },
        {
          id: "plastic-water-bottle",
          active: true,
          img: small_bottles,
          imageClass: "option-plastic-water-bottle",
          imageAlt: "",
          heading: "Plastic water bottle",
        },
        {
          id: "disposable-packaging",
          active: true,
          img: small_plastic,
          imageClass: "option-disposable-packaging",
          imageAlt: "",
          heading: "Disposable packaging",
        },
        {
          id: "refillable-water-bottle",
          active: true,
          img: small_flask,
          imageClass: "option-refillable-water-bottle",
          imageAlt: "",
          heading: "Refillable water bottle",
        },
        {
          id: "glass-jar",
          active: true,
          img: small_jar,
          imageClass: "option-glass-jar",
          imageAlt: "",
          heading: "Glass jar",
        },
        {
          id: "lunch-box",
          active: true,
          img: small_tiffin,
          imageClass: "option-lunch-box",
          imageAlt: "",
          heading: "Lunch box",
        },
        {
          id: "paper-plate",
          active: true,
          img: small_paper_plate,
          imageClass: "option-paper-plate",
          imageAlt: "",
          heading: "Paper plate",
        },
      ],
      answers: [
        {
          id: "refillable-water-bottle",
          show: false,
          img: info_flask,
          imageClass: "answer-refillable-water-bottle",
          imageAlt: "A stainless steel refillable water bottle",
        },
        {
          id: "cloth-napkin",
          show: false,
          img: info_cloth,
          imageAlt: "A white cloth napkin",
          imageClass: "answer-cloth-napkin",
        },
        {
          id: "glass-jar",
          show: false,
          img: info_jar,
          imageClass: "answer-glass-jar",
          imageAlt: "Glass jar",
        },
        {
          id: "lunch-box",
          show: false,
          img: info_tiffin,
          imageClass: "answer-lunch-box",
          imageAlt:
            "A blue reusable lunch container that is partially open with lunch items inside",
        },
      ],
      boxHeading: "Reuse",
    },
    {
      id: 3,
      question:
        "Which activities show reducing your use of products? Clicking on the items will bring them into the Reduce section.",
      options: [
        {
          id: "buying-clothes",
          active: true,
          img: small_clothes,
          imageClass: "option-buying-clothes",
          imageAlt: "",
          heading: "Buying gently used clothing from resale shops",
        },
        {
          id: "walking-cycle",
          active: true,
          img: small_cycle,
          imageClass: "option-walking-cycle",
          imageAlt: "",
          heading: "Walking or riding your bike instead of driving a car",
        },
        {
          id: "buying-products",
          active: true,
          img: small_paper_pack,
          imageClass: "option-buying-products",
          imageAlt: "",
          heading: "Buying products with little to no plastic packaging",
        },
        {
          id: "shopping-bags",
          active: true,
          img: small_shopping_bag,
          imageClass: "option-shopping-bags",
          imageAlt: "",
          heading:
            "Using cloth shopping bags whenever you buy something from a store",
        },
      ],
      answers: [
        {
          id: "buying-clothes",
          show: false,
          img: info_clothes,
          imageClass: "answer-buying-clothes",
          imageAlt: "Buying gently used clothing from resale shops.",
        },
        {
          id: "walking-cycle",
          show: false,
          img: info_cycle,
          imageClass: "answer-walking-cycle",
          imageAlt: "Walking or riding your bike instead of driving a car.",
        },
        {
          id: "buying-products",
          show: false,
          img: info_paper_pack,
          imageClass: "answer-buying-products",
          imageAlt: "Buying products with little to no plastic packaging.",
        },
        {
          id: "shopping-bags",
          show: false,
          img: info_shopping_bag,
          imageClass: "answer-shopping-bags",
          imageAlt:
            "Using cloth shopping bags whenever you buy something from a store.",
        },
      ],
      boxHeading: "Reduce",
    },
  ],
};

export default data;
