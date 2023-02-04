import { connect } from "react-redux";
import BottomSection from '../components/activity/TopBottomScreen/BottomSection';

const mapState = (state) => ({
  screenStatus: state.screenStatus
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(BottomSection);
