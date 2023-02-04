import ForceDetails from '../components/TopSection/ForceDetails';
import { connect } from 'react-redux'

import data from "../data/index";

const mapState = (state) => {
    let valuePosition = state.hideInteractiveVideo
        && data.nonInvestigatingData[state.nonInvestigatingId].id === 5 && !state.hideInteractiveImage
        ? ' up-text' : ''
        
    return {
        data: data.nonInvestigatingData[state.nonInvestigatingId],
        valuePosition: valuePosition,
        hideTable: data.nonInvestigatingData[state.nonInvestigatingId].id === 5,
        tableOne: data.tableOne,
        tableTwo: data.tableTwo,
        textOne: data.textOne,
        textTwo: data.textTwo
    }
};

const mapDispatch = (dispatch) => ({
});

export default connect(mapState, mapDispatch)(ForceDetails)