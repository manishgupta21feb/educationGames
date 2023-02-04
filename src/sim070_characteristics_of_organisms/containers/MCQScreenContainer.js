import { connect } from "react-redux";
import McqScreen from "../components/McqScreen";
import data from "../data";
const mapState = (state) => {
  return {
    heading: data.mcqScreenHeading,
    tableheading: data.mcqData.heading,
    tableData: data.mcqData.tableData,
    answerAttempt: state.submitAnswer,
    submitButtonPressed: state.submitButtonPressed,
    caption: data.mcqData.tableSummary,
  };
};
export default connect(mapState)(McqScreen);
