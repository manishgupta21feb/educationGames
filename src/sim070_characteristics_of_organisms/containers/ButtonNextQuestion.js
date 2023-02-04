import { connect } from "react-redux";
import Button from "../../app/components/Button";
import data from "../data";
import { thunks } from "../actions";
const mapState = (state) => {
  const finish = state.questionCount == data.mcqQuestionData.length;
  return {
    text: state.secondScreen
      ? finish
        ? data.buttonLabels.finish
        : data.buttonLabels.next
      : state.isMcqShow
      ? data.buttonLabels.next
      : data.buttonLabels.continue,
    classes: `toast-secondary-button positive ${
      state.secondScreen && finish ? "" : "right-arrow"
    } `,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("STOP_ALL");
    dispatch(thunks.onNextButton());
    setTimeout(() => {
      EventManager.broadcast("SECONDARY_CLICK");
    }, 100);
  },
});

export default connect(mapState, matchDispatch)(Button);
