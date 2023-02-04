import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";
import data from "../data";
import { thunk } from "../actions";

const mapState = (state) => {
  return {
    id: "completionPopup4",
    ...data.completionPopup,
    content: data.completionPopupText,
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunk.doReset(6));
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
