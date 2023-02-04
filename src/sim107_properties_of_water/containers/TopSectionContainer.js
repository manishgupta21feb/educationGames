import TopSection from "../components/TopSection";
import { connect } from "react-redux";

const mapState = (state) => ({
  showStatic: state.showStatic,
  start: state.startSimulation,
});

export default connect(mapState)(TopSection);
