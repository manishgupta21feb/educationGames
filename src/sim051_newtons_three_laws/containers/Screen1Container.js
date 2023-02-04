import { connect } from "react-redux";
import { common } from "../actions";
import Screen1 from "../components/Screens/Screen1";
import data from "../data";

const mapStateToProps = (state) => {
  return {
    currentScreen: state.currentScreen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeScreen: (val) => {
      dispatch(common.onChangeScreen(val));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen1);
