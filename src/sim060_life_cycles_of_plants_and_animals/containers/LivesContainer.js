import Lives from "../components/Lives";
import { connect } from "react-redux";
import { thunk } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    // From Data
    animalsAndPlants: data.lives,

    // From Reducer
    getSubmitCount: state.getSubmitCount,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  onLifeTitle: (evt) => {
    dispatch(thunk.onLifeTitle(evt))
  }
});

export default connect(mapState, mapDispatch)(Lives);
