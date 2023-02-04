import { connect } from "react-redux";
import Select from "../../app/components/Select";

import data from "../data";
import { setProtons, common } from "../actions";

const mapState = (state) => {
  const name = "protons";
  const incorrect = state.incorrectOptions.indexOf(name) >= 0;
  const options = state.selectedQuestion.selectOptions.protons;
  const disableDropdown = state.correctOptions.indexOf(name) >= 0;

  return {
    options: options,
    value: state.protons,
    disabled: disableDropdown,
    isPopupActive: !!state.currentPopup.length,
    heading: data.dropDownHeadings[0].protonsHeading,
    classes: !disableDropdown && incorrect ? "incorrect" : "",
  };
};

const matchDispatch = (dispatch) => {
  return {
    onChange: (item) => {
      console.log("onChange for protons: ", item);
      dispatch(setProtons({ ...item }));
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(common.toggleToastMessage(false));
      dispatch(common.updateResetBtnState(false));
    },
  };
};

export default connect(mapState, matchDispatch)(Select);
