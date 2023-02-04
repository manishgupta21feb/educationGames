import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  const content = data.ecosystemContent.filter(
    (e) => e.id == state.selectedQuestion
  );

  return {
    ...data.dialogData.correct,
    id: "1",
    header: "",
    dialogType: "positive",
    resetBtnState: state.resetBtnState,
    content: state.showStatic ? "" : content[0].correctText,
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    // dispatch(selectOption(""));
    dispatch(thunks.generateNextQuestion());
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
