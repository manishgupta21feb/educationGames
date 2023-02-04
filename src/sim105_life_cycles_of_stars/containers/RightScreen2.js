import { connect } from "react-redux";
import Right from "../components/Screens/Screen2/Right";

const mapState = (state) => ({
  nextScreenButton: state.nextScreenButton,
});

export default connect(mapState)(Right);
