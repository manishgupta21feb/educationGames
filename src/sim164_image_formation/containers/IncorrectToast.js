import { connect } from "react-redux";
import Toast from "../../app/components/Toast";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, updateToastMsg } from "../actions";

const mapStateToProps = (state) => {
  const updateMessage = () => {
    let rtnStr = "";
    const _AnswerState = state.getAnswerState;
    if (_AnswerState.every((element) => !element)) {
      rtnStr = data.incorrectToastMsg;
    } else if (!_AnswerState[0] && !_AnswerState[1]) {
      rtnStr = data.partialFeedback[0];
    } else if (!_AnswerState[1] && !_AnswerState[2]) {
      rtnStr = data.partialFeedback[1];
    } else if (!_AnswerState[0] && !_AnswerState[2]) {
      rtnStr = data.partialFeedback[2];
    } else if (!_AnswerState[0]) {
      rtnStr = data.partialFeedback[3];
    } else if (!_AnswerState[1]) {
      rtnStr = data.partialFeedback[4];
    } else if (!_AnswerState[2]) {
      rtnStr = data.partialFeedback[5];
    }
    return rtnStr;
  };
  return {
    iconOnly: true,
    toastType: "warning",
    id: "toastNegativePT",
    content: updateMessage(),
    buttonText: data.buttonLabels.close,
    buttonLabel: data.buttonLabels.close,
  };
};

const matchDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(updateToastMsg(""));
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.toggleToastMessage(false));
  },
  onAutoHide: () => {
    dispatch(updateToastMsg(""));
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapStateToProps, matchDispatchToProps)(Toast);
