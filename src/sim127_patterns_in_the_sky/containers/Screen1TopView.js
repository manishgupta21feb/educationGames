import { connect } from "react-redux";
import TopView from "../components/Screens/Screen1/TopView";

import data from "../data";

const mapState = (state) => ({
  visitedHotspots: state.visitedHotspots,
  selectedHotspot: state.selectedHotspot,
  isPopupActive: !!state.currentPopup.length,
  screen1MainImageAlt: data.screen1MainImageAlt,
  screen1TopViewButtons: data.screen1TopViewButtons,
});

const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(TopView);
