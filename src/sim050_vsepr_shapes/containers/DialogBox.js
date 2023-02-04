import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  content: null,
  id: "dialogBox",
  dialogType: "warning",
  header: data.dialogBoxHeader,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(2));
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
