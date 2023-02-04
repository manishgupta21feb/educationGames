import ClickOnApple from '../components/TopSection/ClickOnApple';
import { connect } from 'react-redux'

import { common, thunk } from "../actions";

const mapState = (state) => {
    return {
        showForceOnAppleOne: state.showForceOnAppleOne,
        showForceOnAppleTwo: state.showForceOnAppleTwo,
        showForceOnAppleThree: state.showForceOnAppleThree
    }
};

const mapDispatch = (dispatch) => ({
    onClickAppleOne: () => {
        dispatch(thunk.clickOnApple(1))
    },
    onClickAppleTwo: () => {
        dispatch(thunk.clickOnApple(2))
    },
    onClickAppleThree: () => {
        dispatch(thunk.clickOnApple(3))
    }
});

export default connect(mapState, mapDispatch)(ClickOnApple)
