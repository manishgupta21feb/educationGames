import { connect } from "react-redux";
import Toast from "../../app/components/Toast";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    id: "ft1",
    iconOnly: true,
    toastType: "warning",
    content:
      state.correctOptions.length == 3
        ? data.incorrectToastMessageTwo
        : data.incorrectToastMessage,
    buttonLabel: data.buttonLabels.close,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.toggleToastMessage(false));
  },
  onAutoHide: () => {
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, matchDispatch)(Toast);
