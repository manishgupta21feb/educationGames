import { connect } from "react-redux";
import TopSection from '../components/TopSection';

const mapState = (state) => ({
  nextButtonClickedState: state.nextButtonClickedState,
  visitedHotspots: state.visitedHotspots
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(TopSection);
