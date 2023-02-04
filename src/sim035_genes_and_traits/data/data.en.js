import globalConfig from "../../app/data/data.en";
const buttonLabels = { ...globalConfig.buttonLabels };

import GeneDog from "../assets/images/screen_2/gene_dog.png";
import GeneRose from "../assets/images/screen_2/gene_flower.png";
import cellBackground from "../assets/images/screen_1/cell_2x.png";
import GeneBlind from "../assets/images/screen_2/gene_colourblind.png";

const data = {
  screenData: [
    {
      id: 0,
      component: "HotspotsContainer",
    },
    {
      id: 1,
      component: "GeneFunctionContainer",
    },
  ],
  geneFunction: [
    {
      name: "dog",
      itemName: "Dog",
      geneImg: GeneDog,
      typeA: "Floppy ears",
      typeB: "Pointy ears",
      header: "Ear type gene",
      TypeAAlt: "Dog with floppy ears",
      TypeBAlt: "Dog with pointy ears",
      geneAlt:
        "Two different chromosome models; ear type gene is identified in both models.",
      description:
        'Note how changing the ear type gene impacted the inherited trait in the dog. Use the "Next" button to advance to the next scenario.',
    },
    {
      name: "rose",
      itemName: "Rose",
      geneImg: GeneRose,
      typeA: "Red petals",
      typeB: "White petals",
      header: "Petal color gene",
      geneAlt:
        "Two different chromosome models; petal color gene is identified in both models.",
      description:
        'Note how changing the petal color gene impacted the inherited trait in the rose plant. Use the "Next" button to advance to the next scenario.',
      TypeAAlt: "Single rose on a stem with leaves; rose petals are red.",
      TypeBAlt: "Single rose on a stem with leaves; rose petals are white.",
    },
    {
      name: "blind",
      geneImg: GeneBlind,
      itemName: "Spectacles",
      typeB: "Color blindness",
      typeA: "No color blindness",
      header: "Color blindness gene",
      description:
        'Note how changing the color blindness gene impacted the inherited trait in the person. Use the "Finish" button to conclude this simulation.',
      geneAlt:
        "Two different chromosome models;  color blindness gene is identified on both models.",
      TypeAAlt:
        "A pair of glasses with different-colored letters in the left lens and a series of dots that form a yellow 3 surrounded by red dots in the right lens.",
      TypeBAlt:
        "A pair of glasses with all gray letters in the left lens and a series of gray dots in the right lens.",
    },
  ],
  hotspotData: {
    leftSection: {
      backgroundImg: cellBackground,
      backgroundLabel:
        "A cell with different organelles; nucleus is identified. A chromosome in the nucleus is magnified. The chromosome is partially unwound to show a gene.",
      hotspots: [
        {
          name: "Gene",
          visited: false,
          active: false,
          description:
            "DNA consists of individual sections called <b>genes</b>. A gene is the basic physical and functional unit of heredity.",
        },
        {
          name: "Nucleus",
          visited: false,
          active: false,
          description:
            "The cells of all eukaryotic organisms contain a <b>nucleus</b>. Eukaryotic organisms include all animals, plants, fungi, and protists. The nucleus controls the cell's activities and contains the genetic material.",
        },
        {
          name: "Chromosome",
          visited: false,
          active: false,
          description:
            "All the DNA of an organism is compacted down into <b>chromosomes</b> held within the nucleus. Humans have 46 chromosomes broken into 23 pairs within each nucleus! Offspring inherit 23 of the chromosomes from their mother, and the other 23 are inherited from their father.",
        },
        {
          name: "Cell",
          visited: false,
          active: false,
          description:
            "All living things are composed of <b>cells</b>. Cells are the building blocks of life.",
        },
      ],
    },
    rightSection: {
      initialText: "Click on the hotspots to learn more about each structure.",
      close: buttonLabels.close,
      next: buttonLabels.next,
    },
  },
  genesData: {
    initialText:
      "Genes impact inherited traits. Use the buttons to change the gene, and note the impact it has on that trait.",
    toggleBtn1: "Gene A",
    toggleBtn2: "Gene B",
    chromo: "Chromosome Models",
    trait: "Inherited Trait",
  },
  selected: "selected",
  ...buttonLabels,
  transitionPopup: {
    ...globalConfig.transitionPopup,
    content:
      "Now that you have explored the structures within the cell, it is time to dig deeper into the function of genes.",
  },
  completionPopup: {
    ...globalConfig.completionPopup,
    content: "You have successfully completed the simulation!",
  },
  resetDialogText: globalConfig.resetPopupText,
  startScreenInfo:
    "All organisms have genetic codes held within their cells. Today, you will explore how genes impact inherited traits.",
  informationText:
    'Use the "Next" button to advance through scenarios. Select the "Gene A" and "Gene B" buttons to impact the inherited trait.',
  next: buttonLabels.next,
  headingScreen1:
    "Students will explore how genes are sections of chromosomes located within the nucleus of cells.",
  headingScreen2:
    "Students will explore how changing genes impact the inherited traits of various offspring (dog ear types, rose petal colors, and color blindness).",
};

export default data;
