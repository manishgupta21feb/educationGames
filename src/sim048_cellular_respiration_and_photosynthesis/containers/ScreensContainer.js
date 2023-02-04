import { connect } from "react-redux";
import Screens from "../../app/components/Screens";

const mapState = (state) => {
  return{
  currentScreen: state.currentScreen,
}};
const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(Screens);
