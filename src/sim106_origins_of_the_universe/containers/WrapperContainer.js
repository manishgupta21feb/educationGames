import { connect } from "react-redux";
import Main from "../components/Wrapper";

const mapState = (state) => ({
  isPopupActive: !!state.currentPopup.length,
});
const matchDispatch = (dispatch) => ({});
export default connect(mapState, matchDispatch)(Main);
