import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";

import data from "../data";
import { thunk } from "../actions";

const mapState = (state) => {
  return {
    buttonText: data.buttonPlay,
    disabled:
      state.tripCount > 5 || state.animationState || state.currentPopup.length,
    isPopupActive: !!state.currentPopup.length,
    question: data.controlInstructionsText,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunk.playAnimation());
    EventManager.broadcast("PRIMARY_CLICK");
  },
});

export default connect(mapState, matchDispatch)(MCQArea);
