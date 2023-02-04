import { connect } from "react-redux";
import FullViewScreen from '../components/activity/FullViewScreen';
import data from '../data';
import {
  setScreenStatus,
  common,
  updateVisitedHotspot,
  setClickedCycle,
} from '../actions';

const mapState = (state) => {

  const { screenStatus, visitedHotSpot } = state;

  const {
    mainScreenData,
    carbonExploreData,
    CNDioxideExploreData,
    nitrogenExploreData
  } = data;

  const getFullViewData = () => {
    switch (screenStatus) {
      case 'main-screen': {
        return mainScreenData
      }
      case 'carbon-explore': {
        return carbonExploreData
      }
      case 'carbonDioxide-explore': {
        return CNDioxideExploreData
      }
      case 'nitrogen-explore': {
        return nitrogenExploreData
      }
    }
  }

  const visitedHotspotData = () => {
    switch (screenStatus) {
      case 'main-screen': {
        return visitedHotSpot.first
      }
      case 'carbon-explore': {
        return visitedHotSpot.second
      }
      case 'carbonDioxide-explore': {
        return visitedHotSpot.third
      }
      case 'nitrogen-explore': {
        return visitedHotSpot.forth
      }
    }
  }

  return {
    fullViewData: getFullViewData(),
    visitedHotspotData: visitedHotspotData(),
    isPopupActive: !!state.currentPopup.length,
  }
}

const mapDispatch = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    }, 100);
    if (id == 'carbon-info' || id == 'nitrogen-info') {
      dispatch(setClickedCycle(id));
    }
    dispatch(common.setResetFocusState(true));
    dispatch(common.updateResetBtnState(false));
    dispatch(updateVisitedHotspot(id));
    dispatch(setScreenStatus(id));
  }
});

export default connect(mapState, mapDispatch)(FullViewScreen);
