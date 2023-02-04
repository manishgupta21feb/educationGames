import { connect } from "react-redux";
import Button from "../../app/components/Button";
import { thunks } from "../actions";
import data from "../data/index"

const mapState = (state) => {
  const screenNo=state.getScreen
  return{
  text:(state.getHotspotCount==2? (screenNo!=1?data.buttonLabels.next:data.buttonLabels.finish): data.buttonLabels.continue),
  classes:`btn next-btn toast-secondary-button positive ${screenNo==1 && state.getHotspotCount ==2?'':"right-arrow"}`,
  isPopupActive: !!state.currentPopup.length,
  disabled:!state.isVideoEnded
}};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.onButtonPressed())
},
});

export default connect(mapState, matchDispatch)(Button);
