import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";
import { thunks } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    heading: "",
    headingLevel: "3",
    buttonText: data.test,
    isPopupActive: !!state.currentPopup.length,
    question: "",
    disabled: state.currentPopup.length || state.testButtonState,
  };
};
const matchDispatch = (dispatch) => {
  return {
    onClick: () => {
      dispatch(thunks.onTestClick());
      EventManager.broadcast("PRIMARY_CLICK");
    },
  };
};
export default connect(mapState, matchDispatch)(MCQArea);
