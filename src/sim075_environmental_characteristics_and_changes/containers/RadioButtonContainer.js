import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(RadioButton);
