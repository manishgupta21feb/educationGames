import { connect } from "react-redux";
import Button from "../../app/components/Button";
import data from "../data";

import { common, setIsContinue, setShowVideoLevel, setPlaySelectedAnimation,setHomeScreen, selectAnswerOption, setIsBothVideoPlayed, currentExperimentNumber } from "../actions";

const mapState = (state) => ({
    disabled: false,
    text: data.buttonLabels.continue,
    isPopUpOpen: !!state.currentPopup.length,
    classes: `toast-secondary-button positive right-arrow`,
});

const mapDispatch = (dispatch) => ({
    onClick: () => {
        const isBothVideoPlay = [
            { flag: false },
            { flag: false }
        ]
        dispatch(selectAnswerOption(""));
        dispatch(setIsContinue(false))
        dispatch(setHomeScreen(true));
        dispatch(currentExperimentNumber(0));
        dispatch(setIsBothVideoPlayed(isBothVideoPlay));
        dispatch(setPlaySelectedAnimation(false));
        dispatch(setShowVideoLevel(false));
        dispatch(common.setResetFocusState(true));
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    },
});

export default connect(mapState, mapDispatch)(Button);
