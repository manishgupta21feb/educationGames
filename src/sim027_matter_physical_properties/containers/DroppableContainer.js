import { connect } from "react-redux";
import StageOneDroppable from "../components/Droppable";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, thunks, updateToastMsg } from "../actions";

const mapState = (state) => ({
  data: data,
  toastMsg: state.toastMsg,
  dropElement: state.dropElement,
  currentPopup: state.currentPopup,
  matchedItems: state.matchedItems,
  resetBtnState: state.resetBtnState,
  droppableZones: data.droppableZones,
  showToastMessage: state.showToastMessage,
  isPopupActive: !!state.currentPopup.length,
  accessibleListVisible: state.accessibleListVisible,
});

const mapDispatch = (dispatch) => ({
  addItem: (item) => {
    dispatch(thunks.matchDraggedItem({ ...item }));
  },
  updateDroppedAt: (name, key) => {
    dispatch(thunks.updateDroppedAt(name, key));
  },

  toastMsgincorrect: (val) => {
    dispatch(updateToastMsg("incorrect"));
    EventManager.broadcast("NEGATIVE_FEEDBACK");
  },

  showToastMessageincorrect: () => {
    dispatch(common.toggleToastMessage(true));
    EventManager.broadcast("NEGATIVE_FEEDBACK");
  },

  toastMsgcorrect: (val) => {
    dispatch(updateToastMsg("correct"));
    EventManager.broadcast("POSITIVE_FEEDBACK");
  },

  showToastMessagecorrect: () => {
    dispatch(common.toggleToastMessage(true));
    EventManager.broadcast("POSITIVE_FEEDBACK");
  },
});

export default connect(mapState, mapDispatch)(StageOneDroppable);
