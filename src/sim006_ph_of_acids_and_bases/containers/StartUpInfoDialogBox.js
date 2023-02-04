import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { common } from "../actions";

const mapStateToProps = (state) => ({
  id: "1",
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: data.buttonLabels.start,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogBox);
