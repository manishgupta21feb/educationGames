import { connect } from "react-redux";
import simData from "../data";
import {
  common,
  setUpdateTabsData,
  setUserSelection,
  setSubmitActive,
  setSelectionData,
  thunk,
} from "../actions";
import LeftViewA from "../components/LeftView/ViewA";
import EventManager from "../../app/events/manager";

const mapState = (state) => {
  const currentSelection =
    state.getLocationQuestion[state.getCurrentPart].level1.answer;
  return {
    baseImage: simData.plantData.plantImage,
    imageAlt:
      state.getQuestionLevel != 0
        ? simData.plantData.plantAlt[1][currentSelection]
        : simData.plantData.plantAlt[0],
    hotSpots: state.updateTabsData,
    currentLocation: state.currentLocation,
    isPopupActive: !!state.currentPopup.length,
    currentLevel: state.getQuestionLevel,
    selectOptions: simData.selectData,
    dropSelection: state.getSelectionData,
    disableRest: state.isNextButtonEnable,
    isNextButtonEnable: true,
    selectPositionCl: currentSelection,
    heading: state.getLocationQuestion[state.getCurrentPart].level2.heading,
  };
};

const mapDispatch = (dispatch) => ({
  onTabLunch: (arg2) => {
    dispatch(setUserSelection(arg2));
    dispatch(setSubmitActive(false));
  },
  hotSpotUpdate: (data) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(setUpdateTabsData(data));
    dispatch(common.updateResetBtnState(false));
    dispatch(common.toggleToastMessage(false));
    dispatch(thunk.setSubmitFocus());
  },

  onSelectionUpdate: (data) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(setSelectionData(data));
    dispatch(setUserSelection(data.class.toLowerCase()));
    dispatch(setSubmitActive(false));
    dispatch(thunk.setSubmitFocus());
  },
});

export default connect(mapState, mapDispatch)(LeftViewA);
