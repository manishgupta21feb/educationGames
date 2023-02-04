import { connect } from "react-redux";
import MainAreaContainer from "../components/Main/index";

import data from "../data/index";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    selected: state.selectedTab,
    currentTab: data.mainScreenData[state.selectedTab],
    soilSection: state.soilSection,
  };
};

export default connect(mapState)(MainAreaContainer);
