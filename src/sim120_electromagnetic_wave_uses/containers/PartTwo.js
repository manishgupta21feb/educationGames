import { connect } from "react-redux";
import PartTwo from "../components/Spectrum/PartTwo";

import data from "../data";
import { common, updateToastMsg } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    text: data.screen_one_two_ost,
    electoSpectrumTitle: data.electoSpectrumTitle,
    bottomText: data.initialImageLabels.label2,
    topText: data.initialImageLabels.label1,
    draggables: data.draggables,
    buttonLabels: data.buttonLabels,
    arrowAltText: data.arrowAltText,
    altText: data.altTextSpectrum,
    imageLabel: data.imageLabel,
    droppedText: data.droppedText
  };
};

const matchDispatch = (dispatch) => ({
  onNextClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      EventManager.broadcast("COMPLETION_SCREEN");
    }, 100);
    dispatch(common.togglePopup(4));
    dispatch(updateToastMsg(""));
    dispatch(common.toggleToastMessage(false));
  },
  onIncorrect: () => {
    EventManager.broadcast("NEGATIVE_FEEDBACK");
    dispatch(updateToastMsg("incorrect"));
    dispatch(common.toggleToastMessage(true));
  },
  onCorrect: () => {
    EventManager.broadcast("POSITIVE_FEEDBACK");
    dispatch(updateToastMsg("correct"));
    dispatch(common.toggleToastMessage(true));
  },
});

export default connect(mapState, matchDispatch)(PartTwo);
