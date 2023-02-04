import Right from "../components/Right";
import { connect } from "react-redux";

import { common, thunks} from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    instruction: data.instruction,
    sliderLabel: data.sliderLabel,
    buttonLabels: data.buttonLabels,
    selectedValue: state.selectedValue,
    runState: state.runState,
    videoPlayed: state.videoPlayed
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (value) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(thunks.setSelectedValue(value));
  },
  onRun: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.setRunState(true));
    dispatch(common.setResetFocusState(true));
  },
  onContinue: () => {
   dispatch(thunks.continueBtn());
},
});

export default connect(mapState, mapDispatch)(Right);
