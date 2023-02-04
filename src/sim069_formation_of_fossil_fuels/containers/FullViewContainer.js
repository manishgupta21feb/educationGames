import { connect } from "react-redux";
import FullView from "../components/FullView";
import EventManager from "../../app/events/manager";
import data from "../data";
import {common, setFossil, thunk, setViewPlayed } from "../actions";

const mapState = (state) => {
  return {
    continueBtnText: data.buttonLabels.continue,
    fossil: state.getFossil,
    finalScreenData: data.finalScreen[state.getFossil],
    activityEnd: state.getActivityEnd,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  onFossil: (evt) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(setFossil(evt.target.id));

    if (evt.target.id == "oil") {
      dispatch(setViewPlayed("oil"));
    } else if (evt.target.id == "sedimentary"){
      dispatch(setViewPlayed("sedimentary"));
    } else if(evt.target.id == "coal"){
      dispatch(setViewPlayed("coal"));
    }

    dispatch(thunk.onFossil());
  },

  showFinalScreen: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.toggleToastMessage(false));
    dispatch(common.updateResetBtnState(false));
    dispatch(common.setResetFocusState(true));
    
    setTimeout(() => {
      EventManager.broadcast("STOP_ALL");
    }, 300)
  },

  goToHomePage: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.goToHomePage());
    dispatch(common.updateResetBtnState(false));
    dispatch(common.setResetFocusState(true));
  }
});

export default connect(mapState, mapDispatch)(FullView);
