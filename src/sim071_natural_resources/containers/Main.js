import { connect } from "react-redux";
import Main from "../components/activity/Main/index";

const mapState = (state) => ({
  isPopupActive: !!state.currentPopup.length,
});
const matchDispatch = (dispatch) => ({});
export default connect(mapState, matchDispatch)(Main);
