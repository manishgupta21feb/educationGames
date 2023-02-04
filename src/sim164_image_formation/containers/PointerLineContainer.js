import { connect } from "react-redux";
import PointLine from "../components/activity/Image/PointLine";
import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => {
  return {
    pointLineData: data.focalLengthContent.focalBar,
    describeContent: data.focalLengthContent.describeContent,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => {
  return {
    pointLineLive: (_data) => {
      dispatch(thunks.ariaLivePointer(_data));
    },
  };
};

export default connect(mapState, mapDispatch)(PointLine);
