import { connect } from "react-redux";
import Screen1 from "../components/Screens/Screen1";
import data from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    hotspots: data.hotspots,
    selectedHotspot: state.selectedHotspot,
    fossilsBGAltText: data.fossilsBGAltText,
    activityInstructions: data.activityInstructions,
    visitedNodes: state.visitedNodes,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Screen1);
