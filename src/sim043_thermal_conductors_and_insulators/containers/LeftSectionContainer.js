import LeftSection from '../components/LeftSection';
import { connect } from "react-redux";
import data from '../data';
import { 
  common,
  thunks,
  setGlass, 
  setIsDropped,
  setTimerStatus,
} from '../actions';

const mapState = (state) => {

  const indicatorText = data.indicatorAriaLabel.filter((item) => item.id == state.selectedGlass.id);

  return {
    dropzone: data.dropzone,
    selectedDraggable: state.selectedDraggable,
    selectedGlass: state.selectedGlass,
    isDropped: state.isDropped,
    isNext: state.isNext,
    graphData: data.graphData,
    activityStarted: state.activityStarted,
    graphTitle: data.graphTitle,
    graphLeftInfo: data.graphLeftInfo,
    graphBottomInfo: data.graphBottomInfo,
    indicatorText: indicatorText[0]?.text,
    imgAltText: indicatorText[0]?.altText,
    blankGlassAltText: data.blankGlassAltText
  }
}

const mapDispatch = (dispatch) => ({
  setGlass: (id) => {
    dispatch(setGlass(id));    
    dispatch(thunks.setDropzoneLiveText());
  },
  setIsDropped: (value) => {
    dispatch(setIsDropped(value));
    dispatch(common.updateResetBtnState(false));
  },
  setTimerStatus: (status) => {
    dispatch(setTimerStatus(status));
  }
});

export default connect(mapState, mapDispatch)(LeftSection);
