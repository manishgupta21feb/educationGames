import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";
import data from "../data";
import EventManager from "../../app/events/manager";
import { togglePopup } from "../../app/actions";
import { thunk } from "../actions";

const mapState = (state) => ({
  id: "5",
  ...data.completionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(togglePopup(3));
    dispatch(thunk.resetActivity());
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
