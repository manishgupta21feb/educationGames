import { connect } from "react-redux";
import InofBox from "../../app/components/CompletionScreen";

import data from "../data";
import { common, thunks, setActiveScreen } from "../actions/";

const mapState = (state) => ({
  ...data.transitionPopup,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(4));
    dispatch(common.onChangeScreen(1));
    dispatch(thunks.generateNextQuestion());
    setTimeout(() => {
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    }, 100);
  },
});

export default connect(mapState, matchDispatch)(InofBox);
