import { connect } from "react-redux";
import Screens from "../../app/components/Screens";

const mapState = (state) => ({
  currentScreen: state.currentScreen,
});
const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(Screens);