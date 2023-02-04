import { connect } from "react-redux";
import BottomView from "../components/Screens/Screen2/BottomView";

const mapState = (state) => ({
  questionAnswered: state.questionAnswered,
  isPopupActive: !!state.currentPopup.length,
});

const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(BottomView);
