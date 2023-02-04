import { connect } from "react-redux";
import Header from "../../app/components/Header";
import { thunk, common } from "../actions";

import data from "../data/index";

const mapState = (state) => {
    const preventAutoHide =
        state.currentPopup.indexOf(6) >= 0 || state.currentPopup.indexOf(7) >= 0;

    return {
        preventAutoHide,
        infoLabel: data.buttonLabels.info,
        resetLabel: data.buttonLabels.reset,
        disabled: state.resetBtnState,
        setFocusOnReset: state.resetFocusState,
        hideImmediately: state.showToastMessage,
        isPopupActive: !!state.currentPopup.length,
    };
};

const matchDispatch = (dispatch) => ({
    onResetClick: () => {
        EventManager.broadcast("SECONDARY_CLICK");
        dispatch(common.togglePopup(8));
    },
    onInfoClick: () => {
        EventManager.broadcast("SECONDARY_CLICK");
        dispatch(common.togglePopup(4));
        setTimeout(() => {
            EventManager.broadcast("INFO_POPUP_OPEN");
        }, 550);
    },
    setResetFocusState: (state) => {
        dispatch(common.setResetFocusState(state));
    }
});

export default connect(mapState, matchDispatch)(Header);
