import Flag from "../components/Flag";
import { connect } from "react-redux";
import data from "../data";

const mapState = (state) => {
  return {
    //----> From Reducer
    sliderValue: state.getUpdateSlider,
  };
};

const mapDispatch = (dispatch) => ({
  
});

export default connect(mapState, mapDispatch)(Flag);
