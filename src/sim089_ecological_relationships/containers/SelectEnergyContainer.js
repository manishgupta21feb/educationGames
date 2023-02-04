import { connect } from "react-redux";
import Select from "../../app/components/Select";

import data from "../data";
import { setEnergy, common } from "../actions";

const mapState = (state) => {
  const heading = data.energyHeading;
  const incorrect =
    state.submitButtonPressed && !state.correctAnswer.includes(heading);
  const disableDropdown =
    state.submitButtonPressed && state.correctAnswer.includes(heading);

  return {
    options: state.updateMcqData[state.setQuestionValue].energyOption,
    value: state.setEnergyValue,
    disabled: disableDropdown,
    isPopupActive: !!state.currentPopup.length,
    heading: data.energyHeading,
    classes: !disableDropdown && incorrect ? "incorrect" : "",
  };
};

const matchDispatch = (dispatch) => {
  return {
    onChange: (item) => {
      dispatch(setEnergy({ ...item }));
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(common.toggleToastMessage(false));
      dispatch(common.updateResetBtnState(false));
    },
  };
};

export default connect(mapState, matchDispatch)(Select);
