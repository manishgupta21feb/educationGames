import { connect } from "react-redux";
import LaunchScreen from "../components/Screens/LaunchScreen";
import { common, thunks } from "../actions";
import data from "../data/data.en";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    currentScreen: state.currentScreen,
    buttonLabels: data.buttonLabels,
  };
};

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(LaunchScreen);
