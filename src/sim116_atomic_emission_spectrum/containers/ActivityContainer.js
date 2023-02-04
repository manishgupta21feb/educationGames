import Activity from "../components/activity";
import { connect } from "react-redux";
import { common } from "../actions/";
import data from "../data";

const mapState = (state) => {
  return {
    initialInformationText: data,
    isPopupActive: !!state.currentPopup.length,
    showToastMessage: state.showToastMessage,
  };
};

const mapDispatch = (dispatch) => ({
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
    dispatch(common.ariaLiveText(""));
    setTimeout(() => {
      dispatch(common.ariaLiveText(" "));
    }, 300);
  },
});

export default connect(mapState, mapDispatch)(Activity);
