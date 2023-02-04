import { connect } from "react-redux";
import StaticSide from "../components/Screens/RightScreen/staticSide";

import data from "../data";
import { common } from "../actions";

const mapStateToProps = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    selectedQuestion: state.selectedQuestion,
    getScreen: state.getScreen,
    data: data,
    visitedHotspotBtn: state.visitedHotspotBtn,
    currentHotSpot: state.currentHotSpot,
    rightOst: state.rightOst,
    showAlert: state.showAlert,
    selectedSubQuestion: state.selectedSubQuestion,
    dialogText: state.dialogText,
  };
};
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(StaticSide);
