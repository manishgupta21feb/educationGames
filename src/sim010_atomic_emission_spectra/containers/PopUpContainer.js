import { connect } from "react-redux";
import PopupHOC from "../../app/components/Popup";
import EventManager from "../../app/events/manager";

import { common } from "../actions";

const mapStateToProps = (state) => {
  return {
    currentPopup: state.currentPopup,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    togglePopup: (id) => {
      dispatch(common.togglePopup(id));
      EventManager.broadcast("SECONDARY_CLICK");
    },
  };
};

const PopupContainer = connect(mapStateToProps, mapDispatchToProps)(PopupHOC);

export default PopupContainer;
