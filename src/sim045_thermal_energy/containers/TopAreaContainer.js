import { connect } from "react-redux";
import TopAreaComponent from "../components/activity/IntroScreen/TopAreaComponent";

import { common, toggleScreen, currentExperimentNumber } from "../actions";
import data from "../data";
import { getNumber } from "../helper.js";

const mapStateToProps = (state) => ({
  questions: state.questionsData,
  showIntroScreen: state.toggleScreen,
  activeIndex: state.selectQuestionIndex,
  observationsData: state.observationsData,
  isPopupActive: !!state.currentPopup.length,
  observationAlt: data.observationAlt,
  currentPopup: state.currentPopup,
  data: data,
});

const mapDispatchToProps = (dispatch) => ({
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },
  toggleScreen: (show, activeIndex) => {
    dispatch(common.updateResetBtnState(false)); //btn disable state change
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(currentExperimentNumber(activeIndex));

    setTimeout(() => {
      dispatch(toggleScreen(show));
    }, 100);

    setTimeout(() => {
      dispatch(common.ariaLiveText(" "));
    }, 300);

    setTimeout(() => {
      dispatch(common.setResetFocusState(true)); //btn focus state
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(TopAreaComponent);
