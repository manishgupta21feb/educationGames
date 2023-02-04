import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";
import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    header: "",
    id: "startBox",
    dialogType: "attention",
    buttonClasses: "right-arrow",
    buttonContinueText: data.buttonLabels.start,
    buttonContinueLabel: data.buttonLabels.start,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.ariaLiveText(" "));
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
