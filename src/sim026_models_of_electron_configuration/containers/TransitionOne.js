import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    id: "transitionPopup4",
    ...data.transitionPopup,
    heading: data.transitionPopupHeading,
    content: data.transitionText.first,
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.thunks.onChangeScreen(1));
    dispatch(common.togglePopup(4));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
