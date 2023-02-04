import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";
import data from '../data/data.en';
import {
  common,
  setScreenStatus
} from "../actions";

const mapState = (state) => ({
  id: "completionContinue",
  ...data.transitionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    dispatch(common.togglePopup(6));
    dispatch(setScreenStatus('carbon-and-nitrogen'));
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
