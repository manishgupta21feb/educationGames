import { connect } from "react-redux";
import Screen1Bottom from '../components/activity/TopBottomScreen/BottomSection/Screen1Bottom';
import data from '../data';

const mapState = (state) => {

  const selectedHotSpotText = data.screen1HotSpotText
    .filter((h) => h.id == state.selectedHotspot);

  return {
    screen1QuestionText: data.screen1QuestionText,
    selectedHotSpotText: selectedHotSpotText[0]?.text,
    visitedHotSpot: state.visitedHotSpot,
    nextButtonClickState: state.nextButtonClickState
  }
}

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Screen1Bottom);
