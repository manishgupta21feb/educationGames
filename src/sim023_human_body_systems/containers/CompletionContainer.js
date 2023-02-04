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
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(4));
    dispatch(thunks.reset());
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
