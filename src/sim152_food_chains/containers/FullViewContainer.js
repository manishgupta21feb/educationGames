import { connect } from "react-redux";
import EventManager from "../../app/events/manager";

import data from "../data";
import { thunks, common, addVisitedButtons, setButtonID } from "../actions";
import FullViewContainer from "../components/FullViewComponent";

const mapState = (state) => {
  // console.log("Screen", state.screenChangeState);
  return {
    visited: state.visitedButtons,
    changeScreen: state.screenChangeState,
    buttonId: state.buttonId,
    headingLevelTwo:
      state.screenChangeState == true
        ? data.pageHeadingTwo
        : data.pageHeadingOne,
    isPopupActive: !!state.currentPopup.length,
    imageAlt: data.imageAlt,
  };
};

const matchDispatch = (dispatch) => {
  return {
    addVisitedButtons: (id) => {
      // console.log("Reached to container");
      dispatch(addVisitedButtons(id));
      dispatch(thunks.completeActivity());
      // dispatch(common.updateResetBtnState(true));
    },
    setButtonID: (id) => {
      dispatch(setButtonID(id));
      dispatch(common.updateResetBtnState(false));
    },
  };
};

export default connect(mapState, matchDispatch)(FullViewContainer);
