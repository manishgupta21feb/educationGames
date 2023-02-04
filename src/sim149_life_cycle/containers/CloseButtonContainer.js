import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { setShowAlert, thunks } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: state.isPopupActive,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(setShowAlert(false));
    dispatch(thunks.onDialogClose());
  },
});

export default connect(mapState, matchDispatch)(Button);
