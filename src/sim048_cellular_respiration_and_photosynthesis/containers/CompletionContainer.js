import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => {
  return {
    id: "completionPopup4",
    ...data.completionPopup,
    content: data.completionPopupText,
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(4));
    dispatch(thunks.reset());
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
