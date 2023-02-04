import { connect } from "react-redux";
import CenterArea from "../components/center";
import data from "../data/index";

const mapState = (state) => {
  return {
    topHeading: data.topHeading,
    isPopupActive: !!state.currentPopup.length,
  };
};

export default connect(mapState)(CenterArea);
