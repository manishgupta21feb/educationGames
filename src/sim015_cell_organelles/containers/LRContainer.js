import LRView from "../components/Screens/LRView";
import { connect } from "react-redux";
import { thunks } from '../actions'

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  changeScreen: (val) => {
    dispatch(thunks.onChangeScreen(val));

  },
})

export default connect(mapState, mapDispatch)(LRView);
