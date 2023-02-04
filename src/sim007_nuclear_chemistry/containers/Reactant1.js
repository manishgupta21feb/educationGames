import { connect } from "react-redux";
import Equation from "../components/activity/Equation";

const mapState = (state) => ({
  ...state.reactant1,
});
const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(Equation);
