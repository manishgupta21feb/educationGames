import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";
import EventManager from "../../app/events/manager";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => ({
  disabled: !state.allHotspotsAnswered,
  buttonText: data.buttonLabels.submitAnswer,
});
const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.submitAnswer());
    EventManager.broadcast("PRIMARY_CLICK");
  },
});

export default connect(mapState, matchDispatch)(MCQArea);
