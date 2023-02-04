import React from "react";
import RadioButtonContainer from "../../containers/RadioButtonContainer";
import MCQAreaContainer from "../../containers/MCQAreaContainer";
import NextButtonContainer from "../../containers/NextButtonContainer";
import "./style.scss";

const BottomInteractive = (props) => {
    return (
        <div className="bottom-interactive investigation">
            <div className="intstruction-area question-heading">
                <p
                    className="instruction-blue-text"
                    dangerouslySetInnerHTML={{
                        __html: props.mainHeading
                    }}
                ></p>
            </div>
            <MCQAreaContainer>
                <RadioButtonContainer />
            </MCQAreaContainer>
            {props.answerAttempted && props.correctAttempt ? (
                <NextButtonContainer />
            ) : null}
        </div>
    );
};

export default BottomInteractive;