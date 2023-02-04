import { connect } from "react-redux";
import { LiveMessage } from "react-aria-live";

const mapState = (state) => ({
  "aria-live": "polite",
  message: state.ariaLiveText,
});

export default connect(mapState)(LiveMessage);