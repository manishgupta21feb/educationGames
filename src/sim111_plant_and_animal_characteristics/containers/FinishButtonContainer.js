import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => ({
  text: data.buttonLabels.finish,
  classes: "toast-secondary-button positive",
  isPopupActive: !!state.currentPopup.length,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.onFinishButton());
  },
});

export default connect(mapState, mapDispatch)(Button);
