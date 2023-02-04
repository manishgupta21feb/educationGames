import LeftArea from "../components/LeftArea";
import { connect } from "react-redux";

const mapState = (state) => ({
  showStatic: state.showStatic,
});

export default connect(mapState)(LeftArea);
