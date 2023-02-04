import globalConfig from "../../app/data/data.es";
const buttonLabels = { ...globalConfig.buttonLabels };
import bananaFull from "../assets/images/pp_banana.png";
import videoBoilingWater from "../assets/videos/pp_boilingwater.mp4";
import videoBakingVineger from "../assets/videos/pp_vin_soda.mp4";
const data = {
    buttonLabels: { ...globalConfig.buttonLabels },
    buttonStart: buttonLabels.start,
    instructionBoxContent:
      "¡Bienvenido al laboratorio de química! Hoy explorarás los cambios físicos y químicos que puede experimentar la materia.",
      buttonInfo: buttonLabels.info,
      buttonReset: buttonLabels.reset,
      infoContent:
        "Selecciona un objeto de la mesa de laboratorio y explora el tipo de cambio que experimenta. Un <b>cambio físico</b> es una transformación que ocurre sin que se forme una sustancia nueva, mientras que un <b>cambio químico</b> conlleva la formación de una sustancia completamente nueva o diferente.",
      buttonClose: buttonLabels.close,
      resetLiveText: globalConfig.resetLiveText,
      completionPopup: {
        ...globalConfig.completionPopup,
        content: "Has contestado correctamente todas las preguntas.",
      },
      questionHeading: "Pregunta: 1 de 3",
      submitAnswer: buttonLabels.submitAnswer,
      buttonFinish: buttonLabels.finish,
      buttonNext: buttonLabels.next,
      warningBoxHeader: globalConfig.incorrectToastMessage,
      rightMsg: globalConfig.correctToastMessage,
      headingLevel1Text:"El estudiante explorará los cambios físicos y químicos que experimenta la materia.",
      questionsData: [
        {
          serialNo: 0,
          id: "Ques1",
          answer: "Physical_change",
          introductionHeading:
            "¿Sabías que estás rodeado de cambios físicos y químicos? Un <b>cambio físico</b> es una transformación que ocurre sin que se forme una sustancia nueva, mientras que un <b>cambio químico</b> conlleva la formación de una sustancia completamente nueva o diferente. Echa un vistazo alrededor de este laboratorio de ciencias.",
          introductionSubHeading: "Selecciona el agua hirviente.",
          questionText:
            "Cuando el agua hierve, ocurre un cambio de estado. El agua se transforma de líquido a gas. De acuerdo a esta información, ¿qué tipo de cambio ocurre cuando hierve el agua?",
          assetType: "Video",
          assetUrl: videoBoilingWater,
          videoSrc:videoBoilingWater,
          label: "Agua hirviente",
          ariaLabel:
            "Un vaso de precipitados con agua hirviente sobre una placa calefactora. Del vaso de precipitados sale vapor. En el agua se observan burbujas. La temperatura programada es de 100 ℃.",
          temperature: "100 ºC",
          alt:"Un vaso de precipitados con agua hirviente sobre una placa calefactora. Del vaso de precipitados sale vapor. En el agua se observan burbujas. La temperatura programada es de 100 ℃.",  
    
        },
        {
          serialNo: 1,
          id: "Ques2",
          answer: "Chemical_change",
          introductionHeading:
            "¡Oh, no! Parece que el plátano de tu maestro empieza a ponerse marrón.",
          introductionSubHeading: "Selecciónalo para descubrir más detalles.",
          questionText:
            "Los plátanos se ponen marrones porque una enzima los descompone y causa un cambio. De acuerdo a esta información, ¿qué tipo de cambio ocurre cuando un plátano se pone marrón?",
          assetType: "Image",
          assetUrl: bananaFull,
          label: "Plátano en descomposición",
          ariaLabel:
            "Un plátano en descomposición. Algunas áreas de la cáscara se han puesto marrones.",
        },
        {
          serialNo: 2,
          id: "Ques3",
          answer: "Chemical_change",
          introductionHeading:
            "Un clásico de los experimentos científicos consiste en mezclar vinagre con bicarbonato de sodio. Veamos qué ocurre al combinar estas sustancias.",
          introductionSubHeading: "Selecciónalas para descubrirlo.",
          questionText:
            "Al combinar las dos sustancias, se forman burbujas y disminuye la temperatura de la mezcla. De acuerdo a esta información, ¿qué tipo de cambio ocurre al mezclar vinagre con bicarbonato de sodio?",
          assetType: "Video",
          assetUrl: videoBakingVineger,
          videoSrc:videoBakingVineger,
          label: "Vinagre",
          label1: "Bicarbonato de sodio",
          ariaLabel:
            "Un vaso de precipitados con vinagre líquido. A su lado hay un plato con polvo de bicarbonato de sodio.",
          alt:"Al añadir una cucharada de bicarbonato de sodio al vinagre líquido, se empiezan a formar burbujas.",  
        },
      ],
      answerOptions: [
        {
          id: "Physical_change",
          disabled: false,
          text: "Cambio físico",
          label: "Cambio físico",
        },
        {
          id: "Chemical_change",
          disabled: false,
          text: "Cambio químico",
          label: "Cambio químico",
        },
      ],
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