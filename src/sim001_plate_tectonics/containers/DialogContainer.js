import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";

import { updateShowDialog } from "../actions";

const mapState = (state) => {
  return {};
};

const mapDispatch = (dispatch) => ({
  closeClicked: () => {
    dispatch(updateShowDialog(false));
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
