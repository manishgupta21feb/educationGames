import { connect } from "react-redux";
import InstructionBox from "../../app/components/DialogBox";
import data from "../data";

import { setActivityStart, buttonClicked, thunk, common } from "../actions";

const mapState = (state) => {
    return{
    header: "",
    id: "instructionBox",
    dialogType: "attention",
    buttonClasses: "right-arrow",
    buttonContinueText: data.buttonLabels.start,
    buttonContinueLabel: data.buttonLabels.start,
}};

const matchDispatch = (dispatch) => ({
    onClick: () => {
        dispatch(common.togglePopup(1));
        dispatch(setActivityStart(true));
        dispatch(buttonClicked(false));
        // dispatch(thunk.toggleAudioBtn());
        EventManager.broadcast("SECONDARY_CLICK");
        EventManager.broadcast("OUTDOOR_SCREEN");
    },
});

export default connect(mapState, matchDispatch)(InstructionBox);
