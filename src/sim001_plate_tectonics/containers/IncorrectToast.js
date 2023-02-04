import { connect } from "react-redux";
import Toast from "../../app/components/Toast";
import EventManager from "../../app/events/manager";

import TextData from "../config/index";
import { common, updateToastMsg } from "../actions";

const mapState = (state) => ({
  iconOnly: true,
  toastType: "warning",
  id: "toastNegativePT",
  buttonText: TextData.close,
  content: TextData.toastMsg.incorrect,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.toggleToastMessage(false));
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(updateToastMsg(""));
  },
  onAutoHide: () => {
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, matchDispatch)(Toast);
