import { connect } from "react-redux";
import CompletionPopup from "../../app/components/CompletionScreen";

import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => ({
  ...data.completionPopup,
  id: "completionPopup",
});
const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(5));
    dispatch(thunks.resetGame());
  },
});

export default connect(mapState, matchDispatch)(CompletionPopup);
