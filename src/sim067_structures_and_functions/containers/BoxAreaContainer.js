import { connect } from "react-redux";
import BoxArea from "../components/Right/BoxArea";
import {
  isResetButtonDisable,
  common,
  thunks,
  setInfoButton,
  setLabels,
  setInfoBtnStatus,
} from "../actions";
import data from "../data/index";
import EventManager from "../../app/events/manager";

const mapState = (state) => {
  return {
    selectedState: data.selectedState,
    organism_type_option: data.organism_type_option,
    isPopupActive: !!state.currentPopup.length,
    selectedOptions: state.selectedOptions,
    buttonVisible: state.buttonVisible,
    getNextQuestion: state.getNextQuestion,
    currentPopup: state.currentPopup.length,
    buttonLabels: data.buttonLabels,
    getQuestionOption: state.getQuestionOption,
    getInfoBtnStatus: state.getInfoBtnStatus,
    _getInfoBtnStatus: state.getInfoBtnStatus.status,
    getImagePart: state.getImagePart,
  };
};

const mapDispatch = (dispatch) => ({
  toggleToastMessage: () => {
    dispatch(common.toggleToastMessage(false));
  },
  submitOption: (id, src, liveText, aria) => {
    dispatch(thunks.submitOption(id, src, liveText, aria));
  },
  infoButton: (id, selectedId) => {
    if (id) {
      let result = { status: false, id: selectedId };
      dispatch(setInfoBtnStatus(result));
      dispatch(setInfoButton(id));
      dispatch(isResetButtonDisable(false));
      EventManager.broadcast("PRIMARY_CLICK");
    }
  },
});

export default connect(mapState, mapDispatch)(BoxArea);
