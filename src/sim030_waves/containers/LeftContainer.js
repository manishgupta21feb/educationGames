import { connect } from "react-redux";
import Left from "../components/activity/Main/Left";
import data from "../data";

const mapState = (state) => ({
  pushForces: data.pushForces,
  selectedForce: state.selectedForce,
  videoPlayState: state.videoPlayState,
});
const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(Left);
