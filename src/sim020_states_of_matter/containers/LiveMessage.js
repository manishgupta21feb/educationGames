import { connect } from "react-redux";
import { LiveMessage } from "react-aria-live";

export default connect((state) => ({
  "aria-live": "polite",
  message: state.ariaLiveText,
}))(LiveMessage);
