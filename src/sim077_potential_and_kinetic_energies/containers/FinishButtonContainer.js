import { connect } from "react-redux";
import Button from "../../app/components/Button";
import data from "../data"
import {
  common,
 thunks
} from "../actions";
const mapState = (state) => {
  let sum=Object.keys(state.matchedItems).reduce(
    (a, key) => state.matchedItems[key].length + a,
    0
  );
  return{
  classes: "toast-secondary-button positive",
  text: data.buttonLabels.finish,
  isPopupActive: !!state.currentPopup.length,
  disabled:sum ==6?false:true
}};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.finishPressed())
},
});

export default connect(mapState, matchDispatch)(Button);
