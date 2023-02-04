import WildfireScreen from "../components/Screens/WildfireScreen";
import { connect } from "react-redux";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(WildfireScreen);
