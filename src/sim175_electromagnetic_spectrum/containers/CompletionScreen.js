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
    dispatch(thunks.resetActivity1());
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.ariaLiveText(data.resetActivityText));
    setTimeout(() => {
      dispatch(common.ariaLiveText(" "));
    }, 200);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CompletionScreen);
