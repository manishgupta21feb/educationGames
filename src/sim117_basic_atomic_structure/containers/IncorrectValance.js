import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => ({
  id: "dbic7",
  dialogType: "warning",
  buttonClasses: "right-arrow",
  buttonContinueText: data.buttonLabels.continue,
});

const mapDispatch = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(7));
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
