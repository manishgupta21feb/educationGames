import { connect } from "react-redux";
import ObjectScreens from '../components/TopSection/ObjectScreens';

const mapState = (state) => ({
  selectedHotspot: state.selectedHotspot
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(ObjectScreens);
