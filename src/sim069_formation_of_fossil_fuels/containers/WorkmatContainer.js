import Workmat from "../components/Workmat";
import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import {
  common,
  thunk,
  setDroppedItem,
  setCurrentOperatable,
  setUpdateAccessibleList,
} from "../actions";
import data from "../data";

const mapState = (state) => {
  const {
    getOperatablesData,
    getPlacementZones,
    currentPopup,
    getCurrentOperatable,
    getAccept,
  } = state;

  return {
    //From Data
    screenText: data.screenText[state.getFossil],
    continueBtnText: data.buttonLabels.continue,
    indicator: data.indicator,
    dropzoneText: data.dropzoneText,
    dropzoneBlankText: data.dropzoneBlankText,
    dropzoneBlankTextEnd: data.dropzoneBlankTextEnd,
    closeText: data.closeText,

    //From State
    getOperatablesData,
    getPlacementZones,
    getCurrentOperatable,
    getAccept,
    isPopupActive: !!currentPopup.length,
    opened: state.getAccessibleListVisible,
    showToastMessage: state.showToastMessage,
    toggleDesciptionBox: state.getToggleDesciptionBox,

    droppedItem: state.droppedItem,
  };
};

const mapDispatch = (dispatch) => ({
  onOperatable: (evt) => {
    EventManager.broadcast("STOP_ALL");
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(setUpdateAccessibleList(true));
    dispatch(common.toggleToastMessage(false));
    dispatch(setCurrentOperatable(evt.target.dataset));
    dispatch(thunk.onOperatable());
  },

  onOperatableNonAcc: (evt) => {
    EventManager.broadcast("STOP_ALL");
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.toggleToastMessage(false));
    dispatch(setCurrentOperatable(evt.target.dataset));
    dispatch(thunk.onOperatable());
  },

  onPlacement: (evt) => {
    dispatch(thunk.onPlacement(evt.target.dataset.accept));
  },

  closeDescriptionBox: () => {
    EventManager.broadcast("SECONDARY_CLICK");
  },

  setDroppedItem: (item) => {
    dispatch(setDroppedItem(item));
  },

  setCurrentOperatable: (op) => {
    dispatch(setCurrentOperatable(op));
  },
});

export default connect(mapState, mapDispatch)(Workmat);
