import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  return {
    dialogType: "positive",
    id: "answerfeedbackpopup",
    buttonClasses: "right-arrow",
    buttonContinueText: data.buttonLabels.continue,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.dialogActivity());
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
