import Root from "../components";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    ariaLiveText: state.ariaLiveText,
    showAnimation: state.showAnimation,
    selectedQuestion: state.selectedQuestion,
  };
};

export default connect(mapStateToProps)(Root);
