import Power from "../components/FullView/Power";
import { connect } from "react-redux";

import { common, setCurrentSection } from "../actions";
import simData from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    powerHeading: simData.power.heading,
    dropHeadings: simData.power.dropHeading,
    forceContent: simData.power.force,
    disContent: simData.power.displacement,
    workDoneContent: simData.power.powerUsed,
    disValue: simData.power.slider.listitems[state.getUpdateSlider].value,
    forceDirection: state.getDropDownData[0].text || "Left",
    disDirect: state.getDropDownData[1].text || "Left",
    begunAnimation: state.getAnimationStart,
    calculationAria: simData.calculationAria,
  };
};

const mapDispatch = (dispatch) => ({
  onLocationChange: (data) => {
    dispatch(setCurrentSection(data));
    dispatch(common.updateResetBtnState(false));
  },
});

export default connect(mapState, mapDispatch)(Power);
