import Home from "../components/Home";
import { connect } from "react-redux";

const mapState = (state) => {
  return {
    //----> From Reducer
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  
});

export default connect(mapState, mapDispatch)(Home);
