import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";
import data from "../data";
import { common, setStatic } from "../actions";

const mapState = (state) => ({
  id: "completionContinue",

  ...data.completionDialog.continue,
  type: "attention",
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(setStatic(true));
    dispatch(common.togglePopup(8));
    dispatch(common.thunks.onChangeScreen(2));
    dispatch(common.setResetFocusState(true));
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
