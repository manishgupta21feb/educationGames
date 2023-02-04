import { connect } from "react-redux";
import Toast from "../../app/components/Toast";

import data from "../data";
import { common, updateToastMsg } from "../actions";

const mapState = (state) => ({
  id: "teIncorrect",
  iconOnly: true,
  toastType: "warning",
  content:
    state.toastMsg == "partiallyCorrect"
      ? data.toastMsg.partialCorrect
      : data.toastMsg.incorrect,
  buttonLabel: data.buttonLabels.close,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(updateToastMsg(""));
    dispatch(common.toggleToastMessage(false));
  },
  onAutoHide: () => {
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, mapDispatch)(Toast);
