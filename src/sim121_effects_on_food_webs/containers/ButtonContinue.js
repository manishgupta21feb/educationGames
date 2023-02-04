import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  const finish = state.questionCountValue == data.secondScreenData.length;
  const next = state.questionCountValue == data.mcqData.length;
  
  return {
    isPopupActive: !!state.currentPopup.length,
    text: state.secondScreen
      ? finish
        ? data.buttonLabels.finish
        : data.buttonLabels.continue
      : next
      ? data.buttonLabels.next
      : data.buttonLabels.continue,
    disabled: state.getAnimationEnd,
    classes: `toast-secondary-button positive ${
      finish && state.secondScreen ? "" : "right-arrow"
    }`,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("STOP_ALL");
    // dispatch(isMcqShow(true));
    dispatch(thunks.onNextButton());

    setTimeout(() => {
      EventManager.broadcast("SECONDARY_CLICK");
    }, 100);
  },
});

export default connect(mapState, matchDispatch)(Button);
