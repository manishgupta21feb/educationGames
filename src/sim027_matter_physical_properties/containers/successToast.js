import { connect } from "react-redux";
import Toast from "../../app/components/Toast";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, thunks, updateToastMsg } from "../actions";

const mapStateToProps = (state) => {
  return {
    id: "st1",
    iconOnly: true,
    toastType: "positive",
    content: data.correctToastMessage,
    buttonText: data.buttonLabels.close,
    buttonLabel: data.buttonLabels.close,
  };
};

const matchDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(updateToastMsg(""));
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.toggleToastMessage(false));
  },
  onAutoHide: () => {
    dispatch(updateToastMsg(""));
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapStateToProps, matchDispatchToProps)(Toast);
