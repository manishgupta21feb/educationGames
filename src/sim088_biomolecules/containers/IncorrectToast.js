import { connect } from "react-redux";
import Toast from "../../app/components/Toast";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, updateToastMsg } from "../actions";

const mapStateToProps = (state) => {
  let incorrectTxt =
    state.toastMsg == "partialFeedback2"
      ? data.feedback.partialFeedback2
      : state.toastMsg == "partialFeedback1"
      ? data.feedback.partialFeedback1
      : data.feedback.incorrectFeedback;
  return {
    iconOnly: true,
    toastType: "warning",
    id: "toastNegativePT",
    content: incorrectTxt,
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
