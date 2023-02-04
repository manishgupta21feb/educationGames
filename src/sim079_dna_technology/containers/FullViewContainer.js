import { connect } from "react-redux";
import FullView from "../components/Fullview/Fullview";

import data from "../data/index";
import { thunks, common } from "../actions";

const mapState = (state) => {
  return {
    heading: data.mainHeading,
    selectedLabel: data.selected,
    questions: data.hotspots,
    startActivity: state.startActivity,
    isPopupActive: !!state.currentPopup.length,
    selectedHotspot: state.selectedHotspot,
    selectedButton: state.selectedButton,
    mainimgText: data.mainimgAlt,
  };
};
const mapDispatch = (dispatch) => ({
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },

  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      dispatch(thunks.selectHotspot(id));
    }, 300);
  },
});

export default connect(mapState, mapDispatch)(FullView);
