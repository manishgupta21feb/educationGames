import { connect } from "react-redux";
//import { LiveMessage } from "react-aria-live";
import AriaLiveComp from "../../app/components/LiveText";

const mapState = (state) => ({
  politeness: "assertive",
  message: state.ariaLiveText,
});

export default connect(mapState)(AriaLiveComp);
