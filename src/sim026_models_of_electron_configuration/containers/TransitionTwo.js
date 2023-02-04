import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    id: "transitionPopup5",
    ...data.transitionPopup,
    heading: data.transitionPopupHeading,
    content: data.transitionText.second,
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.thunks.onChangeScreen(2));
    dispatch(common.togglePopup(5));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
