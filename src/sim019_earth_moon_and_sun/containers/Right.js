import { connect } from "react-redux";
import Right from "../components/activity/Right";
import EventManager from "../../app/events/manager";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => ({
  selectedDay: state.selectedDay,
  calendarData: data.calendarData,
  isPopupActive: !!state.currentPopup.length,
});

const matchDispatch = (dispatch) => ({
  onClick: (day) => {
    dispatch(thunks.selectDay(day));
    EventManager.broadcast("PRIMARY_CLICK");
  },
});

export default connect(mapState, matchDispatch)(Right);
