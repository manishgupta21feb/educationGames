import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => {
  let result = data.nextScreenCompletion;

  let enviro =
    state.getCurrentScreenAndEnvironment.screen == 1
      ? data.btnHeading[0].continueText
      : data.btnHeading[1].continueText;

  let str1 = data.text1;
  let str2 = data.text2;
  let str3 = data.text3;

  if (state.getCurrentScreenAndEnvironment.screen > 0) {
    result.text =
      str1 +
      enviro.toLowerCase() +
      str2 +
      state.getCurrentScreenAndEnvironment.environment.toLowerCase() +
      "." +
      str3;
  }

  return {
    id:
      state.setIsVisitedType.length == 6
        ? "teFinishScreenBtn"
        : "teNextScreenBtn",
    content:
      state.setIsVisitedType.length == 6
        ? data.completionScreen.text
        : result.text,
    type: state.setIsVisitedType.length == 6 ? "positive" : "attention",
    heading:
      state.setIsVisitedType.length == 6
        ? data.completionScreen.heading
        : data.nextScreenCompletion.heading,
    buttonText:
      state.setIsVisitedType.length == 6
        ? data.completionScreen.button
        : data.nextScreenCompletion.button,
    buttonLabel:
      state.setIsVisitedType.length == 6
        ? data.completionScreen.button
        : data.nextScreenCompletion.button,
    buttonClasses:
      state.setIsVisitedType.length == 6
        ? "reset-white reverse icon"
        : "right-arrow", //: "reset-white reverse icon",
  };
};

const mapDispatch = (dispatch) => ({
  onClick: (e) => {
    if (e.target.title == data.completionScreen.button) {
      dispatch(thunks.resetActivity(false));
    } else {
      dispatch(thunks.continueBtn());
    }
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
