import { connect } from "react-redux";
import FullView from "../components/Fullview/Fullview";

import data from "../data/index";
import { common } from "../actions";

const mapState = (state) => {
  return {
    heading: data.mainHeading,
    imgAlt: data.imagealt,
    vidAlt: data.observationsData.alt,
    selectedAnswer: state.selectedAnswerOption,
    startActivity: state.startActivity,
    isPopupActive: !!state.currentPopup.length,
    observationsData: state.observationsData,
    buttonLabels: data.buttonLabelsData,
    currentExperimentNumber: state.currentExperimentNumber,
    currentPopup: state.currentPopup,
    equationOptions: data.equationOptions,
    buttonPlay: data.buttonPlay,
  };
};
const mapDispatch = (dispatch) => ({
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },
  setPlayFocus: () => {
    dispatch(common.setResetFocusState(true));
  },
  onAriaLIVE: (observationsData) => {
    dispatch(common.ariaLiveAssertive(" "));
    setTimeout(() => {
      dispatch(common.ariaLiveAssertive(observationsData));
    }, 100);
    setTimeout(() => {
      dispatch(common.ariaLiveAssertive(" "));
    }, 500);
  },
});

export default connect(mapState, mapDispatch)(FullView);
