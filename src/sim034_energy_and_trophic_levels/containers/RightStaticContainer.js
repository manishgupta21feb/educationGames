import { connect } from "react-redux";
import RightStatic from "../components/RightArea/RightStatic";

import data from "../data";

const mapState = (state) => ({
  questions: data.classifyingMatterContent,
  selectedQuestionId: state.selectedQuestion,
  levelSelected: state.selectedOrganism,
  bttryText: data.bttryText,
  screentext3: data.screentext3,
  selectedOrganisms: state.selectedOrganisms,
});

export default connect(mapState)(RightStatic);
