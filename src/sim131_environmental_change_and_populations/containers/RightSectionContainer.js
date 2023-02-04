import { connect } from "react-redux";
import RightSection from "../components/RightSection";

const mapState = (state) => ({
  isInteractive: state.isInteractive
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(RightSection);
