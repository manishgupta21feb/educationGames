import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { thunk, common, updateResetGame } from "../actions";

const mapState = (state) => ({
  id: "completionpup",
  ...data.completionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    let value = data.hotspotData.leftSection.hotspots;
    value.map((a, i) => {
      a.visited = false;
    });
    EventManager.broadcast("AUDIO_STARTSECONDARY_CLICK");
    dispatch(common.togglePopup(5));
    dispatch(thunk.resetGame());
    dispatch(updateResetGame(true));
    dispatch(common.onChangeScreen(0));
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
