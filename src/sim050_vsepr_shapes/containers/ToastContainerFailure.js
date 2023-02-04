import { connect } from "react-redux";
import Toast from "../../app/components/Toast";

import data from "../data";
import { thunk } from "../actions";

const mapState = (state) => ({
  id: "ft1",
  iconOnly: true,
  toastType: "warning",
  buttonLabel: data.buttonLabels.close,
  content: data.incorrectToastMessage,
});

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
