import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";
import data from "../data";
import { common, screenCount, setIsMcq, thunk } from "../actions";
import EventManager from "../../app/events/manager";

const mapState = () => ({
  id: "5",
  ...data.transitionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(setIsMcq(true));
    dispatch(screenCount(0));
    setTimeout(() => {
      dispatch(common.togglePopup(5));
    }, 100);
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
