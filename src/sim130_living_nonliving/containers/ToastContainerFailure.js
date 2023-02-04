import { connect } from "react-redux";
import Toast from "../../app/components/Toast";

import data from "../data";
import { common } from "../actions";
import { thunks } from "../../app/actions";

const mapState = (state) => ({
  id: "ft1",
  iconOnly: true,
  toastType: "warning",
  content: state.setStatic
    ? data.incorrectToastMessageDnD
    : data.incorrectToastMessage,
  buttonLabel: data.buttonLabels.close,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.toggleToastMessage(false));
    EventManager.broadcast("STOP_ALL");
    setTimeout(() => {
      EventManager.broadcast("SECONDARY_CLICK");
    });
  },
  onAutoHide: () => {
    dispatch(common.toggleToastMessage(false));
    EventManager.broadcast("STOP_ALL");
  },
});

export default connect(mapState, matchDispatch)(Toast);
