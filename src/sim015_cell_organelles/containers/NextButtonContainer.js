import { connect } from "react-redux";
import Button from "../../app/components/Button";
import data from "../data/index"
import {common,setPreviousSound,setLayout} from "../actions"
const mapState = (state) => {
  return{
  classes: "right-arrow toast-secondary-button positive",
  text: data.buttonLabels.next,
  audioStatePlay: state.audioStatePlay,
  audioAriaLabel: state.audioStatePlay ? data.audioAriaLabel : "",
  audioLabel: state.audioStatePlay ? data.audioPlay : data.audioStop,
  isPopupActive: !!state.currentPopup.length,

}};

const matchDispatch = (dispatch) => ({
  onClick: () => {
      EventManager.broadcast("SECONDARY_CLICK")
      EventManager.broadcast("STOP_ALL_AND_PLAY", { id: "MOVE_TO_NEXT_SCREEN" });
      dispatch(setPreviousSound('SECONDARY_CLICK'));
      setTimeout(() =>{
      dispatch(common.setResetFocusState(true))
    },100);
    dispatch(setLayout("leftright"));
      TincanManager.data.percentage = 33.3;
      TincanManager.saveTincanData();
  },
});

export default connect(mapState, matchDispatch)(Button);
