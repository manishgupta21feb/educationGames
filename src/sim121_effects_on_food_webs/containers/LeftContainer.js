import { map } from "jquery";
import { connect } from "react-redux";
import { common, thunks } from "../actions";
import LeftArea from "../components/ViewArea/LeftArea";

import data from "../data";

const mapState = (state) => {
  return {
   
    dropdownOne: data.dropDown1[state.setQuestionValue],
    dropdownTwo: data.dropDown2[state.setQuestionValue],
    dropdownThree: data.dropDown3[state.setQuestionValue],
    buttonShow: data.firstScreenButton,
    imgAlt: data.mainimgalt,
    mcqShow: state.mcqShow,
    secondScreen: state.secondScreen,
    visitedHotspots: state.visitedHotspots,
    correctAnswer: state.correctAnswer,
    chartShow: state.updatedChart,
    disableHotspot: state.selectedHotspot,
    isPopupActive: !!state.currentPopup.length,
  };
};
const mapDispatch = (dispatch) => ({
  updateClick: (value, item) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(thunks.clickButton(value));
  },
});
export default connect(mapState, mapDispatch)(LeftArea);
