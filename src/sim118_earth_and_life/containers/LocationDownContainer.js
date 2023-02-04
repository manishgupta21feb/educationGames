import { connect } from "react-redux";
import LocationADown from "../components/locations/lowerSection";

import data from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    questionData: { ...data[state.currentLocation] },
    questionState: state.questionState,
    radioButtons: data.radioButtons,
    currentOption: state.currentOptionState,
    data,
  };
};

const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(LocationADown);
