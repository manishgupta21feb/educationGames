import { connect } from "react-redux";
import HotSpot from "../components/Screens/LeftScreen/hotspots";

import data from "../data";
import {
  common,
  setCurrentHotSpot,
  setShowAlert,
  setVisitedBtn,
  thunks,
} from "../actions";

const mapStateToProps = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    selectedQuestion: state.selectedQuestion,
    getScreen: state.getScreen,
    data: data,
    visitedHotspotBtn: state.visitedHotspotBtn,
    currentHotSpot: state.currentHotSpot,
    selectedSubQuestion: state.selectedSubQuestion,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.handleHotClick(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HotSpot);
