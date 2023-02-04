import TopSection from "../components/TopSection";
import { connect } from "react-redux";

const mapState = (state) => {
    return {
        investigatingStatus: state.investigatingStatus
    }
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(TopSection);
