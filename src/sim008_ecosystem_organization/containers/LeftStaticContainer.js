import LeftStatic from "../components/LeftArea/LeftStatic";
import { connect } from "react-redux";

import data from "../data";

const mapState = (state) => ({
  question: data.mcqData,
  selectedQuestion: state.selectedQuestion,
});

export default connect(mapState)(LeftStatic);
