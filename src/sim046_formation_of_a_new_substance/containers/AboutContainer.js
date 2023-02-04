import About from "../components/About";
import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import data from "../data";
import { aboutScreenAction, common } from "../actions";

const mapState = (state) => {
  return {
    //----> From Data
    aboutContent: data.about,
    buttonLabel: data.buttonLabels.continue,

    //----> From Reducer
    aboutScreen: state.aboutScreenReducer,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  onAboutHandler: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    // setTimeout(() => {

    // }, 200)
    setTimeout(() => {
      dispatch(aboutScreenAction(false));
      dispatch(common.updateResetBtnState(false));
      dispatch(common.setResetFocusState(true));
    }, 100);
  },
});

export default connect(mapState, mapDispatch)(About);
