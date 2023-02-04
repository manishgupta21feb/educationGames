import { connect } from "react-redux";
import Video from "../components/activity/Video";

import data from "../data";

const mapState = (state) => {
  return {
    autoPlay: true,
    buttonLabels: data.buttonLabels,
    currentPopup: state.currentPopup,
    question: state.selectedQuestion,
  };
};

export default connect(mapState)(Video);
