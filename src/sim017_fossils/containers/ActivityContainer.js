import Activity from "../components/activity";
import { connect } from "react-redux";
import { togglePopup } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  onStartActivity: () => {
    dispatch(togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
