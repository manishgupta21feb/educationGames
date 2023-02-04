import { connect } from "react-redux";
import { togglePopup } from "../actions";
import DialogBox from "../../app/components/DialogBox";
import data from "../data";
import EventManager from "../../app/events/manager";

const mapStateToProps = (state) => ({
  id: "2",
  dialogType: "attention",
  buttonClasses: "",
  buttonContinueText: data.buttonLabels.close,
  buttonContinueLabel: data.buttonLabels.close,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(togglePopup(2));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogBox);
