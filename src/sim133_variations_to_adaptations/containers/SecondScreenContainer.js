import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import SecondScreen from "../components/secondScreen";

import data from "../data";
import { common, thunk } from "../actions";

const mapState = (state) => {
  return {
    secondScreenText: data.secondScreenText,
    smallBeakedBirdTxt: data.smallBeakedBirdTxt,
    largeBeakedBirdTxt: data.largeBeakedBirdTxt,
    isPopupActive: !!state.currentPopup.length,
    continueButtonLabels: data.buttonLabels.continue,
    SecondScreenImgAria: data.SecondScreenImgAria,
  };
};

const matchDispatch = (dispatch) => {
  return {
    onSecondScreenContinue: () => {
      dispatch(thunk.onSecondScreenContinue());
      EventManager.broadcast("SECONDARY_CLICK");
      setTimeout(() => {
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      }, 100);
    },
  };
};

export default connect(mapState, matchDispatch)(SecondScreen);
