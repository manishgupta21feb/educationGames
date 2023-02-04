import { connect } from "react-redux";
import FullView from "../components/FullView";
import EventManager from "../../app/events/manager";

import data from "../data";
import { thunk } from "../actions/activity";

const mapState = (state) => ({
  answered: state.answered,
  fullViewBGAlt: data.fullViewBGAlt,
  continueButton: data.continueButton,
  screen1Heading: data.screen1Heading,
  selectedQuestion: state.selectedQuestion,
  questions: data.classifyingMatterContent,
  isPopupActive: !!state.currentPopup.length,
});

const matchDispatch = (dispatch) => ({
  onItemClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.verifyItem(id));
  },
  onContinueClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.onContinueClick());
  },
});

export default connect(mapState, matchDispatch)(FullView);
