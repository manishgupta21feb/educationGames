import { connect } from "react-redux";
import Screen1 from "../components/activity/Screens/Screen1";
import { isAllObservationDone } from "../helper";

const mapState = (state) => {
  return {
    showIntroScreen: isAllObservationDone(
      state.toggleScreen,
      state.observationsData
    ),
    isPopupActive: !!state.currentPopup.length,
  };
};

export default connect(mapState)(Screen1);
