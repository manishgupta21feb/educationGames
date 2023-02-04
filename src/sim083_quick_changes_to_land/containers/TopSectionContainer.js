import TopSection from "../components/TopSection";
import { connect } from "react-redux";
import data from "../data/index";

const mapState = (state) => ({
  data: data.home.mainScreenData[state.toggleQuestion],
  before: data.before,
  after: data.after,
});

export default connect(mapState)(TopSection);
