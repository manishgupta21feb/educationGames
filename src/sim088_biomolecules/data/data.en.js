import globalDataSet from "../../app/data/data.en";

import homescreen from "../assets/images/homescreen.png";
import subCat1 from "../assets/images/1.png";
import subCat2 from "../assets/images/2.png";
import subCat3 from "../assets/images/3.png";
import subCat4 from "../assets/images/4.png";
import carbohydrates_screen1 from "../assets/images/carbohydrates_screen1.png";
import carbohydrates_screen2_2 from "../assets/images/carbohydrates_screen2_2.png";
import carbohydrates_screen2_1 from "../assets/images/carbohydrates_screen2_1.png";
import compoundsMaster from "../assets/images/compoundsMaster.png";
import compoundsMaster3 from "../assets/images/compoundsMaster3.png";
import nucleic_acid from "../assets/images/nucleic_acid.png";
import nucleic_left from "../assets/images/nucleic_left.png";
import nucleic_right from "../assets/images/nucleic_right.png";
import nucleic_acid_dd from "../assets/images/nucleic_acid_dd.png";
import lipids_screen1 from "../assets/images/lipids_screen1.png";
import lipids_screen2 from "../assets/images/lipids_screen2.png";
import lipids_screen4 from "../assets/images/lipids_screen4.png";
import lipids_screen2_home2 from "../assets/images/lipids_screen2_home2.png";
import lipids_screen2_home1 from "../assets/images/lipids_screen2_home1.png";
import lipids_screen2_home3 from "../assets/images/lipids_screen2_home3.png";
import lipids_screen2_home4 from "../assets/images/lipids_screen2_home4.png";
import lipids_screen2_home5 from "../assets/images/lipids_screen2_home5.png";
import protein_home_1 from "../assets/images/protein_home_1.png";
import protein_home_2 from "../assets/images/protein_home_2.png";
import compoundsMaster_item2 from "../assets/images/compoundsMaster_item2.png";
import compoundsMaster_item3 from "../assets/images/compoundsMaster_item3.png";
import compoundsMaster_item4 from "../assets/images/compoundsMaster_item4.png";
import glycine_1 from "../assets/images/glycine_1.png";
import peptide_bond from "../assets/images/peptide_bond.png";
import alanine from "../assets/images/alanine.png";
import glycine from "../assets/images/glycine.png";
import dipeptide_part1 from "../assets/images/dipeptide_part1.png";
import dipeptide_part2 from "../assets/images/dipeptide_part2.png";
import lipids_1 from "../assets/images/lipids_1.png";
import lipids_2 from "../assets/images/lipids_2.png";
import glycine_m from "../assets/images/glycine_m.png";
import vitamin_d from "../assets/images/vitamin_d.png";
import compounds_ms2 from "../assets/images/compounds_ms2.png";
import right_arrow from "../assets/images/right_arrow.png";
import left_arrow from "../assets/images/left_arrow.png";
import center_arrow from "../assets/images/center_arrow.png";
import Three_atom from "../assets/images/Three_atom.png";
import protein_subs_screen1_1 from "../assets/images/protein_subs_screen1_1.png";
import protein_subs_screen1_2 from "../assets/images/protein_subs_screen1_2.png";
import protein_subs_screen2 from "../assets/images/protein_subs_screen2.png";
import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";

const data = {
  dropItemsLabel: "{atomname} is dropped at dropzone{count}",
  feedback: {
    partialFeedback1:
      "You are almost correct! Please try again and fix your incorrect answers!", //if more than one answer is incorrect
    partialFeedback2:
      "You are almost correct! Please try again and fix your incorrect answer!", //if only one answer is incorrect
    correctFeedback: "That's right!",
    incorrectFeedback: "Not quite right. Try again!",
    dndMsg:
      "Did you note water leaving the compound? Glycogen is formed through dehydration. Water is a byproduct!",
  },
  threenAtomTxt: ["O", "H", "H"],
  screenData: [
    {
      id: "sd_1",
      isActive: true,
      nextNode: "sd_2",
      isVisited: false,

      text: [
        {
          classes: "txt1",
          txt: "<strong> Organic chemistry </strong> is a branch of chemistry that studies the structures, properties, and reactions of carbon-containing compounds.",
        },
        {
          classes: "txt2",
          txt: "<strong> Biomolecules </strong>are organic molecules present in organisms and essential for one or more biological functions. They are usually made from covalent combinations of the following elements: carbon, hydrogen, oxygen, nitrogen, and phosphorus.",
        },
      ],
      img: {
        path: homescreen,
        label: ["C", "H", "O", "N", "P"],
        alt: "This is dummy text for home screen",
      },
    },
    {
      id: "sd_2",
      isActive: false,
      prevNode: null,
      nextNode: "sd_3",
      isVisited: false,
      heading:
        "<strong> Biomolecules </strong> are divided into four main categories. Examine the diagrams of biomolecules shown on the screen. Explore the terms by clicking on each one.",
      subCategory: [
        {
          id: "sd_3",
          label: "Carbohydrates",
          imgSrc: subCat1,
          alt: "This is dummy text for Carbohydrates ",
        },
        {
          id: "sd_12",
          label: "Proteins",
          imgSrc: subCat2,
          alt: "This is dummy text for Proteins",
        },
        {
          id: "sd_7",
          label: "Lipids",
          imgSrc: subCat3,
          alt: "This is dummy text for Lipids",
        },
        {
          id: "sd_11",
          label: "Nucleic acids",
          imgSrc: subCat4,
          alt: "This is dummy text for Nucleic acids",
        },
      ],
    },
    {
      id: "sd_3",
      isActive: false,
      prevNode: "sd_2",
      nextNode: "sd_4",
      isVisited: false,
      currentScreen: 1,
      totalScreen: 2,
      compoundData: [
        {
          heading:
            "Carbohydrates are composed of monosaccharides, or single sugars, that provide quick energy for daily tasks. These monosaccharides can be joined together to form polysaccharides. They are the primary fuel source for your brain's high-energy demands and provide structural support to cell walls in plants.",
          img: [
            {
              img: carbohydrates_screen1,
              classes: "carbohydrates_screen1",
              alt: "This is dummy text for sub screen 1 carbohydrates",
            },
          ],
          classes: "heading",

          labels: [
            { name: "Monosaccharides", classes: "imgLbl1" },
            { name: "Disaccharides", classes: "imgLbl2" },
            { name: "Polysaccharides", classes: "imgLbl3" },
          ],
          compoundsName: [{ id: "ch", value: "CH" }],

          atomsNames: [
            { value: "CH", classes: "lbl1" },
            { value: "2", classes: "lbl2" },
            { value: "OH", classes: "lbl3" },
            { value: "O", classes: "lbl4" },
            { value: "OH", classes: "lbl5" },
            { value: "OH", classes: "lbl6" },
            { value: "OH", classes: "lbl7" },
            { value: "OH", classes: "lbl8" },
            { value: "CH", classes: "lbl9" },
            { value: "2", classes: "lbl10" },
            { value: "OH", classes: "lbl11" },
            { value: "O", classes: "lbl12" },
            { value: "OH", classes: "lbl13" },
            { value: "OH", classes: "lbl14" },
            { value: "OH", classes: "lbl15" },
            { value: "OH", classes: "lbl16" },

            { value: "OH", classes: "lbl17" },
            { value: "OH", classes: "lbl18" },

            { value: "O", classes: "lbl19" },
            { value: "O", classes: "lbl20" },
            { value: "O", classes: "lbl21" },
            { value: "O", classes: "lbl22" },

            { value: "CH", classes: "lbl23" },
            { value: "2", classes: "lbl24" },
            { value: "OH", classes: "lbl25" },

            { value: "CH", classes: "lbl26" },
            { value: "2", classes: "lbl27" },
            { value: "OH", classes: "lbl28" },

            { value: "O", classes: "lbl29" },
            { value: "O", classes: "lbl30" },
            { value: "O", classes: "lbl31" },

            { value: "CH", classes: "lbl32" },
            { value: "2", classes: "lbl33" },
            { value: "OH", classes: "lbl34" },
            { value: "CH", classes: "lbl35" },
            { value: "2", classes: "lbl36" },
            { value: "OH", classes: "lbl37" },
            { value: "CH", classes: "lbl38" },
            { value: "2", classes: "lbl39" },
            { value: "OH", classes: "lbl40" },

            { value: "H", classes: "lbl41" },
            { value: "H", classes: "lbl42" },
            { value: "H", classes: "lbl43" },
            { value: "H", classes: "lbl44" },
            { value: "O", classes: "lbl45" },
            { value: "OH", classes: "lbl46" },
            { value: "H", classes: "lbl47" },
            { value: "H", classes: "lbl48" },
            { value: "HO", classes: "lbl49" },

            { value: "O", classes: "lbl50" },
            { value: "H", classes: "lbl51" },

            { value: "OH", classes: "lbl52" },
            { value: "OH", classes: "lbl53" },
            { value: "H", classes: "lbl54" },

            { value: "OH", classes: "lbl55" },
            { value: "O", classes: "lbl56" },
          ],
        },
        {
          alt: "This is dummy text for sub screen 2 carbohydrates",

          heading:
            "Dehydration synthesis forms larger monomer chains by removing water molecules. Hydrolysis breaks down chains into single monomers by adding water molecules.",
          img: [
            {
              classes: "carbohydrates_screen2_1",
              img: carbohydrates_screen2_1,
            },
            {
              classes: "carbohydrates_screen2_2",
              img: carbohydrates_screen2_2,
            },
            {
              classes: "three_atom_bond_1",
              img: Three_atom,
            },
            {
              classes: "three_atom_bond_2",
              img: Three_atom,
            },
          ],
          labels: [
            { name: "Dehydration synthesis", classes: "imgLbl4" },
            { name: "Hydrolysis (digestion)", classes: "imgLbl5" },
          ],
          atomsNames: [
            { value: "", classes: "emptySpace0" },
            { value: "HO", classes: "lbl1" },
            { value: "O", classes: "lbl2" },
            { value: "", classes: "emptySpace1" },
            { value: "H", classes: "lbl3" },
            { value: "+", classes: "smbl1" },
            { value: "", classes: "emptySpace2" },
            { value: "HO", classes: "lbl4" },
            { value: "OH", classes: "lbl5" },
            { value: "HO", classes: "lbl6" },
            { value: "O", classes: "lbl7" },
            { value: "O", classes: "lbl8" },
            { value: "H", classes: "lbl9" },
            { value: "H", classes: "lbl10" },
            { value: "OH", classes: "lbl11" },
            { value: "HO", classes: "lbl12" },
            { value: "O", classes: "lbl13" },
            { value: "O", classes: "lbl14" },
            { value: "H", classes: "lbl15" },
            { value: "H", classes: "lbl16" },
            { value: "OH", classes: "lbl17" },
            { value: "HO", classes: "lbl18" },
            { value: "OH", classes: "lbl19" },
            { value: "+", classes: "smbl2" },
            { value: "HO", classes: "lbl20" },
            { value: "OH", classes: "lbl21" },
            { value: "", classes: "emptySpace3" },
            { value: "", classes: "emptySpace4" },
            { value: "", classes: "emptySpace5" },
            { value: "", classes: "emptySpace6" },
          ],
        },
      ],
    },
    {
      id: "sd_4",
      prevNode: "sd_2",
      isActive: false,
      isVisited: false,
      compoundsMaster: [
        {
          heading: "Click on the buttons below for an interactive experience.",
          img: [
            {
              id: "sd_5",
              src: compoundsMaster,
              alt: "This si dummy text 1 for subscreen 3 main screen carbohydrates",
              label: "Count atoms",
              classes: "comp_img_1",
              classesBtn: "comp_btn_img_1",
              atomsNames: [
                { value: "CH", classes: "lbl1" },
                { value: "2", classes: "lbl2" },
                { value: "OH", classes: "lbl3" },
                { value: "O", classes: "lbl4" },
                { value: "OH", classes: "lbl5" },
                { value: "OH", classes: "lbl6" },
                { value: "OH", classes: "lbl7" },
                { value: "OH", classes: "lbl8" },
              ],
            },
            {
              id: "sd_6",
              src: compoundsMaster,
              alt: "This si dummy text 2 for subscreen 3 main screen carbohydrates",
              label: "Build polysaccharides",
              classes: "comp_img_2",
              classesBtn: "comp_btn_img_2",
              atomsNames: [
                { value: "CH", classes: "lbl1" },
                { value: "2", classes: "lbl2" },
                { value: "OH", classes: "lbl3" },
                { value: "O", classes: "lbl4" },
                { value: "OH", classes: "lbl5" },
                { value: "OH", classes: "lbl6" },
                { value: "OH", classes: "lbl7" },
                { value: "OH", classes: "lbl8" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "sd_5",
      classes: "mcq-wrapper",
      isActive: false,
      isMcq: true,
      prevNode: "sd_4",
      isVisited: false,
      isSiblings: true,
      currentScreen: 1,
      totalScreen: 4,
      dropdownHeading: [
        { heading: "C", ariaLabel: "C" },
        { heading: "H", ariaLabel: "H" },
        { heading: "O", ariaLabel: "O" },
      ],
      compoundData: [
        {
          answerKey: [6, 12, 6],
          heading:
            "Carbohydrates provide energy for living things. Count the number of each type of atom in the examples shown.",
          dropDownData: [
            {
              atom1: [
                {
                  id: "ddatom1",
                  text: "6",
                  value: "6",
                },
                {
                  id: "ddatom2",
                  text: "8",
                  value: "8",
                },
                {
                  id: "ddatom3",
                  text: "10",
                  value: "10",
                },
                {
                  id: "ddatom4",
                  text: "12",
                  value: "12",
                },
              ],
            },
            {
              atom2: [
                {
                  id: "ddatom1",
                  text: "8",
                  value: "8",
                },
                {
                  id: "ddatom2",
                  text: "10",
                  value: "10",
                },
                {
                  id: "ddatom3",
                  text: "12",
                  value: "12",
                },
                {
                  id: "ddatom4",
                  text: "14",
                  value: "14",
                },
              ],
            },
            {
              atom3: [
                {
                  id: "ddatom1",
                  text: "4",
                  value: "4",
                },
                {
                  id: "ddatom2",
                  text: "6",
                  value: "6",
                },
                {
                  id: "ddatom3",
                  text: "8",
                  value: "8",
                },
                {
                  id: "ddatom4",
                  text: "10",
                  value: "10",
                },
              ],
            },
          ],
          type: [
            {
              classes: "img_txt_1",
              name: "Monosaccharides (single monomers)",
              id: 1,
            },
          ],
        },
        {
          answerKey: [12, 22, 11],
          heading:
            "Carbohydrates provide energy for living things. Count the number of each type of atom in the examples shown.",
          dropDownData: [
            {
              atom1: [
                {
                  id: "ddatom1",
                  text: "10",
                  value: "10",
                },
                {
                  id: "ddatom2",
                  text: "12",
                  value: "12",
                },
                {
                  id: "ddatom3",
                  text: "14",
                  value: "14",
                },
                {
                  id: "ddatom4",
                  text: "16",
                  value: "16",
                },
              ],
            },
            {
              atom2: [
                {
                  id: "ddatom1",
                  text: "18",
                  value: "18",
                },
                {
                  id: "ddatom2",
                  text: "20",
                  value: "20",
                },
                {
                  id: "ddatom3",
                  text: "22",
                  value: "22",
                },
                {
                  id: "ddatom4",
                  text: "24",
                  value: "24",
                },
              ],
            },
            {
              atom3: [
                {
                  id: "ddatom1",
                  text: "7",
                  value: "7",
                },
                {
                  id: "ddatom2",
                  text: "9",
                  value: "9",
                },
                {
                  id: "ddatom3",
                  text: "11",
                  value: "11",
                },
                {
                  id: "ddatom4",
                  text: "13",
                  value: "13",
                },
              ],
            },
          ],
          type: [
            {
              classes: "img_txt_2",
              name: "Disaccharides (monomer pairs)",
              id: 2,
            },
          ],
        },
        {
          answerKey: [18, 32, 16],
          heading:
            " Carbohydrates provide energy for living things. Count the number of each type of atom in the examples shown.",
          dropDownData: [
            {
              atom1: [
                {
                  id: "ddatom1",
                  text: "15",
                  value: "15",
                },
                {
                  id: "ddatom2",
                  text: "16",
                  value: "16",
                },
                {
                  id: "ddatom3",
                  text: "17",
                  value: "17",
                },
                {
                  id: "ddatom4",
                  text: "18",
                  value: "18",
                },
              ],
            },
            {
              atom2: [
                {
                  id: "ddatom1",
                  text: "30",
                  value: "30",
                },
                {
                  id: "ddatom2",
                  text: "31",
                  value: "31",
                },
                {
                  id: "ddatom3",
                  text: "32",
                  value: "32",
                },
                {
                  id: "ddatom4",
                  text: "33",
                  value: "33",
                },
              ],
            },
            {
              atom3: [
                {
                  id: "ddatom1",
                  text: "13",
                  value: "13",
                },
                {
                  id: "ddatom2",
                  text: "14",
                  value: "14",
                },
                {
                  id: "ddatom3",
                  text: "15",
                  value: "15",
                },
                {
                  id: "ddatom4",
                  text: "16",
                  value: "16",
                },
              ],
            },
          ],
          type: [
            {
              classes: "img_txt_3",
              name: "Polysaccharides (multiple monomers)",
              id: 3,
            },
          ],
        },
        {
          answerKey: [1, 2, 1],
          type: [
            {
              classes: "img_txt_4",
              name: "Monosaccharides (single monomers)",
              formula: "C 6 H 12 O 6",
              id: 4,
            },
            {
              classes: "img_txt_5",
              name: "Disaccharides (monomer pairs)",
              formula: "C 12 H 22 O 11",
              id: 5,
            },
            {
              classes: "img_txt_6",
              name: "Polysaccharides (multiple monomers)",
              id: 6,
              formula: "C 18 H 32 O 16",
            },
          ],

          heading:
            "Look for the pattern! What is the lowest whole number ratio for each element?",
          dropDownData: [
            {
              atom1: [
                {
                  id: "ddatom1",
                  text: "1",
                  value: "1",
                },
                {
                  id: "ddatom2",
                  text: "2",
                  value: "2",
                },
                {
                  id: "ddatom3",
                  text: "3",
                  value: "3",
                },
                {
                  id: "ddatom4",
                  text: "4",
                  value: "4",
                },
              ],
            },
            {
              atom2: [
                {
                  id: "ddatom1",
                  text: "1",
                  value: "1",
                },
                {
                  id: "ddatom2",
                  text: "2",
                  value: "2",
                },
                {
                  id: "ddatom3",
                  text: "3",
                  value: "3",
                },
                {
                  id: "ddatom4",
                  text: "4",
                  value: "4",
                },
              ],
            },
            {
              atom3: [
                {
                  id: "ddatom1",
                  text: "1",
                  value: "1",
                },
                {
                  id: "ddatom2",
                  text: "2",
                  value: "2",
                },
                {
                  id: "ddatom3",
                  text: "3",
                  value: "3",
                },
                {
                  id: "ddatom4",
                  text: "4",
                  value: "4",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "sd_6",
      isActive: false,
      prevNode: "sd_4",
      isVisited: false,
      isSiblings: true,
      compoundData: [
        "Carbohydrates form chains through dehydration and require energy. Hydrolysis reactions break down the molecules and tend to release energy.",
        "Link the glucose molecules together to form glycogen by dropping glucose units one by one.",
      ],

      img: [
        {
          id: "sd_img_1",
          waterAtom: ["+", "H", "2", "O"],
          label: "Drop zone",
          liveTxt: "dummy live text atom is dropped at drop zone1",
        },
        {
          id: "sd_img_2",
          waterAtom: ["+", "H", "2", "O"],
          label: "Drop zone",
          liveTxt: "dummy live text atom is dropped at drop zone1",
        },
        {
          id: "sd_img_3",
          waterAtom: ["+", "H", "2", "O"],
          label: "Drop zone",
          liveTxt: "dummy live text atom is dropped at drop zone1",
        },
        {
          id: "sd_img_4",
          waterAtom: ["+", "H", "2", "O"],
          label: "Drop zone",
          liveTxt: "dummy live text atom is dropped at drop zone1",
        },
      ],
    },
    {
      id: "sd_7",
      nextNode: "sd_8",
      prevNode: "sd_2",
      isActive: false,
      isVisited: false,
      currentScreen: 1,
      totalScreen: 2,
      compoundData: [
        {
          heading:
            "<strong> Lipids  </strong> are a group of macromolecules composed of fatty acids that provide long-term energy storage. They are insoluble in water and provide many important functions, such as hormone diffusion, thermal insulation, waterproofing, buoyancy, and electrical insulation to nerves.",
          classes: "lipids_srn1",
          img: [
            {
              img: lipids_screen1,
              alt: "dummy lipid text 1",
              classes: "lipids_screen1",
            },
          ],
        },
        {
          heading:
            "Lipids form the hydrophobic bilayer of the cell membrane that helps separate fluids inside the cell from those outside the cell.",
          classes: "lipids_srn2",
          img: [
            {
              img: lipids_screen2,
              alt: "dummy lipid text 2",
              classes: "lipids_screen2",
            },
          ],
          labels: [
            { classes: "imglbl1", name: "Phospholipid Bilayer" },
            { classes: "imglbl2", name: "Water" },
            { classes: "imglbl3", name: "Lipid Bilayer" },
            { classes: "imglbl4", name: "Polar head (hydrophilic)" },
            { classes: "imglbl5", name: "Nonpolar Tails (hydrophobic)" },
            { classes: "imglbl6", name: "Polar head (hydrophobic)" },
            { classes: "imglbl7", name: "Water" },
            { classes: "imglbl8", name: "" },
            { classes: "imglbl9", name: "" },
            { classes: "imglbl10", name: "" },
            { classes: "imglbl11", name: "" },
            { classes: "imglbl12", name: "" },
            { classes: "imglbl13", name: "" },
            { classes: "imglbl14", name: "" },
            { classes: "imglbl15", name: "" },
          ],
        },
      ],
    },
    {
      id: "sd_8",
      isActive: false,
      isVisited: false,
      prevNode: "sd_2",
      compoundsMaster: [
        {
          heading: "Click on buttons to see an interactive experience.",
          img: [
            {
              id: "sd_9",
              src: lipids_1,
              label: "Count atoms",
              classes: "comp_img_3",
              classesBtn: "comp_btn_img_3",
              lblArr: [
                "HC",
                "3",
                "CH",
                "3",
                "HC",
                "3",
                "HC",
                "3",
                "OH",
                "CH",
                "3",
              ],
            },
            {
              id: "sd_10",
              src: lipids_2,
              label: "Saturated vs. Unsaturated",
              classes: "comp_img_4",
              classesBtn: "comp_btn_img_4",
            },
          ],
        },
      ],
    },
    {
      id: "sd_9",
      isActive: false,
      isMcq: true,
      prevNode: "sd_8",
      isVisited: false,
      isSiblings: true,
      currentScreen: 1,
      totalScreen: 4,
      classes: "mcq-wrapper1",
      dropdownHeading: [
        { heading: "C", ariaLabel: "C" },
        { heading: "H", ariaLabel: "H" },
        { heading: "O", ariaLabel: "O" },
      ],
      compoundData: [
        {
          answerKey: [20, 30, 1],
          heading:
            "Lipids provide long-term energy storage and the structure for cell membranes. Count the number of each type of atom in the examples shown.",
          dropDownData: [
            {
              atom1: [
                {
                  id: "ddatom1",
                  text: "18",
                  value: "18",
                },
                {
                  id: "ddatom2",
                  text: "19",
                  value: "19",
                },
                {
                  id: "ddatom3",
                  text: "20",
                  value: "20",
                },
                {
                  id: "ddatom4",
                  text: "21",
                  value: "21",
                },
              ],
            },
            {
              atom2: [
                {
                  id: "ddatom1",
                  text: "28",
                  value: "28",
                },
                {
                  id: "ddatom2",
                  text: "29",
                  value: "29",
                },
                {
                  id: "ddatom3",
                  text: "30",
                  value: "30",
                },
                {
                  id: "ddatom4",
                  text: "31",
                  value: "31",
                },
              ],
            },
            {
              atom3: [
                {
                  id: "ddatom1",
                  text: "1",
                  value: "1",
                },
                {
                  id: "ddatom2",
                  text: "2",
                  value: "2",
                },
                {
                  id: "ddatom3",
                  text: "3",
                  value: "3",
                },
                {
                  id: "ddatom4",
                  text: "4",
                  value: "4",
                },
              ],
            },
          ],
          type: [{ name: "Vitamin A", id: 1 }],
        },
        {
          answerKey: [28, 44, 1],
          heading:
            "Lipids provide long-term energy storage and the structure for cell membranes. Count the number of each type of atom in the examples shown.",
          dropDownData: [
            {
              atom1: [
                {
                  id: "ddatom1",
                  text: "28",
                  value: "28",
                },
                {
                  id: "ddatom2",
                  text: "29",
                  value: "29",
                },
                {
                  id: "ddatom3",
                  text: "30",
                  value: "30",
                },
                {
                  id: "ddatom4",
                  text: "31",
                  value: "31",
                },
              ],
            },
            {
              atom2: [
                {
                  id: "ddatom1",
                  text: "36",
                  value: "36",
                },
                {
                  id: "ddatom2",
                  text: "40",
                  value: "40",
                },
                {
                  id: "ddatom3",
                  text: "44",
                  value: "44",
                },
                {
                  id: "ddatom4",
                  text: "48",
                  value: "48",
                },
              ],
            },
            {
              atom3: [
                {
                  id: "ddatom1",
                  text: "1",
                  value: "1",
                },
                {
                  id: "ddatom2",
                  text: "2",
                  value: "2",
                },
                {
                  id: "ddatom3",
                  text: "3",
                  value: "3",
                },
                {
                  id: "ddatom4",
                  text: "4",
                  value: "4",
                },
              ],
            },
          ],
          type: [{ name: "Vitamin D", id: 2 }],
        },
        {
          answerKey: [3, 3, 3],
          heading:
            "Lipids provide long-term energy storage and the structure for cell membranes. Count the number of each type of atom in the examples shown.",
          dropDownData: [
            {
              atom1: [
                {
                  id: "ddatom1",
                  text: "2",
                  value: "2",
                },
                {
                  id: "ddatom2",
                  text: "3",
                  value: "3",
                },
                {
                  id: "ddatom3",
                  text: "4",
                  value: "4",
                },
                {
                  id: "ddatom4",
                  text: "5",
                  value: "5",
                },
              ],
            },
            {
              atom2: [
                {
                  id: "ddatom1",
                  text: "2",
                  value: "2",
                },
                {
                  id: "ddatom2",
                  text: "3",
                  value: "3",
                },
                {
                  id: "ddatom3",
                  text: "4",
                  value: "4",
                },
                {
                  id: "ddatom4",
                  text: "5",
                  value: "5",
                },
              ],
            },
            {
              atom3: [
                {
                  id: "ddatom1",
                  text: "2",
                  value: "2",
                },
                {
                  id: "ddatom2",
                  text: "3",
                  value: "3",
                },
                {
                  id: "ddatom3",
                  text: "4",
                  value: "4",
                },
                {
                  id: "ddatom4",
                  text: "5",
                  value: "5",
                },
              ],
            },
          ],
          type: [{ name: "Glycerol", id: 3 }],
        },
        {
          heading:
            "Look for a pattern! Is the lowest whole number ratio for lipids the same as carbohydrates?",
          answerKey: "rd2",
          imgArr: [{ src: lipids_screen4 }],
          radioOptions: [
            {
              id: "rd1",
              disabled: false,
              text: "Yes",
              type: "Yes",
            },
            {
              id: "rd2",
              disabled: false,
              text: "No",
              type: "No",
            },
          ],
          type: [{ name: "Vitamin A : Vitamin D : Glycerol", id: 0 }],
        },
      ],
    },
    {
      id: "sd_10",
      isActive: false,
      prevNode: "sd_8",
      isVisited: false,
      isSiblings: true,
      currentScreen: 1,
      totalScreen: 6,
      isMcq: true,
      compoundData: [
        {
          id: "cd_rd_1",
          heading:
            "<strong>Lipids can be saturated or unsaturated fatty acids.</strong> <br> Saturated fatty acids lack double bonds between the carbons and are saturated with hydrogen atoms. They tend to be solid at room temperature. These generally come from animals and increase HDL cholesterol. <br> Unsaturated fatty acids have at least one double bond and tend to be liquid at room temperature. These generally come from plants and increase LDL cholesterol.",
          classes: "lipids_homescreen",
          type: [{ name: "Saturated : Unsaturated", id: "0" }],
          img: { src: "" },
        },
        {
          id: "cd_rd_2",
          heading:
            "Classify the example shown as saturated or unsaturated fats.",
          classes: "btm_cd_rd",
          type: [{ name: "", id: "1" }],
          answerKey: "rd2",
          radioOptions: [
            {
              id: "rd1",
              disabled: false,
              text: "Saturated",
              type: "Saturated",
            },
            {
              id: "rd2",
              disabled: false,
              text: "Unsaturated",
              type: "Unsaturated",
            },
          ],
        },
        {
          id: "cd_rd_3",
          classes: "btm_cd_rd",
          heading:
            "Classify the example shown as saturated or unsaturated fats.",
          type: [{ name: "", id: "2" }],
          img: { src: "" },
          answerKey: "rd1",
          radioOptions: [
            {
              id: "rd1",
              disabled: false,
              text: "Saturated",
              type: "Saturated",
            },
            {
              id: "rd2",
              disabled: false,
              text: "Unsaturated",
              type: "Unsaturated",
            },
          ],
        },
        {
          id: "cd_rd_4",
          classes: "btm_cd_rd",
          heading:
            "Classify the given example as saturated or unsaturated fats.",
          img: [
            {
              img: lipids_screen2_home3,
              alt: "dummy lipid text 1",
              classes: "lipids_screen2_home1",
              label: "Butter",
            },
          ],
          answerKey: "rd1",
          radioOptions: [
            {
              id: "rd1",
              disabled: false,
              text: "Saturated",
              type: "Saturated",
            },
            {
              id: "rd2",
              disabled: false,
              text: "Unsaturated",
              type: "Unsaturated",
            },
          ],
        },
        {
          id: "cd_rd_5",
          classes: "btm_cd_rd",
          heading:
            "Classify the example shown as saturated or unsaturated fats.",
          img: [
            {
              img: lipids_screen2_home4,
              alt: "dummy lipid text 1",
              classes: "avocado",
              label: "Avocado",
            },
          ],
          answerKey: "rd2",
          radioOptions: [
            {
              id: "rd1",
              disabled: false,
              text: "Saturated",
              type: "Saturated",
            },
            {
              id: "rd2",
              disabled: false,
              text: "Unsaturated",
              type: "Unsaturated",
            },
          ],
        },
        {
          id: "cd_rd_5",
          classes: "btm_cd_rd",
          heading:
            "Classify the example shown as saturated or unsaturated fats.",
          img: [
            {
              img: lipids_screen2_home5,
              alt: "dummy lipid text 1",
              classes: "browines",
              label: "Browines",
            },
          ],
          answerKey: "rd1",
          radioOptions: [
            {
              id: "rd1",
              disabled: false,
              text: "Saturated",
              type: "Saturated",
            },
            {
              id: "rd2",
              disabled: false,
              text: "Unsaturated",
              type: "Unsaturated",
            },
          ],
        },
      ],
    },
    {
      id: "sd_11",
      isActive: false,
      nextNode: "sd_2",
      isVisited: false,
      currentScreen: 1,
      totalScreen: 3,
      prevNode: "sd_2",
      compoundData: [
        {
          heading:
            "Nucleic acids are composed of nucleotides that store genetic code for cells. They are formed from the atoms of carbon, hydrogen, oxygen, nitrogen, and phosphorus. Nucleotides consist of three main parts: a 5-carbon sugar, a phosphate group, and a nitrogen base.",
          img: [{ src: nucleic_acid, alt: "alt dummy" }],
          label: [
            { value: "NH", classes: "lbl1" },
            { value: "2", classes: "lbl2" },
            { value: "H", classes: "lbl3" },
            { value: "C", classes: "lbl4" },
            { value: "N", classes: "lbl5" },
            { value: "C", classes: "lbl6" },
            { value: "C", classes: "lbl7" },
            { value: "N", classes: "lbl8" },
            { value: "N", classes: "lbl9" },
            { value: "C", classes: "lbl10" },
            { value: "N", classes: "lbl11" },
            { value: "C", classes: "lbl12" },
            { value: "H", classes: "lbl13" },

            { value: "O", classes: "lbl14" },
            { value: "O", classes: "lbl15" },
            { value: "P", classes: "lbl16" },
            { value: "O", classes: "lbl17" },
            { value: "CH", classes: "lbl18" },
            { value: "2", classes: "lbl19" },
            { value: "O", classes: "lbl20" },

            { value: "O", classes: "lbl21" },
            { value: "H", classes: "lbl22" },
            { value: "H", classes: "lbl23" },
            { value: "H", classes: "lbl24" },
            { value: "H", classes: "lbl25" },
            { value: "OH", classes: "lbl26" },
            { value: "OH", classes: "lbl27" },
            { value: "O", classes: "lbl28" },
          ],
          imgLabel: [
            { value: "Nitrogenous <br> bases", classes: "imgLbl1" },
            { value: "Phosphate <br> group", classes: "imgLbl2" },
            { value: "Sugar", classes: "imgLbl3" },
          ],
        },
        {
          heading: [
            {
              classes: "heading1",
              txt: "<strong> RNA (ribonucleic acid) </strong> <br> Long, single strand composed of <br> cytosine, guanine, adenine, and uracil",
            },
            {
              classes: "heading2",
              txt: "<strong>DNA (deoxyribonucleic acid) </strong> <br> Double helix composed of cytosine,<br> guanine, adenine, and thymine",
            },
          ],
          label: [
            { value: "NH", classes: "lbl1" },
            { value: "2", classes: "lbl2" },
            { value: "C", classes: "lbl3" },
            { value: "C", classes: "lbl4" },
            { value: "C", classes: "lbl5" },
            { value: "C", classes: "lbl6" },
            { value: "N", classes: "lbl7" },
            { value: "H", classes: "lbl8" },
            { value: "H", classes: "lbl9" },
            { value: "O", classes: "lbl10" },
            { value: "C", classes: "lbl11" },
            { value: "N", classes: "lbl12" },
            { value: "C", classes: "lbl13" },
            { value: "C", classes: "lbl14" },
            { value: "N", classes: "lbl15" },
            { value: "N", classes: "lbl16" },
            { value: "C", classes: "lbl17" },
            { value: "C", classes: "lbl18" },
            { value: "N", classes: "lbl19" },
            { value: "H", classes: "lbl20" },
            { value: "C", classes: "lbl21" },
            { value: "N", classes: "lbl22" },
            { value: "H", classes: "lbl23" },
            { value: "H", classes: "lbl24" },
            { value: "H", classes: "lbl25" },
            { value: "O", classes: "lbl26" },
            { value: "H", classes: "lbl27" },
            { value: "N", classes: "lbl28" },
            { value: "C", classes: "lbl29" },
            { value: "N", classes: "lbl30" },
            { value: "N", classes: "lbl31" },
            { value: "C", classes: "lbl32" },
            { value: "C", classes: "lbl33" },
            { value: "N", classes: "lbl34" },
            { value: "NH", classes: "lbl35" },
            { value: "C", classes: "lbl36" },
            { value: "H", classes: "lbl37" },
            { value: "H", classes: "lbl38" },
            { value: "2", classes: "lbl39" },
            { value: "C", classes: "lbl40" },
            { value: "H", classes: "lbl41" },

            { value: "H", classes: "lbl42" },
            { value: "H", classes: "lbl43" },
            { value: "H", classes: "lbl44" },
            { value: "C", classes: "lbl45" },
            { value: "C", classes: "lbl46" },
            { value: "C", classes: "lbl47" },
            { value: "N", classes: "lbl48" },
            { value: "N", classes: "lbl49" },
            { value: "O", classes: "lbl50" },
            { value: "C", classes: "lbl51" },
            { value: "O", classes: "lbl52" },

            { value: "H", classes: "lbl53" },
            { value: "H", classes: "lbl54" },
            { value: "H", classes: "lbl55" },
            { value: "H", classes: "lbl56" },
            { value: "H", classes: "lbl57" },
            { value: "C", classes: "lbl58" },
            { value: "C", classes: "lbl59" },
            { value: "C", classes: "lbl60" },
            { value: "N", classes: "lbl61" },
            { value: "N", classes: "lbl62" },
            { value: "O", classes: "lbl63" },
            { value: "C", classes: "lbl64" },
            { value: "3", classes: "lbl65" },
            { value: "C", classes: "lbl66" },
            { value: "O", classes: "lbl67" },
            { value: "H", classes: "lbl68" },

            { value: "C", classes: "lbl69" },
            { value: "C", classes: "lbl70" },
            { value: "N", classes: "lbl71" },
            { value: "N", classes: "lbl72" },
            { value: "C", classes: "lbl73" },
            { value: "C", classes: "lbl74" },
            { value: "C", classes: "lbl75" },
            { value: "N", classes: "lbl76" },
            { value: "H", classes: "lbl77" },
            { value: "H", classes: "lbl78" },
            { value: "NH", classes: "lbl79" },
            { value: "2", classes: "lbl80" },
            { value: "N", classes: "lbl81" },

            { value: "H", classes: "lbl82" },
            { value: "C", classes: "lbl83" },
            { value: "N", classes: "lbl84" },
            { value: "N", classes: "lbl85" },

            { value: "C", classes: "lbl86" },
            { value: "C", classes: "lbl87" },
            { value: "C", classes: "lbl88" },
            { value: "N", classes: "lbl89" },
            { value: "N", classes: "lbl90" },
            { value: "C", classes: "lbl91" },
            { value: "O", classes: "lbl92" },
            { value: "H", classes: "lbl93" },
            { value: "H", classes: "lbl94" },
            { value: "N", classes: "lbl95" },
            { value: "H", classes: "lbl96" },

            { value: "H", classes: "lbl97" },
            { value: "C", classes: "lbl98" },
            { value: "N", classes: "lbl99" },
            { value: "C", classes: "lbl100" },
            { value: "C", classes: "lbl101" },
            { value: "N", classes: "lbl102" },
            { value: "C", classes: "lbl103" },
            { value: "H", classes: "lbl104" },
            { value: "H", classes: "lbl105" },
            { value: "H", classes: "lbl106" },
            { value: "NH", classes: "lbl107" },
            { value: "2", classes: "lbl108" },
            { value: "O", classes: "lbl109" },

            { value: "C", classes: "lbl110" },
            { value: "G", classes: "lbl111" },
            { value: "A", classes: "lbl112" },
            { value: "U", classes: "lbl113" },
            { value: "C", classes: "lbl114" },
            { value: "G", classes: "lbl115" },
            { value: "A", classes: "lbl116" },
            { value: "T", classes: "lbl117" },
            { value: "Cytosine", classes: "lbl118" },
            { value: "Guanine", classes: "lbl119" },
            { value: "Adenine", classes: "lbl120" },
            { value: "Uracil", classes: "lbl121" },
            { value: "Cytosine", classes: "lbl122" },
            { value: "Guanine", classes: "lbl123" },
            { value: "Adenine", classes: "lbl124" },
            { value: "Thymine", classes: "lbl125" },

            { value: "Nitrogenous <br> bases", classes: "lbl126" },
            { value: "Base pair", classes: "lbl127" },
            { value: "Sugar <br> phosphate <br> backbone", classes: "lbl128" },
          ],
          arrows: [
            { src: right_arrow, classes: "right_arrow" },
            { src: left_arrow, classes: "left_arrow" },
            {
              src: center_arrow,
              classes: "center_arrow",
            },
          ],
          img: [
            { src: nucleic_left, alt: "dummmy1", classes: "imgLeft" },
            { src: nucleic_right, alt: "dummy 2", classes: "imgRight" },
          ],
        },
        {
          heading: [
            {
              classes: "heading3",
              txt: "Nucleic acids in DNA are made of three basic components: a deoxyribose (5-carbon) sugar, a phosphate group, and a nitrogenous base. There are four nitrogenous bases in DNA: adenine, thymine, guanine, and cytosine, which are held together by weak hydrogen bonds in sequences forming proteins.",
            },
            {
              classes: "heading4",
              txt: "Link the pieces below to form a DNA strand with four base pairs.",
            },
          ],
          imgDD: [{ src: nucleic_acid_dd, alt: "dummmy text area" }],
          dragZone: [
            {
              id: "drag1",
              type: 4,
              alt: "C DNA",
              atomName: "Cytosine",
            },
            {
              id: "drag2",
              type: 1,
              alt: "A DNA",
              atomName: "Adenine",
            },
            {
              id: "drag3",
              type: 3,
              alt: "G DNA",
              atomName: "Guanine",
            },
            {
              id: "drag4",
              type: 2,
              alt: "T DNA",
              atomName: "Thymine",
            },
          ],
          answerKeyValue: [
            {
              id: "akv_1",
              case1: [
                { id: 1, classes: "a_atom_after" },
                { id: 2, classes: "t_atom_after_rotate" },
              ],
              case2: [
                { id: 2, classes: "t_atom_after" },
                { id: 1, classes: "a_atom_after_rotate" },
              ],
            },
            {
              id: "akv_2",
              case1: [
                { id: 4, classes: "c_atom_after" },
                { id: 3, classes: "g_atom_after_rotate" },
              ],
              case2: [
                { id: 3, classes: "g_atom_after" },
                { id: 4, classes: "c_atom_after_rotate" },
              ],
            },
          ],
          dropZone: [
            {
              id: "drop1",
              beforeClass: "before",
              afterClass: [
                { id: 1, classes: "a_atom_after" },
                { id: 2, classes: "t_atom_after_rotate" },
              ],
              afterClassShade: "",
              tag: "1, 2", // 1
              label: "Dropzone 1",
              hidden: false,
              atomName: "Adenine",
              pid: "akv_1",
            },
            {
              id: "drop2",
              beforeClass: "before",
              afterClass: [
                { id: 2, classes: "t_atom_after" },
                { id: 1, classes: "a_atom_after_rotate" },
              ],
              afterClassShade: "t_atom_after_shade",
              tag: "2, 1", // 2
              label: "Dropzone 2",
              hidden: false,
              atomName: "Thymine",
              pid: "akv_1",
            },
            {
              id: "drop3",
              beforeClass: "before",
              afterClass: [
                { id: 4, classes: "c_atom_after" },
                { id: 3, classes: "g_atom_after_rotate" },
              ],
              afterClassShade: "c_atom_after_shade",
              tag: "4, 3", //4
              label: "Dropzone 3",
              hidden: false,
              atomName: "Cytosine",
              pid: "akv_2",
            },
            {
              id: "drop4",
              beforeClass: "before",
              afterClass: [
                { id: 3, classes: "g_atom_after" },
                { id: 4, classes: "c_atom_after_rotate" },
              ],
              afterClassShade: "g_atom_after_shade",
              tag: "3, 4", //3,
              label: "Dropzone 4",
              hidden: false,
              atomName: "Guanine",
              pid: "akv_2",
            },
            {
              id: "drop5",
              beforeClass: "before",
              afterClass: [
                { id: 1, classes: "a_atom_after" },
                { id: 2, classes: "t_atom_after_rotate" },
              ],
              afterClassShade: "",
              tag: "1, 2", // 1,
              label: "Dropzone 5",
              hidden: false,
              atomName: "Adenine",
              pid: "akv_3",
            },
            {
              id: "drop6",
              beforeClass: "before",
              afterClass: [
                { id: 2, classes: "t_atom_after" },
                { id: 1, classes: "a_atom_after_rotate" },
              ],
              afterClassShade: "",
              tag: "2, 1", // 2,
              label: "Dropzone 6",
              hidden: false,
              atomName: "Thymine",
              pid: "akv_3",
            },
            {
              id: "drop7",
              beforeClass: "before",
              afterClass: [
                { id: 4, classes: "c_atom_after" },
                { id: 3, classes: "g_atom_after_rotate" },
              ],
              afterClassShade: "",
              tag: "4, 3", //4,
              label: "Dropzone 7",
              hidden: false,
              atomName: "Cytosine",
              pid: "akv_4",
            },
            {
              id: "drop8",
              beforeClass: "before",
              afterClass: [
                { id: 3, classes: "g_atom_after" },
                { id: 4, classes: "c_atom_after_rotate" },
              ],
              afterClassShade: "",
              tag: "3, 4", //3
              label: "Dropzone 8",
              hidden: false,
              atomName: "Guanine",
              pid: "akv_4",
            },
            {
              id: "drop9",
              beforeClass: "before",
              afterClass: [
                { id: 1, classes: "a_atom_after" },
                { id: 2, classes: "t_atom_after_rotate" },
              ],
              afterClassShade: "",
              tag: "1, 2", //1
              label: "Dropzone 9",
              hidden: false,
              atomName: "Adenine",
              pid: "akv_5",
            },
            {
              id: "drop10",
              beforeClass: "before",
              afterClass: [
                { id: 2, classes: "t_atom_after" },
                { id: 1, classes: "a_atom_after_rotate" },
              ],
              afterClassShade: "",
              tag: "2, 1", //2
              label: "Dropzone 10",
              hidden: false,
              atomName: "Thymine",
              pid: "akv_5",
            },
          ],
          legendArea: [
            {
              id: "la_1",
              value: "",
              label: "Phosphate Group",
              classes: "yellow",
            },
            { id: "la_2", value: "", label: "Sugar", classes: "pink" },
            { id: "la_3", value: "A", label: "Adenine", classes: "green" },
            { id: "la_4", value: "T", label: "Thymine", classes: "blue" },
            { id: "la_5", value: "G", label: "Guanine", classes: "darkblue" },
            { id: "la_6", value: "C", label: "Cytosine", classes: "red" },
          ],
          leftDropBox: [
            {
              id: "item1",
              classes: "a_atom",
              classes1: "a_atom_shade",
              tag: "A",
              tagClass: "tag1",
            },
            {
              id: "item2",
              classes: "t_atom",
              classes1: "t_atom_shade",
              tag: "T",
              tagClass: "tag2",
            },
            {
              id: "item3",
              classes: "g_atom",
              classes1: "",
              tag: "G",
              tagClass: "tag3",
            },
            {
              id: "item4",
              classes: "c_atom",
              classes1: "c_atom_shade",
              tag: "C",
              tagClass: "tag4",
            },
          ],
        },
      ],
    },
    {
      id: "sd_12",
      isActive: false,
      isVisited: false,
      currentScreen: 1,
      totalScreen: 2,
      prevNode: "sd_2",
      nextNode: "sd_13",
      compoundData: [
        {
          heading:
            "<strong> Proteins </strong> are composed of amino acid monomers consisting of carbon, hydrogen, oxygen, and nitrogen atoms. They are necessary for growth and repair of tissues and are found in the cell membrane, where they serve several important functions as enzymes, transporters, and more.",
          classes: "heading",
          img: [
            {
              img: protein_home_1,
              alt: "dummy lipid text 1",
              classes: "protein_screen1",
            },
          ],
          labels: [{ classes: "imglbl1", name: "Phospholipid Bilayer" }],
        },
        {
          labels: [
            { classes: "imglbl1", name: "Primary" },
            { classes: "imglbl2", name: "Secondary" },
            { classes: "imglbl3", name: " Tertiary " },
            { classes: "imglbl4", name: " Quaternary" },
            { classes: "imglbl5", name: "A" },
            { classes: "imglbl6", name: "E" },
            { classes: "imglbl7", name: "M" },
            { classes: "imglbl8", name: "L" },
            { classes: "imglbl9", name: "H" },
            { classes: "imglbl10", name: "D" },
            { classes: "imglbl11", name: "I" },
            { classes: "imglbl12", name: "L" },
            { classes: "imglbl13", name: "Q" },
          ],
          classes: "heading",
          heading:
            "There are four levels of protein structure, starting with a primary structure of how the amino acids are linked and ending with the quaternary structure, which describes the position and orientation in a complex.",
          img: [
            {
              img: protein_home_2,
              alt: "dummy protein text 1",
              classes: "protein_screen2",
            },
          ],
        },
      ],
    },
    {
      id: "sd_13",
      prevNode: "sd_2",
      isActive: false,
      isVisited: false,
      compoundsMaster: [
        {
          heading: "Click on the buttons below for an interactive experience.",
          img: [
            {
              id: "sd_14",
              src: [protein_subs_screen1_1, protein_subs_screen1_2],
              label: "Build peptide bond",
              classes: "comp_img_5",
              classesBtn: "comp_btn_img_5",
              atomsNames: [
                "HO",
                "C",
                "C",
                "H",
                "H",
                "O",
                "H",
                "H",
                "N",
                "+",
                "HO",
                "C",
                "C",
                "H",
                "H",
                "N",
                "H",
                "O",
                "H",
              ],
            },
            {
              id: "sd_15",
              src: [protein_subs_screen2],
              label: "Break peptide bond",
              classes: "comp_img_6",
              classesBtn: "comp_btn_img_6",
              atomsNames: [
                "HO",
                "C",
                "C",
                "H",
                "H",
                "O",
                "H",
                "O",
                "H",
                "C",
                "C",
                "N",
                "CH",
                "H",
                "H",
                "N",
                "3",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "sd_14",
      isActive: false,
      prevNode: "sd_13",
      isVisited: false,
      isSiblings: true,
      currentScreen: 1,
      totalScreen: 1,
      videoSrc: video1,
      alt: "This is dummy video 1 alt",
      liveTxt: "This is dummy video 1 live text",
      compoundData: [
        {
          classes: "heading",
          heading:
            "Proteins form polypeptide bonds by combining an amino (NH2) group with a carboxyl (COOH) group through dehydration. Dehydration reactions require energy, but release water as new bonds are formed.",
          label: [
            { name: "Peptide bond", classes: "peptide_bond" },
            { name: "Water", classes: "water" },
            { name: "Protein", classes: "protein" },
          ],
        },
      ],
    },
    {
      id: "sd_15",
      isActive: false,
      prevNode: "sd_13",
      isVisited: false,
      isSiblings: true,
      currentScreen: 1,
      totalScreen: 1,
      videoSrc: video2,
      alt: "This is dummy video 2 alt",
      liveTxt: "This is dummy video 2 live text",
      compoundData: [
        {
          label: [
            { name: "Glycine", classes: "glycine" },
            { name: "Alanine", classes: "alanine" },
            { name: "Dipeptide", classes: "dipeptide" },
          ],
          classes: "heading",
          heading:
            "Proteins break polypeptide bonds by adding water. The added water separates the amino (NH2) group from the carboxyl (COOH) group through condensation. Hydrolysis (condensation) reactions break down the molecules and tend to release energy.",
        },
      ],
    },
  ],

  allAtomInfo: [
    {
      id: "aai_1",
      type: "glycine",
      name: "Glycine",
      imgSrc: glycine,
      imgSrc1: glycine_1,
      alt: "This is dummy text for Glycine",
      classes: "",
      labelArr: [
        "H",
        "N",
        "..",
        "H",
        "C",
        "H",
        "H",
        "O",
        ":",
        ":",
        "C",
        "O",
        "..",
        "..",
        "H",
      ],
    },
    {
      id: "aai2",
      type: "peptide_bond",
      name: "Peptide Bond",
      imgSrc: peptide_bond,
      alt: "This is dummy text for Peptide Bond",
      classes: "",
      labelArr: [
        "HO",
        "C",
        "O",
        "R",
        "C",
        "H",
        "N",
        "H",
        "C",
        "O",
        "C",
        "H",
        "N",
        "H",
        "H",
        "R",
        "+",
        "H",
        "2",
        "O",
        "",
      ],
    },
    {
      id: "aai3",
      type: "dipeptide1",
      name: "Dipeptide",
      imgSrc: dipeptide_part1,
      alt: "This is dummy text for Dipeptide",
      classes: "",
      labelArr: ["H", "H", "N", "H", "C", "H", "O", "C"],
    },
    {
      id: "aai4",
      type: "dipeptide2",
      name: "Dipeptide",
      imgSrc: dipeptide_part2,
      alt: "This is dummy text for Dipeptide",
      classes: "",
      labelArr: ["N", "H", "C", "C", "O", "CH", "3", "OH", "H"],
    },
    {
      id: "aai5",
      type: "hydroxide",
      name: "Hydroxide",
      classes: "",
      alt: "This is dummy text for Hydroxide",
      labelArr: ["O", "H"],
    },
    {
      id: "aai6",
      type: "alanine",
      name: "alanine",
      imgSrc: alanine,
      label: "Build polypeptide",
      classes: "",
      labelArr: ["H", "H", "N", "C", "H", "CH", "3", "C", "O", "OH"],
      alt: "This is dummy text for alanine",
    },

    {
      id: "aai7",
      type: "vitamin_a",
      name: "Vitamin A",
      imgSrc: lipids_1,
      label: "Vitamin A",
      classes: "",
      labelArr: ["HC", "3", "CH", "3", "HC", "3", "OH", "CH", "3", "HC", "3"],
      alt: "This is dummy text for Vitamin A",
    },
    {
      id: "aai9",
      type: "monosaccharides",
      name: "Monosaccharides",
      imgSrc: compoundsMaster,
      label: "Monosaccharides",
      classes: "",
      labelArr: ["CH", "2", "OH", "O", "HO", "OH", "OH", "OH"],
      alt: "This is dummy text for monosaccharides",
    },
    {
      id: "aai10",
      type: "disaccharide",
      name: "Disaccharide",
      imgSrc: compounds_ms2,
      label: "Disaccharide",
      alt: "This is dummy text for disaccharide",
      classes: "",
      labelArr: [
        "CH",
        "2",
        "OH",
        "O",
        "HO",
        "OH",
        "OH",
        "OH",
        "CH",
        "2",
        "OH",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "O",
        "OH",
        "CH",
        "2",
        "OH",
        "O",
      ],
    },
    {
      id: "aai11",
      type: "polysaccharides",
      name: "Polysaccharides",
      imgSrc: compoundsMaster3,
      label: "polysaccharides",
      alt: "This is dummy text for polysaccharides",
      classes: "",
      labelArr: [
        "CH",
        "2",
        "OH",
        "O",
        "OH",
        "OH",
        "OH",
        "OH",
        "CH",
        "2",
        "OH",
        "O",
        "O",
        "O",
        "O",
        "CH",
        "2",
        "OH",
        "OH",
        "OH",
        "O",
        "O",
      ],
    },
    {
      id: "aai12",
      type: "unsaturatedFattyAcid",
      name: "Unsaturated Fatty Acid",
      imgSrc: lipids_screen2_home2,
      label: "Unsaturated Fatty Acid",
      alt: "This is dummy text for unsaturated fatty acid",
      classes: "",
      labelArr: [
        "HO",
        "O",
        "C",
        "C",
        "C",
        "C",
        "C",
        "C",
        "C",
        "C",
        "C",
        "C",
        "C",
        "C",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
      ],
    },
    {
      id: "aai13",
      type: "saturatedFattyAcid",
      name: "Saturated Fatty Acid",
      imgSrc: lipids_screen2_home1,
      label: "Saturated Fatty Acid",
      alt: "This is dummy text for saturated fatty acid",
      classes: "",
      labelArr: [
        "HO",
        "O",
        "C",
        "C",
        "C",
        "C",
        "C",
        "C",
        "C",
        "C",
        "C",
        "C",
        "C",
        "C",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
        "H",
      ],
    },
    {
      id: "aai14",
      type: "vitamin_d",
      name: "vitamin D",
      imgSrc: vitamin_d,
      label: "vitamin_d",
      alt: "This is dummy text for vitamin D",
      classes: "",
      labelArr: [
        "H",
        "3",
        "C",
        "CH",
        "3",
        "H",
        "CH",
        "3",
        "CH",
        "3",
        "HO",
        "CH",
        "2",
        "H",
      ],
    },
    {
      id: "aai15",
      type: "glycerol",
      name: "Glycerol",
      imgSrc: glycine_m,
      label: "Glycine",
      classes: "",
      labelArr: ["OH", "OH", "HO"],
      alt: "This is dummy text for Glycine",
    },
    {
      id: "aai16",
      type: "glycogenTypes2",
      name: "Glycogen",
      imgSrc: compoundsMaster_item2,
      label: "Glycogen",
      classes: "",
      alt: "This is dummy text for Glycogen",
      labelArr: [
        "CH",
        "2",
        "OH",
        "O",
        "OH",
        "HO",
        "OH",
        "O",
        "CH",
        "2",
        "OH",
        "O",
        "OH",
        "HO",
        "OH",
      ],
    },
    {
      id: "aai17",
      type: "glycogenTypes3",
      name: "Glycogen",
      imgSrc: compoundsMaster_item3,
      label: "Glycogen",
      alt: "This is dummy text for Glycogen",
      classes: "",
      labelArr: [
        "CH",
        "2",
        "OH",
        "O",
        "OH",
        "HO",
        "OH",
        "O",
        "CH",
        "2",
        "OH",
        "O",
        "OH",
        "HO",
        "OH",
        "O",
        "CH",
        "2",
        "OH",
        "HO",
        "O",
        "O",
      ],
    },
    {
      id: "aai17",
      type: "glycogenTypes4",
      name: "Glycogen",
      imgSrc: compoundsMaster_item4,
      label: "Glycogen",
      classes: "",
      alt: "This is dummy text for Glycogen",
      labelArr: [
        "CH",
        "2",
        "OH",
        "O",
        "OH",
        "HO",
        "OH",
        "O",
        "CH",
        "2",
        "OH",
        "O",
        "OH",
        "HO",
        "OH",
        "O",
        "CH",
        "2",
        "OH",
        "O",
        "OH",
        "HO",
        "OH",
        "O",
        "CH",
        "2",
        "OH",
        "O",
        "OH",
      ],
    },
  ],

  instructionBoxContent:
    "You will examine the different types of biomolecules on the following screens. Let’s begin.",

  InfoBoxContent:
    "Follow the instructions to explore the properties of biomolecules.",
  rightAreaTextDescription:
    "Choose the puzzle piece that has the correct word to make the sentence true.",
  buttonLabels: { ...globalDataSet.buttonLabels },
  completionPopup: {
    ...globalDataSet.completionPopup,
    content: "You have successfully explored the properties of biomolecules!",
  },
  resetLiveText: globalDataSet.resetLiveText,
  resetMsgContent: globalDataSet.resetPopupText,
  correctToastMsg: globalDataSet.correctToastMessage,
  incorrectToastMsg: globalDataSet.incorrectToastMessage,
};

export default data;
