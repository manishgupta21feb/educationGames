import { connect } from "react-redux";
import VolcanicAnimationScreen from "../components/Screens/VolcanicAnimationScreen";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(VolcanicAnimationScreen);
