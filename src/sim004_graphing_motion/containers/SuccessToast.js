import { connect } from "react-redux";
import Toast from "../../app/components/Toast";
import { toggleToastMessage } from "../actions";
import EventManager from "../../app/events/manager";
import data from "../data";

const mapState = (state) => ({
  id: "ts2",
  toastType: "positive",
  content:
    state.tripCount === 6
      ? data.rightMsg.replace("-1-", state.tripCount - 1)
      : `${data.rightMsg.replace("-1-", state.tripCount - 1)} ${
          data.keepGoing
        }`,
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
