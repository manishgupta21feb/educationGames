import TopInteractive from "../components/TopSection/TopInteractive.js";
import { connect } from "react-redux";

import {
    setHideInteractiveImage,
    setHideInteractiveVideo,
} from "../actions";

import { common } from "../actions";

import data from "../data/index";

const mapState = (state) => {
    return {
        data: data.nonInvestigatingData[state.nonInvestigatingId],
        hideImage: state.hideInteractiveImage,
        hideVideo: state.hideInteractiveVideo,
        showForceOnAppleOne: state.showForceOnAppleOne,
        showForceOnAppleTwo: state.showForceOnAppleTwo,
        showForceOnAppleThree: state.showForceOnAppleThree,
        forceAltText: data.forceLiveText
    }
};

const mapDispatch = (dispatch, state) => ({
    onClickApple: (id) => {
        if (id == 2) {
            dispatch(common.thunks.ariaLiveAssertive(data.nonInvestigatingData[1].videoStart.imageAlt, 300));
        } else {
            dispatch(common.thunks.ariaLiveAssertive(data.nonInvestigatingData[2].videoStart.imageAlt, 300));
        }
        dispatch(setHideInteractiveImage(true));
        dispatch(setHideInteractiveVideo(false));
        dispatch(common.setResetFocusState(true));
    },
});

export default connect(mapState, mapDispatch)(TopInteractive);
