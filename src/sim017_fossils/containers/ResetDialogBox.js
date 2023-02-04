import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";
import { togglePopup } from "../actions/index";
import { thunk } from "../actions/activity";
import data from "../data";

const mapState = (state) => ({
  id: "db10",
  resetDialog: true,
  dialogType: "warning",
  resetButtonText: data.messages[0].resetButtonText,
  buttonContinueText: data.messages[0].buttonContinueText,
  header: data.messages[0].header,
  content: data.messages[0].content,
});

const matchDispatch = (dispatch) => ({
  onClick: (id) => {
    dispatch(togglePopup(2));
  },
  onClick2: (id) => {
    dispatch(togglePopup(2));
    dispatch(thunk.resetActivity(false));
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
