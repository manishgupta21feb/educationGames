import { connect } from "react-redux";
import Screen2 from "../components/activity/Screens/Screen2";
import { isAllObservationDone } from "../helper.js";

const mapState = (state) => {
  return {
    showIntroScreen:
      isAllObservationDone(state.toggleScreen, state.observationsData) == 3 &&
      state.toggleScreen != 3
        ? 2
        : isAllObservationDone(state.toggleScreen, state.observationsData),
    isPopupActive: !!state.currentPopup.length,
  };
};

export default connect(mapState)(Screen2);
