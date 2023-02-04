import { connect } from "react-redux";
import Video from "../../app/components/Video";
import data from "../data";
import {thunks} from "../actions"
const mapState = (state) => {
  return {
    currentPopup: state.currentPopup,
    autoPlay: true,
    loop:false,
    question:state.selectedQuestion,
    buttonLabels: data.buttonLabels,

  };
};
const mapDispatch=(dispatch)=> ({
  playStateToggled: (state) => {
    dispatch(thunks.setVideoLiveText());
    //alert("hi")
  },
});
export default connect(mapState,mapDispatch)(Video);
