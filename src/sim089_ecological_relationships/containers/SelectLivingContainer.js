import { connect } from "react-redux";
import Select from "../../app/components/Select";

import data from "../data";
import { setLivingOrganism, common } from "../actions";

const mapState = (state) => {
  const heading = data.livingOrganismHeading;
  const incorrect =
    state.submitButtonPressed && !state.correctAnswer.includes(heading);
  const disableDropdown =
    state.submitButtonPressed && state.correctAnswer.includes(heading);

  return {
    options: state.updateMcqData[state.setQuestionValue].livingOrganismOption,
    value: state.setLivingOrganismValue,
    disabled: disableDropdown,
    isPopupActive: !!state.currentPopup.length,
    heading: data.livingOrganismHeading,
    classes: !disableDropdown && incorrect ? "incorrect" : "",
  };
};

const matchDispatch = (dispatch) => {
  return {
    onChange: (item) => {
      dispatch(setLivingOrganism({ ...item }));
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(common.toggleToastMessage(false));
      dispatch(common.updateResetBtnState(false));
    },
  };
};

export default connect(mapState, matchDispatch)(Select);
