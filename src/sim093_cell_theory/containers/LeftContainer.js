import { connect } from "react-redux";
import LeftScreen from "../components/ActivityScreen/LeftScreen";
import data from "../data";

import { common } from "../actions";

const mapState = (state) => {
  return {
    buttonLabel: data.buttonLabel,
    ostCount: state.ostCountNumber,
    secondScreen: state.secondScreen,
    visitedButton: state.visitedButton,
    buttonVisited: state.specimenVisited,
    specimenHidden: state.specimenHidden,
    isPopupActive: !!state.currentPopup.length,
    imageAltText:
      state.ostCountNumber > 1 && state.ostCountNumber < 4
        ? data.imageAltTextTwo
        : data.imageAltText,
    videoEnded: state.isVideoEnded,
  };
};
const matchDispatch = (dispatch) => ({
  onClickValue: (value) => {
    EventManager.broadcast("SECONDARY_CLICK");
  },
  microscopicClick: (value) => {
    dispatch(common.setResetFocusState(true));

    EventManager.broadcast("SECONDARY_CLICK");
  },
});
export default connect(mapState, matchDispatch)(LeftScreen);
