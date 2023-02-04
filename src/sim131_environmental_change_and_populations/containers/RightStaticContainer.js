import { connect } from "react-redux";
import RightStatic from '../components/RightSection/RightStatic';
import data from '../data';

const mapState = (state) => ({
  instructionText: data.instructionText
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(RightStatic);
