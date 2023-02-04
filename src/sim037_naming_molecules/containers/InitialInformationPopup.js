import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";
import EventManager from "../../app/events/manager";
import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  id: "4",
  ...data.dialogData.start,
  startActivity: state.startActivity,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
