import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { common,thunks } from "../actions";

const mapState = () => ({
  ...data.completionScreen,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(6));
   dispatch(thunks.resetActivity(false));
 
    EventManager.broadcast("SECONDARY_CLICK");
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
