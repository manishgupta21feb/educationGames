import { connect } from "react-redux";
import Select from "../../app/components/Select";

import data from "../data";
import { setDisableSubmit, common, setNumberOfNeutrons } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    heading: data.selectNeutronHeading,
    options: state.selectedQuestion.dropDownOptions,
    value: state.numberOfNeutrons,
    disabled: state.disableNeuton,
  };
};

const matchDispatch = (dispatch) => ({
  onChange: (val) => {
    dispatch(setNumberOfNeutrons({ ...val }));
    dispatch(setDisableSubmit(false));
    dispatch(common.toggleToastMessage(false));
    dispatch(common.updateResetBtnState(false));
  },
});

export default connect(mapState, matchDispatch)(Select);
