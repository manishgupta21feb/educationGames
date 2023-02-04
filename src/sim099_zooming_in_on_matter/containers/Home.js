import Home from "../components/Home";
import { connect } from "react-redux";
import {
  setButtonId,
} from "../actions";

const mapState = (state) => {
  return {
    getIsVisited: state.getIsVisited,
    //----> From Reducer
    isPopupActive: !!state.currentPopup.length,
    getIsVisitedBoth: state.getIsVisitedBoth,
  };
};

const mapDispatch = (dispatch) => ({
  onClickedButton: (value) => {
    dispatch(setButtonId(value));
  },
});

export default connect(mapState, mapDispatch)(Home);
