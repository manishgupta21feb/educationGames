import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { common, thunks } from "../actions";

const mapStateToProps = (props) => ({
  text: props.selectedQuestion == 8 ? data.buttonFinish : data.buttonContinue,
  classes: "right-arrow toast-secondary-button positive",
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("STOP_ALL");
    dispatch(common.toggleToastMessage(false));
    dispatch(thunks.generateNextQuestion());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
