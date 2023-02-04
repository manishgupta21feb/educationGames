import { connect } from "react-redux";
import TopArea from "../components/ThirdScreen/TopArea";

import data from "../data";

const mapState = (state) => {
  return {
    questions: data.equationsData,
    currentPopup: state.currentPopup,
    question: state.selectedQuestion,
  };
};

export default connect(mapState)(TopArea);
