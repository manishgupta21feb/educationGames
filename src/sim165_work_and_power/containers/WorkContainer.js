import Work from "../components/FullView/Work";
import { connect } from "react-redux";

import { common, setCurrentSection } from "../actions";
import simData from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    workHeading: simData.work.heading,
    dropHeadings: simData.work.dropHeading,
    forceContent: simData.work.force,
    workDoneContent: simData.work.workDone,
    disValue: simData.work.slider.listitems[state.getUpdateSlider].value,
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

export default connect(mapState, mapDispatch)(Work);
