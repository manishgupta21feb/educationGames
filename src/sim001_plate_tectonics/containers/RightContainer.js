import { connect } from "react-redux";
import RightComponent from "../components/activity/Right";

import { updateSelectedYear, updateCanvasData } from "../actions";

const mapState = (state) => {
  return {
    toastMsg: state.toastMsg,
    canvasData: state.canvasData,
    selectedYear: state.selectedYear,
    mapCompleted: state.mapCompleted,
    ariaLiveText: state.ariaLiveText,
    continentData: state.continentData,
    resetBtnState: state.resetBtnState,
    yearPlatesCount: state.yearPlatesCount,
    showToastMessage: state.showToastMessage,
    selectedContinent: state.selectedContinent,
    showSidePanelPlates: state.showSidePanelPlates,
  };
};

const mapDispatch = (dispatch) => ({
  onYearBtnClick: (val, resetBtnState) => {
    dispatch(updateSelectedYear(val));
  },
  updateCanvasData: (val) => {
    dispatch(updateCanvasData(val));
  },
});

export default connect(mapState, mapDispatch)(RightComponent);
