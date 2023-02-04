import { connect } from "react-redux";
import Screen1 from "../components/Screens/Screen1";

import { onChangeScreen } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  changeScreen: (val) => {
    dispatch(onChangeScreen(val));
  },
});

export default connect(mapState, mapDispatch)(Screen1);
