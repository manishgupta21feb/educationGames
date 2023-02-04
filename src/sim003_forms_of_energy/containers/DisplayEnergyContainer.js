import { connect } from "react-redux";
import DisplayEnergy from "../components/activity/DisplayEnergy";
import data from "../data";

const mapState = (state) => ({
  data: data,
  currentPopup: state.currentPopup,
  videoPlayState: state.videoPlayState,
  selectedQuestion: state.selectedQuestion,
});

export default connect(mapState)(DisplayEnergy);
