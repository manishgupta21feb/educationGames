import { connect } from "react-redux";
import {
  common,
  setPendulumTwoMass,
  setPendulumOneMass,
  setPendulumOneLength,
  setPendulumTwoLength,
} from "../actions";
import AnimationScreen from "../components/ViewArea/PendulumScreen/animationScreen.js";
import data from "../data";

const mapState = (state) => {
  return {
    data: data,
    ifSinglePendulum: state.pendulumScreen,
    pendulumHeadingOne: data.pendulumHeadings.topHeadingPendulumOne,
    pendulumHeadingTwo: data.pendulumHeadings.topHeadingPendulumTwo,
    selectMassHeading: data.pendulumHeadings.massHeading,
    selectLengthHeading: data.pendulumHeadings.lengthHeading,
    pendulumOneLength: data.pendulumOne.valuesLength,
    pendulumTwoLength: data.pendulumTwo.valuesLength,
    massValuePendulumOne: state.pendulumOneMass,
    lengthValuePendulumOne: state.pendulumOneLength,
    massValuePendulumTwo: state.pendulumTwoMass,
    lengthValuePendulumTwo: state.pendulumTwoLength,
    degree: state.degree,
    startStop: state.startStop,
    PendulumOneAltText1: data.PendulumOneAltText1,
    PendulumOneAltText2: data.PendulumOneAltText2,
    PendulumTwoAltText1: data.PendulumTwoAltText1,
    PendulumTwoAltText2: data.PendulumTwoAltText2,
    PendulumOneAltText3: data.PendulumOneAltText3,
    liveAltPendulumOne: state.liveAltPendulumOne,
    liveAltPendulumTwo: state.liveAltPendulumTwo,
  };
};

const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(AnimationScreen);
