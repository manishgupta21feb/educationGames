import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";
import EventManager from "../../app/events/manager";

import data from "../data";
import { togglePopup } from "../actions";

const mapState = (state) => ({
  id: "3",
  ...data.dialogData.info,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(togglePopup(3));
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
