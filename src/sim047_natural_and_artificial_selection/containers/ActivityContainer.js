import Activity from "../components/activity";
import { connect } from "react-redux";
import data from "../data";
import { common ,getScreenData,setSliderState} from "../actions";

const mapState = (state) => {
  return {
    data,
    isPopupActive: !!state.currentPopup.length,  
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
    dispatch(getScreenData(data.timelineData1));
    dispatch(setSliderState(false))
  },
});

export default connect(mapState, mapDispatch)(Activity);
