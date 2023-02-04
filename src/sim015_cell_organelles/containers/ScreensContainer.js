import { connect } from 'react-redux';
import Screens from '../../app/components/Screens';

const mapStateToProps = (state) => {
  return {
    currentScreen: state.currentScreen,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const ScreensContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Screens);

export default ScreensContainer;