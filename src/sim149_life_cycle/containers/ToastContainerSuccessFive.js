import { connect } from "react-redux";
import Toast from "../../app/components/Toast";

import data from "../data";
import { common, thunks, submitAnswerMcq } from "../actions";

const mapState = (state) => {
  return {
    id: "st2",
    iconOnly: true,
    toastType: "positive",
    content: data.correctToastAfterFive,
    buttonLabel: data.buttonLabels.close,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("STOP_ALL");
    setTimeout(() => {
      EventManager.broadcast("SECONDARY_CLICK");
    });
    dispatch(common.toggleToastMessage(false));
  },
  onAutoHide: () => {
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, matchDispatch)(Toast);
