import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => {
  return {
    id: "completionPopup5",
    ...data.completionPopup,
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(5));
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.reset());
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
