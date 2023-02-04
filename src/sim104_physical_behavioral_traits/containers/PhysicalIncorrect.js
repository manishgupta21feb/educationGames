import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  id: "dbic10",
  dialogType: "warning",
  buttonClasses: "right-arrow",
  buttonContinueText: data.buttonLabels.continue,
});

const mapDispatch = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("STOP_ALL");
    setTimeout(() => {
      EventManager.broadcast("SECONDARY_CLICK");
    });
    dispatch(common.togglePopup(10));
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
