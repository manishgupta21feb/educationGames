import { connect } from "react-redux";
import BottomSection from "../components/BottomSection";

const mapState = (state) => ({
  showStatic: state.showStatic,
  selectedHotspot: state.selectedHotspot,
  nextButtonClickedState: state.nextButtonClickedState,
  jumpToMCQScreenState: state.jumpToMCQScreenState,
  visitedHotspots: state.visitedHotspots,
});

export default connect(mapState)(BottomSection);
