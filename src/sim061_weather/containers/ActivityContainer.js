import Activity from "../components/activity";
import { connect } from "react-redux";

import { common } from "../actions";
import data from "../data"

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    data:data,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
