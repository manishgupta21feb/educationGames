import { connect } from "react-redux";
import Button from "../../app/components/Button";
import { getString, getNumber } from "../helper.js";

import data from "../data";
import {
  thunk,
  common,
  isVideoEnd,
  buttonType,
  isVideoPlay,
  isObservationVisited,
} from "../actions";

const mapState = (state) => ({
  text: state.buttonType, //state.isVideoPlay ? data.buttonLabels.next : data.buttonLabels.continue,
  isPopUpOpen: !!state.currentPopup.length,
  classes: "right-arrow toast-secondary-button positive",
  disabled: state.isVideoEnd ? false : true,
  id: state.buttonType + state.currentExperimentNumber,
  observationsData: state.observationsData,
});

const matchDispatch = (dispatch) => ({
  onClick: (e) => {
    if (getString(e.target.id) == data.buttonLabels.continue) {
      dispatch(common.setResetFocusState(true));
      setTimeout(() => {
        dispatch(buttonType(data.buttonLabels.next));
      }, 100);
      EventManager.broadcast("SECONDARY_CLICK");
    } else {
      dispatch(thunk.onContinueButton(e));
      setTimeout(() => {
        dispatch(thunk.onNextButton());
      }, 100);
    }
  },
});

export default connect(mapState, matchDispatch)(Button);
