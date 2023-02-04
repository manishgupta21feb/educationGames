import { connect } from "react-redux";
import Toast from "../../app/components/Toast";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  id: "te_success_toast",
  toastType: "positive",
  content: data.toastMsg.correct,
  iconOnly: true,
  buttonText:
    state.selectQuestionIndex == 2
      ? data.buttonLabels.finish
      : data.buttonLabels.close,
  buttonLabel:
    state.selectQuestionIndex == 2
      ? data.buttonLabels.finish
      : data.buttonLabels.close,
  resetBtnState: state.resetBtnState,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.toggleToastMessage(false));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  onAutoHide: () => {
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, matchDispatch)(Toast);
