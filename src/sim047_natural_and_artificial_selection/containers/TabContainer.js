import { connect } from "react-redux";
import data from "../data";
import {thunks } from "../actions";
import Tab from "../components/FullView/Tab";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    selectedTab:state.selectedTab, 
    selectedTimeline:state.selectedTimeline,
    data, 
    disableIndex:state.disableIndex,
    visitedFirst:state.visitedFirst,
    btnActive:state.btnActive,
  };
};

const mapDispatch = (dispatch) => ({
 selectTab: (id) => {
   dispatch(thunks.selectTab(id))
  EventManager.broadcast("PRIMARY_CLICK");
},
});

export default connect(mapState, mapDispatch)(Tab);
