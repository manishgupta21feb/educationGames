import { connect } from "react-redux";
import Screen4 from "../components/Center/screens/Screen4.js";
import { getNumbers } from "../helper.js";
import { thunks, setIsContinueDisable } from "../actions";
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

    if (item == "sd_10") {
      dispatch(setIsContinueDisable(false));
    }
  },
});

export default connect(mapState, mapDispatch)(Screen4);
