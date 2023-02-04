import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";
import EventManager from "../../app/events/manager";

import data from "../data/";
import { thunks, setAnimationState } from "../actions";

const mapState = (state) => ({
  question: data.mcqHeading,
  headingLevel: "2",
  buttonText: state.playButtonText,
  isPopupActive: !!state.currentPopup.length,
  disabled: state.animationState || state.selectedMaterial == "none",
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(thunks.setAnimationState(true));
  },
});

export default connect(mapState, matchDispatch)(MCQArea);
