import { connect } from "react-redux";
import { thunks } from "../actions/index";
import { common } from "../actions";
import ScreenOne from "../components/ViewArea/ScreenOne/screenOne.js";
import data from "../data/index";

const mapState = (state) => {
  return {
    data: data,
    isPopupActive: !!state.currentPopup.length,
    degree: state.degree,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: (id) => {
    dispatch(thunks.onHotSpotClick(id));
  },
});

export default connect(mapState, matchDispatch)(ScreenOne);
