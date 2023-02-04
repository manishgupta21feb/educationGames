import { connect } from "react-redux";
import BottomView from "../components/Screens/Screen1/BottomView";

import data from "../data";

const mapState = (state) => ({
  defaultOST: data.screen1DefaultOST,
  selectedHotspot: state.selectedHotspot,
  isPopupActive: !!state.currentPopup.length,
  screen1TopViewButtons: data.screen1TopViewButtons,
});
const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(BottomView);
