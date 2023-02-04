import Activity from "../components/activity";
import { connect } from "react-redux";
import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    data,
    getScreen:state.getScreen,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
     dispatch(thunks.launchActivity())
  },
});

export default connect(mapState, mapDispatch)(Activity);
