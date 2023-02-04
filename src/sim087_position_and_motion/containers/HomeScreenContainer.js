import { connect } from "react-redux";
import HomeScreen from "../components/HomeScreen";
import data from "../data";

import {
  common,
  setHomeScreen,
  setAnimationScreenId,
  setIsBothVideoPlayed,
} from "../actions";

const mapState = (state) => ({
  homeData: data.home,
  isPopupActive: !!state.currentPopup.length,
});

const matchDispatch = (dispatch, state) => ({
  handleSelectButton: (id) => {
    // if (id === "seesaw") {
    //   dispatch(
    //     common.thunks.ariaLiveAssertive(data.home.options[0].altImg, 300)
    //   );
    // } else if (id === "baseball") {
    //   dispatch(
    //     common.thunks.ariaLiveAssertive(data.home.options[1].altImg, 300)
    //   );
    // } else {
    //   dispatch(common.ariaLiveAssertive(" "));
    // }
    dispatch(common.updateResetBtnState(false));
    setTimeout(() => {
      dispatch(common.setResetFocusState(true));
    });
    setTimeout(() => {
      dispatch(setHomeScreen(false));
      dispatch(setAnimationScreenId(id));
      EventManager.broadcast("SECONDARY_CLICK");
    }, 80);
    setTimeout(() => {
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    }, 200);
  },
});

export default connect(mapState, matchDispatch)(HomeScreen);
