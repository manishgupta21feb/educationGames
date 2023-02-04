import DroppableList from "../components/Screens/ScreenTwo/Droppable/index";
import { connect } from "react-redux";
import data from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    dropZones: data.venDiagramData.dropZones,
    matchedItems: state.matchedItems,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(DroppableList);
