import { connect } from "react-redux";
import Screen5Bottom from '../components/activity/TopBottomScreen/BottomSection/Screen5Bottom';
import data from "../data";

const mapState = (state) => {

  const selectedHotSpotText = data.screen5HotSpotText
  .filter((h) => h.id == state.selectedHotspot);

  return {
    screen5QuestionText: data.screen5QuestionText,
    selectedHotSpotText: selectedHotSpotText[0]?.text,
    nextButtonClickState: state.nextButtonClickState,
    visitedHotSpot: state.visitedHotSpot
  }
}

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(Screen5Bottom);
