import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";

import data from "../data";

const mapState = (state) => ({
  labelledby: "question-text-para",
  selectedOption: state.mcq1Answer,
  isPopupActive: !!state.currentPopup.length,
  disabled: !!state.currentPopup.length || state.questionAnswered,
  radiobuttons: data.mcq1Options,
});

export default connect(mapState)(RadioButton);
