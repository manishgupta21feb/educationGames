import { connect } from "react-redux";
import RightArea from "../components/RightView";

const mapState = (state) => ({
  showStatic: state.showStatic,
});

export default connect(mapState)(RightArea);
