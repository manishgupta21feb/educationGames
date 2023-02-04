import { connect } from "react-redux";
import WildfireAnimationScreen from "../components/Screens/WildfireAnimationScreen";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(WildfireAnimationScreen);
