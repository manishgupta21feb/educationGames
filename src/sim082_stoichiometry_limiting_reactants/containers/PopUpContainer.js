import { connect } from "react-redux";
import { common } from "../actions";
import PopupHOC from "../../app/components/Popup";

const mapStateToProps = (state) => ({
  currentPopup: state.currentPopup,
});

const mapDispatchToProps = (dispatch) => ({
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },
});

const PopupContainer = connect(mapStateToProps, mapDispatchToProps)(PopupHOC);

export default PopupContainer;
