import { connect } from "react-redux";
import Root from "../components/activity";
import { togglePopup } from "../actions/index";
import data from "../data";

const mapState = (state) => ({
  tripCount: state.tripCount,
  currentPopup: state.currentPopup,
  showToastMessage: state.showToastMessage,
  informationText: data.infoText,
  resetDialogText: data.resetMsgContent,
  startDialogBox1: data.instructionBoxContent1,
  startDialogBox2: data.instructionBoxContent2,
  isPopupActive: !!state.currentPopup.length,
});

const mapDispatch = (dispatch) => ({
  togglePopup: (id) => {
    dispatch(togglePopup(id));
  },
});

export default connect(mapState, mapDispatch)(Root);
