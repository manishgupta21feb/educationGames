import { connect } from "react-redux";
import Toast from "../../app/components/Toast";
import { common, thunk } from "../actions";
import data from "../data";
import EventManager from "../../app/events/manager";

const mapStateToProps = (state) => ({
  id: "toastNegative",
  iconOnly: true,
  toastType: "warning",
  buttonLabel: data.buttonLabels.close,
  content: data.incorrectToastMessage,
});

const matchDispatchToProps = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.toggleToastMessage(false));
    //dispatch(thunk.onToastMessage());
  },
  onAutoHide: () => {
    dispatch(common.toggleToastMessage(false));
    //dispatch(thunk.onToastMessage());
  },
});

export default connect(mapStateToProps, matchDispatchToProps)(Toast);
