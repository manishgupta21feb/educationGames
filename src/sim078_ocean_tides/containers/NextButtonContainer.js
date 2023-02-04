import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data/index";
import { thunks } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    text: data.buttonNext,
    classes: " toast-secondary-button positive right-arrow ",
    disabled: state.getNextBtn,
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
   
    dispatch(thunks.handleNextButtonClick());
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      EventManager.broadcast("COMPLETION_SCREEN");
    }, 100);
  },
});

export default connect(mapState, mapDispatch)(Button);
