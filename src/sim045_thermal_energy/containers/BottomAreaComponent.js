import { connect } from "react-redux";
import BottomAreaComponent from "../components/activity/IntroScreen/BottomAreaComponent";
import data from "../data";

const mapState = (state) => ({
  introductionHeading: data.introductionHeading,
});

export default connect(mapState)(BottomAreaComponent);
