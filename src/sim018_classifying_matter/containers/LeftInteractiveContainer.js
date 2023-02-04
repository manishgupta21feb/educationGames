import { connect } from "react-redux";
import LeftInteractive from "../components/LeftArea/LeftInteractive";
import EventManager from "../../app/events/manager";

import data from "../data";
import { thunk, updateResetBtnState } from "../actions/activity";
import { resetBtnState } from "../reducers/activity";

const mapState = (state) => ({
  selectedLabel: data.selected,
  questions: data.classifyingMatterContent,
  resetBtnState: state.resetBtnState,
  startActivity: state.startActivity,
  selectedQuestion: state.selectedQuestion,
  selectedOrganisms: state.selectedOrganisms,
  isPopupActive: !!state.currentPopup.length,
  kitchenItems: data.kitchenItems,
});

const mapDispatch = (dispatch) => ({
  onClick: (id, selectedState) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.selectOrganism(id, selectedState));
    if (resetBtnState) {
      dispatch(updateResetBtnState(false));
    }
  },
});

export default connect(mapState, mapDispatch)(LeftInteractive);
