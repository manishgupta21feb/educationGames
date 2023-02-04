import { connect } from "react-redux";
import CalculateButton from "../components/CarbonDataTable/CalculateButton";

import data from "../data";

const mapState = (state) => ({
  text: data.buttonLabels.calculate,
  isPopUpOpen: !!state.currentPopup.length,
  classes: "primary",
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(CalculateButton);
