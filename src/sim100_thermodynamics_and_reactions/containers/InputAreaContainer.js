import { connect } from "react-redux";
import InputArea from "../components/activity/InputArea";

import data from "../data";
import { setAnswerValue, common } from "../actions";

const mapState = (state) => {
  let isDisable1, isDisable2;

  if (
    state.getWrongAnswerValue.energy.length != 0 &&
    !state.getWrongAnswerValue.energy
  ) {
    isDisable1 = true;
  }

  if (
    state.getWrongAnswerValue._h.length != 0 &&
    !state.getWrongAnswerValue._h
  ) {
    isDisable2 = true;
  }

  const disableTextbox = isDisable1 || state.getAnswerValue.isSubmitBtnClicked;
  const disableTextbox2 = isDisable2 || state.getAnswerValue.isSubmitBtnClicked;

  return {
    _hValue: state.getAnswerValue._h,
    energyValue: state.getAnswerValue.energy,
    isPopupActive: !!state.currentPopup.length,
    getWrongAnswerValue: state.getWrongAnswerValue,
    disableTextbox,
    disableTextbox2,
    placeHolderData: data.dropdownHeading[2].heading,
    dropdownHeading: data.dropdownHeading,
  };
};

const mapDispatch = (dispatch) => {
  return {
    updateValue: (params) => {
      dispatch(setAnswerValue(params));
      dispatch(common.updateResetBtnState(false));
    },
  };
};

export default connect(mapState, mapDispatch)(InputArea);
