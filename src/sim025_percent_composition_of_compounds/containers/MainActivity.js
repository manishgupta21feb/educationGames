import { connect } from "react-redux";
import MainActivity from "../components/mainActivity";

const mapState = (state) => ({
  isPopupActive: !!state.currentPopup.length,
  showDropZone: state.showDropZone,
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(MainActivity);
