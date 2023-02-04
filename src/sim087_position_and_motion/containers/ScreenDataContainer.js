import { connect } from "react-redux";
import ScreenData from "../components/ScreenData";
import data from "../data/index";

const mapState = (state) => ({
  id: state.selectedAnswerOption,
  animationScreenId: state.animationScreenId,
  data:
    state.animationScreenId === "seesaw"
      ? data.graphData.push
      : data.graphData.hit,
  showVideoLevel: state.showVideoLevel,
});

const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(ScreenData);
