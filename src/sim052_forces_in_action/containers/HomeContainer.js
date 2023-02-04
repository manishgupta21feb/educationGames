import Home from "../components/Home";
import { connect } from "react-redux";
import { common } from "../actions";

const mapState = (state) => {
  return {
    //----> From Reducer
    isPopupActive: !!state.currentPopup.length,
    homeData: state.getData,
  };
};

const mapDispatch = (dispatch) => ({
  resetActivate: () => {
    dispatch(common.setResetFocusState(true));
  },
});

export default connect(mapState, mapDispatch)(Home);
