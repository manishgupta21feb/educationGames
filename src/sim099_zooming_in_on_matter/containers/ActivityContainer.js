import Activity from "../components/activity";
import { connect } from "react-redux";
import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    introText: data.introText,
    infoText: data.infoText,
    resetPopupText: data.resetPopupText,
    isPopupActive: !!state.currentPopup.length,
    observationMotive: data.observationMotive,
    infoWater: data.infoWater,
    infoNail: data.infoNail,
    buttonClicked: state.buttonId,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
