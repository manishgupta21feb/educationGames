import { connect } from "react-redux";
import { common, thunks } from "../actions";
import LaunchScreen from "../components/Screens/LaunchScreen";

import data from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    buttonLabels: data.buttonLabels,
    departments: data.hospitalData,
    visitedDepartments: state.visitedDepartments,
    hospitalAltText: data.hospitalAltText,
    hospitalText: data.hospital
  };
};

const mapDispatch = (dispatch) => ({
  onDeparmentclick: (value) => {
    dispatch(thunks.setSelectedDepartment(value));
    setTimeout(() => {
      dispatch(common.setResetFocusState(true));
    }, 200);
  },
  onExit: () => {
    dispatch(common.togglePopup(4));
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      EventManager.broadcast("COMPLETION_SCREEN");
    }, 100);
  }
});

export default connect(mapState, mapDispatch)(LaunchScreen);

