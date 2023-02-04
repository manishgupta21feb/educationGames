import DroppableList from "../components/Screens/FullView/DroppableList";
import { connect } from "react-redux";
import data from "../data";

const mapState = (state) => {
  const activeCount = state.questionsList.filter(
    (q) => !q.isDisable 
  );
  return {
    isPopupActive: !!state.currentPopup.length,
    droppableQuestion:state.questionsList,
    ariaLabel:data.Screen2.description

  };
};

const mapDispatch = (dispatch) => ({
});

export default connect(mapState, mapDispatch)(DroppableList);
