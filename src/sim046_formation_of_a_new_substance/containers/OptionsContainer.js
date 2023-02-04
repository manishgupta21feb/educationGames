import Options from '../components/Options';
import { connect } from 'react-redux';
import { common, thunk } from '../actions';
import EventManager from "../../app/events/manager";

const mapState = (state) => {
  return {
    //----> From Reducer
    options: state.optionDataReducer,
    aboutScreen: state.aboutScreenReducer,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  onHandler: (evt, index) => {
    EventManager.broadcast("SECONDARY_CLICK");
    const ev = evt.target.id
    setTimeout(() => {
      dispatch(thunk.onHandler(ev, index));
    }, 100)
   
    dispatch(common.updateResetBtnState(false));
    dispatch(common.setResetFocusState(true));
  },

});

export default connect(mapState, mapDispatch)(Options)

