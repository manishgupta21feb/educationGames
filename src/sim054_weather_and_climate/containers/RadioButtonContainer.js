import  data from "../data";
import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";
import { common,  thunks } from "../actions";

const mapState = (state) => {
  return {
    radiobuttons:data.equationsData[state.setRadio].equationOptions,
    isPopupActive: !!state.currentPopup.length,
    selectedOption: state.selectedAnswerOption,
    disabled: state.submitAnswer,
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(thunks.selectAnswerOption(id));

    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, mapDispatch)(RadioButton);
