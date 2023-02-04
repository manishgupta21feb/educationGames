import { connect } from "react-redux";
import TopSection from "../components/TopArea/TopSection";
import data from "../data/index";

const mapState = (state) => ({
  data,
  isPopupActive: !!state.currentPopup.length,
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(TopSection);
