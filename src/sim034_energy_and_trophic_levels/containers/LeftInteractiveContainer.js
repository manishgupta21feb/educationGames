import { connect } from "react-redux";
import LeftInteractive from "../components/LeftArea/LeftInteractive";

import data from "../data";
import { thunk, common } from "../actions";

const mapState = (state) => ({
  selectedLabel: data.selected,
  questions: data.classifyingMatterContent,
  resetBtnState: state.resetBtnState,
  startActivity: state.startActivity,
  selectedQuestion: state.selectedQuestion,
  selectedOrganisms: state.selectedOrganisms,
  isPopupActive: !!state.currentPopup.length,
  kitchenItems: data.kitchenItems,
  levelSelected: state.selectedOrganism,
  screentext1: data.screentext1,
  screentext2: data.screentext2,
  headingText: data.headingText,
  altTexts: {
    sun: data.activityAlts.sun,
    eagle: data.activityAlts.eagle,
    snake: data.activityAlts.snake,
    plants: data.activityAlts.plants,
    rabbit: data.activityAlts.brownRabbit,
    foodChain: data.activityAlts.firstScreenPyramid,
  },
});

const mapDispatch = (dispatch) => ({
  onClick: (id, selectedState) => {
    dispatch(thunk.selectOrganism(id, selectedState));
    dispatch(common.updateResetBtnState(false));
  },
});

export default connect(mapState, mapDispatch)(LeftInteractive);
