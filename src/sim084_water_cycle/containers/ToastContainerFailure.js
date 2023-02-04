import { connect } from "react-redux";
import Toast from "../../app/components/Toast";

import data from "../data";
import { common, updateToastMsg, answerSubmitted, thunks } from "../actions";

const mapState = (state) => {
  return {
    id: "ft1",
    iconOnly: true,
    toastType: "warning",
    content: data.incorrectToastMessage,
    buttonLabel: data.buttonLabels.close,
    buttonText: data.buttonLabels.close,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(updateToastMsg(""));

    dispatch(common.toggleToastMessage(false));
    setTimeout(() => {
      EventManager.broadcast("SECONDARY_CLICK");
    });
    EventManager.broadcast("STOP_ALL");
  },
  onAutoHide: () => {
    dispatch(updateToastMsg(""));
    dispatch(common.toggleToastMessage(false));
    EventManager.broadcast("STOP_ALL");
  },
});

export default connect(mapState, matchDispatch)(Toast);
