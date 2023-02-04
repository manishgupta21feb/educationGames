import LeftArea from "../components/LeftArea";
import { connect } from "react-redux";
import data from "../data";

const mapState = (state) => ({
  showStatic: state.showStatic,
  screen1Heading: data.screen1Heading,
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(LeftArea);
