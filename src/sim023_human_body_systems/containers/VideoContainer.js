import { connect } from "react-redux";
import VideoAreaComponent from "../../app/components/Video";
import data from "../data";

const mapStateToProps = (state) => {
  return {
    buttonLabels: data.buttonLabels,
    currentPopup: state.currentPopup,
    disablePlayPauseButton: false,
  };
};
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(VideoAreaComponent);
