import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data/index";
import { thunk, common } from "../actions";

const mapState = (state) => {

    const next = state.investigatingStatus ?
    state.answerStatus && state.questionId 
    : state.nonInvestigatingId === 5 ? true : false


    const finish = state.investigatingQuestionId === 2 && next;

    const flag = state.nonInvestigatingId === 4 ?
        !(state.showForceOnAppleOne && state.showForceOnAppleTwo && state.showForceOnAppleThree)
        : !state.investigatingStatus && (data.nonInvestigatingData[state.nonInvestigatingId].interactive) &&
        !(state.hideInteractiveImage && state.hideInteractiveVideo)

    return {
        disabled: flag,
        text: finish ? data.buttonLabels.finish : next || state.investigatingStatus ? data.buttonLabels.next : data.buttonLabels.continue,
        isPopUpOpen: !!state.currentPopup.length,
        classes: `toast-secondary-button positive ${finish ? "" : "right-arrow"
            }`.trim(),
    };
};

const mapDispatch = (dispatch) => ({
    onClick: () => {
        dispatch(thunk.handleNextButtonClick());
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    },
});

export default connect(mapState, mapDispatch)(Button);
