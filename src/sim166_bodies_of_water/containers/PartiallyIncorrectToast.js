import { connect } from "react-redux";
import Toast from "../../app/components/Toast";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, setPartiallyCorrect } from "../actions";

const mapState = (state) => ({
  id: "ts1",
  iconOnly: true,
  toastType: "warning",
  buttonText: data.buttonLabels.close,
  buttonLabel: data.buttonLabels.close,
  content: data.partiallyIncorrectToastMessage,
  buttonText: data.buttonWarning,
});
const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.toggleToastMessage(false));
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(setPartiallyCorrect(true));
  },

  onAutoHide: () => {
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, matchDispatch)(Toast);
