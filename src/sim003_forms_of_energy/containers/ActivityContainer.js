import { connect } from "react-redux";
import Activity from "../components/activity";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    question: state.selectedQuestion,
    informationText: data.infoContent,
    showFullView: state.toggleQuestion,
    resetDialogText: data.resetPopupText,
    initialInfoDialog: data.initialInfoDialog,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },
});

export default connect(mapState, mapDispatch)(Activity);
