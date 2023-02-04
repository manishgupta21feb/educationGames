import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";
import data from "../data";
import { common, thunk } from "../actions";

const mapState = (state) => {
  return {
    id: "resetDialog",
    dialogType: "attention",
    resetButtonText: data.buttonLabels.yes,
    resetButtonTextLabel: data.buttonLabels.yes,
    buttonContinueText: data.buttonLabels.no,
    buttonContinueLabel: data.buttonLabels.no,
    resetDialog: true,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(3));
  },
  onClick2: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.resetActivity());
    dispatch(common.togglePopup(3));
    dispatch(common.ariaLiveText(data.resetLiveText));
   setTimeout(()=>{
    dispatch(common.ariaLiveText(" "));

   },100)
    dispatch(common.updateResetBtnState(true));
    // dispatch(common.togglePopup(1));
    dispatch(thunk.resetAllActivity());
    TincanManager.data.percentage = 0;
    TincanManager.data.completed = false;
    TincanManager.resetTincanData();
    TincanManager.saveTincanData();
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
