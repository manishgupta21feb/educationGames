import TBView from "../components/Screens/TBView"
import { connect } from "react-redux";
import { thunks } from '../actions'

const mapState = (state) => {
  return {
    audioStatePlay:state.audioStatePlay,
    isPopupActive: !!state.currentPopup.length,

  };
};

const mapDispatch = (dispatch) => ({
  changeScreen: (val) => {
    dispatch(thunks.onChangeScreen(val));
  },
})

export default connect(mapState, mapDispatch)(TBView);
