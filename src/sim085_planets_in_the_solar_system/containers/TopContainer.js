import { connect } from "react-redux";
import { thunks, inputFeildValue } from "../actions";
import TopArea from "../components/ViewArea/TopArea";

import data from "../data";

const mapState = (state) => {
  return {
    inputData: data.typingPlanet,
    inputFeildId: state.inputFeildId,
    inputFeild: state.inputFeildValue,
    inputFeildDisable: state.inputFeildDisable,
    inputClicked: state.showFinishButton,
    imageAltText: data.imageAltText,
    isPopupActive: !!state.currentPopup.length,
    showToastMessage: state.showToastMessage,
    highlightedValue: state.highlightedValue,
  };
};
const mapDispatch = (dispatch) => ({
  inputValue: (value) => {
    dispatch(inputFeildValue(value));
  },
  inputId: (value) => {
    dispatch(thunks.inputFeildId(value));
  },
});
export default connect(mapState, mapDispatch)(TopArea);
