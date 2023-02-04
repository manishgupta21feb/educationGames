import { connect } from "react-redux";
import Button from "../../app/components/Button";
import { thunks } from "../actions";
import data from "../data/index"

const mapState = (state) => {
  return{
  text:data.buttonLabels.continue,
  //isPopupActive: !!state.currentPopup.length,
}};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.continuePressed())
},
});

export default connect(mapState, matchDispatch)(Button);
