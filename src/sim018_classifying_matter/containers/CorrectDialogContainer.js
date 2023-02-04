import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";
import EventManager from "../../app/events/manager";

import data from "../data";
import { setFeedbackNarration, thunk } from "../actions/activity";
import { resetBtnState, feedbackNarration } from "../reducers/activity";
import { selectOption, updateResetBtnState } from "../actions/activity";

const mapState = (state) => {
  const content = data.classifyingMatterContent.filter(
    (e) => e.id == state.selectedQuestion
  );

  return {
    ...data.dialogData.correct,
    id: "1",
    header: "",
    dialogType: "positive",
    content: state.showStatic ? "" : content[0].correctText,
    resetBtnState: state.resetBtnState,
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunk.generateNextQuestion());
    dispatch(selectOption(""));
    if (resetBtnState) {
      dispatch(updateResetBtnState(false));
    }
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
