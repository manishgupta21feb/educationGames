import { connect } from "react-redux";
import data from "../data";
import SuccessionStops from "../components/SuccessionStops";
import { common, thunks } from "../actions";

const mapState = (state) => {
  const screen = state.currentScreen === 1 ? "screen0" : "screen1";
  return {
    isPopupActive: !!state.currentPopup.length,
    infoText: data[screen].infoText,
    stopData: data[screen].stopData,
    screenName: data[screen].screenName,
    patterns: data.patterns,
    infoBoxTitle: data.graphTitle,
    closeLabel:data.buttonLabels.close,
    continueText: data.buttonLabels.continue,
  };
};

const mapDispatch = (dispatch) => ({
  onContinue: (val) => {
    dispatch(thunks.onContinue(val));
  },
});

export default connect(mapState, mapDispatch)(SuccessionStops);
