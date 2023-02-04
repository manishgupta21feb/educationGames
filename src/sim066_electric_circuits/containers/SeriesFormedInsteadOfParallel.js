import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  id: "dbic2",
  dialogType: "warning",
  buttonClasses: "right-arrow",
  buttonContinueText: data.continue,
});

const mapDispatch = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(4));
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
