import { connect } from "react-redux";
import data from "../data";
import LastScreenLeftView from "../components/LastScreen/left";
import { thunks } from "../actions";

const mapState = (state) => ({
  mutationData:
    state.lastScreenPart === "first"
      ? data.screen5DataFirstPart
      : data.screen5DataSecondPart,
  lastScreenPart: state.lastScreenPart,
  isPopupActive: !!state.currentPopup.length,
  currentScreen: state.sim145CurrentScreen,
  alligatorsArray: state.alligatorsArray,
  dropzones: state.setDroppable,
  matchedItems: state.matchedItems,
  accessibleListVisible: state.accessibleListVisible,
});

const mapDispatch = (dispatch) => ({
  showAlligatorInfo: (val) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.showAlligatorInfo(val));
  },
  onDrop: (item) => {
    dispatch(thunks.onDrop(item));
  },
});

export default connect(mapState, mapDispatch)(LastScreenLeftView);
