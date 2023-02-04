import TopSection from "../components/TopSection";
import { connect } from "react-redux";

const mapState = (state) => ({
  showStatic: state.showStatic,
});

export default connect(mapState)(TopSection);
