import { connect } from "react-redux";
import TopSection from '../components/activity/TopBottomScreen/TopSection';

const mapState = (state) => ({
  screenStatus: state.screenStatus
});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(TopSection);
