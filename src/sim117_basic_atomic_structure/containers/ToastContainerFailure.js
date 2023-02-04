import { connect } from "react-redux";
import Toast from "../../app/components/Toast";

import data from "../data";
import { common, wrongAnswer } from "../actions";

const mapState = (state) => ({
  id: "ft1",
  iconOnly: true,
  toastType: "warning",
  content: data.incorrectToastMessage,
  buttonLabel: data.buttonLabels.close,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.toggleToastMessage(false));

    setTimeout(() => {
      EventManager.broadcast("SECONDARY_CLICK");
    });
    EventManager.broadcast("STOP_ALL");
  },
  onAutoHide: () => {
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, matchDispatch)(Toast);
