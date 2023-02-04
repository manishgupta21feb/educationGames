import { connect } from "react-redux";
import BottomAreaComponent from "../components/activity/observationsScreen/BottomAreaComponent";
import data from "../data";

const mapState = (state) => ({
  introQuestionCounter: state.introQuestionCounter,
  observationsData: state.observationsData,
  currentExperimentNumber: state.currentExperimentNumber,
  nextText: state.buttonType == data.buttonLabels.next ? true : false,
});

export default connect(mapState)(BottomAreaComponent);
