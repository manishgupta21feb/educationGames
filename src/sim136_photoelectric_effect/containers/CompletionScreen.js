import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";
import data from "../data";
import { thunk } from "../actions";

const mapState = (state) => ({
  id: "completionpup",
  ...data.completionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunk.resetActivity(true));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
