import Screen1 from "../components/Screens/McqScreen";
import { connect } from "react-redux";
import { common } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  changeScreen: (val) => {
    dispatch(common.thunks.onChangeScreen(val));
  },
});

export default connect(mapState, mapDispatch)(Screen1);
