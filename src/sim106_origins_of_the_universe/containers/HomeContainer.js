import Home from "../components/Home";
import { connect } from "react-redux";
import { setScreenOne, setScreenTwo, setScreenThree } from "../actions";

const mapState = (state) => {
  return {
    //----> From Reducer
    isPopupActive: !!state.currentPopup.length,
    screenOne: state.screenOne,
    screenTwo: state.screenTwo,
    screenThree: state.screenThree,
    getIsVisitedBoth: state.getIsVisitedBoth,
  };
};

const mapDispatch = (dispatch) => ({
});

export default connect(mapState, mapDispatch)(Home);
