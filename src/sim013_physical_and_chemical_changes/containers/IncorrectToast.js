import { connect } from "react-redux";
import Toast from "../../app/components/Toast";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  id: "ts1",
  iconOnly: true,
  toastType: "warning",
  buttonText: data.buttonClose,
  content: data.warningBoxHeader,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.toggleToastMessage(false));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  onAutoHide: () => {
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, mapDispatch)(Toast);
