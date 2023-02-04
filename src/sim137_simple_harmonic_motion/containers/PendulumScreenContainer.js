import { connect } from "react-redux";
import {
  common,
  setPendulumTwoMass,
  setPendulumOneMass,
  setPendulumOneLength,
  setPendulumTwoLength,
} from "../actions";
import Pendulum from "../components/ViewArea/PendulumScreen/pendulum.js";
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
    valuesMass: data.valuesMass,
    rularValues: data.rularValue,
    protactorValue: data.protactorValue,
    PendulumOneAltText1: data.PendulumOneAltText1,
    PendulumOneAltText2: data.PendulumOneAltText2,
    PendulumTwoAltText1: data.PendulumTwoAltText1,
    PendulumTwoAltText2: data.PendulumTwoAltText2,
    PendulumOneAltText3: data.PendulumOneAltText3,
    massLabelOnePendulum: data.pendulumHeadings.massLabelOnePendulum,
    massLabelTwoPendulum: data.pendulumHeadings.massLabelTwoPendulum,
    lenghtLabelOnePendulum: data.pendulumHeadings.lenghtLabelOnePendulum,
    lengthLabelTwoPendulum: data.pendulumHeadings.lengthLabelTwoPendulum,
  };
};

const matchDispatch = (dispatch) => ({
  changeMassOne: (val) => {
    dispatch(setPendulumOneMass({ ...val }));
  },
  changeMassTwo: (val) => {
    dispatch(setPendulumTwoMass({ ...val }));
  },
  changeLengthTwo: (val) => {
    dispatch(setPendulumTwoLength({ ...val }));
  },
  changeLengthOne: (val) => {
    dispatch(setPendulumOneLength({ ...val }));
  },
});

export default connect(mapState, matchDispatch)(Pendulum);
