import RightArea from "../components/ViewArea/RightArea";
import { connect } from "react-redux";
import data from "../data";

const mapState = (state) => ({
  heading: !state.secondScreen
    ? !state.mcqShow
      ? data.firstScreenData.heading1
      : data.firstScreenData.heading2
    : !state.mcqShow
    ? data.secondScreenData.heading1
    : data.secondScreenData.heading2,
  isPopupActive: !!state.currentPopup.length,
  mcqShow: state.mcqShow,
});
const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(RightArea);
