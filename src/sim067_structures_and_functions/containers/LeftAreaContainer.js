import { connect } from "react-redux";
import LeftArea from "../components/Left/index";
import { getNumbers } from "../helper";
import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  let screenClass = "";

  if (
    state.getCurrentScreenAndEnvironment.organismType ==
    data.btnHeading[1].buttonTitle
  ) {
    screenClass =
      state.getCurrentScreenAndEnvironment.environment ==
      data.centerPageData[0].text
        ? "screen1"
        : "screen2";
  }

  let altTxt = "";
  let environments = state.getCurrentScreenAndEnvironment.environment;
  if (environments == data.centerPageData[0].text) {
    altTxt = data.completedImgAlt[0];
  } else if (environments == data.centerPageData[1].text) {
    altTxt = data.completedImgAlt[1];
  } else if ((environments = data.centerPageData[2].text)) {
    altTxt = data.completedImgAlt[2];
  }

  return {
    isResetButtonDisable: state.isResetButtonDisable,
    buttonLabels: data.buttonLabels,
    currentPopup: state.currentPopup,
    isPopupActive: !!state.currentPopup.length,
    selectedOptions: state.selectedOptions,
    completedImgAlt: altTxt,
    getLabels: state.getLabels,
    getInfoButton: state.getInfoButton,
    getImagePart: state.getImagePart,
    getCurrentScreenAndEnvironment: state.getCurrentScreenAndEnvironment,
    getShowContinueButton: state.getShowContinueButton,
    screenClass: screenClass,
  };
};

const mapDispatch = (dispatch) => ({
  dropItem: (item) => {
    dispatch(thunks.checkDrop(item));
  },
});

export default connect(mapState, mapDispatch)(LeftArea);
