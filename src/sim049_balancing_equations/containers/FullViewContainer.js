import { connect } from "react-redux";
import FullView from "../components/FullView";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, thunks } from "../actions/";

const mapState = (state) => {
  return {
    equations: data.equations,
    optionOne: data.mcqOptions[0].id,
    optionTwo: data.mcqOptions[1].id,
    fullViewBGAlt: data.fullViewBGAlt,
    continueButton: data.continueButton,
    screen1Heading: data.screen1Heading,
    mainScreenText: data.mainScreenText,
    selectedOption: state.selectedOption,
    isPopupActive: !!state.currentPopup.length,
    arrowTail: data.arrowTail,
  };
};

const matchDispatch = (dispatch) => ({
  onItemClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.verifyItem(id));
  },
  setResetFocusState: (focus) => {
    dispatch(common.setResetFocusState(focus));
  },
  ariaLiveText: (text) => {
    dispatch(common.ariaLiveText(text));
  },
});

export default connect(mapState, matchDispatch)(FullView);
