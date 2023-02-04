import { connect } from "react-redux";
import data from "../data";
import SuccessionAnimation from "../components/SuccessionAnimation";
import { thunks } from "../actions";

const mapState = (state) => {
  const screen = state.currentScreen === 3 ? "screen0" : "screen1";
  return {
    isPopupActive: !!state.currentPopup.length,
    infoText: data[screen].infoText,
    stopData: data[screen].stopData,
    screenName: data[screen].screenName,
    infoText: data[screen].screenTitle,
    animationAltText: data[screen].animationAltText,
    finalStages: data[screen].finalStages,
    buttonNext: data.buttonLabels.next,
  };
};

const mapDispatch = (dispatch) => ({
  onNext: (val) => {
    dispatch(thunks.onContinue(val));
  },
});

export default connect(mapState, mapDispatch)(SuccessionAnimation);
