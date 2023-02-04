import { connect } from "react-redux";
import Screen2 from "../components/Center/screens/Screen2.js";

import data from "../data";
import {
  thunks,
  updateAccessibleList,
  setDND1DragItems,
  setIsContinueDisable,
} from "../actions";
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
    isPopupActive: !!state.currentPopup.length,
    visitedHotspot: visitedHotspot,
  };
};

const mapDispatch = (dispatch) => ({
  nextScreen: (item) => {
    dispatch(thunks.nextScreen(item));
  },
});

export default connect(mapState, mapDispatch)(Screen2);
