import { connect } from "react-redux";
import FullViewSection from '../components/activity/FullViewScreen';

const mapState = (state) => ({
  screenStatus: state.screenStatus,
});

const mapDispatch = (dispatch) => ({
});

export default connect(mapState, mapDispatch)(FullViewSection);
