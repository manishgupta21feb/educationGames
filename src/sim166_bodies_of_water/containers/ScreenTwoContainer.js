import { connect } from "react-redux";
import { common,thunks } from "../actions";
import ScreenTwo from "../components/Screens/ScreenTwo";
import data from "../data";
const mapState = (state) => {
  return {
     data,
     
  };
};

const matchDispatch = (dispatch) => ({
  fetchElements:()=>{
    dispatch(thunks.fetchElements())
  }
});

export default connect(mapState, matchDispatch)(ScreenTwo);
