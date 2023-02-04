import { connect } from "react-redux";
import Background from "../components/activity/MCQ/QuestionBackgroundArea";

import data from "../data";

const mapStateToProps = (state) => ({
  videoStopText: data.videoStop,
  videoPlayText: data.videoPlay,
  currentPopup: state.currentPopup,
  isToggleQuestion: state.toggleQuestion,
  selectedQuestion: state.selectedQuestion,
});

const mapDispatchToProps = (dispatch) => ({
  setSoundOnClick: () => {
    EventManager.broadcast("PRIMARY_CLICK");
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Background);
