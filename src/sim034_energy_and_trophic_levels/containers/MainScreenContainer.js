import LeftArea from "../components/FullArea";
import { connect } from "react-redux";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  showStatic: state.showStatic,
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
  text: data.screentext2,
  altTexts: {
    sun: data.activityAlts.sun,
    eagle: data.activityAlts.eagle,
    snake: data.activityAlts.snake,
    plants: data.activityAlts.plants,
    rabbit: data.activityAlts.brownRabbit,
    pyramid: data.activityAlts.secondScreenPyramid,
    foodChain: data.activityAlts.firstScreenPyramid,
  },
  headingText: data.headingText,
});

const mapDispatch = (dispatch) => ({
  onClick: (id, selectedState) => {
    dispatch(common.updateResetBtnState(false));
  },
});

export default connect(mapState, mapDispatch)(LeftArea);
