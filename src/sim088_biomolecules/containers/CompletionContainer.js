import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => {
  let screenData = state.getCurrentScreenData.filter((x) => x.id == -1)[0];

  return {
    id: "completionPopup4",
    ...data.completionPopup,
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.resetActivity());
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
