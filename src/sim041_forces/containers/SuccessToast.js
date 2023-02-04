import { connect } from "react-redux";
import Toast from "../../app/components/Toast";
import EventManager from "../../app/events/manager";

import data from "../data";
import { toggleToastMessage } from "../actions";

const mapState = (state) => ({
  id: "ts2",
  iconOnly: true,
  toastType: "positive",
  content: data.rightMsg,
  buttonLabel: data.buttonClose,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(toggleToastMessage(false));
  },

  onAutoHide: () => {
    dispatch(toggleToastMessage(false));
  },
});

export default connect(mapState, matchDispatch)(Toast);
