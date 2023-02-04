import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";
import data from "../data";
import { common, thunk } from "../actions";
import EventManager from "../../app/events/manager";

const mapState = () => ({
  id: "4",
  ...data.transitionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      dispatch(common.togglePopup(4));
      dispatch(thunk.completeOneSection());
    }, 100);
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
