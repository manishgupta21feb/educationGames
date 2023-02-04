import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, thunk } from "../actions";

const mapState = (state) => {
  const heading = data.questionHeading.replace(
    "-1-",
    state.questionNumberReducer + 1
  );

  return {
    //----> From Data
    headingLevel: "2",
    heading,
    question:
      data.options[state.questionIndexReducer].questions[
        state.questionNumberReducer
      ].question,
    buttonText: data.buttonLabels.submitAnswer,

    //----> From Reducer
    isPopupActive: !!state.currentPopup.length,
    disabled: !state.radioBtnCheckedReducer,
  };
};

const matchDispatch = (dispatch) => {
  return {
    onClick: () => {
      dispatch(thunk.submitAnswerHandler());
      dispatch(common.toggleToastMessage(true));
      EventManager.broadcast("PRIMARY_CLICK");
    },
  };
};

export default connect(mapState, matchDispatch)(MCQArea);
