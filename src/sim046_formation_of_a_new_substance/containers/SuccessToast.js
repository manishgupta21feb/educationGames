import { connect } from "react-redux";
import Toast from "../../app/components/Toast";
import { thunk, common } from "../actions";
import data from "../data";
import EventManager from "../../app/events/manager";

const mapStateToProps = (state) => ({
  id: "toastPositive",
  iconOnly: true,
  toastType: "positive",
  content: data.correctToastMessage,
  buttonLabel: data.buttonLabels.close
});

const matchDispatchToProps = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.toggleToastMessage(false));
    dispatch(thunk.showCompleteScreen());
  },
  onAutoHide: () => {
    dispatch(common.toggleToastMessage(false));
    dispatch(thunk.showCompleteScreen());
  },
});

export default connect(mapStateToProps, matchDispatchToProps)(Toast);
