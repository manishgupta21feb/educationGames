import { connect } from "react-redux";
import FullDraggable from "../components/Screens/FullView/Draggable";

const mapStateToProps = (state) => {
  return {
    elementData: state.optionsData,
    isPopupActive: !!state.currentPopup.length,
  };
};
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FullDraggable);
