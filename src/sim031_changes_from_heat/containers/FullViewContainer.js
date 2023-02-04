import { connect } from "react-redux";
import FullView from "../components/FullView";

import data from "../data";
import { thunk, selectQuestion, common } from "../actions";

const mapState = (state) => ({
  answered: state.answered,
  currentPopup: state.currentPopup,
  fullViewBGAlt: data.fullViewBGAlt,
  activityHeading: data.activityHeading,
  selectedQuestion: state.selectedQuestion,
  questions: data.classifyingMatterContent,
  isPopupActive: !!state.currentPopup.length,
  arrayVisited: state.arrayVisited,
  hotPlateLabel: data.hotPlateLabel,
  iceBoxLabel: data.iceBoxLabel,
  altTexts: data.altTexts,
});

const matchDispatch = (dispatch) => ({
  onItemClick: (id) => {
    dispatch(thunk.verifyItem(id));
  },

  selectQuestion: (id) => {
    dispatch(selectQuestion(id));
    dispatch(common.setResetFocusState(true));
  },

  onTemperatureButtonClick: (id) => {
    dispatch(thunk.onTemperatureButtonClick(id));
  },

  ariaLiveText: (text) => {
    setTimeout(() => {
      dispatch(common.ariaLiveText(text));
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 400);
    }, 800);
  },
  ariaLiveText2: (text) => {
    setTimeout(() => {
      dispatch(common.ariaLiveText(text));
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 400);
    }, 500);
  },
});

export default connect(mapState, matchDispatch)(FullView);
