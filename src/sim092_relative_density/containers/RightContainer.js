import { connect } from "react-redux";
import RightSection from "../components/right";

const mapState = (state) => ({
    isMCQ: state.isMCQ,
    isBall: state.isBall
});

const matchDispatch = (dispatch) => ({
});

export default connect(mapState, matchDispatch)(RightSection);
