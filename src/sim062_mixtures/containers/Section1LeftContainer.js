import LeftContainer from "../components/scene1/leftSection";
import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import data from "../data";

import { common } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    activityChange: state.activityChange,
    tabsData: state.section1Data,
    headerData: data.section1TableHeader,
    resetBtnState: state.resetBtnState,
    data,
  };
};

const mapDispatch = (dispatch) => ({
  onChangeSection: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(3));
    setTimeout(() => {
      EventManager.broadcast("COMPLETION_SCREEN");
    }, 150);
  },
});

export default connect(mapState, mapDispatch)(LeftContainer);
