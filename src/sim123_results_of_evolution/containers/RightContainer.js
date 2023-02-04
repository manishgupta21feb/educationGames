import { connect } from "react-redux";
import { thunks } from "../actions";
import RightArea from "../components/ViewArea/RightArea";

import data from "../data";

const mapState = (state) => {
  return {
    mcqView: state.mcqScreenValue,
    heading: data.rightScreenData[state.setScreenValue].heading,
    buttonAdded: data.rightScreenData[state.setScreenValue].buttonIncluded,
    buttonClicked: state.buttonClickCount == 1,
    buttonDisable: state.buttonClickCount >= 2,
    scroll: data.rightScreenData[state.setScreenValue].scroll,
    questionClass: data.rightScreenData[state.setScreenValue].id,
    isPopupActive: !!state.currentPopup.length,
  };
};
const matchDispatch = (dispatch) => {
  return {
    clickButton: (value) => {
      dispatch(thunks.onClickButton(value));
    },
  };
};

export default connect(mapState, matchDispatch)(RightArea);
