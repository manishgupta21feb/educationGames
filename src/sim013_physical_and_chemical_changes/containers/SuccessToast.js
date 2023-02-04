import { connect } from "react-redux";
import Toast from "../../app/components/Toast";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  id: "ts2",
  toastType: "positive",
  content: data.rightMsg,
  iconOnly: true,
  buttonText:
    state.selectQuestionIndex == 2 ? data.buttonFinish : data.buttonClose,
  buttonLabel:
    state.selectQuestionIndex == 2 ? data.buttonFinish : data.buttonClose,
  resetBtnState: state.resetBtnState,
});
const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.toggleToastMessage(false));
    dispatch(common.updateResetBtnState(false));
  },

  onAutoHide: () => {
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, matchDispatch)(Toast);
