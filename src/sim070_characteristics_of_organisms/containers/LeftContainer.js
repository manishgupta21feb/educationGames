import { connect } from "react-redux";
import LeftScreen from "../components/ActivityScreen/LeftScreen";
import data from "../data";
import { thunks, microscopicClickView } from "../actions";
const mapState = (state) => {
  return {
    buttonLabel: data.buttonLabel,
    specimenClicked: state.specimenClicked,
    specimenValue: state.specimenValue,
    microscopicView: data.microscopicView,
    isClicked: state.microscopicClickView,
    buttonVisited: state.specimenVisited,
    isPopupActive: !!state.currentPopup.length,
    secondScreen: state.secondScreen,
    imageAltText: state.specimenClicked
      ? state.microscopicClickView
        ? data.buttonLabel[state.buttonIndex].imageMicroscopicText
        : data.buttonLabel[state.buttonIndex].imageAltbutton
      : data.imageAltText,
  };
};
const matchDispatch = (dispatch) => ({
  onClickValue: (value) => {
    dispatch(thunks.specimenValue(value));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  microscopicClick: (value) => {
    dispatch(thunks.microscopicView(value));
  },
});
export default connect(mapState, matchDispatch)(LeftScreen);
