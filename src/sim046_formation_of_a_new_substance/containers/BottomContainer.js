import BottomArea from '../components/BottomArea';
import { connect } from 'react-redux';

const mapState = (state) => {
  return{
    //----> From Reducer
    optionTrigger: state.optionTriggerReducer
  };
};

export default connect(mapState)(BottomArea)