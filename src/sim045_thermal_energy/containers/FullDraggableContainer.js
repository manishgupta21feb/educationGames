import { connect } from "react-redux";
import FullDraggable from "../components/activity/quizScreen/Draggable";

const mapStateToProps = (state) => {
  return {
    dragList: state.optionsData,
    elementData: state.optionsData,
    isAccessible: state.accessibleListVisible,
    isPopupActive: !!state.currentPopup.length,
  };
};
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FullDraggable);
