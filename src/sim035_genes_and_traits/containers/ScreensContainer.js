import { connect } from "react-redux";
import Screens from "../../app/components/Screens";

const mapStateToProps = (state) => {
  return {
    currentScreen: state.currentScreen,
  };
};

const ScreensContainer = connect(mapStateToProps)(Screens);

export default ScreensContainer;
