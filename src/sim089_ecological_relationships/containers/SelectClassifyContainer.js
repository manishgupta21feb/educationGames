import { connect } from "react-redux";
import Select from "../../app/components/Select";

import data from "../data";
import { setClassify, common } from "../actions";

const mapState = (state) => {
  const heading = data.classifyHeading;
  const incorrect =
    state.submitButtonPressed && !state.correctAnswer.includes(heading);
  const disableDropdown =
    state.submitButtonPressed && state.correctAnswer.includes(heading);
  return {
    options: data.consumerData,
    value: state.setClassifyValue,
    disabled: disableDropdown,
    isPopupActive: !!state.currentPopup.length,
    heading: data.classifyHeading,
    classes: !disableDropdown && incorrect ? "incorrect" : "",
  };
};

const matchDispatch = (dispatch) => {
  return {
    onChange: (item) => {
      dispatch(setClassify({ ...item }));
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(common.toggleToastMessage(false));
      dispatch(common.updateResetBtnState(false));
    },
  };
};

export default connect(mapState, matchDispatch)(Select);
