import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";

import data from "../data";
import { thunk, common } from "../actions/index";

const mapState = (state) => {
  let heading = "";
  let newHead = heading;
  if (state.questionsData[0].id == 3) {
    if (
      state.questionsData.filter((val) => val.isActive == true)[0]?.id == 3 &&
      state.questionsData.findIndex((val) => val.isActive == true) == 0
    ) {
      newHead = 0;
    } else {
      newHead = +state.questionsData.findIndex((val) => val.isActive == true);
    }
  } 
   else if(      state.questionCount == 4
   ){
     newHead = 3;

   }
  else {

    if (
      state.questionsData.filter((val) => val.isActive == true)[0]?.id == 3 &&
      state.questionsData.findIndex((val) => val.isActive == true) == 2
    ) {
      newHead = 0;
    } else {
      newHead =
        state.questionsData.filter((val) => val.isActive == true)[0].id == 4
          ? 3
          : +state.questionsData.findIndex((val) => val.isActive == true) + 1;
    }
  }

  heading = data.questionHeading[0] + newHead + " " + data.questionHeading[1];

  return {
    buttonText: data.buttonLabels.submitAnswer,
    question: state.questionsData.filter((val) => val.isActive == true)[0]
      .label, //state.questionsData[state.questionCount - 1].label,
    isPopupActive: !!state.currentPopup.length,
    pieContent: data.pieContent,
    headingLevel: "2",
    disabled: state.getIsOptionSelected,
    heading,
  };
};

const matchDispatch = (dispatch) => {
  return {
    onClick: () => {
      dispatch(thunk.submitAnswer());
      dispatch(common.toggleToastMessage(true));
      EventManager.broadcast("PRIMARY_CLICK");
    },
  };
};

export default connect(mapState, matchDispatch)(MCQArea);
