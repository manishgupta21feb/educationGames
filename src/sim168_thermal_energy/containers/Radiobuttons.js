import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";

import data from "../data";

const mapState = (state) => ({
  radiobuttons: data.mcqOptions,
  selectedOption: state.mcqAnswer,
  labelledby: "question-text-para",
  isPopupActive: !!state.currentPopup.length,
  disabled: !!state.currentPopup.length || state.questionAnswered,
});

export default connect(mapState)(RadioButton);
