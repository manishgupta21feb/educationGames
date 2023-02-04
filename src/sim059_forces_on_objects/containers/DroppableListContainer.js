import DroppableList from "../components/Screens/FullView/DroppableList";
import { connect } from "react-redux";
import data from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    droppableQuestion:state.questionsList,
    ariaLabel:data.screen2.description
  };
};

const mapDispatch = (dispatch) => ({
});

export default connect(mapState, mapDispatch)(DroppableList);
