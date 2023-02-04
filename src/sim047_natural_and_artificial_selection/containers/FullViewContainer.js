import { connect } from "react-redux";
import data from "../data";
import { common } from "../actions";
import FullView  from "../components/FullView";

const mapState = (state) => {
  return {
    data,
    isPopupActive: !!state.currentPopup.length, 
    selectedTab:state.selectedTab 
  };
};

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(FullView);
