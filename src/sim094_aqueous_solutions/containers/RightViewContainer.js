import RightView from "../components/RightView";
import { connect } from 'react-redux';
import { thunk, common } from '../actions';
import data from '../data';

const mapState = (state) => {
  let btnText = data.buttonLabels.continue;
  const index = state.getQuestionNumber;

  if(index == 2){
    btnText = data.buttonLabels.next;
  }
  if(index == 6){
    btnText = data.buttonLabels.finish;
  }

  return{
    //----> From Data
    continueBtnText: btnText,

    //----> From State
    answer: state.getAnswer,
    questionNumber: state.getQuestionNumber,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  onContinue: () => {
    dispatch(thunk.onContinue())
    dispatch(common.toggleToastMessage(false));
    dispatch(common.setResetFocusState(true));
  }
});

export default connect(mapState, mapDispatch)(RightView)

