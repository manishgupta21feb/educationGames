import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";

import { selectOption, thunk, common } from "../actions";

import data from "../data/index";

const mapState = (state) => {
    return {
        selectedOption: state.selectedOption,
        isPopupActive: !!state.currentPopup.length,
        disabled: state.answerAttempted && state.correctAnswer,
        radiobuttons: data.mcqOptions.map((m) => ({
            text: m.text,
            id: m.id,
        }))
    };
};

const mapDispatch = (dispatch) => ({
    onChange: (id) => {
        EventManager.broadcast("STOP_ALL_AND_PLAY", { id: "PRIMARY_CLICK" });
        dispatch(selectOption(id));
        dispatch(common.toggleToastMessage(false));
        dispatch(common.updateResetBtnState(false));
    },
});

export default connect(mapState, mapDispatch)(RadioButton);
