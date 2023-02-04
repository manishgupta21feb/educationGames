import zoomView from "../components/activity/ZoomView";
import { connect } from "react-redux";

import { common, zoomPopupOpen } from "../actions";
import data from "../data";

const mapState = (state) => {
  const label = JSON.stringify(state.zoomButtonIdValue);
  return {
    buttonId: state.zoomButtonIdValue,
    zoomPopupOpen: state.zoomPopupOpen,
    closeLabel: data.closeButtonLabel,
    chartData: data.chartData,
    sliderDisabled: state.isSliderDisabled,
    sliderValue: state.selectedTimeline,
    label: label,
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(4));
    setTimeout(() => {
      dispatch(zoomPopupOpen(false));
    }, 100);
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(zoomView);
