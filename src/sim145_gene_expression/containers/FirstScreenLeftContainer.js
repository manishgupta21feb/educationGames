import { connect } from "react-redux";
import data from "../data";
import FirstScreenLeftView from "../components/FirstScreen/left";
import { thunks } from "../actions";

const mapState = (state) => ({
  mutationData:
    state.sim145CurrentScreen === "first" ||
    state.sim145CurrentScreen === "second"
      ? data.screen1Data
      : data.screen3Data,
  isPopupActive: !!state.currentPopup.length,
  currentScreen: state.sim145CurrentScreen,
  dropzones: state.setDroppable,
  matchedItems: state.matchedItems,
  isPopupActive: !!state.currentPopup.length,
  accessibleListVisible: state.accessibleListVisible,
});

const mapDispatch = (dispatch) => ({
  
  onDrop: (item) => {
    dispatch(thunks.onDrop(item));
  },
});

export default connect(mapState, mapDispatch)(FirstScreenLeftView);
