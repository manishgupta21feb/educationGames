import FullArea from "../components/FullArea";
import { connect } from "react-redux";
import data from "../data";
import {
  common,
  thunk,
  setScreenNumber,
} from "../actions";

const mapState = (state) => {
  return {
    //----> From Data
    views: data.view.map((item) => item.source),
    videoTitle: data.view[0].questions[0].title,
    buttonLabel: data.buttonLabels.next,
    sliderTitle: data.sliderTitle,
    observationMotive: data.observationMotive,
    getLevel: state.getLevel,

    //----> From Reducer
    videoEnd: state.getVideoEnd,
    levelOneComplete: state.getLevelOneComplete,
    isPopupActive: !!state.currentPopup.length,
    screenOne: state.screenOne,
    screenTwo: state.screenTwo,
    screenThree: state.screenThree,
  };
};

const mapDispatch = (dispatch) => ({
  btnSound: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.updateResetBtnState(false));
    dispatch(common.setResetFocusState(true));
  },


  viewHandler: (evt) => {
    let values = { btn: evt.target.id == "viewFromSpace" ? 1 : 2, screen: 2 };
    dispatch(setScreenNumber(values));
    if (evt.target.id == "viewFromSpace") {
      // dispatch(setViewPlayed("viewFromSpace"));
    } else {
      // dispatch(setViewPlayed("viewFromEarth"));
    }
    dispatch(thunk.viewHandler(evt.target.id));
  },

});

export default connect(mapState, mapDispatch)(FullArea);
