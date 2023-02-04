import FullView from "../components/FullView";
import { connect } from "react-redux";

import { common } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    currentSection: state.getCurrentLocation,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(FullView);
