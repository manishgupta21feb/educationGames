import VideoLabels from "../components/Labels/VideoLabels";
import { connect } from "react-redux";
import data from "../data";

const mapState = (state) => {
  return {
    //----> From Data
    videoContent: data.options[state.questionIndexReducer].videoContent
  };
};

export default connect(mapState)(VideoLabels);
