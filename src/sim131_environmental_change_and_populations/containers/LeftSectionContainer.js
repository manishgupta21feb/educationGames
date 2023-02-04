import { connect } from "react-redux";
import LeftSection from "../components/LeftSection";

const mapState = (state) => ({
  isInteractive: state.isInteractive
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(LeftSection);
