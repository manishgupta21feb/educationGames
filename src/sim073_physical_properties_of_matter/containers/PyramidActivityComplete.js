import Screen0 from "../components/Screens/PyramidComplete";
import { connect } from "react-redux";
import { common } from "../actions";
const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  changeScreen: (val) => {
    dispatch(common.onChangeScreen(val));
  },
});

export default connect(mapState, mapDispatch)(Screen0);
