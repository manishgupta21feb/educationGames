import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => ({
  id: "transitionPopup2",
  ...data.transitionPopup2,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.transitionPopup2());
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
