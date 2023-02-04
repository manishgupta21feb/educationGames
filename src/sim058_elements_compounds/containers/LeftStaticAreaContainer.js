import { connect } from "react-redux";
import Image from "../components/LeftView/LeftImg.js";

import data from "../data";

const mapState = (state) => {
  return {
    questions: data.equationsData,
    currentPopup: state.currentPopup,
    question: state.selectedQuestion,
    count: state.questionCount,
  };
};

export default connect(mapState)(Image);
