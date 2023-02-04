import { connect } from "react-redux";
import Select from "../../app/components/Select";

import data from "../data";
import { setElementName, common, setAnswerValue } from "../actions";

const mapState = (state) => {
  const disableDropdown = state.getAnswerValue.isSubmitBtnClicked;
  const options = state.questionsData.find((x) => x.isActive == true)
    .selectOptions.sign;
  let dynamicClass =
    Object.keys(state.elementName).length === 0
      ? "initialClass"
      : "selectedClass";

  let isDisable;
  if (
    state.getWrongAnswerValue.signs.length != 0 &&
    !state.getWrongAnswerValue.signs
  ) {
    isDisable = true;
  }

  return {
    options: options,
    value: state.elementName,
    disabled: disableDropdown || isDisable,
    isPopupActive: !!state.currentPopup.length,
    heading: data.dropdownHeading[0].heading,
    headingLabel: data.dropdownHeading[0].ariaLabel,
    classes: state.getWrongAnswerValue.signs ? "incorrect" : dynamicClass,
    defaultText: data.selectAnwser,
  };
};

const matchDispatch = (dispatch) => {
  return {
    onChange: (item) => {
      dispatch(setAnswerValue({ type: "signs", data: item.id }));
      dispatch(setElementName({ ...item }));
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(common.toggleToastMessage(false));
      dispatch(common.updateResetBtnState(false));
    },
  };
};

export default connect(mapState, matchDispatch)(Select);
