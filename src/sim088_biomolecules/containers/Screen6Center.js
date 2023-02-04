import { connect } from "react-redux";
import Screen6 from "../components/Center/screens/Screen6.js";

import data from "../data";
import { getNumbers } from "../helper.js";
import {
  thunks,
  updateAccessibleList,
  setDND1DragItems,
  setIsContinueDisable,
  updateToastMsg,
  setSubmitButton,
} from "../actions";

import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager.js";
export const common = { ...actions };

const mapState = (state) => {
  let screenData = state.getCurrentScreenData.filter(
    (x) => x.isActive == true
  )[0];

  let isVisitedLen = state.getCurrentScreenData.filter(
    (x) => x.isVisited == true
  );
  let isActiveLen = state.getCurrentScreenData.filter(
    (x) => x.isActive == true
  )[0];

  return {
    screenData: screenData,
    buttonLabels: data.buttonLabels,
    screenNo: getNumbers(screenData.id),
    currentScreen: screenData.currentScreen,
    isPopupActive: !!state.currentPopup.length,
    getMatchedValuelen: state.getMatchedValue.length,
    getMatchedValue: state.getMatchedValue,
    dropItemData: state.getDND1DragItems,
    setSubmitButton: state.getSubmitButton,
    btnLbl:
      isVisitedLen.length == 14 &&
      isActiveLen.totalScreen == isActiveLen.currentScreen
        ? "btnFinish"
        : "btnContinue",
  };
};

const mapDispatch = (dispatch) => ({
  updateAccessibleList: (item) => {
    dispatch(updateAccessibleList(item));
  },
  DND1Drag: (item) => {
    dispatch(setDND1DragItems(item));
  },
  onDrop: (item) => {
    dispatch(thunks.onDrop(item));
  },
  onSubmitDND: (e) => {
    dispatch(updateToastMsg("correct"));
    EventManager.broadcast("POSITIVE_FEEDBACK");
    dispatch(common.toggleToastMessage(true));
    dispatch(setSubmitButton(true));
  
  },
});

export default connect(mapState, mapDispatch)(Screen6);
