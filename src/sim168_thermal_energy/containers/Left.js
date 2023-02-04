import { connect } from "react-redux";
import { thunks } from "../actions";
import Left from "../components/LeftRight/Left";
import data from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    visitedMainOptions: state.visitedMainOptions || [],
    mainscreenOptions: !state.question ? data.mainscreenOptions : null,
    subQuestion: state.subQuestion,
  };
};

const matchDispatch = (dispatch) => ({
  onMainOptionClick: (id) => {
    dispatch(thunks.setMainOption(id));
  },
});

export default connect(mapState, matchDispatch)(Left);
