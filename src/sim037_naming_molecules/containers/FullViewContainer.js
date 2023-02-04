import { connect } from "react-redux";
import FullView from "../components/FullView";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, thunks, setSelectedButton } from "../actions";

const mapState = (state) => {
  return {
    answered: state.answered,
    doorZoomMap: data.doorZoomMap,
    fullViewBGAlt: data.fullViewBGAlt,
    continueButton: data.continueButton,
    screen1Heading: data.screen1Heading,
    selectedQuestion: state.selectedQuestion,
    questions: state.questions,
    isPopupActive: !!state.currentPopup.length,
    heading: data.questionHeading
      .replace("-1-", state.selectedQuestion + 1)
      .replace("-2-", data.classifyingMatterContent.length),
    mainScreenText: data.mainScreenText,
    classes: data.classes,
    selectedButton: state.selectedButton,
  };
};

const matchDispatch = (dispatch) => ({
  onItemClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.verifyItem(id));
  },
  onDoorAnimationEnd: () => {
    dispatch(thunks.onDoorAnimationEnd());
  },
  setResetFocusState: (focus) => {
    dispatch(common.setResetFocusState(focus));
  },
  setSelectedButton: (value) => {
    dispatch(setSelectedButton(value));
  },
  ariaLiveText: (text) => {
    dispatch(common.ariaLiveText(text));
  },
});

export default connect(mapState, matchDispatch)(FullView);
