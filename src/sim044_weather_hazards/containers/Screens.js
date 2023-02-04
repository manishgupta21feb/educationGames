import { connect } from "react-redux";
import Screens from "../../app/components/Screens";

const mapState = (state) => {
  return {
    currentScreen: state.currentScreen,
  };
};

export default connect(mapState)(Screens);
