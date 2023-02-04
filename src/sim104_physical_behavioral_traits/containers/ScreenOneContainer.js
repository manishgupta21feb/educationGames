import { connect } from "react-redux";
import {
  common,
  setTraits,
  thunks,
  setScreenVal,
  setVisitedPage,
} from "../actions";
import ScreenOne from "../components/ViewArea/ScreenOne";
import data from "../data";

const mapState = (state) => {
  return {
    data: data,
    isPopupActive: !!state.currentPopup.length,
    visitedPage: state.visitedPage,
  };
};

const matchDispatch = (dispatch) => {
  return {
    onClick: (id) => {
      dispatch(thunks.onHotSpotClick(id));
    },
  };
};

export default connect(mapState, matchDispatch)(ScreenOne);
