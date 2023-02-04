import RightView from "../components/RightView";
import EventManager from "../../app/events/manager";
import { connect } from "react-redux";
import { thunk, common } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    //----> From Data
    ecosystems: data.ecosystem,

    //----> From State
    isPopupActive: !!state.currentPopup.length,
    screenType: state.getEcosystemScreen,

    options: data.selectOptions,
    value: state.getDropdownValue,
    disabled: false,
    answerAttempted: state.answerAttempted,
    correctAnswer: state.correctAnswer,
    visitedHotspots: state.visitedHotspots,
    selectedHotspot: state.selectedHotspot,
    nextSection: state.nextSection,
    correctOptions: state.correctOptions,
    incorrectOptions: state.incorrectOptions,
  };
};

const mapDispatch = (dispatch) => ({
  onEcosystemBtn: (value) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.onEcosystemBtn(value));
    dispatch(common.updateResetBtnState(false));
    dispatch(thunk.updateHotspot(value));
    dispatch(common.setResetFocusState(true));
  },

  onChange: (item, index) => {
    dispatch(thunk.onDropdownChange(item, index));
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.toggleToastMessage(false));
    dispatch(common.updateResetBtnState(false));
  },

  onClick: () => {
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, mapDispatch)(RightView);
