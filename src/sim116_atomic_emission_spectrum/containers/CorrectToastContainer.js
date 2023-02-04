import { connect } from "react-redux";
import Toast from "../../app/components/Toast";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    id: "ts2",
    toastType: "positive",
    content:
      state.selectedOption == "helium" ? data.heliumText : data.hydrogenText,
    iconOnly: true,
    buttonText: data.buttonClose,
    buttonLabel: data.buttonClose,
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
