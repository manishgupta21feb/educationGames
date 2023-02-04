import { connect } from "react-redux";
import { common } from "../actions";
import Tab from "../../app/components/Tabs/Tab";
import config from "../data";

const mapStateToProps = (state) => {
  return {
    currentPopup: state.currentPopup,
    index: state.selectedTab,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    togglePopup: (id) => {
      dispatch(common.togglePopup(id));
    },
    isSelected: () => {},
  };
};

const PopupContainer = connect(mapStateToProps, mapDispatchToProps)(Tab);

export default PopupContainer;
