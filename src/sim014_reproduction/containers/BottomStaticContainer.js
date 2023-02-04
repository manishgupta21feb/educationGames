import { connect } from "react-redux";
import BottomStatic from "../components/BottomSection/BottomStatic";

import data from "../data";

const mapState = (state) => ({
  questions: data.mainScreenMCQ,
  hotspotData: data.hotspotData,
  selectedQuestionId: state.selectedQuestion,
  selectedTextContent: state.selectedButton,
  selectedHotspot: state.selectedHotspot,
  selectedButton: state.selectedButton,
});

export default connect(mapState)(BottomStatic);
