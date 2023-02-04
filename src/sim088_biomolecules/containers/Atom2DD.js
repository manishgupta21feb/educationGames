import { connect } from "react-redux";
import Select from "../../app/components/Select";

import data from "../data";
import {
  setElectrons,
  common,
  setAnswerValue,
  setReactionValue,
  setAtom2,
  thunks,
} from "../actions";

const mapState = (state) => {
  let screenData = state.getCurrentScreenData.filter(
    (x) => x.isActive == true
  )[0];

  let options =
    screenData.compoundData[screenData.currentScreen - 1].dropDownData[1].atom2;

  return {
    options: options,
    value: state.getAtom2,
    disabled: state.getDisableDD[1] ? state.getDisableDD[1] : false,
    isPopupActive: !!state.currentPopup.length,
    heading: screenData.dropdownHeading[1].heading,
    classes: "initialClass", //state.getWrongAnswerValue.reactions ? "incorrect" : dynamicClass,
    defaultText: "--",
  };
};

const matchDispatch = (dispatch) => {
  return {
    onChange: (item) => {
    
      dispatch(setAtom2({ ...item }));
      dispatch(thunks.submitBtnStatus());
      
    },
  };
};

export default connect(mapState, matchDispatch)(Select);
