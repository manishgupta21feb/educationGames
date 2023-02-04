import { connect } from "react-redux";
import { common } from "../actions";
import TabPanel from "../../app/components/Tabs/TabPanel";

const mapStateToProps = (state) => {
  return {
    ns: "sp_tabs",
    selected: state.selectedTab,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    togglePopup: (id) => {
      dispatch(common.togglePopup(id));
    },
  };
};

const PopupContainer = connect(mapStateToProps, mapDispatchToProps)(TabPanel);

export default PopupContainer;
