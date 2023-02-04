import { connect } from "react-redux";
import Toast from "../../app/components/Toast";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  id: "ts1",
  iconOnly: true,
  toastType: "warning",
  buttonText: data.buttonLabels.close,
  buttonLabel: data.buttonLabels.close,
  content: data.incorrectToastMessage,
  buttonText: data.buttonWarning,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.toggleToastMessage(false));
  },

  onAutoHide: () => {
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, matchDispatch)(Toast);
