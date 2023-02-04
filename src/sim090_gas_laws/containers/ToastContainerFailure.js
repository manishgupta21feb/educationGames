import { connect } from "react-redux";
import Toast from "../../app/components/Toast";

import data from "../data";
import { common, updateToastMsg, answerSubmitted } from "../actions";

const mapState = (state) => {
  return {
    id: "ft1",
    iconOnly: true,
    toastType: "warning",
    content:
      state.updateToastMsgReducer == "partiallyCorrect"
        ? data.incorrectToastMessageDnD
        : data.incorrectToastMessage,
    buttonLabel: data.buttonLabels.close,
    buttonText: data.buttonLabels.close,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(answerSubmitted(false));
    EventManager.broadcast("STOP_ALL");
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.toggleToastMessage(false));
  },
  onAutoHide: () => {
    dispatch(answerSubmitted(false));
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, matchDispatch)(Toast);
