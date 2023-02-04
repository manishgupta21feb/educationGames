import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";
import EventManager from "../../app/events/manager";

import data from "../data";
import { setFeedbackNarration, thunk } from "../actions/activity";
import {
  resetBtnState,
  feedbackNarration,
  // selectedOrganisms,
} from "../reducers/activity";
import {
  selectOption,
  resetOrganisms,
  updateResetBtnState,
} from "../actions/activity";
import { togglePopup } from "../actions";

const mapState = (state) => {
  const content = data.ecosystemContent.filter(
    (e) => e.id == state.selectedQuestion
  );

  return {
    ...data.dialogData.incorrect,
    id: "incorrect-dialog",
    header: "",
    content: state.showStatic ? "" : content[0].incorrectText,
    resetBtnState: state.resetBtnState,
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(resetOrganisms());
    dispatch(togglePopup(4));
    EventManager.broadcast("SECONDARY_CLICK");
    if (resetBtnState) {
      dispatch(updateResetBtnState(false));
    }
    // if (feedbackNarration) {
    //   setFeedbackNarration(false);
    // }
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
