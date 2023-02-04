import SchoolView from "../components/SchoolView";
import { connect } from "react-redux";
import data from "../data";
import {
  common,
  setIsVisitedBoth,
  setScreenNumber,
  thunk,
  updateVisitedNodes,
  setIsOptionSelected,
} from "../actions";

const mapState = (state) => {
  return {
    videoTitle: data.view[0].questions[0].title,
    videoSecond: data.view[0].questions[0].titleSecond,
    buttonLabel: data.buttonLabels.next,

    //----> From Data
    stateModel: data.stateModel,
    bigBang: data.bigBang,
    sliderTitle: data.sliderTitle,
    nextBtnText: data.buttonLabels.next,
    continueBtnText: data.buttonLabels.continue,
    altTextSteadyState: data.altTextSteadyState,
    altTextBigBang: data.altTextBigBang,
    //----> From Reducer
    isPopupActive: !!state.currentPopup.length,
    getLevel: state.getLevel,
    updateSliderValue: state.getUpdateSlider,
    screenOne: state.screenOne,
    screenTwo: state.screenTwo,
    screenThree: state.screenThree,
    getScreenNumber: state.getScreenNumber,
    getIsVisitedBoth: state.getIsVisitedBoth,
    btnIds: data.view,
  };
};

const mapDispatch = (dispatch) => ({
  btnSound: (item) => {
    dispatch(thunk.checkMcqRequiredOrNot(item));
    dispatch(common.updateResetBtnState(false));
    dispatch(common.setResetFocusState(true));
  },

  clickButton: () => {
    dispatch(common.setResetFocusState(true));
  },

  resetActivity: () => {
    dispatch(common.updateResetBtnState(false));
    dispatch(common.setResetFocusState(true));
    dispatch(updateVisitedNodes());
    dispatch(thunk.resetActivity());
  },


  setIsVisitedBoth: (val, id) => {
    dispatch(setScreenNumber(val));
    dispatch(setIsVisitedBoth(id));
    dispatch(setIsOptionSelected(true));
  },
});

export default connect(mapState, mapDispatch)(SchoolView);
