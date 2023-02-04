import { connect } from "react-redux";
import Button from "../components/FullViewComponent/SubmitButtonComponent";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  const disabled =
    state.dropzoneOne.length > 0 &&
    state.dropzoneTwo.length > 0 &&
    state.dropzoneThree.length > 0 &&
    state.dropzoneFour.length > 0 &&
    state.dropzoneFive.length > 0;

  return {
    text: data.buttonLabels.submitAnswer,
    classes: "primary", //right-arrow
    isPopupActive: !!state.currentPopup.length,
    disabled: disabled ? false : true,
    correct: state.correct,
    droppablesFull: disabled,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.submitAnswer());
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, matchDispatch)(Button);
