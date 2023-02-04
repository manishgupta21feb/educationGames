import { connect } from "react-redux";
import BottomSection from "../components/BottomSection";

const mapState = (state) => ({
  start: state.startSimulation,
});

export default connect(mapState)(BottomSection);
