import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import RightArea from "../components/Right";

import data from "../data/index";
import { common, setInfoButton, setInfoBtnStatus } from "../actions";
import { getNumbers } from "../helper";

const mapState = (state) => {
  let organismType = data.organism_type_question.filter(
    (x) => getNumbers(x.screen) == state.getCurrentScreenAndEnvironment.screen
  );

  let questionSet = organismType.filter(
    (x) => getNumbers(x.id) == state.getCurrentScreenAndEnvironment.questionNo
  );

  let infoData = data.organism_type_option.filter(
    (x) => x.srNo == state.getInfoButton
  );
  if (infoData.length > 0) {
    infoData = infoData[0].info;
  }

  return {
    isPopupActive: !!state.currentPopup.length,
    activityCompleted: state.activityCompleted,
    introHeading: data.rightAreaTextDescription,
    questionSet: questionSet,
    selectedOptions: state.selectedOptions,
    getNextQuestion: state.getNextQuestion,
    currentPopup: state.currentPopup,
    questionHeading: data.questionHeading,
    buttonLabels: data.buttonLabels,
    getCurrentScreenAndEnvironment: state.getCurrentScreenAndEnvironment,
    getQuestionOption: state.getQuestionOption,
    getInfoButton: state.getInfoButton,
    infoData: infoData,
    getInfoBtnStatus: state.getInfoBtnStatus,
  };
};

const mapDispatch = (dispatch) => ({
  togglePopup: () => {
    dispatch(common.toggleToastMessage(false));
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    dispatch(common.togglePopup(3));
    setTimeout(() => {
      EventManager.broadcast("COMPLETION_SCREEN");
    }, 300);
  },
  setInfoButton: (item, id) => {
    dispatch(setInfoButton(item));
    let result = { status: true, id: id };
    dispatch(setInfoBtnStatus(result));
  },
});

export default connect(mapState, mapDispatch)(RightArea);
