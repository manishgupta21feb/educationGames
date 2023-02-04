import { connect } from "react-redux";
import LeftArea from "../components/Left/index";

import datafile from "../data";
import * as actions from "../../app/actions";

import { thunks, isRadioButtonDisable, pairInsects } from "../actions";
export const common = { ...actions };

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    optionResults: state.optionResults,
    getQuestionSet: state.getQuestionSet,
    isButtonType: state.isButtonType,
    addGrasshopper: state.addGrasshopper,
    imgAlt: datafile.imgAlt,
    firstScreenAlt: datafile.firstScreenAlt,
    getAltText: state.getAltText,
    selectedText: datafile.selected,
  };
};

const mapDispatch = (dispatch) => ({
  dropItem: (item) => {
    dispatch(thunks.checkDrop(item));
  },
  isRadioButtonDisable: (item) => {
    dispatch(isRadioButtonDisable(item));
  },
  onClickOfImage: () => {
    dispatch(common.setResetFocusState(true));
  },
  pairInsects: (data, status, label) => {
    dispatch(pairInsects(data, status));
    dispatch(common.ariaLiveText(label + " " + datafile.selected));
    setTimeout(() => {
      dispatch(common.ariaLiveText(" "));
    }, 10);
  },
});

export default connect(mapState, mapDispatch)(LeftArea);
