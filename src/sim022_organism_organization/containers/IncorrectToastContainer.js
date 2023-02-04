import { connect } from "react-redux";
import Toast from "../../app/components/Toast";
import EventManager from "../../app/events/manager";

import data from "../data";
import { toggleToastMessage } from "../actions";

const mapState = (state) => ({
  id: "ts1",
  toastType: "warning",
  content: data.wrongMsg,
  iconOnly: true,
  buttonText: data.buttonClose,
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
