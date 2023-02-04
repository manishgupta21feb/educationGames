import { connect } from "react-redux";
import Checkboxes from "../components/activity/TopBottomScreen/BottomSection/Checkboxes";
import data from "../data";
import { setCheckBoxOption } from "../actions";

const mapState = (state) => {

  const { screenStatus } = state;

  const {
    CNCheckboxesData,
    nitrogenFixationCheckboxesData,
    climateCheckboxesData
  } = data;

  const getCheckboxOption = () => {
    switch(screenStatus) {
      case 'carbon-and-nitrogen': {
        return CNCheckboxesData;  
      }
      case 'nitrogen-fixation': {
        return nitrogenFixationCheckboxesData;
      }
      case 'climate': {
        return climateCheckboxesData;
      }
    }
  }

  return {
    selectedOptions: state.checkboxOption,
    isPopupActive: !!state.currentPopup.length,
    checkboxes: getCheckboxOption(),
    correctAttempt: state.correctAnswer
  }
}

const matchDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(setCheckBoxOption(id));
  },
});

export default connect(mapState, matchDispatch)(Checkboxes);
