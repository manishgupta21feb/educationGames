import { connect } from "react-redux";
import Toast from "../../app/components/Toast";

import data from "../data";
import { thunk } from "../actions";

const mapState = (state) => {
  return {
    id: "st1",
    iconOnly: true,
    toastType: "positive",
    content: data.correctToastMessage,
    buttonLabel: data.buttonLabels.close,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.toggleToastMessage(false));
  },
  onAutoHide: () => {
    dispatch(thunk.toggleToastMessage(false));
  },
});

export default connect(mapState, matchDispatch)(Toast);
