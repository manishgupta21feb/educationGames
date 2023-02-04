import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import RadioButton from "../../app/components/RadioButton/index.jsx";
import { common, selectAnswerOptionAction, radioBtnCheckedAction } from '../actions';

import data from "../data";

const mapState = (state) => {
  return {
    //----> From Data
    radiobuttons: data.radioButtons,

    //----> From Reducer
    selectedOption: state.selectAnswerOptionReducer,
    disabled: !state.videoEndedReducer,
  }
};

const matchDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(selectAnswerOptionAction(id));
    dispatch(radioBtnCheckedAction(true));
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, matchDispatch)(RadioButton);
