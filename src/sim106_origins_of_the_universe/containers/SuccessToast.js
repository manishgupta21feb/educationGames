import { connect } from "react-redux";
import Toast from "../../app/components/Toast";
import { thunk, common } from "../actions";
import data from "../data";

const mapStateToProps = (state) => ({
  id: "toastPositive",
  toastType: "positive",
  buttonLabel: data.buttonLabels.close,
  content: data.correctToastMessage,
  iconOnly: true,
});

const matchDispatchToProps = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.toggleToastMessage(false));
  },
  onAutoHide: () => {
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapStateToProps, matchDispatchToProps)(Toast);
