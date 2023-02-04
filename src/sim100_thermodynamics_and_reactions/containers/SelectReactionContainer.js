import { connect } from "react-redux";
import Select from "../../app/components/Select";

import data from "../data";
import {
  setElectrons,
  common,
  setAnswerValue,
  setReactionValue,
} from "../actions";

const mapState = (state) => {
  const name = "Reaction";
  const disableDropdown = state.getAnswerValue.isSubmitBtnClicked;
  const options = state.questionsData.find((x) => x.isActive == true)
    .selectOptions.reaction;
  let dynamicClass =
    Object.keys(state.electrons).length === 0
      ? "initialClass"
      : "selectedClass";

  let isDisable;
  if (
    state.getWrongAnswerValue.reactions.length != 0 &&
    !state.getWrongAnswerValue.reactions
  ) {
    isDisable = true;
  }

  return {
    options: options,
    value: state.electrons,
    disabled: disableDropdown || isDisable,
    isPopupActive: !!state.currentPopup.length,
    heading: data.dropdownHeading[1].heading,
    classes: state.getWrongAnswerValue.reactions ? "incorrect" : dynamicClass,
    defaultText: data.selectAnwser,
  };
};

const matchDispatch = (dispatch) => {
  return {
    onChange: (item) => {
      dispatch(setAnswerValue({ type: "reactions", data: item.id }));
      dispatch(setElectrons({ ...item }));
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(common.toggleToastMessage(false));
      dispatch(common.updateResetBtnState(false));
    },
  };
};

export default connect(mapState, matchDispatch)(Select);
