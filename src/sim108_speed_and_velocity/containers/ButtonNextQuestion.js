import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { common, thunks, selectAnswerOption } from "../actions";

const mapState = (state) => {
  const finish =
    state.setNextValue == 5 &&
    state.questionCountValue ==
      data.mcqScreenoneData[state.selectedQuestion].questionData.length;
  const next =
    state.setNextValue == 3 &&
    state.questionCountValue ==
      data.mcqScreenoneData[state.selectedQuestion].questionData.length;
  return {
    text: finish
      ? data.buttonLabels.finish
      : next
      ? data.buttonLabels.next
      : data.buttonLabels.continue,
    classes: `toast-secondary-button positive ${finish ? "" : "right-arrow"} `,

    id: state.scenarioVisitedValue,
    isPopupActive: !!state.currentPopup.length,
    disabled: state.getNextBtn,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: (e) => {
    EventManager.broadcast("SECONDARY_CLICK");
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    dispatch(thunks.onNextButton());
  },
});

export default connect(mapState, matchDispatch)(Button);