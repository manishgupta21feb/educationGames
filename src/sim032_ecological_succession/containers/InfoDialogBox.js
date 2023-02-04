import { connect } from "react-redux";
import { common } from "../actions";
import DialogBox from "../../app/components/DialogBox";
import data from "../data";
import EventManager from "../../app/events/manager";

const mapStateToProps = (state) => ({
  id: "Info",
  dialogType: "attention",
  buttonContinueText: data.info.buttonContinueText,
  buttonContinueLabel: data.info.buttonContinueLabel,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(2));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogBox);
