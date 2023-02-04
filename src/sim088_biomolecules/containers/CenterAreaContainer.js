import { connect } from "react-redux";
import CenterArea from "../components/Center/index";
import EventManager from "../../app/events/manager";
import * as actions from "../../app/actions";
export const common = { ...actions };

import data from "../data";
import {
  thunks,
  updateAccessibleList,
  setDND1DragItems,
  setIsContinueDisable,
} from "../actions";

const mapState = (state) => {
  let screenData = state.getCurrentScreenData.filter(
    (x) => x.isActive == true
  )[0];
  return {
    screenData: screenData,
    buttonLabels: data.buttonLabels,
    isPopupActive: !!state.currentPopup.length,
    dnd1DragItem: state.getMatchedValue,
    getMatchedValuelen: state.getMatchedValue.length,
    getDND1DragItems: state.getDND1DragItems,
  };
};

const mapDispatch = (dispatch) => {
  return {
    nextScreen: (item) => {
      dispatch(thunks.nextScreen(item));

      if (item == "sd_5" || item == "sd_6") {
        dispatch(setIsContinueDisable(true)); // disable continue btn so that user attend mcq
      }
    },
    onClick: () => {
      dispatch(thunks.nextScreen());
    },
    DND1Drag: (item) => {
      dispatch(setDND1DragItems(item));
    },
    onDrop: (item) => {
      dispatch(thunks.onDrop(item));
    },
    updateAccessibleList: (item) => {
      dispatch(updateAccessibleList(item));
    },

    onSubmitDND: () => {
      dispatch(thunks.nextScreen());
      dispatch(common.toggleToastMessage(false));
      EventManager.broadcast("STOP_ALL");
    },
  };
};

export default connect(mapState, mapDispatch)(CenterArea);
