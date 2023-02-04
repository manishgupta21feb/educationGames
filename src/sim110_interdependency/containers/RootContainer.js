import Root from "../components";
import { connect } from "react-redux";

const mapState = (state) => {
  return {
    ariaLiveText: state.ariaLiveText,
  };
};

export default connect(mapState)(Root);
