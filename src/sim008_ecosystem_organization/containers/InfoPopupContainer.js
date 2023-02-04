import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { common, setAudioStateStop, thunks } from "../actions";

const mapState = (state) => ({
  id: "3",
  ...data.dialogData.info,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(3));
    dispatch(setAudioStateStop());
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
