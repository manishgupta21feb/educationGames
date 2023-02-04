import { connect } from "react-redux";
import FirstMCQS from "../components/activity/FirstMCQS";

const mapState = (state) => ({
  isPopupActive: !!state.currentPopup.length,
});

export default connect(mapState)(FirstMCQS);
