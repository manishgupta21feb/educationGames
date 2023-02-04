import { connect } from "react-redux";
import Activity from "../components/activity";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    data: data,
    showToastMessage: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    getLabels: state.getLabels,
    observationMotive: data.observationMotive,
    getCurrentScreenAndEnvironment: state.getCurrentScreenAndEnvironment,
    setIsVisitedType: state.setIsVisitedType,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
