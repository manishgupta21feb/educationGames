import { connect } from "react-redux";
import Button from "../../app/components/Button";
import { common } from "../actions";
import data from "../data"

const mapState = (state) => {
 const hotspotsLength=state.hotspots.filter((h)=>h.visited).length
  return{
  text:data.buttonLabels.next,
  classes:"toast-secondary-button positive right-arrow",
  isPopupActive: !!state.currentPopup.length,
  disabled:hotspotsLength<4
}};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(4));
    EventManager.broadcast("COMPLETION_SCREEN");
},
});

export default connect(mapState, matchDispatch)(Button);
