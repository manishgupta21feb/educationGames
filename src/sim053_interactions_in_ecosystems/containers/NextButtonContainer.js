import { connect } from "react-redux";
import Button from "../../app/components/Button";
import data from "../data/index";
import { thunk, common } from "../actions";

const mapState = (state) => {

    const next = state.answerStatus && state.showStatic
    const finish = state.questionCount == 2 && next;

    return {
        text: finish ? data.buttonFinish : next ? data.buttonNext : data.buttonContinue,
        isPopUpOpen: !!state.currentPopup.length,
        classes: `toast-secondary-button positive ${finish ? "" : "right-arrow"
            }`.trim(),
    };
};

const mapDispatch = (dispatch) => ({
    onClick: () => {
        dispatch(thunk.handleNextButtonClick());
        dispatch(common.setResetFocusState(true));
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    },
});

export default connect(mapState, mapDispatch)(Button);
