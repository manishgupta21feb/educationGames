import { connect } from "react-redux";
import LeftInteractive from "../components/LeftArea/LeftInteractive";
import EventManager from "../../app/events/manager";

import data from "../data";
import { thunk, updateResetBtnState } from "../actions/activity";
import { ariaLiveText } from "../actions";
import { resetBtnState } from "../reducers/activity";

const mapState = (state) => ({
  selectedLabel: data.selected,
  questions: data.ecosystemContent,
  resetBtnState: state.resetBtnState,
  startActivity: state.startActivity,
  selectedQuestion: state.selectedQuestion,
  selectedOrganisms: state.selectedOrganisms,
  isPopupActive: !!state.currentPopup.length,
  btnClasses: `hotspot-btn ${
    state.selectedOrganisms.indexOf(
      data.ecosystemContent[state.selectedQuestion]
    ) >= 0
      ? "active"
      : ""
  }`,
  btnText: data.ecosystemContent[state.selectedQuestion],
  correctAnswer: state.correctAnswer,
});

const mapDispatch = (dispatch) => ({
  onClick: (id, selectedState) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.selectOrganism(id, selectedState));
    if (resetBtnState) {
      dispatch(updateResetBtnState(false));
    }
  },

  ariaLiveText: (text) => {
    dispatch(ariaLiveText(text));
    setTimeout(() => {
      dispatch(ariaLiveText(" "));
    }, 300);
  },
});

export default connect(mapState, mapDispatch)(LeftInteractive);
