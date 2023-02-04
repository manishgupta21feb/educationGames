import { connect } from "react-redux";
import TopView from "../components/Screens/Screen2/TopView";

const mapState = (state) => ({
  isPopupActive: !!state.currentPopup.length,
  selectedMCQQuestion: state.selectedMCQQuestion,
});
const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(TopView);
