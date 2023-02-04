import { connect } from "react-redux";
import Select from "../../app/components/Select";

import data from "../data";
import { setElementName, common } from "../actions";

const mapState = (state) => {
  const name = "elementName";
  const incorrect = state.incorrectOptions.indexOf(name) >= 0;
  const disableDropdown = state.correctOptions.indexOf(name) >= 0;
  const options = state.selectedQuestion.selectOptions.elementName;

  return {
    options: options,
    value: state.elementName,
    disabled: disableDropdown,
    isPopupActive: !!state.currentPopup.length,
    heading: data.dropDownHeadings[0].elementnameHeading,
    classes: !disableDropdown && incorrect ? "incorrect" : "",
  };
};

const matchDispatch = (dispatch) => {
  return {
    onChange: (item) => {
      dispatch(setElementName({ ...item }));
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(common.toggleToastMessage(false));
      dispatch(common.updateResetBtnState(false));
    },
  };
};

export default connect(mapState, matchDispatch)(Select);
