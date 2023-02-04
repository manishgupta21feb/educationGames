import globalConfig from "../../app/data/data.en";
import carbonAndNitrogen from '../assets/images/carbon-and-nitrogen.png';
import carbonCycleInfo from '../assets/images/carbon-cycle-info.png';
import carbonCycle from '../assets/images/carbon-cycle.png';
import carbonDioxideExplore1 from '../assets/images/carbon-dioxide-explore-1.png';
import carbonDioxideExplore2 from '../assets/images/carbon-dioxide-explore-2.png';
import carbonDioxideExplore3 from '../assets/images/carbon-dioxide-explore-3.png';
import carbonDioxideInfo from '../assets/images/carbon-dioxide-info.png';
import carbonExplore1 from '../assets/images/carbon-explore-1.png';
import carbonExplore2 from '../assets/images/carbon-explore-2.png';
import carbonExplore3 from '../assets/images/carbon-explore-3.png';
import climatePrediction from '../assets/images/climate-prediction.png';
import fossilFuels from '../assets/images/fossil-fuels.png';
import nitrogenCycle from '../assets/images/nitrogen-cycle.png';
import nitrogenExplore1 from '../assets/images/nitrogen-explore-1.png';
import nitrogenExplore2 from '../assets/images/nitrogen-explore-2.png';
import nitrogenFixation from '../assets/images/nitrogen-fixation.png';
import nitrogenInfo from '../assets/images/nitrogen-info.png';
import nitrogenND from '../assets/images/nitrogen-ND.png';
import ocean from '../assets/images/ocean.png';
import photosynthesis from '../assets/images/photosynthesis.png';
import respiration from '../assets/images/respiration.png';

const data = {

  //----------------------------Main Screen Data----------------------------

  //Main Screen Data
  mainScreenData: {
    headings: ["Explore carbon and nitrogen cycles by clicking on each one.",],
    imgTexts: [
      {
        classes: 'carbon-cycle',
        altText: 'carbon cycle img',
        texts: [
          {
            text: "6",
            classes: 'text-1'
          },
          {
            text: "C",
            classes: 'text-2'
          },
          {
            text: "12.01",
            classes: 'text-3'
          },
        ],
        hotspotButton: {
          id: "carbon-info",
          text: "Carbon cycle",
        }
      },
      {
        classes: 'nitrogen-cycle',
        altText: 'nitrogen cycle img',
        texts: [
          {
            text: '7',
            classes: 'text-1'
          },
          {
            text: 'N',
            classes: 'text-2'
          },
          {
            text: '14.01',
            classes: 'text-3'
          }
        ],
        hotspotButton: {
          id: "nitrogen-info",
          text: "Nitrogen cycle",
        }
      },
    ],
  },

  //----------------------------Carbon Cycle Explore Data----------------------------

  //Carbon Explore Data
  carbonExploreData: {
    headings: ["Click on each of the two concepts to explore the carbon cycle in detail."],
    imgTexts: [
      {
        classes: 'carbon-explore-tab-1',
        altText: 'Photosynthesis and Respiration img',
        texts: [
          {
            text: 'Light </br>energy',
            classes: 'text-1 color-1'
          },
          {
            text: 'Carbon dioxide </br>Co<sub>2</sub>',
            classes: 'text-2 color-2'
          },
          {
            text: 'Water',
            classes: 'text-3 color-3'
          },
          {
            text: 'Oxygen </br>O<sub>2</sub>',
            classes: 'text-4 color-4'
          },
          {
            text: 'Sugar',
            classes: 'text-5 color-4'
          },
          {
            text: 'Minerals',
            classes: 'text-6 color-5'
          },
        ],
        hotspotButton: {
          id: "photosynthesis",
          text: "Photosynthesis and respiration",
        }
      },
      {
        classes: 'carbon-explore-tab-2',
        altText: 'Carbon Dioxide and Atmosphere img',
        hotspotButton: {
          id: "carbonDioxide-info",
          text: "Carbon dioxide and the atomosphere",
        }
      },
    ],
  },

  //----------------------------CarbonDioxide Explore Data----------------------------

  //Carbon Dioxide Explore Data
  CNDioxideExploreData: {
    headings: ['Click on each of the three options to explore changes in carbon dioxide levels.'],
    imgTexts: [
      {
        classes: 'carbon-dioxide-explore-tab-1',
        altText: 'Ocean Atmosphare Img',
        texts: [
          {
            text: "Biological and Physical Pumps </br> of Carbon Dioxide",
            classes: "text-1 big"
          },
          {
            text: "CO<sub>2</sub>",
            classes: "text-2 normal"
          },
          {
            text: "CO<sub>2</sub>",
            classes: "text-3 normal"
          },
          {
            text: "Particulate",
            classes: "text-4 small"
          },
          {
            text: "Anorganic",
            classes: "text-5 small"
          },
          {
            text: "Sedimentation",
            classes: "text-6 small"
          },
          {
            text: "Organic",
            classes: "text-7 small"
          },
          {
            text: "Dissolved",
            classes: "text-8 small"
          },
          {
            text: "Anorganic",
            classes: "text-9 small"
          },
          {
            text: "Cooling",
            classes: "text-10 small"
          },
          {
            text: "Upwelling",
            classes: "text-11 small"
          },
          {
            text: "Deepwater circulation",
            classes: "text-12 small"
          },
          {
            text: "Carbonate",
            classes: "text-13 small white"
          },
          {
            text: "Organic </br>carbon",
            classes: "text-14 small white"
          },
          {
            text: "Carbonate </br> CaCO<sub>2</sub>",
            classes: "text-15 small white"
          },
        ],
        hotspotButton: {
          id: "ocean",
          text: "Ocean-atmosphere exchange",
        }
      },
      {
        classes: 'carbon-dioxide-explore-tab-2',
        altText: 'Fossil Fuels Img',
        hotspotButton: {
          id: "fossil-fuels",
          text: "Fossil fuels",
        }
      },
      {
        classes: 'carbon-dioxide-explore-tab-3',
        altText: 'Climate Prediction Img',
        texts: [
          {
            text: "The Emissions Gap",
            classes: "text-1 big"
          },
          {
            text: "Fossil fuel emissions (gigatons/year)",
            classes: "text-2 normal"
          },
          {
            text: "18",
            classes: "text-3 normal"
          },
          {
            text: "16",
            classes: "text-4 normal"
          },
          {
            text: "14",
            classes: "text-5 normal"
          },
          {
            text: "12",
            classes: "text-6 normal"
          },
          {
            text: "10",
            classes: "text-7 normal"
          },
          {
            text: "8",
            classes: "text-8 normal"
          },
          {
            text: "6",
            classes: "text-9 normal"
          },
          {
            text: "4",
            classes: "text-10 normal"
          },
          {
            text: "2",
            classes: "text-11 normal"
          },
          {
            text: "0",
            classes: "text-12 normal"
          },
          {
            text: "1850",
            classes: "text-13 normal"
          },
          {
            text: "1900",
            classes: "text-14 normal"
          },
          {
            text: "1950",
            classes: "text-15 normal"
          },
          {
            text: "2000",
            classes: "text-16 normal"
          },
          {
            text: "2050",
            classes: "text-17 normal"
          },
          {
            text: "2100",
            classes: "text-18 normal"
          },
          {
            text: "Historic </br> emissions",
            classes: "text-19 small"
          },
          {
            text: "Where the </br>world is </br> heading",
            classes: "text-20 small"
          },
          {
            text: "Path to keep</br> global warming </br> to 2 degrees",
            classes: "text-21 small"
          },
          {
            text: "Actual fossil fuel emissions",
            classes: "text-22 small"
          },
          {
            text: "Business as usual Projections: resulting increase of + 5<sup>0</sup>C",
            classes: "text-23 small"
          },
          {
            text: "2<sup>0</sup>C Crash program (9-26% chance of exceeding 2<sup>0</sup>C)",
            classes: "text-24 small"
          },
        ],
        hotspotButton: {
          id: "climate",
          text: "Climate predictions",
        }
      },
    ],
  },

  //----------------------------Nitrogen Explore Data----------------------------

  //Nitrogen Explore Data
  nitrogenExploreData: {
    headings: ["Click on each option to explore the Nitrogen cycle in detail."],
    imgTexts: [
      {
        classes: 'nitrogen-explore-tab-1',
        altText: 'Nitrogen Fixation Img',
        texts: [
          {
            text: 'Nitrogen compounds',
            classes: 'text-1 color-6'
          },
          {
            text: 'Photosynthesis products',
            classes: 'text-2 color-7'
          },
          {
            text: 'Nitrogen (N<sub>2</sub>) </br> from air',
            classes: 'text-3'
          },
          {
            text: 'Bacterium',
            classes: 'text-4'
          },
        ],
        hotspotButton: {
          id: "nitrogen-fixation",
          text: "Nitrogen fixation",
        }
      },
      {
        classes: 'nitrogen-explore-tab-2',
        altText: 'Nitrification and Denitrification Img',
        texts: [
          {
            text: 'Nitrification',
            classes: 'text-1 color-8'
          },
          {
            text: 'NH<sub>4</sub>',
            classes: 'text-2'
          },
          {
            text: 'NO<sub>2</sub><sup>-</sup>',
            classes: 'text-3'
          },
          {
            text: 'NO<sub>3</sub><sup>-</sup>',
            classes: 'text-4'
          },
          {
            text: '(Ammonia)',
            classes: 'text-5'
          },
          {
            text: '(Nitrite)',
            classes: 'text-6'
          },
          {
            text: '(Nitrate)',
            classes: 'text-7'
          },
          {
            text: 'NO',
            classes: 'text-8'
          },
          {
            text: 'N<sub>2</sub>O',
            classes: 'text-9'
          },
          {
            text: 'N<sub>2</sub>',
            classes: 'text-10'
          },
          {
            text: '(Nitric oxide)',
            classes: 'text-11'
          },
          {
            text: '(Nitrous oxide)',
            classes: 'text-12'
          },
          {
            text: '(Nitrogen)',
            classes: 'text-13'
          },
          {
            text: 'Denitrification',
            classes: 'text-14 color-9'
          },
        ],
        hotspotButton: {
          id: "nitrogen-ND",
          text: "Nitrification and denitrification",
        }
      },
    ],
  },

  //----------------------------Carbon Cycle Info Data----------------------------

  //carbon Info Heading
  carbonInfoHeading: {
    text: ['Carbon occurs in various forms throughout the environments on Earth. Elements move through organisms and return to the environment, remaining in balance in the ecosystem.'],
  },

  //Carbon Info Data
  carbonInfoData: {
    classes: 'carbon-info-top-wrapper',
    altText: 'Carbon Info Top Image',
    imgTexts: [
      {
        text: "Photosynthesis",
        classes: "text-1"
      },
      {
        text: "Breathing </br>animals",
        classes: "text-2"
      },
      {
        text: "Carbon dioxide </br>in the atmosphere",
        classes: "text-3"
      },
      {
        text: "Life, death, decay",
        classes: "text-4"
      },
      {
        text: "Fossil fuels",
        classes: "text-5"
      },
      {
        text: "Gas exchange </br>of plant",
        classes: "text-6"
      },
      {
        text: "The burning </br>of fuel",
        classes: "text-7"
      },
    ],
  },

  //----------------------------Photosynthesis Data----------------------------

  //Phtoosynthesis Heading
  photosynthesisHeading: {
    text: ['This process is used by plants and other organisms to convert light energy into chemical energy.']
  },

  photosynthesisData: {
    classes: 'photosynthesis-top-wrapper',
    altText: 'Photosynthesis Top Image',
    imgTexts: [
      {
        text: 'Light </br>energy',
        classes: 'text-1 color-1'
      },
      {
        text: 'Carbon dioxide </br> Co<sub>2</sub>',
        classes: 'text-2 color-1'
      },
      {
        text: 'Water </br>H<sub>2</sub>O',
        classes: 'text-3 color-3'
      },
      {
        text: 'Oxygen </br>O<sub>2</sub>',
        classes: 'text-4 color-4'
      },
      {
        text: 'Sugar',
        classes: 'text-5 color-4'
      },
      {
        text: 'Minerals',
        classes: 'text-6 color-5'
      },
      {
        text: 'Photosynthesis',
        classes: 'text-7 normal'
      },
      {
        text: 'Sunlight',
        classes: 'text-8 normal sunlight'
      },
      {
        text: 'Carbon </br>dioxide',
        classes: 'text-9 normal'
      },
      {
        text: 'Water',
        classes: 'text-10 normal'
      },
      {
        text: 'Energy',
        classes: 'text-11 normal'
      },
      {
        text: 'Glucose',
        classes: 'text-12 normal'
      },
      {
        text: 'Oxygen',
        classes: 'text-13 normal'
      },
      {
        text: 'Sunlight',
        classes: 'text-14 normal sunlight'
      },
      {
        text: '6CO<sub>2</sub>',
        classes: 'text-15'
      },
      {
        text: 'Carbon dioxide',
        classes: 'text-16 normal'
      },
      {
        text: '+',
        classes: 'text-17 plus'
      },
      {
        text: '6H<sub>2</sub>o',
        classes: 'text-18'
      },
      {
        text: 'Water',
        classes: 'text-19 normal'
      },
      {
        text: '',
        classes: 'text-20 arrow'
      },
      {
        text: 'C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>',
        classes: 'text-21'
      },
      {
        text: 'Glucose',
        classes: 'text-22 normal'
      },
      {
        text: '+',
        classes: 'text-23 plus'
      },
      {
        text: '6O<sub>2</sub>',
        classes: 'text-24'
      },
      {
        text: 'Oxygen',
        classes: 'text-25 normal'
      },
      {
        text: 'Chloroplyll</br>(In chloroplasts)',
        classes: 'text-26 normal green-text'
      },
      {
        text: 'Reactants',
        classes: 'text-27 normal'
      },
      {
        text: 'Products',
        classes: 'text-28 normal'
      },
    ],
  },

  //----------------------------Respiration Data----------------------------

  //Respiration Heading
  respirationHeading: {
    text: ['This process is used by plants, animals, and decomposers to convert carbon back into CO<sub>2</sub>'],
    ariaLabel: 'This process is used by plants, animals, and decomposers to convert carbon back into C O 2'
  },

  //Respiration Data
  respirationData: {
    classes: 'respiration-top-wrapper',
    altText: 'Respiration Top Image',
    imgTexts: [
      {
        text: "Plants, algoe, many bacteria </br> (Autotrophs)",
        classes: 'text-1'
      },
      {
        text: "Organic </br> compounds",
        classes: 'text-2'
      },
      {
        text: "Oxygen",
        classes: 'text-3'
      },
      {
        text: "Animals, fungi, </br> many bacteria </br> (Heterotrophs)",
        classes: 'text-4'
      },
      {
        text: "Carbon dioxide",
        classes: 'text-5'
      },
      {
        text: "Water",
        classes: 'text-6'
      },
      {
        text: "Cellular Respiration",
        classes: 'text-7'
      },
      {
        text: "ATP",
        classes: 'text-8'
      },
      {
        text: "Oxygen",
        classes: 'text-9'
      },
      {
        text: "Glucose",
        classes: 'text-10'
      },
      {
        text: "Carbon </br> dioxide",
        classes: 'text-11'
      },
      {
        text: "Water",
        classes: 'text-12'
      },
      {
        text: "Energy",
        classes: 'text-13'
      },
      {
        text: "6O<sub>2</sub>",
        classes: 'text-14 big'
      },
      {
        text: "+",
        classes: 'text-15 plus'
      },
      {
        text: "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>",
        classes: 'text-16 big'
      },
      {
        text: "",
        classes: 'text-17 arrow'
      },
      {
        text: "6CO<sub>2</sub>",
        classes: 'text-18 big'
      },
      {
        text: "+",
        classes: 'text-19 plus'
      },
      {
        text: "6H<sub>2</sub>O",
        classes: 'text-20 big'
      },
      {
        text: "+",
        classes: 'text-21 plus'
      },
      {
        text: "ATP",
        classes: 'text-22 big'
      },
      {
        text: "H",
        classes: 'text-23 small'
      },
      {
        text: "C",
        classes: 'text-24 small'
      },
      {
        text: "OH",
        classes: 'text-25 small'
      },
      {
        text: "CH<sub>2</sub>OH",
        classes: 'text-26 small'
      },
      {
        text: "C",
        classes: 'text-27 small'
      },
      {
        text: "H",
        classes: 'text-28 small'
      },
      {
        text: "OH",
        classes: 'text-29 small'
      },
      {
        text: "C",
        classes: 'text-30 small'
      },
      {
        text: "H",
        classes: 'text-31 small'
      },
      {
        text: "O",
        classes: 'text-32 small'
      },
      {
        text: "H",
        classes: 'text-33 small'
      },
      {
        text: "C",
        classes: 'text-34 small'
      },
      {
        text: "OH",
        classes: 'text-35 small'
      },
      {
        text: "H",
        classes: 'text-36 small'
      },
      {
        text: "C",
        classes: 'text-37 small'
      },
      {
        text: "OH",
        classes: 'text-38 small'
      },
      {
        text: "ATP",
        classes: 'text-39 big'
      },
      {
        text: "Oxygen",
        classes: 'text-40'
      },
      {
        text: "Glucose",
        classes: 'text-41'
      },
      {
        text: "Carbon </br>dioxide",
        classes: 'text-42'
      },
      {
        text: "Water",
        classes: 'text-43'
      },
      {
        text: "Energy",
        classes: 'text-44'
      },
    ],
  },

  //----------------------------Carbon Dioxide info Data ----------------------------

  //Carbon Dioxide Heading
  cndioxideInfoHeading: {
    text: ['Carbon dioxide exists in the atmosphere as a nonflammable colorless gas. This important greenhouse gas helps to trap infrared heat from the Sun inside of Earth’s atmosphere to keep the temperature regulated overnight.']
  },

  //Carbon Dioxide Info Data
  carbonDioxideInfoData: {
    classes: 'carbon-dioxide-info-top-wrapper',
    altText: 'Carbon Dioxide Info Top Image',
    imgTexts: [
      {
        text: "Atmosphere",
        classes: 'text-1'
      },
      {
        text: "Greenhouse gas",
        classes: 'text-2'
      },
      {
        text: "Infrared radiation",
        classes: 'text-3'
      },
      {
        text: "Sunlight",
        classes: 'text-4'
      },
    ],
  },

  //---------------------------- Ocean Data ----------------------------

  //Ocean Heading
  oceanHeading: {
    text: [
      "Carbon dioxide gas from the atmosphere dissolves into the ocean and forms bicarbonate salts.",
      "Bicarbonate can form CO<sub>2</sub> again, which is released back into the atmosphere."
    ],
    ariaLabel: 'Carbon dioxide gas from the atmosphere dissolves into the ocean and forms bicarbonate salts.Bicarbonate can form C O 2 again, which is released back into the atmosphere.'
  },

  //Ocean Data
  oceanData: {
    classes: 'ocean-top-wrapper',
    altText: 'Ocean Top Image',
    imgTexts: [
      {
        text: "Biological and physical pumps of carbon dioxide",
        classes: "text-1 big"
      },
      {
        text: "CO<sub>2</sub>",
        classes: "text-2 normal"
      },
      {
        text: "CO<sub>2</sub>",
        classes: "text-3 normal"
      },
      {
        text: "Anorganic",
        classes: "text-4 small"
      },
      {
        text: "Particulate",
        classes: "text-5 small"
      },
      {
        text: "Sedimentation",
        classes: "text-6 small"
      },
      {
        text: "Organic",
        classes: "text-7 small"
      },
      {
        text: "Dissolved",
        classes: "text-8 small"
      },
      {
        text: "Anorganic",
        classes: "text-9 small"
      },
      {
        text: "Cooling",
        classes: "text-10 small"
      },
      {
        text: "Deepwater circulation",
        classes: "text-11 small"
      },
      {
        text: "Upwelling",
        classes: "text-12 small"
      },
      {
        text: "Carbonate",
        classes: "text-13 small white"
      },
      {
        text: "Organic </br> carbon",
        classes: "text-14 small white"
      },
      {
        text: "Carbonate </br> CaCO<sub>3</sub>",
        classes: "text-15 small white"
      },
      {
        text: '',
        classes: 'top-arrow'
      },
      {
        text: '',
        classes: 'bottom-arrow'
      },
    ]
  },

  //---------------------------- Fossil Fuels Data ----------------------------

  //Fossil Fuels Heading
  fossilFuelsHeading: {
    text: ['The brown arrow indicates the carbon decaying into fossil fuels. The red arrow indicates fossil fuels burning to release carbon dioxide gas into the atmosphere.']
  },

  //Fossil Fuels Data
  fossilFuelsData: {
    classes: 'fossil-fuels-top-wrapper',
    altText: 'Fossil Fuels Top Image',
    imgTexts: [
      {
        text: 'Decomposers convert dead organisms and waste products back into carbon as they decay over time. Under the right conditions, these organisms will turn into fossil fuels.',
        classes: 'text-1'
      },
      {
        text: 'The fossil fuels coal, oil, and gas are mined from the ground. Carbon dioxide is released into the atmosphere when these are burned.',
        classes: 'text-2'
      },
    ],
  },

  //---------------------------- Climate Prediction Data Data ----------------------------

  //Climate MCQ Question
  climateMcqQuestion: {
    text: 'The gradual increase of these gases over time has caused the overall temperature of the planet to rise by approximately 2–8 degrees Fahrenheit! What are some ways that you can slow the effects of greenhouse gases?',
    ariaLabel: 'The gradual increase of these gases over time has caused the overall temperature of the planet to rise by approximately 2 to 8 degrees Fahrenheit! What are some ways that you can slow the effects of greenhouse gases?'
  },

  //Climate Data
  climateData: {
    classes: 'climate-top-wrapper',
    altText: 'Climate Top Image',
    imgTexts: [
      {
        text: 'The Emissions Gap',
        classes: 'text-1 big'
      },
      {
        text: 'Fossil fuel emissions (gigatons/year)',
        classes: 'text-2 normal'
      },
      {
        text: '18',
        classes: 'text-3 normal'
      },
      {
        text: '16',
        classes: 'text-4 normal'
      },
      {
        text: '14',
        classes: 'text-5 normal'
      },
      {
        text: '12',
        classes: 'text-6 normal'
      },
      {
        text: '10',
        classes: 'text-7 normal'
      },
      {
        text: '8',
        classes: 'text-8 normal'
      },
      {
        text: '6',
        classes: 'text-9 normal'
      },
      {
        text: '4',
        classes: 'text-10 normal'
      },
      {
        text: '2',
        classes: 'text-11 normal'
      },
      {
        text: '0',
        classes: 'text-12 normal'
      },
      {
        text: '1850',
        classes: 'text-13 normal'
      },
      {
        text: '1900',
        classes: 'text-14 normal'
      },
      {
        text: '1950',
        classes: 'text-15 normal'
      },
      {
        text: '2000',
        classes: 'text-16 normal'
      },
      {
        text: '2050',
        classes: 'text-17 normal'
      },
      {
        text: '2100',
        classes: 'text-18 normal'
      },
      {
        text: 'Historic </br>emissions',
        classes: 'text-19 small'
      },
      {
        text: 'Where the </br>world </br>is heading',
        classes: 'text-20 small'
      },
      {
        text: 'Path to keep </br>global warning </br>to 2 degrees',
        classes: 'text-21 small'
      },
      {
        text: 'Actual fossil fuel emissions',
        classes: 'text-22 small'
      },
      {
        text: 'Business as usual, Projections: resulting increase of 5<sup>0</sup>C',
        classes: 'text-23 small'
      },
      {
        text: '2<sup>0</sup>C "Crash program" (9-26% chance of exceeding 2<sup>0</sup> C)',
        classes: 'text-24 small'
      },
      {
        text: 'Sea level change (mm)',
        classes: 'text-25 normal'
      },
      {
        text: '500',
        classes: 'text-26 normal'
      },
      {
        text: '400',
        classes: 'text-27 normal'
      },
      {
        text: '300',
        classes: 'text-28 normal'
      },
      {
        text: '200',
        classes: 'text-29 normal'
      },
      {
        text: '100',
        classes: 'text-30 normal'
      },
      {
        text: '0',
        classes: 'text-31 normal'
      },
      {
        text: '-100',
        classes: 'text-32 normal'
      },
      {
        text: '-200',
        classes: 'text-33 normal'
      },
      {
        text: '1800',
        classes: 'text-34 normal'
      },
      {
        text: '1850',
        classes: 'text-35 normal'
      },
      {
        text: '1900',
        classes: 'text-36 normal'
      },
      {
        text: '1950',
        classes: 'text-37 normal'
      },
      {
        text: '2000',
        classes: 'text-38 normal'
      },
      {
        text: '2050',
        classes: 'text-39 normal'
      },
      {
        text: '2100',
        classes: 'text-40 normal'
      },
      {
        text: 'Past estimates',
        classes: 'text-41 small'
      },
      {
        text: 'Recorded data',
        classes: 'text-42 small'
      },
      {
        text: 'Future projections',
        classes: 'text-43 small'
      },
    ],
  },

  //CN Checkboxes Data
  climateCheckboxesData: [
    {
      id: 'turn-off-lights',
      text: 'Turn off lights'
    },
    {
      id: 'recycle',
      text: 'Recycle'
    },
    {
      id: 'plant-trees',
      text: 'Plant trees'
    },
    {
      id: 'eat-vegetables',
      text: 'Eat vegetables'
    },
    {
      id: 'take-shorter-showers',
      text: 'Take shorter showers'
    },
    {
      id: 'visit-a-volcano',
      text: 'Visit a volcano'
    },
  ],

  //Climate Correct Answer
  climateCorrectAnswer: [
    'turn-off-lights',
    'recycle',
    'plant-trees',
    'eat-vegetables',
    'take-shorter-showers'
  ],

  //----------------------------Nitrogen Info----------------------------

  //Nitrogen Info Heading
  nitrogenInfoHeading: {
    text: ['Nitrogen is the most abundant element in our atmosphere. It is necessary for living organisms, but the balance of this element is critical. Too little nitrogen can cause stunted growth in plants, but too much nitrogen can be poisonous.']
  },

  //Nitrogen Info Data
  nitrogenInfoData: {
    classes: 'nitrogen-info-top-wrapper',
    altText: 'Nitrogen Info Top Image',
    imgTexts: [
      {
        text: 'N<sub>2</sub>',
        classes: 'text-1 big'
      },
      {
        text: 'N',
        classes: 'text-2'
      },
      {
        text: 'i',
        classes: 'text-3'
      },
      {
        text: 't',
        classes: 'text-4'
      },
      {
        text: 'r',
        classes: 'text-5'
      },
      {
        text: 'o',
        classes: 'text-6'
      },
      {
        text: 'g',
        classes: 'text-7'
      },
      {
        text: 'e',
        classes: 'text-8'
      },
      {
        text: 'n',
        classes: 'text-9'
      },
      {
        text: 'F',
        classes: 'text-10'
      },
      {
        text: 'i',
        classes: 'text-11'
      },
      {
        text: 'x',
        classes: 'text-12'
      },
      {
        text: 'a',
        classes: 'text-13'
      },
      {
        text: 't',
        classes: 'text-14'
      },
      {
        text: 'i',
        classes: 'text-15'
      },
      {
        text: 'o',
        classes: 'text-16'
      },
      {
        text: 'n',
        classes: 'text-17'
      },
      {
        text: 'D',
        classes: 'text-18'
      },
      {
        text: 'e',
        classes: 'text-19'
      },
      {
        text: 'n',
        classes: 'text-20'
      },
      {
        text: 'i',
        classes: 'text-21'
      },
      {
        text: 't',
        classes: 'text-22'
      },
      {
        text: 'r',
        classes: 'text-23'
      },
      {
        text: 'i',
        classes: 'text-24'
      },
      {
        text: 'f',
        classes: 'text-25'
      },
      {
        text: 'i',
        classes: 'text-26'
      },
      {
        text: 'c',
        classes: 'text-27'
      },
      {
        text: 't',
        classes: 'text-28'
      },
      {
        text: 'i',
        classes: 'text-29'
      },
      {
        text: 'o',
        classes: 'text-30'
      },
      {
        text: 'n',
        classes: 'text-31'
      },
      {
        text: 'Nitrogen-fixing </br> bacteria',
        classes: 'text-32 white'
      },
      {
        text: 'Ammonification',
        classes: 'text-33 white'
      },
      {
        text: 'Nitrification',
        classes: 'text-34 white'
      },
      {
        text: 'Nitrifying bacteria',
        classes: 'text-35 white'
      },
      {
        text: 'Assimilation',
        classes: 'text-36 white'
      },
      {
        text: 'Denitrifying </br> bacteria',
        classes: 'text-37 white'
      },
      {
        text: 'NH<sub>3</sub>',
        classes: 'text-38'
      },
      {
        text: 'NH<sub>3</sub>',
        classes: 'text-39'
      },
      {
        text: 'NO<sub>2</sub>',
        classes: 'text-40'
      },
      {
        text: 'NO<sub>3</sub>',
        classes: 'text-41'
      },
    ],
  },

  //----------------------------Nitrogen Fixation Data----------------------------

  //Nitrogen Fixation MCQ Question
  nitrogenFixationMcqQuestion: {
    text: 'Atmospheric nitrogen is unusable in its N<sub>2</sub> form. Nitrogen-fixing bacteria live in the soil and roots of some plants. The enzyme nitrogenase converts atmospheric nitrogen into ammonia (NH<sub>3</sub>) inside of symbiotic microbes. </br>Nitrogen is essential for which of the following?',
    ariaLabel: 'Atmospheric nitrogen is unusable in its N 2 form. Nitrogen-fixing bacteria live in the soil and roots of some plants. The enzyme nitrogenase converts atmospheric nitrogen into ammonia (N H 3) inside of symbiotic microbes. Nitrogen is essential for which of the following?'
  },

  //Nitrogen Fixation Data
  nitrogenFixationData: {
    classes: 'nitrogen-fixation-top-wrapper',
    altText: 'Nitrogen Fixation Top Image',
    imgTexts: [
      {
        text: 'Nitrogen compounds',
        classes: 'text-1 color-6'
      },
      {
        text: 'Photosynthesis products',
        classes: 'text-2 color-7'
      },
      {
        text: 'Nitrogen (N<sub>2</sub>) </br> from air',
        classes: 'text-3'
      },
      {
        text: 'Bacterium',
        classes: 'text-4'
      },
    ],
  },

  //Nitrogen Fixation Checkboxes Data
  nitrogenFixationCheckboxesData: [
    {
      id: 'dna-and-rna',
      text: 'DNA and RNA'
    },
    {
      id: 'human-breathing',
      text: 'Human breathing'
    },
    {
      id: 'plant-growth',
      text: 'Plant growth'
    },
  ],

  //Carbon Nitrogen Correct Answer
  nitrogenFixationCorrectAnswer: [
    'dna-and-rna',
    'plant-growth',
  ],

  //----------------------------Nitrification and Denitrification Data----------------------------

  //Nitrogen MCQ Questions
  nitrogenMcqQuestion: {
    text: '<b>Nitrification</b> turns ammonia into nitrite and then nitrate. This is accomplished by microbes in a high concentration of oxygen. Nitrification provides nitrogen to plants in the usable form of nitrates. </br><b>Denitrification</b> turns nitrate into nitrite and back into atmospheric nitrogen. Denitrification moves the nitrogen from the soil back into the atmosphere to ensure the cycle continues. </br>Nitrogen is used for plant growth to increase the acidity of the soil and increase root growth.',
    ariaLabel: 'Nitrification turns ammonia into nitrite and then nitrate. This is accomplished by microbes in a high concentration of oxygen. Nitrification provides nitrogen to plants in the usable form of nitrates. Denitrification turns nitrate into nitrite and back into atmospheric nitrogen. Denitrification moves the nitrogen from the soil back into the atmosphere to ensure the cycle continues. Nitrogen is used for plant growth to increase the acidity of the soil and increase root growth.'
  },

  //Nitrogen ND Data
  nitrogenNDData: {
    classes: 'nitrogen-N-D-top-wrapper',
    altText: 'Nitrogen N D Top Image',
    imgTexts: [
      {
        text: 'Nitrification',
        classes: 'text-1 big color-8'
      },
      {
        text: 'NH<sub>4</sub>',
        classes: 'text-2 normal'
      },
      {
        text: 'NO<sub>2</sub>',
        classes: 'text-3 normal'
      },
      {
        text: 'NO<sub>3</sub>',
        classes: 'text-4 normal'
      },
      {
        text: '(Ammonia)',
        classes: 'text-5 small'
      },
      {
        text: '(Nitrite)',
        classes: 'text-6 small'
      },
      {
        text: '(Nitrate)',
        classes: 'text-7 small'
      },
      {
        text: 'NO',
        classes: 'text-8 normal'
      },
      {
        text: 'N<sub>2</sub>O',
        classes: 'text-9 normal'
      },
      {
        text: 'N<sub>2</sub>',
        classes: 'text-10 normal'
      },
      {
        text: '(Nitric oxide)',
        classes: 'text-11 small'
      },
      {
        text: '(Nitrous oxide)',
        classes: 'text-12 small'
      },
      {
        text: '(Nitrogen)',
        classes: 'text-13 small'
      },
      {
        text: 'Denitrification',
        classes: 'text-14 big color-9'
      },
    ],
  },

  //Nitrogen ND MCQ Options
  nitrogenNDMcqOptions: [
    {
      id: 'nitrogen-ND-true',
      text: 'True'
    },
    {
      id: 'nitrogen-ND-false',
      text: 'False'
    }
  ],

  //----------------------------Carbon and Nitrogen Data----------------------------

  //Carbon Nitrogen MCQ Question
  carbonNitrogenMcqQuestion: {
    text: '<b>Carbon and nitrogen</b> overlap their cycles mainly in the processes conducted by microbes in the soil. Bacterial microbes break down nutrients in their short but significant life cycle. Bacteria supply nitrogen to the plant, and the plant supplies carbon to the bacteria. </br> How would excess nitrogen affect this balance?',
    ariaLabel: 'Carbon and nitrogen overlap their cycles mainly in the processes conducted by microbes in the soil. Bacterial microbes break down nutrients in their short but significant life cycle. Bacteria supply nitrogen to the plant, and the plant supplies carbon to the bacteria. How would excess nitrogen affect this balance?'
  },

  //Carbon Nitrogen Data
  carbonNitrogenData: {
    classes: 'carbon-nitrogen-top-wrapper',
    altText: 'Carbon Nitrogen Top Image',
  },

  //CN Checkboxes Data
  CNCheckboxesData: [
    {
      id: 'produce-pollutants',
      text: 'Produce pollutants'
    },
    {
      id: 'increase-crop-production',
      text: 'Increase crop production'
    },
    {
      id: 'produce-acid-rain',
      text: 'Produce acid rain'
    },
    {
      id: 'increase-ammonia',
      text: 'Increase ammonia'
    },
  ],

  //Carbon Nitrogen Correct Answer
  carbonNitrogenCorrectAnswer: [
    'produce-pollutants',
    'produce-acid-rain',
    'increase-ammonia'
  ],

  //----------------------------Common Data----------------------------

  //All Images Data
  allImagesData: [
    carbonAndNitrogen,
    carbonCycleInfo,
    carbonCycle,
    carbonDioxideExplore1,
    carbonDioxideExplore2,
    carbonDioxideExplore3,
    carbonDioxideInfo,
    carbonExplore1,
    carbonExplore2,
    carbonExplore3,
    climatePrediction,
    fossilFuels,
    nitrogenCycle,
    nitrogenExplore1,
    nitrogenExplore2,
    nitrogenFixation,
    nitrogenInfo,
    nitrogenND,
    ocean,
    photosynthesis,
    respiration
  ],

  //Activity Heading
  activityHeading: "Students will explore how disruptions to the carbon and nitrogen cycles affect ecosystem stability.",

  //Starting Toast Content
  instructionBoxContent: {
    text: [
      "<b>Carbon</b> is the second most common element in the body and is the backbone of the biomolecules that make up all living things!",
      "<b>Nitrogen</b> is critical for living things, as it makes up the building blocks of proteins and nucleic acids.",
      "Examine the images of carbon and nitrogen biomolecules. Explore how disruptions to the carbon and nitrogen cycles affect ecosystem stability."
    ],
    ariaLabel: 'Carbon is the second most common element in the body and is the backbone of the biomolecules that make up all living things. Nitrogen is critical for living things, as it makes up the building blocks of proteins and nucleic acids.Examine the images of carbon and nitrogen biomolecules. Explore how disruptions to the carbon and nitrogen cycles affect ecosystem stability.'
  },

  //infoText
  infoDialogText: "Read the text on the screen and then explore the various options.",

  //Reset Toast Content
  resetMsgContent: globalConfig.resetPopupText,

  //Corret Toast Content
  correctToastMsg: globalConfig.correctToastMessage,

  //Incorrect Toast Content
  incorrectToastMsg: globalConfig.incorrectToastMessage,

  //Completion Popup Texts
  completionPopup: {
    ...globalConfig.completionPopup,
    content: "You have successfully explored both the carbon and nitrogen cycles!"
  },

  //transition Popup Texts
  transitionPopup: {
    ...globalConfig.transitionPopup,
    content: "You have explored the carbon and nitrogen cycle. Now it's time to check your understanding."
  },

  //Common Data
  buttonLabels: { ...globalConfig.buttonLabels },

};

export default data;
