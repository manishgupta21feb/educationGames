import { connect } from "react-redux";
import RightArea from "../components/RightArea";
import data from "../data";

const mapState = (state) => {
  let activityText =
    state.selectedPhysicalProperty == "Mass"
      ? data.activityTextMass
      : state.selectedPhysicalProperty == "Volume"
      ? data.activityTextVolume
      : state.selectedPhysicalProperty == "Magnetism"
      ? data.activityTextMagnestism
      : state.selectedPhysicalProperty == "Relative density"
      ? data.activityTextRelativeDensity
      : data.activityTextElectricalConductivity;
  return {
    activityText: activityText,
    headingText: data.headingText,
    showNextButton: state.showNextButton,
    selectedPhysicalProperty: state.selectedPhysicalProperty,
    activityCompleted: state.priviousSelectedPhysicalProperties.length == 5,
    priviousSelectedItem: state.priviousSelectedItem,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(RightArea);
