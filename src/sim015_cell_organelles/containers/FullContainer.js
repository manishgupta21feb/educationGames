import FullView from "../components/Screens/FullView/index";
import { connect } from "react-redux";
import {thunk,answerSubmitted,setPreviousSound} from "../actions"
import data from "../data/index"

const mapState = (state) => {
 // console.log("audioStatePlay",state.audioStatePlay)
  return {
    isPopupActive: !!state.currentPopup.length,
    instructionText: data.Screen2.questionHeading,
    elementData: state.optionsData,
    questionsList:state.questionsList,
    draggableItems:state.optionsData,
    submitBtnText:data.buttonLabels.submitAnswer,
    buttonFinish:data.buttonLabels.finish,
    showFinishButton:state.showFinishButton,
    audioStatePlay: state.audioStatePlay,
    isAccessibleListVisible:state.isAccessibleListVisible

  };
};

const mapDispatch = (dispatch) => ({
  fetchElements:() =>{
    dispatch(thunk.fetchElements())
  },
  fetchQuestions:() =>{
    dispatch(thunk.fetchQuestionsList())
  },
submitAnswer:() =>{
  dispatch(answerSubmitted(false));
  EventManager.broadcast("PRIMARY_CLICK");
  dispatch(thunk.submitAnswer());
},
finshAll:() =>{
  dispatch(thunk.finshAll())
},
setPreviousSound: (sound) => dispatch(setPreviousSound(sound))

})

export default connect(mapState, mapDispatch)(FullView);
