import { connect } from "react-redux";
import Toast from "../../app/components/Toast";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, updateToastMsg } from "../actions";

const mapStateToProps = (state) => {
  let screenData = state.getCurrentScreenData.filter(
    (x) => x.isActive == true
  )[0];
  return {
    iconOnly: true,
    toastType: "positive",
    id: "toastPositivePT",
    content:
      screenData.id == "sd_6"
        ? data.feedback.dndMsg
        : data.feedback.correctFeedback,
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
