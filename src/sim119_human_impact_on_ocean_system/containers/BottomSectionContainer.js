import { connect } from "react-redux";
import BottomSection from '../components/BottomSection';

const mapState = (state) => ({
  visitedHotspots: state.visitedHotspots,
  jumpToMCQScreenState: state.jumpToMCQScreenState,
  nextButtonClickedState: state.nextButtonClickedState
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(BottomSection);
