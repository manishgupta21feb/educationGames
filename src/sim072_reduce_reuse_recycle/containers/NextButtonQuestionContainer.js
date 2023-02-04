import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data/index";
import { thunk, common } from "../actions";

const mapState = (state) => {

    let flag = false;

    for (var i = 0; i < state.answerShow.length; i++) {
        if (state.answerShow[i].show === false) {
            flag = true;
            break;
        }
    }

    return {
        disabled: flag,
        text: state.questionNum < 2 ? data.buttonLabels.next : data.buttonLabels.finish,
        isPopUpOpen: !!state.currentPopup.length,
        classes: `toast-secondary-button positive ${state.questionNum < 2  ? "right-arrow" : ""}`
    };
};

const mapDispatch = (dispatch) => ({
    onClick: () => {
        dispatch(thunk.handleNextButtonClick());
        setTimeout(() => {
            dispatch(common.setResetFocusState(true));
        }, 100);
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    },
});

export default connect(mapState, mapDispatch)(Button);
