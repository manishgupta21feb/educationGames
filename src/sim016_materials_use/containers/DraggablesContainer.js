import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import Draggables from "../components/RightLeft/Draggables";

import data from "../data/index";
import {
  common,
  thunks,
  setAccessible,
  infoDialogIndex,
  selectDraggable,
  setPreviousSound,
  toggleInfoDialog,
  forcePlantHighlight,
  forceAnimalHighlight,
  setShowHelpPopup,
  setShowDropZone,
  setRevertAudio,
} from "../actions";

const mapState = (state) => {
  return {
    closeInfoBtn: data.draggableData.close,
    isPopupActive: !!state.currentPopup.length,
    audioStatePlay: state.audioStatePlay,
    draggableItems: state.draggableItems,
    selectedDraggable: state.selectedDraggable,
    dropDown: data.introImages,
    infoDialog: state.infoDialogState,
    helpingText: data.helpingButton,
    helpingButtonLabel: data.helpingButtonLabel,
    isAccessible: state.isAccessible,
    showHelpPopup: state.showHelpPopup,
    showDropZone: state.showDropZone,
    revertAudio: state.revertAudio,
  };
};

const mapDispatch = (dispatch) => ({
  selectDraggable: (draggable) => dispatch(selectDraggable(draggable)),
  onDrop: (isAnimalDropzone) => dispatch(thunks.onDrop(isAnimalDropzone)),
  forceAnimalHighlight: (val) => dispatch(forceAnimalHighlight(val)),
  forcePlantHighlight: (val) => dispatch(forcePlantHighlight(val)),
  setPreviousSound: (sound) => dispatch(setPreviousSound(sound)),
  togglePopup: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(6));
  },
  toggleInfoDialog: (val) => {
    dispatch(toggleInfoDialog(val));
  },
  setInfoIndex: (val) => {
    dispatch(infoDialogIndex(val));
  },
  setAccessible: (a) => {
    dispatch(setAccessible(a));
  },
  setShowHelpPopup: (val) => {
    dispatch(setShowHelpPopup(val));
  },
  setShowDropZone: (val) => {
    dispatch(setShowDropZone(val));
  },
  setRevertAudio: (val) => {
    dispatch(setRevertAudio(val));
  },
});

export default connect(mapState, mapDispatch)(Draggables);
