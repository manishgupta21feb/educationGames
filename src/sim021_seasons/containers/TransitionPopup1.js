import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => ({
  id: "transitionPopup1",
  ...data.transitionPopup1,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.transitionPopup1());
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
