import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => ({
  id: "dbic2",
  dialogType: "warning",
  buttonClasses: "right-arrow",
  buttonContinueText: data.continueButton,
});

const mapDispatch = (dispatch) => ({
  onClick: (id) => {
    dispatch(common.togglePopup(10));
    dispatch(thunks.clearDroppedItems());
    setTimeout(() => {
      EventManager.broadcast("SECONDARY_CLICK");
    });
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
