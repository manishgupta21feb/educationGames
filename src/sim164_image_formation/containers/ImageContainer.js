import { connect } from "react-redux";
import Image from "../components/activity/Image";

import data from "../data";

const mapState = (state) => {
  return {
    imageData: state.getQuestionsData[state.getQuestionCount],
    imageEquipment: data.focalLengthContent,
  };
};

export default connect(mapState)(Image);
