import { connect } from "react-redux";
import InofBox from "../../app/components/CompletionScreen";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => ({
  ...data.transitionPopup,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.onTransitionPopupClick());
  },
});

export default connect(mapState, matchDispatch)(InofBox);
