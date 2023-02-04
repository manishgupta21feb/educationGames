import { connect } from "react-redux";
import LiveText from "../../app/components/LiveText";

const mapState = (state) => ({
  message: state.ariaLiveAssertive,
  politeness: "assertive",
});

export default connect(mapState)(LiveText);
