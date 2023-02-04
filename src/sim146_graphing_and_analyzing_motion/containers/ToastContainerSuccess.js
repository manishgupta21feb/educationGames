import { connect } from "react-redux";
import Toast from "../../app/components/Toast";

import data from "../data";
import { common, thunks, submitAnswerMcq } from "../actions";

const mapState = (state) => {
  return {
    id: "st1",
    iconOnly: true,
    toastType: "positive",
    content: data.correctToastMessage,
    buttonLabel: data.buttonLabels.close,
    visitedHotSpot: state.visitedHotSpot,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.toggleToastMessage(false));

    setTimeout(() => {
      EventManager.broadcast("SECONDARY_CLICK");
    });
  },
  onAutoHide: () => {
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, matchDispatch)(Toast);
