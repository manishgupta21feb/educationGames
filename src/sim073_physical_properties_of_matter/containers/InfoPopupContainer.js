import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";
import data from "../data";
import { common } from "../actions";
import EventManager from "../../app/events/manager";

const mapState = (state) => ({
  id: "3",
  ...data.dialogData.info,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(3));
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
