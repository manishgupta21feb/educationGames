import { connect } from "react-redux";
import Button from "../../app/components/Button";
import { thunks } from "../actions";
import data from "../data/index"

const mapState = (state) => {
  return{
  text:data.buttonLabels.finish,
  //isPopupActive: !!state.currentPopup.length,
}};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK") ;
    dispatch(thunks.FinishedPressed());
},
});

export default connect(mapState, matchDispatch)(Button);
