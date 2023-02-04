import { connect } from "react-redux";
import Toast from "../../app/components/Toast";
import { thunk, common } from "../actions";

import EventManager from "../../app/events/manager";

const mapStateToProps = (state) => {
  const data = state.getData;
  return {
    id: "toastPositive",
    toastType: "positive",
    buttonLabel: data.buttonLabels.close,
    content: data.tugOfWarVideos[state.getCurrentVideo - 1].tostContent,
    iconOnly: true,
  };
};

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
