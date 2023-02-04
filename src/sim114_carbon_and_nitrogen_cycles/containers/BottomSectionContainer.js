import { connect } from "react-redux";
import BottomSection from '../components/activity/TopBottomScreen/BottomSection';
import data from '../data';

const mapState = (state) => {

  const { screenStatus } = state;

  const {
    carbonInfoHeading,
    photosynthesisHeading,
    respirationHeading,
    cndioxideInfoHeading,
    oceanHeading,
    fossilFuelsHeading,
    nitrogenInfoHeading,
  } = data;

  const getHeading = () => {
    switch (screenStatus) {
      case 'carbon-info': {
        return carbonInfoHeading;
      }
      case 'photosynthesis': {
        return photosynthesisHeading;
      }
      case 'respiration': {
        return respirationHeading;
      }
      case 'carbonDioxide-info': {
        return cndioxideInfoHeading;
      }
      case 'ocean': {
        return oceanHeading;
      }
      case 'fossil-fuels': {
        return fossilFuelsHeading;
      }
      case 'nitrogen-info': {
        return nitrogenInfoHeading;
      }
      default: {
        return []
      }
    }
  }

  return {
    bottomHeading: getHeading(),
    screenStatus: state.screenStatus,
    answerAttempted: state.answerAttempted,
    correctAttempt: state.correctAnswer,
  }
}

export default connect(mapState, null)(BottomSection);
