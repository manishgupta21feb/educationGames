import { connect } from "react-redux";
import LeftSection from '../components/activity/LeftRightScreen/LeftSection';
import data from "../data";
import {
  thunks,
  setScreen6Dropzones,
  setDropzoneStatus
} from '../actions';

const mapState = (state) => ({
  screen6StandData: data.screen6StandData,
  screen6Dropzones: state.screen6Dropzones,
  droppedItems: state.droppedItems,
  topScreenImgText: data.topScreenImgText,
  screen6BoxText1: data.screen6BoxText1,
  screen6BoxText2: data.screen6BoxText2,
  dropzoneStatus: state.dropzoneStatus,
  imgAltTexts: data.imgAltTexts
});

const mapDispatch = (dispatch) => ({
  onDrop: (dropzone) => {
    dispatch(thunks.onDrop(dropzone));
  },
  setScreen6Dropzones: () => {
    dispatch(setScreen6Dropzones(data.screen6DropZones));
  },
  setDropzoneStatus: () => {
    dispatch(setDropzoneStatus(false));
  }
});

export default connect(mapState, mapDispatch)(LeftSection);
