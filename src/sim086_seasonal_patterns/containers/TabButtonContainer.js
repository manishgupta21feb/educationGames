import { thunks } from "../actions";
import { connect } from "react-redux";
import { TabButton } from "../../app/components/Tabs";
import config from "../data";

const mapState = (state) => ({
  ns: "sp_tabs",
  selected: state.selectedTab,
  buttons: config.tabArray,
  disabled: state.disabledTabButtons,
  popupOpened: state.currentPopup.length > 0,
});

const matchDispatch = (dispatch) => ({
  onTabClick: (index) => {
    dispatch(thunks.setGlobalTab(index));
  },
});

export default connect(mapState, matchDispatch)(TabButton);
