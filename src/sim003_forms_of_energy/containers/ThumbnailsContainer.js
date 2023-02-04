import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import VideosComponent from "../components/activity/Thumbnails";

import data from "../data";
import { thunk, common, selectQuestion, toggleQuestion } from "../actions";

const mapStateToProps = (state) => ({
  data: data,
  currentPopup: state.currentPopup,
  showIntroScreen: state.toggleQuestion,
});

const mapDispatchToPRops = (dispatch) => ({
  setQuestion: (value) => {
    dispatch(common.updateResetBtnState(false));
    dispatch(common.setResetFocusState(true));
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(selectQuestion(value));
    dispatch(thunk.setVisitedThumbnails(value));
  },
  toggleQuestion: (show) => {
    dispatch(toggleQuestion(show));
  },
});

export default connect(mapStateToProps, mapDispatchToPRops)(VideosComponent);
