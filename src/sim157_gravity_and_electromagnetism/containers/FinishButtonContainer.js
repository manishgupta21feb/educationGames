import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  return {
    text: data.buttonLabels.finish,
    classes: " toast-secondary-button positive", //right-arrow
    isPopupActive: !!state.currentPopup.length,
    disabled: state.correct ? false : true,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.finshButton());
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, matchDispatch)(Button);
