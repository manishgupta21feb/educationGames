import { connect } from "react-redux";
import Toast from "../../app/components/Toast";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, updateToastMsg } from "../actions";

const mapState = (state) => ({
  id: "ft1",
  iconOnly: true,
  toastType: "warning",
  content: data.incorrectToastMessage,
  buttonText: data.globalButtonLabels.close,
  buttonLabel: data.globalButtonLabels.close,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.toggleToastMessage(false));
    dispatch(updateToastMsg(""));
  },
  onAutoHide: () => {
    dispatch(common.toggleToastMessage(false));
    dispatch(common.setResetFocusState(true));
  },
});

export default connect(mapState, matchDispatch)(Toast);
