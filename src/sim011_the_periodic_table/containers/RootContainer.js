import Root from "../components";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    ariaLiveText: state.ariaLiveText,
  };
};

export default connect(mapStateToProps)(Root);
