import { connect } from "react-redux";
import Toast from "../../app/components/Toast";
import EventManager from "../../app/events/manager";
import { common, showToastMessage, updateToastMsg } from "../actions";
import data from "../data";

const mapStateToProps = (state) => ({
  id: "toastNegativePT",
  iconOnly: true,
  toastType: "warning",
  content: data.ScreenInfo[`screen` + state.currentScreen].errorMsg,
  buttonText: data.buttonLabels.close,
  buttonLabel: data.buttonLabels.close,
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
