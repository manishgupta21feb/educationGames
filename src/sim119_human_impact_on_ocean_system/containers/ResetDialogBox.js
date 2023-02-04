import ResetDialogBox from '../../app/components/DialogBox';
import { connect } from "react-redux";
import data from '../data';
import { thunks, common } from "../actions";

const mapState = (state) => ({
  dialogType: "attention",
  id: "resetBox",
  resetDialog: true,
  header: "",
  buttonContinueText: data.buttonLabels.no,
  buttonContinueLabel: data.buttonLabels.no,
  resetButtonText: data.buttonLabels.yes,
  resetButtonLabel: data.buttonLabels.yes,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(8));
  },
  onClick2: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      dispatch(thunks.resetActivity());
    }, 100);
  }
});

export default connect(mapState, mapDispatch)(ResetDialogBox);
