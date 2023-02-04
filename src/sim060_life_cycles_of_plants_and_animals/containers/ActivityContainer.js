import Activity from "../components/activity";
import { connect } from "react-redux";

import { common } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    //----> From Data
    introText: data.introText,
    infoText: data.infoText,
    resetPopupText: data.resetPopupText,
    observationMotive: data.observationMotive,
    istructionText: data.istructionText[0],

    //----From Redux
    isPopupActive: !!state.currentPopup.length,
    showToastMessage: state.showToastMessage,
    result: state.getResult,
    getDndScreenFor: state.getDndScreenFor,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
