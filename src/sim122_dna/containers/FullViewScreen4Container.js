import { connect } from "react-redux";
import FullViewScreen4 from '../components/activity/FullViewScreen/FullViewScreen4';
import data from "../data";
import {
  thunks,
  setScreen4Dropzones,
  setDropzoneStatus
} from '../actions';

const mapState = (state) => ({
  screen4QuestionText: data.screen4QuestionText,
  screen4Strand1Data: data.screen4Strand1Data,
  screen4Strand2Data: data.screen4Strand2Data,
  droppedItems: state.droppedItems,
  screen4CorrectAnswer: state.screen4CorrectAnswer,
  screen4Dropzones: state.screen4Dropzones,
  dropzoneStatus: state.dropzoneStatus,
  imgAltTexts: data.imgAltTexts
});

const mapDispatch = (dispatch) => ({
  onDrop: (dropzone) => {
    dispatch(thunks.onDrop(dropzone));
  },
  onSubmitAnswer: () => {
    dispatch(thunks.checkDropAnswers());
  },
  setScreen4Dropzones: () => {  
    dispatch(setScreen4Dropzones(data.dropZones));
  },
  setDropzoneStatus: () => {
    dispatch(setDropzoneStatus(false));
  }
});

export default connect(mapState, mapDispatch)(FullViewScreen4);
