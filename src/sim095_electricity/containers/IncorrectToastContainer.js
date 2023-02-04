import { connect } from "react-redux";
import Toast from "../../app/components/Toast";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => {
  return {
    id: "ts1",
    iconOnly: true,
    toastType: "warning",
    content:
      state.circuitName == "series"
        ? state.mcqScreen
          ? data.incorrectToastMessage
          : data.wrongMsgSeries
        : data.wrongMsg,
    buttonText: data.buttonClose,
  };
};
const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("STOP_ALL");
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
