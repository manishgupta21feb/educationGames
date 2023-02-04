import TopArea from '../components/TopArea';
import { connect } from 'react-redux';
import data from '../data';

const mapState = (state) => {
  console.log(state)
  return{
    //----> From Data
    aboutScreen: state.aboutScreenReducer,
    bgImgAlt: data.bgImgAlt[state.getAltTextMerger],
    
    //----> From Reducer
    options: state.optionDataReducer,
    optionTrigger: state.optionTriggerReducer,
  };
};

const mapDispatch = (dispatch) => ({
 
});

export default connect(mapState, mapDispatch)(TopArea)