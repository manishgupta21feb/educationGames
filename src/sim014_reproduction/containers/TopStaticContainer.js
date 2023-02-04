import { connect } from "react-redux";
import TopStatic from "../components/TopSection/TopStatic";

import data from "../data";

const mapState = (state) => ({
  question: data.mcqData,
  mcqQuestion: state.mcqQuestion,
  selectedQuestion: state.selectedQuestion,
  jumpToMCQScreenState: state.jumpToMCQScreenState,
});

export default connect(mapState)(TopStatic);
