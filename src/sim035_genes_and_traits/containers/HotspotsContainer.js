import { connect } from "react-redux";
import Hotspot from "../components/activity/Hotspot";

import data from "../data";
import { thunk, common, updateHotspotData } from "../actions";

const mapState = (state) => {
  return {
    screens: state.screens,
    nextBtn: state.nextBtn,
    hotspots: state.hotspots,
    resetGame: state.resetGame,
    selectedText: data.selected,
    hotspotData: data.hotspotData,
    isPopUpOpen: !!state.currentPopup.length,
    nextBtnText: data.next,
    headingScreen1: data.headingScreen1,
  };
};

const mapDispatch = (dispatch) => ({
  onNextBtnClick: () => {
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    // setTimeout(() => {
    dispatch(common.togglePopup(4));
    // });
    setTimeout(() => {
      EventManager.broadcast("COMPLETION_SCREEN");
    }, 300);
  },

  onHotspotClick: (index, name) => {
    // dispatch(common.ariaLiveText(`${name} ${data.selected}`));
    dispatch(thunk.clickHotspot(index));
    let value = data.hotspotData.leftSection.hotspots;
    value[index] = { ...value[index] };
    value[index].visited = true;
    for (let keys in value) {
      if (value[keys].active == true) {
        value[index] = { ...value[index] };
        value[keys].active = false;
      }
    }
  },
  liveText: (text) => {
    dispatch(common.ariaLiveText(text));
  },

  onCloseClick: (index) => {
    let value = data.hotspotData.leftSection.hotspots;
    dispatch(updateHotspotData([...value]));
  },
});

export default connect(mapState, mapDispatch)(Hotspot);
