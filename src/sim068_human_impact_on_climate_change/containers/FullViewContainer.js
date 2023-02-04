import FullView from "../components/FullView";
import { connect } from "react-redux";

import { common, zoomButtonId, zoomPopupOpen } from "../actions";
import data from "../data";
import EventManager from "../../app/events/manager";

const mapState = (state) => {
  return {
    zoomButton: data.zoomButton,
    isPopupActive: !!state.currentPopup.length,
    mainHeading: data.mainHeading,
    currentPopup: state.currentPopup,
    chartData: data.chartData,
    buttonShow: state.sliderVisitedValue.length >= data.sliderData.length,
    descriptionShow: state.descriptionBoxShow,
    sliderValue: state.selectedTimeline,
    sliderDisabled: state.isSliderDisabled,
  };
};

const mapDispatch = (dispatch) => ({
  popupOpenValue: (value) => {
    dispatch(zoomButtonId(value));
    dispatch(common.togglePopup(4));
    dispatch(zoomPopupOpen(true));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(FullView);
