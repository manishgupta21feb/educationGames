import { connect } from "react-redux";
import Image from "../components/activity/Image";

import data from "../data";

const mapState = (state) => {
  return {
    questions: data.equationsData,
    currentPopup: state.currentPopup,
    question: state.selectedQuestion,
  };
};

export default connect(mapState)(Image);
