import { connect } from "react-redux";

import RightView from "../components/ViewArea/RightArea/RightView";
import data from "../data";

const mapState = (state) => {
  const imageAltText = data.imageText.replace("-1-", state.clickedButtonValue);
  return {
    rightContent: data.initialTextOnScreen,
    question: data.mcqQuestion,
    buttonPressed: state.clickedValue,
    backButton: state.clickedButtonValue,
    imageText: imageAltText,
    isPopupActive: !!state.currentPopup.length,
  };
};

export default connect(mapState)(RightView);
