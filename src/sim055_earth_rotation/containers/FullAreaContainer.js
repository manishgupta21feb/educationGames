import FullArea from "../components/FullArea";
import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import data from "../data";
import {
  common,
  setLevelOneComplete,
  setLevel,
  setViewPlayed,
  thunk,
} from "../actions";

const mapState = (state) => {
  return {
    //----> From Data
    views: data.view.map((item) => item.source),
    videoTitle: data.view[0].questions[0].title,
    buttonLabel: data.buttonLabels.next,
    sliderTitle: data.sliderTitle,
    observationMotive: data.observationMotive,

    //----> From Reducer
    videoEnd: state.getVideoEnd,
    levelOneComplete: state.getLevelOneComplete,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ( {
  btnSound: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.updateResetBtnState(false));
    dispatch(common.setResetFocusState(true));
  },
  levelMcq: () => {
    dispatch(setLevel(2));
  },
  viewHandler: (evt) => {
    setTimeout(() => {
      dispatch(setLevelOneComplete(false));
    }, 100) 

    if (evt.target.id == "viewFromSpace") {
      dispatch(setLevel(1));
      dispatch(setViewPlayed("viewFromSpace"));
    } else {
      dispatch(setLevel(3));
      dispatch(setViewPlayed("viewFromEarth"));
    }

    dispatch(thunk.viewHandler());
  },
  
});

export default connect(mapState, mapDispatch)(FullArea);
