import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";
import data from '../data/data.en';
import {
  thunks,
} from "../actions";

const mapState = (state) => {

  const getText = () => {
    if (state.screenStatus == 1) {
      return data.screen1TransitionText
    } else
    if (state.screenStatus == 4) {
      return data.screen4TransitionText
    } else {
      return data.screen5TransitionText
    }
  }

  return {
    id: "completionContinue",
    ...data.transitionPopup,
    content: getText()
  }
}

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.handleCompletionScreen());
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
