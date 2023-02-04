import { connect } from "react-redux";
import PartOne from "../components/Spectrum/PartOne";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    text: data.screen_one_ost,
    electoSpectrumTitle: data.electoSpectrumTitle,
    bottomText: data.initialImageLabels.label2,
    topText: data.initialImageLabels.label1,
    buttonLabels: data.buttonLabels,
    arrowAltText: data.arrowAltText,
    altText: data.altTextSpectrum,
    imageLabel: data.imageLabel,
  };
};

const matchDispatch = (dispatch) => ({
  setData: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.updateResetBtnState(false));
    dispatch(common.setResetFocusState(true));
  },
});

export default connect(mapState, matchDispatch)(PartOne);
