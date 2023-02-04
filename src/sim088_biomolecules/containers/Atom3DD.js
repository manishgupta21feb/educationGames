import { connect } from "react-redux";
import Select from "../../app/components/Select";

import data from "../data";
import {
  setElectrons,
  common,
  setAnswerValue,
  setReactionValue,
  setAtom3,
  thunks,
} from "../actions";

const mapState = (state) => {
  let screenData = state.getCurrentScreenData.filter(
    (x) => x.isActive == true
  )[0];

  let options =
    screenData.compoundData[screenData.currentScreen - 1].dropDownData[2].atom3;

  return {
    options: options,
    value: state.getAtom3,
    disabled: state.getDisableDD[2] ? state.getDisableDD[2] : false,
    isPopupActive: !!state.currentPopup.length,
    heading: screenData.dropdownHeading[2].heading,
    classes: "initialClass", //state.getWrongAnswerValue.reactions ? "incorrect" : dynamicClass,
    defaultText: "--",
  };
};

const matchDispatch = (dispatch) => {
  return {
    onChange: (item) => {
      dispatch(setAtom3({ ...item }));
      dispatch(thunks.submitBtnStatus());
    },
  };
};

export default connect(mapState, matchDispatch)(Select);
