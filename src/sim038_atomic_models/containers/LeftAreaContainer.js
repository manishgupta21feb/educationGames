import { connect } from "react-redux";
import LeftArea from "../components/activity/LeftArea";

import data from "../data";

const mapState = (state) => {
  return {
    data: data.equationsData,
    heading: data.screenHeading,
    bottomLabels: data.bottomLabels,
    question: state.selectedQuestion,
    currentPopup: state.currentPopup,
    questionCount: state.questionCount,
    labels: data.labels,
  };
};

export default connect(mapState)(LeftArea);
