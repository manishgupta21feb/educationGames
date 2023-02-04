import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    dialogType: "attention",
    id: "introductiondialog",
    buttonClasses: "right-arrow",
    buttonContinueText: data.start,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
