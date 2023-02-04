import { connect } from "react-redux";
import Select from "../../app/components/Select";

import data from "../data";
import { setDisableSubmit, common, setNumberOfProtons } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    heading: data.selectProtonsHeading,
    options: state.selectedQuestion.dropDownOptions,
    value: state.numberOfProtons,
    disabled: state.disableProton,
  };
};

const matchDispatch = (dispatch) => ({
  onChange: (val) => {
    dispatch(setNumberOfProtons({ ...val }));
    dispatch(setDisableSubmit(false));
    dispatch(common.toggleToastMessage(false));
    dispatch(common.updateResetBtnState(false));
  },
});

export default connect(mapState, matchDispatch)(Select);
