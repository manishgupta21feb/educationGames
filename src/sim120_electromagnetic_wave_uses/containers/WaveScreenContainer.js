import { connect } from "react-redux";
import WaveScreen from "../components/Screens/WaveScreen";
import data from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    buttonLabels: data.buttonLabels,
  };
};

const mapDispatch = (dispatch) => ({
});

export default connect(mapState, mapDispatch)(WaveScreen);
