import { connect } from "react-redux";
import Button from "../../app/components/Button";
import data from "../data/index"
import {
 thunk
} from "../actions";
const mapState = (state) => {
  return{
  classes: "right-arrow toast-secondary-button positive",
  text: data.buttonLabels.continue,
  audioStatePlay: state.audioStatePlay,
  isPopupActive: !!state.currentPopup.length,
}};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK")
     dispatch(thunk.continuePress())
  
},
});

export default connect(mapState, matchDispatch)(Button);
