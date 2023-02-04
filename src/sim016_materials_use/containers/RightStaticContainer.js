import { connect } from "react-redux";
import RightStatic from "../components/RightLeft/RightStatic";

import data from "../data";

const mapState = (state) => ({
  // questions: data.classifyingMatterContent,
  // selectedQuestionId: state.selectedQuestion,
  // levelSelected: state.selectedOrganism,
  // bttryText: data.bttryText,
  // screentext3: data.screentext3,
  // selectedOrganisms: state.selectedOrganisms,
  textInfo: data.draggableData.draggables[1].infoText,
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(RightStatic);
