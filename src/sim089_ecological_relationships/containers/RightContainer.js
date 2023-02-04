import { connect } from "react-redux";
import RightArea from "../components/ViewArea/RightArea";

import data from "../data";

const mapState = (state) => {
  return {
    nextButtonShow: state.submitAnswer,
  };
};

export default connect(mapState)(RightArea);
