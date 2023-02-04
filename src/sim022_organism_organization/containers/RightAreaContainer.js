import { connect } from "react-redux";
import RightArea from "../components/RightArea";

const mapState = (state) => ({
  showStatic: state.showStatic,
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(RightArea);
