import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";

import data from "../data";
import { common, thunks,setNextBtnVideo } from "../actions";

const mapState = (state) => {
  const heading =
    data.mcqScreenoneData[state.selectedQuestion].questionData.length > 1
      ? data.questionHeading
          .replace("-1-", state.questionCountValue)
          .replace(
            "-2-",
            data.mcqScreenoneData[state.selectedQuestion].questionData.length
          )
      : null;


  return {
    heading,
    headingLevel: "2",
    buttonText: data.buttonLabels.submitAnswer,
    isPopupActive: !!state.currentPopup.length,
    question:
      data.mcqScreenoneData[state.selectedQuestion].questionData[state.setMcq]
        .question,

    disabled:
      state.currentPopup.length ||
      !state.selectedAnswerOption ||
      (state.submitAnswer && state.submitButtonPressed),
  };
};

const matchDispatch = (dispatch) => {

  return {
    onClick: () => {
    
      dispatch(setNextBtnVideo(false));
      dispatch(thunks.submitAnswer());
      dispatch(common.toggleToastMessage(true));
      EventManager.broadcast("PRIMARY_CLICK");
    },
  };
};

export default connect(mapState, matchDispatch)(MCQArea);