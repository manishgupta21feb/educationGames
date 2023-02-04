import DropDown from "../components/FullView/DropDown";
import { connect } from "react-redux";

import { common, setDropDownData, setAnimationStart } from "../actions";
import simData from "../data";

const mapState = (state, ownProps) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    selectOptions: simData.selectData,
    dropSelection: state.getDropDownData[ownProps.selectNumber],
    disableRest: state.getFreezePanel,
  };
};

const mapDispatch = (dispatch) => ({
  onSelectionUpdate: (e, location) => {
    dispatch(setDropDownData(e, location));
    dispatch(setAnimationStart(false));
  },
});

export default connect(mapState, mapDispatch)(DropDown);
