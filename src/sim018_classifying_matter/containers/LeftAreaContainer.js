import LeftArea from "../components/LeftArea";
import { connect } from 'react-redux';


const mapState = (state) => ({
    showStatic: state.showStatic
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(LeftArea);