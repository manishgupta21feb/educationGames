import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";
import data from "../data";
import { common, currentExperimentNumber, thunks } from "../actions";

const mapState = (state) => {
  return {
    labelledby: "mainHeading",
    radiobuttons: data.equationOptions,
    selectedOption: state.selectedAnswerOption,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (id) => {
    dispatch(
      id == "moving" ? currentExperimentNumber(2) : currentExperimentNumber(1)
    );

    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(thunks.selectAnswerOption(id));

    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, mapDispatch)(RadioButton);
