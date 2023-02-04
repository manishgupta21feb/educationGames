import RightSection from '../components/RightSection';
import { connect } from "react-redux";
import data from '../data';

const mapState = (state) => ({
  introductionHeading: data.introductionHeading
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(RightSection);
