import FullArea from "../components/FullArea";
import { connect } from "react-redux";
import data from "../data";
import { common, thunk, setScreenID } from "../actions";

const mapState = (state) => {
  return {
    //----> From Data
    views: state.getScreenId,
    buttonLabel: data.buttonLabels.next,

    //----> From Reducer
    isPopupActive: !!state.currentPopup.length,
    updateSliderValue: state.getUpdateSlider,
  };
};

const mapDispatch = (dispatch) => ({
  btnSound: (evt) => {
    dispatch(setScreenID(evt.target.id));
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.updateResetBtnState(false));
    dispatch(common.setResetFocusState(true));
  },

  viewHandler: (evt) => {
    if (evt.target.id == "viewFromSpace") {
      dispatch(thunk.viewHandler());
    }
  },
});

export default connect(mapState, mapDispatch)(FullArea);
