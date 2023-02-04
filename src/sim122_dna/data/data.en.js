import globalConfig from "../../app/data/data.en";
import blueDownArrow from '../assets/images/blue-down-arrow.png';
import blueStrand from '../assets/images/blue-strand.png';
import box1 from '../assets/images/box-1.png';
import box2 from '../assets/images/box-2.png';
import box3 from '../assets/images/box-3.png';
import box4 from '../assets/images/box-4.png';
import box5 from '../assets/images/box-5.png';
import greenDownArrow from '../assets/images/green-down-arrow.png';
import greenStrand from '../assets/images/green-strand.png';
import screen3Strand from '../assets/images/screen3-strand.png';
import screen3Strand2 from '../assets/images/screen3-strand2.png';
import screen4Strand from '../assets/images/screen4-strand.png';
import screen4Strand2 from '../assets/images/screen4-strand2.png';
import screen6Strand from '../assets/images/screen6-strand.png';
import strandDraggableA from '../assets/images/strand-draggable-a.png';
import strandDraggableC from '../assets/images/strand-draggable-c.png';
import strandDraggableG from '../assets/images/strand-draggable-g.png';
import strandDraggableU from '../assets/images/strand-draggable-u.png';
import top from '../assets/images/top.png';

const data = {

  // --------------------------------- ** Screen 1 Data ** ---------------------------------  

  //Screen 1 Hotspot
  screen1HotspotData: [
    {
      serNo: 1,
      id: "dna",
      text: "DNA",
      altText: "DNA"
    },
    {
      serNo: 2,
      id: "nucleus",
      text: "Nucleus",
      altText: "Nucleus"
    },
    {
      serNo: 3,
      id: "mrna",
      text: "mRNA",
      altText: "mRNA"
    },
    {
      serNo: 4,
      id: "transcription",
      text: "Transcription",
      altText: "Transcription"
    },
  ],

  //Screen 1 Question
  screen1QuestionText: 'During transcription, DNA is transcribed into mRNA, or messenger ribonucleic acid, so the directions found in DNA can leave the nucleus of the cell. DNA is transcribed in the direction of 5’ to 3’. Each nitrogenous base in the DNA strand is matched with a complementary RNA base. Cytosine is paired with guanine. Adenine is paired with uracil. Remember that RNA uses uracil instead of the thymine used by DNA. Click the hotspots on the image to learn more information about transcription.',

  //Screen 1 Hotspot Text
  screen1HotSpotText: [
    {
      id: 1,
      text: "DNA: the carrier of genetic information present in nearly all organisms; forms a double helix"
    },
    {
      id: 2,
      text: "Nucleus: the organelle where a eukaryotic organism's genetic material is located; the control center of the cell"
    },
    {
      id: 3,
      text: "mRNA: a single-stranded nucleic acid, made of RNA, that is a copy of a specific DNA sequence; created by the cell for transferring the genetic information in DNA to a ribosome to make a protein"
    },
    {
      id: 4,
      text: "Transcription: the process in which a strand of DNA is copied into an RNA strand for the purpose of protein synthesis"
    }
  ],

  //Top Screen Img Text
  topScreenImgText: {
    dna: 'DNA',
    mrna: 'mRNA',
    trna: 'tRNA',
    transcription: 'Transcription',
    mrnatrna: 'mRNA and tRNA',
    protein: 'Protein',
    aminoAcids: 'Amino acids',
    ribosome: 'Ribosome',
    proteinChain: 'Protein chain',
    translation: 'Translation',
  },

  //Screen 1 Transition Text
  screen1TransitionText: "You have explored the common terms used in the process of transcription.",

  // --------------------------------- ** Screen 2 Data ** ---------------------------------  

  // Screen 2 Question Text 1
  screen2QuestionText1: 'Below is a DNA sequence that needs to be translated into a protein for the body.',

  //Screen 2 Question Text 2
  screen2QuestionText2: 'Click on the strand that is ready to be translated into mRNA. Pay attention to the direction of the strand. Translate right to left.',

  //Screen 2 Green Strand Data
  screen2GreenStrandData: [
    {
      class: "data-1",
      text: "G"
    },
    {
      class: "data-2",
      text: "C"
    },
    {
      class: "data-3",
      text: "A"
    },
    {
      class: "data-4",
      text: "T"
    },
    {
      class: "data-5",
      text: "G"
    },
    {
      class: "data-6",
      text: "A"
    },
    {
      class: "data-7",
      text: "C"
    },
    {
      class: "data-8",
      text: "T"
    },
    {
      class: "data-9",
      text: "C"
    },
    {
      class: "data-10",
      text: "A"
    },
    {
      class: "data-11",
      text: "T"
    },
    {
      class: "data-12",
      text: "C"
    },
    {
      class: "data-13",
      text: "C"
    },
    {
      class: "data-14",
      text: "T"
    },
    {
      class: "data-15",
      text: "C"
    },
    {
      class: "data-16",
      text: "T"
    },
    {
      class: "data-17",
      text: "G"
    },
    {
      class: "data-18",
      text: "G"
    },
    {
      class: "data-19",
      text: "A"
    },
    {
      class: "data-20",
      text: "G"
    },
    {
      class: "data-21",
      text: "G"
    },
    {
      class: "data-22",
      text: "T"
    },
    {
      class: "data-23",
      text: "G"
    },
    {
      class: "data-24",
      text: "C"
    },
    {
      class: "data-25",
      text: "G"
    },
    {
      class: "data-26",
      text: "A"
    },
  ],

  //Screen 2 Blue Strand Data
  screen2BlueStrandData: [
    {
      class: "data-1",
      text: "C"
    },
    {
      class: "data-2",
      text: "G"
    },
    {
      class: "data-3",
      text: "T"
    },
    {
      class: "data-4",
      text: "A"
    },
    {
      class: "data-5",
      text: "C"
    },
    {
      class: "data-6",
      text: "T"
    },
    {
      class: "data-7",
      text: "G"
    },
    {
      class: "data-8",
      text: "A"
    },
    {
      class: "data-9",
      text: "G"
    },
    {
      class: "data-10",
      text: "T"
    },
    {
      class: "data-11",
      text: "A"
    },
    {
      class: "data-12",
      text: "G"
    },
    {
      class: "data-13",
      text: "G"
    },
    {
      class: "data-14",
      text: "A"
    },
    {
      class: "data-15",
      text: "G"
    },
    {
      class: "data-16",
      text: "A"
    },
    {
      class: "data-17",
      text: "C"
    },
    {
      class: "data-18",
      text: "C"
    },
    {
      class: "data-19",
      text: "T"
    },
    {
      class: "data-20",
      text: "C"
    },
    {
      class: "data-21",
      text: "C"
    },
    {
      class: "data-22",
      text: "A"
    },
    {
      class: "data-23",
      text: "C"
    },
    {
      class: "data-24",
      text: "A"
    },
    {
      class: "data-25",
      text: "C"
    },
    {
      class: "data-26",
      text: "T"
    },
  ],

  // --------------------------------- ** Screen 3 Data ** ---------------------------------  

  //Screen 3 Question Text
  screen3InstructionText: 'Transcribe the DNA strand into mRNA using the following bases.',

  //Screen 3 Strand 1 Data
  screen3Strand1Data: [
    {
      class: "data-1",
      text: "C"
    },
    {
      class: "data-2",
      text: "G"
    },
    {
      class: "data-3",
      text: "T"
    },
    {
      class: "data-4",
      text: "A"
    },
    {
      class: "data-5",
      text: "C"
    },
    {
      class: "data-6",
      text: "T"
    },
    {
      class: "data-7",
      text: "G"
    },
    {
      class: "data-8",
      text: "A"
    },
    {
      class: "data-9",
      text: "G"
    },
    {
      class: "data-10",
      text: "T"
    },
    {
      class: "data-11",
      text: "A"
    },
    {
      class: "data-12",
      text: "G"
    },
    {
      class: "data-13",
      text: "G"
    },
    {
      class: "data-14",
      text: "A"
    },
    {
      class: "data-15",
      text: "G"
    },
    {
      class: "data-16",
      text: "A"
    },
    {
      class: "data-17",
      text: "C"
    },
    {
      class: "data-18",
      text: "C"
    },
    {
      class: "data-19",
      text: "T"
    },
    {
      class: "data-20",
      text: "C"
    },
    {
      class: "data-21",
      text: "C"
    },
    {
      class: "data-22",
      text: "A"
    },
    {
      class: "data-23",
      text: "C"
    },
    {
      class: "data-24",
      text: "A"
    },
    {
      class: "data-25",
      text: "C"
    },
    {
      class: "data-26",
      text: "T"
    }
  ],

  //Screen 3 Strand 2 Data
  screen3Strand2Data: [
    {
      class: "data-1",
      text: "A"
    },
    {
      class: "data-2",
      text: "U"
    },
    {
      class: "data-3",
      text: "G"
    },
    {
      class: "data-4",
      text: "C"
    },
  ],

  //Screen 3 MCQ Options
  screen3McqOptions: [
    "Uracil is used by DNA instead of thymine.",
    "The body ran out of thymine.",
    "Uracil is used by RNA instead of thymine.",
    "I don’t know why."
  ],

  //Screen 3 MCQ Answer
  screen3McqAnswer: "Uracil is used by RNA instead of thymine.",

  //Screen 3 Question
  screen3QuestionText: "Before you begin, answer the following question: Why is there a U for uracil instead of T for thymine?",

  //Screen 3 Incorrect Message
  screen3IncorrectMsg: "mRNA translates in the 5’ to 3’ direction",

  // --------------------------------- ** Screen 4 Data ** ---------------------------------  

  //Screen 4 Question Text
  screen4QuestionText: "Transcribe the DNA strand into mRNA using the following bases.",

  //Screen 4 Strand 1 Data
  screen4Strand1Data: [
    {
      class: "data-1",
      text: "C"
    },
    {
      class: "data-2",
      text: "G"
    },
    {
      class: "data-3",
      text: "T"
    },
    {
      class: "data-4",
      text: "A"
    },
    {
      class: "data-5",
      text: "C"
    },
    {
      class: "data-6",
      text: "T"
    },
    {
      class: "data-7",
      text: "G"
    },
    {
      class: "data-8",
      text: "A"
    },
    {
      class: "data-9",
      text: "G"
    },
    {
      class: "data-10",
      text: "T"
    },
    {
      class: "data-11",
      text: "A"
    },
    {
      class: "data-12",
      text: "G"
    },
    {
      class: "data-13",
      text: "G"
    },
    {
      class: "data-14",
      text: "A"
    },
    {
      class: "data-15",
      text: "G"
    },
    {
      class: "data-16",
      text: "A"
    },
    {
      class: "data-17",
      text: "C"
    },
    {
      class: "data-18",
      text: "C"
    },
    {
      class: "data-19",
      text: "T"
    },
    {
      class: "data-20",
      text: "C"
    },
    {
      class: "data-21",
      text: "C"
    },
    {
      class: "data-22",
      text: "A"
    },
    {
      class: "data-23",
      text: "C"
    },
    {
      class: "data-24",
      text: "A"
    },
    {
      class: "data-25",
      text: "C"
    },
    {
      class: "data-26",
      text: "T"
    },
  ],

  //Screen 4 Strand 2 Data
  screen4Strand2Data: [
    {
      class: "data-1",
      text: "G"
    },
    {
      class: "data-2",
      text: "C"
    },
    {
      class: "data-3",
      text: "U"
    },
    {
      class: "data-4",
      text: "G"
    },
    {
      class: "data-5",
      text: "A"
    },
    {
      class: "data-6",
      text: "U"
    },
    {
      class: "data-7",
      text: "C"
    },
    {
      class: "data-8",
      text: "A"
    },
    {
      class: "data-9",
      text: "C"
    },
    {
      class: "data-10",
      text: "C"
    },
    {
      class: "data-11",
      text: "C"
    },
    {
      class: "data-12",
      text: "U"
    },
    {
      class: "data-13",
      text: "G"
    },
    {
      class: "data-14",
      text: "A"
    },
    {
      class: "data-15",
      text: "G"
    },
    {
      class: "data-16",
      text: "G"
    },
    {
      class: "data-17",
      text: "G"
    },
    {
      class: "data-18",
      text: "U"
    },
    {
      class: "data-19",
      text: "A"
    },
  ],

  //Screen 4 Transition Text
  screen4TransitionText: "You have successfully transcribed the DNA strand into mRNA.",

  //Screen 4 Draggables
  draggables: [
    {
      srNo: 1,
      source: "A",
      id: "strand-a",
      label: "Strand-a",
      ariaLabel: "Strand A Draggable",
      text: "A"
    },
    {
      srNo: 2,
      source: "B",
      id: "strand-u",
      label: "Strand-u",
      ariaLabel: "Strand U Draggable",
      text: "U"
    },
    {
      srNo: 3,
      source: "C",
      id: "strand-g",
      label: "Strand-g",
      ariaLabel: "Strand G Draggable",
      text: "G"
    },
    {
      srNo: 4,
      source: "D",
      id: "strand-c",
      label: "Strand-c",
      ariaLabel: "Strand C Draggable",
      text: "C"
    }
  ],

  //Screen 4 Dropzones
  dropZones: [
    {
      target: "A",
      id: "dropzone1",
      ariaLabel: 'Strand Dropzone',
      label: 'm r n a sequence position 1 droppable area'
    },
    {
      target: "B",
      id: "dropzone2",
      ariaLabel: 'Strand Dropzone',
      label: 'm r n a sequence position 2 droppable area'
    },
    {
      target: "C",
      id: "dropzone3",
      ariaLabel: 'Strand Dropzone',
      label: 'm r n a sequence position 3 droppable area'
    },
    {
      target: "D",
      id: "dropzone4",
      ariaLabel: 'Strand Dropzone',
      label: 'm r n a sequence position 4 droppable area'
    },
    {
      target: "E",
      id: "dropzone5",
      ariaLabel: 'Strand Dropzone',
      label: 'm r n a sequence position 5 droppable area'
    },
    {
      target: "F",
      id: "dropzone6",
      ariaLabel: 'Strand Dropzone',
      label: 'm r n a sequence position 6 droppable area'
    },
    {
      target: "G",
      id: "dropzone7",
      ariaLabel: 'Strand Dropzone',
      label: 'm r n a sequence position 7 droppable area'
    },
  ],

  //Screen 4 Correct Answer
  correctAnswersArr: [
    {
      id: 'strand-a',
      dropzone: 'dropzone1'
    },
    {
      id: 'strand-c',
      dropzone: 'dropzone2'
    },
    {
      id: 'strand-u',
      dropzone: 'dropzone3'
    },
    {
      id: 'strand-u',
      dropzone: 'dropzone4'
    },
    {
      id: 'strand-g',
      dropzone: 'dropzone5'
    },
    {
      id: 'strand-u',
      dropzone: 'dropzone6'
    },
    {
      id: 'strand-g',
      dropzone: 'dropzone7'
    }
  ],

  // --------------------------------- ** Screen 5 Data ** ---------------------------------  

  //Screen 5 Hotspot Data
  screen5HotspotData: [
    {
      serNo: 1,
      id: "codon",
      text: "Codon",
      altText: "Codon"
    },
    {
      serNo: 2,
      id: "trna",
      text: "tRNA",
      altText: "tRNA"
    },
    {
      serNo: 3,
      id: "protein",
      text: "Protein",
      altText: "Protein"
    },
    {
      serNo: 4,
      id: "ribosomes",
      text: "Ribosomes",
      altText: "Ribosomes"
    },
    {
      serNo: 5,
      id: "translation",
      text: "Translation",
      altText: "Translation"
    },
  ],

  //Screen 5 Question
  screen5QuestionText: "Translation turns the instructions that the mRNA transcribed from the DNA into a protein. This happens in a structure called a ribosome. The mRNA of a gene is read in groups of three bases. These groups of three are codons that correspond to an anticodon of tRNA that is attached to a specific amino acid. The tRNA anticodon lines up with the correct mRNA codon and attaches the amino acid via peptide bonds to a protein. The start codon is always for the amino acid methionine and there are three stop codons. Click the hotspots in this image to learn more information about translation.",

  //Screen 5 Hotspot Text
  screen5HotSpotText: [
    {
      id: 1,
      text: "Codon: a sequence of three nucleotides in mRNA that encodes a specific amino acid or a signal to stop translation"
    },
    {
      id: 2,
      text: "tRNA: an RNA molecule that is responsible for transporting amino acids to the ribosome to be used in the synthesis of proteins"
    },
    {
      id: 3,
      text: "Protein: a biomolecule made of one or more amino acid polymers joined together by peptide bonds and then folded into a complex structure that performs a specific function"
    },
    {
      id: 4,
      text: "Ribosome: a structure made of protein and rRNA that converts messenger RNA sequences into amino acid sequences with the help of transfer RNAs"
    },
    {
      id: 5,
      text: "Translation: the process by which the sequence of nucleotides in a messenger RNA is converted by a ribosome and transfer RNA into a polypeptide with a specific sequence of amino acids"
    }
  ],

  //Screen 5 Transition Text
  screen5TransitionText: "You have explored the common terms used in the process of translation.",

  // --------------------------------- ** Screen 6 Data ** ---------------------------------  

  //Screen 6 Question Text
  screen6QuestionText: "Using the codon chart below, determine the tRNA anticodon that will attach to the mRNA codon and the amino acid that will be attached to the anticodon.",

  //Screen 6 table headings
  screen6TableHeadings: {
    first: 'First Letter',
    second: 'Second Letter',
    third: 'Third Letter'
  },

  //Table Col Sequence
  tableColSequence: [0, 21, 42, 63],

  //Screen 6 table data
  screen6TableData: [
    ["U", "C", "A", "G"],
    [
      ["U", "Phe", "Ser", "Tyr", "Cys", "U"],
      ["Phe", "Ser", "Tyr", "Cys", "U"],
      ["Leu", "Ser", "Stop", "Stop", "A"],
      ["Leu", "Ser", "Stop", "Trp", "G"],
      ["C", "Leu", "Pro", "His", "Arg", "U"],
      ["Leu", "Pro", "His", "Arg", "C"],
      ["Leu", "Pro", "Gln", "Arg", "A"],
      ["Leu", "Pro", "Gln", "Arg", "G"],
      ["A", "Ile", "Thr", "Asn", "Ser", "U"],
      ["Ile", "Thr", "Asn", "Ser", "C"],
      ["Ile", "Thr", "Lys", "Arg", "A"],
      ["Met", "Thr", "Lys", "Arg", "G"],
      ["G", "Val", "Ala", "Asp", "Gly", "U"],
      ["Val", "Ala", "Asp", "Gly", "C"],
      ["Val", "Ala", "Glu", "Gly", "A"],
      ["Val", "Ala", "Glu", "Gly", "G"],
    ],
  ],

  //Screen 6 Box Text 1
  screen6BoxText1: {
    heading: 'AA',
    data: [
      {
        text: 'THR',
        class: 'box-1'
      },
      {
        text: 'PRO',
        class: 'box-3'
      },
      {
        text: 'GLU',
        class: 'box-4'
      },
      {
        text: 'Stop',
        class: 'box-5'
      },
    ]
  },

  //Screen 6 Box Text 2
  screen6BoxText2: {
    heading: 'tRNA',
    data: [
      {
        text: 'UGA',
        class: 'box-1'
      },
      {
        text: 'GGA',
        class: 'box-3'
      },
      {
        text: 'CUC',
        class: 'box-4'
      },
      {
        text: 'ACU',
        class: 'box-5'
      },
    ]
  },

  //Screen 6 Strand Data
  screen6StandData: [
    {
      class: "data-1",
      text: "G"
    },
    {
      class: "data-2",
      text: "C"
    },
    {
      class: "data-3",
      text: "U"
    },
    {
      class: "data-4",
      text: "A"
    },
    {
      class: "data-5",
      text: "G"
    },
    {
      class: "data-6",
      text: "A"
    },
    {
      class: "data-7",
      text: "C"
    },
    {
      class: "data-8",
      text: "U"
    },
    {
      class: "data-9",
      text: "C"
    },
    {
      class: "data-10",
      text: "A"
    },
    {
      class: "data-11",
      text: "U"
    },
    {
      class: "data-12",
      text: "C"
    },
    {
      class: "data-13",
      text: "C"
    },
    {
      class: "data-14",
      text: "U"
    },
    {
      class: "data-15",
      text: "C"
    },
    {
      class: "data-16",
      text: "U"
    },
    {
      class: "data-17",
      text: "G"
    },
    {
      class: "data-18",
      text: "G"
    },
    {
      class: "data-19",
      text: "A"
    },
    {
      class: "data-20",
      text: "G"
    },
    {
      class: "data-21",
      text: "G"
    },
    {
      class: "data-22",
      text: "U"
    },
    {
      class: "data-23",
      text: "G"
    },
    {
      class: "data-24",
      text: "U"
    },
    {
      class: "data-25",
      text: "G"
    },
    {
      class: "data-26",
      text: "A"
    },
  ],

  //Screen 6 Draggable Values
  screen6Draggables: [
    {
      srNo: 1,
      source: "A",
      id: "met",
      ariaLabel: "MET Draggable",
      label: 'MET',
      text: "MET"
    },
    {
      srNo: 2,
      source: "B",
      id: "leu",
      label: 'LEU',
      ariaLabel: "LEU Draggable",
      text: "LEU"
    },
    {
      srNo: 3,
      source: "C",
      id: "his",
      label: 'HIS',
      ariaLabel: "HIS Draggable",
      text: "HIS"
    },
    {
      srNo: 4,
      source: "D",
      id: "uac",
      label: 'UAC',
      ariaLabel: "UAC Draggable",
      text: "UAC"
    },
    {
      srNo: 5,
      source: "E",
      id: "val",
      label: 'VAL',
      ariaLabel: "VAL Draggable",
      text: "VAL"
    },
    {
      srNo: 6,
      source: "F",
      id: "gua",
      label: 'GUA',
      ariaLabel: "GUA Draggable",
      text: "GUA"
    },
    {
      srNo: 7,
      source: "G",
      id: "gac",
      label: 'GAC',
      ariaLabel: "GAC Draggable",
      text: "GAC"
    },
    {
      srNo: 8,
      source: "H",
      id: "cac",
      label: 'CAC',
      ariaLabel: "CAC Draggable",
      text: "CAC"
    },
  ],

  //Screen 6 Dropzones
  screen6DropZones: [
    {
      target: "A",
      id: "dropzone1",
      ariaLabel: 'Strand Dropzone',
      label: "AA sequence position 1 droppable area"
    },
    {
      target: "B",
      id: "dropzone2",
      ariaLabel: 'Strand Dropzone',
      label: "AA sequence position 2 droppable area"
    },
    {
      target: "C",
      id: "dropzone3",
      ariaLabel: 'Strand Dropzone',
      label: "AA sequence position 3 droppable area"
    },
    {
      target: "D",
      id: "dropzone4",
      ariaLabel: 'Strand Dropzone',
      label: "AA sequence position 4 droppable area"
    },
    {
      target: "E",
      id: "dropzone5",
      ariaLabel: 'Strand Dropzone',
      label: "t r n a sequence position 5 droppable area"
    },
    {
      target: "F",
      id: "dropzone6",
      ariaLabel: 'Strand Dropzone',
      label: "t r n a sequence position 6 droppable area"
    },
    {
      target: "G",
      id: "dropzone7",
      ariaLabel: 'Strand Dropzone',
      label: "t r n a sequence position 7 droppable area"
    },
    {
      target: "H",
      id: "dropzone8",
      ariaLabel: 'Strand Dropzone',
      label: "t r n a sequence position 8 droppable area"
    }
  ],

  screen6CorrectAnswersArr: [
    {
      id: 'met',
      dropzone: 'dropzone1'
    },
    {
      id: 'his',
      dropzone: 'dropzone2'
    },
    {
      id: 'leu',
      dropzone: 'dropzone3'
    },
    {
      id: 'val',
      dropzone: 'dropzone4'
    },
    {
      id: 'uac',
      dropzone: 'dropzone5'
    },
    {
      id: 'gua',
      dropzone: 'dropzone6'
    },
    {
      id: 'gac',
      dropzone: 'dropzone7'
    },
    {
      id: 'cac',
      dropzone: 'dropzone8'
    }
  ],

  // --------------------------------- ** Common Data ** ---------------------------------  

  //Img Alt Texts
  imgAltTexts: {
    screen1ImgAltText: 'Screen 1 Img alt text',
    screen2Strand1AltText: 'Screen 2 strand 1 img alt text',
    screen2Strand2AltText: 'Screen 2 strand 2 img alt text',
    screen3Strand1AltText: 'Screen 3 strand 1 img alt text',
    screen3Strand2AltText: 'Screen 3 strand 2 img alt text',
    screen4Strand1AltText: 'Screen 4 strand 1 img alt text',
    screen4Strand2AltText: 'Screen 4 strand 2 img alt text',
    screen5ImgAltText: 'Screen 5 Img alt text',
    screen6Strand1AltText: 'Screen 6 strand 1 img alt text',
    text3: '3 Prime',
    text5: '5 Prime'
  },

  // All Images Data
  allImagesData: [
    blueDownArrow,
    blueStrand,
    box1,
    box2,
    box3,
    box4,
    box5,
    greenDownArrow,
    greenStrand,
    screen3Strand,
    screen3Strand2,
    screen4Strand,
    screen4Strand2,
    screen6Strand,
    strandDraggableA,
    strandDraggableC,
    strandDraggableG,
    strandDraggableU,
    top
  ],

  //Activity Heading
  activityHeading: "Students will determine how the instructions encoded in DNA are translated into a protein that determines gene expression.",

  //Starting Toast Content
  instructionBoxContent: "DNA, or deoxyribonucleic acid, carries the instructions for life. A DNA molecule is divided into genes. Each of these genes carries instructions for a protein that carries out a function of life or a protein that influences the appearance of an organism. These genes code for proteins like insulin, which helps the body’s cells take up sugars from the blood, or proteins that determine traits, such as the color of an organism’s eyes.",

  //infoText
  infoDialogText: "Follow the directions on screen to explore how DNA is used by your body.",

  //Reset Toast Content
  resetMsgContent: globalConfig.resetPopupText,

  //Corret Toast Content
  correctToastMsg: globalConfig.correctToastMessage,

  //Incorrect Toast Content
  incorrectToastMsg: globalConfig.incorrectToastMessage,

  //Completion Popup Texts
  completionPopup: {
    ...globalConfig.completionPopup,
    content: "You have successfully explored DNA and the processes that use DNA."
  },

  //transition Popup Texts
  transitionPopup: {
    ...globalConfig.transitionPopup,
  },

  //dropped Live Text
  dropLiveText: `-1- is dropped at -2-.`,

  //Button Labels  
  buttonLabels: { ...globalConfig.buttonLabels },

};

export default data;
