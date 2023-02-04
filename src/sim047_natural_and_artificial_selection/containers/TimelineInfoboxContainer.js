import { connect } from "react-redux";
import data from "../data";
import TimeLine from "../components/FullView/InformationBox";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    selectedTimeline:state.selectedTimeline,
    timelineInfo:state.fetchTimeline.selectedTimelineInfo,
    data,
    selectedTab:state.selectedTab, 
    focusOn:state.focusOn,
    };
};

const mapDispatch = (dispatch) => ({
});

export default connect(mapState, mapDispatch)(TimeLine);
