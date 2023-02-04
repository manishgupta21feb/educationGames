import { connect } from "react-redux";
import Top from "../components/TopBottom/Top";

const mapState = (state) => ({
  question: state.question,
  currentScreen: state.currentScreen,
});

export default connect(mapState)(Top);
