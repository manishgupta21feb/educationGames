import commonData from "../../app/data";
import egg_raw_broken from "../assets/images/egg_raw_broken.png";
import Egg_liquid_on_stove from "../assets/images/Egg_liquid_on_stove-01.png";
import Egg_cooked_on_stove from "../assets/images/Egg_cooked_on_stove-01.png";
import freezer_empty from "../assets/images/freezer_empty.png";
import frozen_cooked_egg_freezer from "../assets/images/frozen_cooked_egg_freezer.png";
import egg_raw_cooked_frozen from "../assets/images/egg_raw_cooked_frozen.png";
import water_frozen from "../assets/images/water_frozen.png";
import water_bowl_on_stove from "../assets/images/water_bowl_on_stove.png";
import ice_bowl_on_stove from "../assets/images/ice_bowl_on_stove.png";
import frozen_ice_bowl_freezer from "../assets/images/frozen_ice_bowl_freezer.png";
import ice_frozen_melted from "../assets/images/ice_frozen_melted.png";

const mcqQuestion = `Were the changes to this -1- <strong>reversible</strong> or <strong>not reversible</strong>?`;

const data = {
  mainscreenOptions: [
    {
      id: "egg",
      text: "Egg",
    },
    {
      id: "ice",
      text: "Ice",
    },
  ],
  subLevelOptions: {
    egg: [
      {
        id: "option1",
        imageAlt: ``,
        images: [egg_raw_broken],
        description: `Kitchen with an egg in a bowl.`, // no translation is required
        ostText: [
          `Raw egg is liquid. Predict what will happen to this egg when heat is added to it. 
                  When you have made a prediction, click the Next button.`,
        ],
        classes: "egg-option1",
      },
      {
        id: "option2",
        imageAlt: ``,
        images: [Egg_liquid_on_stove],
        description: `Raw egg in a pan on the stove`, // no translation is required
        ostText: [
          `Let's add heat to the liquid egg by putting it on a hot stove. Click the Next button to see what happens!`,
        ],
        classes: "egg-option2",
      },
      {
        id: "option3",
        imageAlt: ``,
        images: [Egg_cooked_on_stove],
        description: `Cooked egg in a pan on a stove. Underneath the pan should be 
                      red to show heat was added. Steam should be rising off the egg.`, // no translation is required
        ostText: [
          `The egg changed from a liquid to a solid. Adding heat cooked the egg!`,
          `What do you predict will happen to this egg when heat is taken away 
            from it? When you have made a prediction, click the Next button.`,
        ],
        classes: "egg-option3",
      },
      {
        id: "option4",
        imageAlt: ``,
        images: [freezer_empty],
        description: `Freezer with an open door`, // no translation is required
        ostText: [
          `Let's remove heat from the solid egg by putting it in the freezer. Click the Next button to see what happens!`,
        ],
        classes: "egg-option4",
      },
      {
        id: "option5",
        imageAlt: ``,
        images: [frozen_cooked_egg_freezer],
        description: `The cooked egg in a pan in the freezer. There should 
                      be ice around the egg to show heat was removed.`, // no translation is required
        ostText: [
          `The solid egg froze, but it didn’t change back into a liquid!`,
          `Click the Next button to see the changes to an egg by heating and cooling.`,
        ],
        classes: "egg-option5",
      },
      {
        id: "option6",
        imageAlt: ``,
        images: [egg_raw_cooked_frozen],
        mcqQuestion: true,
        ostText: [mcqQuestion],
        answer: "not_reversible",
        classes: "egg-option6",
      },
    ],
    ice: [
      {
        id: "option1",
        imageAlt: ``,
        images: [water_frozen],
        description: `Kitchen scene with a bowl of ice cubes on the table.`, // no translation is required
        ostText: [
          `Ice is a solid. Predict what will happen to this ice when heat is 
          added to it. When you have made a prediction, click the Next button.`,
        ],
        classes: "ice-option1",
      },
      {
        id: "option2",
        imageAlt: ``,
        images: [ice_bowl_on_stove],
        description: `ice in a pot on the stove`, // no translation is required
        ostText: [
          `Let's add heat to the solid ice by putting it on a hot stove. Click the Next button to see what happens!`,
        ],
        classes: "ice-option2",
      },
      {
        id: "option3",
        imageAlt: ``,
        images: [water_bowl_on_stove],
        description: `Water in a pot on a stove. Underneath the pot should be red to show that heat was added.`, // no translation is required
        ostText: [
          `The ice changed from a solid to a liquid. Adding heat melted the ice and changed it to water!`,
          `What do you predict will happen to the water when heat is taken away from it? When you have made 
          a prediction, click the Next button.`,
        ],
        classes: "ice-option3",
      },
      {
        id: "option4",
        imageAlt: ``,
        images: [freezer_empty],
        description: `Freezer with an open door`, // no translation is required
        ostText: [
          `Let's remove heat from the liquid water by putting it in the freezer. Click the Next button to see what happens!`,
        ],
        classes: "ice-option4",
      },
      {
        id: "option5",
        imageAlt: ``,
        images: [frozen_ice_bowl_freezer],
        description: `Frozen water in a pot in the freezer. There should be ice around the pot to show heat was removed.`, // no translation is required
        ostText: [
          `The liquid water froze and changed back into solid ice!`,
          `Click the Next button to see the changes to ice by heating and cooling.`,
        ],
        classes: "ice-option5",
      },
      {
        id: "option6",
        imageAlt: ``,
        images: [ice_frozen_melted],
        mcqQuestion: true,
        description: `Kitchen background with ice in a bowl, water in a pot with an 'Added heat' label, 
                      and the ice in the pot with ice around it with a 'Removed heat' label`, // no translation is required
        ostText: [mcqQuestion],
        classes: "ice-option6",
      },
    ],
  },
  egg: "egg",
  ice: "ice",
  mcqOptions: [
    { id: "reversible", text: "Reversible" },
    { id: "not_reversible", text: "Not reversible" },
  ],
  ...commonData.buttonLabels,
  initialOST: [`Choose the material you want to explore!`],
  transitionPopup: {
    ...commonData.transitionPopup,
    content: `Once the egg was cooked, whether we added or removed heat, the cooked egg did not go back to being 
              a raw egg. That makes the changes to an egg once it is heated not reversible! Now, let's see what 
              happens to ice when we add and remove heat!`,
  },
  completionPopup: {
    ...commonData.completionPopup,
    content: `The ice changed to water when heat was added but changed back into ice when heat was removed. 
                That makes changes to ice by heating and cooling reversible! Heating and cooling materials 
                changes them, and those changes can either be reversible or not reversible.`,
  },
  activityDescription: `In this simulation, students will predict and observe what 
                        happens to ice and an egg when heat is added and removed.`,
  introductionPopupText: `Materials change when heat is added to them or removed from them. Sometimes the change 
                          is <strong>reversible</strong>, which means it goes back to its original state, but other changes are 
                          <strong>not reversible</strong>. Let's explore what happens to an egg and ice when heat is added and removed!`,
  infoPopupText: `Click the Next button to see how materials change when they are heated and cooled.`,
  mainImageAlt: ``,
};

export default data;
