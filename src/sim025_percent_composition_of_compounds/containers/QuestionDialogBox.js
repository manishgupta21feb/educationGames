import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import DialogBox from "../../app/components/DialogBox";
import data from "../data";
import { common } from "../actions";

const mapStateToProps = (state) => ({
  id: "Question",
  dialogType: "help",
  buttonContinueText: data.buttonLabels.close,
  buttonContinueLabel: data.buttonLabels.close,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    EventManager.broadcast("SCREEN_TEXT");
    dispatch(common.togglePopup(6));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogBox);
