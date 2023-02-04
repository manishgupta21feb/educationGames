import commonData from "../../app/data/data.en";
import globalConfig from "../../app/data";

import image1 from "../assets/images/launch.png";
import image2 from "../assets/images/soil1.png";
import image3 from "../assets/images/soil2.png";
import image4 from "../assets/images/soil3.png";
import image5 from "../assets/images/slimy.png";
import image6 from "../assets/images/flat_shape.png";
import image7 from "../assets/images/gritty.png";
import image8 from "../assets/images/pointy_shape.png";
import image9 from "../assets/images/porus.png";
import image10 from "../assets/images/round_shape.png";

const data = {
  simHeading:
    "Students will use a magnifying glass to examine the particle size, particle shape, texture, and color of topsoil, clay soil, and sandy soil. They will then identify whether soil is topsoil, clay, or sand by their properties.",
  introContent:
    "Welcome to the science lab! STEMscopes scientists found three different types of soil on STEMscopes Farm. Today, you will help the scientists identify each soil type by exploring the <strong>properties</strong> of the soil samples. You will look at the <strong>particle size</strong>, <strong>particle shape</strong>, <strong>soil texture</strong>, and <strong>soil color</strong> of each sample.",
  hint: [
    "Select a soil type to see its properties.",
    "Read the soil properties in each row. Then, move the soil type card to the row that matches the properties.",
  ],
  soilTypes: [
    { name: "Topsoil", loc: "soilExpend" },
    { name: "Clay soil", loc: "soilExpend" },
    { name: "Sandy soil", loc: "soilExpend" },
  ],
  launchPageData: {
    imgSrc: image1,
    alt: "sample alt",
    heading:
      "Click on each soil sample to see the magnified view and examine its properties.",
  },
  Soils: [
    {
      imgSrc: image2,
      alt: "sample alt",
      content:
        "<strong>Topsoil</strong> is made from other soils. It has a lot of nutrients in it. It also retains water but not too much water. Plants love topsoil!",
      instruction:
        "Click the Continue button to see what properties topsoil has.",
    },
    {
      imgSrc: image3,
      alt: "sample alt",
      content:
        "<strong>Clay soil</strong> sticks together when it is wet. It can be molded into shapes! Clay soil retains too much water. It is not good for growing plants.",
      instruction:
        "Click the Continue button to see what properties clay soil has.",
    },
    {
      imgSrc: image4,
      alt: "sample alt",
      content:
        "<strong>Sandy soil</strong> doesn’t have very many nutrients in it. Water drains right through sand. Not many plants can grow in sandy soil.",
      instruction:
        "Click the Continue button to see what properties sandy soil has.",
    },
  ],
  topSoil: [
    { btnName: "Particle size", ariaLabel: "Particle size card" },
    { btnName: "Particle shape", ariaLabel: "Particle shape card" },
    { btnName: "Texture", ariaLabel: "Texture size card" },
    { btnName: "Color", ariaLabel: "Color size card" },
  ],
  topSoilHeading: [
    "Click on each card to see the properties of topsoil.",
    "Click on each card to see the properties of clay soil.",
    "Click on each card to see the properties of sandy soil.",
  ],
  topSoilDetails: [
    [
      [
        {
          checkData: {
            id: "Size_a",
            disabled: true,
            text: "Large",
          },
          className: "bigCircle",
        },
        {
          checkData: {
            id: "Size_b",
            disabled: true,
            text: "Medium",
          },
          className: "midCircle",
        },
        {
          checkData: {
            id: "Size_c",
            disabled: true,
            text: "Small",
          },
          className: "smallCircle",
        },
      ],
      [
        {
          checkData: {
            id: "Shape_a",
            disabled: true,
            text: "Round",
          },
          imageSrc: image10,
          imgAlt: "round",
        },
        {
          checkData: {
            id: "Shape_b",
            disabled: true,
            text: "Flaky",
          },
          imageSrc: image6,
          imgAlt: "flat",
        },
        {
          checkData: {
            id: "Shape_c",
            disabled: true,
            text: "Pointy",
          },
          imageSrc: image8,
          imgAlt: "pointy",
        },
      ],
      [
        {
          checkData: {
            id: "Texture_a",
            disabled: false,
            text: "Sticky",
          },
          imageSrc: image5,
          imgAlt: "Sticky",
        },
        {
          checkData: {
            id: "Texture_b",
            disabled: true,
            text: "Spongy",
          },
          imageSrc: image9,
          imgAlt: "Spongy",
        },
        {
          checkData: {
            id: "Texture_c",
            disabled: false,
            text: "Gritty",
          },
          imageSrc: image7,
          imgAlt: "Gritty",
        },
      ],
      [
        {
          checkData: {
            id: "Color_a",
            disabled: true,
            text: "Dark brown",
          },
          className: "color1Box",
        },
        {
          checkData: {
            id: "Color_b",
            disabled: false,
            text: "Light brown",
          },
          className: "color2Box",
        },
        {
          checkData: {
            id: "Color_c",
            disabled: false,
            text: "Red or yellow",
          },
          className: "color3Box",
        },
      ],
    ],
    [
      [
        {
          checkData: {
            id: "Size_a",
            disabled: false,
            text: "Large",
          },
          className: "bigCircle",
        },
        {
          checkData: {
            id: "Size_b",
            disabled: false,
            text: "Medium",
          },
          className: "midCircle",
        },
        {
          checkData: {
            id: "Size_c",
            disabled: true,
            text: "Small",
          },
          className: "smallCircle",
        },
      ],
      [
        {
          checkData: {
            id: "Shape_a",
            disabled: false,
            text: "Round",
          },
          imageSrc: image10,
          imgAlt: "Round",
        },
        {
          checkData: {
            id: "Shape_b",
            disabled: true,
            text: "Flaky",
          },
          imageSrc: image6,
          imgAlt: "Flaky",
        },
        {
          checkData: {
            id: "Shape_c",
            disabled: false,
            text: "Pointy",
          },
          imageSrc: image8,
          imgAlt: "Pointy",
        },
      ],
      [
        {
          checkData: {
            id: "Texture_a",
            disabled: true,
            text: "Sticky",
          },
          imageSrc: image5,
          imgAlt: "Sticky",
        },
        {
          checkData: {
            id: "Texture_b",
            disabled: false,
            text: "Spongy",
          },
          imageSrc: image9,
          imgAlt: "Spongy",
        },
        {
          checkData: {
            id: "Texture_c",
            disabled: false,
            text: "Gritty",
          },
          imageSrc: image7,
          imgAlt: "Gritty",
        },
      ],
      [
        {
          checkData: {
            id: "Color_a",
            disabled: false,
            text: "Dark brown",
          },
          className: "color1Box",
        },
        {
          checkData: {
            id: "Color_b",
            disabled: false,
            text: "Light brown",
          },
          className: "color2Box",
        },
        {
          checkData: {
            id: "Color_c",
            disabled: true,
            text: "Red or yellow",
          },
          className: "color3Box",
        },
      ],
    ],
    [
      [
        {
          checkData: {
            id: "Size_a",
            disabled: true,
            text: "Large",
          },
          className: "bigCircle",
        },
        {
          checkData: {
            id: "Size_b",
            disabled: false,
            text: "Medium",
          },
          className: "midCircle",
        },
        {
          checkData: {
            id: "Size_c",
            disabled: false,
            text: "Small",
          },
          className: "smallCircle",
        },
      ],
      [
        {
          checkData: {
            id: "Shape_a",
            disabled: false,
            text: "Round",
          },
          imageSrc: image10,
          imgAlt: "Round",
        },
        {
          checkData: {
            id: "Shape_b",
            disabled: false,
            text: "Flaky",
          },
          imageSrc: image6,
          imgAlt: "Flaky",
        },
        {
          checkData: {
            id: "Shape_c",
            disabled: true,
            text: "Pointy",
          },
          imageSrc: image8,
          imgAlt: "Pointy",
        },
      ],
      [
        {
          checkData: {
            id: "Texture_a",
            disabled: false,
            text: "Sticky",
          },
          imageSrc: image5,
          imgAlt: "Sticky",
        },
        {
          checkData: {
            id: "Texture_b",
            disabled: false,
            text: "Spongy",
          },
          imageSrc: image9,
          imgAlt: "Spongy",
        },
        {
          checkData: {
            id: "Texture_c",
            disabled: true,
            text: "Gritty",
          },
          imageSrc: image7,
          imgAlt: "Gritty",
        },
      ],
      [
        {
          checkData: {
            id: "Color_a",
            disabled: false,
            text: "Dark brown",
          },
          className: "color1Box",
        },
        {
          checkData: {
            id: "Color_b",
            disabled: true,
            text: "Light brown",
          },
          className: "color2Box",
        },
        {
          checkData: {
            id: "Color_c",
            disabled: false,
            text: "Red or yellow",
          },
          className: "color3Box",
        },
      ],
    ],
  ],

  dndData: {
    header:
      "Drag and drop the soil type cards to match the soil types with their properties.",
    tableData: {
      caption: "Soil Properties",
      data: {
        th: [
          "Soil Type",
          "Particle Size",
          "Particle Shape",
          "Texture",
          "Color",
        ],
        tr: [
          ["Sandy soil", "Large", "Pointy", "Gritty", "Light brown"],
          ["Topsoil", "Small", "Flaky", "Sticky", "Red or yellow"],
          ["Clay Soil", "All sizes", "All shapes", "Spongy", "Dark brown"],
        ],
      },
    },
  },
  buttonLabels: { ...commonData.buttonLabels },

  dragObjects: [
    {
      content: "Sandy soil",
      label: "Sandy Soil draggable",
      id: "soil 1",
      isDropped: false,
    },
    {
      content: "Clay Soil",
      label: "Clay Soil draggable",
      id: "soil 2",
      isDropped: false,
    },
    {
      content: "Topsoil",
      label: "Top Soil draggable",
      id: "soil 3",
      isDropped: false,
    },
  ],
  dropObjects: [
    {
      id: "one",
      value: "One",
      label:
        "Soil Type with large, pointy, gritty and light brown properties dropzone",
      content: "Sandy soil",
    },
    {
      id: "two",
      value: "Two",
      label:
        "Soil Type with small, flaky, sticky and red of yellow properties dropzone",
      content: "Clay Soil",
    },
    {
      id: "three",
      value: "Three",
      label:
        "Soil Type with all sizes, all shapes, spongy and dark brown properties dropzone",
      content: "Topsoil",
    },
  ],
  cardFlipAnnounce: [
    "Particle Size button selected. Card is flipped",
    "Particle Shape button selected. Card is flipped",
    "Texture button selected. Card is flipped",
    "Color button selected. Card is flipped",
  ], // This aria live wheen user click card and reveal.
  emptyShell: [
    "Soil Type with large, pointy, gritty and light brown properties dropzone",
    "Soil Type with small, flaky, sticky and red of yellow properties dropzone",
    "Soil Type with all sizes, all shapes, spongy and dark brown properties dropzone",
  ],
  droppedOn: "dropped on",
  correctToastMsg: globalConfig.correctToastMessage,
  incorrectToastMsg: globalConfig.incorrectToastMessage,
  resetPopupText: globalConfig.resetPopupText,
  completionPopup: {
    ...globalConfig.completionPopup,
    content:
      "You helped the STEMscopes scientists identify the soil types by their properties. Well done!",
  },
  transitionPopup: {
    ...globalConfig.transitionPopup,
    content:
      "Now that you have examined different types of soil, show what you know!",
  },

  imagesArr: [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ],
};

export default data;
