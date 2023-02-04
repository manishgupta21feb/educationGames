import { connect } from "react-redux";
import Screen11 from "../components/Center/screens/Screen11.js";

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

  return {
    screenData: screenData,
    screenNo: getNumbers(screenData.id),
    currentScreen: screenData.currentScreen,
    threenAtomTxt: data.threenAtomTxt,
    getMatchedValuelen: state.getMatchedValue2.length,
    getMatchedValue2: state.getMatchedValue2,
    dropItemData: state.getDND1DragItems,
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
  onSubmitDND: () => {
    dispatch(thunks.nextScreen());
    dispatch(common.toggleToastMessage(false));
    EventManager.broadcast("STOP_ALL");
  },
  enableContinueBtn: () => {
    dispatch(setIsContinueDisable(false));
  },
});

export default connect(mapState, mapDispatch)(Screen11);
