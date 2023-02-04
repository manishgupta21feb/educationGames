import { thunk } from "../actions/activity";
import Flower from "../components/flower";

import data from "../data";
import { connect } from "react-redux";

const mapState = (state) => {
  return {
    initialFlowers: state.appData.initialFlowers,
    plantTypes: state.appData.plantTypes,
    crossedFlowers: state.crossedFlowers,
    showGenotype: state.showGenotype,
    highlightedFlower: state.highlightedFlower,
    selectedFlowers: state.selectedFlowers,
    isPopupActive: !!state.currentPopup.length,
    crossText: state.appData.labels.cross,
    focusedFlower: state.focusedFlower,
    showGenoList: state.showGenoList,
    selected: data.selected,
    notselected: data.notselected,
  };
};

const matchDispatch = (dispatch) => ({
  performCross: (cross) => {
    dispatch(thunk.performCross(cross));
  },
  setSelectedFlowers: (check, flower) => {
    dispatch(thunk.flowerSelection(check, flower));
  },
});

export default connect(mapState, matchDispatch)(Flower);
