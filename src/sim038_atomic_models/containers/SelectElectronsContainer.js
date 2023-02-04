import { connect } from "react-redux";
import Select from "../../app/components/Select";

import data from "../data";
import { setElectrons, common } from "../actions";

const mapState = (state) => {
  const name = "electrons";
  const incorrect = state.incorrectOptions.indexOf(name) >= 0;
  const disableDropdown = state.correctOptions.indexOf(name) >= 0;
  const options = state.selectedQuestion.selectOptions.electrons;

  return {
    options: options,
    value: state.electrons,
    disabled: disableDropdown,
    isPopupActive: !!state.currentPopup.length,
    heading: data.dropDownHeadings[0].electronsHeading,
    classes: !disableDropdown && incorrect ? "incorrect" : "",
  };
};

const matchDispatch = (dispatch) => {
  return {
    onChange: (item) => {
      dispatch(setElectrons({ ...item }));
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(common.toggleToastMessage(false));
      dispatch(common.updateResetBtnState(false));
    },
  };
};

export default connect(mapState, matchDispatch)(Select);
