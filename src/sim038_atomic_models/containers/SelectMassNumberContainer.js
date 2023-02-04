import { connect } from "react-redux";
import Select from "../../app/components/Select";

import data from "../data";
import { setMassNumber, common } from "../actions";

const mapState = (state) => {
  const name = "massNumber";
  const incorrect = state.incorrectOptions.indexOf(name) >= 0;
  const disableDropdown = state.correctOptions.indexOf(name) >= 0;
  const options = state.selectedQuestion.selectOptions.massNumber;

  return {
    options: options,
    value: state.massNumber,
    disabled: disableDropdown,
    isPopupActive: !!state.currentPopup.length,
    heading: data.dropDownHeadings[0].massnumberHeading,
    classes: !disableDropdown && incorrect ? "incorrect" : "",
  };
};

const matchDispatch = (dispatch) => {
  return {
    onChange: (item) => {
      dispatch(setMassNumber({ ...item }));
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(common.toggleToastMessage(false));
      dispatch(common.updateResetBtnState(false));
    },
  };
};

export default connect(mapState, matchDispatch)(Select);
