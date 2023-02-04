import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => ({
  id: "4",

  type: "attention",
  ...data.levelOneCompletionScreen,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.onContinue(false));
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
