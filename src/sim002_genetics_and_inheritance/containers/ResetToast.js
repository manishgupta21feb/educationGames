import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import Toast from "../../app/components/Toast";
import { togglePopup } from "../actions";
import { setShowLimitWarning } from "../actions/activity";

const mapState = (state) => {
  const error = state.appData.messages["error"];
  return {
    iconOnly: false,
    toastType: "warning",
    id: "toastNegativePT",
    content: error.descText,
    buttonText: error.buttonText,
    buttonClasses: "reverse icon reset-red",
  };
};

const matchDispatch = (dispatch) => ({
  onAutoHide: () => {
    dispatch(setShowLimitWarning(false));
  },
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(setShowLimitWarning(false));
    dispatch(togglePopup(3));
  },
});

export default connect(mapState, matchDispatch)(Toast);
