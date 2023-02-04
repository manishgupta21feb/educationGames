import { connect } from "react-redux";
import Toast from "../../app/components/Toast";

import data from "../data";
import { common, resetOrganisms } from "../actions";

const mapState = (state) => ({
  showStatic: state.showStatic,
  id: "ts1",
  toastType: "warning",
  content: data.wrongMsg,
  iconOnly: true,
  buttonText: data.buttonClose,
});
const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.toggleToastMessage(false));
    dispatch(resetOrganisms());
  },
  onAutoHide: () => {
    dispatch(common.toggleToastMessage(false));
    dispatch(resetOrganisms());
  },
});

export default connect(mapState, matchDispatch)(Toast);
