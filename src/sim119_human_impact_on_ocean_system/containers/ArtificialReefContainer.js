import { connect } from "react-redux";
import ArtificialReef from "../components/TopSection/ArtificialReef";

const mapState = (state) => {
  return {
    videoPlayState: state.videoPlayState,
    setVideoState: state.setVideoState
  }
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(ArtificialReef);
