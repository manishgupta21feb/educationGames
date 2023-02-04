import { connect } from "react-redux";
import Toast from "../../app/components/Toast";
import { common } from "../actions";
import data from "../data";
import EventManager from "../../app/events/manager";

const mapStateToProps = (state) => ({
  id: "toastNegative",
  iconOnly: true,
  toastType: "warning",
  buttonLabel: data.buttonLabels.close,
  content:
    state.getAttempts >= 2 ? data.feedbacks.exception : data.feedbacks.wrong,
});

const matchDispatchToProps = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.toggleToastMessage(false));
  },
  onAutoHide: () => {
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapStateToProps, matchDispatchToProps)(Toast);
