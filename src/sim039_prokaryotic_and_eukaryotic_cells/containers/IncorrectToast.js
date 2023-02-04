import { connect } from "react-redux";
import Toast from "../../app/components/Toast";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, updateToastMsg } from "../actions";

const mapStateToProps = (state) => ({
  id: "toastNegativePT",
  iconOnly: true,
  toastType: "warning",
  content: data.toastMsg.incorrect,
  buttonText: data.buttonClose,
  buttonLabel: data.buttonClose,
});

const matchDispatchToProps = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.toggleToastMessage(false));
    dispatch(updateToastMsg(""));
  },
  onAutoHide: () => {
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapStateToProps, matchDispatchToProps)(Toast);
