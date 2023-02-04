import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => {
  let isVisitedLen = state.getCurrentScreenData.filter(
    (x) => x.isVisited == true
  );
  let isActiveLen = state.getCurrentScreenData.filter(
    (x) => x.isActive == true
  )[0];

  return {
    text:
      isVisitedLen.length == 14 &&
      isActiveLen.totalScreen == isActiveLen.currentScreen
        ? data.buttonLabels.finish
        : state.screenVisitedValue
        ? data.buttonLabels.next
        : data.buttonLabels.continue,
    classes: `toast-secondary-button positive right-arrow dnd-zone ${
      isActiveLen.totalScreen == isActiveLen.currentScreen ? "" : "right-arrow"
    }`,
    disabled: state.getIsContinueDisable,
    id:
      isVisitedLen.length == 14 &&
      isActiveLen.totalScreen == isActiveLen.currentScreen
        ? "btnFinish"
        : "btnContinue",
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  onClick: (e) => {
    if (e.target.id == "btnContinue") {
      dispatch(thunks.nextScreen());
    } else {
      dispatch(thunks.finishScreen());
    }
  },
});

export default connect(mapState, mapDispatch)(Button);
