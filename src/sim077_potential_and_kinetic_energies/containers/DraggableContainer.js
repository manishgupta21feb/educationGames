import { connect } from "react-redux";
import FullDraggable from "../components/Screens/ScreenTwo/Draggable";
import data from "../data";
const mapStateToProps = (state) => {
  return {
     elementData:state.elementData,
     isPopupActive: !!state.currentPopup.length, 
     selectedDraggableFull: state.selectedDraggable,

  };
};
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FullDraggable);
