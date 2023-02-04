import { connect } from "react-redux";
import Select from "../../app/components/Select";

import data from "../data";
import {
  setElectrons,
  common,
  setAnswerValue,
  setReactionValue,
  setAtom1,
  thunks,
} from "../actions";

const mapState = (state) => {
  let screenData = state.getCurrentScreenData.filter(
    (x) => x.isActive == true
  )[0];

  let options =
    screenData.compoundData[screenData.currentScreen - 1].dropDownData[0].atom1;

  return {
    options: options,
    value: state.getAtom1,
    disabled: state.getDisableDD[0] ? state.getDisableDD[0] : false,
    isPopupActive: !!state.currentPopup.length,
    heading: screenData.dropdownHeading[0].heading,
    classes: "initialClass", //state.getWrongAnswerValue.reactions ? "incorrect" : dynamicClass,
    defaultText: "--",
  };
};

const matchDispatch = (dispatch) => {
  return {
    onChange: (item) => {
      dispatch(setAtom1({ ...item }));
      dispatch(thunks.submitBtnStatus());
    },
  };
};

export default connect(mapState, matchDispatch)(Select);
