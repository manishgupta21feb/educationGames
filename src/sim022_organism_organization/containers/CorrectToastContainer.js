import { connect } from "react-redux";
import Toast from "../../app/components/Toast";
import EventManager from "../../app/events/manager";

import data from "../data";
import { toggleToastMessage } from "../actions";

const mapState = (state) => ({
  id: "ts2",
  toastType: "positive",
  content: data.rightMsg,
  iconOnly: true,
  buttonText: data.buttonClose,
  buttonLabel: data.buttonClose,
});
const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(toggleToastMessage(false));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  onAutoHide: () => {
    dispatch(toggleToastMessage(false));
  },
});

export default connect(mapState, matchDispatch)(Toast);
