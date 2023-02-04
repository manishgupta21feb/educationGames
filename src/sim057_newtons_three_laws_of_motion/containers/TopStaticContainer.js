import TopStatic from "../components/TopSection/TopStatic.js";
import { connect } from "react-redux";

import data from "../data/index";

const mapState = (state) => {
    return{
    data: data.investigatingData[state.investigatingQuestionId],
    hideVideo: state.hideInteractiveVideo,
    questionId:state.questionId
}};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(TopStatic);

