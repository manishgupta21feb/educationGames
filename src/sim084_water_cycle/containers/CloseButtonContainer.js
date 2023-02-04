import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { setShowAlert } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: state.isPopupActive,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(setShowAlert(false));
  },
});

export default connect(mapState, matchDispatch)(Button);
