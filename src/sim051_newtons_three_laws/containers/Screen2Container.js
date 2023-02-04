import { connect } from "react-redux";
import { common } from "../actions";
import Screen2 from "../components/Screens/Screen2";
import data from "../data";

const mapStateToProps = (state) => {
  return {
    currentScreen: state.currentScreen,
    title: data.ScreenInfo.screen2.title,
    instructionText: data.ScreenInfo.screen2.infoText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeScreen: (val) => {
      dispatch(common.onChangeScreen(val));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen2);
