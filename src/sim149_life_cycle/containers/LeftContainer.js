import { connect } from "react-redux";
import LeftScreen from "../components/Screens/LeftScreen";

import data from "../data";
import { common } from "../actions";

const mapStateToProps = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    selectedQuestion: state.selectedQuestion,
    getScreen: state.getScreen,
  };
};
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LeftScreen);
