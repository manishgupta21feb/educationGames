import DroppableList from "../components/activity/quizScreen/DroppableList";
import { connect } from "react-redux";

import { setFocusonDragItem } from "../actions";

const mapState = (state) => {
  return {
    droppableQuestion: state.questionsList,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(DroppableList);
