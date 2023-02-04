import { connect } from "react-redux";
import Select from "../../app/components/Select";

import data from "../data";
import { setDisableSubmit, common, setNumberOfValance } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    heading: data.selectValanceHeading,
    options: state.selectedQuestion.dropDownOptions,
    value: state.numberOfValance,
    disabled: state.disableValance,
  };
};

const matchDispatch = (dispatch) => ({
  onChange: (val) => {
    dispatch(setNumberOfValance({ ...val }));
    dispatch(setDisableSubmit(false));
    dispatch(common.toggleToastMessage(false));
    dispatch(common.updateResetBtnState(false));
  },
});

export default connect(mapState, matchDispatch)(Select);
