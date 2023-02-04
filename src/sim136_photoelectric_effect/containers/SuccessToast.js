import { connect } from "react-redux";
import Toast from "../../app/components/Toast";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  id: "ts2",
  iconOnly: true,
  toastType: "positive",
  buttonText: data.buttonClose,
  content:
    state.tripCount === 6
      ? data.rightMsg.replace("-1-", state.tripCount - 1)
      : `${data.rightMsg.replace("-1-", state.tripCount - 1)} ${
          data.keepGoing
        }`,
});
const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.toggleToastMessage(false));
    EventManager.broadcast("SECONDARY_CLICK");
  },

  onAutoHide: () => {
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, matchDispatch)(Toast);
