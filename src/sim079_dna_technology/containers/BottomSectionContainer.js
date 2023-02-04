import { connect } from "react-redux";
import BottomSection from "../components/BottomSection";

const mapState = (state) => ({
  secondScreenData: state.secondScreenData,
});

export default connect(mapState)(BottomSection);
