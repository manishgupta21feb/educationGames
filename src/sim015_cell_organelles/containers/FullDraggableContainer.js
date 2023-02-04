import { connect } from "react-redux";
import FullDraggable from "../components/Screens/FullView/Draggable"
const mapStateToProps = (state) => {
 return {
 isPopupActive: !!state.currentPopup.length,
 elementData: state.optionsData,
 selectedDraggableFull: state.selectDraggableFull,

};
};
const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(FullDraggable);
