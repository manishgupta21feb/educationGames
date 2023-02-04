import { connect } from "react-redux";
import Button from "../../app/components/Button";
import EventManager from "../../app/events/manager";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  let { generation } = state.getQuestionSet;
  return {
    text: generation == 2 ? data.buttonLabels.continue : data.buttonLabels.next,
    classes: `toast-secondary-button positive right-arrow `,
    id: generation == 2 ? data.buttonLabels.continue : data.buttonLabels.next,
    label:
      generation == 2 ? data.buttonLabels.continue : data.buttonLabels.next,
    disabled: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  onClick: (e) => {
    if (e.target.id == data.buttonLabels.next) {
      dispatch(thunks.nextQuestion());
    } else {
      dispatch(thunks.resetActivity(data.buttonLabels.continue));
      EventManager.broadcast("PRIMARY_CLICK");
    }
  },
});

export default connect(mapState, mapDispatch)(Button);
