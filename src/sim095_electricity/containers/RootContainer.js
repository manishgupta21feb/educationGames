import Root from "../components";
import { connect } from "react-redux";
import data from "../data";

const mapState = (state) => ({
  sounds: data.sounds,
});
const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Root);
