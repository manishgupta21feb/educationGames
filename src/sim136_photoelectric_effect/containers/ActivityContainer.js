import { connect } from "react-redux";
import Root from "../components/activity";
import { common } from "../actions";
import data from "../data";

const mapState = (state) => ({
  informationText: data,
  tripCount: state.tripCount,
  currentPopup: state.currentPopup,
  showToastMessage: state.showToastMessage,
  resetDialogText: data.resetMsgContent,
  startDialogBox1: data.instructionBoxContent1,
  startDialogBox2: data.instructionBoxContent2,
  isPopupActive: !!state.currentPopup.length,
});

const mapDispatch = (dispatch) => ({
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },
});

export default connect(mapState, mapDispatch)(Root);
