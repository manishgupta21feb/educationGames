import { connect } from "react-redux";
import BottomStatic from '../components/BottomSection/BottomStatic';
import data from '../data';

const mapState = (state) => ({
  introductionHeading: data.introductionHeading
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(BottomStatic);
