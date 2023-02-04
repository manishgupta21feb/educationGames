import SchoolView from "../components/SchoolView";
import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import data from "../data";
import {common, thunk} from "../actions";

const mapState = (state) => {
  return {
    //----> From Data
    sliderTitle: data.sliderTitle,
    nextBtnText: data.buttonLabels.next,

    //----> From Reducer
    updateSliderValue: state.getUpdateSlider
  };
};

const mapDispatch = (dispatch) => ({
  resetActivity: () => {
    dispatch(common.updateResetBtnState(false));
    dispatch(common.setResetFocusState(true));
    dispatch(thunk.resetActivity())
    EventManager.broadcast("SECONDARY_CLICK");
  }
});

export default connect(mapState, mapDispatch)(SchoolView);
