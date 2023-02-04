import { connect } from "react-redux";
import Left from "../components/activity/Left";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  moonPhases: data.moonPhases,
  earthLabel: data.earthLabel,
  selectedDay: state.selectedDay,
  mainImageAlt: data.mainImageAlt,
  calendarData: data.calendarData,
  moonPhaseLabel: data.moonPhaseLabel,
  rotationLiveText: data.rotationLiveText,
  isPopupActive: !!state.currentPopup.length,
  moonAroundEarthAltText: data.moonAroundEarthAltText,
});

const matchDispatch = (dispatch) => ({
  ariaLiveText: (text) => {
    dispatch(common.ariaLiveAssertive(text));
  },
});

export default connect(mapState, matchDispatch)(Left);
