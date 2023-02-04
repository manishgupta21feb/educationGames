import React from "react";

import RadioButtons from "../../containers/RadioButtonContainer";
import NextQuestion from "../../containers/NextQuestion";
import MCQcomponentContainer from "../../containers/MCQcomponentContainer";


import "./style.scss";

const Interactive = (props) => {
    const { submitButtonPressed, answerAttempt } = props;
    return (
        <>
            <MCQcomponentContainer>
                <RadioButtons />
            </MCQcomponentContainer>
            {submitButtonPressed && answerAttempt ? <NextQuestion /> : null}
        </>
    );
};

export default Interactive;