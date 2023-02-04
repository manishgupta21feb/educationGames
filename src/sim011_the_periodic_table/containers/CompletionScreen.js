import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { thunks, common } from "../actions";

const mapStateToProps = (state) => ({
  id: "compScreen",
  ...data.completionPopup,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(6));
    dispatch(thunks.resetGame());
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CompletionScreen);
