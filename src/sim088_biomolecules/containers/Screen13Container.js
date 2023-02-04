import { connect } from "react-redux";
import Screen13 from "../components/Center/screens/Screen13.js";

import data from "../data";
import { thunks, setIsContinueDisable } from "../actions";
import { getNumbers } from "../helper.js";

const mapState = (state) => {
  let screenData = state.getCurrentScreenData.filter(
    (x) => x.isActive == true
  )[0];
  let visitedHotspot = "";

  if (screenData.id == screenData.id) {
    visitedHotspot = state.getCurrentScreenData.filter(
      (x) => x.prevNode == screenData.id && x.isVisited == true
    );
  }

  return {
    screenData: screenData,
    screenNo: getNumbers(screenData.id),
    currentScreen: screenData.currentScreen,
    visitedHotspot: visitedHotspot,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  nextScreen: (item) => {
    dispatch(thunks.nextScreen(item));

    if (item == "sd_14" || item == "sd_15") {
      dispatch(setIsContinueDisable(true)); // disable continue btn so that user attend mcq
    }
  },
});

export default connect(mapState, mapDispatch)(Screen13);
