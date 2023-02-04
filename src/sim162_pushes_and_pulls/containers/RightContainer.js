import Right from "../components/Right";
import { connect } from "react-redux";

import { common, thunks, selectedButton } from "../actions";
import data from "../data";

const mapState = (state) => {
  const getNote = () => {
    let note;
    if (state.screenCount == 2) {
      note = data.NotesData[state.screenCount].notes.filter(
        (e) => e.serNo == state.selectedButton
      )[0].text;
    } else {
      note = data.NotesData[state.screenCount].notes.filter(
        (e) => e.serNo == state.selectedValue.value
      )[0].text;
    }
    return note;
  };
  const instructionText = data.mainInfo[state.screenCount].infoText;

  const sliderValue = data.sliderValues.filter(
    (e) => e.value == state.selectedValue.value
  )[0].label;

  return {
    isPopupActive: !!state.currentPopup.length,
    instruction: instructionText,
    sliderLabel: data.sliderLabel,
    buttonLabels: data.buttonLabels,
    selectedValue: state.selectedValue,
    runState: state.runState,
    videoPlayed: state.videoPlayed,
    buttons: data.mainInfo[state.screenCount].buttons,
    screen: state.screenCount,
    selectedButton: state.selectedButton,
    notes: getNote(),
    slidValue: sliderValue,
    resetState: !state.selectedValue.isReseted,
    closeText: data.close,
  };
};

const mapDispatch = (dispatch) => ({
  closeNote: () => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(common.setResetFocusState(true));
  },

  onChange: (value) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(thunks.setSelectedValue(value));
  },
  onRun: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.setRunState(true));
  },
  onBtnClick: (val) => {
    dispatch(thunks.setSelectedValue(val));
    dispatch(selectedButton(val));
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.setRunState(true));
  },
});

export default connect(mapState, mapDispatch)(Right);
