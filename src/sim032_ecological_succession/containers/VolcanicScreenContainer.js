import VolcanicScreen from "../components/Screens/VolcanicScreen";
import { connect } from "react-redux";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(VolcanicScreen);
