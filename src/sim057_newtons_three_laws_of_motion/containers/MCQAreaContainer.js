import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";

import { thunk } from "../actions";

import data from "../data/index";

const mapState = (state) => {
    const heading = data.questionHeading.replace("-1-", data.investigatingData[state.investigatingQuestionId].questionData[state.questionId].id);

    return {
        heading,
        headingLevel: "2",
        question: data.investigatingData[state.investigatingQuestionId].questionData[state.questionId].text,
        buttonText: data.buttonLabels.submitAnswer,
        disabled:
            state.correctAnswer ||
            !state.selectedOption ||
            !!state.currentPopup.length,
    };
};

const mapDispatch = (dispatch) => {
    return {
        onClick: () => {
            EventManager.broadcast("PRIMARY_CLICK");
            dispatch(thunk.submitAnswer());
        },
    };
};

export default connect(mapState, mapDispatch)(MCQArea);
