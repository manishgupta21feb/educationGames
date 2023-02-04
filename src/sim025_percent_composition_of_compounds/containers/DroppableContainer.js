import { connect } from "react-redux";
import StageOneDroppable from "../components/Droppable";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, thunks, updateToastMsg, setHideDroppedItem } from "../actions";

const mapState = (state) => ({
  data: data,
  toastMsg: state.toastMsg,
  elementData: state.elementData,
  dropElement: state.dropElement,
  itemsDetail: state.itemsDetail,
  currentPopup: state.currentPopup,
  matchedItems: state.matchedItems,
  showDropZone: state.showDropZone,
  resetBtnState: state.resetBtnState,
  droppableZones: data.droppableZones,
  hideDroppedItem: state.hideDroppedItem,
  draggablesBurger: data.draggablesBurger,
  showToastMessage: state.showToastMessage,
  isPopupActive: !!state.currentPopup.length,
  infoTableCommonText: data.infoTableCommonText,
  accessibleListVisible: state.accessibleListVisible,
});

const mapDispatch = (dispatch) => ({
  addItem: (key) => {
    dispatch(thunks.addMatchedItem(key));
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
    EventManager.broadcast("POSITIVE_FEEDBACK");
  },

  showToastMessagecorrect: () => {
    dispatch(common.toggleToastMessage(true));
    EventManager.broadcast("POSITIVE_FEEDBACK");
  },

  matchDraggedItem: (item) => {
    dispatch(thunks.matchDraggedItem({ ...item }));
  },

  setHideDroppedItem: (value) => {
    dispatch(setHideDroppedItem(value));
  },
});

export default connect(mapState, mapDispatch)(StageOneDroppable);
