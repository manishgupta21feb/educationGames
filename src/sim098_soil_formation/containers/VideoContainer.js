import { connect } from "react-redux";
import Video from "../../app/components/Video";
import { thunks } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    currentPopup: state.currentPopup,
    autoPlay: false,
    loop: false,
    question: data.mainScreenData[state.selectedTab].videoData,
    buttonLabels: data.buttonLabels,
  };
};
const mapDispatch = (dispatch) => ({
  playStateToggled: () => {
    dispatch(thunks.setVideoLiveText());
  },
});
export default connect(mapState, mapDispatch)(Video);
