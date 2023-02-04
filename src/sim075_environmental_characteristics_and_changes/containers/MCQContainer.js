import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";

import data from "../data/index";

const mapState = (state) => {
  return {
    headingLevel: "2",
    buttonText: data.buttonLabels.submitAnswer,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(MCQArea);
