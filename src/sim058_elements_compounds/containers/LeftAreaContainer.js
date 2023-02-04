import LeftArea from "../components/LeftView";
import { connect } from "react-redux";

const mapState = (state) => ({
  showStatic: state.showStatic,
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(LeftArea);
