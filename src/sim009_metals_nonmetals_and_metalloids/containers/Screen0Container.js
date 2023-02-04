import { connect } from "react-redux";
import Screen0 from "../components/Screens/Screen0";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    answer: state.showFeedback,
  };
};

export default connect(mapState)(Screen0);
