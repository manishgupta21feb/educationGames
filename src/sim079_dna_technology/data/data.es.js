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

  instructionBoxContent: "La tecnología de ADN combina moléculas de ADN de dos especies distintas en una nueva molécula de ADN. Luego, la molécula de ADN recombinada se introduce en un organismo huésped para producir nuevas combinaciones genéticas. La ciencia, la medicina, la agricultura y muchos otros campos se benefician de esta tecnología.",
  InfoBoxContent: "Haz clic sobre cada opción para explorar los diferentes tipos de tecnología de ADN. ",
  resetMsgContent: globalConfig.resetPopupText,
  mainimgAlt:
    "En el centro, rodeada por moléculas de ADN sobre un fondo azul, hay una científica con el cabello rubio recogido, gafas de seguridad, una bata de laboratorio blanca y una carpeta marrón.",

  mcqData: [
    {
      id: "Polymerase-chain-reaction",
      heading: "Reacción en cadena de la polimerasa",

      imageClass: "Polymerase-chain-reaction",
      introductionHeading:"La reacción en cadena de la polimerasa (PCR, por sus siglas en inglés) es una técnica que se utiliza para hacer millones de copias de una región específica de ADN. Este proceso se vale de la <i>Taq</i> polimerasa y de cebadores para hacer copias de una región objetivo. En vez de realizarse en el interior de un organismo, la PCR se lleva a cabo dentro de un tubo de ensayo colocado en un termociclador. La PCR se utiliza habitualmente en la clonación de ADN, el análisis forense y la diagnosis médica.",


      alldata: [
        { id: "nucleotide", label: "Nucleótido" },
        { id: "original_dna", label: "ADN original" },
        { id: "dna_primer", label: "Cebador de ADN" },
        { id: "denaturation", label: "Desnaturalización" },
        { id: "annealing", label: "Alineamiento" },
        { id: "extension", label: "Extensión" },
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
        "Modelo de la PCR que usa líneas de color púrpura para mostrar un segmento de ADN de doble hebra desnaturalizado y copiado; las copias se identifican con líneas de color naranja y púrpura claro.",
    },
    {
      id: "Gel-electrophoresis",
      heading: "Electroforesis en gel",
      imageClass: "Gel-electrophoresis",
      introductionHeading:
        "La electroforesis en gel es una técnica que se utiliza para separar fragmentos de ADN en función de su tamaño. Las muestras se introducen en pocillos, en uno de los extremos del gel, y una corriente eléctrica las desplaza a través del gel. Las partículas de ADN tienen una carga negativa y se mueven hacia el electrodo positivo. Este proceso ayuda a analizar los productos de la PCR, así como las interacciones de proteínas y anticuerpos.",
      alldata: [
        {
          id: "img-left",
          role: "img",
          arialabel: "Una mano sobre una tableta que muestra una huella de ADN.",
        },
        {
          id: "img-right",
          role: "img",
          arialabel:
            "Al fondo, hay una caja negra de la que salen cables rojos y negros conectados a lados opuestos de una bandeja con gel azul que muestra una huella de ADN.",
        },
      ],
    },
    {
      id: "Genetic-engineering",
      heading: "Ingeniería genética",
      imageClass: "Genetic-engineering",
      introductionHeading:
        "La ingeniería genética es el proceso de recombinar el ADN para alterar la composición genética de un organismo. Durante años, el ser humano ha manipulado los genomas mediante la reproducción selectiva. El proceso de ingeniería genética interviene en el ADN y crea un ADN nuevo que luego se transfiere a nuevas generaciones para mejorar o inhibir ciertas características.",
      alldata: [
        { id: "bigger_fruit", label: "Fruta más grande" },
        { id: "sweeter_fruit", label: "Fruta más dulce" },
        { id: "selective_breeding", label: "Reproducción selectiva" },
        { id: "bigger_sweeter_fruit", label: "Fruta más grande y más dulce" },
      ],
      imageAlt:
        "Diagrama de reproducción selectiva de una fruta roja grande con una fruta roja dulce, cuyo resultado es una fruta roja más grande y dulce; a la derecha, se muestra una molécula de ADN.",
    },
  ],

  resetLiveText: globalConfig.resetLiveText,
  rightMsg: globalConfig.correctToastMessage,
  wrongMsg: globalConfig.incorrectToastMessage,

  hotspots: [
    {
      id: "Polymerase-chain-reaction",
      altText: "Reacción en cadena de la polimerasa",
      serNo: 1,
      text: "Reacción en cadena de la polimerasa",
    },
    {
      id: "Gel-electrophoresis",
      altText: "Electroforesis en gel",
      serNo: 2,
      text: "Electroforesis en gel",
    },
    {
      id: "Genetic-engineering",
      altText: "Ingeniería genética",
      serNo: 3,
      text: "Ingeniería genética",
    },
  ],

  mainHeading: "Explora cada uno de los términos que aparecen en la parte inferior de la pantalla.",
  activityHeading:
    "Los estudiantes examinarán tecnologías moleculares tales como la reacción en cadena de la polimerasa, la electroforesis en gel y la ingeniería genética.",

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
