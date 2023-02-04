import { connect } from "react-redux";
import data from "../data";
import {setVisitedFirst, toggleTimelineDialog,setFocus, thunks} from "../actions";
import DescriptionBox from "../components/FullView/DescriptionBox";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    timelineInfo:state.fetchTimeline.selectedTimelineInfo,
    isToggle:state.toggleDialog,
    data,
    visitedTimeline:state.visitedTimeline,
    patterns: data.patterns,
    selectedTab:state.selectedTab, 
    selectedTimeline:state.selectedTimeline,
    travsedArray1:state.travsedArray1,
    travsedArray2:state.travsedArray2,
    };
};

const mapDispatch = (dispatch) => ({
  closeDialog:(id) =>{
    dispatch(toggleTimelineDialog(true));
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(setFocus(id));
  },
  setliveText:(id)=>{
    dispatch(thunks.setLiveText(id))
  }
});

export default connect(mapState, mapDispatch)(DescriptionBox);
