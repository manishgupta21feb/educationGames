import { connect } from "react-redux";
import InfoBox from "../../app/components/DialogBox";
import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    id: "infoBox",
    dialogType: "help",
    buttonContinueText: data.buttonLabels.close,
    buttonContinueLabel: data.buttonLabels.close,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(2));
  },
});

export default connect(mapState, matchDispatch)(InfoBox);
