import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";
import data from "../data";
import { thunk, common } from "../actions";

const mapState = (state) => {
  let animationScreenData =
    state.animationScreenId === "seesaw" ? data.seesawData : data.baseballData;

  return {
    labelledby: "mainHeading",
    radiobuttons: animationScreenData.equationOptions,
    selectedOption: state.selectedAnswerOption,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (id) => {
    if (id === "smallPush") {
      dispatch(
        common.thunks.ariaLiveAssertive(
          data.seesawData.observationsData[0].altLivePlay
        )
      );
    } else if (id === "bigPush") {
      dispatch(
        common.thunks.ariaLiveAssertive(
          data.seesawData.observationsData[1].altLivePlay
        )
      );
    } else if (id === "hardHit") {
      dispatch(
        common.thunks.ariaLiveAssertive(
          data.baseballData.observationsData[0].altLivePlay
        )
      );
    } else if (id === "softHit") {
      dispatch(
        common.thunks.ariaLiveAssertive(
          data.baseballData.observationsData[1].altLivePlay
        )
      );
    } else {
      dispatch(common.ariaLiveAssertive(" "));
    }
    dispatch(thunk.onChangeRadio(id));
    dispatch(common.setResetFocusState(true));
  },
});

export default connect(mapState, mapDispatch)(RadioButton);
