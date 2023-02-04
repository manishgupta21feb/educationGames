import globalConfig from "../../app/data";
const buttonLabels = { ...globalConfig.buttonLabels };

const data = {
  buttonNo: buttonLabels.no,
  buttonYes: buttonLabels.yes,
  infoText: buttonLabels.info,
  resetText: buttonLabels.reset,
  buttonNext: buttonLabels.continue,
  buttonStart: buttonLabels.start,
  buttonClose: buttonLabels.close,
  buttonFinish: buttonLabels.finish,
  resetConfirmationText: globalConfig.resetLiveText,

  instructionBoxContent:
    "DNA technology combines DNA molecules from two different species into a new DNA molecule. This new recombined DNA molecule is then inserted into a host organism to produce new genetic combinations. Science, medicine, agriculture, and many other fields benefit from this technology.",
  InfoBoxContent:
    "Explore each of the different kinds of DNA technology by clicking on an option.",
  resetMsgContent: globalConfig.resetPopupText,
  mainimgAlt:
    "At center, a scientist with a blonde ponytail, goggles, and a white lab coat holds a brown clipboard surrounded by DNA molecules on a blue background.",

  mcqData: [
    {
      id: "Polymerase-chain-reaction",
      heading: "Polymerase chain reaction",

      imageClass: "Polymerase-chain-reaction",
      introductionHeading:
        "PCR is a technique used to make millions of copies of a specific DNA region. This process relies on <i>Taq</i> polymerase and primers to make copies of a target region. PCR is conducted in a test tube using a thermal cycler rather than inside of an organism. PCR is used routinely in DNA cloning, forensic analysis, and medical diagnostics.",

      alldata: [
        { id: "nucleotide", label: "Nucleotide" },
        { id: "original_dna", label: "Original DNA" },
        { id: "dna_primer", label: "DNA Primer" },
        { id: "denaturation", label: "Denaturation" },
        { id: "annealing", label: "Annealing" },
        { id: "extension", label: "Extension" },
        { id: "item1", label: "5'" },
        { id: "item2", label: "5'" },
        { id: "item3", label: "5'" },
        { id: "item4", label: "5'" },
        { id: "item5", label: "5'" },
        { id: "item6", label: "5'" },
        { id: "item7", label: "5'" },
        { id: "item8", label: "5'" },
        { id: "item9", label: "5'" },
        { id: "item10", label: "5'" },

        { id: "item11", label: "3'" },
        { id: "item12", label: "3'" },
        { id: "item13", label: "3'" },
        { id: "item14", label: "3'" },
        { id: "item15", label: "3'" },
        { id: "item16", label: "3'" },
        { id: "item17", label: "3'" },
        { id: "item18", label: "3'" },
        { id: "item19", label: "3'" },
        { id: "item20", label: "3'" },
      ],

      imageAlt:
        "PCR model using purple lines to show a double-stranded piece of DNA denatured and copied, the copies are shown using orange and light purple lines ",
    },
    {
      id: "Gel-electrophoresis",
      heading: "Gel electrophoresis",
      imageClass: "Gel-electrophoresis",
      introductionHeading:
        "Gel electrophoresis is a technique used to separate DNA fragments by size. Samples are inserted into wells at one end of the gel, and an electric current pulls them through the gel. DNA particles carry a negative charge and move toward the positive electrode. This process helps to analyze the products of PCR as well as protein and antibody interactions.",
      alldata: [
        {
          id: "img-left",
          role: "img",
          arialabel: "A hand on a tablet that shows a DNA fingerprint on it",
        },
        {
          id: "img-right",
          role: "img",
          arialabel:
            "A black box in the background with red & black wires coming out that are attached to opposite sides of a tray of blue gel showing a DNA fingerprint",
        },
      ],
    },
    {
      id: "Genetic-engineering",
      heading: "Genetic engineering",
      imageClass: "Genetic-engineering",
      introductionHeading:
        "Genetic engineering is the process of recombining DNA to alter the genetic makeup of organisms. Humans have manipulated genomes through selective breeding for years. The process of genetic engineering reaches into and creates new DNA, which is then passed on to new generations to enhance or inhibit certain traits.",
      alldata: [
        { id: "bigger_fruit", label: "Bigger fruit" },
        { id: "sweeter_fruit", label: "Sweeter fruit" },
        { id: "selective_breeding", label: "Selective breeding" },

        { id: "bigger_sweeter_fruit", label: "Bigger, sweeter fruit" },
      ],
      imageAlt:
        "Diagram of a big, red fruit selectively bred with a sweet, red fruit results in bigger, sweeter, red fruit offspring; a DNA molecule is on the right.",
    },
  ],

  resetLiveText: globalConfig.resetLiveText,
  rightMsg: globalConfig.correctToastMessage,
  wrongMsg: globalConfig.incorrectToastMessage,

  hotspots: [
    {
      id: "Polymerase-chain-reaction",
      altText: "Polymerase chain reaction",
      serNo: 1,
      text: "Polymerase chain reaction",
    },
    {
      id: "Gel-electrophoresis",
      altText: "Gel electrophoresis",
      serNo: 2,
      text: "Gel electrophoresis",
    },
    {
      id: "Genetic-engineering",
      altText: "Genetic engineering",
      serNo: 3,
      text: "Genetic engineering",
    },
  ],

  mainHeading: "Explore each term shown at the bottom of the screen.",
  activityHeading:
    "Students will examine molecular technologies such as polymerase chain reaction,gel electrophoresis and genetic engineering.",

  messages: [
    {
      type: "reset",
      resetButtonText: buttonLabels.yes,
      buttonContinueText: buttonLabels.no,
      content: globalConfig.resetPopupText,
    },
  ],
};

export default data;
