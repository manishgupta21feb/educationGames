import { connect } from "react-redux";
import data from "../data";
import FourthScreenLeft from "../components/ForthScreen/left";

const mapState = (state) => ({
  data,
  isPopupActive: !!state.currentPopup.length,
});

const mapDispatch = () => ({});

export default connect(mapState, mapDispatch)(FourthScreenLeft);
