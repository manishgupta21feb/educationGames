import { connect } from "react-redux";
import Spectrum from "../components/Spectrum";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    reset: state.reset
  };
};

const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(Spectrum);
