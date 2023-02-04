import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import Tchart from "../../app/components/TChart";
import data from "../data";

const mapState = (state) => ({});

const matchDispatch = (dispatch) => ({
  onClick: () => {},
});

export default connect(mapState, matchDispatch)(Tchart);
