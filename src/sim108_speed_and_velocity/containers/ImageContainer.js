import { connect } from "react-redux";
import Image from "../components/activity/TopArea/toparea";
import data from "../data";
import * as actions from "../../app/actions";
import { setNextBtnVideo } from "../actions";
export const common = { ...actions };
const mapState = (state) => {
  return {
    a11yVideoButtonLabel:
      data.observationsData[state.selectedQuestion].liveText,
    scenerioImage: data.mcqScreenoneData,
    imageId: data.mcqScreenoneData[state.selectedQuestion].id,
    scenarioTwoAlt:data.scenarioTwoAlt,
    currentPopup: state.currentPopup,
    question: state.selectedQuestion,
    buttonLabels: data.buttonLabels,
    currentPopup: state.currentPopup,
    observationsData: state.observationsData,
    resetBtnState: state.resetBtnState,
    getNextClick: state.getNextClick,
    mcqView: state.mcqShow,
  };
};

const mapDispatch = (dispatch) => ({
  onClick: (liveText) => {
    
    dispatch(common.updateResetBtnState(false));
    dispatch(common.ariaLiveAssertive(" "));
    setTimeout(() => {
      dispatch(common.ariaLiveAssertive(liveText));
    }, 100);
    setTimeout(() => {
      dispatch(common.ariaLiveAssertive(" "));
    }, 500);
   
  },

  onVideoEnd: () => {
    dispatch(setNextBtnVideo(true));
  },
  enableContinueBtn: (item) => {
    dispatch(common.updateResetBtnState(false));
    dispatch(setNextBtnVideo(item));
  },
});
export default connect(mapState, mapDispatch)(Image);
