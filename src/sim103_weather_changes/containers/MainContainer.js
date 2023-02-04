import ActivityArea from "../components/ActivityArea/index";
import { connect } from "react-redux";
import data from "../data";

const mapState = (state) => {
  const activeDay = state.getDays.filter(
    (a) =>   state.getSelectedDay &&
    state.getSelectedDay.length &&
    a.id==state.getSelectedDay)[0];
  return {
    isPopupActive: !!state.currentPopup.length,
    data,
    activeDay,
    getSelectedDay:state.getSelectedDay,
    days:state.getDays,
    toastMsg:state.toastMsg,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(ActivityArea);
