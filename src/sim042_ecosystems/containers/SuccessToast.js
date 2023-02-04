import { connect } from "react-redux";
import Toast from "../../app/components/Toast";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  id: "ts2",
  iconOnly: true,
  toastType: "positive",
  content: data.correctToastMessage,
  buttonText: data.buttonLabels.close,
  buttonLabel: data.buttonLabels.close,
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
