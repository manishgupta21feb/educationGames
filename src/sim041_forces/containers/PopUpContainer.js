import { connect } from "react-redux";
import { togglePopup } from "../actions";
import PopupHOC from "../../app/components/Popup";

const mapStateToProps = (state) => {
  return {
    currentPopup: state.currentPopup,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    togglePopup: (id) => {
      dispatch(togglePopup(id));
    },
  };
};

const PopupContainer = connect(mapStateToProps, mapDispatchToProps)(PopupHOC);

export default PopupContainer;
