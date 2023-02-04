import { connect } from "react-redux";
import Home from "../components/Home";
import data from "../data";

const mapState = (state) => {
  return {
    //From Data
    istructionText: data.istructionText,
    fossils: data.fossils,
    
    //From Redux
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  
});

export default connect(mapState, mapDispatch)(Home);
