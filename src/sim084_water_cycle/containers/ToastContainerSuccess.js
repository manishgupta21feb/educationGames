import { connect } from "react-redux";
import Toast from "../../app/components/Toast";

import data from "../data";
import { common, updateToastMsg, answerSubmitted } from "../actions";

const mapState = (state) => {
  return {
    id: "st1",
    iconOnly: true,
    toastType: "positive",
    content: data.correctToastMessage,
    buttonLabel: data.buttonLabels.close,
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
