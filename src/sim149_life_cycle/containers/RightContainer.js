import { connect } from "react-redux";
import RightScreen from "../components/Screens/RightScreen";

import data from "../data";
import { common } from "../actions";

const mapStateToProps = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    selectedQuestion: state.selectedQuestion,
    getScreen: state.getScreen,
    visitedHotspotBtn: state.visitedHotspotBtn,
    showAlert: state.showAlert,
    matchedItems: state.matchedItems,
  };
};
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RightScreen);
