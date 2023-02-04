import Activity from "../components/activity";
import { connect } from "react-redux";
import { common,thunks,updateSeasonsSequence } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    data,
    toastMsg: state.toastMsg,
    showToastMessage: state.showToastMessage,

  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
    dispatch(thunks.onLoad())
  },
});

export default connect(mapState, mapDispatch)(Activity);
